<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %> 
<%@ page import="java.util.Date" language="java"%>
<%@ page import="java.text.SimpleDateFormat" language="java"%>
<%
String path = request.getContextPath()+"/view/maintenance/dfs";
SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
String date=df.format(new Date());
response.setHeader("Access-Control-Allow-Origin", "*");
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  	<link href="<%=path %>/css/jkgl.css" rel="stylesheet" type="text/css">
  	<script src="<%=path %>/js/jquery-1.11.3.min.js" ></script>
	<script type="text/javascript" src="<%=path %>/js/template.js"></script>
	<script src="<%=path %>/js/dialog-min.js"></script>
    <link href="<%=path %>/css/ui-dialog.css" rel="stylesheet" />
  </head>
  
  <body>
  
  	<%-- 
  	<div class="top">
  	<div class="logo">数据融合管理中心</div>
    <div class="user">
    	<ul>
        	<li><a href="<%=path %>/modular/index.jsp"><img src="<%=path %>/images/ico/index.png"><span>首页</span></a></li>
            <li><a href="#"><img src="<%=path %>/images/ico/user.png"><span>${GeoDFS_user.userLoginName}</span></a></li>
            <!-- <li><img src="<%=path %>/images/ico/time.png"><span><%=date %></span></li> -->
            <li><a href="${pageContext.request.contextPath}/j_spring_security_logout"><img src="<%=path %>/images/ico/quit.png"><span>退出</span></a></li>
        </ul>
    </div>
	</div>
	--%>
	
  </body>
</html>
