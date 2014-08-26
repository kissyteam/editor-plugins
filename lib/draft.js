/**
 * @ignore
 * draft for kissy editor
 * @author yiminghe@gmail.com
 */

var Editor = require('editor');
var Json = require('json');
var Event = require('event/dom');
/*global localStorage:true*/
var localStorage = require('./local-storage');
var Overlay = require('overlay');
var MenuButton = require('./menubutton');

var util = require('util');
var $ = require('node'),
    LIMIT = 5,
    INTERVAL = 5,
    DRAFT_SAVE = 'ks-editor-draft-save20110503';

function padding(n, l, p) {
    n += '';
    while (n.length < l) {
        n = p + n;
    }
    return n;
}

function date(d) {
    if (typeof d === 'number') {
        d = new Date(d);
    }
    if (d instanceof Date) {
        return [
            d.getFullYear(),
            '-',
            padding(d.getMonth() + 1, 2, '0'),
            '-',
            padding(d.getDate(), 2, '0'),
            ' ',
            //'&nbsp;',
            padding(d.getHours(), 2, '0'),
            ':',
            padding(d.getMinutes(), 2, '0'),
            ':',
            padding(d.getSeconds(), 2, '0')
            //'&nbsp;',
            //'&nbsp;'
        ].join('');
    }
    else {
        return d;
    }
}

function Draft(editor, config) {
    this.editor = editor;
    this.config = config;
    this._init();
}

var addRes = Editor.Utils.addRes,
    destroyRes = Editor.Utils.destroyRes;

util.augment(Draft, {
    _getSaveKey: function () {
        var self = this,
            cfg = self.config;
        return cfg.saveKey || DRAFT_SAVE;
    },


    // parse 历史记录延后，点击 select 时才开始 parse
    _getDrafts: function () {
        var self = this;
        if (!self.drafts) {
            var str = localStorage.getItem(self._getSaveKey()),
                drafts = [];
            if (str) {
                // 原生 localStorage 必须串行化
                drafts = (localStorage === window.localStorage) ?
                    Json.parse(util.urlDecode(str)) : str;
            }
            self.drafts = drafts;
        }
        return self.drafts;
    },

    _init: function () {
        var self = this,
            editor = self.editor,
            prefixCls = editor.get('prefixCls'),
            statusbar = editor.get('statusBarEl'),
            cfg = this.config;
        cfg.limit = cfg.limit || LIMIT;
        cfg.interval = cfg.interval || INTERVAL;
        var holder = $(
                '<div class="' + prefixCls + 'editor-draft">' +
                '<span class="' + prefixCls + 'editor-draft-title">' +
                '内容正文每' +
                cfg.interval + '分钟自动保存一次。' +
                '</span>' +
                '</div>').appendTo(statusbar);
        self.timeTip = $('<span class="' + prefixCls + 'editor-draft-time"/>')
            .appendTo(holder);

        var save = $(
                util.substitute('<a href="#" ' +
                    'onclick="return false;" ' +
                    'class="{prefixCls}editor-button ' +
                    '{prefixCls}editor-draft-save-btn ks-inline-block" ' +
                    'style="' +
                    'vertical-align:middle;' +
                    'padding:1px 9px;' +
                    '">' +
                    '<span class="{prefixCls}editor-draft-save">' +
                    '</span>' +
                    '<span>立即保存</span>' +
                    '</a>', { prefixCls: prefixCls
                })).unselectable(undefined).appendTo(holder),
            versions = new MenuButton({
                render: holder,
                collapseOnClick: true,
                width: '100px',
                prefixCls: prefixCls + 'editor-',
                menu: {
                    width: '225px',
                    align: {
                        points: ['tr', 'br']
                    }
                },
                matchElWidth: false,
                content: '恢复编辑历史'
            }).render();
        self.versions = versions;
        // 点击才开始 parse
        versions.on('beforeCollapsedChange', function beforeCollapsedChange(e) {
            if (!e.newValue) {
                versions.detach('beforeCollapsedChange', beforeCollapsedChange);
                self.sync();
            }
        });
        save.on('click', function (ev) {
            self.save(false);
            //如果不阻止，部分页面在ie6下会莫名奇妙把其他input的值丢掉！
            ev.halt();
        });

        addRes.call(self, save);

        /*
         监控form提交，每次提交前保存一次，防止出错
         */
        if (editor.get('textarea')[0].form) {
            (function () {
                var textarea = editor.get('textarea'),
                    form = textarea[0].form;

                function saveF() {
                    self.save(true);
                }

                Event.on(form, 'submit', saveF);
                addRes.call(self, function () {
                    Event.remove(form, 'submit', saveF);
                });

            })();
        }

        var timer = setInterval(function () {
            self.save(true);
        }, self.config.interval * 60 * 1000);

        addRes.call(self, function () {
            clearInterval(timer);
        });

        versions.on('click', self.recover, self);
        addRes.call(self, versions);
        self.holder = holder;
        if (cfg.helpHtml) {
            var help = $('<a ' +
                'tabindex="0" ' +
                'hidefocus="hidefocus" ' +
                'class="' + prefixCls + 'editor-draft-help" ' +
                'title="点击查看帮助" ' +
                'href="javascript:void(\'点击查看帮助 \')">点击查看帮助</a>')
                .unselectable(undefined)
                .appendTo(holder);

            help.on('click', function () {
                help[0].focus();
                if (self.helpPopup && self.helpPopup.get('visible')) {
                    self.helpPopup.hide();
                } else {
                    self._prepareHelp();
                }
            });
            help.on('blur', function () {
                if (self.helpPopup) {
                    self.helpPopup.hide();
                }
            });
            self.helpBtn = help;
            addRes.call(self, help);
            Editor.Utils.lazyRun(self, '_prepareHelp', '_realHelp');
        }
        addRes.call(self, holder);
    },
    _prepareHelp: function () {
        var self = this,
            editor = self.editor,
            prefixCls = editor.get('prefixCls'),
            cfg = self.config,
            draftCfg = cfg,
            help = $(draftCfg.helpHtml || '');
        var arrowCss = 'height:0;' +
            'position:absolute;' +
            'font-size:0;' +
            'width:0;' +
            'border:8px #000 solid;' +
            'border-color:#000 transparent transparent transparent;' +
            'border-style:solid dashed dashed dashed;';
        var arrow = $('<div style="' +
            arrowCss +
            'border-top-color:#CED5E0;' +
            '">' +
            '<div style="' +
            arrowCss +
            'left:-8px;' +
            'top:-10px;' +
            'border-top-color:white;' +
            '">' +
            '</div>' +
            '</div>');
        help.append(arrow);
        help.css({
            border: '1px solid #ACB4BE',
            'text-align': 'left'
        });
        self.helpPopup = new Overlay({
            prefixCls: prefixCls + 'editor-',
            width: help.outerWidth() + 'px',
            zIndex: Editor.baseZIndex(Editor.ZIndexManager.OVERLAY),
            mask: false
        }).render();
        self.helpPopup.get('contentEl').append(help);
        self.helpPopup.get('el').css({
            'border': 'none',
            overflow: 'visible'
        });
        self.helpPopup.arrow = arrow;
    },
    _realHelp: function () {
        var win = this.helpPopup,
            helpBtn = this.helpBtn,
            arrow = win.arrow;
        win.show();
        var off = helpBtn.offset();
        win.get('el').offset({
            left: (off.left - win.get('el').width()) + 17,
            top: (off.top - win.get('el').height()) - 7
        });
        arrow.offset({
            left: off.left - 2,
            top: off.top - 8
        });
    },
    disable: function () {
        this.holder.css('visibility', 'hidden');
    },
    enable: function () {
        this.holder.css('visibility', '');
    },
    sync: function () {
        var self = this,
            i,
            timeTip = self.timeTip,
            versions = self.versions,
            drafts = self._getDrafts(),
            draft, tip;

        if (drafts.length > self.config.limit) {
            drafts.splice(0, drafts.length - self.config.limit);
        }

        versions.removeItems(true);

        for (i = 0; i < drafts.length; i++) {
            draft = drafts[i];
            tip = (draft.auto ? '自动' : '手动') + '保存于 : ' + date(draft.date);
            versions.addItem({
                content: tip,
                value: i
            });
        }

        if (!drafts.length) {
            versions.addItem({
                disabled: true,
                content: '尚无历史',
                value: ''
            });
        }

        timeTip.html(tip);
        localStorage.setItem(self._getSaveKey(),
            (localStorage === window.localStorage) ?
                encodeURIComponent(Json.stringify(drafts))
                : drafts);
    },

    save: function (auto) {
        var self = this,
            drafts = self._getDrafts(),
            editor = self.editor,
        //不使用rawdata
        //undo 只需获得可视区域内代码
        //可视区域内代码！= 最终代码
        //代码模式也要支持草稿功能
        //统一获得最终代码
            data = editor.getFormatData();

        //如果当前内容为空，不保存版本
        if (!data) {
            return;
        }

        if (drafts[drafts.length - 1] &&
            data === drafts[drafts.length - 1].content) {
            drafts.length -= 1;
        }
        self.drafts = drafts.concat({
            content: data,
            date: new Date().getTime(),
            auto: auto
        });
        self.sync();
    },

    recover: function (ev) {
        var self = this,
            editor = self.editor,
            drafts = self._getDrafts(),
            v = ev.target.get('value');
        if (window.confirm('确认恢复 ' + date(drafts[v].date) + ' 的编辑历史？')) {
            editor.execCommand('save');
            editor.setData(drafts[v].content);
            editor.execCommand('save');
        }
        ev.halt();
    },

    destroy: function () {
        destroyRes.call(this);
    }
});

function init(editor, config) {
    var d = new Draft(editor, config);
    editor.on('destroy', function () {
        d.destroy();
    });
}

function DraftPlugin(config) {
    this.config = config || {};
}

util.augment(DraftPlugin, {
    pluginRenderUI: function (editor) {
        var config = this.config;
        if (localStorage.ready) {
            localStorage.ready(function () {
                init(editor, config);
            });
        } else {
            init(editor, config);
        }
    }
});

module.exports = DraftPlugin;