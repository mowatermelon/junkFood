<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="java.util.*"%>
<%@ include file="/common/top.jsp" %>
<%@ include file="/common/left.jsp" %>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html>
<%
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html>
	<head>
		<base href="<%=basePath%>">
		<title>武大吉奥GeoSmarter数据融合管理中心 - 角色管理</title>
		<meta charset="utf-8">
		<meta name="viewport"
			content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<jsp:include page="/modular/system/inc/common-felib.jsp" />
		<script type="text/javascript" src="<%=basePath %>js/jquery.validate.js"></script>
	    <script type="text/javascript" src="<%=basePath %>js/messages_cn.js"></script>


		<!-- 加载树的js -->
		<link rel="stylesheet"
			href="<%=basePath%>modular/system/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css"
			type="text/css" />
		<script type="text/javascript"
			src="<%=basePath%>modular/system/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>
		<!-- 引用，关联组织机构的外部JS -->
		<script type="text/javascript"
			src="<%=basePath%>modular/system/platform-admin/user/role/js/updateOrg.js"></script>
		<script type="text/javascript"
			src="<%=basePath%>modular/system/platform-admin/user/role/js/updateRole.js"></script>

		<script type="text/javascript">
		   $(document).ready(function(){
	     	$("#firstpane .menu_body:eq(4)").show();
		        $("#firstpane a.menu_head").click(function(){
		            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
		            $(this).siblings().removeClass("current");
		        });
		});
		</script>
	</head>
	<body>
	  <div class="clearfloat content">
	    <!--任务管理-右边栏-->
		<div class="plan-left">
		    <div class="plan-tltle">
				<h2>修改角色</h2>
			</div>
			<div class="task-cj">
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
					<s:form name="roleForm" class="form-horizontal"
						action="/user/role_update.action" method="post" id="roleForm">
						<!-- 添加隐藏域 -->
						<s:hidden id="roleID" name="role.roleID" />
						<div class="form-group">
							<label for="roleName" class="col-sm-2 control-label">
								角色名称
							</label>
							<div class="col-sm-5">
								<s:textfield name="role.roleName" class="form-control required"
									id="roleName" />
							</div>
						</div>
						<div class="form-group">
							<label for="roleRemark" class="col-sm-2 control-label">
								说明
							</label>
							<div class="col-sm-5">
								<s:textarea name="role.roleRemark" id="roleRemark"
									class="form-control required" rows="3" />
							</div>
						</div>
						<div class="form-group">
						</div>
						<div class="form-group">
						</div>
					</s:form>

					<div >
						<div class="row">
							<div class="col-md-12">
								<div>
									<a  href="javascript:;" onclick="addRole()" class="task-but3" style="margin-left:190px;">保存 </a>
									<a  href="javascript:;" onclick="location='<%=basePath%>user/role_list.action'" class="task-but4">  返回 </a>
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
							<div>
								<button type="button" class="task-but3" id="btnSave"
									data-toggle="modal" data-target="#addPermWindow">
									提交
								</button>
								<button type="button" class="task-but4"
									onclick="location='<%=basePath%>user/role_list.action'">
									返回
								</button>
							</div>
						</div>

					</s:form>
				</div>

				<!-- 用户设置面板内容 -->
				<div class="tab-pane" id="userSetPanel">
					<s:form name="userForm" class="form-horizontal"
						action="/user/user_saveUserAssociationRole.action" method="post">
						<div class="row">

							<div class="col-sm-5">
								<div class="form-group">

									<!-- 隐藏域 ,获取角色ID-->
									<%-- <s:hidden  name="roleID" id="userRoleID"/> --%>
									<input type="hidden" name="roleID" id="userRoleID" />
									<input type="hidden" name="userIDs" id="rightUserList" />
									<input type="hidden" id="basePath" value="<%=basePath%>" />

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

					<div >
						<div class="row">
							<div class="col-md-12">
								<div >
								<a class="task-but3" href="javascript:;"
										onclick="addUser()" style="margin-left:170px;">保存 </a>
									<a class="task-but4" href="javascript:;"
										onclick="location='<%=basePath%>user/role_list.action'"> 返回 </a>
									
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- 组织机构设置面板内容 -->
				<div class="tab-pane" id="orgSetPanel">
					<s:form name="orgForm" class="form-horizontal"
						action="/user/org_saveOrgAssociationRole.action" method="post">
						<div class="row">
							<div class="col-sm-10 col-sm-offset-2">
								<!-- 隐藏域 ,获取角色ID-->
								<input type="hidden" name="roleID" id="orgRoleID" />



								<div class="zTreeDemoBackground">

									<input type="hidden" name="orgID" id="organizationRoleID" />

									<!-- <input 
												id="citySel" type="text" readonly value=""
												style="width: 120px;" onclick="showMenu();" /> &nbsp; -->

									<ul id="treeDemo" class="ztree" id="citySel"
										onclick="showMenu();"></ul>

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
								<div>
									<a class="task-but3" href="javascript:;"
										onclick="addOrg()" style="margin-left: 200px;">保存 </a>
									<a href="javascript:;"
										onclick="location='<%=basePath%>user/role_list.action'" class="task-but4"> 
										返回 </a>
								</div>
							</div>
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
        if($("#roleForm").valid()){
        window.document.roleForm.submit();
        //alert("添加成功");
        }
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