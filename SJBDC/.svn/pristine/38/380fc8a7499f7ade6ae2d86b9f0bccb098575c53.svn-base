var pageObj = {
    colors: ['#ca83fa', '#92d956', '#7597fa', '#fba659', '#4ad5a9', '#37a8fc'].reverse(),
    cityCode: "",
    index:0,//柱状图标志位 0 省    1 市县
    init: function () {
        initRightTab("gzjz", 0);
        var filterPanel = new FilterPanel({
            "title": "详细信息",// 过渡面板中的标题名称
            "titleIcon": "titleIcon",// 标题图片的icon图标，
            "target": ".filterDiv",// 目标，代码生成在哪个块级里面
            "filterObj": "CITY",// 生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期
            "defalutCityID": obj ? obj.QXDM : "",
            "initSuccess": function () {
                pageObj.initTable();
            },
            callback: function () {
                pageObj.cityCode = $('#cityCodeValue').val();
                var options = $('#resultList').bootstrapTable('getOptions');
                options.queryParams = pageObj.getQueryParams();
                $('#resultList').bootstrapTable('refresh', options)
            }
        });
        filterPanel.init();
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
            queryParams: pageObj.getQueryParams,
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
            columns: [{
                field: 'XH',
                title: '序号',
                width: '5%',
                align: 'center',
                formatter: function (value, row, index) {
                    return index + 1
                }
            }, {
                field: 'XZQMC',
                title: '区域',
                width: "10%",
                align: 'center',
                formatter : function(value, row, index) {
    				return '<a  data-name="qxmc" data-xzqmc="'+row.XZQMC+'" onClick="find(this)">'+row.XZQMC+'</a>';
    			}
            }, {
                field: 'BFXZ',
                title: '颁发新证',
                width: '10%',
                align: 'center',
                titleTooltip:"ssssss",
                formatter: function (value, row, index) {
                    if (pageObj.cityCode) {
                        if (row.BFXZ == 1) {
                            return "<span class=' 	glyphicon glyphicon-ok'style='color:green'></span>"
                        } else {
                            return "-";
                        }
                    } else {
                        return row.BFXZ + "/" + row.ZL
                    }
                }
            }, {
                field: 'CKSZ',
                title: '窗口设置',
                width: '10%',
                align: 'center',
                formatter: function (value, row, index) {
                    if (pageObj.cityCode) {
                        if (row.CKSZ == 1) {
                            return "<span class=' 	glyphicon glyphicon-ok'style='color:green'></span>"
                        } else {
                            return "-";
                        }
                    } else {
                        return row.CKSZ + "/" + row.ZL
                    }
                }

            }, {
                field: 'RYHZDW',
                title: '人员划转',
                width: '10%',
                align: 'center',
                formatter: function (value, row, index) {
                    if (pageObj.cityCode) {
                        if (row.RYHZDW == 1) {
                            return "<span class=' 	glyphicon glyphicon-ok'style='color:green'></span>"
                        } else {
                            return "-";
                        }
                    } else {
                        return row.RYHZDW + "/" + row.ZL
                    }
                }
            }, {
                field: 'ZLYJ',
                title: '资料移交',
                width: '10%',
                align: 'center',
                formatter: function (value, row, index) {
                    if (pageObj.cityCode) {
                        if (row.ZLYJ == 1) {
                            return "<span class=' 	glyphicon glyphicon-ok'style='color:green'></span>"
                        } else {
                            return "-";
                        }
                    } else {
                        return row.ZLYJ + "/" + row.ZL
                    }
                }
            }, {
                field: 'SJZHJK',
                title: '数据整合',
                width: '10%',
                align: 'center',
                formatter: function (value, row, index) {
                    if (pageObj.cityCode) {
                        if (row.SJZHJK == 1) {
                            return "<span class=' 	glyphicon glyphicon-ok'style='color:green'></span>"
                        } else {
                            return "-";
                        }
                    } else {
                        return row.SJZHJK + "/" + row.ZL
                    }
                }
            }, {
                field: 'YWLCZZ',
                title: '流程再造',
                width: '10%',
                align: 'center',
                formatter: function (value, row, index) {
                    if (pageObj.cityCode) {
                        if (row.YWLCZZ == 1) {
                            return "<span class=' 	glyphicon glyphicon-ok'style='color:green'></span>"
                        } else {
                            return "-";
                        }
                    } else {
                        return row.YWLCZZ + "/" + row.ZL
                    }
                }
            }, {
                field: 'XTSJGZ',
                title: '系统升级',
                width: '10%',
                align: 'center',
                formatter: function (value, row, index) {
                    if (pageObj.cityCode) {
                        if (row.XTSJGZ == 1) {
                            return "<span class=' 	glyphicon glyphicon-ok'style='color:green'></span>"
                        } else {
                            return "-";
                        }
                    } else {
                        return row.XTSJGZ + "/" + row.ZL
                    }
                }
            }, {
                field: 'JSBWSJ',
                title: '系统接入',
                width: '10%',
                align: 'center',
                formatter: function (value, row, index) {
                    if (pageObj.cityCode) {
                        if (row.JSBWSJ == 1) {
                            return "<span class=' 	glyphicon glyphicon-ok'style='color:green'></span>"
                        } else {
                            return "-";
                        }
                    } else {
                        return row.JSBWSJ + "/" + row.ZL
                    }
                }
            }]
        });

    },
    getHeight: function (type) {
        var height = $(window).height() - $('.box-title ').outerHeight() - 70;
        if (type == 'table') {
            return height * 0.60;
        } else {
            return height * 0.40
        }
    },
    initEchart: function (data) {
        var options = $('#resultList').bootstrapTable("getOptions");
        var legendA = [], series = [], xAxis = [], columns = options.columns[0];
        for (var i = 4; i < columns.length; i++) {
            legendA.push({
                key: columns[i].field,
                value: columns[i].title
            })
        }
        if (data && data.length) {
            for (var i = 0; i < data.length; i++) {
                xAxis.push(data[i].XZQMC);
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
                    itemStyle: {
                        normal: {
                            color: pageObj.colors[i],
                            barBorderRadius: 5,
                        }
                    },
                    data: getData(legendA[i].key)
                })
            }
        }

        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: getLegend(),
                align: 'left',
                left: 'center'
            },
            grid: {
                x: 20,
                y: 35,
                x2: 20,
                y2: 20,
                containLabel: true
            },
            xAxis: [{
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
                    },
                    formatter:function(val){
                		var str="";
                       for(var i=0;i<val.length+4;i+=4){
                    	   str+=val.substring(i,i+4)+"\n"
                       }
                       return str;
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
            }],
            yAxis: [{
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
            }, {
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

            }],
            series: series
        };
        $('#bar-echart').height(pageObj.getHeight("echart"));
        var myChart = echarts.init(document.getElementById("bar-echart"));
        myChart.setOption(option);
        myChart.on('click', function (param) {
        	if(pageObj.index==0){
        		var qxdm0=citySetting.getCity(param.name);
            	$('#cityCodeValue').val(qxdm0.id);
            	$('#cityName').html(param.name);              
            	pageObj.cityCode = qxdm0.id;
                var options = $('#resultList').bootstrapTable('getOptions');
                options.queryParams = pageObj.getQueryParams();
                $('#resultList').bootstrapTable('refresh', options);
                pageObj.index=1;
        	}else {
        	var qxdm0=citySetting.getCity('广东省');
        	$('#cityCodeValue').val("");
        	$('#cityName').html('广东省');              
        	pageObj.cityCode ="";
            var options = $('#resultList').bootstrapTable('getOptions');
            options.queryParams = pageObj.getQueryParams();
            $('#resultList').bootstrapTable('refresh', options);
            pageObj.index=0;
        	}
        })
    },
    getQueryParams: function () {
        return {
            queryId: "JgXnGzjzQueryMapper.queryDSGZJZ",
            queryMap: {
                "cityCode": $('#cityCodeValue').val() || ""
            }
        }
    }     
}
pageObj.init();

function find(that){
	if($(that).data("name")=='qxmc')
		{		
  		var xzqmc0=$(that).data("xzqmc"); 
  		if(pageObj.index==0){
  		if(citySetting.getCity(xzqmc0)){
  			var xzqdm0=citySetting.getCity(xzqmc0).id;
      		$('#cityCodeValue').val(xzqdm0);
        	$('#cityName').html(xzqmc0);
        	pageObj.cityCode =xzqdm0;
            var options = $('#resultList').bootstrapTable('getOptions');
            options.queryParams = pageObj.getQueryParams();
            $('#resultList').bootstrapTable('refresh', options);
            pageObj.index=1;
    	}
	
		}else{
			var qxdm0=citySetting.getCity('广东省');
        	$('#cityCodeValue').val("");
        	$('#cityName').html('广东省');              
        	pageObj.cityCode ="";
            var options = $('#resultList').bootstrapTable('getOptions');
            options.queryParams = pageObj.getQueryParams();
            $('#resultList').bootstrapTable('refresh', options);
            pageObj.index=0;
		}
		}
}