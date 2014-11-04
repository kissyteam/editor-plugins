define('kg/editor-plugins/1.1.5/progressbar',["base","util","node"],function(require, exports, module) {
/**
 * @ignore
 * progressbar ui
 * @author yiminghe@gmail.com
 */

var Base = require('base');
var util = require('util');
var $ = require('node');
module.exports = Base.extend({
    destroy: function () {
        var self = this;
        self.detach();
        self.el.remove();
    },
    initializer: function () {
        var self = this,
            h = self.get('height'),
            prefixCls = self.get('prefixCls'),
            el = $(
                util.substitute('<div' +
                    ' class="{prefixCls}editor-progressbar" ' +
                    ' style="width:' +
                    self.get('width') +
                    ';' +
                    'height:' +
                    h +
                    ';"' +
                    '></div>', {prefixCls: prefixCls
                })),
            container = self.get('container'),
            p = $(
                util.substitute('<div style="overflow:hidden;">' +
                    '<div class="{prefixCls}editor-progressbar-inner" style="height:' + (parseInt(h, 10) - 4) + 'px">' +
                    '<div class="{prefixCls}editor-progressbar-inner-bg"></div>' +
                    '</div>' +
                    '</div>', {  prefixCls: prefixCls
                })
            ).appendTo(el),
            title = $('<span class="' + prefixCls + 'editor-progressbar-title"></span>')
                .appendTo(el);
        if (container) {
            el.appendTo(container);
        }
        self.el = el;
        self._title = title;
        self._p = p;
        self.on('afterProgressChange', self._progressChange, self);
        self._progressChange({newVal: self.get('progress')});
    },

    _progressChange: function (ev) {
        var self = this,
            v = ev.newVal;
        self._p.css('width', v + '%');
        self._title.html(v + '%');
    }
}, {
    ATTRS: {
        container: {},
        width: {},
        height: {},
        //0-100
        progress: {
            value: 0
        },
        prefixCls: {
            value: 'ks-'
        }
    }
});
});