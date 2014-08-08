/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:59
*/
/*
combined modules:
editor-plugins/lib/outdent/cmd
*/
KISSY.add('editor-plugins/lib/outdent/cmd', [
    'editor',
    '../dent-cmd'
], function (S, require, exports, module) {
    /**
 * @ignore
 * Add indent and outdent command identifier for KISSY Editor.
 * @author yiminghe@gmail.com
 */
    var Editor = require('editor');
    var dentUtils = require('../dent-cmd');
    var addCommand = dentUtils.addCommand;
    var checkOutdentActive = dentUtils.checkOutdentActive;
    module.exports = {
        init: function (editor) {
            addCommand(editor, 'outdent');
            var queryCmd = Editor.Utils.getQueryCmd('outdent');
            if (!editor.hasCommand(queryCmd)) {
                editor.addCommand(queryCmd, {
                    exec: function (editor) {
                        var selection = editor.getSelection();
                        if (selection && !selection.isInvalid) {
                            var startElement = selection.getStartElement();
                            var elementPath = new Editor.ElementPath(startElement);
                            return checkOutdentActive(elementPath);
                        }
                    }
                });
            }
        }
    };
});

