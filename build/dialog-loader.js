define('kg/editor-plugins/1.1.3/dialog-loader',["editor","overlay","dom","ua"],function(require, exports, module) {var o,e=require("editor"),i=require("overlay"),n=require("dom"),d=require("ua"),r={loading:function(r){o||(o=new i({x:0,width:6===d.ie?n.docWidth():"100%",y:0,zIndex:e.baseZIndex(e.ZIndexManager.LOADING),prefixCls:r+"editor-",elCls:r+"editor-global-loading"})),o.set("height",n.docHeight()),o.show(),o.loading()},unloading:function(){o.hide()}};module.exports={useDialog:function(o,e,i,n){o.focus();var d=o.get("prefixCls");return o.getControl(e+"/dialog")?void setTimeout(function(){o.showDialog(e,n)},0):(r.loading(d),void require(["./"+e+"/dialog"],function(d){r.unloading(),o.addControl(e+"/dialog",new d(o,i)),o.showDialog(e,n)}))}};});