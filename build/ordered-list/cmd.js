KISSY.add('kg/editor-plugins/1.0.0/ordered-list/cmd',["editor","../list-utils/cmd"],function(S ,require, exports, module) {var e=require("editor"),t=require("../list-utils/cmd"),n="insertOrderedList",i=t.ListCommand,r=t.queryActive,a=new i("ol");module.exports={init:function(t){t.hasCommand(n)||t.addCommand(n,{exec:function(e,t){e.focus(),a.exec(e,t)}});var i=e.Utils.getQueryCmd(n);t.hasCommand(i)||t.addCommand(i,{exec:function(t){var n=t.getSelection();if(n&&!n.isInvalid){var i=n.getStartElement(),a=new e.ElementPath(i);return r("ol",a)}}})}};});