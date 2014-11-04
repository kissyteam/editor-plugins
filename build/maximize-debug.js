define('kg/editor-plugins/1.1.5/maximize',["./maximize/cmd","./button"],function(require, exports, module) {
/**
 * @ignore
 * Maximize plugin
 * @author yiminghe@gmail.com
 */

var maximizeCmd = require('./maximize/cmd');
require('./button');

var MAXIMIZE_CLASS = 'maximize',
    RESTORE_CLASS = 'restore',
    MAXIMIZE_TIP = '全屏',
    RESTORE_TIP = '取消全屏';

function MaximizePlugin() {

}

MaximizePlugin.prototype = {
    pluginRenderUI: function (editor) {
        maximizeCmd.init(editor);
        editor.addButton('maximize', {
            tooltip: MAXIMIZE_TIP,
            listeners: {
                click: function () {
                    var self = this;
                    var checked = self.get('checked');
                    if (checked) {
                        editor.execCommand('maximizeWindow');
                        self.set('tooltip', RESTORE_TIP);
                        self.set('contentCls', RESTORE_CLASS);
                    } else {
                        editor.execCommand('restoreWindow');
                        self.set('tooltip', MAXIMIZE_TIP);
                        self.set('contentCls', MAXIMIZE_CLASS);
                    }

                    editor.focus();
                }

            },
            checkable: true
        });
    }
};

module.exports = MaximizePlugin;

});