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
			href="<%=basePath%>/view/usersys/platform-admin/css/page-common.css" />

		<!-- 加载树的js -->
		<link rel="stylesheet"
			href="view/usersys/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css"
			type="text/css" />
		<!-- <link rel="stylesheet" href="fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle-tlb.css" type="text/css" /> -->
		<script type="text/javascript"
			src="view/usersys/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>
		<!-- 引用，关联组织机构的外部JS -->
		<script type="text/javascript"
			src="view/usersys/platform-admin/user/role/js/updateOrg.js"></script>
		<%-- <script type="text/javascript" src="platform-admin/user/role/js/addRole.js"></script> --%>
		<script type="text/javascript"
			src="view/usersys/platform-admin/user/role/js/updateRole.js"></script>

		<link rel="stylesheet" href="view/usersys/theme/default/css/date.css"
			type="text/css">
		<link rel="stylesheet" href="view/usersys/theme/default/css/style.css"
			type="text/css">
			
			
			<!-- chenzhi 2015.8.12 begin  -->
		
		<script type="text/javascript" src="view/usersys/fe-lib/jquery-validation/jquery.validate.min.js"></script>
		<script type="text/javascript" src="view/usersys/fe-lib/jquery-validation/additional-methods.js"></script>
		<script type="text/javascript" src="view/usersys/fe-lib/jquery-validation/messages_zh.js"></script>
		
		<script type="text/javascript">
		$(function() {
			$('#roleFormID').validate({
		         errorElement : 'span',
		         errorClass : 'help-block',
		         focusInvalid : true,
		         rules : {
		             'role.roleName' : {
		                 required : true,
		             },
		             
		             
		             'role.roleRemark':{
		             	required : true
		             },
		             
		         },
		         highlight : function(element) {
		             $(element).closest('.form-group').addClass('has-error');
		         },
		         success : function(label) {
		             label.closest('.form-group').removeClass('has-error');
		             label.remove();
		         },
		         errorPlacement : function(error, element) {
		             element.parent('div').append(error);
		         },
		         submitHandler : function(form) {
		             form.submit();
		         }
		     });
		})
		</script>
		
<!-- chenzhi 2015.8.12 end  -->
	</head>
	<body>
		<%-- <div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a
				href="javascript:void(0)">系统管理</a> -> 修改角色</span>
		</div> --%>
		<div class="system-edit">
			<h4>
				修改角色
			</h4>
			<hr />
			<ul class="nav nav-tabs">
				<li class="active">
					<a href="#basicInfoPanel" data-toggle="tab">基本信息</a>
				</li>
				<!-- <li><a href="#powerSetPanel" id="btnPerm" data-toggle="tab">权限设置</a></li> -->
				<li>
					<a href="#userSetPanel" id="btnUser" data-toggle="tab">用户设置</a>
				</li>
				<li>
					<a href="#orgSetPanel" id="btnOrg" data-toggle="tab">组织机构设置</a>
				</li>
			</ul>
			<div class="tab-content" style="margin-top: 10px;">
				<!-- 基本信息面板内容 -->
				<div class="tab-pane active" id="basicInfoPanel">
					<s:form id="roleFormID" name="roleForm" class="form-horizontal"
						action="role_update.action" method="post">
						<!-- 添加隐藏域 -->
						<s:hidden id="roleID" name="role.roleID" />
						<div class="form-group">
							<label for="roleName" class="col-sm-2 control-label">
								角色名称
							</label>
							<div class="col-sm-5">
								<s:textfield name="role.roleName" class="form-control"
									id="roleName" />
							</div>
						</div>
						<div class="form-group">
							<label for="roleRemark" class="col-sm-2 control-label">
								说明
							</label>
							<div class="col-sm-5">
								<s:textarea name="role.roleRemark" id="roleRemark"
									class="form-control" rows="3" />
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
									<a class="btn btn-default button-back" href="<%=basePath %>user/role_list.action"
										> <i
										class="glyphicon glyphicon-arrow-left"></i> 返回 </a>
									<a class="btn btn-primary button-submit" href="javascript:;"
										onclick="addRole()"> <i
										class="glyphicon glyphicon-floppy-disk"></i> 保存 </a>
								</div>
							</div>
						</div>
					</div>
				</div>


				<!-- 权限设置面板内容 -->
				<div class="tab-pane" id="powerSetPanel">
					<s:form name="permForm" class="form-horizontal"
						action="user/perm_save.action" method="post">

						<!-- 隐藏域 ,获取角色ID-->
						<input type="hidden" name="roleID" id="permRoleID" />
						<table id="perm" class="table table-condensed table-hover">
							<thead>
								<tr>
									<th>
										<input id="chkAllSelect" type="checkbox">
									</th>
									<!-- <th>权限ID</th> -->
									<th>
										权限类型
									</th>
									<th>
										权限名称
									</th>
									<th>
										系统类型
									</th>
									<th>
										操作
									</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>

						<div class="form-group">
							<div class="col-sm-offset-2 col-sm-10">
								<button type="button" class="btn btn-default" id="btnSave"
									data-toggle="modal" data-target="#addPermWindow">
									提交
								</button>
								<button type="button" class="btn btn-default"
									onclick="location='user/role_list.action'">
									返回角色列表
								</button>
							</div>
						</div>

					</s:form>
				</div>

				<!-- 用户设置面板内容 -->
				<div class="tab-pane" id="userSetPanel">
					<s:form name="userForm" class="form-horizontal"
						action="user/user_saveUserAssociationRole.action" method="post">
						<div class="row">

							<div class="col-sm-5">
								<div class="form-group">

									<!-- 隐藏域 ,获取角色ID-->
									<%-- <s:hidden  name="roleID" id="userRoleID"/> --%>
									<input type="hidden" name="roleID" id="userRoleID" />
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
										onclick="location='user/role_list.action'"> <i
										class="glyphicon glyphicon-arrow-left"></i> 返回 </a>
									<a class="btn btn-primary button-submit" href="javascript:;"
										onclick="addUser()"> <i
										class="glyphicon glyphicon-floppy-disk"></i> 保存 </a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- 组织机构设置面板内容 -->
				<div class="tab-pane" id="orgSetPanel">
					<s:form name="orgForm" class="form-horizontal"
						action="user/org_saveOrgAssociationRole.action" method="post">
						<div class="row">
							<div class="col-sm-10 col-sm-offset-2">
								<!-- 隐藏域 ,获取角色ID-->
								<input type="hidden" name="roleID" id="orgRoleID" />

								<!-- <div class="form-group">
										<label for="iptOrganization" class="col-sm-2 control-label">所属机构</label>

										<div class="col-sm-3">

											<input type="hidden" name="orgID" id="orgID" /> <input
												id="citySel" type="text" readonly value=""
												style="width: 120px;" onclick="showMenu();" /> &nbsp;<a
												id="menuBtn" href="#" onclick="showMenu(); return false;">请指定机构</a>

										</div>
									</div> -->


								<div class="zTreeDemoBackground">

									<input type="hidden" name="orgID" id="organizationRoleID" />

									<!-- <input 
												id="citySel" type="text" readonly value=""
												style="width: 120px;" onclick="showMenu();" /> &nbsp; -->

									<ul id="treeDemo" class="ztree" id="citySel"
										onclick="showMenu();"></ul>

									<!-- 
												<a 	id="menuBtn" href="#" onclick="showMenu(); return false;">请指定机构</a> -->

								</div>



								<!-- <div class="zTreeDemoBackground left">
										<ul id="treeDemo" class="ztree"></ul>
									</div> -->
								<div class="form-group">
								</div>
								<div class="form-group">
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
										class="glyphicon glyphicon-arrow-left"></i> 返回 </a>
									<a class="btn btn-primary button-submit" href="javascript:;"
										onclick="addOrg()"> <i
										class="glyphicon glyphicon-floppy-disk"></i> 保存 </a>
								</div>
							</div>
						</div>
					</div>
				</div>


			</div>
		</div>




		<script>
    setPanelScroll();
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
    //$('.mainPanel').slimScroll();
    
    
    initPage();

    function initPage() {
        setPanelScroll();
        //添加角色
        $("#btnSaveFunctionPower").on("click", addRole);
        //添加权限
        $("#btnSavePerm").on("click", addPerm);
        //添加用户
        $("#btnSaveUser").on("click",addUser);
        //删除权限        
        $("#btnDeletePerm").on("click",deletePerm);
        
        //添加组织机构
        $("#btnSaveOrg").on("click",addOrg);
        
        
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


    function addRole(){
    	$('#roleFormID').submit();
        //window.document.roleForm.submit();
        //alert("添加成功");
    }
    
    function addPerm(){
    	window.document.permForm.submit();
    	
    }
    
    function addUser(){
    	window.document.userForm.submit();
    	
    }
    
    function addOrg(){
    	window.document.orgForm.submit();
    	
    }
    
  	//定义全局变量，暂时存放待删除的权限ID
	var delPermID = null;
  	
  	//设置权限ID
	function setDelPerm(permID){
		delPermID = permID;
		alert("delPermID:"+delPermID);
	}
  
    function deletePerm(){
    	window.location.href='<%=basePath%>/user/perm_delete.action?permID='+delPermID;
    }

</script>

	</body>
</html>