/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:56
*/
KISSY.add("editor-plugins/lib/dialog-loader",["editor","overlay","dom","ua"],function(j,c,k,f){var e=c("editor"),h=c("overlay"),d=c("dom"),i=c("ua"),a,g={loading:function(b){a||(a=new h({x:0,width:6===i.ie?d.docWidth():"100%",y:0,zIndex:e.baseZIndex(e.ZIndexManager.LOADING),prefixCls:b+"editor-",elCls:b+"editor-global-loading"}));a.set("height",d.docHeight());a.show();a.loading()},unloading:function(){a.hide()}};f.exports={useDialog:function(b,a,e,d){b.focus();var f=b.get("prefixCls");b.getControl(a+"/dialog")?
setTimeout(function(){b.showDialog(a,d)},0):(g.loading(f),c(["editor-plugins/lib/"+a+"/dialog"],function(c){g.unloading();b.addControl(a+"/dialog",new c(b,e));b.showDialog(a,d)}))}}});
