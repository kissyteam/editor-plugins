/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Jul 18 13:55
*/
/*jshint indent:false, quotmark:false*/
KISSY.use(['ua', 'feature'], function(S, UA, Feature){
S.config("requires",{
    "editor": [
        "util",
        "logger-manager",
        "node",
        "xtemplate/runtime",
        "ua",
        "html-parser",
        "component/control",
        "dom"
    ],
    "editor-plugins/lib/back-color": [
        "editor-plugins/lib/color/btn",
        "editor-plugins/lib/back-color/cmd"
    ],
    "editor-plugins/lib/back-color/cmd": [
        "editor-plugins/lib/color/cmd"
    ],
    "editor-plugins/lib/bold": [
        "editor-plugins/lib/font/ui",
        "editor-plugins/lib/bold/cmd"
    ],
    "editor-plugins/lib/bold/cmd": [
        "editor-plugins/lib/font/cmd"
    ],
    "editor-plugins/lib/bubble": [
        "overlay",
        "editor"
    ],
    "editor-plugins/lib/button": [
        "editor",
        "button"
    ],
    "editor-plugins/lib/checkbox-source-area": [
        "editor"
    ],
    "editor-plugins/lib/code": [
        "editor-plugins/lib/button",
        "editor-plugins/lib/dialog-loader"
    ],
    "editor-plugins/lib/code/dialog": [
        "menubutton",
        "editor-plugins/lib/dialog"
    ],
    "editor-plugins/lib/color/btn": [
        "editor-plugins/lib/button",
        "editor-plugins/lib/overlay",
        "editor-plugins/lib/dialog-loader"
    ],
    "editor-plugins/lib/color/cmd": [
        "editor"
    ],
    "editor-plugins/lib/color/dialog": [
        "editor-plugins/lib/dialog"
    ],
    "editor-plugins/lib/contextmenu": [
        "menu",
        "editor-plugins/lib/focus-fix",
        "event/dom"
    ],
    "editor-plugins/lib/dent-cmd": [
        "editor",
        "editor-plugins/lib/list-utils"
    ],
    "editor-plugins/lib/dialog": [
        "overlay",
        "editor-plugins/lib/focus-fix",
        "dd/plugin/constrain",
        "component/plugin/drag"
    ],
    "editor-plugins/lib/dialog-loader": [
        "editor",
        "overlay"
    ],
    "editor-plugins/lib/draft": [
        "json",
        "event/dom",
        "editor-plugins/lib/local-storage",
        "editor-plugins/lib/menubutton"
    ],
    "editor-plugins/lib/drag-upload": [
        "editor",
        "event/dom"
    ],
    "editor-plugins/lib/element-path": [
        "editor"
    ],
    "editor-plugins/lib/fake-objects": [
        "editor"
    ],
    "editor-plugins/lib/flash": [
        "editor-plugins/lib/flash-common/base-class",
        "editor-plugins/lib/fake-objects",
        "editor-plugins/lib/button"
    ],
    "editor-plugins/lib/flash/dialog": [
        "editor-plugins/lib/flash-common/utils",
        "editor-plugins/lib/dialog",
        "editor-plugins/lib/menubutton"
    ],
    "editor-plugins/lib/flash-bridge": [
        "editor",
        "swf",
        "event/custom"
    ],
    "editor-plugins/lib/flash-common/base-class": [
        "editor-plugins/lib/flash-common/utils",
        "base",
        "editor-plugins/lib/dialog-loader",
        "editor-plugins/lib/bubble",
        "editor-plugins/lib/contextmenu"
    ],
    "editor-plugins/lib/flash-common/utils": [
        "swf",
        "dom",
        "node"
    ],
    "editor-plugins/lib/focus-fix": [
        "editor"
    ],
    "editor-plugins/lib/font/cmd": [
        "editor"
    ],
    "editor-plugins/lib/font/ui": [
        "editor-plugins/lib/button",
        "editor-plugins/lib/menubutton"
    ],
    "editor-plugins/lib/font-family": [
        "editor-plugins/lib/font/ui",
        "editor-plugins/lib/font-family/cmd"
    ],
    "editor-plugins/lib/font-family/cmd": [
        "editor-plugins/lib/font/cmd"
    ],
    "editor-plugins/lib/font-size": [
        "editor-plugins/lib/font/ui",
        "editor-plugins/lib/font-size/cmd"
    ],
    "editor-plugins/lib/font-size/cmd": [
        "editor-plugins/lib/font/cmd"
    ],
    "editor-plugins/lib/fore-color": [
        "editor-plugins/lib/color/btn",
        "editor-plugins/lib/fore-color/cmd"
    ],
    "editor-plugins/lib/fore-color/cmd": [
        "editor-plugins/lib/color/cmd"
    ],
    "editor-plugins/lib/heading": [
        "editor-plugins/lib/menubutton",
        "editor-plugins/lib/heading/cmd"
    ],
    "editor-plugins/lib/heading/cmd": [
        "editor"
    ],
    "editor-plugins/lib/image": [
        "editor-plugins/lib/button",
        "editor-plugins/lib/bubble",
        "editor-plugins/lib/contextmenu",
        "editor-plugins/lib/dialog-loader"
    ],
    "editor-plugins/lib/image/dialog": [
        "io",
        "editor-plugins/lib/dialog",
        "tabs",
        "editor-plugins/lib/menubutton"
    ],
    "editor-plugins/lib/indent": [
        "editor-plugins/lib/indent/cmd",
        "editor-plugins/lib/button"
    ],
    "editor-plugins/lib/indent/cmd": [
        "editor-plugins/lib/dent-cmd"
    ],
    "editor-plugins/lib/italic": [
        "editor-plugins/lib/font/ui",
        "editor-plugins/lib/italic/cmd"
    ],
    "editor-plugins/lib/italic/cmd": [
        "editor-plugins/lib/font/cmd"
    ],
    "editor-plugins/lib/justify-center": [
        "editor-plugins/lib/justify-center/cmd",
        "editor-plugins/lib/button"
    ],
    "editor-plugins/lib/justify-center/cmd": [
        "editor-plugins/lib/justify-cmd"
    ],
    "editor-plugins/lib/justify-cmd": [
        "editor"
    ],
    "editor-plugins/lib/justify-left": [
        "editor-plugins/lib/justify-left/cmd",
        "editor-plugins/lib/button"
    ],
    "editor-plugins/lib/justify-left/cmd": [
        "editor-plugins/lib/justify-cmd"
    ],
    "editor-plugins/lib/justify-right": [
        "editor-plugins/lib/justify-right/cmd",
        "editor-plugins/lib/button"
    ],
    "editor-plugins/lib/justify-right/cmd": [
        "editor-plugins/lib/justify-cmd"
    ],
    "editor-plugins/lib/link": [
        "editor-plugins/lib/button",
        "editor-plugins/lib/bubble",
        "editor-plugins/lib/link/utils",
        "editor-plugins/lib/dialog-loader"
    ],
    "editor-plugins/lib/link/dialog": [
        "editor-plugins/lib/dialog",
        "editor-plugins/lib/link/utils"
    ],
    "editor-plugins/lib/link/utils": [
        "editor"
    ],
    "editor-plugins/lib/list-utils": [
        "node",
        "dom",
        "ua"
    ],
    "editor-plugins/lib/list-utils/btn": [
        "editor-plugins/lib/button",
        "editor-plugins/lib/menubutton"
    ],
    "editor-plugins/lib/list-utils/cmd": [
        "editor",
        "editor-plugins/lib/list-utils"
    ],
    "editor-plugins/lib/local-storage": [
        "overlay",
        "editor-plugins/lib/flash-bridge"
    ],
    "editor-plugins/lib/maximize": [
        "editor-plugins/lib/maximize/cmd",
        "editor-plugins/lib/button"
    ],
    "editor-plugins/lib/maximize/cmd": [
        "editor",
        "event/dom"
    ],
    "editor-plugins/lib/menubutton": [
        "editor",
        "menubutton"
    ],
    "editor-plugins/lib/ordered-list": [
        "editor-plugins/lib/list-utils/btn",
        "editor-plugins/lib/ordered-list/cmd"
    ],
    "editor-plugins/lib/ordered-list/cmd": [
        "editor-plugins/lib/list-utils/cmd"
    ],
    "editor-plugins/lib/outdent": [
        "editor-plugins/lib/button",
        "editor-plugins/lib/outdent/cmd"
    ],
    "editor-plugins/lib/outdent/cmd": [
        "editor-plugins/lib/dent-cmd"
    ],
    "editor-plugins/lib/overlay": [
        "overlay",
        "editor-plugins/lib/focus-fix"
    ],
    "editor-plugins/lib/page-break": [
        "editor-plugins/lib/fake-objects",
        "editor-plugins/lib/button"
    ],
    "editor-plugins/lib/preview": [
        "editor-plugins/lib/button"
    ],
    "editor-plugins/lib/progressbar": [
        "base",
        "util",
        "node"
    ],
    "editor-plugins/lib/remove-format": [
        "editor-plugins/lib/button",
        "editor-plugins/lib/remove-format/cmd"
    ],
    "editor-plugins/lib/remove-format/cmd": [
        "editor"
    ],
    "editor-plugins/lib/resize": [
        "dd",
        "node",
        "util"
    ],
    "editor-plugins/lib/separator": [
        "node"
    ],
    "editor-plugins/lib/smiley": [
        "editor-plugins/lib/overlay",
        "editor-plugins/lib/button"
    ],
    "editor-plugins/lib/source-area": [
        "editor-plugins/lib/button"
    ],
    "editor-plugins/lib/strike-through": [
        "editor-plugins/lib/font/ui",
        "editor-plugins/lib/strike-through/cmd"
    ],
    "editor-plugins/lib/strike-through/cmd": [
        "editor-plugins/lib/font/cmd"
    ],
    "editor-plugins/lib/table": [
        "editor-plugins/lib/dialog-loader",
        "editor-plugins/lib/contextmenu",
        "editor-plugins/lib/button"
    ],
    "editor-plugins/lib/table/dialog": [
        "editor-plugins/lib/dialog",
        "editor-plugins/lib/menubutton"
    ],
    "editor-plugins/lib/underline": [
        "editor-plugins/lib/font/ui",
        "editor-plugins/lib/underline/cmd"
    ],
    "editor-plugins/lib/underline/cmd": [
        "editor-plugins/lib/font/cmd"
    ],
    "editor-plugins/lib/undo": [
        "editor-plugins/lib/undo/btn",
        "editor-plugins/lib/undo/cmd"
    ],
    "editor-plugins/lib/undo/btn": [
        "editor-plugins/lib/button"
    ],
    "editor-plugins/lib/undo/cmd": [
        "editor"
    ],
    "editor-plugins/lib/unordered-list": [
        "editor-plugins/lib/list-utils/btn",
        "editor-plugins/lib/unordered-list/cmd"
    ],
    "editor-plugins/lib/unordered-list/cmd": [
        "editor-plugins/lib/list-utils/cmd"
    ],
    "editor-plugins/lib/video": [
        "editor-plugins/lib/flash-common/base-class",
        "editor-plugins/lib/fake-objects",
        "editor-plugins/lib/button"
    ],
    "editor-plugins/lib/video/dialog": [
        "io",
        "editor-plugins/lib/flash/dialog"
    ],
    "editor-plugins/lib/word-filter": [
        "html-parser",
        "util",
        "node",
        "ua"
    ],
    "editor-plugins/lib/xiami-music": [
        "editor-plugins/lib/flash-common/base-class",
        "editor-plugins/lib/fake-objects",
        "editor-plugins/lib/button"
    ],
    "editor-plugins/lib/xiami-music/dialog": [
        "editor-plugins/lib/flash/dialog"
    ]
});
});
