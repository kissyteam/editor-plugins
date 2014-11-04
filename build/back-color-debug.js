define('kg/editor-plugins/1.1.7/back-color',["./color/btn","./back-color/cmd"],function(require, exports, module) {
/**
 * @ignore
 * backColor button.
 * @author yiminghe@gmail.com
 */

var Button = require('./color/btn');
var cmd = require('./back-color/cmd');

function BackColor(config) {
    this.config = config || {};
}

BackColor.prototype = {
    pluginRenderUI: function (editor) {
        cmd.init(editor);
        Button.init(editor, {
            defaultColor: 'rgb(255, 217, 102)',
            cmdType: 'backColor',
            tooltip: '背景颜色'
        });
    }
};

module.exports = BackColor;
});