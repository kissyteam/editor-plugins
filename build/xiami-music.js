KISSY.add('kg/editor-plugins/1.0.0/xiami-music',["editor","./flash-common/base-class","./flash-common/utils","./fake-objects","./button","util"],function(S ,require, exports, module) {function e(){e.superclass.constructor.apply(this,arguments)}function t(e){this.config=e||{}}var i=require("editor"),r=require("./flash-common/base-class"),n=require("./flash-common/utils"),a=require("./fake-objects");require("./button");var o=require("util"),u="ke_xiami",s="xiami-music";o.extend(e,r,{_updateTip:function(e,t){var i=this,r=i.get("editor"),n=r.restoreRealElement(t);n&&(e.html(t.attr("title")),e.attr("href",i._getFlashUrl(n)))}}),t.prototype={pluginRenderUI:function(t){function r(e){return/xiami\.com/i.test(e)}a.init(t);var o=t.htmlDataProcessor,l=o&&o.dataFilter;l&&l.addRules({tags:{object:function(e){var t,i,a=e.getAttribute("title"),l=e.getAttribute("classid"),c=e.childNodes;if(!l){for(t=0;t<c.length;t++)if(i=c[t],"embed"===i.nodeName){if(!n.isFlashEmbed(i))return null;if(r(i.attributes.src))return o.createFakeParserElement(e,u,s,!0,{title:a})}return null}for(t=0;t<c.length;t++)if(i=c[t],"param"===i.nodeName&&"movie"===i.getAttribute("name").toLowerCase()&&r(i.getAttribute("value")||i.getAttribute("VALUE")))return o.createFakeParserElement(e,u,s,!0,{title:a})},embed:function(e){return n.isFlashEmbed(e)&&r(e.getAttribute("src"))?o.createFakeParserElement(e,u,s,!0,{title:e.getAttribute("title")}):void 0}}},4);var c=new e({editor:t,cls:u,type:s,bubbleId:"xiami",pluginConfig:this.config,contextMenuId:"xiami",contextMenuHandlers:{"虾米属性":function(){var e=this.get("editorSelectedEl");e&&c.show(e)}}});t.addButton("xiamiMusic",{tooltip:"插入虾米音乐",listeners:{click:function(){c.show()}},mode:i.Mode.WYSIWYG_MODE})}},module.exports=t;});