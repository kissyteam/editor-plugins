define('kg/editor-plugins/1.1.3/undo',["editor","./undo/btn","./undo/cmd","./button"],function(require, exports, module) {
/**
 * @ignore
 * undo button
 * @author yiminghe@gmail.com
 */

var Editor = require('editor');
var Btn = require('./undo/btn');
var cmd = require('./undo/cmd');
require('./button');
function Undo() {
}

Undo.prototype = {
    pluginRenderUI: function (editor) {
        // 先 button 绑定事件
        editor.addButton('undo', {
            mode: Editor.Mode.WYSIWYG_MODE,
            tooltip: '撤销',
            editor: editor
        }, Btn.UndoBtn);

        editor.addButton('redo', {
            mode: Editor.Mode.WYSIWYG_MODE,
            tooltip: '重做',
            editor: editor
        }, Btn.RedoBtn);
        cmd.init(editor);
    }
};

module.exports = Undo;

});