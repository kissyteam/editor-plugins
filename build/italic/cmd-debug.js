define('kg/editor-plugins/1.1.3/italic/cmd',["editor","../font/cmd"],function(require, exports, module) {
/**
 * @ignore
 * italic command.
 * @author yiminghe@gmail.com
 */

var Editor = require('editor');
var Cmd = require('../font/cmd');

var ITALIC_STYLE = new Editor.Style({
    element: 'em',
    overrides: [
        {
            element: 'i'
        },
        {
            element: 'span',
            attributes: {
                style: 'font-style: italic;'
            }
        }
    ]
});

module.exports = {
    init: function (editor) {
        Cmd.addButtonCmd(editor, 'italic', ITALIC_STYLE);
    }
};

});