define('kg/editor-plugins/1.1.3/indent',["editor","./indent/cmd","./button"],function(require, exports, module) {
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

(Indent.prototype = {
    pluginRenderUI: function (editor) {
        indexCmd.init(editor);
        editor.addButton('indent', {
            tooltip: '增加缩进量',
            listeners: {
                click: function () {
                    editor.execCommand('indent');
                    editor.focus();
                }
            },
            mode: Editor.Mode.WYSIWYG_MODE
        });
    }
});

module.exports = Indent;

});