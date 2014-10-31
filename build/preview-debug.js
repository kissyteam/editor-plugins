define('kg/editor-plugins/1.1.4/preview',["./button","util"],function(require, exports, module) {
/**
 * @ignore
 * preview for kissy editor
 * @author yiminghe@gmail.com
 */

var win = window;
require('./button');
function Preview() {
}
var util = require('util');
(Preview.prototype = {
    pluginRenderUI: function (editor) {
        editor.addButton('preview', {
            tooltip: '预览',
            listeners: {
                click: function () {
                    var iWidth, iHeight, iLeft;
                    try {
                        var screen = win.screen;
                        iHeight = Math.round(screen.height * 0.7);
                        iLeft = Math.round(screen.width * 0.1);
                        iWidth = Math.round(screen.width * 0.8);
                    } catch (e) {
                        iWidth = 640; // 800 * 0.8,
                        iHeight = 420; // 600 * 0.7,
                        iLeft = 80;	// (800 - 0.8 * 800) /2 = 800 * 0.1.
                    }
                    var sHTML = util.substitute(editor.getDocHtml(), {
                            title: '预览'
                        }),
                        sOpenUrl = '',
                        oWindow = win.open(sOpenUrl,
                            // 每次都弹出新窗口
                            '',
                                'toolbar=yes,' +
                                'location=no,' +
                                'status=yes,' +
                                'menubar=yes,' +
                                'scrollbars=yes,' +
                                'resizable=yes,' +
                                'width=' +
                                iWidth +
                                ',height=' + iHeight + ',left=' + iLeft), winDoc = oWindow.document;
                    winDoc.open();
                    winDoc.write(sHTML);
                    winDoc.close();
                    //ie 重新显示
                    oWindow.focus();
                }

            }
        });
    }
});

module.exports = Preview;


});