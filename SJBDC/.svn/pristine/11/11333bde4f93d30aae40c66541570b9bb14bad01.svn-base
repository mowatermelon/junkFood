$(function(){
	
	var obj=_util.parseUrl();
	var zsxlh=obj.ZSXLH;
	$.ajax({url:'/SJBDC/commonController/queryList.do',
    	type:"post",
    	dataType:"json",
    	data:{
			"queryMap":{
				"zsxlh":zsxlh
			},
			"queryId" : "com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForZSCX"
    	},
    	success:function(result){
    		$.each(result[0], function(i) {
    			var key=i;
    			if(key.indexOf("日期")){
    				result[0][i]=result[0][i].substring(0,10);
    			}
    			var value=result[0][i];
    			$("#"+key).html(value);
    		});
    	}
	})
})