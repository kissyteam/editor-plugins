KISSY.use('util, node', function (S, util, Node) {
    /*jshint quotmark:false*/
    var cfg = util.mix({
        // �Ƿ��ʼ�۽�
        focused: true,
        attachForm: true,
        baseZIndex: 10000
        // �Զ�����ʽ
        // customStyle:"p{line-height: 1.4;margin: 1.12em 0;padding: 0;}",
        // �Զ����ⲿ��ʽ
        // customLink:["http://localhost/customLink.css","http://xx.com/y2.css"],

    }, window.EDITOR_CFG);

    var plugins = ("source-area" +
        ",code" +
        ",separator" +
        ",bold" +
        ",italic," +
        "font-family," +
        "font-size," +
        "strike-through," +
        "underline," +
        "separator," +
        "checkbox-source-area" +
        ",image" +
        ",link" +
        ",fore-color" +
        ",back-color" +
        ",resize" +
        ",draft" +
        ",undo" +
        ",indent" +
        ",outdent" +
        ",unordered-list" +
        ",ordered-list" +
        ",element-path" +
        ",page-break" +
        ",preview" +
        ",maximize" +
        ",remove-format" +
        ",heading" +
        ",justify-left" +
        ",justify-center" +
        ",justify-right" +
        ",table" +
        ",smiley" +
        ",flash" +
        ",xiami-music" +
        ",video" +
        ",drag-upload").split(",");

    var fullPlugins = [];

    util.each(plugins, function (p, i) {
        fullPlugins[i] = "editor-plugins/lib/" + p;
    });

    var pluginConfig = {
        link: {
            target: "_blank"
        },
        'image': {
            defaultMargin: 0,
            //remote:false,
            upload: {
                serverUrl: window.UPLOAD_SINGLE_URL || "upload.jss",
                serverParams: {
                    waterMark: function () {
                        return Node.one("#ke_img_up_watermark_1")[0].checked;
                    }
                },
                suffix: "png,jpg,jpeg,gif",
                fileInput: "Filedata",
                sizeLimit: 1000, //k
                extraHTML: "<p style='margin-top:10px;'><input type='checkbox' id='ke_img_up_watermark_1' checked='checked'> ͼƬ��ˮӡ����ֹ���˵���</p>"
            }
        },
        'flash': {
            "defaultWidth": "300",
            "defaultHeight": "300"
        },
        "templates": [
            {
                demo: "ģ��1Ч����ʾhtml",
                html: "<div style='border:1px solid red'>ģ��1Ч����ʾhtml</div><p></p>"
            },
            {
                demo: "ģ��2Ч����ʾhtml",
                html: "<div style='border:1px solid red'>ģ��2Ч����ʾhtml</div>"
            }
        ],
        "font-size": {
            matchElWidth: false,
            menu: {
                children: [
                    {
                        value: "14px",
                        textContent: "��׼",
                        elAttrs: {
                            style: 'position: relative; border: 1px solid #DDDDDD; margin: 2px; padding: 2px;'
                        },
                        content: " <span style='font-size:14px'>��׼</span>" +
                            "<span style='position:absolute;top:1px;right:3px;'>14px</span>"
                    },
                    {
                        value: "16px",
                        textContent: "��",
                        elAttrs: {
                            style: 'position: relative; border: 1px solid #DDDDDD; margin: 2px; padding: 2px;'
                        },
                        content: "" +
                            " <span style='font-size:16px'>��</span>" +
                            "<span style='position:absolute;top:1px;right:3px;'>16px</span>"
                    },
                    {
                        value: "18px",
                        textContent: "�ش�",
                        elAttrs: {
                            style: 'position: relative; border: 1px solid #DDDDDD; margin: 2px; padding: 2px;'
                        },
                        content: "" +
                            " <span style='font-size:18px'>�ش�</span>" +
                            "<span style='position:absolute;top:1px;right:3px;'>18px</span>"
                    },
                    {
                        value: "20px",
                        textContent: "����",
                        elAttrs: {
                            style: 'position: relative; border: 1px solid #DDDDDD; margin: 2px; padding: 2px;'
                        },
                        content: "" +
                            " <span style='font-size:20px'>����</span>" +
                            "<span style='position:absolute;top:1px;right:3px;'>20px</span>"
                    }
                ],
                width: "125px"
            }
        },
        "video": {
            urlCfg: [
                {
                    reg: /tudou\.com/i,
                    url: "http://bangpai.taobao.com/json/getTudouVideo.htm",
                    paramName: "url"
                }
            ],
            "urlTip": "�������ſ���������������7������Ƶ����ҳ����...",
            "providers": [
                {
                    // ���������
                    reg: /taohua\.com/i,
                    //Ĭ�ϸ߿�
                    width: 480,
                    height: 400,
                    detect: function (url) {
                        return url;
                    }
                },
                {
                    reg: /youku\.com/i,
                    width: 480,
                    height: 400,
                    detect: function (url) {
                        var m = url.match(/id_([^.]+)\.html(\?[^?]+)?$/);
                        if (m) {
                            return "http://player.youku.com/player.php/sid/" + m[1] + "/v.swf";
                        }
                        m = url.match(/v_playlist\/([^.]+)\.html$/);
                        if (m) {
                            return;
                            //return "http://player.youku.com/player.php/sid/" + m[1] + "/v.swf";
                        }
                        return url;
                    }
                },
                {
                    reg: /tudou\.com/i,
                    width: 480,
                    height: 400,
                    detect: function (url) {
                        return url;
                    }
                },
                {
                    reg: /ku6\.com/i,
                    width: 480,
                    height: 400,
                    detect: function (url) {
                        var m = url.match(/show[^\/]*\/([^\/]+)\.html(\?[^?]+)?$/);
                        if (m) {
                            return "http://player.ku6.com/refer/" + m[1] + "/v.swf";
                        }
                        return url;
                    }
                }/*,
                 {
                 reg:/taobaocdn\.com/i,
                 width:480,
                 height:400,
                 detect:function(url) {
                 return url;
                 }
                 }*/
            ]
        },
        "draft": {
            // ��ǰ�༭������ʷ�Ƿ�Ҫ�������浽һ����ֵ�����ǹ���
            // saveKey:"xxx",
            interval: 5,
            limit: 10,
            "helpHTML": "<div " +
                "style='width:200px;'>" +
                "<div style='padding:5px;'>�ݸ����ܹ��Զ����������±༭�����ݣ�" +
                "����������ݶ�ʧ��" +
                "��ѡ��ָ��༭��ʷ</div></div>"
        },
        "resize": {
            //direction:['y']
        },

        "drag-upload": {
            suffix: "png,jpg,jpeg,gif",
            fileInput: "Filedata",
            sizeLimit: 1000,
            serverUrl: "upload.jss",
            serverParams: {
                waterMark: function () {
                    return true;
                }
            }
        }
    };

    S.use(['editor'].concat(fullPlugins), function (S, Editor) {
        var args = util.makeArray(arguments);

        args.shift();
        args.shift();

        util.each(args, function (Arg, i) {
            var argStr = plugins[i],
                cfg = pluginConfig[argStr];
            if (cfg) {
                args[i] = new Arg(cfg);
            }
        });

        cfg.plugins = args;
        var editor;
        if (cfg.fromTextarea) {
            editor = Editor.decorate(cfg.fromTextarea, cfg);
        } else {
            editor = new Editor(cfg);
            editor.render();
        }
        editor.on('blur', function () {
            S.log("editor blur");
        });
        editor.on('focus', function () {
            S.log("editor focus");
        });
        editor.on('selectionChange', function (e) {
            S.log("selectionChange : " + e.path.toString());
        });

        window.newEditor = editor;

//            editor.on('paste', function () {
//                return 'x';
//            });
    });
});