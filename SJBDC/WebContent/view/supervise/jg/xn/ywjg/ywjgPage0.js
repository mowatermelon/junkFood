var pageObj = {
	colors:["#36A9FC","#49D4AA","#FCA659","#7597F9","#92D955","#CA83FB","#556CAF","#BA8251","#877F8C"],
    init: function () {
    	initRightTab("ywjg",0);
        var obj = {};
        if (typeof window.parent.parent.getAttrObj === 'function') {
            obj = window.parent.parent.getAttrObj();
        }
        var filterPanel = new FilterPanel({
            "title": "业务统计",// 过渡面板中的标题名称
            "titleIcon": "titleIcon",// 标题图片的icon图标，
            "target": ".filterDiv",// 目标，代码生成在哪个块级里面
            "filterObj": "ALL",// 生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期,
            //"dateFormat":"YYYY",
            "defalutCityID": obj ? obj.QXDM : "",
            "startDate":  "2016-01-01",
            "endDate":  obj ? obj.endDate : "",
            "initSuccess": function () {
                pageObj.initTable();
            },
            callback: function () {
                var options = $('#resultList').bootstrapTable('getOptions');
                options.queryParams = pageObj.getQueryParams();
                $('#resultList').bootstrapTable('refresh', options)
            }
        });
        filterPanel.init();
    }, getQueryParams: function () {
        return {
            queryId: "JgXnYwjgQueryMapper.queryYWTJ",
            queryMap: {
                starttime: $('#startDate').val(),
                endtime: $('#endDate').val(),
                cityCode: $('#cityCodeValue').val() ||""
            }
        }// 传递参数（*）
    },
    initTable: function () {
        $('#resultList').bootstrapTable({
            url: '/SJBDC/commonController/queryList.do', // 请求后台的URL（*）
            method: 'post', // 请求方式（*）
            striped: true, // 是否显示行间隔色
            cache: false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: false, // 是否显示分页（*）
            height: pageObj.getHeight('table'),
            sortable: false, // 是否启用排序
            sortOrder: "asc", // 排序方式
            queryParams: pageObj.getQueryParams(),
            pageNumber: 1, // 初始化加载第一页，默认第一页
            pageSize: 10, // 每页的记录行数（*）
            pageList: [10, 25, 50, 100], // 可供选择的每页的行数（*）
            search: false, // 是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: false,
            showColumns: false, // 是否显示所有的列
            showRefresh: false, // 是否显示刷新按钮
            minimumCountColumns: 2, // 最少允许的列数
            clickToSelect: true, // 是否启用点击选中行
            uniqueId: "ID", // 每一行的唯一标识，一般为主键列
            showToggle: false, // 是否显示详细视图和列表视图的切换按钮
            cardView: false, // 是否显示详细视图
            detailView: false, // 是否显示父子表
            onLoadSuccess: function (data) {
                pageObj.initEchart(data);
            },
            columns: [[
				{
                field: 'XH',
                title: '序号',
                width: '150',
                align: 'center',
                formatter: function (value, row, index) {
                    return index + 1
                }
				},
                {
                    field: 'QXMC',
                    title: '区域',
                    width: "10%",
                    align: 'center',
                    formatter : function(value, row, index) {
        				
        				return '<a  data-name="qxmc" data-xzqmc="'+row.QXMC+'" onClick="find(this)">'+row.	QXMC+'</a>';
        			}
                },
                {
                    field: 'SCDJ',
                    title: '首次登记',
                    width: '10%',
                    align: 'center',
                    formatter : function(value, row, index) {
                    	value=value||0;
        				return '<a style="display: inline-block;padding:3px 6px;cursor: pointer;" data-djlx="首次登记" data-qxdm="'+row.QXDM+'" onClick="find(this)">'+value+'</a>';
        				}	

                },
                {
                    field: 'ZYDJ',
                    title: '转移登记',
                    width: '10%',
                    align: 'center',
                    formatter : function(value, row, index) {
                    	value=value||0;
        				return '<a style="display: inline-block;padding:3px 6px;cursor: pointer;" data-djlx="转移登记" data-qxdm="'+row.QXDM+'" onClick="find(this)">'+value+'</a>';
        				}	

                },
                {
                    field: 'BGDJ',
                    title: '变更登记',
                    width: '10%',
                    align: 'center',formatter : function(value, row, index) {
                    	value=value||0;
        				return '<a style="display: inline-block;padding:3px 6px;cursor: pointer;" data-djlx="变更登记" data-qxdm="'+row.QXDM+'"  onClick="find(this)">'+value+'</a>';
    				}	

                },
                {
                    field: 'ZXDJ',
                    title: '注销登记',
                    width: '10%',
                    align: 'center',
                    formatter : function(value, row, index) {
                    	value=value||0;
        				return '<a style="display: inline-block;padding:3px 6px;cursor: pointer;" data-djlx="注销登记" data-qxdm="'+row.QXDM+'" onClick="find(this)">'+value+'</a>';
    				}	

                }, {
                    field: 'GZDJ',
                    title: '更正登记',
                    width: '10%',
                    align: 'center',
                    formatter : function(value, row, index) {
                    	value=value||0;
        				return '<a style="display: inline-block;padding:3px 6px;cursor: pointer;" data-djlx="更正登记" data-qxdm="'+row.QXDM+'" onClick="find(this)">'+value+'</a>';
    				}	

                },
                {
                    field: 'YYDJ',
                    title: '异议登记',
                    width: '10%',
                    align: 'center',
                    formatter : function(value, row, index) {
                    	value=value||0;
        				return '<a style="display: inline-block;padding:3px 6px;cursor: pointer;" data-djlx="异议登记" data-qxdm="'+row.QXDM+'" onClick="find(this)">'+value+'</a>';
    				}	
                },
                {
                    field: 'YGDJ',
                    title: '预告登记',
                    width: '10%',
                    align: 'center',
                    formatter : function(value, row, index) {
                    	value=value||0;
        				return '<a style="display: inline-block;padding:3px 6px;cursor: pointer;" data-djlx="预告登记" data-qxdm="'+row.QXDM+'" onClick="find(this)">'+value+'</a>';
        				}	
                },
                {
                    field: 'CFDJ',
                    title: '查封登记',
                    width: '10%',
                    align: 'center',
                    formatter : function(value, row, index) {
                    	value=value||0;
        				return '<a style="display: inline-block;padding:3px 6px;cursor: pointer;" data-djlx="查封登记" data-qxdm="'+row.QXDM+'" onClick="find(this)">'+value+'</a>';
        				}	

                }, {
                    field: 'QTDJ',
                    title: '其它登记',
                    width: '10%',
                    align: 'center',
                    formatter : function(value, row, index) {
                    	value=value||0;
        				return '<a style="display: inline-block;padding:3px 6px;cursor: pointer;" data-djlx="其它登记" data-qxdm="'+row.QXDM+'" onClick="find(this)">'+value+'</a>';
        				}	
                }
            ]
            ]
        });

    }, getHeight: function (type) {
        var height = $(window).height() - $('.filterDiv ').outerHeight() - 30;
        if (type == 'table') {
            return height * 0.60;
        } else {
            return height * 0.40
        }
    }, initEchart: function (data) {
        var options = $('#resultList').bootstrapTable("getOptions");
        var legendA = [], series = [], xAxis = [], columns = options.columns[0];
        //alert(JSON.stringify(data));
        for (var i = 2; i < columns.length; i++) {
            legendA.push({
                key: columns[i].field,
                value: columns[i].title
            })
        }
        if (data && data.length) {
            for (var i = 0; i < data.length; i++) {
            	
                xAxis.push(data[i].QXMC);
            }
        }
        function getData(key) {
            var resultA = [], series = [];
            for (var i = 0; i < data.length; i++) {
                resultA.push(data[i][key]);
            }
            return resultA;
        }


        function getLegend() {
            var resultA = [];
            for (var i = 0; i < legendA.length; i++) {
                resultA.push(legendA[i].value);
            }
            return resultA;
        }

        if (legendA && legendA.length) {
            for (var i = 0; i < legendA.length; i++) {
                series.push({
                    name: legendA[i].value,
                    type: 'bar',
                    barWidth: '30%',
                    stack: 'account',
                    itemStyle : { 
                    	normal: { 
                    		color:pageObj.colors[i]
                    	}
                    },
                    data: getData(legendA[i].key)
                })
            }
        }

        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: getLegend(),
                align: 'left',
                left: 'center',
                itemGap :25,
            },
            grid: {
                x: 20,
                y: 35,
                x2: 20,
                y2: 20,
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
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
                    }
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
                    },
                    
                    min: 1,
                    
                }
            ],
            series: series
        };
        $('#bar-echart').height(pageObj.getHeight("echart"));
        var myChart = echarts.init(document.getElementById("bar-echart"));
        myChart.setOption(option);
        myChart.on('click', function (param) {
        	var qxdm0=citySetting.getCity(param.name);
        	$('#cityCodeValue').val(qxdm0.id);
        	$('#cityName').html(param.name);              
        	pageObj.cityCode = qxdm0.id;
            var options = $('#resultList').bootstrapTable('getOptions');
            options.queryParams = pageObj.getQueryParams();
            $('#resultList').bootstrapTable('refresh', options)        	
        })
    }
}
pageObj.init();

function find(that){
	if($(that).data("name")=='qxmc')
	{		
		var xzqmc0=$(that).data("xzqmc");   
		if(citySetting.getCity(xzqmc0)){
			var xzqdm0=citySetting.getCity(xzqmc0).id; 			
    	$('#cityCodeValue').val(xzqdm0);
    	$('#cityName').html(xzqmc0);              
    	pageObj.cityCode = xzqdm0;
        var options = $('#resultList').bootstrapTable('getOptions');
        options.queryParams = pageObj.getQueryParams();
        $('#resultList').bootstrapTable('refresh', options)   
	}
	}
	else
	{var djlx=$(that).data("djlx");
	var qxdm=$(that).data("qxdm");
	location.href=(encodeURI("ywjgPage5.jsp?djlx="+djlx+"&qxdm="+qxdm,"utf-8"));
	}
}