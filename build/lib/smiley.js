KISSY.add('kg/editor-plugins/1.0.0/lib/smiley',["editor","./overlay","./button","node","util"],function(S ,require, exports, module) {function e(){}var t=require("editor"),i=require("./overlay");require("./button");for(var n=require("node"),o=require("util"),s='<div class="{prefixCls}editor-smiley-sprite">',r=0;98>=r;r++)s+='<a href="javascript:void(0)" data-icon="http://a.tbcdn.cn/sys/wangwang/smiley/48x48/'+r+'.gif"></a>';s+="</div>",e.prototype={pluginRenderUI:function(e){var r=e.get("prefixCls");e.addButton("smiley",{tooltip:"插入表情",checkable:!0,listeners:{afterSyncUI:function(){var e=this;e.on("blur",function(){setTimeout(function(){e.smiley&&e.smiley.hide()},150)})},click:function(){var a,l=this,d=l.get("checked");d?((a=l.smiley)||(a=l.smiley=new i({content:o.substitute(s,{prefixCls:r}),focus4e:!1,width:300,elCls:r+"editor-popup",zIndex:t.baseZIndex(t.ZIndexManager.POPUP_MENU),mask:!1}).render(),a.get("el").on("click",function(t){var i,o=n(t.target);if("a"===o.nodeName()&&(i=o.attr("data-icon"))){var s=n('<img alt="" src="'+i+'"/>',e.get("document")[0]);e.insertElement(s)}}),a.on("hide",function(){l.set("checked",!1)})),a.set("align",{node:this.get("el"),points:["bl","tl"],overflow:{adjustX:1,adjustY:1}}),a.show()):l.smiley&&l.smiley.hide()},destroy:function(){this.smiley&&this.smiley.destroy()}},mode:t.Mode.WYSIWYG_MODE})}},module.exports=e;});