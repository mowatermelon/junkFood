//var JSONOBJ = {};
(function ($) {
    ////容器ID
    var sQueryBlockContainerId = "";
    ////缓存数据的KEY
    var sQueryBlockKey = "GeoQueryButton";

    $.fn.GeowebQueryBarBlock = function (options) {
        try {
            //构造参数
            var opts = $.extend({}, $.ligerDefaults.QueryBarBlock, options);

            //将数据缓存起来
            obj = this.data(sQueryBlockKey);
            //如果不传参数，则直接返回对象
            if (!options) {
                return obj;
            }
            return loadQueryButton(opts);
        } catch (e) {

        }
    };


    //默认值
    $.ligerDefaults.QueryBarBlock = {
        xml: "",
        containerId: "",
        moduleId: "",
        QueryCallBackFn: null,
        RadioCallBackFn: null,
        PrintCallBackFn: null,
        ExportCallBackFn: null,
        FHCallBackFn: null
    };

    /**
    *  功能:   设置展示查询控件按钮
    *  参数:   sModuleId 业务参数
    *  返回值: 无
    *  作者:   蔡健
    *  日期:   2014.4.29
    *  版本:   1.0
   */
    GeowebQueryBarBlock.prototype.setQueryButtonShowOrHidden = function (sModuleId) {
        var oData = $("#" + sQueryBlockContainerId).data(sQueryBlockKey);
        //清空容器内容
        $("#" + sQueryBlockContainerId).html("");
        //给moduleId赋值
        oData._defaultOptions.moduleId = sModuleId;
        $("#" + sQueryBlockContainerId).GeowebQueryBarBlock(oData._defaultOptions);
    };

    /*
    *  功能:   建立查询控件
    *  参数:   options 参数对象
                1.options.xml    对应XML配置
                2.options.containerId    对应查询控件容器
                3.options.moduleId    用来判断是否显示隐藏
                4.options.QueryCallBackFn    对应页面查询函数（回调）
                5.options.RadioCallBackFn    扩展单选按钮click事件（回调）
                6.options.PrintCallBackFn    对应页面打印控件的click函数（回调）
                7.options.ExportCallBackFn    对应页面导出Excel控件的click函数（回调）
                8.options.FHCallBackFn    对应页面返回控件的click函数（回调）
    *  返回值: 查询控件对象
    *  作者:   蔡健
    *  日期:   2014.05.27
    *  版本:   1.0
    */
    function loadQueryButton(options) {
        var sButtonML = options.xml;
        var sDivId = options.containerId;
        //给全局变量赋值
        sQueryBlockContainerId = options.containerId;
        //回调函数，在当前页面click事件触发后执行
        var __callBackQueryFn = options.QueryCallBackFn;

        //单选按钮的回调函数，在当前页面click事件触发后执行
        var __RadioCallBackFn = options.RadioCallBackFn;

        //打印
        var __CallBackFn_Print = options.PrintCallBackFn;
        //导出
        var __CallBackFn_Export = options.ExportCallBackFn;
        //返回
        var __CallBackFn_FH = options.FHCallBackFn;
        //moduleId,用于判断按钮的显示隐藏
        var sModuleId = options.moduleId;
        
        //传递了参数，则加载控件
        //未传递参数，则返回对象
        //使用层ID得到对应的层的JQuery对象
        var div$ = $("#" + sDivId);

        var oButtonML = $.parseXML(sButtonML);

        //临时接收XML字符串
        var sParamXML = "";
        sParamXML = "<div class='select-box clearfix'></div>";

        var btnXML$ = $(oButtonML).children();
        var isSelBtn = false;
        if (btnXML$.find("PrintButton[display=true]").length > 0
            && btnXML$.find("ExportButton[display=true]").length > 0
            && btnXML$.find("BackButton[display=true]").length > 0) {
            isSelBtn = true;
        }

        //用于判断当前按钮的形态（单独的按钮或者集成的下拉选择按钮）
        var sBtnType = "singlebtn";
        //加载查询控件
        btnXML$.children().each(function () {
            if ($(this).attr("display") == "false") {
                return;
            }
            //当前节点名称
            var sLocalName = this.tagName;
            if (sLocalName == "QueryButton") {
                //以下调用建立通用扩展查询条件的方法
                sParamXML = $(sParamXML).append(buildExtendQueryBlock($(this), sModuleId));
            } else if (sLocalName == "LineButton") {
                //以下调用建立通用扩展查询条件的方法
                sParamXML = $(sParamXML).append(buildLineButton($(this), sModuleId));
            } else {
                var IsBtn = false;
                //判断当前是否是按钮加载
                if (sLocalName == "PrintButton" || sLocalName == "ExportButton" || sLocalName == "BackButton") {
                    IsBtn = true;
                }
                //判断是否加载下拉的按钮(打印，导出，返回)
                if (isSelBtn && IsBtn) {
                    //加载默认
                    sParamXML = $(sParamXML).append(buildDefaultSelectButton($(this),sModuleId));
                    sBtnType = "selbtn";
                    isSelBtn = false;
                } else {
                    //如果当前为下拉选择按钮模式，并且是加载按钮的时候，则直接跳过
                    if (sBtnType != "singlebtn" && (sLocalName == "PrintButton" || sLocalName == "ExportButton" || sLocalName == "BackButton")) {

                    }else{
                        //加载默认
                        sParamXML = $(sParamXML).append(buildDefaultQueryBlock($(this), sLocalName, sModuleId));
                    }
                }
            }

            div$ = div$.append(sParamXML);
        });

        /************************************以下为控制下拉控件的选项显示和隐藏的事件*******************************************/
        //注册mouseover事件
        $("div[isQueryContainer='true']").mouseover(function () {
            onMenuOver($(this).children("div"));
        });

        //注册mouseout事件
        $("div[isQueryContainer='true']").mouseleave(function () {
            onMenuOut($(this).children("div"));
        });

        //下拉选项：注册mouseover事件
        $("a.menuItem").mouseover(function () {
            onMenuOver($(this).parent());
        });

        //下拉选项：注册mouseout事件
        $("a.menuItem").mouseout(function () {
            onMenuOut($(this).parent());
        });

        //自定义时间：注册mouseover事件
        $("div.customSelected").mouseover(function () {
            onMenuOver($(this));
        });

        //自定义时间：注册mouseout事件
        $("div.customSelected").mouseleave(function () {
            //取消事件冒泡
            window.event.cancelBubble = true;
        });
        /************************************以上为控制下拉控件的选项显示和隐藏的事件*******************************************/

        //其他操作，click事件绑定
        //注册事件--选中条件完成
        $("a.menuItem").bind("click", function () {
            //__callBackQueryFn 查询数据的回调函数
            onSelectedChanged(this, __callBackQueryFn, this.parentNode.parentNode);
            onMenuOut($(this).parent());
        });

        //其他操作，click事件绑定
        //注册事件--单选按钮点击事件
        $("input[type='radio']").bind("click", function () {
            onRadioClick(this);
            //__callBackQueryFn 查询数据的回调函数
            __RadioCallBackFn(setJSONOBJ(), this);
            //e.preventDefault();
        });


        //其他操作，click事件绑定
        //注册事件--单选按钮点击事件
        $("label.radio_text").bind("dblclick", function () {
            onRadioDblClick($(this).prev("input[type='radio']"));
            //setJSONOBJ();
            //__callBackQueryFn 查询数据的回调函数
            __RadioCallBackFn(setJSONOBJ());
        });

        //注册事件--自定义时间
        $("#btnSearch").bind("click", function () {
            //自定义时间 信息收集
            $(this).parent().hide();
            var strStart = $("#txtStart").val();
            var strEnd = $("#txtEnd").val();
            var oCustom = new Object();
            oCustom.start = strStart;
            oCustom.end = strEnd;
            //设置JSONOBJ
            //setJSONOBJ(oCustom);
            //调用 回调的查询函数
            __callBackQueryFn(setJSONOBJ(oCustom));
        });

        //打印
        $(".g-link-print").bind("click", function () {
            __CallBackFn_Print(setJSONOBJ());
        });

        //导出
        $(".g-link-exp").bind("click", function () {
            __CallBackFn_Export(setJSONOBJ());
        });

        //返回
        $(".menuReturn").bind("click", function () {
            __CallBackFn_FH(goBack());
        });

        //打印
        $("#selDefaultBtn div a.menuItem").bind("click", function () {
            var sTagname = $(this).attr("title");
            switch (sTagname) {
                case "打印":
                    __CallBackFn_Print(setJSONOBJ());
                    break;
                case "导出":
                    __CallBackFn_Export(setJSONOBJ());
                    break;
                case "返回":
                    __CallBackFn_FH(setJSONOBJ());
                    break;
            }
        });

        if (jsonParm) {
            var sDefaultYear = jsonParm.ApplicationYear;
            if (sDefaultYear) {
                if ($("#spanYear")) {
                    $("#spanYear").text(sDefaultYear + "年");
                    $("#divYear").attr("value", sDefaultYear);
                }
            }
        }

        if (options.queryCon)
        {
            var sDefaultYear = options.queryCon.yearValue;
            if (sDefaultYear) {
                if ($("#spanYear")) {
                    $("#spanYear").text(sDefaultYear + "年");
                    $("#divYear").attr("value", sDefaultYear);
                }
            }
        }
        ///*
        //*  功能:   添加事件监听，当自定义按钮清空开始时间的时候，一起清空结束时间
        //*  参数:   sYwTitle 业务标题
        //*  返回值: 无
        //*  作者:   蔡健
        //*  日期:   2014.4.10
        //*  版本:   1.0
        //*/
        //if($("#divCustom").length>0){
        //    if ($.browser.msie)  // IE浏览器  
        //    {
        //        $("#txtStart").get(0).onpropertychange = clearEndDate;
        //    }
        //    else    // 其他浏览器  
        //    {
        //        $("#txtStart").get(0).addEventListener("input", clearEndDate, false);
        //    }
        //}

        //数据初始化
        var opt = new Object();
        opt.xml = sButtonML;
        opt.containerId = sDivId;
        opt.defaultOptions = options;


        if (options.queryCon) {
            opt.queryConditions = setJSONOBJ(options.queryCon);
        }
        else {
            opt.queryConditions = setJSONOBJ();
        }

        //实例化
        var ci = new GeowebQueryBarBlock(div$, opt);
        //将实例化对象缓存
        return $("#" + sQueryBlockContainerId).data(sQueryBlockKey, ci); 
    };

    /**
     * 功能：构造函数
     * 参数：obj  当前容器对象 
             options  对应的参数 
     * @param settings
     * @constructor
     */
    function GeowebQueryBarBlock(obj, options) {
        this._obj = obj;
        this._xml = options.xml;
        this._defaultOptions = options.defaultOptions;
        this._containerId = options.containerId;
        this._queryConditions = options.queryConditions;
    };

    function goBack() {
        history.go(-1);
        location.reload();
    }

    /*
    *  功能:   收集拼接默认控件对应的HTML代码
    *  参数:   buttonXML$   对应页面的查询控件XML配置(单个节点)
    *          sType        默认查询控件的类型
                            1.XZQHButton  行政区划
                            2.YearButton  年份
                            3.QuarterButton  季度
                            4.MonthButton  月度
                            5.CustomTimeButton  自定义时间
                            6.PrintButton  打印
                            7.ExportButton  导出
                            8.BackButton  返回
               sModuleId    用于判断在哪些情况下显示隐藏
    *  返回值: HTML字符串
    *  作者:   蔡健
    *  日期:   2014.05.27
    *  版本:   1.0
    */
    function buildDefaultQueryBlock(buttonXML$, sType,sModuleId) {

        //获取QueryButton对象id属性值
        var sButtonId = "";
        //获取QueryButton对象title属性值
        var sButtonTitle = "";
        //获取QueryButton对象name属性值
        var sButtonName = "";
        //获取QueryButton对象type属性值
        var sButtonType = "";
        //获取QueryButton对象display属性值
        var sIsButtonShow = buttonXML$.attr("display");
        //获取QueryButton对象sql属性值
        var sButtonSql = buttonXML$.attr("sql");
        //获取QueryButton对象url属性值
        var sButtonUrl = buttonXML$.attr("url");
        //获取QueryButton对象ModuleId属性值
        var sButtonModuleId = buttonXML$.attr("moduleId");

        //建立临时对象，将XML中读取的属性都保存在对象中
        var oParam = new Object();
        oParam.Xml$ = buttonXML$;        //控制按钮的显示影藏
        if (typeof (sIsButtonShow) != "undefined") {
            if (sIsButtonShow == "true") {
                //true 则显示
                oParam.display = "block";
            } else {
                //false 则隐藏
                oParam.display = "none";
            }
        } else {
            //默认显示
            oParam.display = "block";
        }

        if (sModuleId) {
            //依据ModuleId属性配置来判断哪些显示，哪些隐藏
            if (sButtonModuleId) {
                if (sButtonModuleId.indexOf(sModuleId) != -1) {
                    oParam.display = "block";
                } else {
                    oParam.display = "none";
                }
            }
        }

        oParam.sql = sButtonSql;
        oParam.url = sButtonUrl;
        //oParam.callBackFn = __callBackFn;

        var sParamXML = "";
        switch (sType) {
            case "XZQHButton":
                oParam.id = "XZQH";
                oParam.title = "行政区划";
                oParam.name = "行政区划";
                sParamXML = setSelectButton(oParam);
                break;
            case "YearButton":
                oParam.id = "Year";
                oParam.title = "--年度--";
                oParam.name = "年";
                sParamXML = setSelectButton(oParam);
                break;
            case "QuarterButton":
                oParam.id = "Quarter";
                oParam.title = "--季度--";
                oParam.name = "季";
                sParamXML = setSelectButton(oParam);
                break;
            case "MonthButton":
                oParam.id = "Month";
                oParam.title = "--月份--";
                oParam.name = "月";
                sParamXML = setSelectButton(oParam);
                break;
            case "CustomTimeButton":
                sParamXML = buildCustomTimeButton(oParam);
                break;
            case "PrintButton":
                //打印
                sParamXML = buildPrintButton(oParam);
                break;
            case "ExportButton":
                //导出
                sParamXML = buildExportButton(oParam);
                break;
            case "BackButton":
                //返回
                sParamXML = buildBackButton(oParam);
                break;
        }
        return sParamXML;
    };

    /*
*  功能:   收集拼接默认控件对应的HTML代码
*  参数:   buttonXML$   对应页面的查询控件XML配置(单个节点)
           sModuleId    用于判断在哪些情况下显示隐藏
*  返回值: HTML字符串
*  作者:   蔡健
*  日期:   2014.05.27
*  版本:   1.0
*/
    function buildDefaultSelectButton(buttonXML$,sModuleId) {

        //获取QueryButton对象ModuleId属性值
        var sButtonModuleId = buttonXML$.attr("moduleId");
        var oParam = new Object();

        if (sModuleId) {
            //依据ModuleId属性配置来判断哪些显示，哪些隐藏
            if (sButtonModuleId) {
                if (sButtonModuleId.indexOf(sModuleId) != -1) {
                    oParam.display = "block";
                } else {
                    oParam.display = "none";
                }
            } else {
                oParam.display = "block";
            }
        }
        sParamXML = getDefaultSelectButton(oParam);
        return sParamXML;
    };
 

    /*
    *  功能:   收集拼接默认控件对应的HTML代码
    *  参数:   buttonXML$   对应页面的查询控件XML配置(单个节点)
               sModuleId    用于判断在哪些情况下显示隐藏
    *  返回值: HTML字符串
    *  作者:   蔡健
    *  日期:   2014.05.27
    *  版本:   1.0
    */
    function buildExtendQueryBlock(buttonXML$,sModuleId) {

        //获取QueryButton对象id属性值
        var sButtonId = buttonXML$.attr("id");
        //获取QueryButton对象title属性值
        var sButtonTitle = buttonXML$.attr("title");
        //获取QueryButton对象name属性值
        var sButtonName = buttonXML$.attr("name");
        //获取QueryButton对象type属性值
        var sButtonType = buttonXML$.attr("type");
        //获取QueryButton对象display属性值
        var sIsButtonShow = buttonXML$.attr("display");
        //获取QueryButton对象sql属性值
        var sButtonSql = buttonXML$.attr("sql");
        //获取QueryButton对象url属性值
        var sButtonUrl = buttonXML$.attr("url");
        //获取QueryButton对象url属性值
        var __callBackFn = buttonXML$.attr("onclick");
        //获取QueryButton对象ModuleId属性值
        var sButtonModuleId = buttonXML$.attr("moduleId");
        //获取QueryButton对象isquery属性值,判断控件类型 true则是查询控件，false则是功能控件，默认为true
        var sIsquery = "true";
        if (buttonXML$.attr("isquery")) {
            sIsquery = buttonXML$.attr("isquery");
        }

        //判断，如果sIsButtonShow=false，则跳过当前循环
        if (!sIsButtonShow) {
            //直接进入下一个循环
            return true;
        };

        //建立临时对象，将XML中读取的属性都保存在对象中
        var oParam = new Object();
        oParam.Xml$ = buttonXML$;
        oParam.id = sButtonId;
        oParam.name = sButtonName;
        oParam.title = sButtonTitle;
        oParam.Type = sButtonType;
        //控制按钮的显示影藏
        if (typeof (sIsButtonShow) != "undefined") {
            if (sIsButtonShow == "true") {
                //true 则显示
                oParam.display = "block";
            } else {
                //false 则隐藏
                oParam.display = "none";
            }
        } else {
            //默认显示
            oParam.display = "block";
        };
        
        if (sModuleId) {
            //依据ModuleId属性配置来判断哪些显示，哪些隐藏
            if (sButtonModuleId) {
                if (sButtonModuleId.indexOf(sModuleId) != -1) {
                    oParam.display = "block";
                } else {
                    oParam.display = "none";
                }
            }
        }

        oParam.sql = sButtonSql;
        oParam.url = sButtonUrl;
        oParam.callBackFn = __callBackFn;

        var sParamXML = "";
        switch (sButtonType) {
            case "select":
                //下拉选择控件
                sParamXML = setSelectButton(oParam, "extend", sIsquery);
                break;
            case "radio":
                //单选按钮
                sParamXML = setRadioButton(oParam, "extend", sIsquery);
                break;
            case "checkbox":
                //复选框
                sParamXML = setCheckboxButton(oParam, "extend", sIsquery);
                break;
        };
        return sParamXML;
    };

    /*
*  功能:   收集拼接默认控件对应的HTML代码
*  参数:   buttonXML$   对应页面的查询控件XML配置(单个节点)
*  返回值: HTML字符串
*  作者:   蔡健
*  日期:   2014.05.27
*  版本:   1.0
*/
    function buildLineButton(buttonXML$, sModuleId) {
        //获取QueryButton对象ModuleId属性值
        var sButtonModuleId = buttonXML$.attr("moduleId");
        var sDisplay = "block";

        if (sModuleId) {
            //依据ModuleId属性配置来判断哪些显示，哪些隐藏
            if (sButtonModuleId) {
                if (sButtonModuleId.indexOf(sModuleId) == -1) {
                    sDisplay = "none";
                }
            }
        }
        var sParamXML = [];
        sParamXML.push("<div style='display:" + sDisplay + "'  class='empty'>");
        sParamXML.push("    <div>");
        sParamXML.push("    </div>");
        sParamXML.push("</div>");
        return sParamXML.join("");
    };
/********************************************************       控件根据类型分类处理       *************************************************************/
    /*
    *  功能:   设置下拉选择控件
    *  参数:   oQueryButton   对应页面的查询控件XML配置(单个节点)
               sIsExtend       是否是扩展查询条件（为了添加isextend='true'作为标识，便于收集查询条件）
               sIsquery        是否是查询控件（true则是，false则为功能控件）
    *  返回值: HTML字符串
    *  作者:   蔡健
    *  日期:   2014.05.27
    *  版本:   1.0
    */
    function setSelectButton(oQueryButton, sIsExtend, sIsquery) {
        var sXml = "";
        var sParm_IsExtend = "";
        var sParm_Isquery = "";
        //添加是否是扩展控件的标识
        if (sIsExtend == "extend") {
            sParm_IsExtend = " isextend='true' ";
        }
        //添加是否是查询控件的标识
        if (sIsquery == "true") {
            sParm_Isquery = " isquery='true' ";
        } 

        sXml = "<div class='select' " + sParm_IsExtend + sParm_Isquery + " isQueryContainer='true' style='display:" + oQueryButton.display + ";'></div>";
        sXml = $(sXml).append("<span id='span" + oQueryButton.id + "' class='text'>" + oQueryButton.title + "</span>");
        sXml = $(sXml).append("<span class='img'>&nbsp;&nbsp;</span>");

        var sParamXml = "<div id='div" + oQueryButton.id + "' title='" + oQueryButton.name + "' class='selected' style='display:none'></div>";
        var oOption$ = $(oQueryButton.Xml$).find("option");
        var sOptionClickFnDefault = oQueryButton.callBackFn;
        //优先配置选项
        if (oOption$.length > 0) {
            oOption$.each(function (i) {
                var sOptionValue = $(this).attr("value");
                var sOptionClickFn = $(this).attr("onclick");
                var sOptionText = $(this).text();
                //回调函数，调用页面函数
                if (sOptionClickFn) {
                    sParamXml = $(sParamXml).append(buildSelectButton(sOptionValue, sOptionText, sOptionClickFn));
                } else {
                    sParamXml = $(sParamXml).append(buildSelectButton(sOptionValue, sOptionText));
                }
            });
        } else {
            if (oQueryButton.sql) {
                try {
                    var sUrl = "Commons/QueryBarBlock.ashx?Type=QueryOption&sql=" + escape(oQueryButton.sql) + "&n=" + escape(Math.random());

                    if (typeof oQueryButton.url != "undefined"
                        && oQueryButton.url != ""
                        && oQueryButton.sql.indexOf("?") == -1) {
                        sUrl = oQueryButton.url + "?Type=QueryOption&sql=" + escape(oQueryButton.sql) + "&n=" + escape(Math.random());
                    }
                    else if (typeof oQueryButton.url != "undefined"
                            && oQueryButton.url != ""
                            && oQueryButton.sql.indexOf("?") != -1) {
                        sUrl = oQueryButton.url + "Type=QueryOption&sql=" + escape(oQueryButton.sql) + "&n=" + escape(Math.random());
                    }

                    $.ajax({
                        url: sUrl,
                        async: false,
                        success: function (data) {
                            var aCurrent = [];
                            //将cookie中的字符串转换为数组对象
                            aCurrent = JSON.parse(data);

                            //判断当前鼠标所在 业务指标类型 是否已经保存在cookie中
                            $.each(aCurrent, function (i, aInfo) {              //回调函数，调用页面函数
                                if (sOptionClickFnDefault) {
                                    sParamXml = $(sParamXml).append(buildSelectButton(aInfo.VALUE, aInfo.TEXT, sOptionClickFnDefault));
                                } else {
                                    sParamXml = $(sParamXml).append(buildSelectButton(aInfo.VALUE, aInfo.TEXT));
                                }
                            });
                        }
                    });

                }
                catch (e) {
                }
            } else if (oQueryButton.url) {
                $.ajax({
                    url: oQueryButton.url + "&n=" + escape(Math.random()),
                    async: false,
                    success: function (data) {
                        var aCurrent = [];
                        aCurrent = JSON.parse(data);

                        //判断当前鼠标所在 业务指标类型 是否已经保存在cookie中
                        $.each(aCurrent, function (i, aInfo) {
                            if (sOptionClickFnDefault) {
                                sParamXml = $(sParamXml).append(buildSelectButton(aInfo.VALUE, aInfo.TEXT, sOptionClickFnDefault));
                            } else {
                                sParamXml = $(sParamXml).append(buildSelectButton(aInfo.VALUE, aInfo.TEXT));
                            }
                        });
                    }
                });
            }
        }
        sXml = $(sXml).append(sParamXml);
        return sXml;
    };

    //拼接select控件选项XML字符串
    function buildSelectButton(sValue, sText, sClickFn) {
        var sParamXml = "";
        if (sClickFn) {
            sParamXml = "<a class='menuItem' title='" + sText + "' value='" + sValue + "' onclick='" + sClickFn + "'>" + sText + "</a>"
        } else {
            sParamXml = "<a class='menuItem' title='" + sText + "' value='" + sValue + "' >" + sText + "</a>"
        }

        return sParamXml;
    };




    //设置单选选择控件，返回xml字符串
    function setRadioButton(oQueryButton, sIsExtend, sIsquery) {
        var sXml = "";
        var sParm_IsExtend = "";
        var sParm_Isquery = "";
        //添加是否是扩展控件的标识
        if (sIsExtend == "extend") {
            sParm_IsExtend = " isextend='true' ";
        }
        //添加是否是查询控件的标识
        if (sIsquery == "true") {
            sParm_Isquery = " isquery='true' ";
        }
        sXml = "<div class='queryBarRadio' " + sParm_IsExtend + sParm_Isquery + " isQueryContainer='true' style='display: " + oQueryButton.display + ";'></div>";


        //var sParamXml = "<div id='div" + oQueryButton.id + "' title='" + oQueryButton.name + "' style='padding-left:15px;'></div>";
        var oOption$ = $(oQueryButton.Xml$).find("option");
        var sOptionClickFn = oQueryButton.callBackFn;
        //优先配置选项
        if (oOption$.length > 0) {
            oOption$.each(function (i) {
                var sOptionValue = $(this).attr("value");
                //用于单选按钮绑定、分组
                var sOptionFn = $(this).attr("onclick");
                if (sOptionFn != "" && sOptionFn != undefined) {
                    sOptionClickFn = sOptionFn;
                }
                var sOptionText = $(this).text();
                //回调函数，调用页面函数
                if (sOptionClickFn) {
                    //todo liubing 2015.9.29
                    sXml = $(sXml).append(buildRadioButton(oQueryButton.name,$(this)));
                } else {
                    sXml = $(sXml).append(buildRadioButton(oQueryButton.name, sOptionValue, sOptionText ));
                }
            });
        } else {
            if (oQueryButton.sql) {
                try {
                    var sUrl = "Commons/QueryBarBlock.ashx?Type=QueryOption&sql=" + escape(oQueryButton.sql) + "&n=" + escape(Math.random());

                    if(typeof oQueryButton.url !="undefined" 
                       && oQueryButton.url != "" 
                        && oQueryButton.sql.indexOf("?")==-1)
                    {
                        sUrl = oQueryButton.url + "?Type=QueryOption&sql=" + escape(oQueryButton.sql) + "&n=" + escape(Math.random());
                    }
                    else if(typeof oQueryButton.url !="undefined" 
                       && oQueryButton.url != "" 
                        && oQueryButton.sql.indexOf("?")!=-1)
                    {
                        sUrl = oQueryButton.url + "Type=QueryOption&sql=" + escape(oQueryButton.sql) + "&n=" + escape(Math.random());
                    }

                    $.ajax({
                        url: sUrl,
                        async: false,
                        success: function (data) {
                            var aCurrent = [];
                            //将cookie中的字符串转换为数组对象
                            aCurrent = JSON.parse(data);

                            //判断当前鼠标所在 业务指标类型 是否已经保存在cookie中
                            $.each(aCurrent, function (i, aInfo) {              //回调函数，调用页面函数
                                if (sOptionClickFn) {
                                    sXml = $(sXml).append(buildRadioButton(oQueryButton.name, sOptionValue, sOptionText, sOptionClickFn));
                                } else {
                                    sXml = $(sXml).append(buildRadioButton(oQueryButton.name, sOptionValue, sOptionText));
                                }
                            });
                        }
                    });

                }
                catch (e) {
                }
            } else if (oQueryButton.url) {
                $.ajax({
                    url: oQueryButton.url,
                    async: false,
                    success: function (data) {
                        var aCurrent = [];
                        //将cookie中的字符串转换为数组对象
                        aCurrent = JSON.parse(data);

                        //判断当前鼠标所在 业务指标类型 是否已经保存在cookie中
                        $.each(aCurrent, function (i, aInfo) {
                            if (sOptionClickFn) {
                                sXml = $(sXml).append(buildSelectButton(aInfo.VALUE, aInfo.TEXT, sOptionClickFn));
                            } else {
                                sXml = $(sXml).append(buildSelectButton(aInfo.VALUE, aInfo.TEXT));
                            }
                        });
                    }
                });
            }
        }
        //sXml = $(sXml).append(sParamXml);
        return sXml;
    };

    //拼接Radio控件选项XML字符串
    function buildRadioButton(radioName, sValue, sText, sClickFn) {

        var sParamXml = "<div id='" + sValue + "' title='" + sValue + "'  value='' style='display:inline;margin-left:5px'>";

        sParamXml += "<input type='radio' name='" + radioName + "' title='" + sText + "' /><label class='radio_text'>" + sText + "</label>"
        sParamXml += "</div>";
        return sParamXml;
    };

    //todo libing 2015.9.29
    function buildRadioButton(groupName, $opts) {

        var sParamXml = "<div id='" + $opts.attr("value") + "' title='" + $opts.attr("value") + "'  value='' style='display:inline;margin-left:5px'>";

        sParamXml += "<input type='radio' name='" + groupName + "' title='" + $opts.text() + "'/><label class='radio_text'>" + $opts.text() + "</label>"
        sParamXml += "</div>";
        return sParamXml;
    };

    //设置复选选择控件，返回xml字符串
    function setCheckboxButton(oQueryButton) {
        var sXml = "";
        var oOption$ = $(oQueryButton.Xml$).find("option");
        //优先配置选项
        if (oOption$.length > 0) {
            oOption$.each(function (i) {


            });
        } else {
            if (oQueryButton.sql) {

            } else if (oQueryButton.url) {

            }
        }

        return sXml;
    };


    //拼接Checkbox控件选项XML字符串
    function buildCheckboxButton() {

    };


    //设置自定义时间选择控件，返回xml字符串
    function buildCustomTimeButton(oParam) {
        var sXml = [];
        sXml.push("<div class='customSelect' isQueryContainer='true' style='display: " + oParam.display + ";'>");
        sXml.push("     <span id='spanCustom' class='text'>自定义时间</span>");
        sXml.push("     <span class='img'>&nbsp;&nbsp;</span>");
        sXml.push("     <div id='divCustom' title='自定义时间' class='customSelected' >");
        sXml.push("         <input id='txtStart' type='text' readonly='readonly' name='txtStart'  onclick='WdatePicker()'/>至");
        sXml.push("         <input id='txtEnd' type='text' readonly='readonly' name='txtEnd' onclick='WdatePicker()'/>");
        sXml.push("         <input type='button' id='btnSearch' value='查询'/>");
        sXml.push("     </div>");
        sXml.push("</div>");
        return sXml.join("");
    };

    /*
*  功能:   收集拼接默认控件对应的HTML代码
*  参数:   buttonXML$   对应页面的查询控件XML配置(单个节点)
           sModuleId    用于判断在哪些情况下显示隐藏
*  返回值: HTML字符串
*  作者:   蔡健
*  日期:   2014.05.27
*  版本:   1.0
*/
    function getDefaultSelectButton(oParam) {
        var sParamXML = [];
        sParamXML.push('<div id="selDefaultBtn" isextend="true" isquerycontainer="true" class="select" style="display:' + oParam.display + ';">');
        sParamXML.push('    <span  class="text">操 作</span><span class="img">&nbsp;&nbsp;</span>');
        sParamXML.push('    <div class="selected">');
        sParamXML.push('        <a class="menuItem" title="打印" value="打印" >打 印</a>');
        sParamXML.push('        <a class="menuItem" title="导出" value="导出" >导 出</a>');
        sParamXML.push('        <a class="menuItem" title="返回" value="返回" >返 回</a>');
        sParamXML.push('    </div>');
        sParamXML.push('</div>');
        return sParamXML.join("");
    }

    /**********************************************************以下为功能性函数************************************************************/
    /*
    *  功能:   鼠标覆盖的时候则显示
    *  参数:   被点击对象
    *  返回值：无
    *  作者：蔡健
    *  日期：2013.11.24
    *  版本：1.0
    */
    function onMenuOver(item) {
        //【下拉选择】控件和【自定义时间】控件显示选项
        //备注：【自定义时间】控件仅需显示，不需要隐藏
        if ($(item).parent().attr('class') == "select" || $(item).parent().attr('class') == "customSelect") {
            if ($(item).css("display") == "none") {
                $(item).show();
            }
        }

        //取消事件冒泡
        window.event.cancelBubble = true;
    };


    /*
    *  功能:   鼠标移开的时候则隐藏
    *  参数:   被点击对象
    *  返回值：无
    *  作者：蔡健
    *  日期：2013.11.24
    *  版本：1.0
    */
    function onMenuOut(item) {
        if ($(item).parent().attr('class') == "select" || $(item).parent().attr('class') == "customSelect") {
            if ($(item).css("display") != "none") {
                $(item).hide();
            }
        }

        //取消事件冒泡
        window.event.cancelBubble = true;
    };

    /*
    *  功能:   菜单子项点击事件处理逻辑
    *  参数:   item 被点击对象
               queryFn 查询函数（回调）
    *  返回值：无
    *  作者：蔡健
    *  日期：2013.11.24
    *  版本：1.0
    */
    function onSelectedChanged(item, queryFn, itemParent) {

        if ($(item).parent().parent().attr("id") == "selDefaultBtn") {
            return;
        }
        //设置选择的值到，当前选择项的父节点
        $(item).parent().attr("value", $(item).attr("value"));
        $(item).parent().siblings("span.text").html($(item).html());

        //选择年份
        if ($(item).parent().attr("id") == "divYear") {
            //初始化季度
            $("#spanQuarter").html("--季度--");
            //初始化月份
            $("#spanMonth").html("--月份--");
            $("#divMonth a").show();
        }

        //选择季度
        if ($(item).parent().attr("id") == "divQuarter") {
            var aryMonth = $("#divMonth a");
            if (aryMonth.length == 12) {

                //将月度初始化
                $("#spanMonth").html("--月份--");
                $(aryMonth).hide();
                switch ($(item).html()) {
                    case "第一季度":
                        $(aryMonth[0]).show();
                        $(aryMonth[1]).show();
                        $(aryMonth[2]).show();
                        break;
                    case "第二季度":
                        $(aryMonth[3]).show();
                        $(aryMonth[4]).show();
                        $(aryMonth[5]).show();
                        break;
                    case "第三季度":
                        $(aryMonth[6]).show();
                        $(aryMonth[7]).show();
                        $(aryMonth[8]).show();
                        break;
                    case "第四季度":
                        $(aryMonth[9]).show();
                        $(aryMonth[10]).show();
                        $(aryMonth[11]).show();
                        break;
                }
            }
        }

        //给全局变量JSONOBJ赋值
        //扩展且是查询按钮   或   JS插件默认的查询条件，则要执行查询方法
        if (($(itemParent).attr("isextend") && $(itemParent).attr("isextend") == "true"
            && $(itemParent).attr("isquery") && $(itemParent).attr("isquery") == "true") || (!$(itemParent).attr("isextend"))) {
            //查询
            queryFn(setJSONOBJ());
        }
    };

    /*
    *  功能:   收集查询条件
    *  参数:   obj 对象，暂时仅用于自定义时间
    *  返回值：查询条件
    *  作者：蔡健
    *  日期：2013.11.24
    *  版本：1.0
    */
    function setJSONOBJ(obj) {
        var JSONOBJ = {};
        //得到初始化查询包装集
        var strRegion = "";
        var strRegionName = "";
        var strYear = "";
        var strYearValue = "";
        var strStart = "";
        var strEnd = "";
        //是否是自定义时间查询
        var isCustom = false;

        //获取行政规划相关信息
        if ($("#spanXZQH").length > 0 && $("#spanXZQH").html() != "行政区划") {
            //todo liubing 2016.2.23 修正取行政区划编号的错误
            strRegion = $("#divXZQH").attr("value");
            strRegionName = $("#spanXZQH").html();
        } else if ($("#spanXZQH").length > 0 && $("#spanXZQH").html() == "行政区划") {
            strRegion = $("a.menuItem[title='全部']").attr("value");
            strRegionName = "全部";
        }

        if ($("#spanYear").length > 0 && $("#spanYear").html() != "--年度--") {
            //strYear = $("#spanYear").html();
            strYear = $("#divYear").attr("value");
            strYearValue = strYear.replace(/年/g, "");
        }

        //自定义时间赋值
        if (obj) {
            strStart = obj.start;
            strEnd = obj.end;
            if (strStart != "" || strEnd != "") {
                isCustom = true;
            }
        }

        var strQuarter = ($("#spanQuarter").html() == "--季度--") ? "" : $("#divQuarter").attr("value");
        var strMonth = ($("#spanMonth").html() == "--月份--") ? "" : $("#divMonth").attr("value");
        JSONOBJ = { "region": strRegion, "regionName": strRegionName, "year": strYear, "yearValue": strYearValue, "quarter": strQuarter, "month": strMonth, "isCustom": isCustom, "start": strStart, "end": strEnd };

        if (obj)
        {
            JSONOBJ=$.extend({}, JSONOBJ, obj);
        }
        var fields = {}
        //遍历配置文件中扩展配置按钮，并设置选择的值到json对象中去
        $("div[isextend='true'][isquery='true'] div[title]").each(function () {
            //获取当前可见的查询条件
            if ($(this).parent().css("display") == "block")
            {
                var strName = $(this).attr("title");
                if (strName) {
                    var strValue = $(this).attr("value");
                    $(fields).attr(strName, strValue);
                }
            }

        });

        if (JSONOBJ.fields) {
            var objField = $.extend({}, fields, JSONOBJ.fields);
            $(JSONOBJ).attr("fields", $.toJSON(objField));
        }
        else {
            $(JSONOBJ).attr("fields", $.toJSON(fields));
        }

        //将收集好的条件替换到data(sQueryBlockKey)的查询条件属性中
        var odata = $("#" + sQueryBlockContainerId).data(sQueryBlockKey);
        if (odata) {
            odata._queryConditions = JSONOBJ;
        }

        return JSONOBJ;
    };


    // sunxueting 2015-10-14
    //设置打印，返回xml字符串
    function buildPrintButton(oParam) {
        var sXml = [];
        //sXml.push("<div class='menuPrint' style='display: " + oParam.display + ";'>");
        //sXml.push("    <div class='img'  style='float:left;'>&nbsp;&nbsp;</div><div  style='float:left;'>&nbsp;打 印</div>");
        //sXml.push("</div>");
        sXml.push('<a class="g-link-print" style="display: ' + oParam.display + ';">打印</a>');
        return sXml.join("");
    };

    //设置导出，返回xml字符串
    function buildExportButton(oParam) {
        var sXml = [];
        //sXml.push("<div class='menuExcelOut' style='display: " + oParam.display + ";'>");
        //sXml.push("     <div class='img'  style='float:left;'>&nbsp;&nbsp;</div><div style='float:left;'>&nbsp;导 出</div>");
        //sXml.push("</div>");
        sXml.push('<a class="g-link-exp" style="display: ' + oParam.display + ';">导出</a>');
        return sXml.join("");
    };

    //设置返回，返回xml字符串
    function buildBackButton(oParam) {
        var sXml = [];
        sXml.push("<div class='menuReturn' style='display: " + oParam.display + ";'>");
        sXml.push("     返 回 ");
        sXml.push("</div>");
        return sXml.join("");
    };
    /*
   *  功能:   单选控件的点击事件
   *  参数:   oRadio 单选按钮this对象
   *  返回值: 无
   *  作者:   蔡健
   *  日期:   2014.4.10
   *  版本:   1.0
   */
    function onRadioClick(oRadio) {
        if ($(oRadio).is("input") ) {
            //查找并重置所有checkbox 
            $(oRadio).parent().parent().find("input[type='radio']").each(function () {
                $(this).attr("value", 0);
                $(this).parent().attr("value", "");
            });

            //设置当前选择的checkbox
            $(oRadio).attr("value", 1);
            $(oRadio).parent().attr("value", 1);
        }
    };

    /*
*  功能:   单选按钮的onchange事件
*  参数:   sYwTitle 业务标题
*  返回值: 无
*  作者:   蔡健
*  日期:   2014.4.10
*  版本:   1.0
*/
    function onRadioDblClick(oRadio) {
        if ($(oRadio).attr("checked") == "checked") {
            //改变选择状态
            $(oRadio).attr("checked", false);
            //改变赋值，然后可以重新收集查询条件
            $(oRadio).attr("value", 0);
            $(oRadio).parent().attr("value", "");
        } else {
            //清空所有单选按钮的值
            $(oRadio).parent().parent().find("input[type='radio']").each(function () {
                $(this).attr("value", 0);
                $(this).parent().attr("value", "");
            });
            //改变选择状态
            $(oRadio).attr("checked", true);
            //改变赋值，然后可以重新收集查询条件
            $(oRadio).attr("value", 1);
            $(oRadio).parent().attr("value", 1);
        }
    };

    /*
*  功能:   当开始时间清空的时候，一并清空结束时间
*  参数:   oInput 开始时间input对象
*  返回值: 无
*  作者:   蔡健
*  日期:   2014.4.10
*  版本:   1.0
*/
    function clearEndDate(oInput) {
        if ($(oInput).attr("value") == "") {
            //改变选择状态
            $(oInput).next().attr("value", "");
        }
    };
    
    /**********************************************************以上为功能性函数************************************************************/
})(jQuery);