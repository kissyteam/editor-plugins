KISSY.add('kg/editor-plugins/1.0.0/lib/resize',["dd","node","util"],function(S ,require, exports, module) {function e(e){this.config=e||{}}var i=require("dd"),r=require("node"),t=require("util");e.prototype={pluginRenderUI:function(e){var n=i.Draggable,o=e.get("statusBarEl"),s=this.config,d=s.direction||["x","y"],a="se-resize";1===d.length&&(a="x"===d[0]?"e-resize":"s-resize");var u=r('<div class="'+e.get("prefixCls")+'editor-resizer" style="cursor: '+a+'"></div>').appendTo(o);e.on("maximizeWindow",function(){u.css("display","none")}),e.on("restoreWindow",function(){u.css("display","")});var c=new n({node:u,groups:!1}),g=0,l=0,f=e.get("el"),p=e.get("el");c.on("dragstart",function(){g=f.height(),l=p.width(),e.fire("resizeStart")}),c.on("drag",function(i){t.inArray("y",d)&&e.set("height",g+i.deltaY),t.inArray("x",d)&&e.set("width",l+i.deltaX),e.fire("resize")}),e.on("destroy",function(){c.destroy(),u.remove()})}},module.exports=e;});