<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
    <title>武大吉奥GIS云平台 - 综合运维管理系统</title>
    <meta http-equiv="Refresh" content="0;url=<%=basePath %>user/user_list.action"/>

</head>
<body>
</body>
</html>