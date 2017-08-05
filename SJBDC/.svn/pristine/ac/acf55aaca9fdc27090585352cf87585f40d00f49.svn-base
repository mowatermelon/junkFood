/**
 * Created by Administrator on 2016/10/8.
 */
$(function(){
	initRightTab("zsjg",2);
    //初始化地区选择和时间选择
	var obj = {};
    if (typeof window.parent.parent.getAttrObj === 'function') {
        obj = window.parent.parent.getAttrObj();
    }
	 var filterPanel = new FilterPanel({
		 "title": "印制企业绩效",//过渡面板中的标题名称
		 "titleIcon": "glyphicon-stats",//标题图片的icon图标，
		 "target": ".filterDiv",//目标，代码生成在哪个块级里面
		 "filterObj": "DATE",//生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期
		 "dateFormat":"YYYY",
		 "defalutCityID": obj ? obj.QXDM : "",
	     initSuccess:function(){
	    	 loadData()
	     },
	     callback: function () {
	    	 loadData() 
	     }
	 });

	 filterPanel.init();
	   
		
	});


	function loadData(){
		var time=$("#selectYear").val();
		 ajaxqingqiu(time);
		 var topUrl="/SJBDC/commonController/queryList.do?queryId=JgXnZsjgQueryMapper.queryYZQYZTQK&queryMap[year]="+time;	 
		 var bottomUrl="/SJBDC/commonController/queryList.do?queryId=JgXnZsjgQueryMapper.queryYZQYPCXX&queryMap[year]="+time;
		 initBottomTables('qyxx',bottomUrl);
		 initTopTables('qylz',topUrl);
		 $("#qylz").bootstrapTable('refresh',{'url':topUrl});
		 $("#qszstable").bootstrapTable('refresh',{'url':bottomUrl});		
	}

function ajaxqingqiu(time){
	var url='/SJBDC/commonController/queryList.do?queryId=JgXnZsjgQueryMapper.queryQYYZJX&queryMap[year]='+time;
		$.ajax({url:url,
	    	type:"get",
	    	dataType:"json",
	    	success:function(result){
	    		loadChart('qyjx',result);    		
	    },
	    error: function(result) {alert('数据错误')}
	    });
		
		
}

function initTopTables(id,url){
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
        sortable: false,
        height:getHeight('qylztable'),
        //是否启用排序sortOrder: "asc",
        //排序方式queryParams: {
        //传递参数（*）pageNumber: 1,
        //初始化加载第一页，默认第一页
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
        showExport: false,                     //是否显示导出
        exportDataType: "all",              //basic', 'all', 'selected'
        columns:
            [
                {
                    field: 'YZQY',
                    title: '印刷企业',
                    width: '25%',
                    align:'center'
                },
                {
                    field: 'JFSL',
                    title: '交付数量',
                    width: '10%',
                    align:'center',
                    	 formatter:function(value,row,index){
                          	return format(row.JFSL);
                           }
                },
                {
                    field: 'PCZL',
                    title: '总交付批次',
                    width: '5%',
                    align:'center'
                },
                {
                    field: 'YCZL',
                    title: '总延迟交付批次',
                    width: '10%',
                    align:'center'
                },
                {
                    field: 'YCJFTS',
                    title: '延迟时间',
                    width: '10%',
                    align:'center',
                    formatter:function(v){
                    	if(v){
                    	return v;
	                    } 	
	                    else{
	                    	return 0;
	                    }
                   }
                },
                {
                    field: 'LZZS',
                    title: '劣证数量',
                    width: '10%',
                    align:'center'
                },
               
                {
                    field: 'LZL',
                    title: '劣证率',
                    width: '10%',
                    align:'center',
                    formatter:function(value,row,index){
                    	if(row.JFSL!=0||row.JFSL!=""){                    		
                    		return parseFloat((row.LZZS/row.JFSL)*100).toFixed(2)+"%";
                    	}else {
                    		return ""
                    	}
                      }
                }
            ]
    });
}


function getHeight(id){
   	return $("#"+id).height()-50
}
function initBottomTables(id,url){
    $('#'+id).bootstrapTable({
        url: url,
        //请求后台的URL（*）method: 'get',
        //请求方式（*）
        striped: true,
        //是否显示行间隔色
        //cache: true,
        //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination:false,
        //是否显示分页（*）
        sortable: false,
        //是否启用排序sortOrder: "asc",
        //排序方式queryParams: {
        height:getHeight('qszstable'),
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
        exportDataType: "all",              //basic', 'all', 'selected'
        columns:
            [
                {
                    field: 'xh',
                    title: '序号',
                    width: '10%',
                    align:'center',
	            	formatter:function(value,row,index){
	                 	return index+1
	                 }
                },
                {
                    field: 'YZQY',
                    title: '企业名称',
                    width: '30%',
                    align:'center'
                },
                {
                    field: 'JFPC',
                    title: '交付批次',
                    width: '10%',
                    align:'center'
                },
                {
                    field: 'YCJFTS',
                    title: '延迟交付天数',
                    width: '10%',
                    align:'center'
                },
                {
                    field: 'YZZS',
                    title: '批次印刷数量',
                    width: '10% ',
                    align:'center',
                    	formatter:function(value,row,index){
                          	return format(row.YZZS);
                           }
                },
                {
                    field: 'LZSL',
                    title: '批次劣证数量',
                    width: '10%',
                    align:'center',
                    	formatter:function(value,row,index){
                          	return format(row.LZSL);
                           }
                },
                {
                    field: 'SJJFRQ',
                    title: '交付日期',
                    width: '30%',
                    align:'center',

                  
                }
            ]
    });
}

function height(){
	return $("#qszstable").height()-10;
}

function loadChart(id,data){
    var x=[];
    var YCDF=[];//延迟得分
    var FZDF=[]//废证得分
    for(var i=0;i<data.length;i++){
    	if(data[i].YZQY){    		
    		x.push(data[i].YZQY);
    	};
        YCDF.push(data[i].YCDF);
        FZDF.push(data[i].YZDF);
    }

    option = {
    		title:{
    			show:false,
    			top:20,
    			text:'印制企业绩效得分',
    				textStyle:{
    					fontWeight:0,
    					fontSize:16
    				}
    		},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid:{
            x:40,
            y:50,
            x2:20,
            y2:50
        },
        legend: {
            top:10,
            right:20,
            data:['延迟得分', '印制得分']
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
                },
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
                	formatter:function(val){
                		var str="";
                       for(var i=0;i<val.length+6;i+=6){
                    	   str+=val.substring(i,i+6)+"\n"
                       }
                       return str;
                    },
                },
                data : x
            }
        ],
        series : [
                  {
                      name:'延迟得分',
                      type:'bar',
                      barWidth: '20%',
                      stack:'account',
                      label:{
                          normal:{
                              show:true,
                              position:'insideTop',
                              formatter:function(param){
                                  if(param.value==0){
                               		  return "" 
                               	  }
                               	  return param.value
                                 },
                              textStyle:{
                              	color:'#fff'
                              }
                          }
                      },
                      itemStyle : {
                          normal : {
                              color:'#49e8d6',
                              
                            
                          }
                      },

                      data:YCDF
                  },
                  {
                      name:'印制得分',
                      type:'bar',
                      barWidth: '20%',
                      stack:'account',
                      label:{
                          normal:{
                              show:true,
                              formatter:function(param){
                                  if(param.value==0){
                               		  return "" 
                               	  }
                               	  return param.value
                                 },
                              position:'insideTop',
                              textStyle:{
                              	color:'#fff'
                              }
                          }
                      },
                      itemStyle : {
                          normal : {
                              color:'#75bcfe',
                             
                          }
                      },

                      data:FZDF
                  }
                  
        ]
    };


    var myChart = echarts.init(document.getElementById(id));
    myChart.setOption(option);



}

function DateFormat(date){
	var day = new Date(date);
    var Year = 0;
    var CurrentDate = "";
    Year= day.getFullYear();//支持IE和火狐浏览器.
    return Year;
}


function format (num) {
//    return (num.toFixed(0) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
	return num
}
