KISSY.add('editor-plugins/lib/color/cmd',["editor"],function(S ,require, exports, module) {function e(e,r,n){var t=e.get("document")[0];e.execCommand("save"),r?new o.Style(n,{color:r}).apply(t):new o.Style(n,{color:"inherit"}).remove(t),e.execCommand("save")}var o=require("editor");module.exports={applyColor:e};});