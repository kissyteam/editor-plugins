/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:56
*/
/*
combined modules:
editor-plugins/lib/code
*/
KISSY.add('editor-plugins/lib/code', [
    'editor',
    './button',
    './dialog-loader'
], function (S, require, exports, module) {
    /**
 * @ignore
 * insert program code
 * @author yiminghe@gmail.com
 */
    var Editor = require('editor');
    require('./button');
    var DialogLoader = require('./dialog-loader');
    function CodePlugin() {
    }
    CodePlugin.prototype = {
        pluginRenderUI: function (editor) {
            editor.addButton('code', {
                tooltip: '\u63D2\u5165\u4EE3\u7801',
                listeners: {
                    click: function () {
                        DialogLoader.useDialog(editor, 'code');
                    }
                },
                mode: Editor.Mode.WYSIWYG_MODE
            });
        }
    };
    module.exports = CodePlugin;
});


