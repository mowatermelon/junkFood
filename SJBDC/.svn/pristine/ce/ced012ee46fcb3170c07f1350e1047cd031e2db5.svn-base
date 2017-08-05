/**
 * Created by Administrator on 2016/10/10.
 */
$(function() {
	//initTree()
	// 右侧菜单栏事件
	bindClick();

})

function initTree(target) {
	if (target) {
		$(".rightTab").hide();
		$("." + target + "_tree").show();
	} else {
		var url = (top.location.href)
		var obj = _util.parseUrl(url);
		if (obj && obj.target) {
			$(".rightTab").hide();
			//alert(obj.target);
			
			$("." + obj.target + "_tree").show();
		}
	}

}

function bindClick() {
	// 二级菜单收放
	$(".g-p-bg-2").bind("click", function(e) {
		// e.preventdefault();
		$(this).css({
			"color" : "#008bf3",
			"background-position" : "2px -136px"
		}).parent().siblings().find(".g-p-bg-2").css({
			"color" : "#a7a7a7",
			"background-position" : "2px -30px"
		})		
		var url =$(this).attr("url");
		url='xxwh/zsjg/'+url;
		parent.document.getElementById("ifrmContent").src=url;		
	});	
}

function initRightTab(rootName, index) {
	$("#" + rootName + "Title").find(".g-p-bg-2").css({
		"color" : "#2175de",
		"background-position" : "2px -136px"
	})
	$("#" + rootName + "Title").find(".g-p-bg-3").show();
	$("#" + rootName + "Title").find(".childTab li").eq(index).addClass(
			"g-p-bg-6").find("span").addClass("g-p-bg-7");
	$("#" + rootName + "Title").siblings().removeClass("g-p-bg-6");
	initTree("zhjg");
}