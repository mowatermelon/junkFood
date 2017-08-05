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
			"color" : "#000",
			"background-position" : "2px -30px"
		})
		$(this).next().slideToggle();
		$(this).parent().siblings().find(".g-p-bg-3").slideUp();

	});
	$(".childTab li")
			.bind(
					"click",
					function() {
						$(this).find("span").addClass("g-p-bg-7")
						$(this).parent().parent().siblings().find(
								".childTab li").removeClass("g-p-bg-6");
						$(this).addClass("g-p-bg-6").siblings().removeClass(
								"g-p-bg-6");
						if (!$(this).attr("name").indexOf("gzjz")) {
							var url = 'jg/xn/gzjz/' + $(this).attr("name")
									+ '.jsp';
						} else if (!$(this).attr("name").indexOf("ywjg")) {
							var url = 'jg/xn/ywjg/' + $(this).attr("name")
									+ '.jsp';
						} else if (!$(this).attr("name").indexOf("sjhj")) {
							var url = 'jg/xn/sjhj/' + $(this).attr("name")
									+ '.jsp';
						} else if (!$(this).attr("name").indexOf("ywdj")) {
							var url = 'xn/ywdj/' + $(this).attr("name")
									+ '.jsp';
						} else if (!$(this).attr("name").indexOf("yqjg")) {
							var url = 'jg/xn/yqjg/' + $(this).attr("name")
									+ '.jsp';
						} else if (!$(this).attr("name").indexOf("zsjg")) {
							var url = 'jg/xn/zsjg/' + $(this).attr("name")
									+ '.jsp';
						} else if ($(this).attr("name") == "businessInfo") {
							url = 'xn/sjhj/' + $(this).attr("name") + '.jsp';
						}
						var iframe = parent.document
								.getElementById("ifrmContent");
						if (iframe) {
							iframe.src = url;
						} else {
							location.href = url;
						}

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