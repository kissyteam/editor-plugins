/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:56
*/
KISSY.add("editor-plugins/lib/dialog","editor,overlay,./focus-fix,dd/plugin/constrain,component/plugin/drag,dom".split(","),function(b,a,c,e){var b=a("editor"),c=a("overlay"),f=a("./focus-fix"),g=a("dd/plugin/constrain"),h=a("component/plugin/drag"),d=a("dom");e.exports=c.Dialog.extend({initializer:function(){this.plug(new h({handlers:[".ks-editor-dialog-header"],plugins:[new g({constrain:window})]}))},bindUI:function(){f.init(this)},show:function(){this.center();var a=this.get("y");if(a-d.scrollTop()>
200){a=d.scrollTop()+200;this.set("y",a)}this.callSuper()}},{ATTRS:{prefixCls:{value:"ks-editor-"},zIndex:{value:b.baseZIndex(b.ZIndexManager.OVERLAY)}}})});
