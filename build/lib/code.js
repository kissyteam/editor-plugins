/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:56
*/
KISSY.add("editor-plugins/lib/code",["editor","./button","./dialog-loader"],function(f,a,g,c){function b(){}var d=a("editor");a("./button");var e=a("./dialog-loader");b.prototype={pluginRenderUI:function(a){a.addButton("code",{tooltip:"\u63d2\u5165\u4ee3\u7801",listeners:{click:function(){e.useDialog(a,"code")}},mode:d.Mode.WYSIWYG_MODE})}};c.exports=b});
