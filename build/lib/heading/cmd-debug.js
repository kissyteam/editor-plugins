/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:58
*/
/*
combined modules:
editor-plugins/lib/heading/cmd
*/
KISSY.add('editor-plugins/lib/heading/cmd', ['editor'], function (S, require, exports, module) {
    /**
 * @ignore
 * Adds a heading tag around a selection or insertion point line.
 * Requires the tag-name string to be passed in as a value argument (i.e. "H1", "H6")
 * @author yiminghe@gmail.com
 */
    var Editor = require('editor');
    module.exports = {
        init: function (editor) {
            if (!editor.hasCommand('heading')) {
                editor.addCommand('heading', {
                    exec: function (editor, tag) {
                        var currentValue;
                        editor.execCommand('save');
                        if (tag !== 'p') {
                            currentValue = editor.queryCommandValue('heading');
                        }
                        if (tag === currentValue) {
                            tag = 'p';
                        }
                        new Editor.Style({ element: tag }).apply(editor.get('document')[0]);
                        editor.execCommand('save');
                    }
                });
                var queryCmd = Editor.Utils.getQueryCmd('heading');
                editor.addCommand(queryCmd, {
                    exec: function (editor) {
                        var selection = editor.getSelection();
                        if (selection && !selection.isInvalid) {
                            var startElement = selection.getStartElement();
                            var currentPath = new Editor.ElementPath(startElement);
                            var block = currentPath.block || currentPath.blockLimit;
                            var nodeName = block && block.nodeName() || '';
                            if (nodeName.match(/^h\d$/) || nodeName === 'p') {
                                return nodeName;
                            }
                        }
                    }
                });
            }
        }
    };
});
