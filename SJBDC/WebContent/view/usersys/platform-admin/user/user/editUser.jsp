 <%@ page contentType="text/html;charset=UTF-8" language="java" import = "java.util.*" %>
<%@ taglib uri="/struts-tags" prefix="s" %>

<!DOCTYPE html>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
	//chenzhi 2015.8.20 begin
	pageContext.setAttribute("basePath", basePath);
	//chenzhi 2015.8.20 end
%>

<html>
<head>
	<base href="<%=basePath %>">
    <title>GeoSmarter数据服务中心-用户</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <jsp:include page="/view/usersys/inc/common-felib.jsp"/>
	<link rel="stylesheet" href="view/usersys/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css" type="text/css" />        
    <script type="text/javascript" src="view/usersys/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>
    
    <link rel="stylesheet" href="<%=basePath %>/view/usersys/platform-admin/css/page-common.css" />    
    <script type="text/javascript" src="view/usersys/platform-admin/user/user/js/updateUser.js"></script>
    <link rel="stylesheet" href="view/usersys/theme/default/css/date.css" type="text/css">
	<link rel="stylesheet" href="view/usersys/theme/default/css/style.css" type="text/css">
	
	<script type="text/javascript" src="view/usersys/fe-lib/jquery-validation/jquery.validate.min.js"></script>
	<script type="text/javascript" src="view/usersys/fe-lib/jquery-validation/additional-methods.js"></script>
	<script type="text/javascript" src="view/usersys/fe-lib/jquery-validation/messages_zh.js"></script>

	<script type="text/javascript">
	$(function() {
		$('.form-horizontal').validate({
	         errorElement : 'span',
	         errorClass : 'help-block',
	         focusInvalid : true,
	         rules : {
	             'user.userLoginName' : {
	                 required : true,
	              },
	             'user.userPassword':{
	             	required : true,
	             	onlyLetterNumber:true
	             },
	             'user.userUsesMark':{
	             	required : true
	             },
	             'user.userInfo.userEmail':{
	             	required:true,
	             	email:true
	             },
	             'user.userEnabledTime':{
	             	required:true,
	             	futureNow:true
	             },
	             'user.userInvalidTime':{
	             	required:true,
	             	futureNow:true
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
</head>
<body>
	<%-- <div class="position">
		<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">系统管理</a> -> 修改用户</span> 
	</div> --%>
	<div class="system-edit">
		<h4>修改用户</h4>
		<hr/>
		<s:form id="updateUserformID" name="userForm" class="form-horizontal"  action="user/user_update.action" >
            <div class="form-group">
                <label for="userLoginName" class="col-sm-2 control-label">用户登录名称</label>
                <div class="col-sm-5">   
                     <s:hidden name="user.userID" class="form-control" id="userID" ></s:hidden>
                     <s:hidden name="user.userInfo.userID" cssClass="form-control" id="userInfo_userID" ></s:hidden>
                     <s:textfield name="user.userLoginName" class="form-control" id="userLoginName" readonly="true" />
                </div>
            </div>
            <div class="form-group">
                <label for="userPassword" class="col-sm-2 control-label">用户登录密码</label>
                <div class="col-sm-5">                                
                     ******&nbsp;&nbsp;&nbsp;<a href="user/user_resetUserPassword.action?userID=<s:property value='user.userID'/>">重置密码</a>
                     <%--<s:textfield name="user.userPassword" class="form-control" id="userPassword"    />--%>
                </div>
            </div>
            <div class="form-group">
                <label for="userEmail" class="col-sm-2 control-label">用户邮箱</label>
                <div class="col-sm-5">                                
                     <s:textfield name="user.userInfo.userEmail" class="form-control" id="userEmail"/>
                </div>
            </div>
			<div class="form-group">
				<label for="userIsSuperAdmin" class="col-sm-2 control-label">用户是否是超级管理员</label>
				<div class="col-sm-5">
					<label> <input type="radio"
						name="user.userIsSuperAdmin" id="user.userIsSuperAdmin"
						value="1" disabled <s:if test='user.userIsSuperAdmin == "1"'>checked</s:if>> 是
					</label> <label> <input type="radio"
						name="user.userIsSuperAdmin" id="user.userIsSuperAdmin"
						value="0" disabled <s:if test='user.userIsSuperAdmin == "0"'>checked</s:if>> 否
					</label>
				</div>
			</div>
            <div class="form-group">
               <label for="userEnabledTime" class="col-sm-2 control-label">用户激活时间</label>
               <div class="col-sm-5">
                    <s:textfield name="user.userEnabledTime" class="form-control" id="userEnabledTime" />
               </div>
            </div>
			<div class="form-group">
                <label for="userInvalidTime" class="col-sm-2 control-label">用户失效时间</label>
                <div class="col-sm-5">
                     <s:textfield name="user.userInvalidTime" class="form-control" id="userInvalidTime" />
                </div>
            </div>

			<div class="form-group">
					<label for="iptOrganization" class="col-sm-2 control-label">所属机构</label>
					<div class="col-sm-5">
						<input type="hidden" name="userID" id="getUserID" /> 
						<input type="hidden" name="orgID" id="orgID" value="<s:property value="user.organziationID"/>"/> 	  
						<input id="citySel" type="text" readonly value="<s:property value="user.organziationName"/>" class="form-control"
							 onclick="showMenu();" />
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
						<a class="btn btn-default button-back" href="<%=basePath %>user/user_list.action" >
						<i class="glyphicon glyphicon-arrow-left"></i> 返回 
						</a>
						<a class="btn btn-primary button-submit" href="javascript:;" id="btnSaveFunctionPower">
						<i class="glyphicon glyphicon-floppy-disk"></i> 保存
						</a>
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
    setPanelScroll();
    function setPanelScroll() {
        $('.sidePanelContainer').slimScroll({
            width: $('.sidePanel').width(),
            height: $('.sidePanel').height()
        });
        $('.mainPanelContainer').slimScroll({
            width: $('.mainPanel').width(),
            height: $('.mainPanel').height()
        });
    }
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
  
    initPage();

    function initPage() {
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
        $('.form-horizontal').submit();
        //window.document.userForm.submit();
        //alert("添加成功");
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
	</SCRIPT> 
	
	-->
</body>
</html>