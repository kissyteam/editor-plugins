KISSY.add('kg/editor-plugins/1.0.0/local-storage',["editor","overlay","./flash-bridge","util","ua"],function(S ,require, exports, module) {var e=require("editor"),t=require("overlay"),r=require("./flash-bridge"),n=require("util"),s=require("ua").ieMode;if((!s||s>8)&&window.localStorage)module.exports=window.localStorage;else{var o=e.Utils.debugUrl("plugin/local-storage/assets/swfstore.swf?refresh="+ +new Date),a={width:215,border:"1px solid red"},i={width:0,border:"none"},l=new t({prefixCls:"ks-editor-",elStyle:{background:"white"},width:"0px",content:'<h1 style="text-align:center;">请点击允许</h1><div class="storage-container"></div>',zIndex:e.baseZIndex(e.ZIndexManager.STORE_FLASH_SHOW)});l.render(),l.show();var d=new r({src:o,render:l.get("contentEl").one(".storage-container"),params:{flashVars:{useCompression:!0}},attrs:{height:138,width:"100%"},methods:["setItem","removeItem","getItem","setMinDiskSpace","getValueOf"]});n.ready(function(){setTimeout(function(){l.center()},0)}),d.on("pending",function(){l.get("el").css(a),l.center(),l.show(),setTimeout(function(){d.retrySave()},1e3)}),d.on("save",function(){l.get("el").css(i)});var c=d.setItem;n.mix(d,{_ke:1,getItem:function(e){return this.getValueOf(e)},retrySave:function(){var e=this;e.setItem(e.lastSave.k,e.lastSave.v)},setItem:function(e,t){var r=this;r.lastSave={k:e,v:t},c.call(r,e,t)}}),d.on("contentReady",function(){d._ready=1}),module.exports=d};});