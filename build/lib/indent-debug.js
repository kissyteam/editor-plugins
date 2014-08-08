/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:58
*/
/*
combined modules:
editor-plugins/lib/indent
*/
KISSY.add('editor-plugins/lib/indent', [
    'editor',
    './indent/cmd',
    './button'
], function (S, require, exports, module) {
    /**
 * @ignore
 * Add indent button.
 * @author yiminghe@gmail.com
 */
    var Editor = require('editor');
    var indexCmd = require('./indent/cmd');
    require('./button');
    function Indent() {
    }
    Indent.prototype = {
        pluginRenderUI: function (editor) {
            indexCmd.init(editor);
            editor.addButton('indent', {
                tooltip: '\u589E\u52A0\u7F29\u8FDB\u91CF',
                listeners: {
                    click: function () {
                        editor.execCommand('indent');
                        editor.focus();
                    }
                },
                mode: Editor.Mode.WYSIWYG_MODE
            });
        }
    };
    module.exports = Indent;
});


