define('kg/editor-plugins/1.1.3/drag-upload',["util","editor","event-dom","node","dom"],function(require, exports, module) {function e(e){this.config=e||{}}var n=require("util"),t=require("editor"),r=require("event-dom"),i=require("node"),o=t.Utils,a=require("dom");n.augment(e,{pluginRenderUI:function(e){function s(e){var n=e.originalEvent,t=n.target;"img"===a.nodeName(t)&&t.src.match(/^file:\/\//)&&(v[t.src]=t)}function d(e,r){var i=new window.FileReader;i.onload=function(o){var a=e.name,s=o.target.result,d="----kissy-editor-yiminghe",l=new XMLHttpRequest;l.open("POST",p,!0),l.onreadystatechange=function(){if(4===l.readyState){if(200===l.status||304===l.status){if(""!==l.responseText){var e=n.parseJson(l.responseText);r[0].src=e.imgUrl}}else window.alert("服务器端出错！"),r.remove();l.onreadystatechange=null}};var f="\r\n--"+d+"\r\n";f+="Content-Disposition: form-data; name='"+u+"'; filename='"+encodeURIComponent(a)+"'\r\n",f+="Content-Type: "+(e.type||"application/octet-stream")+"\r\n\r\n",f+=s+"\r\n",m=t.Utils.normParams(m);for(var c in m)f+="--"+d+"\r\n",f+="Content-Disposition: form-data; name='"+c+"'\r\n\r\n",f+=m[c]+"\r\n";f+="--"+d+"--",l.setRequestHeader("Content-Type","multipart/form-data, boundary="+d),l.sendAsBinary("Content-Type: multipart/form-data; boundary="+d+"\r\nContent-Length: "+f.length+"\r\n"+f+"\r\n"),i.onload=null},i.readAsBinaryString(e)}var l=this.config,u=l.fileInput||"Filedata",f=l.sizeLimit||Number.MAX_VALUE,m=l.serverParams||{},p=l.serverUrl||"",c=l.suffix||"png,jpg,jpeg,gif",g=new RegExp(c.split(/,/).join("|")+"$","i"),v={},y=!1;e.docReady(function(){var t=e.get("document")[0];r.on(t,"dragenter",function(){y||(r.on(t,"DOMNodeInserted",s),y=!0)}),r.on(t,"drop",function(e){r.remove(t,"DOMNodeInserted",s),y=!1,e.halt(),e=e.originalEvent;var l,u;n.isEmptyObject(v)?(u=t.elementFromPoint(e.clientX,e.clientY),l=u.lastChild):(n.each(v,function(e){"img"===a.nodeName(e)&&(l=e.nextSibling,u=e.parentNode,a.remove(e))}),v={});var m=e.dataTransfer;m.dropEffect="copy";var p=m.files;if(p)for(var c=0;c<p.length;c++){var h=p[c],w=h.name,b=h.size;if(w.match(g)&&!(b/1e3>f)){var B=i('<img src="'+o.debugUrl("theme/tao-loading.gif")+'"/>'),q=B[0];u.insertBefore(q,l);var C=q.parentNode,R=a.nodeName(C);("head"===R||"html"===R)&&a.insertBefore(q,t.body.firstChild),d(h,B)}}})}),window.XMLHttpRequest&&!XMLHttpRequest.prototype.sendAsBinary&&(XMLHttpRequest.prototype.sendAsBinary=function(e,n){var t;t=window.BlobBuilder?new window.BlobBuilder:window.WebKitBlobBuilder();for(var r=e.length,i=new window.Uint8Array(r),o=0;r>o;o++)i[o]=e.charCodeAt(o);t.append(i.buffer),this.send(t.getBlob(n))})}}),module.exports=e;});