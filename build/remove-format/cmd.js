KISSY.add('kg/editor-plugins/1.0.0/remove-format/cmd',["editor","dom"],function(S ,require, exports, module) {function e(e,o){for(var a=0;a<o.length;a++)e.removeAttr(o[a])}var o=require("editor"),a=o.RangeType,t=o.ElementPath,n=require("dom"),r="b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var,s",s="class,style,lang,width,height,align,hspace,valign".split(/,/),m=new RegExp("^(?:"+r.replace(/,/g,"|")+")$","i");module.exports={init:function(o){o.hasCommand("removeFormat")||o.addCommand("removeFormat",{exec:function(){o.focus(),m.lastIndex=0;var r=o.getSelection().getRanges();o.execCommand("save");for(var d,i=0;d=r[i];i++)if(!d.collapsed){d.enlarge(a.ENLARGE_ELEMENT);var l=d.createBookmark(),c=l.startNode,v=l.endNode,N=function(e){for(var o,a=new t(e),n=a.elements,r=1;(o=n[r])&&(!o.equals(a.block)&&!o.equals(a.blockLimit));r++)m.test(o.nodeName())&&e._4eBreakParent(o)};N(c),N(v);for(var g=c._4eNextSourceNode(!0,n.NodeType.ELEMENT_NODE,void 0,void 0);g&&!g.equals(v);){var u=g._4eNextSourceNode(!1,n.NodeType.ELEMENT_NODE,void 0,void 0);("img"!==g.nodeName()||!g.attr("_ke_real_element")&&!/\bke_/.test(g[0].className))&&(m.test(g.nodeName())?g._4eRemove(!0):e(g,s)),g=u}d.moveToBookmark(l)}o.getSelection().selectRanges(r),o.execCommand("save")}})}};});