KISSY.add('kg/editor-plugins/1.0.0/link',["./button","./bubble","util","editor","./link/utils","./dialog-loader","node"],function(S ,require, exports, module) {function e(e){return e=o(e),e.closest("a",void 0)}function t(e){this.config=e||{}}require("./button"),require("./bubble");var r=require("util"),i=require("editor"),l=require("./link/utils"),n=require("./dialog-loader"),o=require("node"),u='<a href=""  target="_blank" class="{prefixCls}editor-bubble-url">在新窗口查看</a>  –   <span class="{prefixCls}editor-bubble-link {prefixCls}editor-bubble-change">编辑</span>   |    <span class="{prefixCls}editor-bubble-link {prefixCls}editor-bubble-remove">去除</span>';t.prototype={pluginRenderUI:function(t){function o(e){n.useDialog(t,"link",a.config,e)}var s=t.get("prefixCls");t.addButton("link",{tooltip:"插入链接",listeners:{click:function(){o()}},mode:i.Mode.WYSIWYG_MODE});var a=this;t.addBubble("link",e,{listeners:{afterRenderUI:function(){var e=this,n=e.get("contentEl");n.html(r.substitute(u,{prefixCls:s}));var a=n.one("."+s+"editor-bubble-url"),b=n.one("."+s+"editor-bubble-change"),c=n.one("."+s+"editor-bubble-remove");i.Utils.preventFocus(n),b.on("click",function(t){o(e.get("editorSelectedEl")),t.halt()}),c.on("click",function(r){l.removeLink(t,e.get("editorSelectedEl")),r.halt()}),e.on("show",function(){var t=e.get("editorSelectedEl");if(t){var r=t.attr(l.savedHref)||t.attr("href");a.html(r),a.attr("href",r)}})}}})}},module.exports=t;});