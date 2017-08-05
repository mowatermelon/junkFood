(function ($) {
    //用于存放图形控件的数据
    var JNYJ_DATA;
    //用于存放表格容器ID
    var GRIDDIVID;


    /*
    *  功能:   异步请求批后检测预警
    *  参数:   dataType：要显示的数据（）
    *  返回值：无
    *  作者：caijian
    *  日期：2014.07.16
    *  版本：1.0
    */
    $.fn.geoloadGridData_YJ = function (options) {
        //容器ID
        GRIDDIVID = options.divid;
        //行政区划
        var sXZQH = options.XZQH;
        //当前所选行政区划
        var sRegion = options.region;
        //当前年份
        var nApplicationYear = options.year;
        //ajax对应的Url
        var strUrl = options.ajaxUrl;
        //业务类型
        var sDataType = options.dataType;

        var columnsHead = options.columnsHead;

        var grid = null;

        var objFieldsFromQueryBar = "{}"
        try {
            objFieldsFromQueryBar = $.toJSON({ "region": sRegion, "regionName": "", "year": nApplicationYear + "年", "yearValue": nApplicationYear, "quarter": "", "month": "", "isCustom": false, "start": "", "end": "" });
        }
        catch (e) {

        }
        strUrl += strUrl.indexOf("?") == -1 ? "?" : "&";
        strUrl += "Type=" + escape(sDataType);
        strUrl += "&XZQH=" + escape(sXZQH); //"2101";//
        strUrl += "&T=" + Math.random();

        var gdPhjg = $("#" + GRIDDIVID).ligerGrid(
        {
            columns: columnsHead,
            width: "auto",
            height: "auto",
            //height: intHeight, //由liubing 屏蔽
            //height: 'auto',//todo newpin 2013.1217
            usePager: false,
            isScroll: false,
            enabledSort: false,
            rownumbers: false,
            url: strUrl,
            rowHeight: 28,
            allowUnSelectRow: true,           //是否允许反选行 
            alternatingRow: false,           //奇偶行效果
            selectRowButtonOnly: true,
            headerRowHeight: 38,
            parms: { "queryCondition": objFieldsFromQueryBar },
            onAfterShowData: function (grid) {
                JNYJ_DATA = grid;
                //初始化开竣工列表样式
                //initLigerGridStyle();
                //$("#divChart").width("auto");
                //默认显示应缴
                //使用回调，将此方法放在外面处理
                $("#" + GRIDDIVID + " .l-grid-hd-cell")[1].click();
                options.__callbackFn(1);
                //onChangeCloCssClick($("#a1"), 1);
            }
        });

        $("#" + GRIDDIVID + " .l-grid-hd-cell").bind("click", function () {
            initLigerGridStyle();
            //设置标题
            var oHeadTrs$ = $(this);
            oHeadTrs$.removeClass("colStyle_init1");
            oHeadTrs$.removeClass("colStyle_init2");
            oHeadTrs$.addClass("colStyle_click");
            var nIndex = oHeadTrs$.attr("columnindex");
            //设置内容
            var oBodyTrs$ = $("#" + GRIDDIVID + "grid div.l-grid-body-inner table.l-grid-body-table tr.l-grid-row");
            oBodyTrs$.each(function () {
                $($(this)[0].childNodes[nIndex]).addClass("colStyle_click");
            });
        });
    };

    /*
    *  功能:   设置列表初始化样式
    *  参数:   无
    *  返回值：无
    *  作者：caijian
    *  日期：2014.07.16
    *  版本：1.0
    */
    function initLigerGridStyle() {
        //设置标题
        var oHeadTrs$ = $("#" + GRIDDIVID + "grid div.l-grid-header-inner table.l-grid-header-table tr.l-grid-hd-row td");
        oHeadTrs$.each(function (i, value) {
            $(this).addClass("colStyle_init1");
            $(this).removeClass("colStyle_click");
        });
        //设置内容 偶数列
        var oBodyTrs$ = $("#" + GRIDDIVID + "grid div.l-grid-body-inner table.l-grid-body-table tr.l-grid-row td:odd");
        oBodyTrs$.each(function (i, value) {
            $(this).addClass("colStyle_init1");
            $(this).removeClass("colStyle_click");
        });
        //设置内容 奇数列
        var oBodyTrs$ = $("#" + GRIDDIVID + "grid div.l-grid-body-inner table.l-grid-body-table tr.l-grid-row td:even");
        oBodyTrs$.each(function (i, value) {
            $(this).addClass("colStyle_init2");
            $(this).removeClass("colStyle_click");
        });
    };

    /*
    *  功能:   加载柱状图
    *  参数:   无
    *  返回值：无
    *  作者：caijian
    *  日期：2014.07.16
    *  版本：1.0
    */
    $.fn.geoshowAmchart = function (options) {

        $("#" + options.divid).width(divBody.clientWidth);
        $("#" + options.divid).height(divBody.clientHeight);
        var oColumnData = JNYJ_DATA;

        var aColumnDataList = [];
        var jsonFormate = {};
        var charObj = null;

        var sXZQHName = "";
        var sShowColumn = "";

        //
        aColumnDataList = options.__callbackFn(options.nType, oColumnData);

        //加载柱状图
        jsonFormate.chartData = jQuery.parseJSON("[" + aColumnDataList.join(",") + "]");
        jsonFormate.categoryField = options.xname;
        jsonFormate.title = options.xname;
        jsonFormate.desp1 = ["", ""];
        jsonFormate.desp2 = ["", ""];
        jsonFormate.unit = options.unit;
        jsonFormate.precision = 0;
        jsonFormate.valueFields = [options.yname];
        jsonFormate.stackType = "regular";
        jsonFormate.chartType = 1;
        //jsonFormate.clickEvent = test;
        jsonFormate.is3D = true;
        charObj = GetChart(jsonFormate);
        charObj.write(options.divid);

        $("#" + options.divid).css("overflow", "");
        $("#" + options.divid).children().css("overflow", "");
        $("div.l-grid-body.l-grid-body2.l-scroll").css("overflow", "hidden");
    };
})(jQuery);