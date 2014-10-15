define('kg/editor-plugins/1.1.3/video/dialog',["util","editor","io","../flash/dialog","../menubutton"],function(require, exports, module) {function e(){e.superclass.constructor.apply(this,arguments)}var i=require("util"),t=require("editor"),l=require("io"),r=require("../flash/dialog"),d=require("../menubutton"),a="ke_video",n="video",o="自动",s=0,p='<div style="padding:20px 20px 0 20px"><p><label>链接： <input class="{prefixCls}editor-video-url {prefixCls}editor-input" style="width:410px;"/></label></p><table style="margin:10px 0 5px  40px;width:400px;"><tr><td><label>宽度：  <input  data-verify="^('+o+'|((?!0$)\\d+))?$"  data-warning="宽度请输入正整数" class="{prefixCls}editor-video-width {prefixCls}editor-input" style="width:60px;" /> 像素</label></td><td><label> 高度：  <input  data-verify="^('+o+'|((?!0$)\\d+))?$"  data-warning="高度请输入正整数" class="{prefixCls}editor-video-height {prefixCls}editor-input" style="width:60px;"/> 像素</label></td></tr><tr><td><label>对齐： <select class="{prefixCls}editor-video-align" title="对齐"><option value="none">无</option><option value="left">左对齐</option><option value="right">右对齐</option></select></td><td><label>间距： <input  data-verify="^\\d+$"  data-warning="间距请输入非负整数" class="{prefixCls}editor-video-margin {prefixCls}editor-input" style="width:60px;" value="'+s+'"/> 像素</label></td></tr></table></div>',u='<div style="padding:10px 0 35px 20px;"><a class="{prefixCls}editor-video-ok {prefixCls}editor-button ks-inline-block" style="margin-left:40px;margin-right:20px;">确定</button> <a class="{prefixCls}editor-video-cancel {prefixCls}editor-button ks-inline-block">取消</a></div>';i.extend(e,r,{_config:function(){var e=this,t=e.editor,l=t.get("prefixCls"),r=e.config;e._cls=a,e._type=n,e._title="视频",e._bodyHTML=i.substitute(p,{prefixCls:l}),e._footHTML=i.substitute(u,{prefixCls:l}),e.urlCfg=r.urlCfg,e._urlTip=r.urlTip||"请输入视频播放链接..."},_initD:function(){var e=this,i=e.dialog,l=e.editor,r=l.get("prefixCls"),a=i.get("el");e.dUrl=a.one("."+r+"editor-video-url"),e.dAlign=d.Select.decorate(a.one("."+r+"editor-video-align"),{prefixCls:r+"editor-big-",width:80,menuCfg:{prefixCls:r+"editor-",render:a}}),e.dMargin=a.one("."+r+"editor-video-margin"),e.dWidth=a.one("."+r+"editor-video-width"),e.dHeight=a.one("."+r+"editor-video-height");var n=a.one("."+r+"editor-video-ok"),s=a.one("."+r+"editor-video-cancel");n.on("click",e._gen,e),s.on("click",function(e){i.hide(),e.halt()}),t.Utils.placeholder(e.dUrl,e._urlTip),t.Utils.placeholder(e.dWidth,o),t.Utils.placeholder(e.dHeight,o),e.addRes(e.dAlign)},_getDInfo:function(){var e=this,i=e.dUrl.val(),t=e.config,l=t.getProvider(i);if(l){var r=l.detect(i);return r?{url:r,attrs:{height:parseInt(e.dHeight.val(),10)||l.height,width:parseInt(e.dWidth.val(),10)||l.width,style:"margin:"+(parseInt(e.dMargin.val(),10)||0)+"px;float:"+e.dAlign.get("value")+";"}}:void window.alert("不支持该链接，请直接输入该视频提供的分享链接")}return void window.alert("不支持该链接来源!")},_gen:function(i){var t=this,r=t.dUrl.val(),d=t.urlCfg;if(d)for(var a=0;a<d.length;a++){var n=d[a];if(n.reg.test(r)){t.dialog.loading();var o={};return o[n.paramName||"url"]=r,void l({url:n.url,data:o,dataType:"jsonp",success:function(e){t._dynamicUrlPrepare(e[1])}})}}e.superclass._gen.call(t,i),i&&i.halt()},_dynamicUrlPrepare:function(i){var t=this;t.dUrl.val(i),t.dialog.unloading(),e.superclass._gen.call(t)},_updateD:function(){var e=this,i=e.editor,l=e.selectedFlash;if(l){var r=i.restoreRealElement(l);t.Utils.valInput(e.dUrl,e._getFlashUrl(r)),e.dAlign.set("value",l.css("float")),e.dMargin.val(parseInt(r.style("margin"),10)||0),t.Utils.valInput(e.dWidth,parseInt(l.css("width"),10)),t.Utils.valInput(e.dHeight,parseInt(l.css("height"),10))}else t.Utils.resetInput(e.dUrl),e.dAlign.set("value","none"),e.dMargin.val(s),t.Utils.resetInput(e.dWidth),t.Utils.resetInput(e.dHeight)}}),module.exports=e;});