define('kg/editor-plugins/1.1.3/menubutton',["editor","util","menubutton"],function(require, exports, module) {var e=require("editor"),r=require("util"),t=require("menubutton");e.prototype.addSelect=function(n,o,d){d=d||t.Select;var i=this,l=i.get("prefixCls")+"editor-";o&&(o.editor=i,o.menu&&(o.menu.zIndex=e.baseZIndex(e.ZIndexManager.SELECT)),o.elCls&&(o.elCls=l+o.elCls));var s=new d(r.mix({render:i.get("toolBarEl"),prefixCls:l},o)).render();return o.mode===e.Mode.WYSIWYG_MODE&&(i.on("wysiwygMode",function(){s.set("disabled",!1)}),i.on("sourceMode",function(){s.set("disabled",!0)})),i.addControl(n+"/select",s),s},module.exports=t;});