/**
 * Created by caolei
 */
var PageObj = {
    /**
     * 入口
     */
    init: function () {
    	initRightTab("yqjg",0);
        var height = $('.text-box').height();
        $('#point-echart').height(height);     
        this.initTables(height);
        this.initAreaEchart();
        this.initPointEchart()
        this.bindEvent();
    }, initPointEchart: function () {
 
        var data = [/*[X轴,Y轴,气泡大小,数据,数据]*/
            [[50, 25, 100, '房产税产', '房产税产', '#759FEB']],
            [[50, 49, 35, '不动产', '不动产', '#48D3D6']],
            [[23, 21, 55, '抵押证', '抵押证', '#3BA6F6']],
            [[85, 35, 67, '不动产登记', '不动产登记', '#6DABDA']],
            [[50, 0, 35, '不动产;抵押', '不动产;抵押', '#7ED97C']]];

        var option = {
            backgroundColor: '#fff',
            legend: {
                right: '2%',
                top: 'center',
                data: ['不动产', '查封', '土地证', '房产', '抵押'],
                show: false,
                textStyle: {
                    color: '#545454'
                },
                orient: 'vertical'
            },
            xAxis: {
                show: false,
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                show: false,
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true
            },
            series: parseSeries()

        }

        function parseSeries() {
            var str = data, resultA = [];
            for (var i = 0; i < str.length; i++) {
                resultA.push({
                    name: str[i][0][4],
                    data: data[i],
                    type: 'scatter',
                    symbolSize: function (data) {
                        var cirSize = Math.sqrt(data[2]) * 6;
                        console.info(cirSize);
                        if (cirSize < 50) {
                            cirSize = 55;
                        } else if (cirSize > 70) {
                            cirSize = 60;
                        }
                        return cirSize;
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3]

                            },
                            textStyle: {
                                fontWeight: 'bold'
                            },
                            position: 'inside',
                        },
                        emphasis: {
                            show: true,
                            formatter: function (param) {
                                return param.data[3]

                            },
                            position: 'inside'
                        }
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(120, 36, 50, 0.5)',
                            shadowOffsetY: 5,
                            color: str[i][0][5]
                        }
                    }
                })
            }

            return resultA
        }

        $('#point-echart').height($('.left-panel').height() - $('.point-box').outerHeight());
        var myChart = echarts.init(document.getElementById('point-echart'));
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }, initAreaEchart: function () {
        var option = {
            tooltip: {
                trigger: 'axis'
            },

            grid: {
                left: '0',
                right: '0',
                bottom: '0',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '关注趋势图',
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    areaStyle: {
                        normal: {
                            color: "#D2FAF9"
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: "#89E6EB"
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 22, 56]
                }
            ]
        };
        var chart = echarts.init(document.getElementById("area-echart"));
        chart.setOption(option);
    },
    initTables: function (height) {
        $('#resultList').bootstrapTable({
            url: '/SJBDC/commonController/queryList.do',		 //请求后台的URL（*）
            method: 'post',					  //请求方式（*）
            striped: true,					  //是否显示行间隔色
            cache: false,					   //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: false,				   //是否显示分页（*）
            height: height,
            sortable: false,					 //是否启用排序
            sortOrder: "asc",				   //排序方式
            queryParams: {
                "queryId": "com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryKeyWord",
            },
            pageNumber: 1,					   //初始化加载第一页，默认第一页
            pageSize: 10,					   //每页的记录行数（*）
            pageList: [10, 25, 50, 100],		//可供选择的每页的行数（*）
            search: false,					   //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: false,
            showColumns: false,				  //是否显示所有的列
            showRefresh: false,				  //是否显示刷新按钮
            minimumCountColumns: 2,			 //最少允许的列数
            clickToSelect: true,				//是否启用点击选中行
            uniqueId: "ID",					 //每一行的唯一标识，一般为主键列
            showToggle: false,					//是否显示详细视图和列表视图的切换按钮
            cardView: false,					//是否显示详细视图
            detailView: false,				   //是否显示父子表

            columns: [{
                title: '序号',
                width: 70,
                formatter: function (value, row, index) {
                    return ++index
                }
            }, {
                field: 'KEYWORD',
                title: '关注动态',
            }, {
                field: 'VALUE',
                title: '关注数量',
            }
            ]
        });
    }, bindEvent: function () {
        $('.progress-box').click(function () {
            location.href = "yqjgPage4.html?source=中国经济网"
        })
    }
}

PageObj.init();