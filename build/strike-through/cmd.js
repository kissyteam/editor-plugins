define('kg/editor-plugins/1.1.3/strike-through/cmd',["editor","../font/cmd"],function(require, exports, module) {var e=require("editor"),t=require("../font/cmd"),n=new e.Style({element:"del",overrides:[{element:"span",attributes:{style:"text-decoration: line-through;"}},{element:"s"},{element:"strike"}]});module.exports={init:function(e){t.addButtonCmd(e,"strikeThrough",n)}};});