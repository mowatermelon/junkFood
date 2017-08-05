/**
 * Created by Administrator on 2016/10/8.
 */
$(function(){
    var data=[{name:'广州',value:34},{name:'深圳',value:58},{name:'珠三角东',value:43},{name:'珠三角西',value:43},
        {name:'鄂东',value:43},{name:'鄂西',value:43},{name:'鄂北',value:43}];

    //柱状图加载
    var data61=[{qy:'广州市',zssl:2,zmsl:6},{qy:'深圳市',zssl:5,zmsl:2},{qy:'佛山市',zssl:5,zmsl:3},
                {qy:'肇庆市',zssl:5,zmsl:4},{qy:'汕头市',zssl:6,zmsl:7},{qy:'潮州市',zssl:2,zmsl:3},
                {qy:'揭阳市',zssl:3,zmsl:6},{qy:'茂名市',zssl:4,zmsl:2},{qy:'阳江市',zssl:2,zmsl:5},
                {qy:'云浮市',zssl:2,zmsl:1},{qy:'韶关市',zssl:8,zmsl:5},{qy:'梅州市',zssl:4,zmsl:3}
            ];
    //初始化省市菜单
    ajaxqingqiu(44);
    //初始化省市菜单
    $('#Tab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    //初始化地区选择和时间选择
    initAreaData(provinceChange,timeChange); 
    //地区选择下拉选
    //tab标签切换功能   
});
function provinceChange(){
	//省市下拉选改变事件
	var xzqdm=$(".area-select").data("xzqdm");   	
	//alert(xzqdm);
	ajaxqingqiu(xzqdm); 
}
function height(){
	return $(".table1").height()-40;	
}
function timeChange(start,end){
};
function ajaxqingqiu(xzqdm){
	var url='/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForJgXnSjhjTable2';		
		url+='&queryMap[qxdm]='+xzqdm;	
		$.ajax({url:url,
	    	type:"get",
	    	dataType:"json",
	    	success:function(data2){
	    		loaddjywzl('zszmzzt',data2);
	    	}
		})
		$("#resultList").empty();
		$('#resultList').bootstrapTable({
	        url : url, //请求后台的URL（*）
	        method : 'get', //请求方式（*）
	        striped : true, //是否显示行间隔色
	        cache : false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
	        pagination : false, //是否显示分页（*）     
	        height:height(),
	        undefinedText:"",
	        sortable : false, //是否启用排序
	        sortOrder : "asc", //排序方式
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
	        columns : [ {
	            field : 'xh',
	            title : '序号',
	            width:'10%',
	            formatter: function (value, row, index) {
                	return index+1;}
	        }, {
	            field : 'XZQMC',
	            title : '区域',
	            width:'20%'
	        }, {
	            field : 'ZS',
	            title : '证书数量',
	            width:'20%'
	        }, {
	            field : 'ZM',
	            title : '证书总量',
	            width:'20%'
	        }, {
	            field : 'ZFZL',
	            title : '总发业务量',
	            width:'20%'
	        }
	        ]
	    });
		$("#resultList").bootstrapTable('refresh',{'url':url});
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

function loaddjywzl(id,data){
    var x=[];
    var zs=[];
    var zm=[];
    for(var i in data){
        x.push(data[i].XZQMC);
        zs.push(data[i].ZS);
        zm.push(data[i].ZM);
    }

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid:{
            x:50,
            y:30,
            x2:20,
            y2:50
        },
        legend: {
            show:false,
            top:0,
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
                name:'证书',
                type:'bar',
                stack: '总量',
                label:{
                    normal:{
                        show:true,
                        position:'insideTop',
                        formatter:function(params){
                        	if(params.data==0){
                        		return '';
                        		}
                        	else {
                        		return params.data;
                        	}
                        },
                        textStyle:{color:'#fff',
                       }
                    }
                },
                itemStyle : { normal: { color:'#18bde3',
                	barBorderRadius: [0, 0, 5, 5]
                    }},
                barWidth:30,
                data:zs
            },
            {
                name:'证明',
                type:'bar',
                stack: '总量',

                itemStyle : { normal: { color:'#61d7f8',
                	barBorderRadius: [5, 5, 0, 0],
                    label : {show: true, 
                    	formatter:function(params){          	
                        	if(params.data==0){
                        		return '';
                        		}
                        	else {
                        		return params.data;
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

