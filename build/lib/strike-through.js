/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 14:00
*/
KISSY.add("editor-plugins/lib/strike-through",["./font/ui","./strike-through/cmd","./button"],function(f,a,g,c){function b(){}var d=a("./font/ui"),e=a("./strike-through/cmd");a("./button");b.prototype={pluginRenderUI:function(a){e.init(a);a.addButton("strikeThrough",{cmdType:"strikeThrough",tooltip:"\u5220\u9664\u7ebf"},d.Button)}};c.exports=b});
