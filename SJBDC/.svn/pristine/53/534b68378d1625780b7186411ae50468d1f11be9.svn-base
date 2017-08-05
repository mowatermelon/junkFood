<%@ page language="java" contentType="text/html;charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<%
	if (request.getContextPath().endsWith("/")) {
		request.setAttribute("base", request.getContextPath());
	} else {
		request.setAttribute("base", request.getContextPath() + "/");
	}
	request.setAttribute("v", "201601190011");
%>


<script src="${base }view/Common/js/jquery-1.9.1.min.js?v=${v }"
	type="text/javascript"></script>
<script src="${base }view/Common/js/prototype.js?v=${v }"
	type="text/javascript"></script>
<script src="${base }view/Common/js/util.js?v=${v }"
	type="text/javascript"></script>
<script>
	var base = '${base}';
	var url = location.href, cssUrl;
	var obj = _util.parseUrl(url);
	if (obj && obj.target == "SJJH") {
		cssUrl = base + "view/Common/css/index_background.css";
	} else if (obj && obj.target == "YXWH") {
		cssUrl = base + "view/Common/css/yxwh_background.css";
	}
	if (cssUrl) {
		linkTag = $('<link href="' + cssUrl + '" rel="stylesheet" type="text/css"  charset="utf-8" />');
		// 请看清楚，是动态将link标签添加到head里  
		$($('head')[0]).append(linkTag);
	}
</script>
