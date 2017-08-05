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
		<title>GeoSmarter数据服务中心-机构管理</title>
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
					href="javascript:void(0)">系统管理</a> -> 组织机构</span>
			</div> --%>
			<div>
				<div class="title">
					<h4>
						组织机构列表
					</h4>
					<div class="title-add ">
							<a href="user/org_gotoAdd.action" ><img title="添加功能权限"
									src="view/usersys/theme/default/img/new.png">添加机构</a>
						</div>
				</div>
				<div class="tool">
				<!-- 	<div class="add">
						<a href="user/org_gotoAdd.action"><img title="添加机构"
								src="view/usersys/theme/default/img/new.png">添加机构</a>
					</div> -->
					<div class="form-serch">
						<s:form name="userForm" action="user/org_list.action"
							class="form-inline ">
							<div class="form-group form-group-sm">
								<s:textfield name="organization.orgName" class="form-control"
									id="queryKeywordIpt" placeholder="根据组织机构名查询" />
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
								<tr class="title">
									<th width="20%">
										组织机构名称
									</th>
									<th width="15%">
										组织机构编码
									</th>
									<th width="15%">
										组织机构电话
									</th>
									<th width="20%">
										组织机构地址
									</th>
									<th width="15%">
										上级组织机构名称
									</th>
									<th width="15%">
										操作
									</th>
								</tr>
							</thead>
							<tbody>
								<s:iterator var="o" value="orgList">
									<tr>
										<s:hidden value="#o.orgID" />
										<td>
											<s:property value="#o.orgName" />
										</td>
										<td>
											<s:property value="#o.orgCode" />
										</td>
										<td>
											<s:property value="#o.orgTelephone" />
										</td>
										<td>
											<s:property value="#o.orgAddress" />
										</td>
										<td>
											<s:if test='("root").equals(#o.orgParent.orgID)'>
							顶层机构
							</s:if>
											<s:else>
												<s:property value="#o.orgParent.orgName" />
											</s:else>
										<td>
											<a
												href="user/org_gotoUpdate.action?orgID=<s:property value="#o.orgID" />">
												<img title="修改"
													src="view/usersys/theme/default/img/edit.png"> </a>
											<%-- <a href="user/org_delete.action?orgID=<s:property value="#o.orgID" />" >删除</a> --%>
											<!-- <button type="button" class="btn btn-default" id ="btnSave" data-toggle="modal" data-target="#addFunctionWindow" onclick="location='user/user_list.action'">提交</button> -->
											<a href="javascript:void(0)"
												onclick="del('<s:property value="#o.orgID" />');"> <img
													title="删除" src="view/usersys/theme/default/img/delete.png">
											</a>
											<a
												href="user/org_gotoSetOrgAdmin.action?orgID=<s:property value="#o.orgID" />">
												<img title="设置机构成员"
													src="view/usersys/theme/default/img/setting.png"> </a>
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
											href="user/role_list.action?pageNo=<s:property value='currentPage-1'/>">上一页</a>
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
											<a href="user/role_list.action?pageNo=${i}">${i}</a>
										</li>
									</c:if>
									<c:if test="${currentPage==i}">
										<li class="active">
											<a href="user/role_list.action?pageNo=${i}">${i}</a>
										</li>
									</c:if>
								</c:forEach>
								<s:if test="pageCount>currentPage">
									<li>
										<a
											href="user/role_list.action?pageNo=<s:property value='currentPage+1'/>">下一页</a>
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
		</div>


		<script>

	function del(id) {
		//if(confirm("删除后不可恢复，您确定删除？")){
		//	window.location.href='<%=basePath%>/user/org_delete.action?orgID='+id;
		//}
		window.parent.Util.confirm(
			null,
			"删除后不可恢复，您确定删除？",
			function(){
				window.location.href='<%=basePath%>/user/org_delete.action?orgID='+id;
			},
			null
		)
	}
</script>
	</body>
</html>