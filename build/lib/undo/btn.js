KISSY.add('kg/editor-plugins/1.0.0/lib/undo/btn',["../button","editor"],function(S ,require, exports, module) {var e=require("../button"),t=require("editor"),o=e.extend({__lock:!0,bindUI:function(){var e=this,t=e.get("editor");e.on("click",function(){t.execCommand("undo")}),t.on("afterUndo afterRedo afterSave",function(t){var o=t.index;o>0?e.set("disabled",e.__lock=!1):e.set("disabled",e.__lock=!0)})}},{ATTRS:{mode:{value:t.Mode.WYSIWYG_MODE},disabled:{value:!0,setter:function(e){return this.__lock&&(e=!0),e}}}}),n=e.extend({__lock:!0,bindUI:function(){var e=this,t=e.get("editor");e.on("click",function(){t.execCommand("redo")}),t.on("afterUndo afterRedo afterSave",function(t){var o=t.history,n=t.index;n<o.length-1?e.set("disabled",e.__lock=!1):e.set("disabled",e.__lock=!0)})}},{ATTRS:{mode:{value:t.Mode.WYSIWYG_MODE},disabled:{value:!0,setter:function(e){return this.__lock&&(e=!0),e}}}});module.exports={RedoBtn:n,UndoBtn:o};});