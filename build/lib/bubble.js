KISSY.add('kg/editor-plugins/1.0.0/lib/bubble',["util","ua","overlay","editor"],function(S ,require, exports, module) {function e(e,t,i){return i>=e&&t>=i}function t(t,i){var r=t.get("y"),o=r+t.get("el").outerHeight(),n=i.get("y"),l=n+i.get("el").outerHeight();return e(r,o,l)||e(r,o,n)}function i(e){var i=null,r=e.get("editor"),n=r.getControls();return o.each(n,function(r){r.isKeBubble&&r!==e&&r.get("visible")&&t(e,r)&&(i?i.get("y")<r.get("y")&&(i=r):i=r)}),i}function r(e){var t=e.get("editorSelectedEl");if(!t)return void 0;var i=e.get("editor"),r=i.get("window"),o=i.get("iframe").offset(),l=o.top,f=o.left,d=f+r.width(),s=l+r.height(),a=t.offset();a=u.Utils.getXY(a,i);var g,c,v=a.top,b=a.left,h=b+t.width(),C=v+t.height();return n.ie&&"img"===t[0].nodeName.toLowerCase()&&C>s?void 0:(C>s&&s>v?c=s-30:C>l&&s>C&&(c=C),h>f&&f>b?g=f:b>f&&d>b&&(g=b),void 0!==g&&void 0!==c?[g,c]:void 0)}var o=require("util"),n=require("ua"),l=require("overlay"),u=require("editor"),f={zIndex:u.baseZIndex(u.ZIndexManager.BUBBLE_VIEW),elCls:"{prefixCls}editor-bubble",prefixCls:"{prefixCls}editor-",effect:{effect:"fade",duration:.3}};u.prototype.addBubble=function(e,t,n){function u(){g.hide();var e=c.get("window");e&&(e.detach("scroll",s),b.stop())}function d(){var e=r(g);if(e){g.move(e[0],e[1]);var t=i(g);t&&(e[1]=t.get("y")+t.get("el").outerHeight(),g.move(e[0],e[1])),g.get("visible")||g.show()}}function s(){g.get("editorSelectedEl")&&(g.hide(),b())}function a(){var e=c.get("window");e.on("scroll",s),d()}var g,c=this,v=c.get("prefixCls");n=n||{},n.editor=c,o.mix(n,f),n.elCls=o.substitute(n.elCls,{prefixCls:v}),n.prefixCls=o.substitute(n.prefixCls,{prefixCls:v}),g=new l(n),g.isKeBubble=1,c.addControl(e+"/bubble",g),c.on("selectionChange",function(e){var i,r,n=e.path,l=n.elements;if(n&&l){if(r=n.lastElement,!r)return;i=t(r),i?(g.set("editorSelectedEl",i),g.hide(),o.later(a,10)):u()}}),c.on("sourceMode",u);var b=o.buffer(d,350)};});