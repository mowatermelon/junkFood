
var cp=0//城市来回切换标志
var Page2Obj = {
    init: function () {
    	initRightTab("sjhj",0);
        var obj = {};
        if (typeof window.parent.parent.getAttrObj === 'function') {
            obj = window.parent.parent.getAttrObj();
        }
        var filterPanel = new FilterPanel({
            "title": "接入情况",//过渡面板中的标题名称
            "titleIcon": "glyphicon-stats",//标题图片的icon图标，
            "target": ".filterDiv",//目标，代码生成在哪个块级里面
            "filterObj": "CITY",//生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期
            "defalutCityID": obj ? obj.QXDM: "",
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
            queryId: "JgXnSjjhQueryMapper.queryPageForJRQKbyCity",
            queryMap: {
                /*  startDate: $('#startDate').val(),
                 endDate: $('#endDate').val(),*/
                cityCode: $('#cityCodeValue').val() ||""
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
            undefinedText:"",
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
                width: "70",
                align: 'center',
                formatter: function (value, row, index) {
                    return ++index
                }
            }, {
                field: 'QXMC',
                title: '区域',
                align: 'center',
                width: 150,
                formatter : function(value, row, index) {
    				return '<a  data-name="qxmc" data-xzqdm="'+row.QXDM+'" onClick="find(this)">'+row.QXMC+'</a>';
    			}
            }, {
            	field:"TOTAL",
                title: '接入总量',
                width: 150,
                align: 'center',
               
            },  {
                field: 'WJR',
                title: '未接入量',
                align: 'center',
                width: 150,
                formatter: function (v, rec) {
                    return rec.TOTAL-rec.YJR
                }
            }, {
                field: 'YJR',
                title: '已接入量',
                align: 'center',
                width: 150
            },{

                title: '接入率',
                width: 150,
                align: 'center',
                formatter: function (v, rec) {
                    return ((rec.YJR /rec.TOTAL)* 100).toFixed(0)+ "%"
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
        var height = $(window).height() - $('.box-title ').outerHeight() -100;
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
        var data = tableOptions.data, xAxis = [], series = [], seriesData = [];
        var totalPoint = 0, yjrPoint = 0;
        for (var i = 0; i < data.length; i++) {
            yjrPoint += data[i].YJR;
            totalPoint += data[i].TOTAL;
        }
        $('#totalPoint').text(totalPoint);
        $('#yjrPoint').text(yjrPoint);
        $('#percent').text(((yjrPoint / totalPoint) * 100).toFixed(2)+ "%");

        for (var i = 0; i < data.length; i++) {
            xAxis.push(data[i].QXMC);
            seriesData.push((data[i].YJR / data[i].TOTAL) * 100).toFixed(2);
        }

        series.push({
            name: "接入率",
            type: 'bar',
            barWidth: '30%',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: "#6FD8A0"
                }
            },
            data: seriesData,
        })

        var option = {
            grid: {
                x: 0,
                y: 30,
                x2: 0,
                y2: 15,
                containLabel: true
            },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter:'{a}<br />{b}{c}%'    
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
                    },
                    max:100,
                    min: 0,

                },
                {
                    type: 'value',
                    name: '单位(%)',
                    nameLocation: 'end',
                    position: 'left',
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
        myChart.on('click', function (param) {      	
        	var qxdm0=citySetting.getCity(param.name);
        	$('#cityCodeValue').val(qxdm0.id);
        	$('#cityName').html(param.name);              
        	Page2Obj.cityCode = qxdm0.id;
            var options = $('#resultList').bootstrapTable('getOptions');
            options.queryParams = Page2Obj.getQueryParams();
            $('#resultList').bootstrapTable('refresh', options)         
        })
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
            resultA.push(data[j][obj.keyE]);
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

function find(that){
	if($(that).data("name")=='qxmc')
		{		
  		var xzqdm=$(that).data("xzqdm");   
  		if(cp==0){
  			var cityName=citySetting.getCity(xzqdm).name; 
  			var cityCode=citySetting.getCity(xzqdm).id; 
        	$('#cityCodeValue').val(cityCode);
        	$('#cityName').html(cityName);              
        	Page2Obj.cityCode = cityCode;
            var options = $('#resultList').bootstrapTable('getOptions');
            options.queryParams = Page2Obj.getQueryParams();
            $('#resultList').bootstrapTable('refresh', options);
            cp=1;
    	}else{
    		$('#cityCodeValue').val("");
    		$('#cityName').html("广东省");
    		Page2Obj.cityCode = "";
            var options = $('#resultList').bootstrapTable('getOptions');
            options.queryParams = Page2Obj.getQueryParams();
            $('#resultList').bootstrapTable('refresh', options);
            cp=0;
    	}
	}
}
