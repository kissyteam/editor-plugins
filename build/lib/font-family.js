KISSY.add('kg/editor-plugins/1.0.0/lib/font-family',["util","editor","./font/ui","./font-family/cmd","./menubutton"],function(S ,require, exports, module) {function e(e){this.config=e||{}}var t=require("util"),n=require("editor"),i=require("./font/ui"),a=require("./font-family/cmd");require("./menubutton"),t.augment(e,{pluginRenderUI:function(e){a.init(e);var o=this.config,u={};t.mix(u,{children:[{content:"宋体",value:"SimSun"},{content:"黑体",value:"SimHei"},{content:"隶书",value:"LiSu"},{content:"楷体",value:"KaiTi_GB2312"},{content:"微软雅黑",value:'"Microsoft YaHei"'},{content:"Georgia",value:"Georgia"},{content:"Times New Roman",value:'"Times New Roman"'},{content:"Impact",value:"Impact"},{content:"Courier New",value:'"Courier New"'},{content:"Arial",value:"Arial"},{content:"Verdana",value:"Verdana"},{content:"Tahoma",value:"Tahoma"}],width:"130px"}),t.each(u.children,function(e){var t=e.elAttrs||{},n=e.value;t.style=t.style||"",t.style+=";font-family:"+n,e.elAttrs=t}),o.menu=t.mix(u,o.menu),e.addSelect("fontFamily",t.mix({cmdType:"fontFamily",defaultCaption:"字体",width:130,mode:n.Mode.WYSIWYG_MODE},o),i.Select)}}),module.exports=e;});