/**
 * Created by Administrator on 2016/10/8.
 */
$(function(){
		initRightTab("sjhj",3);
		var obj=_util.parseUrl();
		 var filterPanel = new FilterPanel({
         "title": "数据交换趋势",//过渡面板中的标题名称
         "titleIcon": "titleIcon",//标题图片的icon图标，
         "target": ".filterDiv",//目标，代码生成在哪个块级里面
         "filterObj": "ALL",//生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期
         "opens":"right",
         "defalutCityID":obj&&obj.QXDM?obj.QXDM:"",
         initSuccess:function(){
        	loadData();
         },
         callback: function () {    
        	 var starttime=$('#startDate').val();
     		var endtime=$('#endDate').val();
     		var cityCode=$('#cityCodeValue').val()||"";
        	 var url='/SJBDC/commonController/queryList.do?queryId=JgXnSjjhQueryMapper.querySBHJQS&queryMap[endtime]='+endtime+'&queryMap[starttime]='+starttime+'&queryMap[cityCode]='+cityCode;	
        	$("#resultList").bootstrapTable('refresh',{'url':url});
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

function height(){
	return $(".table1").height()-10;	
}
function ajaxqingqiu(cityCode,endtime,starttime){
	var url='/SJBDC/commonController/queryList.do?queryId=JgXnSjjhQueryMapper.querySBHJQS&queryMap[endtime]='+endtime+'&queryMap[starttime]='+starttime+'&queryMap[cityCode]='+cityCode;			
		$("#resultList").empty();
		$('#resultList').bootstrapTable({
	        url : url, //请求后台的URL（*）
	        method : 'get', //请求方式（*）
	        striped : true, //是否显示行间隔色
	        cache : false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
	        pagination : false, //是否显示分页（*）    
	        height:height(),
	        sortable : false, //是否启用排序
	        sortOrder : "asc", //排序方式
	        undefinedText:"",
	        queryParams : {},//传递参数（*）
	        pageNumber : 1, //初始化加载第一页，默认第一页
	        pageSize : 4, //每页的记录行数（*）
	        pageList : [ 10, 25, 50, 100 ], //可供选择的每页的行数（*）
	        search : false, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
	        strictSearch : false,
	        showColumns : false, //是否显示所有的列
	        showRefresh : false, //是否显示刷新按钮
	        minimumCountColumns : 2, //最少允许的列数
	        clickToSelect : true, //是否启用点击选中行
	        uniqueId : "ID", //每一行的唯一标识，一般为主键列
	        showToggle : false, //是否显示详细视图和列表视图的切换按钮
	        cardView : false, //是否显示详细视图
	        detailView : false, //是否显示父子表
	        border:"0",
	        showExport: true,                     //是否显示导出
	        exportDataType: "all",
	        onLoadSuccess:function(result){
	    		var SJSB=0;
	    		var SJHJ=0;
	    		for(var i=0;i<result.length;i++){
	    			SJSB+=result[i].SBZS;
	    			SJHJ+=result[i].HJZS;
	    		}
	    		$("#HJZL").html(SJHJ);
	    		$("#SBZL").html(SJSB);
	    		loadChart('zszmzzt',result);
	    	},
	        columns : [ {
                field: 'xh',
                title: '序号',
                width: '40',
                align:'center',
                formatter:function (value, row, index) {
                	return index+1;}
            },
            {
                field: 'DAY_ID',
                title: '时间',
                width: '40%',
                align:'center'
            },
            {
                field: 'SBZS',
                title: '上报量',
                width: '30%',
                align:'center'
            },
            {
                field: 'HJZS',
                title: '汇交量',
                width: '30%',
                align:'center'
            }]
	    });	
}	

function loadChart(id,data){
	  var x=[];
	    var SBL=[];
	    var HJL=[];
	    for(var i=0;i<data.length;i++){
	        x.push(data[i].DAY_ID);
	        SBL.push(data[i].SBZS);
	        HJL.push(data[i].HJZS);;
	    }
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:["#0a8fff","#f9b002","#02f94e"],
        grid:{
            x:40,
            y:30,
            x2:20,
            y2:50
        },
        legend: {
            show:false,
            bottom:0,
            left:'45%',
            data:['上报量', '汇交量']
        },
        toolbox: {
            show : true
        },
        calculable : true,
        yAxis : [
            {
                type : 'value',
                splitLine:{
                    show:true
                },
                axisTick:{
                    show:false
                }
            }
        ],
        xAxis : [
            {
                type : 'category',
                axisTick:{
                    show:false
                },
                axisLabel:{
                	show:true              
                },
                data : x
            }
        ],
        series : [
            {
                name:'上报量',
                type:'line',
                lineStyle:{
                	normal:{
                		color:"#6ACC79"
                	}
                },
                barWidth:30,
                data:SBL
            },
            {
                name:'汇交量',
                type:'line',
                lineStyle:{
                	normal:{
                		color:"#FF9000"
                	}
                },
                
                data:HJL
            }
        ]
    };
    var myChart = echarts.init(document.getElementById(id));
    myChart.setOption(option);
}

