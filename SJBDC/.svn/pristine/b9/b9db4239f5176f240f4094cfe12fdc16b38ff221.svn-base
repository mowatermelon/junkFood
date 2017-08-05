/**
 * Created by Administrator on 2016/10/8.
 */
$(function(){
	 var filterPanel = new FilterPanel({
         "title": "废证汇总",//过渡面板中的标题名称
         "titleIcon": "titleIcon",//标题图片的icon图标，
         "target": ".filterDiv",//目标，代码生成在哪个块级里面
         "filterObj": "ALL",//生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期
         "opens":"right",
         "startDate":"2015-01-01",
         "endDate":"2016-10-01",
         "defalutCityID":getXzqdm(),
         initSuccess:function(){
        	loadData();
         },
         callback: function () {
        	loadData();
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
	var startDate=$('#startDate').val().substring(0,7);
		var endDate=$('#endDate').val().substring(0,7);
		var cityCode=$('#cityCodeValue').val()||44;
	    
		var tableUrl='/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForZsjgTable2&queryMap[qxdm]='+cityCode+'&queryMap[starttime]='+startDate+'&queryMap[endtime]='+endDate;
		initTables('resultList',tableUrl)
		ajaxqingqiu(cityCode,endDate,startDate);
		$("#resultList").bootstrapTable('refresh',{'url':tableUrl});
}

function ajaxqingqiu(xzqdm,endtime,starttime){
	var url='/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForZsjgEchartFzht&queryMap[qxdm]='+xzqdm+'&queryMap[starttime]='+starttime+'&queryMap[endtime]='+endtime;
		$.ajax({url:url,
	    	type:"get",
	    	dataType:"json",
	    	success:function(result){ 
	    		loadChart('zszmzzt',result);
	    }
	    //error: function(data2) {alert(JSON.stringify(data2))}
	    })
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
        pagination: true,
        //是否显示分页（*）

        sortable: false,
        //是否启用排序sortOrder: "asc",
        //排序方式queryParams: {

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
                    field: 'XZQMC',
                    title: '区域',
                    width: '15%',
                    align:'center'
                },
                {
                    field: 'SMC',
                    title: '证书类型',
                    width: '15%',
                    align:'center'
                },
                {
                    field: 'XMC',
                    title: '区县',
                    width: '15%',
                    align:'center'
                },
                {
                    field: 'ZSXLH',
                    title: '证书序列号',
                    width: '20%',
                    align:'center'
                },
                {
                    field: 'BSRQ',
                    title: '报送日期',
                    width: '20%',
                    align:'center',
                    formatter:function(value){
                        return _util.getDate(value).format("yyyy-MM-dd");
                    }
                },
                {
                    field: 'TP',
                    title: '图片',
                    width: '30%',
                    align:'center'
                }
            ]
    });
}

function loadChart(id,data){
    var x=[];
    var ZS=[];
    var ZM=[];
    for(var i=0; i<data.length;i++){
    	x.push(data[i].XZQMC);
        ZS.push(data[i].ZS);
        ZM.push(data[i].ZM);
    };
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
            y2:50
        },
        legend: {
            top:5,
            right:20,
            data:['证书', '证明']
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
                	show:true
                },
                data : x
            }
        ],
        series : [
                  {
                      name:'证书',
                      type:'bar',
                      barWidth: '30%',
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
                              color:'#3aa7f5',
                              //    new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                              //    offset: 0, color:'#fdc70a'  // 0% 处的颜色
                              //}, {
                              //    offset: 1, color:'#f5655f' // 100% 处的颜色
                              //}], false),
                              barBorderRadius:[0, 0, 0, 0 ]
                            
                          }
                      },

                      data:ZS
                  },
                  {
                      name:'证明',
                      type:'bar',
                      barWidth: '30%',
                      stack:'account',
                      label:{
                          normal:{
                              show:true,
                              position:'insideTop',
                              textStyle:{
                              	color:'#fff'
                              },
                              formatter:function(params){
                              	if(params.data==0){
                              		return '';
                              		}
                              	else {
                              		return params.data;
                              	}
                              },
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

                      data:ZM
                  }
        ]
    };


    var myChart = echarts.init(document.getElementById(id));
    myChart.setOption(option);



}

