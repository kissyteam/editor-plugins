KISSY.add('editor-plugins/lib/indent/cmd',["../dent-cmd"],function(S ,require, exports, module) {
/**
 * @ignore
 * Add indent and outdent command identifier for KISSY Editor.
 * @author yiminghe@gmail.com
 */

var dentUtils = require('../dent-cmd');

var addCommand = dentUtils.addCommand;

module.exports = {
    init: function (editor) {
        addCommand(editor, 'indent');
    }
};
});