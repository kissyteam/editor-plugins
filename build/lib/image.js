KISSY.add('kg/editor-plugins/1.0.0/lib/image',["./button","editor","./bubble","./contextmenu","./dialog-loader","util","ua","node"],function(S ,require, exports, module) {function e(e){this.config=e||{}}require("./button");var t=require("editor");require("./bubble"),require("./contextmenu");var n=require("./dialog-loader"),i=require("util"),r=require("ua"),o=require("node"),l=function(e){return e=o(e),"img"!==e.nodeName()||/(^|\s+)ke_/.test(e[0].className)?void 0:e},c='<a class="{prefixCls}editor-bubble-url" target="_blank" href="#">在新窗口查看</a>  |  <a class="{prefixCls}editor-bubble-link {prefixCls}editor-bubble-change" href="#">编辑</a>  |  <a class="{prefixCls}editor-bubble-link {prefixCls}editor-bubble-remove" href="#">删除</a>';e.prototype={pluginRenderUI:function(e){function a(t){n.useDialog(e,"image",u.config,t)}var u=this,s=e.get("prefixCls");e.addButton("image",{tooltip:"插入图片",listeners:{click:function(){a(null)}},mode:t.Mode.WYSIWYG_MODE});var d=[{content:"图片属性",fn:function(){var e=l(this.get("editorSelectedEl"));e&&(this.hide(),a(o(e)))}},{content:"插入新行",fn:function(){this.hide();var n=e.get("document")[0],i=o(n.createElement("p"));r.ie||i._4eAppendBogus(void 0);var l=new t.Range(n);l.setStartAfter(this.get("editorSelectedEl")),l.select(),e.insertElement(i),l.moveToElementEditablePosition(i,1),l.select()}}],f=[];i.each(d,function(e){f.push({content:e.content})}),e.addContextMenu("image",l,{width:120,children:f,listeners:{click:function(e){var t=this,n=e.target.get("content");i.each(d,function(e){e.content===n&&e.fn.call(t)})}}}),e.docReady(function(){e.get("document").on("dblclick",function(e){e.halt();var t=o(e.target);l(t)&&a(t)})}),e.addBubble("image",l,{listeners:{afterRenderUI:function(){var n=this,o=n.get("contentEl");o.html(i.substitute(c,{prefixCls:s}));var l=o.one("."+s+"editor-bubble-url"),u=o.one("."+s+"editor-bubble-change"),d=o.one("."+s+"editor-bubble-remove");t.Utils.preventFocus(o),u.on("click",function(e){a(n.get("editorSelectedEl")),e.halt()}),d.on("click",function(t){if(r.webkit){var i=e.getSelection().getRanges();i&&i[0]&&(i[0].collapse(),i[0].select())}n.get("editorSelectedEl").remove(),n.hide(),e.notifySelectionChange(),t.halt()}),n.on("show",function(){var e=n.get("editorSelectedEl");if(e){var t=e.attr("_ke_saved_src")||e.attr("src");l.attr("href",t)}})}}})}},module.exports=e;});