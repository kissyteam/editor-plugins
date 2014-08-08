/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:57
*/
/*
combined modules:
editor-plugins/lib/font-size/cmd
*/
KISSY.add('editor-plugins/lib/font-size/cmd', ['../font/cmd'], function (S, require, exports, module) {
    /**
 * @ignore
 * fontSize command.
 * @author yiminghe@gmail.com
 */
    var Cmd = require('../font/cmd');
    var fontSizeStyle = {
            element: 'span',
            styles: { 'font-size': '#(value)' },
            overrides: [{
                    element: 'font',
                    attributes: { 'size': null }
                }]
        };
    module.exports = {
        init: function (editor) {
            Cmd.addSelectCmd(editor, 'fontSize', fontSizeStyle);
        }
    };
});
