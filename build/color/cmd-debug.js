define('kg/editor-plugins/1.1.3/color/cmd',["editor"],function(require, exports, module) {
/**
 * @ignore
 * color command.
 * @author yiminghe@gmail.com
 */

var Editor = require('editor');

function applyColor(editor, c, styles) {
    var doc = editor.get('document')[0];
    editor.execCommand('save');
    if (c) {
        new Editor.Style(styles, {
            color: c
        }).apply(doc);
    } else {
        // Value 'inherit'  is treated as a wildcard,
        // which will match any value.
        //清除已设格式
        new Editor.Style(styles, {
            color: 'inherit'
        }).remove(doc);
    }
    editor.execCommand('save');
}

module.exports = {
    applyColor: applyColor
};
});