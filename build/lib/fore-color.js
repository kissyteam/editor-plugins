/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:57
*/
KISSY.add("editor-plugins/lib/fore-color",["./color/btn","./fore-color/cmd"],function(g,b,h,d){function c(a){this.config=a||{}}var e=b("./color/btn"),f=b("./fore-color/cmd");c.prototype={pluginRenderUI:function(a){f.init(a);e.init(a,{cmdType:"foreColor",defaultColor:"rgb(204, 0, 0)",tooltip:"\u6587\u672c\u989c\u8272"})}};d.exports=c});
