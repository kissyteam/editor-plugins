/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:58
*/
KISSY.add("editor-plugins/lib/heading/cmd",["editor"],function(g,b,h,f){var d=b("editor");f.exports={init:function(e){if(!e.hasCommand("heading")){e.addCommand("heading",{exec:function(a,c){var b;a.execCommand("save");"p"!==c&&(b=a.queryCommandValue("heading"));c===b&&(c="p");(new d.Style({element:c})).apply(a.get("document")[0]);a.execCommand("save")}});var b=d.Utils.getQueryCmd("heading");e.addCommand(b,{exec:function(a){if((a=a.getSelection())&&!a.isInvalid)if(a=a.getStartElement(),a=new d.ElementPath(a),
a=(a=a.block||a.blockLimit)&&a.nodeName()||"",a.match(/^h\d$/)||"p"===a)return a}})}}}});
