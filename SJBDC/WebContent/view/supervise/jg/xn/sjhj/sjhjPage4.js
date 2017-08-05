/**
 * Created by Administrator on 2016/10/8.
 */
$(function(){
    var data=[{name:'广州',value:34},{name:'深圳',value:58},{name:'珠三角东',value:43},{name:'珠三角西',value:43},
        {name:'鄂东',value:43},{name:'鄂西',value:43},{name:'鄂北',value:43}];

    //饼图加载
    var data61=[{yf:'1月',zssl:5,zmsl:6},{yf:'2月',zssl:11,zmsl:6},{yf:'3月',zssl:5,zmsl:10},
        {yf:'4月',zssl:5,zmsl:6},{yf:'5月',zssl:9,zmsl:6},{yf:'6月',zssl:5,zmsl:6},
        {yf:'7月',zssl:10,zmsl:6},{yf:'8月',zssl:5,zmsl:6},{yf:'9月',zssl:5,zmsl:6},
        {yf:'10月',zssl:5,zmsl:8},{yf:'11月',zssl:5,zmsl:6},{yf:'12月',zssl:5,zmsl:9}
    ];
    
    ajaxqingqiu(4401,'2010-01','2020-10');
    //初始化省市菜单
    initAreaData(provinceChange); 
    //地区选择下拉选
    //tab标签切换功能
    $.ajax({
		url:"../../../config.json",
		type:'get',
		dataType:'json',
		success:function(result){
			$("#ifrmMap").attr("src",result.map);
			
		}
	})
    $('#Tab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    
})
function provinceChange(){
	//省市下拉选改变事件
	var xzqdm=$(".area-select").data("xzqdm"); 
	var time0=$('#reservation').val(); 
	//alert(xzqdm);
	if(time0==''){
		ajaxqingqiu(xzqdm,'2020-09','2010-03')
	}
	else{
		ajaxqingqiu(xzqdm,time0.substring(13,20),time0.substring(0,7));
	} 	
}
function timeChange(start,end){
	var xzqdm=$(".area-select").data("xzqdm");
	ajaxqingqiu(xzqdm,end,start);
};
function height(){
	var height=$(".colborder1").height();
	height=height*0.88;
	return height;	
}
function initTables(id,url){
    $('.'+id).bootstrapTable({
        url: url,
        //请求后台的URL（*）method: 'get',
        //请求方式（*）
        striped: true,
        //是否显示行间隔色
        //cache: true,
        //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,
        //是否显示分页（*）
        undefinedText:"",
        sortable: false,
        //是否启用排序sortOrder: "asc",
        //排序方式queryParams: {

        //传递参数（*）pageNumber: 1,
        //初始化加载第一页，默认第一页
        pageSize: 4,
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
                    width: '20%',
                    align:'center'
                },
                {
                    field: 'qy',
                    title: '区域',
                    width: '20%',
                    align:'center'
                },
                {
                    field: 'bfxz',
                    title: '颁发新证',
                    width: '20%',
                    align:'center'
                },
                {
                    field: 'cksz',
                    title: '窗口设置',
                    width: '20%',
                    align:'center'
                },
                {
                    field: 'ryhz',
                    title: '人员划转',
                    width: '20%',
                    align:'center'
                },
                {
                    field: 'zlyj',
                    title: '资料移交',
                    width: '20%',
                    align:'center'
                },
                {
                    field: 'sjzh',
                    title: '数据整合',
                    width: '20%',
                    align:'center'
                },
                {
                    field: 'lczz',
                    title: '流程再造',
                    width: '20%',
                    align:'center'
                },
                {
                    field: 'xtsj',
                    title: '系统升级',
                    width: '20%',
                    align:'center'
                },
                {
                    field: 'xtjr',
                    title: '系统接入',
                    width: '20%',
                    align:'center'
                },

            ]
    });
}
function ajaxqingqiu(xzqdm,start,end){
	var url2='/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForJgXnSjhjEchart3';		
	var url='/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForJgXnSjhjEchart2';
	var dates = new Date();
    var months = dates.getMonth()+1;
    var months2;
    if(months>=6)
    	{
    		months2=months-5;
    	}
    else{
    	months2=month+7;
    }
    var years = dates.getFullYear();
    url2+='&queryMap[qxdm]='+xzqdm;	
    url2+='&queryMap[endtime]='+years+'-'+months;
	url2+='&queryMap[starttime]='+years+'-'+months2;
	url+='&queryMap[endtime]='+end+'&queryMap[starttime]='+start;
	url+='&queryMap[qxdm]='+xzqdm;	
		$.ajax({url:url2,
	    	type:"get",
	    	dataType:"json",
	    	success:function(data2){
	    		//alert(JSON.stringify(data2));
	    		loadsjhj4_2('sjhj4_2',data2);
	    	}
		})
		$.ajax({url:url,
	    	type:"get",
	    	dataType:"json",
	    	success:function(data2){
	    		//alert(JSON.stringify(data2));
	    		var sum=0;
	    		for(var i in data2){
	    			sum+=data2[i].SJHJ;
	    		}
	    		sum=NumString(sum);
	    		$('.maptem').html(sum);	    	
	    	}
		})
		$("#resultList").empty();
		$('#resultList').bootstrapTable({
	        url : url, //请求后台的URL（*）
	        method : 'get', //请求方式（*）
	        striped : true, //是否显示行间隔色
	        cache : false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
	        pagination : false, //是否显示分页（*）
	        paginationLoop:true,
	        height:height(),
	        sidePagination:"clint",
	        showPaginationSwitch:false,
	        paginationPreText:'‹',
	        sortable : false, //是否启用排序
	        sortOrder : "asc", //排序方式
	        queryParams : {},//传递参数（*）
	        pageNumber : 1, //初始化加载第一页，默认第一页
	        pageSize : 4, //每页的记录行数（*）
	         //可供选择的每页的行数（*）
	        search : false, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
	        strictSearch : false,
	        showColumns : false, //是否显示所有的列
	        showRefresh : false, //是否显示刷新按钮
	        minimumCountColumns : 2, //最少允许的列数
	        clickToSelect : false, //是否启用点击选中行
	        uniqueId : "ID", //每一行的唯一标识，一般为主键列
	        showToggle : false, //是否显示详细视图和列表视图的切换按钮
	        cardView : false, //是否显示详细视图
	        detailView : false, //是否显示父子表
	        showFooter:false,
	        paginationHAlign:'right',
	        border:"0",
	        columns : [ {
	            field : 'XZQMC',
	            title : '地市',
	            width : '40%',
	            height:5
	        }, {
	            field : 'SJHJ',
	            title : '汇交总量',
	            width : '60%',
	            height:5
	        } ]
	    });
		$("#resultList").bootstrapTable('refresh',{'url':url});
}
function loadsjhj4_2(id,data){
    var x=[];
    var t;
    var zs=[];
    var zm=[];
    var size=data.length;
    for(var i in data){ 	 
        x.push(data[i].SJ);    
    }
    for(k=0;k<(size-1);k++){
    	t=x[k];
		for(j=k+1;j<size;j++)
			{
				if((Date.parse(x[k]) - Date.parse(x[j]))>0)
					{
						t=x[j];
						x[j]=x[k];
						x[k]=t;
					}
			}		
	}
    for(var i=0;i<size;i++)
    	{
    	 for(var k in data){
    		 if(data[k].SJ==x[i])
        	 {
    			 zs.push(data[k].SJHJDT);
    			 break;
        	 }
    	 }
    	}
    option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            show:false,
            right:20,
            data:['证书']
        },
        toolbox: {
        },
        grid: {
            x:25,
            y:20,
            x2:20,
            y2:20,
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : true,
                splitLine:{
                    show:true
                },
                axisLine:{
                    lineStyle:{
                        color:'#e1e1e1'
                    }
                },
                axisLabel:{
                    show:true,
                    formatter: function (value, index) {
                        // 格式化成月/日，只在第一个刻度显示年份
                        var date = new Date(value);
                        var texts = [(date.getMonth() + 1)];                
                        return  texts+'月';
                    },
                    textStyle:{
                        color:'#000'
                    }
                },
                axisTick:{
                    show:false
                },
                data :x
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{
                    show:true
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    show:true,
                    textStyle:{
                        color:'#000'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#e1e1e1'
                    }
                }
            }
        ],
        series : [
            {
                name:'证书',
                type:'line',
                stack: '总量',
                lineStyle:{
                    normal:{
                        color:'#47cbed'
                    }
                },
                itemStyle:{
                    normal:{
                        color:'#47cbed',
                        borderColor:'#47cbed'
                    }
                },
                areaStyle: {normal: {color:"#dffeec"}},
                data:zs
            }
        ]
    };
    var myChart = echarts.init(document.getElementById(id));
    myChart.setOption(option);
}
function NumString(data)
{
    var data1=parseInt(data%1000) ;
    var data12=parseInt(data1/100);
    var data13=parseInt((data1%100)/10);
    var data14=parseInt((data1%100)%10);
   var data11;
    var data2=parseInt(data/1000);
    var data4='';
    if(data2!=0)
    {
        data11=data12+''+data13+data14;
        data4=data2+',';
    }
    if(data2==0)
    {
        if(data12==0){
            if(data13==0)
            {
                data11=data14;
            }
            else
            {
                data11=data13+''+data14;
            }
        }
        else
        {
            data11=data12+''+data13+data14;
        }
    }
    var data3 =data4+data11;
    return data3;
}
