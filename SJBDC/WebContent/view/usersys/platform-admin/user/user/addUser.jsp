<%@ page contentType="text/html;charset=UTF-8" language="java" import = "java.util.*" %>
<%@ taglib uri="/struts-tags" prefix="s" %>

<!DOCTYPE html>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

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
    <script type="text/javascript" src="view/usersys/platform-admin/user/user/js/addUser.js"></script>
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
		<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">系统管理</a> -> 添加用户</span> 
	</div> --%>
	<div class="system-edit">
		<h4>添加用户</h4>
		<hr/>
		<s:form name="userForm" class="form-horizontal" action="user/user_save.action" method="post">
           <div class="form-group">
               <label for="userLoginName" class="col-sm-2 control-label">用户登录名称</label>
               <div class="col-sm-5">                                
                    <s:textfield name="user.userLoginName" class="form-control" id="userLoginName" />
               </div>
           </div>
           <div class="form-group">
               <label for="userPassword" class="col-sm-2 control-label">用户登录密码</label>
               <div class="col-sm-5">                                
                    <s:password name="user.userPassword" class="form-control" id="userPassword" />
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
						value="1"> 是
					</label> <label> <input type="radio"
						name="user.userIsSuperAdmin" id="user.userIsSuperAdmin"
						value="0" checked> 否
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
						<input type="hidden" name="orgID" id="orgID" />
						<input id="citySel"	type="text" readonly value="" class="form-control"	onclick="showMenu();" />
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
						<a class="btn btn-default button-back" href="<%=basePath%>user/user_list.action">
						<i class="glyphicon glyphicon-arrow-left"></i> 返回 
						</a>
						<a class="btn btn-primary button-submit" href="javascript:;" id="btnSaveFunctionPower">
						<i class="glyphicon glyphicon-floppy-disk"></i> 保存
						</a>
						<a class="btn btn-success button-continue" style="display:none;" href="javascript:;">
						<i class="glyphicon glyphicon-thumbs-up"></i> 继续
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
		
</body>
</html>