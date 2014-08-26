KISSY.add('kg/editor-plugins/1.1.0/code',["editor","./button","./dialog-loader"],function(S ,require, exports, module) {
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
            tooltip: '插入代码',
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