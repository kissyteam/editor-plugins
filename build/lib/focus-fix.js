KISSY.add('kg/editor-plugins/1.0.0/lib/focus-fix',["editor","ua"],function(S ,require, exports, module) {function e(){var e=this;e._focusEditor=c.currentInstance();var t=e._focusEditor;if(n.ie&&t){window.focus(),document.body.focus();var o,i=t.get("document")[0].selection;try{o=i.createRange()}catch(r){o=0}if(o&&o.item&&o.item(0).ownerDocument===t.get("document")[0]){var u=document.body.createTextRange();u.moveToElementText(e.get("el").first()[0]),u.collapse(!0),u.select()}}}function t(){var e=this,t=e._focusEditor;t&&t.focus()}var o=require("editor"),n=require("ua"),c=o.focusManager;module.exports={init:function(o){o.on("beforeVisibleChange",function(t){t.newVal&&e.call(o)}),o.on("hide",function(){t.call(o)})}};});