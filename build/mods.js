KISSY.config("modules",{"kg/editor-plugins/1.0.0/lib/back-color":{requires:["./color/btn","./back-color/cmd"]},"kg/editor-plugins/1.0.0/lib/bold":{requires:["./font/ui","./bold/cmd","node","./button"]},"kg/editor-plugins/1.0.0/lib/bubble":{requires:["util","ua","overlay","editor"]},"kg/editor-plugins/1.0.0/lib/button":{requires:["util","editor","button"]},"kg/editor-plugins/1.0.0/lib/checkbox-source-area":{requires:["editor","util","node"]},"kg/editor-plugins/1.0.0/lib/code":{requires:["editor","./button","./dialog-loader"]},"kg/editor-plugins/1.0.0/lib/contextmenu":{requires:["editor","menu","./focus-fix","event/dom","node"]},"kg/editor-plugins/1.0.0/lib/dent-cmd":{requires:["editor","./list-utils","dom","node","ua"]},"kg/editor-plugins/1.0.0/lib/dialog-loader":{requires:["editor","overlay","dom","ua"]},"kg/editor-plugins/1.0.0/lib/dialog":{requires:["editor","overlay","./focus-fix","dd/plugin/constrain","component/plugin/drag","dom"]},"kg/editor-plugins/1.0.0/lib/draft":{requires:["editor","json","event/dom","./local-storage","overlay","./menubutton","util","node"]},"kg/editor-plugins/1.0.0/lib/drag-upload":{requires:["util","editor","event/dom","node","dom"]},"kg/editor-plugins/1.0.0/lib/element-path":{requires:["editor","node"]},"kg/editor-plugins/1.0.0/lib/fake-objects":{requires:["editor","html-parser","util","node","dom"]},"kg/editor-plugins/1.0.0/lib/flash-bridge":{requires:["logger-manager","util","editor","swf","event/custom"]},"kg/editor-plugins/1.0.0/lib/flash":{requires:["editor","./flash-common/base-class","./flash-common/utils","./fake-objects","./button"]},"kg/editor-plugins/1.0.0/lib/focus-fix":{requires:["editor","ua"]},"kg/editor-plugins/1.0.0/lib/font-family":{requires:["util","editor","./font/ui","./font-family/cmd","./menubutton"]},"kg/editor-plugins/1.0.0/lib/font-size":{requires:["editor","./font/ui","./font-size/cmd","./menubutton","util"]},"kg/editor-plugins/1.0.0/lib/fore-color":{requires:["./color/btn","./fore-color/cmd"]},"kg/editor-plugins/1.0.0/lib/heading":{requires:["./menubutton","editor","./heading/cmd"]},"kg/editor-plugins/1.0.0/lib/image":{requires:["./button","editor","./bubble","./contextmenu","./dialog-loader","util","ua","node"]},"kg/editor-plugins/1.0.0/lib/indent":{requires:["editor","./indent/cmd","./button"]},"kg/editor-plugins/1.0.0/lib/italic":{requires:["./font/ui","./italic/cmd","./button","node"]},"kg/editor-plugins/1.0.0/lib/justify-center":{requires:["editor","./justify-center/cmd","./button","node"]},"kg/editor-plugins/1.0.0/lib/justify-cmd":{requires:["editor"]},"kg/editor-plugins/1.0.0/lib/justify-left":{requires:["editor","./justify-left/cmd","./button","node"]},"kg/editor-plugins/1.0.0/lib/justify-right":{requires:["editor","./justify-right/cmd","./button","node"]},"kg/editor-plugins/1.0.0/lib/link":{requires:["./button","./bubble","util","editor","./link/utils","./dialog-loader","node"]},"kg/editor-plugins/1.0.0/lib/list-utils":{requires:["node","dom","ua"]},"kg/editor-plugins/1.0.0/lib/local-storage":{requires:["editor","overlay","./flash-bridge","util","ua"]},"kg/editor-plugins/1.0.0/lib/maximize":{requires:["./maximize/cmd","./button"]},"kg/editor-plugins/1.0.0/lib/menubutton":{requires:["editor","util","menubutton"]},"kg/editor-plugins/1.0.0/lib/ordered-list":{requires:["./list-utils/btn","./ordered-list/cmd"]},"kg/editor-plugins/1.0.0/lib/outdent":{requires:["editor","./button","./outdent/cmd"]},"kg/editor-plugins/1.0.0/lib/overlay":{requires:["editor","overlay","./focus-fix"]},"kg/editor-plugins/1.0.0/lib/page-break":{requires:["editor","./fake-objects","./button","node"]},"kg/editor-plugins/1.0.0/lib/preview":{requires:["./button","util"]},"kg/editor-plugins/1.0.0/lib/progressbar":{requires:["base","util","node"]},"kg/editor-plugins/1.0.0/lib/remove-format":{requires:["editor","./button","./remove-format/cmd"]},"kg/editor-plugins/1.0.0/lib/resize":{requires:["dd","node","util"]},"kg/editor-plugins/1.0.0/lib/separator":{requires:["node"]},"kg/editor-plugins/1.0.0/lib/smiley":{requires:["editor","./overlay","./button","node","util"]},"kg/editor-plugins/1.0.0/lib/source-area":{requires:["editor","./button"]},"kg/editor-plugins/1.0.0/lib/strike-through":{requires:["./font/ui","./strike-through/cmd","./button"]},"kg/editor-plugins/1.0.0/lib/table":{requires:["editor","./dialog-loader","./contextmenu","./button","util","ua","dom","node"]},"kg/editor-plugins/1.0.0/lib/underline":{requires:["./font/ui","./underline/cmd","./button","node"]},"kg/editor-plugins/1.0.0/lib/undo":{requires:["editor","./undo/btn","./undo/cmd","./button"]},"kg/editor-plugins/1.0.0/lib/unordered-list":{requires:["./list-utils/btn","./unordered-list/cmd"]},"kg/editor-plugins/1.0.0/lib/video":{requires:["editor","./flash-common/utils","./flash-common/base-class","./fake-objects","./button"]},"kg/editor-plugins/1.0.0/lib/word-filter":{requires:["html-parser","util","node","ua"]},"kg/editor-plugins/1.0.0/lib/xiami-music":{requires:["editor","./flash-common/base-class","./flash-common/utils","./fake-objects","./button","util"]},"kg/editor-plugins/1.0.0/lib/back-color/cmd":{requires:["../color/cmd"]},"kg/editor-plugins/1.0.0/lib/bold/cmd":{requires:["editor","../font/cmd"]},"kg/editor-plugins/1.0.0/lib/code/dialog":{requires:["util","editor","menubutton","dom","../dialog","node","ua"]},"kg/editor-plugins/1.0.0/lib/color/btn":{requires:["editor","../button","../overlay","../dialog-loader","node","util"]},"kg/editor-plugins/1.0.0/lib/color/cmd":{requires:["editor"]},"kg/editor-plugins/1.0.0/lib/color/dialog":{requires:["editor","util","../dialog","dom","node"]},"kg/editor-plugins/1.0.0/lib/flash/dialog":{requires:["util","editor","../flash-common/utils","../dialog","../menubutton"]},"kg/editor-plugins/1.0.0/lib/flash-common/base-class":{requires:["./utils","base","editor","node","ua","util","../dialog-loader","../bubble","../contextmenu"]},"kg/editor-plugins/1.0.0/lib/flash-common/utils":{requires:["swf","dom","node"]},"kg/editor-plugins/1.0.0/lib/font/cmd":{requires:["editor"]},"kg/editor-plugins/1.0.0/lib/font/ui":{requires:["editor","../button","../menubutton"]},"kg/editor-plugins/1.0.0/lib/font-family/cmd":{requires:["../font/cmd"]},"kg/editor-plugins/1.0.0/lib/font-size/cmd":{requires:["../font/cmd"]},"kg/editor-plugins/1.0.0/lib/fore-color/cmd":{requires:["../color/cmd"]},"kg/editor-plugins/1.0.0/lib/heading/cmd":{requires:["editor"]},"kg/editor-plugins/1.0.0/lib/image/dialog":{requires:["util","editor","io","../dialog","tabs","../menubutton","./dialog-tpl","ua","node"]},"kg/editor-plugins/1.0.0/lib/indent/cmd":{requires:["../dent-cmd"]},"kg/editor-plugins/1.0.0/lib/italic/cmd":{requires:["editor","../font/cmd"]},"kg/editor-plugins/1.0.0/lib/justify-center/cmd":{requires:["../justify-cmd"]},"kg/editor-plugins/1.0.0/lib/justify-left/cmd":{requires:["../justify-cmd"]},"kg/editor-plugins/1.0.0/lib/justify-right/cmd":{requires:["../justify-cmd"]},"kg/editor-plugins/1.0.0/lib/link/dialog":{requires:["util","editor","../dialog","./utils"]},"kg/editor-plugins/1.0.0/lib/link/utils":{requires:["editor","node"]},"kg/editor-plugins/1.0.0/lib/list-utils/btn":{requires:["editor","../button","../menubutton"]},"kg/editor-plugins/1.0.0/lib/list-utils/cmd":{requires:["editor","../list-utils","ua","node","dom"]},"kg/editor-plugins/1.0.0/lib/maximize/cmd":{requires:["editor","event/dom","util","ua","node","dom"]},"kg/editor-plugins/1.0.0/lib/ordered-list/cmd":{requires:["editor","../list-utils/cmd"]},"kg/editor-plugins/1.0.0/lib/outdent/cmd":{requires:["editor","../dent-cmd"]},"kg/editor-plugins/1.0.0/lib/remove-format/cmd":{requires:["editor","dom"]},"kg/editor-plugins/1.0.0/lib/strike-through/cmd":{requires:["editor","../font/cmd"]},"kg/editor-plugins/1.0.0/lib/table/dialog":{requires:["util","editor","../dialog","../menubutton","ua","node","dom"]},"kg/editor-plugins/1.0.0/lib/underline/cmd":{requires:["editor","../font/cmd"]},"kg/editor-plugins/1.0.0/lib/undo/btn":{requires:["../button","editor"]},"kg/editor-plugins/1.0.0/lib/undo/cmd":{requires:["editor","ua","util"]},"kg/editor-plugins/1.0.0/lib/unordered-list/cmd":{requires:["editor","../list-utils/cmd"]},"kg/editor-plugins/1.0.0/lib/video/dialog":{requires:["util","editor","io","../flash/dialog","../menubutton"]},"kg/editor-plugins/1.0.0/lib/xiami-music/dialog":{requires:["util","editor","../flash/dialog","../menubutton","dom","node"]}});