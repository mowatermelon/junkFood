/**
 * Created by Administrator on 2016/10/8.
 */
$(function(){
//    var data=[{name:'广州',value:34},{name:'深圳',value:58},{name:'珠三角东',value:43},{name:'珠三角西',value:43},
//        {name:'鄂东',value:43},{name:'鄂西',value:43},{name:'鄂北',value:43}];
    ajaxqingqiu(44,$("#reservation").val().substring(13,20),$("#reservation").val().substring(0,7));//加载数据
    //柱状图加载
//    var data61=[{qy:'广州市',zssl:5,zmsl:6},{qy:'广州市',zssl:5,zmsl:6},{qy:'广州市',zssl:5,zmsl:6},
//        {qy:'广州市',zssl:5,zmsl:6},{qy:'广州市',zssl:5,zmsl:6},{qy:'广州市',zssl:5,zmsl:6},
//        {qy:'广州市',zssl:5,zmsl:6},{qy:'广州市',zssl:5,zmsl:6},{qy:'广州市',zssl:5,zmsl:6},
//        {qy:'广州市',zssl:5,zmsl:6},{qy:'广州市',zssl:5,zmsl:6},{qy:'广州市',zssl:5,zmsl:6}
//    ];
//    loaddjywzl('zszmzzt',data61);
    //初始化省市菜单
    //初始化table
    //initTables('table1','data.json');
    //jiazaitable
    //tab标签切换功能
    $('#Tab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    //初始化地区选择和时间选择
    initAreaData(provinceChange,timeChange);
});
function height(){
	return $(".table1").height()-40;	
}	
function ajaxqingqiu(xzqdm,endtime,starttime){
	var url='/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForJgXnDjywEcharZHU&queryMap[endtime]=';
		url+=endtime;
		url+='&queryMap[starttime]='+starttime;
		url+='&queryMap[xzqdm]='+xzqdm;	
		$.ajax({url:url,
	    	type:"get",
	    	dataType:"json",
	    	success:function(data2){
	    		//alert(JSON.stringify(data2));
	    		loaddjywzl('zszmzzt',data2);
	    },
	    //error: function(data2) {alert('数据错误')}
	    });
		$("#resultList").empty();
	    $('#resultList').bootstrapTable({
            url : url, //请求后台的URL（*）
            method : 'get', //请求方式（*）
            type:"get",
        	dataType:"json",
        	height:height(),
            striped : true, //是否显示行间隔色
            cache : false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination : false, //是否显示分页（*）
            sortable : false, //是否启用排序
            sortOrder : "asc", //排序方式
            queryParams : {},//传递参数（*）
            pageNumber : 1, //初始化加载第一页，默认第一页
            paginationDetailHAlign:'left',
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
                width : 50,
                formatter: function (value, row, index) {
                	return index+1;}
            }, {
                field : 'XZQMC',
                title : '区域',
                width : 100
            }, {
                field : 'ZS',
                title : '证书数量',
                width : 130
            }, {
                field : 'ZM',
                title : '证明总量',
                width : 130
            }, {
                field : 'ZFZL',
                title : '总发证量',
                width : 140
            } ]
        });
	    $("#resultList").bootstrapTable('refresh',{'url':url})
}
function provinceChange(){
	//省市下拉选改变事件
	var xzqdm=$(".area-select").data("xzqdm");
	var time0=$('#reservation').val();    	
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
    
function tabelywdj(url1,data1){
    
};


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
            x:40,
            y:30,
            x2:20,
            y2:50
        },
        legend: {
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
                	show:true,
                	/*formatter:function(val){
                        return val.split("").join("\n");
                    },*/
                },
                data : x
            }
        ],
        series : [
            {
                name:'证书',
                type:'bar',
                stack: '总量',
                barWidth:30,
                barGap:'10%',
                itemStyle : { normal: { color:'#4acbee',
                	barBorderRadius: [0, 0, 5, 5],
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
                data:zs
            },
            {
                name:'证明',
                type:'bar',
                stack: '总量',
                barWidth:30,
                itemStyle : { normal: { color:'#6ed9a0',
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

