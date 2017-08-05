$(function () {
	var target= getUrlParam(top.location.href,"target")
	if(!target){
		top.location.href="/SJBDC/view/infoManage/index.jsp?target=xxwh"	
	}
 if(target="xxwh"){
	$("#a3").addClass("ss").parent().siblings().find("a").removeClass("ss");
	 var  sUrl = $("#a3").attr("url");
	 $("#ifrmContent").attr("src", sUrl)
}
	//初始化iframe地址
	$(".g-logo-top").attr("src","logo.png");
    $(".g-mt a").click(function () {
        var animation = "fadeIn";
        $(this).addClass('animated');
        $(this).addClass(animation);
        var that = $(this);

        //计时器，500毫秒执行方法
        setTimeout(function () {
            that.removeClass('animated');
            that.removeClass(animation);
        }, 500)
    });
});

function getAttrObj(){
	var obj=$('#a2').attr('data-forward');
	
	if(obj){
		return JSON.parse(obj);
	}
	return {};
}

/*
 * 
 * destiny url地址
 * par 参数名
 *par_value	
 * */
function replaceUrl(url,par,par_value) {
    var oUrl =url;
    var re=eval('/('+ par+'=)([^&]*)/gi');
    var nUrl = oUrl.replace(re,par+'='+par_value);
    window.location.href=nUrl;
}

//给URL增加参数
function addUrl(param,paramValue){
	var url=window.location.href;
	var obj=_util.parseUrl(url);
	var paramName=param;
	if(obj.paramName){
		replaceUrl(url,param,paramValue)
	}
}
function getUrlParam(url,param){	
	var obj=_util.parseUrl(url);
	var target=param
	if(obj){
		return obj.target;
	}
	return false	
}