/**
 * Created by Administrator on 2016/10/8.
 */
$(function(){
    var data=[{name:'广州',value:34},{name:'深圳',value:58},{name:'珠三角东',value:43},{name:'珠三角西',value:43},
        {name:'鄂东',value:43},{name:'鄂西',value:43},{name:'鄂北',value:43}];
    //饼图加载
    ajaxqingqiu(44,$("#reservation").val().substring(13,20),$("#reservation").val().substring(0,7));
    var data61=[{value:8058.97,name:'证书'},{value:22650.4,name:'证明'},{value:62.56,name:'其他'}];
    //alert(JSON.stringify(data61));
    //loaddjywzl('djywzl',data61);
//    $(".djywp2").html(NumString(data61[0].value));
//    $(".djywp4").html(NumString(data61[1].value));
//    $(".djywp6").html(NumString(data61[2].value));
    //初始化省市菜单
    //初始化table
    var urltop10='/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForJgXnDjywtTop10';
    $.ajax({
		url:urltop10,
		type:'get',
		dataType:'json',
		success:function(result){
			//alert(JSON.stringify(result));
			initPie('pie2-echart',result);
		}
	})
    initTables('table1','data.json'); 
    //tab标签切换功能
    $('#Tab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    initAreaData(provinceChange,timeChange);
    $.ajax({
		url:"../../../config.json",
		type:'get',
		dataType:'json',
		success:function(result){
			$("#ifrmMap").attr("src",result.map);	
		}
	})
});
function ajaxqingqiu(xzqdm,endtime,starttime){
	var url='/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForJgXnDjywEchart&queryMap[endtime]=';
		url+=endtime;
		url+='&queryMap[starttime]='+starttime;
		url+='&queryMap[xzqdm]='+xzqdm;	
		$.ajax({url:url,
	    	type:"get",
	    	dataType:"json",
	    	success:function(data2){
	    		//alert(JSON.stringify(data2));
	    		var datafz=data2[0];   		
	    		var data60=[{value:'',name:''},{value:'',name:''},{value:'',name:''}];
	    		for(var i in datafz)
	    			{   		
	    			if(i=='QT')
	    				{
	    					data60[2].name='其他';
	    					data60[2].value=datafz[i];
	    					$(".djywp6").html(NumString(data60[2].value));
	    				}
	    			else if(i=='ZS')
						{
							data60[0].name='证书';
							data60[0].value=datafz[i];
							$(".djywp2").html(NumString(data60[0].value));
						}   			
		    		else if(i=='ZM')
						{
							data60[1].name='证明';
							data60[1].value=datafz[i];
							$(".djywp4").html(NumString(data60[1].value));
						}
					}
	    		//alert(JSON.stringify(data60));
	    		loaddjywzl('djywzl',data60);   	  		 
	    },
	    //error: function(data2) {alert(JSON.stringify(data2))}
	    })
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
var data = [/*[X轴,Y轴,气泡大小,数据,数据]*/
            [[0, 80, 482313, '首次登记', '首次登记', '#23BECA']], [[20, 25, 542571, '转移登记', '转移登记', '#58BFA7']], [[30, 95, 298971, '变更登记', '变更登记', '#91C482']],
            [[40, 0, 246442, '查封登记', '查封登记', '#FFC637']], [[50, 50, 317949, '注销登记', '注销登记', '#C8C55B']], [[65, 90, 311650, '更正登记', '更正登记', '#EF6149']],
            [[80, 30, 21054, '异议登记', '异议登记', '#F37B46']], [[90, 80, 315661, '预告登记', '预告登记', '#FBAE3C']], [[100, 10, 324054, '其他登记', '其他登记', '#F79441']]
        ];
function getData() {
    var str = data, resultA = [];
    for (var i = 0; i < str.length; i++){
        resultA.push({
            name : str[i][0][3],
            value : str[i][0][2],
        })
    }
    return resultA;
}
function getColor() {
    var str = data, resultA = [];
    for (var i = 0; i < str.length; i++){
        resultA.push(
            str[i][0][5]
        )
    }
    return resultA;
}
function initPie(id,data){
	var x=[];
	var y=[];
	for(var i in data)
		{
			x.unshift(data[i].ZL);
			y.unshift(data[i].XZQMC);
			
		}
	option = {
		    title: {
		        text: 'Top10',
		        textStyle:{
		        	fontSize:18,
		        	fontWeight:100
		        },
				left:'2%',
				top:'5%'
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		        show:false
		    },
		    grid: {
		        left: '3%',
		        right: '9%',
		        bottom: '1%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'value',
		        axisLine: {
		        	show: false
		        },
		        axisTick: {
		        	show: false
		        },
		        axisLabel: {
		        	show: false
		        },
		        splitLine: {
		        	show: false
		        },
		        boundaryGap: [0, 0.01]
		    },
		    yAxis: {
		        type: 'category',
		        axisLine: {
		        	show: false
		        },
		        axisTick: {
		        	show: false
		        },
		        axisLabel: {
		        	show: true
		        },
		        data: y
		    },
		    series: [
		        {
		            name: '登记业务总量',
		            type: 'bar',
		            barWidth:15,
		            label: {
		            	normal: {
		            	show: true,	           
		            	position: 'right',
		            	textStyle: {
		            		color: '#000'
		            	}
		            	}
		            },
		            itemStyle:{
		            	normal:{
		            		color:'#4acbee'
		            	}
		            },
		            barGap:'20%',
		            data:x
		        }
		    ]
		};
	    var myChart = echarts.init(document.getElementById(id));
	    // 使用刚指定的配置项和数据显示图表	    console.info(myChart);
	    myChart.setOption(option);

	
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
    summ=NumString(sum);
    option = {
        title:{
            show:true,
            text:'登记业务总量',
            textAlign : 'center',
            x : '48%',
            y : '36%',
            textStyle : {
                color : '#000',
                fontSize : 12,
                fontWeight :100         
            },
            subtext:summ,
            subtextStyle : {
                color : '#000',
                fontSize : 17,
                fontWeight :600
            }
        },
        legend:{
            show:false

        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}：{c}（个） ({d}%)",
            position: 'right'
        },
        series: [

            {
                name:'出让',
                type:'pie',
                clockwise:false,
                hoverAnimation:false,
                color:['#efde50','#6ed9a0','#4acbee'],
                radius: ['55%', '82%'],
                center:['50%','50%'],
                avoidLabelOverlap: false,
                startAngle:310,
                itemStyle:{
                    normal:{
                        borderColor: '#fff',
                        borderWidth:2
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:data
            }
        ]
        };
        var myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option);


}

function NumString(num)
{
	num=parseInt(num);
	 return (num.toFixed(0) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}