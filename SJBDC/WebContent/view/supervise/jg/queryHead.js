/**
 * Created by Administrator on 2016/10/10.
 */
$(function(){
	
    //初始化Tab导航栏
    initHeadTab();
});

function initHeadTab(){
    var tabData='queryHeadTab.json';
    $.getJSON(tabData, function (data) {
    	var index=0;
        for(var i in data){
            var $headLi=$('<li onclick="sendURL('+index+');"><div class="icon '+data[i].icon+'"></div><a>'+data[i].name+'</a></li>');
            $(".headTab").append($headLi);
            index++;
        }
        $(".headTab li").width(100/data.length+'%');
    })
}

function sendURL(index){
	var url="../../exchange/fkbwcx.jsp";
	if(index==1){
		url="../../exchange/djbcx.jsp";
	}else if(index==2){
		url="http://19.16.104.151:7001/DataCenter/view/map/index.html?config=cfg/bdc_gd/config_live.json";
	}
	$(".iframePage").attr("src",url);
}