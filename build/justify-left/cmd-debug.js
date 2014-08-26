KISSY.add('kg/editor-plugins/1.1.0/justify-left/cmd',["../justify-cmd"],function(S ,require, exports, module) {
/**
 * @ignore
 * Add justifyCenter command identifier for Editor.
 * @author yiminghe@gmail.com
 */

var justifyUtils = require('../justify-cmd');
module.exports = {
    init: function (editor) {
        justifyUtils.addCommand(editor, 'justifyLeft', 'left');
    }
};

});