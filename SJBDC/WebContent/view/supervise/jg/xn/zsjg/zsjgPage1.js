/**
 * Created by Administrator on 2016/10/8.
 */
$(function(){
	 var filterPanel = new FilterPanel({
         "title": "总体情况",//过渡面板中的标题名称
         "titleIcon": "titleIcon",//标题图片的icon图标，
         "target": ".filterDiv",//目标，代码生成在哪个块级里面
         "filterObj": "CITY",//生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期
         "opens":"right",
         "startDate":"2015-01-01",
         "endDate":"2016-10-01",
         "defalutCityID":getXzqdm(),
         initSuccess: function(){
        	 provinceChange();
         },
         callback: function () {
        	 provinceChange();
         }
     });

     filterPanel.init();
   
	
});

		function loadData(){
			var startDate=$('#startDate').val();
				var endDate=$('#endDate').val();
				var cityCode=$('#cityCodeValue').val()||44;
				ajaxqingqiu(cityCode,endDate,startDate);
				
		}

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

function provinceChange(xzqdm){
		qxdm=$('#cityCodeValue').val()||44;//行政区代码
	 	var day = new Date();
	    var Year = 0;
	    var Month = 0;
	    var CurrentDate = "";
	    Year= day.getFullYear();//支持IE和火狐浏览器.
	    Month= day.getMonth()+1;
	    CurrentDate += Year;
	    if (Month >= 10 ){
	     CurrentDate +="-"+ Month;
	    }
	    else{
	     CurrentDate += "-0" + Month;
	    }
	    var zsUrl="/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForJgXnZsjgEchart1Zssyqk&queryMap[qxdm]="+qxdm+"&queryMap[starttime]="+CurrentDate;
	    var zmUrl="/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForJgXnZsjgEchart2Zmsyqk&queryMap[qxdm]="+qxdm+"&queryMap[starttime]="+CurrentDate;
	    $.ajax({
	    	url:zsUrl,
	    	type:"get",
	    	dataType:"json",
	    	success:function(result){
	    		$("#ZSGYZZS").html(format(result[0].GYZZS));
	    		$("#ZSYSY").html(format(result[0].YSY));
	    		$("#ZSSYL").html(format(result[0].YSY));
	    		$("#ZSBYSY").html(format(result[0].BYSY));
	    		var data=[{name:"",value:""}];
	    		data[0].name="接入率";
	    		if(result[0].GYZZS!=0){
	    			data[0].value=parseInt((result[0].YSY/result[0].GYZZS)*100);
	    		}else{
	    			data[0].value=0;
	    		}
	    		 loadGauge('zsqk',data);
	    	
	    },
	    error: function(data2) {alert('数据错误')}
	    });
	    
	    $.ajax({
	    	url:zsUrl,
	    	type:"get",
	    	dataType:"json",
	    	success:function(result){
	    		$("#ZMGYZZS").html(format(result[0].GYZZS));
	    		$("#ZMYSY").html(format(result[0].YSY));
	    		$("#ZMSYL").html(format(result[0].YSY));
	    		$("#ZMBYSY").html(format(result[0].BYSY));
	    		var data=[{name:"",value:""}];
	    		data[0].name="接入率";
	    		if(result[0].GYZZS!=0){
	    			data[0].value=parseInt((result[0].YSY/result[0].GYZZS)*100);
	    		}else{
	    			data[0].value=0;
	    		}
	    		 loadGauge('zmqk',data);
	    	
	    },
	    error: function(data2) {alert('数据错误')}
	    });
	
}


function loadGauge(id,data){
    option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
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

function format (num) {
    return (num.toFixed(0) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}

function GetQueryString(name) {
	   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
	   var r = window.location.search.substr(1).match(reg);
	   if (r!=null) return (r[2]); return null;
	}
//	alert(GetQueryString("参数名1"));
