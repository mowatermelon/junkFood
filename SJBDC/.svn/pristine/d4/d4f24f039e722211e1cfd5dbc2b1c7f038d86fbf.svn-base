/**
 * Created by Administrator on 2016/10/8.
 */
var flag=0;
$(function(){
	initRightTab("zsjg",1);
	var obj = {};
    if (typeof window.parent.parent.getAttrObj === 'function') {
        obj = window.parent.parent.getAttrObj();
    }
 var filterPanel = new FilterPanel({
	 "title": "印制计划汇总",//过渡面板中的标题名称
	 "titleIcon": "glyphicon-stats",//标题图片的icon图标，
	 "target": ".filterDiv",//目标，代码生成在哪个块级里面
	 "filterObj": "ALL",//生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期
	 "dateFormat":"YYYY",
	 "defalutCityID": obj ? obj.QXDM : "",
     initSuccess:function(){
    	 loadData()
     },
     callback: function () {
    	 	var time=$("#selectYear").val();
    		var cityCode=$('#cityCodeValue').val()||"";
    		var url='/SJBDC/commonController/queryList.do?queryId=JgXnZsjgQueryMapper.queryYZJH&queryMap[cityCode]='+cityCode+'&queryMap[year]='+time;
    		$("#resultList").bootstrapTable('refresh',{'url':url});
     }
 });

 filterPanel.init();
   
	
});

function getXzqdm(){
	var xzqdm=0;
	if (typeof window.top.getAttrObj === 'function') {
         obj = window.top.getAttrObj();
         xzqdm=obj.qxdm;
     }
	if(xzqdm){
		return xzqdm;
	}
	xzqdm="";
	return xzqdm
}


function loadData(){
	var time=$("#selectYear").val();
	var cityCode=$('#cityCodeValue').val()||"";
	var url='/SJBDC/commonController/queryList.do?queryId=JgXnZsjgQueryMapper.queryYZJH&queryMap[cityCode]='+cityCode+'&queryMap[year]='+time;
	initTables('resultList',url);	
}		
function height(id){
	return $("#"+id).height()-10;
}

function initTables(id,url){
    $('#'+id).bootstrapTable({
        url: url,
        //请求后台的URL（*）method: 'get',
        //请求方式（*）
        method : 'get', //请求方式（*）
        striped: true,
        //是否显示行间隔色
        //cache: true,
        //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: false,
        //是否显示分页（*）
        height:height("qszstable"),
        sortable: false,
        //是否启用排序sortOrder: "asc",
        //排序方式queryParams: {
        undefinedText:"",
        //传递参数（*）pageNumber: 1,
        //初始化加载第一页，默认第一页
        pageSize: 6,
        //每页的记录行数（*）
        pageList:[10, 25, 50, 100],
        //可供选择的每页的行数（*）search: false,
        //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大strictSearch: false,
        showColumns: false,
        sidePagination: "client",
        //是否显示所有的列showRefresh: false,
        //是否显示刷新按钮minimumCountColumns: 2,
        //最少允许的列数clickToSelect: true,
        //是否启用点击选中行uniqueId: "ID",
        //每一行的唯一标识，一般为主键列showToggle: false,
        //是否显示详细视图和列表视图的切换按钮cardView: false,
        //是否显示详细视图detailView: false,
        //是否显示父子表       
        columns:
            [
				{
				    title: '序号',
				    align: 'center',
				    formatter: function (value, row, index) {
				        return ++index
				    }
				},
                {
                    field: 'QXMC',
                    title: '市县名称',
                    align:'center',
                    formatter : function(value, row, index) {   				
        				return '<a  data-name="qxmc" data-xzqmc="'+row.QXMC+'" onClick="find(this)">'+row.	QXMC+'</a>';
        			}
                },
                {
                    field: 'ZMJFYZSL',
                    title: '预定数量（证明）',
                    align:'center',
                    formatter:function(v){
                    	if(v==''||v==null)
                    		{
                    		return 0;
                    		}
                    	else {
                    		return v;
                    	}
                    }
                },
                {
                    field: 'ZSJFYZSL',
                    title: '预定数量（证书）',
                    align:'center',
                    formatter:function(v){
                    	if(v==''||v==null)
                    		{
                    		return 0;
                    		}
                    	else {
                    		return v;
                    	}
                    }
                },
                {
                    field: 'ZMJFSL',
                    title: '交付数量（证明）',
                    align:'center',
                    formatter:function(v){
                    	if(v==''||v==null)
                    		{
                    		return 0;
                    		}
                    	else {
                    		return v;
                    	}
                    }
                },
                {
                    field: 'ZSJFSL',
                    title: '交付数量（证书）',
                    align:'center',
                    formatter:function(v){
                    	if(v==''||v==null)
                    		{
                    		return 0;
                    		}
                    	else {
                    		return v;
                    	}
                    }
                },
                {
                    field: 'ZMLZSL',
                    title: '劣证数量（证明）',
                    align:'center',
                    formatter:function(v){
                    	if(v==''||v==null)
                    		{
                    		return 0;
                    		}
                    	else {
                    		return v;
                    	}
                    }
                },
                {
                    field: 'ZSLZSL',
                    title: '劣证数量（证书）',
                    align:'center',
                    formatter:function(v){
                    	if(v==''||v==null)
                    		{
                    		return 0;
                    		}
                    	else {
                    		return v;
                    	}
                    }
                }
                
               
            ],
            onLoadSuccess: function (data) {           	
                mergeCells(data);
                loadChart('zszmzzt',data);
            },
    });
}

function mergeCells(data) {
    var resultA = [];
    for (var i = 0; i < data.length; i++) {
        if (resultA.indexOf(data[i].XZQMC) == -1) {
            resultA.push(data[i].XZQMC);
        }
    }

    if (resultA && resultA.length) {
        for (var i = 0; i < resultA.length; i++) {
            merge(data, resultA[i])
        }
    }

}
function merge(data, XZQMC) {
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].XZQMC == XZQMC) {
            count++;
        }
    }
    $('#resultList').bootstrapTable('mergeCells', {index: flag, field: 'XZQMC', colspan: 0, rowspan: count});
    $('#resultList').bootstrapTable('mergeCells', {index: flag, field: 'number', colspan: 0, rowspan: count});
    flag += count;
}


function loadChart(id,data){
    var x=[];
    var ZSSL=[];
    var ZMSL=[];
    for(var i=0;i<data.length;i++){
        x.push(data[i].QXMC);
        ZSSL.push(data[i].ZSJFSL||0);
        ZMSL.push(data[i].ZMJFSL||0);

    }
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend:{
        	show:true,
        	data:['证书数量','证明数量']
        },
        grid:{
            x:60,
            y:50,
            x2:20,
            y2:50
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
                	show:true,
                	
                },
                data : x
            }
        ],
        series : [
                  {
                      name:'证书数量',
                      type:'bar',
                      barWidth: '30%',
                      stack:'account',
                      label:{
                          normal:{
                              show:false,
                              formatter:function(param){
                                  if(param.value==0){
                               		  return "" 
                               	  }
                               	  return param.value
                                 },
                              position:'insideTop',
                              textStyle:{
                              	color:'#000'
                              }
                          }
                      },
                      itemStyle : {
                          normal : {
                              color:'#3aa7f5',
                              //    new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                              //    offset: 0, color:'#fdc70a'  // 0% 处的颜色
                              //}, {
                              //    offset: 1, color:'#f5655f' // 100% 处的颜色
                              //}], false),
                              barBorderRadius:[0, 0, 0, 0 ]
                            
                          }
                      },

                      data:ZSSL
                  },
                  {
                      name:'证明数量',
                      type:'bar',
                      barWidth: '30%',
                      stack:'account',
                      label:{
                          normal:{
                              show:false,
                              formatter:function(param){
                                  if(param.value==0){
                               		  return "" 
                               	  }
                               	  return param.value
                                 },
                              position:'insideTop',
                              textStyle:{
                              	color:'#000'
                              }
                          }
                      },
                      itemStyle : {
                          normal : {
                              color:'#49d6a9',
                              //    new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                              //    offset: 0, color:'#fdc70a'  // 0% 处的颜色
                              //}, {
                              //    offset: 1, color:'#f5655f' // 100% 处的颜色
                              //}], false),
                              barBorderRadius:[0, 0, 0, 0 ]
                            
                          }
                      },

                      data:ZMSL
                  }
        ]
    };


    var myChart = echarts.init(document.getElementById(id));
    myChart.setOption(option);
    myChart.on('click', function (param) {
    	var qxdm0=citySetting.getCity(param.name);
    	$('#cityCodeValue').val(qxdm0.id);
    	$('#cityName').html(param.name);                  
        var time=$("#selectYear").val();
		var cityCode=$('#cityCodeValue').val()||"";
		var url='/SJBDC/commonController/queryList.do?queryId=JgXnZsjgQueryMapper.queryYZJH&queryMap[cityCode]='+cityCode+'&queryMap[year]='+time;
		$("#resultList").bootstrapTable('refresh',{'url':url}); 	
    })
}

function DateFormat(date){
	var day = new Date(date);
    var Year = 0;
    var CurrentDate = "";
    Year= day.getFullYear();//支持IE和火狐浏览器.
    return Year;
}
function find(that){
	if($(that).data("name")=='qxmc')
	{		
		var xzqmc0=$(that).data("xzqmc");   
		if(citySetting.getCity(xzqmc0)){
			var xzqdm0=citySetting.getCity(xzqmc0).id; 			
    	$('#cityCodeValue').val(xzqdm0);
    	$('#cityName').html(xzqmc0);              
    	var cityCode=xzqdm0;
    	 var time=$("#selectYear").val();
    	 var url='/SJBDC/commonController/queryList.do?queryId=JgXnZsjgQueryMapper.queryYZJH&queryMap[cityCode]='+cityCode+'&queryMap[year]='+time;
 		$("#resultList").bootstrapTable('refresh',{'url':url}); 	
		}
	}
}
