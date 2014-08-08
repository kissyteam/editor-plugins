/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:56
*/
/*
combined modules:
editor-plugins/lib/bold/cmd
*/
KISSY.add('editor-plugins/lib/bold/cmd', [
    'editor',
    '../font/cmd'
], function (S, require, exports, module) {
    /**
 * @ignore
 * bold command.
 * @author yiminghe@gmail.com
 */
    var Editor = require('editor');
    var Cmd = require('../font/cmd');
    var BOLD_STYLE = new Editor.Style({
            element: 'strong',
            overrides: [
                { element: 'b' },
                {
                    element: 'span',
                    attributes: { style: 'font-weight: bold;' }
                }
            ]
        });
    module.exports = {
        init: function (editor) {
            Cmd.addButtonCmd(editor, 'bold', BOLD_STYLE);
        }
    };
});

