/**
 * Created by Administrator on 2016/10/8.
 */
$(function(){
	initRightTab("zsjg",0);
	var obj=_util.parseUrl();
    //jiazaitable
	 var filterPanel = new FilterPanel({
         "title": "使用情况详情",//过渡面板中的标题名称
         "titleIcon": "titleIcon",//标题图片的icon图标，
         "target": ".filterDiv",//目标，代码生成在哪个块级里面
         "filterObj": "ALL",//生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期
         "dateFormat":"YYYY",
         "defalutCityID":obj&&obj.QXDM?obj.QXDM:"",
         initSuccess:function(){
        	 var time=$("#selectYear").val();
        		var cityCode=$('#cityCodeValue').val()||"";
        		var url='/SJBDC/commonController/queryList.do?queryId=JgXnZsjgQueryMapper.queryZSSY&queryMap[cityCode]='+cityCode+'&queryMap[year]='+time;
        		initTables('resultList',url);       	
         },
         callback: function () {
        	 var time=$("#selectYear").val();
        		var cityCode=$('#cityCodeValue').val()||"";
        		var url='/SJBDC/commonController/queryList.do?queryId=JgXnZsjgQueryMapper.queryZSSY&queryMap[cityCode]='+cityCode+'&queryMap[year]='+time;
        		$("#resultList").bootstrapTable('refresh',{'url':url});       		
         }
     });

     filterPanel.init();
   
	
});



    

  
function height(id){
		return $("#"+id).height()-20;
}

function initTables(id,url){
    $('#'+id).bootstrapTable({
        url: url,
        //请求后台的URL（*）method: 'get',
        //请求方式（*）
        striped: true,
        //是否显示行间隔色
        //cache: true,
        //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: false,
        //是否显示分页（*）
        undefinedText:"",
        sortable: false,
        //是否启用排序sortOrder: "asc",
        //排序方式queryParams: {
        height:height("qszstable"),
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
        showExport: true,                     //是否显示导出
        onLoadSuccess:function(result){
    		var JHYZZL=0;
    		var YJFZL=0;
    		var YSYSL=0;
    		for(var i=0;i<result.length;i++){
    				JHYZZL+=result[i].JHYZSL*1;
    				YJFZL+=result[i].JFSL*1;
    				YSYSL+=result[i].SYSL*1;
    			
    		};
    		$("#JHYZZS").html(JHYZZL);	    		
    		$("#YJFZL").html(YJFZL);
    		$("#YSYSL").html(YSYSL);
    		loadChart('zszmzzt',result);
        },
        exportDataType: "all",              //basic', 'all', 'selected'
        columns:
            [
                {
                    field: 'number',
                    title: '序号',
                    width: '5%',
                    align:'center',
                    formatter: function (value, row, index) {
                        return ++index
                    }
                },
                {
                    field: 'QXMC',
                    title: '区域',
                    width: '10%',
                    align:'center',
                    formatter : function(value, row, index) {   				
        				return '<a  data-name="qxmc" data-xzqmc="'+row.QXMC+'" onClick="find(this)">'+row.	QXMC+'</a>';
        			}
                },
                {
                    field: 'JHYZSL',
                    title: '计划印制数量',
                    width: '12%',
                    align:'center',
                    formatter : function(v) {
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
                    field: 'JFSL',
                    title: '已交付数量',
                    width: '12%',
                    align:'center',
                    formatter : function(v) {
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
                    field: 'SYSL',
                    title: '已使用数量',
                    width: '12%',
                    align:'center',
                    formatter : function(v) {
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
                    field: 'AVGSYSL',
                    title: '近一年每月平均使用量',
                    width: '20%',
                    align:'center',
                    formatter : function(v) {
        				if(v==''||v==null)
        					{
        						return 0;
        					}
        				else {
        					return parseInt(v);
        				}
        			}
                },
                {
                    field: 'et',
                    title: '预计剩余使用月数',
                    width: '30%',
                    align:'center',
                    formatter:function(value,row,index){
                    	if(row.AVGSYSL){
               		return parseInt((row.JFSL-row.SYSL)/row.AVGSYSL);}
                    	else {
                    		return 0;
                    	}
                       }
                }
            ]
    });
}

function loadChart(id,data){
    var x=[];
    var jhyssl=[];
    var sjjfsl=[];
    var sysl=[];
    var tem1;
    var temp2;
    var temp3;
    for(var i=0;i<data.length;i++){
        x.push(data[i].QXMC);
        tem1=data[i].JHYZSL?data[i].JHYZSL:0;
        temp2=data[i].JFSL?data[i].JFSL:0;
        temp3=data[i].SYSL?data[i].SYSL:0;       
        jhyssl.push(tem1);      
    	sjjfsl.push(temp2);   
    	sysl.push(temp3)          
    }
    option = {
    		legend:{
    			show:false,
    			right:'0',
    			top:"15",
    			data:['计划印刷数量','实际交付数量','使用数量']
    		},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid:{
            x:60,
            y:50,
            x2:0,
            y2:20
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
			    name:'使用数量',
			    type:'line',
			    data:sysl,
			    symbolSize:8,
			    lineStyle:{
			  	  normal:{
			  		  color:'#37a9fc'
			  	  }
			    },
			    itemStyle:{
			  	  normal:{
			  		  color:'#37a9fc'
			  	  }
			    },
			    symbol:'emptyCircle'
			},
                  {
                      name:'实际交付数量',
                      type:'bar',
                      barWidth: '30%',
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
                              color:'#fba859',
                              //    new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                              //    offset: 0, color:'#fdc70a'  // 0% 处的颜色
                              //}, {
                              //    offset: 1, color:'#f5655f' // 100% 处的颜色
                              //}], false),
                              barBorderRadius:[0, 0, 0, 0 ]
                            
                          }
                      },

                      data:sjjfsl
                  }, {
                      name:'计划印刷数量',
                      type:'bar',
                      barWidth: '30%',
                      label:{
                          normal:{
                              show:false,
                              formatter:function(param){
                               if(param.value==0){
                            		  return "" 
                            	  }
                            	  return param.value
                              },
                              position:'top',
                              textStyle:{
                                	color:'#000'
                                }
                          }
                      },
                      itemStyle : {
                          normal : {
                              color:'#91da57',
                              //    new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                              //    offset: 0, color:'#fdc70a'  // 0% 处的颜色
                              //}, {
                              //    offset: 1, color:'#f5655f' // 100% 处的颜色
                              //}], false),
                              
                              barBorderRadius:[5, 5, 0, 0 ],
                              opacity:0.8
                          }
                      },

                      data:jhyssl
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
		var url='/SJBDC/commonController/queryList.do?queryId=JgXnZsjgQueryMapper.queryZSSY&queryMap[cityCode]='+cityCode+'&queryMap[year]='+time;
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
 		var url='/SJBDC/commonController/queryList.do?queryId=JgXnZsjgQueryMapper.queryZSSY&queryMap[cityCode]='+cityCode+'&queryMap[year]='+time;
 		$("#resultList").bootstrapTable('refresh',{'url':url});   
		}
	}
}