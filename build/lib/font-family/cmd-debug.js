KISSY.add('kg/editor-plugins/lib/1.0.0/font-family/cmd',["../font/cmd"],function(S ,require, exports, module) {
/**
 * @ignore
 * fontFamily command.
 * @author yiminghe@gmail.com
 */

var Cmd = require('../font/cmd');

var fontFamilyStyle = {
    element: 'span',
    styles: {
        'font-family': '#(value)'
    },
    overrides: [
        {
            element: 'font',
            attributes: {
                'face': null
            }
        }
    ]
};

module.exports = {
    init: function (editor) {
        Cmd.addSelectCmd(editor, 'fontFamily', fontFamilyStyle);
    }
};
});