/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:59
*/
KISSY.add("editor-plugins/lib/outdent/cmd",["editor","../dent-cmd"],function(b,c,h,e){var d=c("editor"),b=c("../dent-cmd"),f=b.addCommand,g=b.checkOutdentActive;e.exports={init:function(b){f(b,"outdent");var c=d.Utils.getQueryCmd("outdent");b.hasCommand(c)||b.addCommand(c,{exec:function(a){if((a=a.getSelection())&&!a.isInvalid)return a=a.getStartElement(),a=new d.ElementPath(a),g(a)}})}}});
