KISSY.add('editor-plugins/lib/dialog-loader',["editor","overlay","dom","ua"],function(S ,require, exports, module) {var i,o=require("editor"),e=require("overlay"),n=require("dom"),d=require("ua"),r={loading:function(r){i||(i=new e({x:0,width:6===d.ie?n.docWidth():"100%",y:0,zIndex:o.baseZIndex(o.ZIndexManager.LOADING),prefixCls:r+"editor-",elCls:r+"editor-global-loading"})),i.set("height",n.docHeight()),i.show(),i.loading()},unloading:function(){i.hide()}};module.exports={useDialog:function(i,o,e,n){i.focus();var d=i.get("prefixCls");return i.getControl(o+"/dialog")?void setTimeout(function(){i.showDialog(o,n)},0):(r.loading(d),void require(["editor-plugins/lib/"+o+"/dialog"],function(d){r.unloading(),i.addControl(o+"/dialog",new d(i,e)),i.showDialog(o,n)}))}};});