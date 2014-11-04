define('kg/editor-plugins/1.1.6/ordered-list',["./list-utils/btn","./ordered-list/cmd"],function(require, exports, module) {
/**
 * @ignore
 * Add ul/ol button.
 * @author yiminghe@gmail.com
 */

var ListButton = require('./list-utils/btn');
var ListCmd = require('./ordered-list/cmd');

function OrderedList() {
}

OrderedList.prototype = {
    pluginRenderUI: function (editor) {
        ListCmd.init(editor);

        ListButton.init(editor, {
            cmdType: 'insertOrderedList',
            buttonId: 'orderedList',
            menu: {
                width: 75,
                children: [
                    {
                        content: '1,2,3...',
                        value: 'decimal'
                    },
                    {
                        content: 'a,b,c...',
                        value: 'lower-alpha'
                    },
                    {
                        content: 'A,B,C...',
                        value: 'upper-alpha'
                    },
                    // ie 678 not support!
//                        {
//                            content: 'α,β,γ...',
//                            value: 'lower-greek'
//                        },
//
//                        {
//                            content: 'Α,Β,Γ...',
//                            value: 'upper-greek'
//                        },

                    {
                        content: 'i,ii,iii...',
                        value: 'lower-roman'
                    },

                    {
                        content: 'I,II,III...',
                        value: 'upper-roman'
                    }
                ]
            },
            tooltip: '有序列表'
        });
    }
};

module.exports = OrderedList;
});