<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="java.util.*"%>
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
<title>GeoSmarter数据服务中心-角色管理</title>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<jsp:include page="/view/usersys/inc/common-felib.jsp" />

<link rel="stylesheet"
	href="<%=basePath%>/view/usersys//platform-admin/css/page-common.css" />

<!-- 加载树的js -->
<link rel="stylesheet"
	href="view/usersys/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css"
	type="text/css" />
<!-- <link rel="stylesheet" href="fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle-tlb.css" type="text/css" /> -->
<script type="text/javascript"
	src="view/usersys/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>
<!-- 引用，关联组织机构的外部JS -->
<%-- <script type="text/javascript" src="platform-admin/user/role/js/updateOrg.js"></script>    
    <script type="text/javascript" src="platform-admin/user/role/js/addRole.js"></script> --%>

<script type="text/javascript"
	src="view/usersys/platform-admin/user/role/js/setRolePerm.js"></script>

<link rel="stylesheet" href="view/usersys/theme/default/css/date.css"
	type="text/css">
<link rel="stylesheet" href="view/usersys/theme/default/css/style.css"
	type="text/css">
</head>
<body>
	<%-- <div class="position">
		<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a
			href="javascript:void(0)">系统管理</a> -> 设置角色关联权限
		</span> --%>
	</div>
	<div class="system-edit">
		<h4>设置角色关联权限</h4>
		<hr />
		<s:form name="setRolePermForm" class="form-horizontal"
			action="user/role_setRolePerm.action" method="post">

			<!-- 所属系统 -->
			<div class="form-group">
				<label for="systemType" class="col-sm-2 control-label"> 所属系统
				</label>
				<div class="col-sm-5">
					<select class="form-control" id="menuSystemType"
						name="permissions.systemType" onchange="changNum(this.value)">
						<option value="DFSCenter">数据融合平台</option>
						<option value="DataServiceCenter">数据服务中心</option>
						<option value="DataCenterPortal">数据中心门户</option>
						<%-- 
										<option value="GeoCloud门户">
											GeoCloud门户
										</option>
										<option value="GeoCloud运维">
											GeoCloud运维
										</option>
										<option value="GeoCloud基础资源">
											GeoCloud基础资源
										</option>
										--%>
					</select>
				</div>
			</div>

			<%-- <s:form name="orgForm" class="form-horizontal" action="user/org_updateOrgAssociationRole.action" method="post"> --%>

			<!-- 隐藏域 ,获取角色ID-->
			<%-- <s:hidden name="role.roleID" id="roleID"/> --%>
			<s:hidden name="roleID" id="roleID" />

			<%-- <!-- 隐藏域 ,获取角色ID-->
								<s:hidden name="roleID" id="orgRoleID" /> --%>

			<div class="form-group">
				<label for="systemType" class="col-sm-2 control-label"> 权限勾选
				</label>
				<div class="col-sm-5">
					<div class="zTreeDemoBackground left">

						<input type="hidden" name="permIDs" id="rolePermID" />
						<ul id="treeDemo" class="ztree" id="citySel"></ul>

					</div>
				</div>
			</div>
		</s:form>

		<div class="container-fluid catalog-edit-guide-footer">
			<div class="row">
				<div class="col-md-12">
					<div class="col-md-offset-3 col-md-9">
						<a class="btn btn-default button-back" href="javascript:;"
							onclick="location='user/role_list.action'"> <i
							class="glyphicon glyphicon-arrow-left"></i> 返回
						</a> <a class="btn btn-primary button-submit" href="javascript:;"
							onclick="saveRolePerm()"> <i
							class="glyphicon glyphicon-floppy-disk"></i> 保存
						</a>
					</div>
				</div>
			</div>
		</div>

	</div>



	<script>
		initPage();

		function initPage() {
			setPanelScroll();

			//添加组织机构
			$("#btnSaveRolePerm").on("click", saveRolePerm);

		}

		function setPanelScroll() {
			$('.sidePanelContainer').slimScroll({
				width : $('.sidePanel').width(),
				height : $('.sidePanel').height()
			});
			$('.mainPanelContainer').slimScroll({
				width : $('.mainPanel').width(),
				height : $('.mainPanel').height()
			});
		}

		function saveRolePerm() {
			window.document.setRolePermForm.submit();

		}

		/* <select name="num" id="num" onchange="changNum(this.value)">...</select> */
		function changNum(Num) {
			// var url ="user/perm_queryPermListBySystemType.action?respTye=JSON";
			//location.href = url; 

			initPage();

		}
	</script>

</body>
</html>