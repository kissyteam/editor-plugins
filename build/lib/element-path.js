KISSY.add('editor-plugins/lib/element-path',["editor","node"],function(S ,require, exports, module) {function e(e){var t=this;t.cfg=e,t._cache=[],t._init()}function t(){}var n=require("editor"),i=require("node"),o="editor-element-path";e.prototype={_init:function(){var e=this,t=e.cfg,o=t.editor;e.holder=i("<span>"),e.holder.appendTo(o.get("statusBarEl"),void 0),o.on("selectionChange",e._selectionChange,e),n.Utils.sourceDisable(o,e)},disable:function(){this.holder.css("visibility","hidden")},enable:function(){this.holder.css("visibility","")},_selectionChange:function(e){var t,n,r=this,c=r.cfg,s=c.editor,a=s.get("prefixCls"),l=r.holder,h=e.path,d=h.elements,u=r._cache;for(n=0;n<u.length;n++)u[n].remove();for(r._cache=[],n=0;n<d.length;n++){t=d[n];var f=t.attr("_ke_real_element_type")||t.nodeName(),p=i("<a href=\"javascript('"+f+'\')" class="'+a+o+'">'+f+"</a>");r._cache.push(p),function(e){p.on("click",function(t){t.halt(),s.focus(),setTimeout(function(){s.getSelection().selectElement(e)},50)})}(t),l.prepend(p)}},destroy:function(){this.holder.remove()}},t.prototype={pluginRenderUI:function(t){var n=new e({editor:t});t.on("destroy",function(){n.destroy()})}},module.exports=t;});