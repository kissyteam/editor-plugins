/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 14:01
*/
KISSY.add("editor-plugins/lib/underline/cmd",["editor","../font/cmd"],function(a,b,f,c){var a=b("editor"),d=b("../font/cmd"),e=new a.Style({element:"u",overrides:[{element:"span",attributes:{style:"text-decoration: underline;"}}]});c.exports={init:function(a){d.addButtonCmd(a,"underline",e)}}});
