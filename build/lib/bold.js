/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:55
*/
KISSY.add("editor-plugins/lib/bold",["./font/ui","./bold/cmd","node","./button"],function(h,a,i,d){function c(){}var e=a("./font/ui"),f=a("./bold/cmd"),g=a("node");a("./button");c.prototype={pluginRenderUI:function(b){f.init(b);b.addButton("bold",{cmdType:"bold",tooltip:"\u7c97\u4f53"},e.Button);b.docReady(function(){b.get("document").on("keydown",function(a){a.ctrlKey&&a.keyCode===g.Event.KeyCode.B&&(b.execCommand("bold"),a.preventDefault())})})}};d.exports=c});
