/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 14:00
*/
KISSY.add("editor-plugins/lib/overlay",["editor","overlay","./focus-fix"],function(a,b,c,d){var a=b("editor"),c=b("overlay"),e=b("./focus-fix");d.exports=c.extend({bindUI:function(){e.init(this)}},{ATTRS:{prefixCls:{value:"ks-editor-"},zIndex:{value:a.baseZIndex(a.ZIndexManager.OVERLAY)}}})});
