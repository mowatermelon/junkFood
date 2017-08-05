/**
 * Created by Administrator on 2016/10/10.
 */
$(function() {
	// 二级菜单收放
	$(".g-p-bg-2").bind(
			"click",
			function() {
				alert(1);
				$(this).next().slideToggle();
				$(this).parent().siblings().find(".childTab li").removeClass(
						"g-p-bg-6");
				var url =$(this).attr("url");
				alert(url);
				parent.document.getElementById("ifrmContent").src=url;
				
//				$(this).parent().siblings().find(".g-p-bg-3").slideUp();
			});
	$(".childTab li").bind("click", function() {
		$(this).addClass("g-p-bg-7").siblings().removeClass("g-p-bg-7");
		if (!$(this).attr("name").indexOf("xxwk1")) {
			var url = 'jg/xn/gzjz/' + $(this).attr("name") + '.jsp';
		} else if (!$(this).attr("name").indexOf("ywjg")) {
			var url = 'jg/xn/ywjg/' + $(this).attr("name") + '.jsp';
		} else if (!$(this).attr("name").indexOf("sjhj")) {
			var url = 'jg/xn/sjhj/' + $(this).attr("name") + '.jsp';
		} else if (!$(this).attr("name").indexOf("ywdj")) {
			var url = 'xn/ywdj/' + $(this).attr("name") + '.jsp';
		} else if (!$(this).attr("name").indexOf("yqjg")) {
			var url = 'xn/yqjg/' + $(this).attr("name") + '.jsp';
		} else if (!$(this).attr("name").indexOf("zsjg")) {
			var url = 'jg/xn/zsjg/' + $(this).attr("name") + '.jsp';
		}else if($(this).attr("name")=="businessInfo"){
    		url='xn/sjhj/'+$(this).attr("name")+'.jsp';
    	}
		parent.document.getElementById("ifrmContent").src=url;
	});
});

