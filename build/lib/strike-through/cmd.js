KISSY.add('editor-plugins/lib/strike-through/cmd',["editor","../font/cmd"],function(S ,require, exports, module) {var e=require("editor"),t=require("../font/cmd"),n=new e.Style({element:"del",overrides:[{element:"span",attributes:{style:"text-decoration: line-through;"}},{element:"s"},{element:"strike"}]});module.exports={init:function(e){t.addButtonCmd(e,"strikeThrough",n)}};});