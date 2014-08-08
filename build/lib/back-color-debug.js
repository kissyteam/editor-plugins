/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:55
*/
/*
combined modules:
editor-plugins/lib/back-color
*/
KISSY.add('editor-plugins/lib/back-color', [
    './color/btn',
    './back-color/cmd'
], function (S, require, exports, module) {
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
                tooltip: '\u80CC\u666F\u989C\u8272'
            });
        }
    };
    module.exports = BackColor;
});

