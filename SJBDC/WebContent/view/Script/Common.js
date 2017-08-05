//引用主页弹窗对象
var tip = parent.tip;
//var confirm = parent.confirm;
var notice = parent.notice;
var dialog = parent.dialog;
var ShowPage = parent.ShowPage;
var CloseDialog = parent.CloseDialog;
var MoreDialog = parent.MoreDialog;

$(function () {
    //引用主页弹窗对象
    var alert = typeof parent.alert == undefined ? window.alert : parent.alert;
    //引用主页弹窗对象
    var confirm = typeof parent.confirm == undefined ? window.confirm : parent.confirm;
    //屏蔽input删除键回退
    document.onkeydown = BlockedBackSpace;
});
////获取浏览器url参数
//function request(paras) {
//    var url = location.href;
//    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
//    var paraObj = {}
//    for (i = 0; j = paraString[i]; i++) {
//        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
//    }
//    var returnValue = paraObj[paras.toLowerCase()];
//    if (typeof (returnValue) == "undefined") {
//        return "";
//    } else {
//        return returnValue;
//    }
//};

/**
*修复IE6下PNG图片不能透明显示的问题
*<img src=".png" onload="fixPNG(this);" />
*/
function fixPNG(myImage) {
    var arVersion = navigator.appVersion.split("MSIE");
    var version = parseFloat(arVersion[1]);
    if ((version >= 5.5) && (version < 7) && (document.body.filters)) {
        var imgID = (myImage.id) ? "id='" + myImage.id + "' " : "";
        var imgClass = (myImage.className) ? "class='" + myImage.className + "' " : "";
        var imgTitle = (myImage.title) ? "title='" + myImage.title + "' " : "title='" + myImage.alt + "' ";
        var imgStyle = "display:inline-block;" + myImage.style.cssText;
        var strNewHTML = "<span " + imgID + imgClass + imgTitle

	   + " style=\"" + "width:" + myImage.width

	   + "px; height:" + myImage.height

	   + "px;" + imgStyle + ";"

	   + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"

	   + "(src=\'" + myImage.src + "\', sizingMethod='scale');\"></span>";
        myImage.outerHTML = strNewHTML;
    }
};

/**
*获取IE版本
*/
var GetIEVer = function () {
    var sCki = getCookieByName("HTIEVer");
    if (sCki != null && sCki != "" && sCki != "undefined") {
        return sCki;
    }
    else {
        var ua = navigator.userAgent;
        if (ua.indexOf("IE 10") > 0) return 10;
        if (ua.indexOf("IE 9") > 0) return 9;
        if (ua.indexOf("IE 8") > 0) return 8;
        if (ua.indexOf("IE 7") > 0) return 7;
        if (ua.indexOf("IE 6") > 0) return 6;
        return 0;
    }
};

/**
*获取指定名称的cookie的值
*/
var getCookieByName = function (objName) {
    var arrStr = document.cookie.split(";");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) {
            return unescape(temp[1]);
        }
    }
    return null;
};

$(function () {
    //将checkbox替换成想到的样式，Range：范围，CheckedClass，选中的样式，UnCheckedClass，没选中的样式
    //by:tangjie
    (function ($) {
        $.fn.ChangeCheckbox = function (opions) {
            var defaluts = { Range: "body", CheckedClass: "checked", UnCheckedClass: "unchecked" };
            var Opions = $.extend(defaluts, opions);
            $(this).each(function () {
                $(Opions.Range + " input[type='checkbox']").each(function () {
                    var state = $(this).attr("checked") ? Opions.CheckedClass : Opions.UnCheckedClass;
                    var check = $("<span class=" + state + " ></span>").click(function () {
                        if ($(this).hasClass(Opions.CheckedClass)) {
                            $(this).attr("class", Opions.UnCheckedClass)
                            $(this).prev().attr("checked", false)
                        }
                        else {
                            $(this).attr("class", Opions.CheckedClass)
                            $(this).prev().attr("checked", true)
                        }
                    });
                    $(this).hide();
                    $(this).after(check);
                })
            })
        }
    })(jQuery)
});

/*
*  功能:   设置要保留的小数位数，四舍五入。*这里的方法是先乘以10的倍数，
           然后去掉小数，最后再除以10的倍数。
*  参数:   dight:要格式化的 数字
           how：要保留的小数位数。
*  返回值：无
*  作者：newpin
*  日期：2013.11.04
*  版本：1.0
*/
function ForDight(dight, how) {
    var data = "-";
    if (dight || dight== 0 ) {
        data = dight.toFixed(how);
    }
    return data;
};


function GetChart(dataFormated)
{
    var chart = null;
    switch (dataFormated.chartType)
    {
        case 0://线状图
            chart = ShowLineChart(dataFormated);
            break;
        case 1://柱状图
            chart = ShowColumnChart(dataFormated);
            break;
        case 2://双柱状图
            chart = ShowDoubleColumnChart(dataFormated);
            break;
        case 3://饼状图
            chart = ShowPieChart(dataFormated);
            break;
        case 4://仪表警示图
            chart = ShowGuardChart(dataFormated);
            break;
        case 5:
            chart = ShowPieChart2(dataFormated);
            break;
    }
    return chart;
}

/*
*  功能:   加载统计图
*  参数:    chart:统计图对象
            jsonData:统计数据
            precision:小数点后有效位数
            unit：单位
            targetDiv:显示统计图的目标图层
            chartType:统计图类型
            arrFields:统计字段
            arrDesp1:统计值前描述
            arrDesp2:统计值后描述
            stackType:双列显示时，列的显示方式:默认为双列显示，stackType=regular为叠加显示
*  返回值：无
*  作者：newpin
*  日期：2013.12.04
*  版本：1.0
*/
function ShowChart(chart, jsonData, precision, unit, targetDiv,chartType,arrFields,arrDesp1,arrDesp2,stackType) {
    var dataFormated = {};
    if (typeof (chartType) == "undefined") {
        dataFormated.chartType = 1;
    }
    else {
        dataFormated.chartType = chartType;
    }

    dataFormated.chartData = jsonData;
    dataFormated.valueFields = arrFields;
    dataFormated.desp1 = arrDesp1;
    dataFormated.desp2 = arrDesp2;
    dataFormated.precision = precision;
    dataFormated.unit = unit;
    dataFormated.stackType = stackType;
    //设置出让金收缴统计图统计数据
    chart = GetChart(dataFormated);
    //显示统计图到目标图层
    chart.write(targetDiv);
    return chart;
};

/*
*  功能:    返回显示线状统计图
*  参数:    dataForamted
*  返回值：chart
*  作者：newpin
*  日期：2013.12.06
*  版本：1.0
*/
function ShowLineChart(dataForamted) {
    if (typeof (dataForamted.chartData) == "undefined") {
        return null;
    }
    if (typeof (dataForamted.precision) != "number") {
        dataForamted.precision = 2;
    }
    if (typeof (dataForamted.valueFields) == "undefined"
        || dataForamted.valueFields.length == 0) {
        dataForamted.valueFields = new Array("TOTALCOUNT");
    }

    if (typeof (dataForamted.desp1) == "undefined"
        || dataForamted.desp1.length == 0) {
        dataForamted.desp1 = new Array("截止", "");
    }

    if (typeof (dataForamted.desp2) == "undefined"
        || dataForamted.desp2.length == 0) {
        dataForamted.desp2 = new Array("", "");
    }

    if (typeof (dataForamted.unit) == "undefined") {
        dataForamted.unit = "";
    }

    if (typeof (dataForamted.categoryField) == "undefined") {
        dataForamted.categoryField = "CATEGORY";
    }

    if (typeof (dataForamted.arrColor) == "undefined") {
        dataForamted.arrColor = ["#2994DC", "#80cb30"];
    }

    if (typeof (dataForamted.startDuration) == "undefined") {
        dataForamted.startDuration = 1;
    }

    for (var index in dataForamted.chartData) {
        //设置统计值显示时对应的颜色值
        if (index == 0) {
            dataForamted.chartData[index].COLOR = "#80CB30";
        }
        else if (index == dataForamted.chartData.length - 2) {
            dataForamted.chartData[index].COLOR = "#80CB30";
        }
    }

    // SERIAL CHART
    var chart = new AmCharts.AmSerialChart();
    chart.color = "#888888";
    chart.dataProvider = dataForamted.chartData;
    chart.categoryField = dataForamted.categoryField;
    chart.startDuration = dataForamted.startDuration;

    // AXES
    // category
    var categoryAxis = chart.categoryAxis;
    categoryAxis.dashLength = 1;
    categoryAxis.fillColor = "#ffffff";
    categoryAxis.axisColor = "#888888";


    // value
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.inside = false;
    valueAxis.axisColor = "#888888";
    chart.addValueAxis(valueAxis);

    // GRAPH
    var graph = new AmCharts.AmGraph();
    graph.valueAxis = valueAxis;
    graph.bullet = "round";
    graph.bulletSize = 8;
    graph.bulletBorderColor = "#FFFFFF";

    //graph.bulletBorderThickness = 1;
    //graph.bulletBorderAlpha = 1;
    //graph.connect = false;
    //graph.fillAlphas = 0.3;
    //graph.lineColor = "#36C573";
    graph.fillColorsField = "COLOR";
    graph.lineColor = dataForamted.arrColor[0];
    //graph.lineThickness = 1;
    graph.title = dataForamted.valueFields[0];
    graph.valueField = dataForamted.valueFields[0];
    if (dataForamted.labelText) {
        graph.labelText = "[[value]]";
    }
    graph.balloonText = dataForamted.desp1[0] + "[[category]]" + dataForamted.desp2[0] + "<b><span>[[value]]" + dataForamted.unit + "</span></b>";
    chart.addGraph(graph);

    if (dataForamted.valueFields.length > 1) {
        //第二根线
        graph = new AmCharts.AmGraph();
        graph.valueAxis = valueAxis;
        graph.bullet = "round";
        graph.bulletSize = 8;
        graph.bulletBorderColor = "#FFFFFF";

        //graph.bulletBorderThickness = 1;
        //graph.bulletBorderAlpha = 1;
        //graph.connect = false;
        //graph.fillAlphas = 0.3;
        graph.lineColor = dataForamted.arrColor[1];
        //graph.lineThickness = 1;
        graph.title = dataForamted.valueFields[1];
        graph.valueField = dataForamted.valueFields[1];
        if (dataForamted.labelText) {
            graph.labelText = "[[value]]";
        }
        graph.balloonText = dataForamted.desp1[1] + "[[category]]" + dataForamted.desp2[1] + dataForamted.valueFields[1] + "<b><span>[[value]]" + dataForamted.unit + "</span></b>";
        chart.addGraph(graph);

        if (typeof (dataForamted.legend) != "undefined" && dataForamted.legend == true) {
            var legend = new AmCharts.AmLegend();
            chart.addLegend(legend);
        }
    }
    if (dataForamted.valueFields.length > 2) {
        //第三根线
        graph = new AmCharts.AmGraph();
        graph.valueAxis = valueAxis;
        graph.bullet = "round";
        graph.bulletSize = 8;
        graph.bulletBorderColor = "#FFFFFF";

        graph.bulletBorderThickness = 1;
        graph.bulletBorderAlpha = 1;
        graph.connect = false;
        graph.fillAlphas = 0.3;
        graph.fillColorsField = "COLOR";
        graph.lineColor = "#36C573";
        graph.title = dataForamted.valueFields[2];
        graph.lineThickness = 1;
        graph.valueField = dataForamted.valueFields[2];
        if (dataForamted.labelText) {
            graph.labelText = "[[value]]";
        }
        graph.balloonText = dataForamted.desp1[1] + "[[category]]" + dataForamted.desp2[1] + dataForamted.valueFields[0] + "<b><span>[[value]]" + dataForamted.unit + "</span></b>";
        chart.addGraph(graph);

        if (typeof (dataForamted.legend) != "undefined" && dataForamted.legend == true) {
            var legend = new AmCharts.AmLegend();
            chart.addLegend(legend);
        }
    }

    // CURSOR  
    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorAlpha = 0;
    chartCursor.cursorPosition = "mouse";
    chartCursor.graphBulletSize = 1.5;
    chart.addChartCursor(chartCursor);
    chart.numberFormatter.precision = dataForamted.precision;
    return chart;
};

/*
*  功能:    返回柱状统计图
*  参数:    dataForamted
*  返回值： chart
*  作者：newpin
*  日期：2013.12.06
*  版本：1.0
*/
function ShowColumnChart(dataForamted) {
    var arrColor = new Array("#2994DC", "#B0CA1F", "#80CB30", "#2994DC", "#80CB30");

    if (typeof (dataForamted.chartData) == "undefined") {
        return null;
    }
    if (typeof (dataForamted.precision) != "number") {
        dataForamted.precision = 2;
    }
    if (typeof(dataForamted.valueFields) == "undefined"
        || dataForamted.valueFields.length == 0) {
        dataForamted.valueFields = new Array("TOTALCOUNT");
    }

    if (typeof(dataForamted.desp1) == "undefined"
        || dataForamted.desp1.length == 0) {
        dataForamted.desp1 = new Array("截止","");
    }

    if (typeof(dataForamted.desp2) == "undefined"
        || dataForamted.desp2.length == 0) {
        dataForamted.desp2 = new Array("","");
    }

    if (typeof(dataForamted.unit) == "undefined") {
        dataForamted.unit = "";
    }

    if (typeof (dataForamted.categoryField) == "undefined") {
        dataForamted.categoryField = "CATEGORY";
    }

    if (typeof (dataForamted.arrColor) != "undefined") {
        arrColor = dataForamted.arrColor;
    }

    if (typeof (dataForamted.startDuration) == "undefined") {
        dataForamted.startDuration = 0;
    }

    for (var index in dataForamted.chartData) {
        //设置统计值显示时对应的颜色值
        dataForamted.chartData[index].COLOR = arrColor[index % 5];
    }

    var chart = new AmCharts.AmSerialChart();
    chart.color = "#888888";
    chart.borderColor = "#888888";
    chart.dataProvider = dataForamted.chartData;
    chart.categoryField = dataForamted.categoryField;

    //增加柱子点击事件
    if (typeof (dataForamted.clickEvent) == "function") {
        chart.addListener("clickGraphItem", dataForamted.clickEvent);
    }

    if (0.075 * dataForamted.chartData.length <= 0.3) {
        chart.columnWidth = 0.075 * dataForamted.chartData.length;
    }
    else {
        chart.columnWidth = 0.4;
    }
    chart.columnSpacing = 0;
    chart.startDuration = 1;
    chart.startDuration = dataForamted.startDuration;
    chart.startEffect = ">";
    if (typeof (dataForamted.is3D) != "undefined") {
        chart.depth3D = 20;
        chart.angle = 30;
    }

    var categoryAxis = chart.categoryAxis;
    categoryAxis.axisColor = "#888888";

    //横向显示的字体倾斜度
    if (typeof (dataForamted.labelRotation) != "undefined") {
        categoryAxis.labelRotation = dataForamted.labelRotation;
    }

    var valueAxis = new AmCharts.ValueAxis();
    //valueAxis.stackType = "regular";
    valueAxis.axisColor = "#888888";
    chart.addValueAxis(valueAxis);

    var graph = new AmCharts.AmGraph();
    graph.valueField = dataForamted.valueFields[0]
    graph.colorField = "COLOR";
    graph.type = "column";
    graph.fillAlphas = 1;
    graph.cornerRadiusTop = 0;
    graph.lineAlpha = 0;
    if (dataForamted.labelText) {
        graph.labelText = "[[value]]";
    }
    graph.balloonText = "<span style='font-size:12px;color:#555555;'>" + dataForamted.desp1[0];
    graph.balloonText += "[[category]]" + dataForamted.desp2[0] + "<b>[[value]]" + dataForamted.unit + "</b></span>";
    chart.addGraph(graph);

    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorAlpha = 0;
    chartCursor.zoomable = false;
    chartCursor.categoryBalloonEnabled = false;
    chart.addChartCursor(chartCursor);
    chart.numberFormatter.precision = dataForamted.precision;

    chart.rotate = dataForamted.rotate;
    return chart;
};

/*
*  功能:    返回双柱状统计图
*  参数:    dataForamted
*  返回值： chart
*  作者：newpin
*  日期：2013.12.06
*  版本：1.0
*/
function ShowDoubleColumnChart(dataForamted) {
    var arrColor = new Array("#3E71E6", "#E2594F", "#36C573", "#3E71E6", "#36C573");

    if (typeof (dataForamted.chartData) == "undefined") {
        return null;
    }
    if (typeof (dataForamted.precision) != "number") {
        dataForamted.precision = 2;
    }
    if (typeof (dataForamted.valueFields) == "undefined"
        || dataForamted.valueFields.length == 0) {
        dataForamted.valueFields = new Array("TOTALCOUNT","");
    }

    if (typeof (dataForamted.desp1) == "undefined"
        || dataForamted.desp1.length == 0) {
        dataForamted.desp1 = new Array(dataForamted.valueFields[0], "");
    }

    if (typeof (dataForamted.desp2) == "undefined"
        || dataForamted.desp2.length == 0) {
        dataForamted.desp2 = new Array(dataForamted.valueFields[1], "");
    }

    if (typeof (dataForamted.unit) == "undefined") {
        dataForamted.unit = "";
    }

    if (typeof (dataForamted.categoryField) == "undefined") {
        dataForamted.categoryField = "CATEGORY";
    }

    if (typeof (dataForamted.startDuration) == "undefined") {
        dataForamted.startDuration = 0;
    }

    if (typeof (dataForamted.lineColor) == "undefined") {
        dataForamted.lineColor = arrColor;
    }

    for (var index in dataForamted.chartData) {
        //设置统计值显示时对应的颜色值
        dataForamted.chartData[index].COLOR = arrColor[index % 5];
    }

    // SERIAL CHART
    var chart = new AmCharts.AmSerialChart();
    chart.color = "#888888";
    chart.borderColor = "#888888";
    chart.dataProvider = dataForamted.chartData;
    chart.categoryField = dataForamted.categoryField;
    chart.rotate = dataForamted.rotate;
    if (0.075 * dataForamted.chartData.length <= 0.3) {
        chart.columnWidth = 0.18 * dataForamted.chartData.length;
    }
    else {
        chart.columnWidth = 0.5;
    }
    chart.columnSpacing = 0;
    chart.startDuration = dataForamted.startDuration;
    chart.startEffect = ">";
    if (typeof (dataForamted.is3D) != "undefined") {
        chart.depth3D = 20;
        chart.angle = 30;
    }

    var categoryAxis = chart.categoryAxis;
    categoryAxis.axisColor = "#888888";

    var valueAxis = new AmCharts.ValueAxis();
    if (typeof (dataForamted.stackType) == "undefined") {
        //valueAxis.stackType = "";
    }
    else {
        valueAxis.stackType = dataForamted.stackType;
    }
    valueAxis.axisColor = "#888888";
    chart.addValueAxis(valueAxis);

    var graph = new AmCharts.AmGraph();

    graph.title = dataForamted.valueFields[0];
    graph.valueField = dataForamted.valueFields[0];
    graph.type = "column";
    graph.lineAlpha = 0;
    graph.fillAlphas = 1;
    graph.cornerRadiusTop = 0;
    graph.lineColor = dataForamted.lineColor[0];
    if (dataForamted.labelText) {
        graph.labelText = "[[value]]";
    }
    graph.balloonText = "<span style='color:#555555;'>" + dataForamted.desp1[0];
    graph.balloonText += dataForamted.desp2[0] + "</span>";
    graph.balloonText += "<span style='font-size:14px'>[[title]]<b>[[value]]" + dataForamted.unit + "</b></span>";

    chart.addGraph(graph);

    graph = new AmCharts.AmGraph();
    graph.title = dataForamted.valueFields[1];
    graph.valueField = dataForamted.valueFields[1];
    graph.type = "column";
    graph.lineAlpha = 0;
    graph.fillAlphas = 1;
    graph.cornerRadiusTop = 0
    graph.cornerRadiusBottom = 0;
    graph.lineColor = dataForamted.lineColor[1];
    if (dataForamted.labelText) {
        graph.labelText = "[[value]]";
    }
    graph.balloonText = "<span style='color:#555555;'>" + dataForamted.desp1[1];
    graph.balloonText +=  dataForamted.desp2[1] + "</span>"
    graph.balloonText += "<span style='font-size:14px'>[[title]]<b>[[value]]";
    graph.balloonText += dataForamted.unit + "</b></span>";

    chart.addGraph(graph);

    //控制双柱图同时显示2个柱子的说明
    //var chartCursor = new AmCharts.ChartCursor();
    //chartCursor.cursorAlpha = 0;
    //chartCursor.zoomable = false;
    //chartCursor.categoryBalloonEnabled = false;
    //chart.addChartCursor(chartCursor);

    chart.numberFormatter.precision = dataForamted.precision;

    if (dataForamted.legend != undefined && dataForamted.legend == true) {
        var legend = new AmCharts.AmLegend();
        if (dataForamted.legendPosition != undefined) {
            legend.position = dataForamted.legendPosition;
            legend.valueText = "[[value]]";
            legend.valueWidth = 10;
        }
        chart.addLegend(legend);
    }
    return chart;
};

/*
*  功能:    显示饼状图
*  参数:    dataForamted
*  返回值： chart
*  作者：newpin
*  日期：2013.12.06
*  版本：1.0
*/
function ShowPieChart(dataForamted) {
    if (typeof (dataForamted.chartData) == "undefined") {
        return null;
    }
    if (typeof (dataForamted.precision) != "number") {
        dataForamted.precision = 2;
    }
    if (typeof (dataForamted.valueFields) == "undefined"
        || dataForamted.valueFields.length == 0) {
        dataForamted.valueFields = new Array("TOTALCOUNT");
    }

    if (typeof (dataForamted.desp1) == "undefined"
        || dataForamted.desp1.length == 0) {
        dataForamted.desp1 = new Array("", "");
    }

    if (typeof (dataForamted.desp2) == "undefined"
        || dataForamted.desp2.length == 0) {
        dataForamted.desp2 = new Array("", "");
    }

    if (typeof (dataForamted.unit) == "undefined") {
        dataForamted.unit = "";
    }

    if (typeof (dataForamted.categoryField) == "undefined") {
        dataForamted.categoryField = "CATEGORY";
    }
    if (typeof (dataForamted.titleField) == "undefined") {
        dataForamted.titleField = "CATEGORY";
    }
    var arrColors = ["#48C77D", "#E6655C", "#22BF64", "#AED233", "#53CE02",
                    "#129B00", "#56E477", "#10AE7C", "#39BBF1", "#038DC6",
                    "#0570D3", "#0A58A0", "#4872EA", "#484FEA", "#0008A6",
                    "#875CEA", "#5423C3", "#D932FD", "#8704A3", "#AD1292", "#FF15D6"];
    var chart = new AmCharts.AmPieChart();
    chart.color = "#888888";
    chart.colors = arrColors;
    chart.dataProvider = dataForamted.chartData;
    chart.titleField = dataForamted.titleField;
    chart.valueField = dataForamted.valueFields[0];
    chart.outlineColor = "#FFFFFF";
    chart.outlineAlpha = 0.8;
    chart.outlineThickness = 2;
    if (dataForamted.radius != "" && dataForamted.radius != undefined) {
        chart.radius = dataForamted.radius;
    }
    if (dataForamted.innerRadius != "" && dataForamted.innerRadius != undefined) {
        chart.innerRadius = dataForamted.innerRadius;
    }
    //是否影藏说明
    if (dataForamted.labelsEnabled != undefined) {
        chart.labelsEnabled = dataForamted.labelsEnabled;
    }

    chart.balloonText = dataForamted.desp1[0] + "[[title]]" + dataForamted.desp1[1];
    chart.balloonText += "<br /><span style='font-size:14px'><b>[[value]]</b>";
    chart.balloonText += dataForamted.unit + "<br />占比[[percents]]%</span>";


    chart.numberFormatter.precision = dataForamted.precision;
    if (typeof (dataForamted.is3D) != "undefined") {
        chart.depth3D = 15;
        chart.angle = 30;
    }
    
    if (typeof (dataForamted.fontSize) != "undefined") {
        chart.fontSize = dataForamted.fontSize;
    }
    //chart.fontSize = "10px"
    chart.color = "white";
    chart.labelText = "[[percents]]%";
    chart.labelRadius = -25;
    chart.width = "100%";
    chart.height = "300%";
    ////if()
    //chart.allLabels =
    //[
	//	{
	//	    "text": "11111",
	//	    "bold": true,
	//	    "x": "35%",
	//	    "y": "47%",
    //        //"align":"middle"
	//	}
    //];

    legend = new AmCharts.AmLegend();
    legend.align = "center";
    legend.valueText = "";
    //legend.valueWidth = 30;
    legend.position = "right";
    legend.switchType = "v";
    legend.color = "#888888";

    //legend.labelText = "[[percents]]%";
    if (typeof (dataForamted.legend) != "undefined" && dataForamted.legend == true) {
        chart.addLegend(legend);
    }

    return chart;
};

/*
*  功能:    显示饼状图
*  参数:    dataForamted
*  返回值： chart
*  作者：newpin
*  日期：2013.12.06
*  版本：1.0
*/
function ShowPieChart2(dataForamted) {
    if (typeof (dataForamted.chartData) == "undefined") {
        return null;
    }
    if (typeof (dataForamted.precision) != "number") {
        dataForamted.precision = 2;
    }
    if (typeof (dataForamted.valueFields) == "undefined"
        || dataForamted.valueFields.length == 0) {
        dataForamted.valueFields = new Array("TOTALCOUNT");
    }

    if (typeof (dataForamted.desp1) == "undefined"
        || dataForamted.desp1.length == 0) {
        dataForamted.desp1 = new Array("", "");
    }

    if (typeof (dataForamted.desp2) == "undefined"
        || dataForamted.desp2.length == 0) {
        dataForamted.desp2 = new Array("", "");
    }

    if (typeof (dataForamted.unit) == "undefined") {
        dataForamted.unit = "";
    }

    if (typeof (dataForamted.categoryField) == "undefined") {
        dataForamted.categoryField = "CATEGORY";
    }
    if (typeof (dataForamted.titleField) == "undefined") {
        dataForamted.titleField = "CATEGORY";
    }
    var arrColors = ["#FF8155", "#FF9524", "#FFD324", "#AED233", "#53CE02",
                    "#129B00", "#56E477", "#10AE7C", "#39BBF1", "#038DC6",
                    "#0570D3", "#0A58A0", "#4872EA", "#484FEA", "#0008A6",
                    "#875CEA", "#5423C3", "#D932FD", "#8704A3", "#AD1292", "#FF15D6"];
    chart = new AmCharts.AmPieChart();
    chart.colors = arrColors;
    chart.dataProvider = dataForamted.chartData;
    chart.titleField = dataForamted.titleField;
    chart.valueField = dataForamted.valueFields[0];
    chart.outlineColor = "#FFFFFF";
    chart.outlineAlpha = 0.8;
    chart.outlineThickness = 2;
    chart.balloonText = dataForamted.desp1[0] + "[[title]]" + dataForamted.desp1[1];
    chart.balloonText += "<br><span style='font-size:14px'><b>[[value]]</b>";
    chart.balloonText += dataForamted.unit + "([[percents]]%)</span>";
    chart.numberFormatter.precision = dataForamted.precision;
    chart.depth3D = 15;
    chart.angle = 30;
    chart.labelRadius = 10;
    chart.width = "100%";
    chart.height = "300%";
    chart.innerRadius = 20;

    legend = new AmCharts.AmLegend();
    legend.align = "center";
    legend.valueText = "";
    if (typeof (dataForamted.legend) != "undefined") {
        chart.addLegend(legend);
    }

    return chart;
};

/*
*  功能:   显示警示仪表图
*  参数:   无
*  返回值：无
*  作者：newpin
*  日期：2014.02.11
*  版本：1.0
*/
function ShowGuardChart(dataForamted) {
    if (typeof (dataForamted.chartData) == "undefined") {
        return null;
    }

    //数据单位
    if (typeof (dataForamted.unit) == "undefined") {
        dataForamted.unit = "";
    }

    //标准值
    if (typeof (dataForamted.chartData.stdValue) == "undefined") {
        dataForamted.chartData.stdValue = 100;
    }

    //当前值
    if (typeof (dataForamted.chartData.curValue) == "undefined") {
        dataForamted.chartData.curValue=0;
    }

    //超标值
    var overValue = dataForamted.chartData.stdValue - dataForamted.chartData.curValue >= 0 ? 0 : dataForamted.chartData.curValue - dataForamted.chartData.stdValue;
    //截止值的最大范围
    var totalEndValue = Number(dataForamted.chartData.stdValue) + Number(overValue);

    var chart = new AmCharts.AmAngularGauge();
    chart.color = "#888888";
    chart.startDuration = 1;

    var axis = new AmCharts.GaugeAxis();
    axis.startValue = 0;
    axis.endValue = (totalEndValue - totalEndValue % 10) +
                    (totalEndValue - totalEndValue % 10) * 0.2;
    axis.valueInterval = (totalEndValue - totalEndValue % 10) / 5;
    axis.minorTickInterval = (totalEndValue - totalEndValue % 10) / 5;;
    axis.minorTickLength = 5;
    axis.axisColor = "#888888";

    var band1 = new AmCharts.GaugeBand();
    var band2 = new AmCharts.GaugeBand();
    var band3 = new AmCharts.GaugeBand();
    var band4 = new AmCharts.GaugeBand();

    //正常用地
    if (overValue <= 0) {
        band1.startValue = 0;
        band1.endValue = Number(dataForamted.chartData.curValue);
        band1.color = "#00CC00";
        band1.innerRadius = "95%";

        band2.startValue = Number(dataForamted.chartData.curValue);
        band2.endValue = Number(dataForamted.chartData.stdValue);
        band2.color = "#ffac29";
        band2.innerRadius = "95%";

        band3.startValue = Number(dataForamted.chartData.stdValue);
        band3.endValue = totalEndValue;
        band3.color = "#ea3838";
        band3.innerRadius = "95%";

        band4.startValue = totalEndValue;
        band4.endValue = totalEndValue + totalEndValue * 0.2;;
        band4.color = "#ffffff";
        band4.innerRadius = "95%";
        axis.bands = [band1, band2, band3, band4];
    } else {
        band1.startValue = 0;
        band1.endValue = Number(dataForamted.chartData.stdValue);
        band1.color = "#00CC00";
        band1.innerRadius = "95%";

        band3.startValue = Number(dataForamted.chartData.stdValue);
        band3.endValue = totalEndValue;
        band3.color = "#ea3838";
        band3.innerRadius = "95%";

        band4.startValue = totalEndValue;
        band4.endValue = totalEndValue + totalEndValue * 0.2;;
        band4.color = "#ffffff";
        band4.innerRadius = "95%";
        axis.bands = [band1, band3, band4];
    }

    axis.bottomTextYOffset = -20;
    axis.setBottomText(dataForamted.chartData.curValue + " " + dataForamted.unit);
    chart.addAxis(axis);

    var arrow = new AmCharts.GaugeArrow();
    arrow.setValue(dataForamted.chartData.curValue);
    chart.addArrow(arrow);

    var legend = new AmCharts.AmLegend();
    legend.borderAlpha = 0.2;
    legend.horizontalGap = 10;
    legend.autoMargins = false;
    legend.marginLeft = 20;
    legend.marginRight = 20;
    chart.addLegend(legend);

    chart.numberFormatter.precision = 0;
    chart.percentFormatter.precision = 0;
    chart.numberFormatter.precision = 2;
    return chart;
};

//----全局变量,记录表格的列头
var ARRAY_COLUMN_HEAD = [];
//----全局变量，记录是否有行号
var BOOL_HASROWNUMBER = true;

/*
* 功能     ：ligerUI显示数据
* 参数     ：strId 容器Id
*            jsonData 待显示数据
*            columns 列头   
*            parms 其他参数
* 返回值   ：  
* 创建人   ：zhujingjing
* 创建时间 ：2014-1-6
* 修改人   ：  
* 修改时间 ：
*/
function loadGridData(strId, jsonData, columns, parms) {
    ARRAY_COLUMN_HEAD = [];
    for (var key in columns) {
        ARRAY_COLUMN_HEAD.push(columns[key]);
    }
    //检验参数
    if (typeof (parms) == "undefined" || parms == null || parms == undefined || parms == "") {
        parms = {};
    }

    var jsonLigerGrid = {
        columns: columns,
        data: jsonData,
        width: 'auto',
        pageSizeOptions: [10, 15, 20, intPageSize].sort(),
        enabledSort: false,
        rownumbers: true,
        rowHeight: 32,
        headerRowHeight: 32,
        onSelectRow: function (data, rowindex, rowobj) {
            if (typeof (parms.onSelectRowCallBack) == "function") {
                parms.onSelectRowCallBack(data, rowindex, rowobj);
            }
        },
        onDblClickRow: function (data, rowindex, rowobj) {
            if (typeof (parms.onDblClickRowCallBack) == "function") {
                parms.onDblClickRowCallBack(data, rowindex, rowobj);
            }
        },
        onBeforeShowData: function (currentData) {
            var columnWidth = 0;
            var columnName = "";
            //实现字符串自动截取
            for (var i = 0; i < currentData.Rows.length; i++) {
                //__toolTips有值说明该页已经做过截取处理，不再重复做处理
                if (typeof (currentData.Rows[i].__toolTips) != "undefined") {
                    break;
                }

                currentData.Rows[i].__toolTips = {};
                currentData.Rows[i].__entity = {};
                for (var j = 0; j < ARRAY_COLUMN_HEAD.length; j++) {
                    //列宽
                    columnWidth = parseInt(ARRAY_COLUMN_HEAD[j].width);
                    columnName = ARRAY_COLUMN_HEAD[j].name;
                    //title数据来源
                    currentData.Rows[i].__toolTips[j] = currentData.Rows[i][columnName];
                    currentData.Rows[i].__entity[columnName] = currentData.Rows[i][columnName];
                    if (typeof (currentData.Rows[i][columnName]) == "undefined" || currentData.Rows[i][columnName] == null) {
                        continue;
                    }
                    if (IsHtmlTag(currentData.Rows[i][columnName])) {
                        continue;
                    }
                    if (getBytesCount(currentData.Rows[i][columnName]) * 8 > columnWidth) {
                        currentData.Rows[i][columnName] = subStrByBytes(currentData.Rows[i][columnName], 0, Math.floor(columnWidth / 8)) + "...";
                    }
                }
            }
        },
        onAfterShowData: function (currentData) {
            //默认加载完毕选中首行
            if (currentData.Total > 0) {
                this.select(currentData.Rows[0]);
            }
            //设置样式
            $("#"+ strId+" div.l-grid-hd-cell-inner").css({ "line-height": "32px", "font-size": "14px" });
            $("#"+ strId+" div.l-grid-row-cell-inner").css({ "line-height": "32px", "font-size": "13px" });

            //增加提示
            showTitle(strId, currentData);

            if (typeof (parms.onAfterShowDataCallBack) == "function") {
                parms.onAfterShowDataCallBack(currentData);
            }
        }
    };

    var intContainerHeight = $("#" + strId).height();
    var intPageSize = parseInt(intContainerHeight / 32 - 4);
    jsonLigerGrid.pageSize = intPageSize;
    jsonLigerGrid.height = intContainerHeight;
    if (typeof (parms.onShowDetailCallBack) == "function") {
        jsonLigerGrid.rownumbers = false;
        jsonLigerGrid.detail = { onShowDetail: parms.onShowDetailCallBack, height: 'auto' };
    }
    if (typeof (parms.usePager) != "undefined") {
        jsonLigerGrid.usePager = parms.usePager;
    }
    //
    BOOL_HASROWNUMBER = jsonLigerGrid.rownumbers;

    var grid = $("#" + strId).ligerGrid(jsonLigerGrid);
};

/*
* 功能     ：表格数据加载完毕后，截取显示过长的字段，并添加title
* 参数     ：strId 显示数据容器id
*            currentData 当前数据   
* 返回值   ：  
* 创建人   ：zhujingjing
* 创建时间 ：2014-1-13
* 修改人   ：  
* 修改时间 ：
*/
function showTitle(strId, currentData) {
    var intCol = 0;
    $("#" + strId + " div.l-grid2 tr.l-grid-row").each(function (i) {
        if (i >= currentData.Rows.length) {
            return;
        }
        $(this).find("td.l-grid-row-cell").each(function (j) {
            if (BOOL_HASROWNUMBER == true) {
                intCol = j;
            }
            else {
                intCol = j - 1;
            }

            var strTitle = currentData.Rows[i].__toolTips[intCol];
            if (!IsHtmlTag(strTitle)) {
                $(this).attr("title", strTitle);
            }
        })
    });
}

/*
* 功能     ：判断表格中是否有合计列
* 参数     ：columns 表头
* 返回值   ：true or false
* 创建人   ：zhujingjing
* 创建时间 ：2014-1-13
* 修改人   ：  
* 修改时间 ：
*/
function hasSummaryColumn(columns) {
    for (i in columns) {
        for (j in columns[i]) {
            if (j == "totalSummary") {
                return true;
            }
        }
    }
    return false;
}


/*
    修改内容：获取6个层当前高宽度（因为6个层高宽度相同，所以只取其中一个）
    参数：divClassName       所在容器的class
    修改人：蔡健
    修改时间：2014-04-01
   */
//避免拖动的时候body覆盖父级边框
function setDivMove(divClassName) {
    //var oldWidth = $("." + divClassName)[0].clientWidth - 3;
    //var oldHeight = $("." + divClassName)[0].clientHeight;

    //判断只有属性isMove="1"的层才能拖动
    $('.' + divClassName + '[ismove="true"]').ligerDrag({
        proxy: 'clone', revert: true, receive: '[iscontainer="true"]',
        onStartDrag: function () {
            if (event.ctrlKey) {
                this.set({ cursor: "not-allowed" });
                this.target.css("border", "1px solid #DADADA");
            } else {
                return false;
            }
        },
        onDragEnter: function (receive, source, e) {
            var oReceviceBody$ = $($(receive).children()).children("." + divClassName);
            //判断当接收层的属性isMove="true"的时候才会执行下面操作
            if (oReceviceBody$ && oReceviceBody$.attr("ismove") == "true" && source.attr("groupnum")
                && (source.attr("groupnum") == oReceviceBody$.attr("groupnum"))) {
                this.set({ cursor: "pointer" });
                $(receive).css("border", "2px solid black");
            } else {
                return;
            }
            //this.proxy.html("释放注入颜色");
        },
        onDragLeave: function (receive, source, e) {
            this.set({ cursor: "not-allowed" });
            $(receive).css("border", "0px");
            //this.proxy.html("");
        },
        onDrop: function (receive, source, e) {
            //还原拖动的时候body宽度
            //this.target.width(oldWidth + 3);
            var oSource = $($(this.target.context).parent().parent()[0]);
            if (!this.proxy) return;
            this.proxy.hide();
            oSource.css("border", "0px");

            var oReceviceBody$ = $($(receive).children()).children("." + divClassName);
            //判断属性是否存在
            if (oReceviceBody$.attr("ismove") && oReceviceBody$.attr("groupnum") && source.attr("groupnum")) {
                //在此处判断目标状态   （源的分组 = 目标的分组） and （是否可拖动 = 1）
                if (oReceviceBody$.attr("ismove") == "true" && oReceviceBody$.attr("groupnum") != ""
                    && source.attr("groupnum") == oReceviceBody$.attr("groupnum")) {

                    $(receive).css("border", "0px");
                    if (oSource.attr("iscontainer") == "true") {
                        //交换业务指标内容
                        exchangeDiv(oSource, $(receive));

                        //判断是否需要保存当前各个指标的位置
                        if (isSetMoveCookie && isSetMoveCookie == true) {
                            //变量，用于临时保存指标顺序
                            var aZbTurn = [];
                            $("div[iscontainer = 'true']").each(function (i) {
                                aZbTurn[i] = this.id;
                            });
                            //给cookie赋值
                            $.cookie(cookieKey, JSON.stringify(aZbTurn));
                        }
                    }
                }
            }
        }
    });
}

/*
* 功能     ：获取当前业务指标的原始顺序
* 参数     ：无 
* 返回值   ：  
* 创建人   ：蔡健
* 创建时间 ：2014-5-4
*/
function getOriginalMoveTurns() {
    //变量，用于临时保存指标顺序
    var aOriginalTurn = [];
    $("div[iscontainer = 'true']").each(function (i) {
        aOriginalTurn[i] = this.id;
    });
    //给cookie赋值
    return aOriginalTurn;
}

/*
* 功能     ：依据Cookie中保存的值，来加载业务指标的顺序
* 参数     ：aOriginalMoveTurns 原始业务指标顺序（数组）
             sCookieKey cookie中保存最新业务指标顺序的key
* 返回值   ：  
* 创建人   ：蔡健
* 创建时间 ：2014-5-4
*/
function loadByCookieDivTurns(aOriginalMoveTurns, sCookieKey) {
    var aCurrentMoveTurns = [];
    var sCurrentMoveTurnsCookie = $.cookie(sCookieKey);
    //临时数组变量，用于保存已经替换过的业务指标ID
    var tempChangedTurns = [];

    var oSource$, oReceive$
    if (sCurrentMoveTurnsCookie) {
        //将cookie中的字符串转换为数组对象
        aCurrentMoveTurns = JSON.parse(sCurrentMoveTurnsCookie);
        //清除数组中为undefined的元素
        aCurrentMoveTurns = $(aCurrentMoveTurns).filter(function (n) { if (this) { return this; } }).toArray();
        //循环判断是否当前位置与原始位置发生变化，有变化，则交换
        for (var i = 0; i < aOriginalMoveTurns.length; i++) {
            if (aOriginalMoveTurns[i] != aCurrentMoveTurns[i] && $.inArray(aOriginalMoveTurns[i], tempChangedTurns)==-1) {
                oSource$ = $("div[id='" + aOriginalMoveTurns[i] + "']");
                oReceive$ = $("div[id='" + aCurrentMoveTurns[i] + "']");
                exchangeDiv(oSource$, oReceive$);
                tempChangedTurns[i] = aCurrentMoveTurns[i];
            }
        }
    }
}


/*
* 功能     ：交换业务指标内容
* 参数     ：strId 显示数据容器id
*            currentData 当前数据   
* 返回值   ：  
* 创建人   ：zhujingjing
* 创建时间 ：2014-1-13
* 修改人   ：  
* 修改时间 ：
*/
function exchangeDiv(oSource$, oReceive$) {
    var a = oReceive$.next();
    var b = oSource$.next();
    if (a.attr('id') != undefined && b.attr('id') != undefined) {
        if (oSource$.attr('id') != a.attr('id')) {
            oSource$.insertBefore(a);
        }
        if (oReceive$.attr('id') != b.attr('id')) {
            oReceive$.insertBefore(b);
        }
    }
    else if (a.attr('id') == undefined && b.attr('id') != undefined) {
        b = oSource$.prev();
        a = oReceive$.prev();
        if (b.attr('id') != undefined) {
            oReceive$.insertAfter(b);
        }
        else {
            b = oSource$.next();
            oReceive$.insertBefore(b);
        }
        if (oSource$.attr('id') != a.attr('id')) {
            oSource$.insertAfter(a);
        }

    }
    else if (a.attr('id') != undefined && b.attr('id') == undefined) {
        b = oSource$.prev();
        if (oSource$.attr('id') != a.attr('id')) {
            oSource$.insertBefore(a);
        }
        else {
            a = oReceive$.prev();
            oSource$.insertAfter(a);
            return;
        }
        oReceive$.insertAfter(b);
    }
    else if (a.attr('id') == undefined && b.attr('id') == undefined) {
        b = oSource$.prev();
        a = oReceive$.prev();
        oReceive$.insertAfter(b);
        if (oSource$.attr('id') != a.attr('id')) {
            oSource$.insertAfter(a);
        }
    }
}

/*
* 功能     ：屏蔽input删除键回退
* 参数     ：
* 返回值   ：
* 创建人   ：guolei
* 创建时间 ：2015-05-04
* 修改人   ：  
* 修改时间 ：
*/
function BlockedBackSpace(e) {
    var ev = e || window.event;//获取event对象    
    var obj = ev.target || ev.srcElement;//获取事件源    
    var t = obj.type || obj.getAttribute('type');//获取事件源类型   

    //获取作为判断条件的事件类型 
    var vReadOnly = obj.getAttribute('readonly');
    var vEnabled = obj.getAttribute('enabled');
    //处理null值情况 
    vReadOnly = (vReadOnly == null) ? false : vReadOnly;
    vReadOnly = (vReadOnly == "readonly") ? true : vReadOnly;
    vEnabled = (vEnabled == null) ? true : vEnabled;
    //当敲Backspace键时，事件源类型为密码或单行、多行文本的， 
    //并且readonly属性为true或enabled属性为false的，则退格键失效 
    var flag1 = (ev.keyCode == 8 && (t == "password" || t == "text" || t == "textarea")
                && (vReadOnly == true || vEnabled != true)) ? true : false;
    //当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效 
    var flag2 = (ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea") ? true : false;

    //判断 
    if (flag2 || flag1) {
        return false;
    }
}

/*
* 功能     ：格式化字符串
* 参数     ：字符串和要替换的值 "asdf{0}ghjkl".formatString(值)
* 返回值   ：替换后的字符串   asdf值ghjkl
* 创建人   ：guolei
* 创建时间 ：2014-02-27
* 修改人   ：  
* 修改时间 ：
*/
String.prototype.formatString = function () {
    if (arguments.length == 0) {
        return null;
    }
    var args = Array.prototype.slice.call(arguments, 0);
    return this.replace(/\{(\d+)\}/g, function (m, i) { return args[i]; });
}

/*
* 功能     ：字符串全文替换
* 参数     ：
* 返回值   ：
* 创建人   ：guolei
* 创建时间 ：2014-02-27
* 修改人   ：  
* 修改时间 ：
*/
String.prototype.replaceAll = function (reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith);
    } else {
        return this.replace(reallyDo, replaceWith);
    }
}

/*
* 功能     ：参数格式化通用帮助
* 参数     ：
* 返回值   ：
* 创建人   ：guolei
* 创建时间 ：2014-03-13
*/
var Global_Formatter = {
    //数值类型保留小数(默认保留2位)
    fixed: function (value, fix) {
        var strResult = "";
        if (fix == undefined) {
            fix = 2;
        }
        if (value != null && value != undefined && value != "") {
            strResult = parseFloat(value).toFixed(fix);
        }
        return strResult;
    },
    //日期类型格式化
    date: function (value) {
        var strResult = "";
        if (value != null && value != undefined && value != "") {
            strResult = Global_Date_Method.GetDate(Global_Date_Method.GetDate(value)).Date;
        }
        return strResult;
    },
    rate: function (mole, deno, fixed) {
        var tempResult = 0;
        if (!fixed) {
            fixed = 0;
        }
        if (mole && deno && !isNaN(mole) && !isNaN(deno)) {
            var tempMole = parseFloat(mole);
            var tempDeno = parseFloat(deno);
            if (tempDeno > 0) {
                tempResult = tempMole * 100 / tempDeno;
            }
        }
        tempResult = tempResult.toFixed(fixed);
        return tempResult + "%";
    },
    /*
    **格式化下拉列表数据
    **parmType---1:没有空选项（默认有空选项）parmSelType---1:选择的值是编码（默认选择的值和文本一致）  parmValues--选项中不包含这些值的数组
    */
    select: function (objJson, parmType, parmSelType, parmValues) {
        var arrResult = [];
        var arrValue = [];
        var objName = "";
        var tempValue = "";
        var tempSelValue = "";
        if (!parmType || parmType != 1) {
            arrResult.push("<option></option>");
        }
        for (var i = 0; i < objJson.length; i++) {
            objName = objJson[i].CODE;
            tempValue = objJson[i].TEXT;
            if (tempValue && $.inArray(tempValue, parmValues) >= 0) {
                continue;
            }
            if (!parmSelType || parmSelType != 1) {
                tempSelValue = tempValue;
            }
            else {
                tempSelValue = objName;
            }
            if ($.inArray(tempValue, arrValue) < 0) {
                arrResult.push("<option value='" + tempSelValue + "'>" + tempValue + "</option>");
                arrValue.push(tempValue);
            }
        }
        return arrResult.join("");
    },
    select_year: function () {
        var arrResult = [];
        var tempValue;
        arrResult.push("<option></option>");
        if (jsonParm.currentYear) {
            for (var i = 0; i < 10; i++) {
                tempValue = jsonParm.currentYear - i;
                arrResult.push("<option value='" + tempValue + "'>" + tempValue + "</option>");
            }
        }
        return arrResult.join("");
    },
    formatter: function (value, type) {
        var tempResult = value;
        switch (type) {
            case "1":
                tempResult = Global_Formatter.date(value);
                break;
            case "2":
                tempResult = Global_Formatter.fixed(value, 2);
                break;
            default:
                break;
        }
        return tempResult;
    }
};

/*
* 功能     ：时间方法集合
* 参数     ：
* 返回值   ：
* 创建人   ：guolei
* 创建时间 ：2014-05-06
*/
var Global_Date_Method = {
    //时间对象
    DateTime: {
        Year: 2013,
        Month: 1,
        Day: 1,
        Hour: 0,
        Minute: 0,
        Second: 0,
        Milliseconds: 0,
        WeekOfDay: "二",
        DateTime: "2014-03-16 00:00:00",
        Date: "2014-03-16"
    },
    //获取时间 (传''：为清空时间) (传时间格式字符串：为转换时间类型) (传时间类型：返回时间对象) (不传 返回时间对象)
    GetDate: function (datetime) {
        //清空时间
        if (datetime == '') {
            Global_Date_Method.DateTime = {
                Year: '',
                Month: '',
                Day: '',
                Hour: '',
                Minute: '',
                Second: '',
                WeekOfDay: '',
                DateTime: '',
                Date: ''
            };
        } else {
            var now;
            if (datetime == undefined || datetime == null)
                now = new Date();
            else if (typeof (datetime) == "string") {
                datetime = datetime.replaceAll('-', '/');
                now = new Date(datetime);
                return now;
            }
            else now = datetime;
            var week = ['日', '一', '二', '三', '四', '五', '六'];
            Global_Date_Method.DateTime = {
                Year: now.getFullYear(),
                Month: now.getMonth(),
                Day: now.getDay(),
                Hour: now.getHours(),
                Minute: now.getMinutes(),
                Second: now.getSeconds(),
                Milliseconds: now.getMilliseconds(),
                WeekOfDay: week[now.getDay()],
                DateTime: now.getFullYear() + "-"
                    + ((now.getMonth()) < 9 ? "0" + (now.getMonth() + 1).toString() : (now.getMonth() + 1).toString()) + "-"
                    + ((now.getDate() < 10) ? ("0" + now.getDate().toString()) : now.getDate().toString()) + " "
                    + now.getHours() + ":"
                    + now.getMinutes() + ":"
                    + now.getSeconds(),
                Date: now.getFullYear() + "-"
                    + ((now.getMonth()) < 9 ? "0" + (now.getMonth() + 1).toString() : (now.getMonth() + 1).toString()) + "-"
                    + ((now.getDate() < 10) ? ("0" + now.getDate().toString()) : now.getDate().toString())
            };
        }
        return Global_Date_Method.DateTime;
    },
    //时间加、减法：datetime为有效的时间字符串，interval：要加的时间类型  number：为数值 正数为加 负数为减
    // interval 类型：y 年 j季 m月 z周 d天 h小时 f分钟 s秒 ms毫秒
    dateAdd: function (datetime, interval, number) {
        var d = Global_Date_Method.GetDate(datetime);
        var k = { 'y': 'FullYear', 'j': 'Month', 'm': 'Month', 'z': 'Date', 'd': 'Date', 'h': 'Hours', 'f': 'Minutes', 's': 'Seconds', 'ms': 'MilliSeconds' };
        var n = { 'j': 3, 'z': 7 };
        eval('d.set' + k[interval] + '(d.get' + k[interval] + '()+' + ((n[interval] || 1) * number) + ')');
        return Global_Date_Method.GetDate(d);
    },
    //计算时间差  interval：要比较的类型 传空 返回所有   datetime2 和datetime1 是比较时间
    dateDiff: function (interval, datetime1, datetime2) {
        datetime1 = Global_Date_Method.GetDate(datetime1);
        datetime2 = Global_Date_Method.GetDate(datetime2);
        var i = {}, t1 = datetime1.getTime(), t2 = datetime2.getTime();
        i['y'] = datetime2.getFullYear() - datetime1.getFullYear();
        i['j'] = i['y'] * 4 + Math.floor(datetime2.getMonth() / 4) - Math.floor(datetime1.getMonth() / 4);
        i['m'] = i['y'] * 12 + datetime2.getMonth() - datetime1.getMonth();
        i['ms'] = t2 - t1;
        i['z'] = Math.floor((t2 + 345600000) / (604800000)) - Math.floor((t1 + 345600000) / (604800000));
        i['d'] = Math.floor(t2 / 86400000) - Math.floor(t1 / 86400000) - 1;
        i['h'] = Math.floor(t2 / 3600000) - Math.floor(t1 / 3600000);
        i['f'] = Math.floor(t2 / 60000) - Math.floor(t1 / 60000);
        i['s'] = Math.floor(t2 / 1000) - Math.floor(t1 / 1000);
        if (interval == "" || interval == null)
            return i;
        else
            return i[interval];
    }
};

/*
* 功能     ：设置界面功能权限
* 参数     ：
* 返回值   ：
* 创建人   ：liubing
* 创建时间 ：2014-3-19
* 修改人   ：  
* 修改时间 ：
*/
function SetPermission() {
    var jsonPermis = $.parseJSON(jsonParm.PermisOper);
    if (typeof (jsonPermis) == "undefined" ||
        jsonPermis == null ||
        jsonPermis == "" ||
        jsonPermis.page == null ||
        typeof (jsonPermis.page) == "undefined") {
        return;
    }

    if (jsonPermis.page.cell) {
        for (var index in jsonPermis.page.cell) {
            //获取页面区域的状态
            var curCell = jsonPermis.page.cell[index];
            var cellcode = curCell["@cellcode"];
            var cellVisiable = curCell["@visiable"];
            if (cellVisiable == "false") {
                $(cellcode).hide();
            }

            if (curCell.act) {
                //获取区域内用户可具有的操作
                for (var actIndex in curCell.act) {
                    var curAct = curCell.act[actIndex];
                    var curActCode = curAct["@actcode"];
                    var curActEvent = curAct["@event"];

                    switch (curActEvent) {
                        case "none":
                            {
                                $(curActCode).unbind();
                                $(curActCode + " :input").unbind();
                                $(curActCode).click(function () {
                                    alert('您没有权限访问该功能！')
                                });
                                break;
                            }
                        case "hide":
                            {
                                $(curActCode).hide();
                                break;
                            }
                        case "show":
                            {
                                $(curActCode).show();
                                break;
                            }
                        case "disabled":
                            {
                                $(curActCode).attr("disabled", true);
                                break;
                            }
                        case "enabled":
                            {
                                $(curActCode).attr("disabled", false);
                                break;
                            }
                        case "oper":
                            {
                                if (typeof (curAct.data) != "undefined") {
                                    var dataCode = curAct.data["@datacode"];
                                    var dataText = curAct.data["#text"];

                                    $(ataCode).data(dataCode, dataText);
                                    var jsonDataFilter = $.parseJSON($(dataCode).data(dataCode));
                                }
                                break;
                            }
                    }
                }
            }
        }
    }
}