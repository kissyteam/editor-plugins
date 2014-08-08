/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:57
*/
/*
combined modules:
editor-plugins/lib/flash-common/base-class
*/
KISSY.add('editor-plugins/lib/flash-common/base-class', [
    './utils',
    'base',
    'editor',
    'node',
    'ua',
    'util',
    '../dialog-loader',
    '../bubble',
    '../contextmenu'
], function (S, require, exports, module) {
    /**
 * @ignore
 * BaseClass for Flash Based plugin.
 * @author yiminghe@gmail.com
 */
    var flashUtils = require('./utils');
    var Base = require('base');
    var Editor = require('editor');
    var $ = require('node');
    var UA = require('ua');
    var util = require('util');
    var DialogLoader = require('../dialog-loader');
    require('../bubble');
    require('../contextmenu');
    var tipHTML = ' <a ' + 'class="{prefixCls}editor-bubble-url" ' + 'target="_blank" ' + 'href="#">{label}</a>   |   ' + ' <span class="{prefixCls}editor-bubble-link {prefixCls}editor-bubble-change">\u7F16\u8F91</span>   |   ' + ' <span class="{prefixCls}editor-bubble-link {prefixCls}editor-bubble-remove">\u5220\u9664</span>';
    module.exports = Base.extend({
        initializer: function () {
            var self = this, cls = self.get('cls'), editor = self.get('editor'), prefixCls = editor.get('prefixCls'), children = [], bubbleId = self.get('bubbleId'), contextMenuId = self.get('contextMenuId'), contextMenuHandlers = self.get('contextMenuHandlers');
            util.each(contextMenuHandlers, function (h, content) {
                children.push({ content: content });
            });
            editor.addContextMenu(contextMenuId, '.' + cls, {
                width: '120px',
                children: children,
                listeners: {
                    click: function (e) {
                        var content = e.target.get('content');
                        if (contextMenuHandlers[content]) {
                            contextMenuHandlers[content].call(this);
                        }
                    }
                }
            });
            editor.addBubble(bubbleId, function (el) {
                return el.hasClass(cls, undefined) && el;
            }, {
                listeners: {
                    afterRenderUI: // 注册泡泡，selectionChange时检测
                    function () {
                        var bubble = this, el = bubble.get('contentEl');
                        el.html(util.substitute(tipHTML, {
                            label: self.get('label'),
                            prefixCls: prefixCls
                        }));
                        var tipUrlEl = el.one('.' + prefixCls + 'editor-bubble-url'), tipChangeEl = el.one('.' + prefixCls + 'editor-bubble-change'), tipRemoveEl = el.one('.' + prefixCls + 'editor-bubble-remove');    // ie focus not lose
                        // ie focus not lose
                        Editor.Utils.preventFocus(el);
                        tipChangeEl.on('click', function (ev) {
                            // 回调show，传入选中元素
                            self.show(bubble.get('editorSelectedEl'));
                            ev.halt();
                        });
                        tipRemoveEl.on('click', function (ev) {
                            // chrome remove 后会没有焦点
                            if (UA.webkit) {
                                var r = editor.getSelection().getRanges(), r0 = r && r[0];
                                if (r0) {
                                    r0.collapse(true);
                                    r0.select();
                                }
                            }
                            bubble.get('editorSelectedEl').remove();
                            bubble.hide();
                            editor.notifySelectionChange();
                            ev.halt();
                        });    /*
                         位置变化，在显示前就设置内容，防止ie6 iframe遮罩不能正确大小
                         */
                        /*
                         位置变化，在显示前就设置内容，防止ie6 iframe遮罩不能正确大小
                         */
                        bubble.on('show', function () {
                            var a = bubble.get('editorSelectedEl');
                            if (a) {
                                self._updateTip(tipUrlEl, a);
                            }
                        });
                    }
                }
            });
            editor.docReady(function () {
                //注册双击，双击时检测
                editor.get('document').on('dblclick', self._dbClick, self);
            });
        },
        _getFlashUrl: function (r) {
            return flashUtils.getUrl(r);
        },
        // 更新泡泡弹出的界面，子类覆盖
        _updateTip: function (tipUrlElEl, selectedFlash) {
            var self = this, editor = self.get('editor'), r = editor.restoreRealElement(selectedFlash);
            if (!r) {
                return;
            }
            var url = self._getFlashUrl(r);
            tipUrlElEl.attr('href', url);
        },
        //根据图片标志触发本插件应用
        _dbClick: function (ev) {
            var self = this, t = $(ev.target);
            if (t.nodeName() === 'img' && t.hasClass(self.get('cls'), undefined)) {
                self.show(t);
                ev.halt();
            }
        },
        show: function (selectedEl) {
            var self = this, editor = self.get('editor');
            DialogLoader.useDialog(editor, self.get('type'), self.get('pluginConfig'), selectedEl);
        }
    }, {
        ATTRS: {
            cls: {},
            type: {},
            label: { value: '\u5728\u65B0\u7A97\u53E3\u67E5\u770B' },
            bubbleId: {},
            contextMenuId: {},
            contextMenuHandlers: {}
        }
    });
});








