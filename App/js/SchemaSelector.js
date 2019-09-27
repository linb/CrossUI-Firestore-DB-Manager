// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support async functions
xui.Class('App.SchemaSelector', 'xui.Module',{
    Instance:{
        // Dependencies css
        Dependencies: [],
        // Required modules
        Required:[],
        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_1")
                .setName("api_1")
                .setResponseType("TEXT")
                .setResponseCallback([
                    {
                        "type":"host",
                        "name":"setText"
                    }
                ])
                .setProxyType("AJAX")
            );
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"xui_ui_dialog6")
                .setLeft("3.3333333333333335em")
                .setTop("1.6666666666666667em")
                .setWidth("57.5em")
                .setHeight("32.5em")
                .setCaption("Input collection name and specify schema")
                .setMinBtn(false)
                .setModal(true)
            );
            
            host.xui_ui_dialog6.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"xui_ui_layout13")
                .setItems([
                    {
                        "id":"before",
                        "size":160,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false,
                        "pos":"before"
                    },
                    {
                        "id":"main",
                        "size":80,
                        "min":10
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setType("horizontal")
            );
            
            host.xui_ui_layout13.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel13")
                .setLeft("2.5em")
                .setTop("6.666666666666667em")
                .setCaption("Schema templates"),
                "before"
            );
            
            host.xui_ui_panel13.append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list5")
                .setDirtyMark(false)
                .setItems([
                    {
                        "id":"Schema_staffcard.json",
                        "caption":"A StaffCard Schema"
                    }
                ])
                .setDock("fill")
                .setLeft("1.6666666666666667em")
                .setTop("9.166666666666666em")
                .setWidth("26.666666666666668em")
                .setBorderType("none")
                .setLabelSize("8.333333333333334em")
                .setLabelPos("none")
                .setValue("a")
                .onItemSelected([
                    {
                        "desc":"set url",
                        "type":"control",
                        "target":"api_1",
                        "args":[
                            { },
                            {
                                "queryURL":"data/{args[1].id}"
                            }
                        ],
                        "method":"setProperties",
                        "event":2
                    },
                    {
                        "desc":"call",
                        "type":"control",
                        "target":"api_1",
                        "args":[ ],
                        "method":"invoke",
                        "onOK":0,
                        "onKO":1,
                        "okFlag":"_DI_succeed",
                        "koFlag":"_DI_fail"
                    }
                ])
            );
            
            host.xui_ui_layout13.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel14")
                .setLeft("3.3333333333333335em")
                .setTop("8.333333333333334em")
                .setCaption("Schema code"),
                "main"
            );
            
            host.xui_ui_panel14.append(
                xui.create("xui.Module.JSONEditor", "xui.Module")
                .setHost(host,"xui_module_jsoneditor3")
            );
            
            host.xui_ui_dialog6.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block19")
                .setDock("top")
                .setLeft("12.5em")
                .setTop("20.833333333333332em")
                .setHeight("2.9166666666666665em")
                .setBorderType("none")
            );
            
            host.xui_ui_block19.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_name")
                .setRequired(true)
                .setDirtyMark(false)
                .setDock("width")
                .setLeft("0.75em")
                .setTop("0.5833333333333334em")
                .setWidth("35.833333333333336em")
                .setLabelSize("12em")
                .setLabelCaption("Collection name")
                .setValueFormat("^[\\w ]+$")
                .beforeValueSet({
                    "return":"{temp.v2}",
                    "actions":[
                        {
                            "desc":"correct",
                            "type":"other",
                            "target":"var",
                            "args":[
                                "adjust",
                                function(value){
                                    return(value||"").replace(/[^\w]/g,"").replace(/^[^a-zA-Z]+/g,"");
                                }
                            ],
                            "method":"temp"
                        },
                        {
                            "desc":"fun",
                            "type":"other",
                            "target":"callback",
                            "args":[
                                "{temp.adjust}",
                                "temp",
                                "v2",
                                "{args[2]}"
                            ],
                            "method":"call"
                        }
                    ]
                })
            );
            
            host.xui_ui_dialog6.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block51")
                .setDock("bottom")
                .setLeft("13.333333333333334em")
                .setTop("21.666666666666668em")
                .setHeight("2.9166666666666665em")
                .setBorderType("none")
            );
            
            host.xui_ui_block51.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton11")
                .setLeft("3.0833333333333335em")
                .setTop("0.5833333333333334em")
                .setWidth("6em")
                .setHeight("1.8333333333333333em")
                .setCaption("OK")
                .onClick([
                    {
                        "desc":"get value 1",
                        "type":"other",
                        "target":"var",
                        "args":[
                            "name",
                            "{page.xui_ui_name.getValue()}"
                        ],
                        "method":"temp",
                        "event":1
                    },
                    {
                        "desc":"get value 2",
                        "type":"module",
                        "target":"xui_module_jsoneditor3",
                        "args":[
                            "{page.xui_module_jsoneditor3.getValue}",
                            "temp",
                            "schema",
                            "{true}"
                        ],
                        "method":"$Functions.getValue",
                        "event":1,
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"check value 1",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "No name",
                            "Specify name please!"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"{temp.name}",
                                "symbol":"empty",
                                "right":""
                            }
                        ],
                        "return":false
                    },
                    {
                        "desc":"check value 22",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "No Schema",
                            "Specify Schema please!"
                        ],
                        "method":"pop",
                        "conditions":[
                            {
                                "left":"{temp.schema.prop}",
                                "symbol":"empty",
                                "right":""
                            }
                        ],
                        "return":false
                    },
                    {
                        "desc":"post message",
                        "type":"page",
                        "target":"App",
                        "args":[
                            "{page.postMessage()}",
                            "none",
                            "",
                            "createCollection",
                            "{temp.name}",
                            "{temp.schema}"
                        ],
                        "method":"postMessage",
                        "redirection":"page::"
                    },
                    {
                        "desc":"close",
                        "type":"control",
                        "target":"xui_ui_dialog6",
                        "args":[ ],
                        "method":"destroy"
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        functions:{
            "setText":{
                "desc":"",
                "params":[
                    {
                        "id":"text",
                        "type":"String",
                        "desc":""
                    }
                ],
                "actions":[
                    {
                        "desc":"prep",
                        "type":"other",
                        "target":"var",
                        "args":[
                            "json.prop",
                            "{args[0]}"
                        ],
                        "method":"temp",
                        "adjust":"unserialize"
                    },
                    {
                        "desc":"set text",
                        "type":"module",
                        "target":"xui_module_jsoneditor3",
                        "args":[
                            "{page.xui_module_jsoneditor3.setValue}",
                            undefined,
                            undefined,
                            "{temp.json}"
                        ],
                        "method":"$Functions.setValue",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"print",
                        "type":"other",
                        "target":"msg",
                        "args":[
                            "{args}"
                        ],
                        "method":"log"
                    }
                ]
            }
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
        }
    }
});