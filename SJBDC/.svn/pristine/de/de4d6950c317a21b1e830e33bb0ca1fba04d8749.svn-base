/**
 * Created by Administrator on 2016/10/8.
 */
$(function(){
	 var filterPanel = new FilterPanel({
         "title": "汇交情况",//过渡面板中的标题名称
         "titleIcon": "glyphicon-stats",//标题图片的icon图标，
         "target": ".filterDiv",//目标，代码生成在哪个块级里面
         "filterObj": "CITY",//生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期
//         "opens":"right",
//         "startDate":"2015-01-01",
//         "endDate":"2016-10-01",
         initSuccess:function(){
        	 ajaxqingqiu();
         },
         callback: function () {
        	 ajaxqingqiu();
         }
     });

     filterPanel.init();
   
	
});

function height(){
	return $(".table1").height()-10;	
}

function ajaxqingqiu(){
	var url='/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForJgXnSjhjTable1';		
		url+='&queryMap[qxdm]='+44;	
		$.ajax({url:url,
	    	type:"get",
	    	dataType:"json",
	    	success:function(data2){
	    		var account=0;
	    		var YJR=0;
	    		var JRL="";
	    		for(var i=0;i<data2.length;i++){
	    			account+=data2[i].ZS;
	    			YJR+=data2[i].YJR;
	    		}
	    		JRL=(parseFloat(YJR/account)*100).toFixed(2)+"%"
	    		$("#GJR").html(account);
	    		$("#YJR").html(YJR);
	    		$("#JRL").html(JRL);
	    		loaddjywzl('zszmzzt',data2);
	    	}
		})
		$('#resultList').bootstrapTable({
	        url : url, //请求后台的URL（*）
	        method : 'get', //请求方式（*）
	        striped : true, //是否显示行间隔色
	        cache : false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
	        pagination : false, //是否显示分页（*）    
	        height:height(),
	        sortable : false, //是否启用排序
	        sortOrder : "asc", //排序方式
	        queryParams : {},//传递参数（*）
	        pageNumber : 1, //初始化加载第一页，默认第一页
	        pageSize : 4, //每页的记录行数（*）
	        pageList : [ 10, 25, 50, 100 ], //可供选择的每页的行数（*）
	        search : false, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
	        strictSearch : false,
	        undefinedText:"",
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
	        columns : [ {
	            field : 'xh',
	            title : '序号',
	            width:'10%',
	            formatter: function (value, row, index) {
                	return index+1;}
	        }, {
	            field : 'XZQMC',
	            title : '区域',
	            width:'10%'
	        }, {
	            field : 'ZS',
	            title : '县区数量',
	            width:'20%'
	        }, {
	            field : 'YJR',
	            title : '已接入县区',
	            width:'20%'
	        }, {
	            field : 'DJR',
	            title : '待接入县区',
	            width:'20%'
	        },
	        {
	            field : 'JRL',
	            title : '接入率',
	            width:'20%'
	        } ]
	    });
		$("#resultList").bootstrapTable('refresh',{'url':url});
}	


function loaddjywzl(id,data){
    var x=[];
    var zs=[];
    var zm=[];
    for(var i=0;i<data.length;i++){
        x.push(data[i].XZQMC);
        zs.push(data[i].YJR);
        zm.push(data[i].DJR);
    }

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid:{
            x:40,
            y:30,
            x2:20,
            y2:20
        },
        legend: {
            show:false,
            top:0,
            right:20,
            data:['已接入', '待接入']
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
                name:'已接入',
                type:'bar',
                stack: '总量',
                label:{
                    normal:{
                        show:true,
                        position:'insideTop',
                        formatter:function(params){          	
                        	if(params.value===0){
                        		return '';
                        		}
                        	else {
                        		return params.value;
                        	}
                        },
                        textStyle:{color:'#fff',
                        fontSize:12}
                    }
                },
                itemStyle : { normal: { color:'#38fd03',
                	barBorderRadius: [0, 0, 5, 5]
                    }},
                barWidth:30,
                data:zs
            },
            {
                name:'待接入',
                type:'bar',
                stack: '总量',

                itemStyle : { normal: { color:'#5db7e7',
                    barBorderRadius:[5, 5, 0, 0],
                    label : {show: true, 
                    	formatter:function(params){          	
                        	if(params.value===0){
                        		return '';
                        		}
                        	else {
                        		return params.value;
                        	}
                        },
                    	position: 'insideTop'}}},
                data:zm
            }
        ]
    };


    var myChart = echarts.init(document.getElementById(id));
    myChart.setOption(option);



}

