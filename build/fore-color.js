define('kg/editor-plugins/1.1.3/fore-color',["./color/btn","./fore-color/cmd"],function(require, exports, module) {function o(o){this.config=o||{}}var r=require("./color/btn"),e=require("./fore-color/cmd");o.prototype={pluginRenderUI:function(o){e.init(o),r.init(o,{cmdType:"foreColor",defaultColor:"rgb(204, 0, 0)",tooltip:"文本颜色"})}},module.exports=o;});