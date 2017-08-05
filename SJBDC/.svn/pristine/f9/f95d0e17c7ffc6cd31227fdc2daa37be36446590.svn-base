/// <reference path="../../../jquery-1.7.2.js" />
/**
* jQuery geowebChart 1.0.0
* 
* 
*  
* Author liubing 2014 [ liubing@geostar.com.cn ] 
* 
*/

/*修改人 ：sunxueting 2015-09-24*/
(function ($) {
    //柱状图颜色值
    var ARRCOLOR = new Array("#2994DC", "#B0CA1F", "#80CB30", "#2994DC", "#80CB30");

    $.fn.ligerGeoChart = function (options) {
        var $this = $(this);
        //构造参数
        var opts = $.extend({}, $.ligerDefaults.GeoChart, options);
        //获取返回的chart
        var chart;
        //显示chart的容器
        var targetDivId = "geowebchart" + Math.random();
        var targetDivId = targetDivId.replace(".", "");
        //构造geowebchart元素
        var charthtmlarr = [];
        charthtmlarr.push("                                <div class='g-container'>");
        if (opts.moduleId == "xzjsyd") {
            charthtmlarr.push("                                    <div class='g-container-head'  url='" + opts.headUrl + "'  title='" + opts.headTitle + "'><div class='g-hleft'><span></span><h3>" + opts.headTitle + "</h3></div>" +
                                                                        "    <div class='headSquare'>" +
	                                                                    "    <div class='headSquareItem1'></div>" +
	                                                                    "    <h4>已使用&nbsp;</h4>" +
	                                                                    "    <div class='headSquareItem2'></div>" +
	                                                                    "    <h4>计划</h4>" +
	                                                                    "</div></div>");
        }
        else if (opts.moduleId == "wfyd") {
            charthtmlarr.push("                                    <div class='g-container-head'  url='" + opts.headUrl + "' title='" + opts.headTitle + "'><span></span><h3>" + opts.headTitle + "</h3>" +
                                                                        "    <div class='headSquare'>" +
	                                                                    "    <div class='headSquareItem3'></div>" +
	                                                                    "    <h4>共计&nbsp;&nbsp;&nbsp;</h4>" +
	                                                                    "    <div class='headSquareItem4'></div>" +
	                                                                    "    <h4>占耕地面积</h4>" +
	                                                                    "</div></div>");
        }
        else if (opts.moduleId == "zbztqk") {
            charthtmlarr.push("                                    <div class='g-container-head'  url='" + opts.headUrl + "' title='" + opts.headTitle + "'><span></span><h3>" + opts.headTitle + "</h3>" +
                                                                        "    <div class='headSquare'>" +
                                                                         "    <div class='headSquareItem13'></div>" +
	                                                                    "    <h4>关注指标&nbsp;&nbsp;&nbsp;&nbsp;</h4>" +
	                                                                    "    <div class='headSquareItem5'></div>" +
	                                                                    "    <h4>规划现状&nbsp;&nbsp;&nbsp;&nbsp;</h4>" +
	                                                                    "    <div class='headSquareItem6'></div>" +
	                                                                    "    <h4>耕地保护&nbsp;&nbsp;&nbsp;&nbsp;</h4>" +
                                                                        "    <div class='headSquareItem7'></div>" +
	                                                                    "    <h4>土地市场&nbsp;&nbsp;&nbsp;&nbsp;</h4>" +
	                                                                    "    <div class='headSquareItem8'></div>" +
	                                                                    "    <h4>土地利用&nbsp;&nbsp;&nbsp;&nbsp;</h4>" +
                                                                        "    <div class='headSquareItem9'></div>" +
	                                                                    "    <h4>批后监管&nbsp;&nbsp;&nbsp;&nbsp;</h4>" +
	                                                                    "    <div class='headSquareItem10'></div>" +
	                                                                    "    <h4>土地执法&nbsp;&nbsp;&nbsp;&nbsp;</h4>" +
                                                                        "    <div class='headSquareItem11'></div>" +
	                                                                    "    <h4>地矿资源&nbsp;&nbsp;&nbsp;&nbsp;</h4>" +
	                                                                    "    <div class='headSquareItem12'></div>" +
	                                                                    "    <h4>节约集约&nbsp;&nbsp;&nbsp;&nbsp;</h4>" +
                                                                        "    <div class='headSquareItem14'></div>" +
	                                                                    "    <h4><a href='#myModal' role='button'  data-toggle='modal'>设置</a></h4>" +
	                                                                    "</div></div>");
        }
        else {  
            charthtmlarr.push("                                    <div class='g-container-head'  url='" + opts.headUrl + "' title='" + opts.headTitle + "'><span></span><h3>" + opts.headTitle + "</h3></div>");
        }
        charthtmlarr.push("                                    <div class='g-container-content' title=" + opts.headTitle + "  isMove='true' GroupNum ='1' >");
        charthtmlarr.push("                                        <div  class='title' style='text-align:center;'></div>");
        charthtmlarr.push("                                        <div  id='" + targetDivId + "' class='content'></div>");
        charthtmlarr.push("                                    </div>");
        charthtmlarr.push("                                </div>");
        //设置geowebchart元素到目标容器
        $this.html(charthtmlarr.join(''));
        $this.attr("moduleId", opts.moduleId);
       
        if (opts.chartData) {
            //加载geowebchart图形展示
            ShowChart(chart, opts.chartData, opts.precision, opts.unit, targetDivId, opts.chartType);
            if (opts.onload) {
                opts.onload({ mapInteractId: targetDivId, $mapInteract: opts.mapInteract });
            }
        }
        else if (opts.url) {
            $.get(opts.url, { queryCondition: opts.queryCondition }, function (data) {
                opts.titleData = FormatNdywzbData(data.dataTitle);
                opts.chartData = data.dataBody;

                if (opts.moduleId == "tdgdpgx" || opts.moduleId == "zbztqk")
                {
                    FormatDataNoSum(opts.chartData);
                }
                else if (opts.moduleId != "phly") {
                    FormatData(opts.chartData);
                } 
                else {
                    FormatDataNoSum(opts.chartData);
                }

                var $targetTitle = $this.find(".g-container-content .title");

                //设置标题
                $targetTitle.html(opts.chartTitle);

                //设置content的高度
                var $targetDiv = $("#" + targetDivId);
                var iTargetHeight = $targetDiv.parent().height() - $targetTitle.height();
                $targetDiv.height(iTargetHeight);

                //设置geowebchart的标题title
                $targetTitle.each(function () {
                    var $title = $(this);
                    //循环对象属性，根据属性关键字设置数据
                    for (var field in opts.titleData) {
                        //判断是否为属性   
                        if (typeof (opts.titleData[field]) == "function") {
                            opts.titleData[field]();
                        }
                        else {
                            $title.html($title.html().replace('[' + field + ']', opts.titleData[field]));
                        }
                    }
                });

                //加载geowebchart图形展示
                if (opts.moduleId == "xzjsyd") {
                    //建设用地指标（标准值）
                    var stdValue = Number(opts.titleData.JSYDZB);
                    //建设用地已使用（当前值）
                    var curValue = Number(opts.titleData.JSYDYSY);
                    opts.chartData = { "stdValue": stdValue, "curValue": curValue };
                    ShowChart(chart, opts.chartData, opts.precision, opts.unit, targetDivId, opts.chartType);
                }
                else if (opts.moduleId == "wfyd") {
                    ShowChart(chart, opts.chartData, opts.precision, opts.unit, targetDivId, opts.chartType, ["ZGDMJ", "TOTALCOUNT"], ["截止", "截止"], ["占耕地", "总面积"], "regular");
                }
                else if (opts.moduleId == "tdycsylv") {
                    ShowChart(chart, opts.chartData, opts.precision, opts.unit, targetDivId, opts.chartType, ["NOWNUMBER", "NOWNUMBER"], ["", ""], ["年土地使用率", "年土地使用率"]);
                }
                else if (opts.moduleId == "tdgdpgx") {
                    //ShowChart(chart, opts.chartData, opts.precision, opts.unit, targetDivId, opts.chartType, ["CATEGORY", "NOWNUMBER"], ["", ""], ["年单位GDP地耗比上年度减少", ""]);
                    ShowChart(chart, opts.chartData, opts.precision, [opts.unit, "%"], targetDivId, opts.chartType, ["NOWNUMBER", "NOWNUMBER1"], ["", ""], ["年地耗", "年单位GDP地耗比上年度减"]);
                }
                else if (opts.moduleId == "jsydspqk") {
                    ShowChart(chart, opts.chartData, opts.precision, opts.unit, targetDivId, opts.chartType, ["CATEGORY", "NOWNUMBER"], ["", ""]);
                }
                else if (opts.moduleId == "getdata_uselandextend") {
                    ShowChart(chart, opts.chartData, opts.precision, opts.unit, targetDivId, opts.chartType, ["名称", "用地量"], ["", ""], ["", ""]);
                }
                else if (opts.moduleId == "getdata_inportantprojectextend") {
                    ShowChart(chart, opts.chartData, opts.precision, opts.unit, targetDivId, opts.chartType, ["类别", "数量"], ["", ""], ["", ""]);
                }
                else if (opts.moduleId == "gdlv") {
                    //构建供地率统计数据
                    var oArrData = [
                      {
                          "CATEGORY": "前五年",
                          "TOTALCOUNT": opts.titleData.GYTDLAST5GDLV,
                          "COLOR": "#B0CA1F"
                      },
                      {
                          "CATEGORY": "去年",
                          "TOTALCOUNT": opts.titleData.GYTDGDLV,
                          "COLOR": "#80CB30"
                      }
                      ,
                      {
                          "CATEGORY": "当前年",
                          "TOTALCOUNT": opts.titleData.GDLV,
                          "COLOR": "#80CB30"
                      }
                    ];
                    opts.chartData = oArrData;
                    ShowChart(chart, opts.chartData, opts.precision, opts.unit, targetDivId, opts.chartType);
                }
                else if (opts.moduleId == "phly") {
                    ShowChart(chart, opts.chartData, opts.precision, opts.unit, targetDivId, opts.chartType, undefined, ["", ""], ["", ""]);
                }
                else if (opts.moduleId == "zbztqk") {
                    ShowChart(chart, opts.chartData, opts.precision, opts.unit, targetDivId, opts.chartType, undefined, ["", ""], ["", ""]);
                }
                else {
                    ShowChart(chart, opts.chartData, opts.precision, opts.unit, targetDivId, opts.chartType);
                }

                if (opts.onload) {
                    opts.onload({ mapInteractId: targetDivId, $mapInteract: opts.mapInteract });
                }
            }, "json");
        }
    };

    $.ligerDefaults.GeoChart = {
        headTitle: "",
        chartTitle: "",
        titleData: null,
        chartData: null,
        precision: 2,
        unit: "",
        chartType: 1,
        arrFields: null,
        arrDesp1: null,
        arrDesp2: null,
        stackType: null,
        url: null,
        queryCondition: null
    };

    /*
    *  功能:    计算本年度新增建设用地指标已使用率、
                本年度储备计划完成率、
                本年度土地供应计划完成率、
                本年交易地块金额增长率
    *  参数:   jsonObj：OBJ_DT_NDYWZB对象
    *  返回值：无
    *  作者：newpin
    *  日期：2013.11.04
    *  版本：1.0
    */
    function FormatNdywzbData(jsonObj) {
        //判断对象是否为空
        if (jsonObj == null ||
           jsonObj.length == 0) {
            return jsonObj;
        }
        //计算本年度新增建设用地指标已使用率=用地报批已上报面积/新增建设用地年度计划
        jsonObj[0].XZJSYDZBSYLV = ForDight(jsonObj[0].YDBPYSBMJ / jsonObj[0].JSYDZB * 100, 2);
        //计算本年度储备计划完成率=储备用地已完成/年度计划储备用地
        jsonObj[0].CBYDJHWCLV = ForDight(jsonObj[0].CBYDYWC / jsonObj[0].CBYDJH * 100, 2);
        //计算本年度土地供应计划完成率=供应土地已完成/年度计划供应土地
        jsonObj[0].GYTDJHWCLV = ForDight(jsonObj[0].GYTDYGY / jsonObj[0].GYTDJH * 100, 2);
        //计算本年交易地块金额增长率=（交易金额收缴-上年交易金额收缴）/上年交易金额收缴
        jsonObj[0].JYDKJEZZLV = ForDight((jsonObj[0].JYDKJESJ - jsonObj[0].JYDKJESJSN) /
                                            jsonObj[0].JYDKJESJSN * 100, 2);

        //计算本年度新增建设用地指标已使用率=用地报批已上报面积/新增建设用地年度计划
        jsonObj[0].XZJSYDZBSYLV = ForDight(jsonObj[0].YDBPYSBMJ / jsonObj[0].JSYDZB * 100, 2);
        //计算本年度储备计划完成率=储备用地已完成/年度计划储备用地
        jsonObj[0].CBYDJHWCLV = ForDight(jsonObj[0].CBYDYWC / jsonObj[0].CBYDJH * 100, 2);
        //计算本年度土地供应计划完成率=供应土地已完成/年度计划供应土地
        jsonObj[0].GYTDJHWCLV = ForDight(jsonObj[0].GYTDYGY / jsonObj[0].GYTDJH * 100, 2);
        //应缴土地出让金
        jsonObj[0].JYDKJESJ1 = ForDight(jsonObj[0].JYDKJESJ * 0.8, 2);
        //实际收益
        jsonObj[0].JYDKJESJ2 = ForDight(jsonObj[0].JYDKJESJ1 * 0.9, 2);
        //欠缴
        jsonObj[0].JYDKJESJ3 = ForDight(jsonObj[0].JYDKJESJ1 - jsonObj[0].JYDKJESJ2, 2);
        //供地率
        jsonObj[0].GYTDGDLV = ForDight(jsonObj[0].GYTDGDLV, 2);
        jsonObj[0].GYTDLAST5GDLV = ForDight(jsonObj[0].GYTDLAST5GDLV, 2);

        //计算本年交易地块金额增长率=（交易金额收缴-上年交易金额收缴）/上年交易金额收缴
        jsonObj[0].JYDKJEZZLV = Math.round((jsonObj[0].JYDKJESJ - jsonObj[0].JYDKJESJSN) /
                                            jsonObj[0].JYDKJESJSN, 3) * 100;
        return jsonObj[0];
    };

    /*
    *  功能:   格式化有待统计的数据
    *  参数:   jsonObj：OBJ_DT_NDYWZB数据
    *  返回值：无
    *  作者：newpin
    *  日期：2013.11.04
    *  版本：1.0
    */
    function FormatData(jsonObj) {

        for (var index in jsonObj) {
            //设置分组名称
            if (jsonObj[index].GROUPTYPE == 1) {
                switch (jsonObj[index].SEASON) {
                    case 1:
                        { jsonObj[index].CATEGORY = '一季度' }
                        break;
                    case 2:
                        { jsonObj[index].CATEGORY = '二季度' }
                        break;
                    case 3:
                        { jsonObj[index].CATEGORY = '三季度' }
                        break;
                    case 4:
                        { jsonObj[index].CATEGORY = '四季度' }
                        break;
                }
            }
            else if (jsonObj[index].GROUPTYPE == 2) {
                jsonObj[index].CATEGORY = jsonObj[index].MONTH + '月';
            }
            else if (jsonObj[index].GROUPTYPE == 0) {
                jsonObj[index].CATEGORY = (Number(jsonObj[index].YEAR)).toString() + '年';
            }

            //设置分组统计值
            jsonObj[index].TOTALCOUNT = ForDight(jsonObj[index].NOWNUMBER, 2);
            jsonObj[index].COLOR = ARRCOLOR[index % 5];

            //累计季度值
            if (index > 0 && jsonObj[index].GROUPTYPE != 0) {
                jsonObj[index].TOTALCOUNT = ForDight(jsonObj[index - 1].TOTALCOUNT +
                                        jsonObj[index].TOTALCOUNT, 2);
                jsonObj[index].ZGDMJ += jsonObj[index - 1].ZGDMJ;
                jsonObj[index].ZGDMJ = ForDight(jsonObj[index].ZGDMJ, 2);
            }
        }
    };

    function FormatDataNoSum(jsonObj) {

        for (var index in jsonObj) {
            //设置分组名称
            if (jsonObj[index].GROUPTYPE == 1) {
                switch (jsonObj[index].SEASON) {
                    case 1:
                        { jsonObj[index].CATEGORY = '一季度' }
                        break;
                    case 2:
                        { jsonObj[index].CATEGORY = '二季度' }
                        break;
                    case 3:
                        { jsonObj[index].CATEGORY = '三季度' }
                        break;
                    case 4:
                        { jsonObj[index].CATEGORY = '四季度' }
                        break;
                }
            }
            else if (jsonObj[index].GROUPTYPE == 2) {
                jsonObj[index].CATEGORY = jsonObj[index].MONTH + '月';
            }
            else if (jsonObj[index].GROUPTYPE == 0) {
                jsonObj[index].CATEGORY = (Number(jsonObj[index].YEAR)).toString() + '年';
            }

            //设置分组统计值
            jsonObj[index].TOTALCOUNT = ForDight(jsonObj[index].NOWNUMBER, 2);
            jsonObj[index].COLOR = ARRCOLOR[index % 5];

        }
    };

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
        var data = Math.round(dight * Math.pow(10, how)) / Math.pow(10, how);
        return data;
    };

    function GetChart(dataFormated) {
        var chart = null;
        switch (dataFormated.chartType) {
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
            case 5://显示柱状图与现状图的混合图形 todo liubing 2015.4.20
                chart = ShowColumnAndLineChart(dataFormated);
                break;
            default: break;
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
    function ShowChart(chart, jsonData, precision, unit, targetDiv, chartType, arrFields, arrDesp1, arrDesp2, stackType) {
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

        for (var index in dataForamted.chartData) {
            //设置统计值显示时对应的颜色值
            if (index == 0) {
                dataForamted.chartData[index].COLOR = "#80CB30";
            }
            else if (index == dataForamted.chartData.length - 2) {
                dataForamted.chartData[index].COLOR = "#2994DC";
            }
        }

        // SERIAL CHART
        var chart = new AmCharts.AmSerialChart();
        chart.color = "#888888";
        chart.dataProvider = dataForamted.chartData;
        chart.categoryField = dataForamted.categoryField;
        chart.startDuration = 1;

        // AXES
        // category
        var categoryAxis = chart.categoryAxis;
        categoryAxis.dashLength = 1;
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

        graph.bulletBorderThickness = 1;
        graph.bulletBorderAlpha = 1;
        graph.connect = false;
        graph.fillAlphas = 0.3;
        graph.lineColorField = "COLOR";
        graph.fillColorsField = "COLOR";
        graph.lineThickness = 1;
        graph.valueField = dataForamted.valueFields[0];
        graph.balloonText = dataForamted.desp1[0] + "[[category]]" + dataForamted.desp2[0] + "<br><b><span>[[value]]" + dataForamted.unit + "</span></b>";
        chart.addGraph(graph);

        if (dataForamted.valueFields > 1) {
            //第二根线
            graph = new AmCharts.AmGraph();
            graph.valueAxis = valueAxis;
            graph.bullet = "round";
            graph.bulletSize = 8;
            graph.bulletBorderColor = "#FFFFFF";

            graph.bulletBorderThickness = 1;
            graph.bulletBorderAlpha = 1;
            graph.connect = false;
            graph.fillAlphas = 0.3;
            graph.lineColorField = "COLOR";
            graph.fillColorsField = "COLOR";
            graph.lineThickness = 1;
            graph.valueField = dataForamted.valueFields[1];
            graph.balloonText = dataForamted.desp1[1] + "[[category]]" + dataForamted.desp2[1] + "<br><b><span>[[value]]" + dataForamted.unit + "</span></b>";
            chart.addGraph(graph);
        }
        if (dataForamted.valueFields > 2) {
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
            graph.lineColorField = "COLOR";
            graph.fillColorsField = "COLOR";
            graph.lineThickness = 1;
            graph.valueField = dataForamted.valueFields[2];
            graph.balloonText = dataForamted.desp1[1] + "[[category]]" + dataForamted.desp2[1] + "<br><b><span>[[value]]" + dataForamted.unit + "</span></b>";
            chart.addGraph(graph);
        }

        // CURSOR  
        var chartCursor = new AmCharts.ChartCursor();
        chartCursor.zoomable = false;
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
        var arrColor2 = new Array("#AF5287", "#42B7ED", "#80CB30", "#B0CA1F", "#869BEE", "#F0990E", "#D581E3", "#EA8275", "#42C8D1", "#F1E527");
        if (typeof (dataForamted.chartData) == "undefined") {
            return null;
        }
        if (typeof (dataForamted.precision) != "number") {
            dataForamted.precision = 2;
        }
        if (typeof (dataForamted.valueFields) == "undefined"
            || dataForamted.valueFields.length == 0) {
            dataForamted.valueFields = new Array("", "TOTALCOUNT");
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

        if (typeof (dataForamted.categoryField) == "undefined"
	    && dataForamted.valueFields[0]=="") {
            dataForamted.categoryField = "CATEGORY";
            dataForamted.valueFields[0] = "CATEGORY";
        }

        if (typeof (dataForamted.arrColor) != "undefined") {
            arrColor = dataForamted.arrColor;
        }

        for (var index in dataForamted.chartData) {
            //设置统计值显示时对应的颜色值
            if (dataForamted.unit == "个") {
                dataForamted.chartData[index].COLOR = arrColor2[index];
            }
            else { dataForamted.chartData[index].COLOR = arrColor[index%5]; }
        }


        var chart = new AmCharts.AmSerialChart();
        chart.color = "#888888";
        chart.borderColor = "#888888";
        chart.dataProvider = dataForamted.chartData;
        chart.categoryField = dataForamted.valueFields[0];
        if (0.075 * dataForamted.chartData.length <= 0.3) {
            chart.columnWidth = 0.075 * dataForamted.chartData.length;
        }
        else {
            chart.columnWidth = 0.4;
        }
        chart.columnSpacing = 0;
        chart.startDuration = 1;
        chart.startEffect = ">";
        if (typeof (dataForamted.is3D) != "undefined") {
            chart.depth3D = 20;
            chart.angle = 30;
        }

        if (dataForamted.unit == "个") {

            chart.addListener("clickGraphItem", handleClick);
        }
        var categoryAxis = chart.categoryAxis;
        categoryAxis.axisColor = "#888888";

        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.stackType = "regular";
        valueAxis.axisColor = "#888888";
        chart.addValueAxis(valueAxis);

        var graph = new AmCharts.AmGraph();
        graph.valueField = dataForamted.valueFields[1];
        graph.colorField = "COLOR";
        graph.type = "column";
        graph.fillAlphas = 1;
        graph.cornerRadiusTop = 0;
        graph.lineAlpha = 0;
        graph.balloonText = "<span style='font-size:13px;color:#555555;'>" + dataForamted.desp1[0];
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
        var arrColor = new Array("#2994DC", "#B0CA1F", "#80CB30", "#2994DC", "#80CB30");

        if (typeof (dataForamted.chartData) == "undefined") {
            return null;
        }
        if (typeof (dataForamted.precision) != "number") {
            dataForamted.precision = 2;
        }
        if (typeof (dataForamted.valueFields) == "undefined"
            || dataForamted.valueFields.length == 0) {
            dataForamted.valueFields = new Array("TOTALCOUNT", "");
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
            chart.columnWidth = 0.075 * dataForamted.chartData.length;
        }
        else {
            chart.columnWidth = 0.25;
        }
        chart.columnSpacing = 0;
        chart.startDuration = 1;
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
        graph.title = "";
        graph.valueField = dataForamted.valueFields[0];
        graph.type = "column";
        graph.lineAlpha = 0;
        graph.fillAlphas = 1;
        graph.cornerRadiusTop = 0;
        graph.lineColor = "#80cb30";
        graph.balloonText = "<span style='color:#555555;'>" + dataForamted.desp1[0];
        graph.balloonText += "[[CATEGORY]]" + dataForamted.desp2[0] + "</span><br><span style='font-size:14px'><b>[[value]]" + dataForamted.unit + "</b></span>";
        chart.addGraph(graph);

        graph = new AmCharts.AmGraph();
        graph.title = "";
        graph.valueField = dataForamted.valueFields[1];
        graph.type = "column";
        graph.lineAlpha = 0;
        graph.fillAlphas = 1;
        graph.cornerRadiusTop = 0
        graph.cornerRadiusBottom = 0;
        graph.lineColor = "#2994DC";
        graph.balloonText = "<span style='color:#555555;'>" + dataForamted.desp1[1];
        graph.balloonText += "[[CATEGORY]]" + dataForamted.desp2[1] + "</span><br>"
        graph.balloonText += "<span style='font-size:14px'>[[title]]<b>[[value]]";
        graph.balloonText += dataForamted.unit + "</b></span>";
        chart.addGraph(graph);

        var chartCursor = new AmCharts.ChartCursor();
        chartCursor.cursorAlpha = 0;
        chartCursor.zoomable = false;
        chartCursor.categoryBalloonEnabled = false;
        chart.addChartCursor(chartCursor);
        chart.numberFormatter.precision = dataForamted.precision;
        return chart;
    };

    /*
*  功能:    返回柱状图和现状图的混合统计图
*  参数:    dataForamted
*  返回值： chart
*  作者：   liubing
*  日期：2014.4.20
*  版本：1.0
*/
    function ShowColumnAndLineChart(dataForamted) {
        var arrColor = new Array("#2994DC", "#B0CA1F", "#80CB30", "#2994DC", "#80CB30");

        if (typeof (dataForamted.chartData) == "undefined") {
            return null;
        }
        if (typeof (dataForamted.precision) != "number") {
            dataForamted.precision = 2;
        }
        if (typeof (dataForamted.valueFields) == "undefined"
            || dataForamted.valueFields.length == 0) {
            dataForamted.valueFields = new Array("TOTALCOUNT", "");
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
            dataForamted.unit = new Array("", "");
        }

        if (typeof (dataForamted.categoryField) == "undefined") {
            dataForamted.categoryField = "CATEGORY";
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
            chart.columnWidth = 0.075 * dataForamted.chartData.length;
        }
        else {
            chart.columnWidth = 0.25;
        }
        chart.columnSpacing = 0;
        chart.startDuration = 1;
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
        graph.title = "";
        graph.valueField = dataForamted.valueFields[0];
        graph.type = "column";
        graph.lineAlpha = 0;
        graph.fillAlphas = 1;
        graph.cornerRadiusTop = 0;
        graph.lineColor = "#80cb30";
        graph.balloonText = "<span style='color:#555555;'>" + dataForamted.desp1[0];
        graph.balloonText += "[[CATEGORY]]" + dataForamted.desp2[0] + "</span><br><span style='font-size:14px'><b>[[value]]" + dataForamted.unit[0] + "</b></span>";
        chart.addGraph(graph);

        graph = new AmCharts.AmGraph();
        graph.title = "";
        graph.valueField = dataForamted.valueFields[1];
        graph.type = "line";
        graph.lineAlpha = 0;
        graph.fillAlphas = 1;
        graph.cornerRadiusTop = 0
        graph.cornerRadiusBottom = 0;
        graph.lineColor = "#2994DC";
        graph.balloonText = "<span style='color:#555555;'>" + dataForamted.desp1[1];
        graph.balloonText += "[[CATEGORY]]" + dataForamted.desp2[1] + "</span><br>"
        graph.balloonText += "<span style='font-size:14px'>[[title]]<b>[[value]]";
        graph.balloonText += dataForamted.unit[1] + "</b></span>";
        chart.addGraph(graph);

        var chartCursor = new AmCharts.ChartCursor();
        chartCursor.cursorAlpha = 0;
        chartCursor.zoomable = false;
        chartCursor.categoryBalloonEnabled = false;
        chart.addChartCursor(chartCursor);
        chart.numberFormatter.precision = dataForamted.precision;
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
        var arrColors = ["#FF8155", "#FF9524", "#FFD324", "#AED233", "#53CE02",
                        "#129B00", "#56E477", "#10AE7C", "#39BBF1", "#038DC6",
                        "#0570D3", "#0A58A0", "#4872EA", "#484FEA", "#0008A6",
                        "#875CEA", "#5423C3", "#D932FD", "#8704A3", "#AD1292", "#FF15D6"];
        var chart = new AmCharts.AmPieChart();
        chart.colors = arrColors;
        chart.dataProvider = dataForamted.chartData;
        chart.titleField = dataForamted.valueFields[0];
        chart.valueField = dataForamted.valueFields[1];
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
        if (!dataForamted.chartData.stdValue) {
            dataForamted.chartData.stdValue = 100;
        }

        //当前值
        if (typeof (dataForamted.chartData.curValue) == "undefined") {
            dataForamted.chartData.curValue = 0;
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
    // 闭包结束
})(jQuery);