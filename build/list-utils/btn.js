KISSY.add('kg/editor-plugins/1.0.0/list-utils/btn',["editor","../button","../menubutton"],function(S ,require, exports, module) {var e=require("editor");require("../button"),require("../menubutton"),module.exports={init:function(t,o){var n=o.buttonId,u=o.cmdType,c=o.tooltip,l=t.addButton(n,{elCls:n+"Btn",mode:e.Mode.WYSIWYG_MODE,tooltip:"设置"+c});t.on("selectionChange",function(){var e;(e=t.queryCommandValue(u))?(l.set("checked",!0),a.set("value",e)):l.set("checked",!1)});var a=t.addSelect(n+"Arrow",{tooltip:"选择并设置"+c,mode:e.Mode.WYSIWYG_MODE,menu:o.menu,matchElWidth:!1,elCls:"toolbar-"+n+"ArrowBtn"});a.on("click",function(e){var o=e.target.get("value");l.listValue=o,t.execCommand(u,o),t.focus()}),l.on("click",function(){var e=l.listValue;l.get("checked")&&(e=a.get("value")),t.execCommand(u,e),t.focus()})}};});