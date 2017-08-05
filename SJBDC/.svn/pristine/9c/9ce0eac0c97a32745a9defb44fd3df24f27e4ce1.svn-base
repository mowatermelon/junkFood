/**
 * Created by Administrator on 2016/10/8.
 */
var cp=0;//省市切换标志位
$(function(){
	initRightTab("sjhj",2);
	 var filterPanel = new FilterPanel({
         "title": "上报情况",//过渡面板中的标题名称
         "titleIcon": "titleIcon",//标题图片的icon图标，
         "target": ".filterDiv",//目标，代码生成在哪个块级里面
         "filterObj": "ALL",//生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期
         "opens":"right",
         "startDate":"2016-01-01",
         "endDate":obj ? obj.endDate : "",
         initSuccess:function(){
        	loadData();
         },
         callback: function () {
        	 var starttime=$('#startDate').val();
     		var endtime=$('#endDate').val();
     		var cityCode=$('#cityCodeValue').val()||"";
     		var url = '/SJBDC/commonController/queryList.do?queryId=JgXnSjjhQueryMapper.querySJSB&queryMap[cityCode]='+cityCode+'&queryMap[starttime]='+starttime+'&queryMap[endtime]='+endtime;
        	 $("#resultList").bootstrapTable('refresh', {'url' : url});
         }
     });

     filterPanel.init();
   
	
});
function loadData(){
	var startDate=$('#startDate').val();
		var endDate=$('#endDate').val();
		var cityCode=$('#cityCodeValue').val()||"";
		ajaxqingqiu(cityCode,endDate,startDate);
		
}

function height() {
	return $("#qszstable").height();
}
function ajaxqingqiu(cityCode,endtime,starttime){
	var url = '/SJBDC/commonController/queryList.do?queryId=JgXnSjjhQueryMapper.querySJSB&queryMap[cityCode]='+cityCode+'&queryMap[starttime]='+starttime+'&queryMap[endtime]='+endtime		
	$("#resultList").empty();
	$('#resultList').bootstrapTable({
		url : url, // 请求后台的URL（*）
		method : 'get', // 请求方式（*）
		striped : true, // 是否显示行间隔色
		cache : false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
		pagination : false, // 是否显示分页（*）
		height : height(),
		sortable : false, // 是否启用排序
		sortOrder : "asc", // 排序方式
		queryParams : {},// 传递参数（*）
		pageNumber : 1, // 初始化加载第一页，默认第一页
		pageSize : 4, // 每页的记录行数（*）
		pageList : [ 10, 25, 50, 100 ], // 可供选择的每页的行数（*）
		search : false, // 是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
		strictSearch : false,
		showColumns : false, // 是否显示所有的列
		showRefresh : false, // 是否显示刷新按钮
		minimumCountColumns : 2, // 最少允许的列数
		clickToSelect : true, // 是否启用点击选中行
		uniqueId : "ID", // 每一行的唯一标识，一般为主键列
		showToggle : false, // 是否显示详细视图和列表视图的切换按钮
		cardView : false, // 是否显示详细视图
		detailView : false, // 是否显示父子表
		border : "0",
		showExport : false, // 是否显示导出
		exportDataType : "all",
		onLoadSuccess: function(result) {
			var ZL = 0;//汇交总数
			var SBCGSL = 0;//上报成功
			var SBWFK=0;//上报未反馈
			var SBYCSL=0;//上报异常
			var SJJYCW = 0;//数据校验错误
			var QMCW = 0;//签名错误
			var TSXX = 0;//提示信息
			var CFSB=0;//重复上报
			var TXWFGM;//图形无法构建
			var QTYC=0//其他异常
			var ZQL = 0;//正确率
			for ( var i=0;i<result.length;i++) {
				ZL += result[i].SBZS;
				SBCGSL += result[i].SBCGSL;
				SBWFK += result[i].SBWFK;
				SBYCSL += result[i].SBYCSL;
				SJJYCW += result[i].SJJYCW;
				QMCW += result[i].JSQMCW;
				TSXX += result[i].TSXX;
				CFSB += result[i].CFSB;
				TXWFGM += result[i].TXWFGM;
				QTYC += result[i].QTYC;
			};
			var data1=[];
			var data2=[];
			data1.push({name:'正常',value:SBCGSL},{name:'异常',value:SBYCSL},{name:'未反馈',value:SBWFK});
			data2.push({name:'校验错误',value:SJJYCW},{name:'重复上报',value:CFSB});
			data2.push({name:'图形无法构建',value:TXWFGM},{name:'签名错误',value:QMCW});
			data2.push({name:'提示信息',value:TSXX},{name:'其他异常',value:QTYC});
			var height0=$(".colborder1").width()/30;
			var height1=height0*3;
			var height2='7.5%';
			var height3='4.5%';
			loadChart(height0,height1,height2,'ZTQK',data1,'报文整体情况',['#6de36e','#56b2f8','#e0cef3']);
			loadChart(height0,height1,height3,'YCQK',data2,'异常报文情况',['#56b2f8','#47ddf1','#9ced81','#6cf6cd','#e0cef3','#f6d8b1']);
		},
		columns : [ {
			field : 'xh',
			title : '序号',
			align : 'center',
			formatter : function(value, row, index) {
				return index + 1;
			}
		}, {
			field : 'QXMC',
			title : '行政区划',		
			align : 'center', 
			formatter : function(value, row, index) {
				
				return '<a data-name="qxmc" onClick="find(\''+row.QXMC+'\','+row.QXDM+')">'+row.QXMC+'</a>';
			}
		}, {
			field : 'SBZS',
			title : '上报总数',			
			align : 'center',
			formatter: function (v) {
                if (v ==''||v == null) {
                    return 0;
                } else {
                    return v;
                }
            }
		}, {
			field : 'SBCGSL',
			title : '上报成功',
			align : 'center',
			formatter: function (v) {
                if (v ==''||v == null) {
                    return 0;
                } else {
                    return v;
                }
            }
		},{
			field : 'SBWFKZS',
			title : '未反馈报文',
			align : 'center',
			formatter: function (v) {
                if (v ==''||v == null) {
                    return 0;
                } else {
                    return v;
                }
            }
		},
		{
			field : 'SBYCSL',
			title : '异常报文',
			align : 'center',
			formatter: function (v) {
                if (v ==''||v == null) {
                    return 0;
                } else {
                    return v;
                }
            }
		},
		 {
			field : 'SJJYCW',
			title : '校验错误',
			align : 'center',
			formatter: function (v) {
                if (v ==''||v == null) {
                    return 0;
                } else {
                    return v;
                }
            }
		}, {
			field : 'JSQMCW',
			title : '签名错误',
			align : 'center',
			formatter: function (v) {
                if (v ==''||v == null) {
                    return 0;
                } else {
                    return v;
                }
            }
		}, {
			field : 'TSXX',
			title : '提示信息',
			align : 'center',
			formatter: function (v) {
                if (v ==''||v == null) {
                    return 0;
                } else {
                    return v;
                }
            }
		},
		 {
			field : 'TSXX',
			title : '重复上报',
			align : 'center',
			formatter: function (v) {
                if (v ==''||v == null) {
                    return 0;
                } else {
                    return v;
                }
            }
		},
		{
			field : 'TXWFGM',
			title : '图形无法构面',
			align : 'center',
			formatter: function (v) {
                if (v ==''||v == null) {
                    return 0;
                } else {
                    return v;
                }
            }
		},
		 {
			field : 'QTYC',
			title : '其他异常',
			align : 'center',
			formatter: function (v) {
                if (v ==''||v == null) {
                    return 0;
                } else {
                    return v;
                }
            }
		},
		{
			field : 'ZQL',
			title : '正确率',
			align : 'center',
			formatter: function (value, row, index) {
				if(row.SBZS==0){
					return "0%"
				}
            	return parseInt((row.SBCGSL/row.SBZS)*100)+"%";
            	}
			}
		]

	});	
}

function loadChart(height0,height1,height2,id,data,title,color) {
	var x=[];
	for(var i in data){
		x.push(data[i].name);
	}
	option = {
		tooltip : {
			trigger : 'item',
			formatter:'{b}:{c}个({d}%)'
		},
		title:{
			text:title,
				top:5,
				left:'5%',
				textStyle:{
					fontWeight:200,
					fontSize:16
				}
		},
		legend : {
			show : true,
			bottom : height2,			
			orient:'horizontal',
			itemGap: height0,
			itemWidth:height1,
			itemHeight:9,
			data : x
		},
		series : [ {
			name : '证书',
			type : 'pie',
			center:['50%','45%'],
			radius:'60%',
			color : color,
			label : {
				normal : {
					show : false,
					
			}
			},
			itemStyle : {
				normal : {
					
					
				}
			},
			data : data
		}]
	};

	var myChart = echarts.init(document.getElementById(id));
	myChart.setOption(option);

}
function find(cityName,cityCode){
	if(cp==0){
		var starttime=$('#startDate').val();
		var endtime=$('#endDate').val();
		$('#cityCodeValue').val(cityCode);
		$('#cityName').html(cityName);
		cityCode=cityCode?cityCode:"";
		var url = '/SJBDC/commonController/queryList.do?queryId=JgXnSjjhQueryMapper.querySJSB&queryMap[cityCode]='+cityCode+'&queryMap[starttime]='+starttime+'&queryMap[endtime]='+endtime;
		$("#resultList").bootstrapTable('refresh', {'url' : url});
		cp=1;
	}else{
		var starttime=$('#startDate').val();
		var endtime=$('#endDate').val();
		$('#cityCodeValue').val("");
		$('#cityName').html('广东省');
		cityCode="";
		var url = '/SJBDC/commonController/queryList.do?queryId=JgXnSjjhQueryMapper.querySJSB&queryMap[cityCode]='+cityCode+'&queryMap[starttime]='+starttime+'&queryMap[endtime]='+endtime;
		$("#resultList").bootstrapTable('refresh', {'url' : url});
		cp=0;
	}
	
}