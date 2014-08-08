/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 14:00
*/
/*
combined modules:
editor-plugins/lib/page-break
*/
KISSY.add('editor-plugins/lib/page-break', [
    'editor',
    './fake-objects',
    './button',
    'node'
], function (S, require, exports, module) {
    /**
 * @ignore
 * pagebreak functionality
 * @author yiminghe@gmail.com
 */
    var Editor = require('editor');
    var fakeObjects = require('./fake-objects');
    require('./button');
    var $ = require('node'), CLS = 'ke_pagebreak', TYPE = 'div', PAGE_BREAK_MARKUP = '<div' + ' style="page-break-after: always; ">' + '<span style="DISPLAY:none">&nbsp;</span>' + '</div>';
    function PageBreak() {
    }
    PageBreak.prototype = {
        pluginRenderUI: function (editor) {
            fakeObjects.init(editor);
            var dataProcessor = editor.htmlDataProcessor, dataFilter = dataProcessor && dataProcessor.dataFilter;
            dataFilter.addRules({
                tags: {
                    div: function (element) {
                        var style = element.getAttribute('style'), child;
                        if (style) {
                            var childNodes = element.childNodes;
                            for (var i = 0; i < childNodes.length; i++) {
                                if (childNodes[i].nodeType === 1) {
                                    child = childNodes[i];
                                }
                            }
                        }
                        var childStyle = child && child.nodeName === 'span' && child.getAttribute('style');
                        if (childStyle && /page-break-after\s*:\s*always/i.test(style) && /display\s*:\s*none/i.test(childStyle)) {
                            return dataProcessor.createFakeParserElement(element, CLS, TYPE);
                        }
                        return undefined;
                    }
                }
            });
            editor.addButton('pageBreak', {
                tooltip: '\u5206\u9875',
                listeners: {
                    click: function () {
                        var real = $(PAGE_BREAK_MARKUP, editor.get('document')[0]),
                            //不可缩放，也不用
                            substitute = editor.createFakeElement(real, CLS, TYPE, false, PAGE_BREAK_MARKUP);
                        editor.focus();
                        var sel = editor.getSelection(), range = sel && sel.getRanges()[0];
                        if (!range) {
                            return;
                        }
                        editor.execCommand('save');
                        var start = range.startContainer, pre = start;
                        while (start.nodeName() !== 'body') {
                            pre = start;
                            start = start.parent();
                        }
                        range.collapse(true);
                        range.splitElement(pre);
                        substitute.insertAfter(pre);
                        editor.execCommand('save');
                    }
                },
                mode: Editor.Mode.WYSIWYG_MODE
            });
        }
    };
    module.exports = PageBreak;
});



