var Page2Obj = {
    colors: ['#36A8FE', '#49D5A8', '#FCA659', '#7597F9', '#92D957'],
    init: function () {
    	initRightTab("ywjg",3);
        var obj = {};
        if (typeof window.parent.parent.getAttrObj === 'function') {
            obj = window.parent.parent.getAttrObj();
        }
        var filterPanel = new FilterPanel({
            "title": "异常趋势",// 过渡面板中的标题名称
            "titleIcon": "titleIcon",// 标题图片的icon图标，
            "target": ".filterDiv",// 目标，代码生成在哪个块级里面
            "filterObj": "ALL",// 生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期,
            "defalutCityID":  obj.QXDM==44? "": obj.QXDM,
            "startDate": obj ? obj.startDate : "2015-01-01",
            "endDate": obj ? obj.endDate : "2016-12-31",
            "initSuccess": function () {
                Page2Obj.initTables();
            },
            callback: function () {
                var options = $('#resultList').bootstrapTable('getOptions');
                options.queryParams = Page2Obj.getQueryParams();
                $('#resultList').bootstrapTable('refresh', options)
            }
        });
        filterPanel.init();
    },
    getQueryParams: function () {
        return {
            queryId: "JgXnYwjgQueryMapper.queryYCBySJ",
            queryMap: {
                startDate: $('#startDate').val(),
                endDate: $('#endDate').val(),
                cityCode: $('#cityCodeValue').val()
            }
        }//传递参数（*）
    },
    initTables: function () {
        $('#resultList').bootstrapTable({
            url: '/SJBDC/commonController/queryList.do',		 //请求后台的URL（*）
            method: 'post',					  //请求方式（*）
            striped: true,					  //是否显示行间隔色
            cache: false,					   //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: false,				   //是否显示分页（*）
            height: Page2Obj.getHeight('table'),
            sortable: false,					 //是否启用排序
            sortOrder: "asc",				   //排序方式
            queryParams: Page2Obj.getQueryParams(),
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
            onLoadSuccess: function (data) {
                Page2Obj.initEchart(data);
            },
            columns: [{
                title: '序号',
                width: 70,
                formatter: function (value, row, index) {
                    return ++index
                }
            }, {
                field: 'SJRKSJ',
                title: '时间',
                align: 'center',

            }, {
                field: '205',
                title: '证书异常',
                align: 'center',
                width: 150,
                formatter: function (v, rec) {
                	if(v==''||v==null){
                		return 0;
                	}
                	else{
                		return v;
                	}
                }
            }, {
                field: '201',
                title: '时序异常',
                align: 'center',
                width: 150,
                formatter: function (v, rec) {
                	if(v==''||v==null){
                		return 0;
                	}
                	else{
                		return v;
                	}
                }
            }, {
                field: '202',
                title: '超期办理',
                align: 'center',
                width: 150,
                formatter: function (v, rec) {
                	if(v==''||v==null){
                		return 0;
                	}
                	else{
                		return v;
                	}
                }
            }, {
                field: '203',
                title: '逻辑异常',
                align: 'center',
                width: 150,
                formatter: function (v, rec) {
                	if(v==''||v==null){
                		return 0;
                	}
                	else{
                		return v;
                	}
                }
            }, {
                field: '204',
                title: '其它异常',
                align: 'center',
                width: 150,
                formatter: function (v, rec) {
                	if(v==''||v==null){
                		return 0;
                	}
                	else{
                		return v;
                	}
                }
            }
            ]
        });
    }
    /**
     * 自动高度计算
     * @param type
     * @returns {number}
     */
    ,
    getHeight: function (type) {
        var height = $(window).height() - $('.box-title ').outerHeight() - 86;
        if (type == 'table') {
            return height * 0.60;
        } else {
            return height * 0.40
        }
    },
    /**
     * 初始化echart数据
     */
    initEchart: function () {

        var tableOptions = $('#resultList').bootstrapTable('getOptions');        
        var columns = tableOptions.columns[0], data = tableOptions.data, legend = [], xAxis = [], series = [];
        for (var i = 2; i < columns.length; i++) {
            legend.push({
                keyC: columns[i].title,
                keyE: columns[i].field
            });
        }
        for (var i = 0; i < data.length; i++) {
            xAxis.push(data[i].SJRKSJ);          
        }
        for (var i = 0; i < legend.length; i++) {
            series.push({
                name: legend[i].keyC,
                type: 'line',
                barWidth: '30%',
                stack: '总量',
                smooth:true,
                itemStyle: {
                    normal: {
                        color: Page2Obj.colors[i]
                    }
                },
                data: Page2Obj.parseData(data, legend[i])
            })
        }
        var option = {
            legend: {
                show: true,
                data: Page2Obj.parseLegend(legend)
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                x: 20,
                y: 30,
                x2: 20,
                y2: 15,
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap:false,
                    position: 'bottom',
                    axisTick: {
                        show: true
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#a7a7a7'

                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#000"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#bfbfbf',
                            type: 'solid',
                            opacity: 0.2
                        }
                    },
                    data: xAxis
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    inverse: false,
                    axisLine: {
                        lineStyle: {
                            color: '#a7a7a7'
                        }
                    },
                    axisTick: {
                        show: true
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#000"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#bfbfbf',
                            type: 'solid',
                            opacity: 0.4
                        }
                    },

                    min: 0,

                },
                {
                    type: 'value',
                    name: '单位(个)',
                    nameLocation: 'end',
                    position: 'right',
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
                            color: "#c9c9c9"
                        }
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#bfbfbf',
                            type: 'solid',
                            opacity: 0.4
                        }
                    }
                }
            ],
            series: series
        };
        $('#bar-echart').height(Page2Obj.getHeight("echart"));
        var myChart = echarts.init(document.getElementById('bar-echart'));
        myChart.setOption(option);

    },
    /**
     *数据解析
     * @param data
     * @param obj
     * @returns {Array}
     */
    parseData: function (data, obj) {
        var resultA = [];
        for (var j = 0; j < data.length; j++) {
            resultA.push(data[j][obj.keyE]||0);
        }
        return resultA;
    },
    /**
     *解析echaet legend数据
     * @param data
     * @returns {Array}
     */
    parseLegend: function (data) {
        var resultA = [];
        for (var i = 0; i < data.length; i++) {
            resultA.push(data[i]['keyC']);
        }
        return resultA;
    }
}

/**
 * 函数入口
 */
Page2Obj.init();

/**
 *
 */

