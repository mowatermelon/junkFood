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
		<title>武大吉奥GeoSmarter数据融合管理中心 - 修改用户</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

		<jsp:include page="/modular/system/inc/common-felib.jsp" />
		<script type="text/javascript" src="<%=basePath %>js/jquery.validate.js"></script>
		<script type="text/javascript" src="<%=basePath %>js/additional-methods.js"></script>
		<script type="text/javascript" src="<%=basePath %>js/messages_cn.js"></script>
		<script type="text/javascript"src="<%=basePath %>modular/system/platform-admin/user/user/js/addUser.js"></script>
	
	  <!-- 加载树的js -->
		<link rel="stylesheet"
			href="<%=basePath %>modular/system/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css" type="text/css" />
		<script type="text/javascript" src="<%=basePath %>modular/system/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>
		<!-- 引用，关联组织机构的外部JS -->
		<script type="text/javascript" src="<%=basePath %>modular/system/platform-admin/user/role/js/updateOrg.js"></script>
		<script type="text/javascript" src="<%=basePath %>modular/system/platform-admin/user/role/js/updateRole.js"></script>
		

		<script type="text/javascript">
		   	$(document).ready(function(){
		     	$("#firstpane .menu_body:eq(4)").show();
		        $("#firstpane a.menu_head").click(function(){
		            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
		            $(this).siblings().removeClass("current");
		        });
		        initPage();
		        savef();
			});
		</script>
	
	
	</head>
	<body>
		<div class="clearfloat content">
			<!--任务管理-右边栏-->
			<div class="plan-left">
				<div class="plan-tltle">
					<h2>修改用户</h2>
				</div>
				<div class="task-cj">
					<!-- 基本信息面板内容 -->
					<div class="tab-pane active" id="basicInfoPanel">
						<s:form name="userForm" id="userForm" class="form-horizontal" action="/user/user_update.action">
							<div class="form-group">
								<label for="userLoginName" class="col-sm-2 control-label">
									用户登录名称
								</label>
								<div class="col-sm-5">
									<s:hidden name="user.userID" class="form-control" id="userID"></s:hidden>
									<s:hidden name="user.userInfo.userID" cssClass="form-control" id="userInfo_userID" ></s:hidden>
									<s:textfield name="user.userLoginName" class="form-control required" readonly="true" id="userLoginName" />
								</div>
							</div>
							<div class="form-group">
								<label for="userPassword" class="col-sm-2 control-label">
									用户登录密码
								</label>
								<div class="col-sm-5">
									******&nbsp;&nbsp;&nbsp;<a href="user/user_resetUserPassword.action?userID=<s:property value='user.userID'/>">重置密码</a>
								</div>
							</div>
							<div class="form-group">
								<label for="userEmail" class="col-sm-2 control-label">
									用户邮箱
								</label>
								<div class="col-sm-5">
									<s:textfield name="user.userInfo.userEmail" class="form-control required email" id="userEmail" />
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
									<s:textfield name="user.userEnabledTime" class="form-control required"
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
								<input type="hidden" name="userID" id="getUserID" />
								<input type="hidden" name="orgID" id="orgID" value="<s:property value='user.organziationID'/>"/>
								<div class="col-sm-5">
									<input id="citySel" type="text" readonly value="<s:property value='user.organziationName'/>"  onclick="showMenu();" class="form-control" />
								</div>
							</div>
							<div class="form-group">
							</div>
							<div class="form-group">
							</div>
						</s:form>
						<div>
							<div class="row">
								<div class="col-md-12">
									<div>
										<a class="task-but3" href="javascript:;" id="btnSaveFunctionPower" style="margin-left: 200px;">保存</a>
										<a class="task-but4" href="javascript:;"onclick="location='<%=basePath %>user/user_list.action'">返回 </a>
									</div>
								</div>
							</div>
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


		<script>
    
    //$('.mainPanel').slimScroll();

    $('#iptBirthday').datepicker({
        inline: true,
        dateFormat:"yy-mm-dd"
    });
    $('#userEnabledTime').datepicker({
        inline: true,
        dateFormat:"yy-mm-dd"
    });
    $('#userInvalidTime').datepicker({
        inline: true,
        dateFormat:"yy-mm-dd"
    });
    

    function savef() {
        setPanelScroll();
        $("#btnSaveFunctionPower").on("click", addFunctionPower);
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

    function addFunctionPower(){
    	if ($("#userForm").validate().form()) {
			window.document.userForm.submit();
		}
    }

</script>
		<!-- 
<SCRIPT type="text/javascript">
		var setting = {
			check: {
				enable: true,
				chkboxType: {"Y":"", "N":""}
			},
			view: {
				dblClickExpand: false
			},
			data: {
				simpleData: {
					enable: true
				}
			},
			callback: {
				beforeClick: beforeClick,
				onCheck: onCheck
			}
		};

		var zNodes =[
			{id:1, pId:0, name:"北京"},
			{id:2, pId:0, name:"天津"},
			{id:3, pId:0, name:"上海"},
			{id:6, pId:0, name:"重庆"},
			{id:4, pId:0, name:"河北省", open:true, nocheck:true},
			{id:41, pId:4, name:"石家庄"},
			{id:42, pId:4, name:"保定"},
			{id:43, pId:4, name:"邯郸"},
			{id:44, pId:4, name:"承德"},
			{id:5, pId:0, name:"广东省", open:true, nocheck:true},
			{id:51, pId:5, name:"广州"},
			{id:52, pId:5, name:"深圳"},
			{id:53, pId:5, name:"东莞"},
			{id:54, pId:5, name:"佛山"},
			{id:6, pId:0, name:"福建省", open:true, nocheck:true},
			{id:61, pId:6, name:"福州"},
			{id:62, pId:6, name:"厦门"},
			{id:63, pId:6, name:"泉州"},
			{id:64, pId:6, name:"三明"}
		 ];

		function beforeClick(treeId, treeNode) {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo");
			zTree.checkNode(treeNode, !treeNode.checked, null, true);
			return false;
		}
		
		function onCheck(e, treeId, treeNode) {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
			nodes = zTree.getCheckedNodes(true),
			v = "";
			for (var i=0, l=nodes.length; i<l; i++) {
				v += nodes[i].name + ",";
			}
			if (v.length > 0 ) v = v.substring(0, v.length-1);
			var cityObj = $("#citySel");
			cityObj.attr("value", v);
		}

		function showMenu() {
			var cityObj = $("#citySel");
			var cityOffset = $("#citySel").offset();
			$("#menuContent").css({left:cityOffset.left + "px", top:cityOffset.top + cityObj.outerHeight() + "px"}).slideDown("fast");

			$("body").bind("mousedown", onBodyDown);
		}
		function hideMenu() {
			$("#menuContent").fadeOut("fast");
			$("body").unbind("mousedown", onBodyDown);
		}
		function onBodyDown(event) {
			if (!(event.target.id == "menuBtn" || event.target.id == "citySel" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length>0)) {
				hideMenu();
			}
		}

		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo"), setting, zNodes);
		});
	</SCRIPT> -->

	</body>
</html>