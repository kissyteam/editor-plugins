KISSY.add('kg/editor-plugins/1.0.0/lib/code/dialog',["util","editor","menubutton","dom","../dialog","node","ua"],function(S ,require, exports, module) {function e(e){this.editor=e}var t=require("util"),i=require("editor"),o=require("menubutton"),r=i.XHTML_DTD,a=require("dom").NodeType,l=i.Walker.whitespaces(!0),s=require("../dialog"),n=require("node"),d=require("ua"),c=[["ActionScript3","as3"],["Bash/Shell","bash"],["C/C++","cpp"],["Css","css"],["CodeFunction","cf"],["C#","c#"],["Delphi","delphi"],["Diff","diff"],["Erlang","erlang"],["Groovy","groovy"],["HTML","html"],["Java","java"],["JavaFx","jfx"],["Javascript","js"],["Perl","pl"],["Php","php"],["Plain Text","plain"],["PowerShell","ps"],["Python","python"],["Ruby","ruby"],["Scala","scala"],["Sql","sql"],["Vb","vb"],["Xml","xml"]],p='<div class="{prefixCls}code-wrap"><table class="{prefixCls}code-table"><tr><td class="{prefixCls}code-label"><label for="ks-editor-code-type">类型：</label></td><td class="{prefixCls}code-content"><select id="ks-editor-code-type"  class="{prefixCls}code-type">'+t.map(c,function(e){return'<option value="'+e[1]+'">'+e[0]+"</option>"})+'</select></td></tr><tr><td><label for="ks-editor-code-textarea">代码：</label></td><td><textarea id="ks-editor-code-textarea"  class="{prefixCls}code-textarea {prefixCls}input"></textarea></td></tr></table></div>',u='<div class="{prefixCls}code-table-action"><a href="javascript:void(\'插入\')" class="{prefixCls}code-insert {prefixCls}button">插入</a><a href="javascript:void(\'取消\')" class="{prefixCls}code-cancel {prefixCls}button">取消</a></td></div>',f='<pre class="prettyprint ks-editor-code brush:{type};toolbar:false;">{code}</pre>';t.augment(e,{initDialog:function(){var e,i,r=this,a=r.editor.get("prefixCls")+"editor-";i=r.dialog=new s({width:500,mask:!0,headerContent:"插入代码",bodyContent:t.substitute(p,{prefixCls:a}),footerContent:t.substitute(u,{prefixCls:a})}).render(),e=i.get("el"),r.insert=e.one("."+a+"code-insert"),r.cancel=e.one("."+a+"code-cancel"),r.type=o.Select.decorate(e.one("."+a+"code-type"),{prefixCls:a+"big-",width:150,menuCfg:{prefixCls:a,height:320,render:i.get("contentEl")}}),r.code=e.one("."+a+"code-textarea"),r.insert.on("click",r._insert,r),r.cancel.on("click",r.hide,r)},hide:function(){this.dialog.hide()},_insert:function(){var e,i=this,o=i.editor,s=i.code;if(!t.trim(e=s.val()))return void alert("请输入代码!");var c=n(t.substitute(f,{type:i.type.get("value"),code:t.escapeHtml(e)}),o.get("document")[0]);i.dialog.hide(),o.insertElement(c);var p=o.getSelection().getRanges()[0],u=c.next(l,1),h=u&&u[0].nodeType===a.ELEMENT_NODE&&u.nodeName();h&&r.$block[h]&&r[h]["#text"]||(u=n("<p></p>",o.get("document")[0]),d.ie||u._4eAppendBogus(),c.after(u)),p.moveToElementEditablePosition(u),o.getSelection().selectRanges([p])},show:function(){this.dialog||this.initDialog(),this.dialog.show()}}),module.exports=e;});