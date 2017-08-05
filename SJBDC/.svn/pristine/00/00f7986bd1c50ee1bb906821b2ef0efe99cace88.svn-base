/**
 * Created by Administrator on 2016/10/8.
 */
$(function(){
    var data=[{name:'广州',value:34},{name:'深圳',value:58},{name:'珠三角东',value:43},{name:'珠三角西',value:43},
        {name:'鄂东',value:43},{name:'鄂西',value:43},{name:'鄂北',value:43}];

    //饼图加载
    var data61=[{value:8058.97,name:'证书'},{value:22650.4,name:'证明'},{value:62.56,name:'其他'}];
    //初始化省市菜单
    initAreaData(provinceChange,timeChange);
    
    //初始化table
    
    $('#Tab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    ajaxqingqiu(44);
    $.ajax({
		url:"../../../config.json",
		type:'get',
		dataType:'json',
		success:function(result){
			$("#ifrmMap").attr("src",result.map);
			
		}
	})

    //tab标签切换功能
    $('#Tab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');

    });

});
function provinceChange(){
	//省市下拉选改变事件
	var xzqdm=$(".area-select").data("xzqdm");
	ajaxqingqiu(xzqdm); 
}
function timeChange(){
	
}
function ajaxqingqiu(xzqdm){
	var url='/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForJgXnSjhjEchartJSBWSJ';		
		url+='&queryMap[qxdm]='+xzqdm;	
		$.ajax({url:url,
	    	type:"get",
	    	dataType:"json",
	    	success:function(data2){
	    		var data=[{value: 90, name: '接入率'}];
	    		data[0].value=(parseFloat(data2[0].YJR/data2[0].XJR)*100).toFixed(0); 
	    		$('.maptem').html(data[0].value+'%');
	    		loaddjywzl('sjhj1',data);
	    		$('.sjhjp2_1').html(data2[0].XJR);
	    		$('.sjhjp2_2').html(data2[0].YJR);
	    		$('.sjhjp2_3').html(data2[0].BYJR);
	    	}
		})
		var url2='/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForJgXnSjhjEchartJSCLSJ';		
		url2+='&queryMap[qxdm]='+xzqdm;	
		$.ajax({url:url2,
	    	type:"get",
	    	dataType:"json",
	    	success:function(data2){
	    		var data=[{value: 90, name: '接入率'}];
	    		data[0].value=(parseFloat(data2[0].YJR/data2[0].XJR)*100).toFixed(0);
	    		loaddjywzl('sjhj2',data);
	    		$('.sjhjp2_4').html(data2[0].XJR);
	    		$('.sjhjp2_5').html(data2[0].YJR);
	    		$('.sjhjp2_6').html(data2[0].BYJR);
	    	}
		})
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


function loaddjywzl(id,data){
    xAixs=[];
    sum=0;
    var summ;
    data=data.reverse();
    for (var i in data){
        xAixs.push(data[i].name);
        sum+=data[i].value;
    }
    sum=parseFloat(sum).toFixed(0);
    option = {
    		 tooltip : {
    	            trigger: 'axis',
    	            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    	                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    	            }
    	        },
        toolbox: {
            show : true
        },
        series : [
            {
                name:'业务指标',
                type:'gauge',
                radius:'95%',
                splitLine: {           // 分隔线
                    show: false,        // 默认显示，属性show控制显示与否
                    length :30,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer : {
                    length:'70%',
                    width : 4
                },
                axisLabel: {
                    show:false,// 坐标轴文本标签，详见axis.axisLabel
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: 'auto'
                    }
                },
                title : {
                    show : true,
                          // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: '#979797',
                        fontWeight: 500,
                        fontSize:14
                    }
                },
                axisTick: {
                    show:false,// 坐标轴小标记
                    splitNumber: 10,   // 每份split细分多少段
                    length :12,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[1,new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0, color: '#eed119' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#4fda38' // 100% 处的颜色
                        }], false) ]],
                        width: 10
                    }
                },
                detail : {
                    formatter:'{value}%',
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: '#979797',
                        fontWeight: 600,
                        fontSize:17
                    }
                },
                data:data
            }
        ]
    };
        var myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option);


}
