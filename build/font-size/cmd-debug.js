define('kg/editor-plugins/1.1.6/font-size/cmd',["../font/cmd"],function(require, exports, module) {
/**
 * @ignore
 * fontSize command.
 * @author yiminghe@gmail.com
 */
var Cmd = require('../font/cmd');

var fontSizeStyle = {
    element: 'span',
    styles: {
        'font-size': '#(value)'
    },
    overrides: [
        {
            element: 'font',
            attributes: {
                'size': null
            }
        }
    ]
};

module.exports = {
    init: function (editor) {
        Cmd.addSelectCmd(editor, 'fontSize', fontSizeStyle);
    }
};
});