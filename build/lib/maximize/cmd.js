KISSY.add('kg/editor-plugins/1.0.0/lib/maximize/cmd',["editor","event/dom","util","ua","node","dom"],function(S ,require, exports, module) {function e(e){this.editor=e}var t,i=require("editor"),o=require("event/dom"),r=require("util"),s=require("ua"),a=s.ie,n=document,d=require("node"),l=require("dom"),f="editor-toolbar-padding",c=function(){t||(t=d('<iframe  style="position:absolute;top:-9999px;left:-9999px;" frameborder="0">').prependTo(n.body,void 0))};r.augment(e,{restoreWindow:function(){var e=this,t=e.editor;t.fire("beforeRestoreWindow")!==!1&&e._resize&&(o.remove(window,"resize",e._resize),e._resize.stop(),e._resize=0,e._saveEditorStatus(),e._restoreState(),setTimeout(function(){e._restoreEditorStatus(),t.notifySelectionChange(),t.fire("afterRestoreWindow")},30))},_restoreState:function(){var e=this,i=e.editor,o=i.get("textarea"),r=e._savedParents;if(r){for(var s=0;s<r.length;s++){var d=r[s];d.el.css("position",d.position)}e._savedParents=null}o.parent().css({height:e.iframeHeight}),o.css({height:e.iframeHeight}),l.css(n.body,{width:"",height:"",overflow:""}),n.documentElement.style.overflow="";var c=i.get("el")[0].style;c.position="static",c.width=e.editorElWidth,t.css({left:"-99999px",top:"-99999px"}),window.scrollTo(e.scrollLeft,e.scrollTop),8>a&&i.get("toolBarEl").removeClass(i.get("prefixCls")+f,void 0)},_saveSate:function(){var e=this,t=e.editor,i=[],o=t.get("el");e.iframeHeight=t.get("textarea").parent().style("height"),e.editorElWidth=o.style("width"),e.scrollLeft=l.scrollLeft(),e.scrollTop=l.scrollTop(),window.scrollTo(0,0);for(var r=o.parent();r;){var s=r.css("position");"static"!==s&&(i.push({el:r,position:s}),r.css("position","static")),r=r.parent()}e._savedParents=i,8>a&&t.get("toolBarEl").addClass(t.get("prefixCls")+f,void 0)},_saveEditorStatus:function(){var e=this,t=e.editor;if(e.savedRanges=null,s.gecko&&t.__iframeFocus){var i=t.getSelection();e.savedRanges=i&&i.getRanges()}},_restoreEditorStatus:function(){var e=this,t=e.editor,i=t.getSelection(),o=e.savedRanges;if(s.gecko&&t.activateGecko(),o&&i&&i.selectRanges(o),t.__iframeFocus&&i){var r=i.getStartElement();r&&r.scrollIntoView(void 0,{alignWithTop:!1,allowHorizontalScroll:!0,onlyScrollIfNeeded:!0})}},_maximize:function(e){var o=this,r=o.editor,s=r.get("el"),d=l.viewportHeight(),f=l.viewportWidth(),c=r.get("textarea"),h=r.get("statusBarEl")?r.get("statusBarEl")[0].offsetHeight:0,u=r.get("toolBarEl")[0].offsetHeight;a?n.body.style.overflow="hidden":l.css(n.body,{width:0,height:0,overflow:"hidden"}),n.documentElement.style.overflow="hidden",s.css({position:"absolute",zIndex:i.baseZIndex(i.ZIndexManager.MAXIMIZE),width:f+"px"}),t.css({zIndex:i.baseZIndex(i.ZIndexManager.MAXIMIZE-5),height:d+"px",width:f+"px"}),s.offset({left:0,top:0}),t.css({left:0,top:0}),c.parent().css({height:d-h-u+"px"}),c.css({height:d-h-u+"px"}),e!==!0&&arguments.callee.call(o,!0)},_real:function(){var e=this,t=e.editor;e._resize||(e._saveEditorStatus(),e._saveSate(),e._maximize(),e._resize||(e._resize=r.buffer(function(){e._maximize(),t.fire("afterMaximizeWindow")},100)),o.on(window,"resize",e._resize),setTimeout(function(){e._restoreEditorStatus(),t.notifySelectionChange(),t.fire("afterMaximizeWindow")},30))},maximizeWindow:function(){var e=this,t=e.editor;t.fire("beforeMaximizeWindow")!==!1&&(c(),e._real())},destroy:function(){var e=this;e._resize&&(o.remove(window,"resize",e._resize),e._resize.stop(),e._resize=0)}}),module.exports={init:function(t){if(!t.hasCommand("maximizeWindow")){var i=new e(t);t.addCommand("maximizeWindow",{exec:function(){i.maximizeWindow()}}),t.addCommand("restoreWindow",{exec:function(){i.restoreWindow()}})}}};});