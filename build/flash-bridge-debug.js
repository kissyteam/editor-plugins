KISSY.add('kg/editor-plugins/1.1.0/flash-bridge',["logger-manager","util","editor","swf","event/custom"],function(S ,require, exports, module) {
/**
 * @ignore
 * simplified flash bridge for yui swf
 * @author yiminghe@gmail.com
 */

var LoggerManager = require('logger-manager');
var logger = LoggerManager.getLogger('editor/flash-bridge');
var util = require('util');
var Editor = require('editor');
var SWF = require('swf');
/*global CustomEvent:true*/
var CustomEvent = require('event/custom');
var instances = {};

function FlashBridge(cfg) {
    this._init(cfg);
}

util.augment(FlashBridge, CustomEvent.Target, {
    _init: function (cfg) {
        var self = this,
            id = util.guid('flash-bridge-'),
            callback = 'KISSY.require(\'editor\').FlashBridge.EventHandler';
        cfg.id = id;
        cfg.attrs = cfg.attrs || {};
        cfg.params = cfg.params || {};
        var attrs = cfg.attrs,
            params = cfg.params,
            flashVars = params.flashVars = params.flashVars || {};
        util.mix(attrs, {
            //http://yiminghe.javaeye.com/blog/764872
            //firefox 必须使创建的flash以及容器可见，才会触发contentReady
            //默认给flash自身很大的宽高，容器小点就可以了，
            width: 1,
            height: 1
        }, false);
        //这几个要放在 param 里面，主要是允许 flash js沟通
        util.mix(params, {
            allowScriptAccess: 'always',
            allowNetworking: 'all',
            scale: 'noScale'
        }, false);
        util.mix(flashVars, {
            shareData: false,
            useCompression: false
        }, false);
        var swfCore = {
            YUISwfId: id,
            YUIBridgeCallback: callback
        };
        if (cfg.ajbridge) {
            swfCore = {
                swfID: id,
                jsEntry: callback
            };
        }
        util.mix(flashVars, swfCore);
        instances[id] = self;
        self.id = id;
        self.swf = new SWF(cfg);
        self._expose(cfg.methods);
    },
    _expose: function (methods) {
        var self = this;
        for (var i = 0; i < methods.length; i++) {
            var m = methods[i];
            /*jshint loopfunc:true*/
            (function (m) {
                self[m] = function () {
                    return self._callSWF(m, util.makeArray(arguments));
                };
            })(m);
        }
    },
    _callSWF: function (func, args) {
        return this.swf.callSWF(func, args);
    },
    _eventHandler: function (event) {
        var self = this,
            type = event.type;
        if (type === 'log') {
            logger.debug(event.message);
        } else if (type) {
            self.fire(type, event);
        }
    },
    ready: function (fn) {
        var self = this;
        if (self._ready) {
            fn.call(this);
        } else {
            self.on('contentReady', fn);
        }
    },
    destroy: function () {
        this.swf.destroy();
        delete instances[this.id];
    }
});

FlashBridge.EventHandler = function (id, event) {
    logger.debug('fire event: ' + event.type);
    var instance = instances[id];
    if (instance) {
        //防止ie同步触发事件，后面还没on呢，另外给 swf 喘息机会
        //否则同步后触发事件，立即调用swf方法会出错
        setTimeout(function () {
            instance._eventHandler.call(instance, event);
        }, 100);
    }
};

Editor.FlashBridge = FlashBridge;

module.exports = FlashBridge;
});