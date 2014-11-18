define('kg/editor-plugins/1.1.10/indent/cmd',["../dent-cmd"],function(require, exports, module) {
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