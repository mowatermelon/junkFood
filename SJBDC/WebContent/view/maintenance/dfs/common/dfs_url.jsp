<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib  uri="http://java.sun.com/jstl/core" prefix="c" %>
<!--<c:set var="dfs_url" scope="session" value="http://127.0.0.1:9010/DFManager/dfs"/>
<c:set var="dfs" scope="session" value="http://121.0.0.1:9010/DFManager"/>
<c:set var="pageSize" scope="session" value="10"></c:set>-->

	
	
	
	<%--代理post请求 任务创建页面 --%>
	<c:set var="dfs_url_proxy" scope="session" value="http://19.16.104.151:7001/DFManager/dfs?"/>
	<%--dfs任务监控系统数据接口地址 --%>
	<c:set var="dfs_url" scope="session" value="http://19.16.104.151:7001/DFManager/dfs"/>
	<%-- 任务监控系统的根目录地址 --%>
	<c:set var="dfs" scope="session" value="http://19.16.104.151:7001/DFManager/dfs"/>
	<%--数据服务中心集成的任务监控系统的根路径 --%>
	<c:set var="dfs_dwr" scope="session" value="http://19.16.104.151:7001/DataCenter/view/dfs"/>
	<%-- 任务监控系统预警iframe页面接口--%>
	<c:set var="dfs_index" scope="session" value="http://19.16.104.151:7001/DFManager/modular/warn.jsp"/>
	<%-- 任务监控系统 分页参数 --%>
	<c:set var="pageSize" scope="session" value="10"></c:set>
	
	
	
	
	



