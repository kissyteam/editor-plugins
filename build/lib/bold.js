KISSY.add('editor-plugins/lib/bold',["./font/ui","./bold/cmd","node","./button"],function(S ,require, exports, module) {function e(){}var o=require("./font/ui"),n=require("./bold/cmd"),t=require("node");require("./button"),e.prototype={pluginRenderUI:function(e){n.init(e),e.addButton("bold",{cmdType:"bold",tooltip:"粗体"},o.Button),e.docReady(function(){e.get("document").on("keydown",function(o){o.ctrlKey&&o.keyCode===t.Event.KeyCode.B&&(e.execCommand("bold"),o.preventDefault())})})}},module.exports=e;});