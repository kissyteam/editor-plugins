define('kg/editor-plugins/1.1.5/underline/cmd',["editor","../font/cmd"],function(require, exports, module) {
/**
 * @ignore
 * underline command
 * @author yiminghe@gmail.com
 */

var Editor = require('editor');
var Cmd = require('../font/cmd');

var UNDERLINE_STYLE = new Editor.Style({
    element: 'u',
    overrides: [
        {
            element: 'span',
            attributes: {
                style: 'text-decoration: underline;'
            }
        }
    ]
});
module.exports = {
    init: function (editor) {
        Cmd.addButtonCmd(editor, 'underline', UNDERLINE_STYLE);
    }
};

});