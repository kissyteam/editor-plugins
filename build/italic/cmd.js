define("kg/editor-plugins/1.1.6/italic/cmd",["editor","../font/cmd"],function(t,e,i){var n=t("editor"),d=t("../font/cmd"),o=new n.Style({element:"em",overrides:[{element:"i"},{element:"span",attributes:{style:"font-style: italic;"}}]});i.exports={init:function(t){d.addButtonCmd(t,"italic",o)}}});