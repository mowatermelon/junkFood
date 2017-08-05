<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="java.util.*"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html>
	<head>

		<base href="<%=basePath%>">
		<title>GeoSmarter数据服务中心-用户管理</title>
		<meta charset="utf-8">
		<meta name="viewport"
			content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

		<jsp:include page="/view/usersys/inc/common-felib.jsp" />

		<link rel="stylesheet"
			href="<%=basePath%>/view/usersys/platform-admin/css/page-common.css" />
		<link rel="stylesheet" href="view/usersys/theme/default/css/date.css"
			type="text/css">
	</head>
	<body>
		<!--内容-->
		<div class="system-R-content">
			<%-- <div class="position">
				<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a
					href="javascript:void(0)">系统管理</a> -> 用户</span>
			</div> --%>
			<div>
				<div class="title">
					<h4>
						用户列表
					</h4>
						<div class="title-add ">
							<a href="user/user_gotoAdd.action" ><img title="添加功能权限"
									src="view/usersys/theme/default/img/new.png">添加用户</a>
						</div>
				</div>
				<div class="tool">
					<!-- <div class="add">
						<a href="user/user_gotoAdd.action"><img title="添加用户"
								src="view/usersys/theme/default/img/new.png">添加用户</a>
					</div> -->
					<div class="form-serch">
						<s:form name="userForm" action="user/user_list.action"
							class="form-inline">
							<div class="form-group form-group-sm">
								<s:textfield name="user.userLoginName"
									class="form-control input-sm" id="queryKeywordIpt"
									placeholder="根据用户名查询" />
							</div>
							<button type="submit" class="btn btn-default btn-sm">
								<span class="glyphicon glyphicon-search"></span> 查询
							</button>
						</s:form>
					</div>
				</div>
				<div class="tableContainer">
					<div class="tableBorder">
						<table id="tbTagEnum" cellspacing="1" width="100%"
							class="table table-striped">
							<thead>
								<tr>
									<th width="35%">
										用户名
									</th>
									<th width="25%">
										是否是超级管理员
									</th>
									<th width="25%">
										用户创建时间
									</th>
									<th width="15%">
										操作
									</th>
								</tr>
							</thead>
							<tbody>
								<s:iterator var="u" value="userList">
									<tr>
										<s:hidden value="#u.userID" />
										<td>
											<s:property value="#u.userLoginName" />
										</td>
										<td>
											<s:if test="#u.userIsSuperAdmin==1">系统超级管理员</s:if>
											<s:elseif
												test="#u.manageOrg !=null && #u.manageOrg.size() >0">机构管理员</s:elseif>
											<s:else>普通用户</s:else>
										</td>
										<td>
											<s:property value="#u.userCreateTime" />
										</td>
										<td>
											<a
												href="user/user_gotoUpdate.action?userID=<s:property value="#u.userID" />">
												<img title="修改"
													src="view/usersys/theme/default/img/edit.png"> </a>
											<s:if test='#u.userUsesMark==1'>
												<a
													href="user/user_updateUsesMark.action?userID=<s:property value="#u.userID" />&usesMark=0">
													<img title="禁用"
														src="view/usersys/theme/default/img/disabled.png"> </a>
											</s:if>
											<s:else>
												<a
													href='user/user_updateUsesMark.action?userID=<s:property value="#u.userID" />&usesMark=1'>
													<img title="启用"
														src="view/usersys/theme/default/img/start.png"> </a>
											</s:else>
											<a href="javascript:;"
												onclick="del('<s:property value="#u.userID" />');"> <img
													title="删除" src="view/usersys/theme/default/img/delete.png">
											</a>
										</td>
									</tr>
								</s:iterator>
							</tbody>
						</table>
					</div>
					<div class="row" style="margin-top: 15px;">
						<div class="col-sm-6">
							第
							<s:property value='currentPage' />
							页 ( 总共
							<s:property value="pageCount" />
							页 )
						</div>
						<div class="col-sm-6">
							<nav class="pull-right">
							<ul class="pagination"
								style="margin-top: 0px; margin-bottom: 0px;">
								<s:if test="currentPage>1">
									<li>
										<a
											href="user/user_list.action?pageNo=<s:property value='currentPage-1'/>">上一页</a>
									</li>
								</s:if>
								<s:else>
									<li class="disabled">
										<a href="javascript:;">上一页</a>
									</li>
								</s:else>
								<c:forEach begin="${(currentPage-5)>0?(currentPage-5):1}"
									end="${(currentPage+5)>pageCount?(pageCount):(currentPage+5)}"
									var="i">
									<c:if test="${currentPage!=i}">
										<li>
											<a href="user/user_list.action?pageNo=${i}">${i}</a>
										</li>
									</c:if>
									<c:if test="${currentPage==i}">
										<li class="active">
											<a href="user/user_list.action?pageNo=${i}">${i}</a>
										</li>
									</c:if>
								</c:forEach>
								<s:if test="pageCount>currentPage">
									<li>
										<a
											href="user/user_list.action?pageNo=<s:property value='currentPage+1'/>">下一页</a>
									</li>
								</s:if>
								<s:else>
									<li class="disabled">
										<a href="javascript:;">下一页</a>
									</li>
								</s:else>
							</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>

			<script>
	//删除
	function del(id){
		//if(confirm("删除后不可恢复，您确定删除？")){
		//	window.location.href='<%=basePath%>/user/user_delete.action?userID='+id;
		//}
		window.parent.Util.confirm(
			null,
			"删除后不可恢复，您确定删除？",
			function(){
				window.location.href='<%=basePath%>/user/user_delete.action?userID='+id;
			},
			null
		)
	}
</script>
	</body>
</html>