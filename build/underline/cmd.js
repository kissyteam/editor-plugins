KISSY.add('kg/editor-plugins/1.0.0/underline/cmd',["editor","../font/cmd"],function(S ,require, exports, module) {var e=require("editor"),t=require("../font/cmd"),n=new e.Style({element:"u",overrides:[{element:"span",attributes:{style:"text-decoration: underline;"}}]});module.exports={init:function(e){t.addButtonCmd(e,"underline",n)}};});