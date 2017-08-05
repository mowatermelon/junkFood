<%@ page contentType="text/html;charset=UTF-8" language="java"import="java.util.*"%>
<%@ include file="/common/top.jsp"%>
<%@ include file="/common/left.jsp"%>
<%@ taglib uri="/struts-tags" prefix="s"%>

<!DOCTYPE html>
<%
	String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>
<html>
	<head>
		<base href="<%=basePath%>">
		<title>武大吉奥GeoSmarter数据融合管理中心 - 添加用户</title>
		<meta charset="utf-8">
		<meta name="viewport"content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

		<jsp:include page="/modular/system/inc/common-felib.jsp" />
		<script type="text/javascript" src="<%=basePath %>js/jquery.validate.js"></script>
		<script type="text/javascript" src="<%=basePath %>js/additional-methods.js"></script>
		<script type="text/javascript" src="<%=basePath %>js/messages_cn.js"></script>


		<link rel="stylesheet"href="<%=basePath%>modular/system/platform-admin/css/page-common.css" />
		<script type="text/javascript"src="<%=basePath%>modular/system/platform-admin/user/user/js/addUser.js"></script>
  
      <!-- 引用，关联用户，权限的外部JS -->
		<script type="text/javascript"
			src="<%=basePath%>modular/system/platform-admin/user/role/js/addRole.js"></script>

		<!-- 加载树的js -->
		<link rel="stylesheet"
			href="<%=basePath%>modular/system/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css"
			type="text/css" />
		<script type="text/javascript"
			src="<%=basePath%>modular/system/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>

	</head>
	<body>
		<div class="clearfloat content">
			<div class="plan-left">
				<div class="plan-tltle">
					<h2>
						添加用户
					</h2>
				</div>
				<div class="task-cj">
					<!-- 基本信息面板内容 -->
					<div class="tab-pane active" id="basicInfoPanel">
						<s:form name="userForm" class="form-horizontal"
							action="/user/user_save.action" method="post" id="userForm">
							<input type="hidden" name="basepath" id="basepath" value="<%=basePath%>"/>
							<div class="form-group">
								<label for="userLoginName" class="col-sm-2 control-label">
									用户登录名称
								</label>
								<div class="col-sm-5">
									<s:textfield name="user.userLoginName" Class="form-control required"  id="userLoginName" />
								</div>
							</div>
							<div class="form-group">
								<label for="userPassword" class="col-sm-2 control-label">
									用户登录密码
								</label>
								<div class="col-sm-5">
									<s:password name="user.userPassword" 
										class="form-control required onlyLetterNumber" id="userPassword" />
								</div>
							</div>
							<div class="form-group">
								<label for="userEmail" class="col-sm-2 control-label">
									用户邮箱
								</label>
								<div class="col-sm-5">
									<s:textfield name="user.userInfo.userEmail"
										class="form-control required email" id="userEmail" />
								</div>
							</div>
							<div class="form-group">
								<label for="userIsSuperAdmin" class="col-sm-2 control-label">
									用户是否是超级管理员
								</label>
								<div class="col-sm-5">
									<label>
										<input type="radio" name="user.userIsSuperAdmin"
											id="user.userIsSuperAdmin" value="1">
										是
									</label>
									<label>
										<input type="radio" name="user.userIsSuperAdmin"
											id="user.userIsSuperAdmin" value="0" checked>
										否
									</label>
								</div>
							</div>
							<div class="form-group">
								<label for="userEnabledTime" class="col-sm-2 control-label">
									用户激活时间
								</label>
								<div class="col-sm-5">
									
									<s:textfield name="user.userEnabledTime" class="form-control required futureNow"
										id="userEnabledTime" />
								</div>
							</div>
							<div class="form-group">
								<label for="userInvalidTime" class="col-sm-2 control-label">
									用户失效时间
								</label>
								<div class="col-sm-5">
									<s:textfield name="user.userInvalidTime" class="form-control required futureNow"
										id="userInvalidTime" />
								</div>
							</div>
							<div class="form-group">
								<label for="iptOrganization" class="col-sm-2 control-label">
									所属机构
								</label>
								<div class="col-sm-5">
									<input type="hidden" name="orgID" id="orgID" />
									<input id="citySel" type="text" readonly value=""
										class="form-control" onclick="showMenu();" />
								</div>
							</div>
							<div class="form-group">
							</div>
							<div class="form-group">
							</div>
						</s:form>
						<div class="container-fluid catalog-edit-guide-footer">
							<div class="container-fluid catalog-edit-guide-footer">
								<div class="row">
									<div class="col-md-12">
										<div>
											<a class="task-but3" href="javascript:;"
												id="btnSaveFunctionPower" style="margin-left: 200px;">保存
											</a>
											<a class="task-but4" href="javascript:;"
												onclick="location='<%=basePath %>user/user_list.action'">返回 </a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- 机构下拉菜单内容 -->
						<div id="menuContent" class="menuContent"
							style="display: none; position: absolute;">
							<ul id="treeDemo" class="ztree"
								style="margin-top: 0; width: 400px; height: 200px; background: white; overflow-y: auto;"></ul>
						</div>
					</div>
				</div>
			</div>
		</div>



	<script>
		$(document).ready(function(){
		     	$("#firstpane .menu_body:eq(4)").show();
			    $("#firstpane a.menu_head").click(function(){
			    	$(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
			    	$(this).siblings().removeClass("current");
			    });
			   initPage();
			});
		setPanelScroll();
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
		//$('.mainPanel').slimScroll();

		$('#iptBirthday').datepicker({
			inline : true,
			dateFormat : "yy-mm-dd"
		});

		$('#userEnabledTime').datepicker({
			inline : true,
			dateFormat : "yy-mm-dd"
		});
		$('#userInvalidTime').datepicker({
			inline : true,
			dateFormat : "yy-mm-dd"
		});

		savef();

		function savef() {
			setPanelScroll();
			$("#btnSaveFunctionPower").on("click", addFunctionPower);

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

		function addFunctionPower() {
			if ($("#userForm").validate().form()) {
				window.document.userForm.submit();
			}
		}
	</script>

</body>
</html>