/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 14:00
*/
/*
combined modules:
editor-plugins/lib/separator
*/
KISSY.add('editor-plugins/lib/separator', ['node'], function (S, require, exports, module) {
    /**
 * @ignore
 * separator for button
 * @author yiminghe@gmail.com
 */
    var $ = require('node');
    function Separator() {
    }
    Separator.prototype = {
        pluginRenderUI: function (editor) {
            $('<span ' + 'class="' + editor.get('prefixCls') + 'editor-toolbar-separator">&nbsp;' + '</span>').appendTo(editor.get('toolBarEl'));
        }
    };
    module.exports = Separator;
});
