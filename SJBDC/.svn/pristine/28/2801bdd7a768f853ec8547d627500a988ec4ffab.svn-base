var Page1Obj = {
    init: function () {
        var filterPanel = new FilterPanel({
            "title": "地图专题",//过渡面板中的标题名称
            "titleIcon": "glyphicon-stats",//标题图片的icon图标，
            "target": ".filterDiv",//目标，代码生成在哪个块级里面
            "filterObj": "ALL",//生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期
            callback: function () {
                Page1Obj.loadData();
            }
        });

        filterPanel.init();

        var height = $(window).height() - $('.box-title ').outerHeight() - 86;
        $('.box-inner').height(height);
        this.loadData();
    },
    loadData: function () {
        /**
         * 查询top bar数据
         */
        Page1Obj.ajaxJSON("com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryYCXX", function (str) {
            Page1Obj.initTopEchart(str);
        })
        /**
         * 查询top10数据
         */
        Page1Obj.ajaxJSON("com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryYCXXTOP10", function (str) {
            Page1Obj.initBottomEchart(str);
        })
    },
    ajaxJSON: function (id, c) {
        _util.ajaxData("/SJBDC/commonController/queryList.do", {
            queryId: id,
            queryMap: {
                startDate: $('#startDate').val(),
                endDate: $('#endDate').val(),
                cityCode: $('#cityCodeValue').val(),
            }
        }, function (str) {
            c && c(str);
        })
    },

    /**
     * 初始化上层echart
     */
    initTopEchart: function (str) {
        var xAxis = [], data = [];
        for (var i = 0; i < str.length; i++) {
            xAxis.push(str[i].YCDM);
            data.push(str[i].VALUE);
        }

        var topOption = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '8%',
                top: '8%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: xAxis,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#999999'
                        }
                    },

                    axisLabel: {
                        textStyle: {
                            fontSize: 10,
                            color: '#616161'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#616161'
                        }
                    },
                    axisTick: {
                        show: true
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#ededed',
                            type: 'solid'
                        }
                    }
                }
            ],
            series: [
                {
                    type: 'bar',
                    barWidth: '30%',
                    data: data
                }
            ]
        };
        var height = $('#top-echart').parents(".half-box").height();
        $("#top-echart").height(height - $('.box-inner-title').outerHeight());
        var myChart = echarts.init(document.getElementById('top-echart'));
        myChart.setOption(topOption);// 使用刚指定的配置项和数据显示图表。
    }

    ,
    /**
     * 初始化底层echart
     */
    initBottomEchart: function (str) {


        var xAxis = [],data=[];
        for (var i = 0; i < str.length; i++) {
            xAxis.push(str[i].XZQMC);
            data.push(str[i].VALUE);
        }
        var lineOption = {
            grid: {
                left: '0%',
                right: '5%',
                bottom: '0%',
                top: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#a7a7a7'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: "#000"
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: ['#bfbfbf'],
                        type: 'dotted'
                    }
                }
            },
            yAxis: {
                type: 'category',
                inverse: true,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#a7a7a7'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: "#575757"
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: ['#bfbfbf'],
                        type: 'dotted'
                    }
                },
                data: xAxis
            },
            series: [
                {
                    name: '',
                    type: 'bar',
                    barWidth: '50%',
                    itemStyle: {
                        normal: {
                            color: '#75daf4'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right'
                        }
                    },
                    data: data
                }
            ]
        };
        var height = $('#bottom-echart').parents(".half-box").height();
        $("#bottom-echart").height(height - $('.box-inner-title').outerHeight());
        var myChart = echarts.init(document.getElementById('bottom-echart'));
        myChart.setOption(lineOption);
    }
}

/**
 * 启动方法（入口）
 */
Page1Obj.init();

/**
 *
 */


