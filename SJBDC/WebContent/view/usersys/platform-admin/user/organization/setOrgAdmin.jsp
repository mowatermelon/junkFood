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
		<title>武大吉奥GIS云平台 - 综合运维管理系统</title>
		<meta charset="utf-8">
		<meta name="viewport"
			content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

		<jsp:include page="/view/usersys/inc/common-felib.jsp" />

		<link rel="stylesheet"
			href="<%=basePath%>/view/usersys/platform-admin/css/page-common.css" />
		<!-- 引用，关联用户，权限的外部JS -->
		<%-- <script type="text/javascript" src="platform-admin/user/role/js/addRole.js"></script> --%>

		<script type="text/javascript"
			src="view/usersys/platform-admin/user/organization/js/addUser.js"></script>
		<!-- 加载树的js -->
		<link rel="stylesheet"
			href="view/usersys/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css"
			type="text/css" />
		<!-- <link rel="stylesheet" href="fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle-tlb.css" type="text/css" /> -->
		<script type="text/javascript"
			src="view/usersys/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>

		<link rel="stylesheet" href="view/usersys/theme/default/css/date.css"
			type="text/css">
		<link rel="stylesheet" href="view/usersys/theme/default/css/style.css"
			type="text/css">
	</head>
	<body>
		<%-- <div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a
				href="javascript:void(0)">系统管理</a> -> 设置组织机构成员</span>
		</div> --%>
		<div class="system-edit">
			<h4>
				设置组织机构成员
			</h4>
			<hr />
			<s:form name="orgForm" class="form-horizontal"
				action="user/org_setOrgAdmin.action" method="post">
				<div class="row">
					<div class="col-sm-5">
						<div class="form-group">
							<s:hidden name="orgID" cssClass="form-control" id="orgID" />
							<s:hidden name="organization.orgID" cssClass="form-control"
								id="organiztionID" />
							<input type="hidden" name="roleID" id="userRoleID" />
							<!-- 隐藏域 -->
							<input type="hidden" name="userIDs" id="rightUserList" />
							<label for="selAllUser" class="col-sm-4 control-label">
								待选用户
							</label>
							<div class="col-sm-8">

								<select multiple="multiple" size="10" class="form-control"
									class="form-control" id="leftUserList">

								</select>
							</div>
						</div>
					</div>

					<div class="col-sm-1">
						<br />
						<br />
						<button type="button" class="btn btn-default center-block"
							disabled="disabled">
							- &gt
						</button>
						<br />
						<br />
						<button type="button" class="btn btn-default center-block"
							disabled="disabled">
							&lt -
						</button>
					</div>

					<div class="col-sm-5 col-offset-sm-1">
						<div class="form-group">
							<div class="col-sm-8">
								<select id="userList" multiple="multiple" size="10"
									class="form-control">

								</select>
							</div>
							<label for="selSelectedUser" class="col-sm-4 control-label">
								<span class="pull-left">已选择用户</span>
							</label>
						</div>
					</div>
				</div>
				<div class="form-group">
				</div>
				<div class="form-group">
				</div>

			</s:form>

			<div class="container-fluid catalog-edit-guide-footer">
				<div class="row">
					<div class="col-md-12">
						<div class="col-md-offset-3 col-md-9">
							<a class="btn btn-default button-back" href="javascript:;"
								onclick="location='user/org_list.action'"> <i
								class="glyphicon glyphicon-arrow-left"></i> 返回 </a>
							<a class="btn btn-primary button-submit" href="javascript:;"
								id="btnSaveUser"> <i class="glyphicon glyphicon-floppy-disk"></i>
								保存 </a>
						</div>
					</div>
				</div>
			</div>

		</div>


		<script>
    initPage();

    function initPage() {
    	
        setPanelScroll();
        //添加用户
        $("#btnSaveUser").on("click",addUser);
        
        
    }

    function setPanelScroll(){
        $('.sidePanelContainer').slimScroll({
            width:$('.sidePanel').width(),
            height:$('.sidePanel').height()
        });
        $('.mainPanelContainer').slimScroll({
            width:$('.mainPanel').width(),
            height:$('.mainPanel').height()
        });
    }

    
    function addUser(){
    	window.document.orgForm.submit();
    	
    }
    

</script>
	</body>
</html>