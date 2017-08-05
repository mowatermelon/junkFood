<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@ include file="Common/header/base.jsp"%>
</head>
<body>
	<c:choose>
		<c:when test="${errorMsg!=null && errorMsg!='' }">
			<span>${errorMsg}</span>
			<br />
			<span>您当前服务器的机器码为：</span> ${code}
			<div>请联系管理员进行激活，注意复制您的服务器机器码</div>
		</c:when>
		<c:otherwise>
			服务器机器码:    ${code}<br />
			剩余授权时间:    ${days }天
		</c:otherwise>
	</c:choose>

</body>
</html>