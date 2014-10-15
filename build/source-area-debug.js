define('kg/editor-plugins/1.1.3/source-area',["editor","./button"],function(require, exports, module) {
/**
 * @ignore
 * source editor for kissy editor
 * @author yiminghe@gmail.com
 */

var Editor = require('editor');
require('./button');
var SOURCE_MODE = Editor.Mode.SOURCE_MODE ,
    WYSIWYG_MODE = Editor.Mode.WYSIWYG_MODE;

function SourceArea() {
}

SourceArea.prototype = {
    pluginRenderUI: function (editor) {
        editor.addButton('sourceArea', {
            tooltip: '源码',
            listeners: {
                afterSyncUI: function () {
                    var self = this;
                    editor.on('wysiwygMode', function () {
                        self.set('checked', false);
                    });
                    editor.on('sourceMode', function () {
                        self.set('checked', true);
                    });

                },
                click: function () {
                    var self = this;
                    var checked = self.get('checked');
                    if (checked) {
                        editor.set('mode', SOURCE_MODE);
                    } else {
                        editor.set('mode', WYSIWYG_MODE);
                    }
                }
            },
            checkable: true
        });
    }
};

module.exports = SourceArea;

});