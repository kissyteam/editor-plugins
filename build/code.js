KISSY.add('kg/editor-plugins/1.0.0/code',["editor","./button","./dialog-loader"],function(S ,require, exports, module) {function e(){}var o=require("editor");require("./button");var t=require("./dialog-loader");e.prototype={pluginRenderUI:function(e){e.addButton("code",{tooltip:"插入代码",listeners:{click:function(){t.useDialog(e,"code")}},mode:o.Mode.WYSIWYG_MODE})}},module.exports=e;});