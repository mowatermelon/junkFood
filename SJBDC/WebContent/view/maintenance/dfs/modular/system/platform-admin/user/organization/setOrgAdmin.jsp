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
		<title>武大吉奥GeoSmarter数据融合管理中心  - 设置组织机构成员</title>
		<meta charset="utf-8">
		<meta name="viewport"
			content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

		<jsp:include page="/modular/system/inc/common-felib.jsp" />


		<script type="text/javascript"
			src="<%=basePath %>modular/system/platform-admin/user/organization/js/addUser.js"></script>
		<!-- 加载树的js -->
		<link rel="stylesheet"
			href="<%=basePath %>modular/system/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css"
			type="text/css" />
		<script type="text/javascript"
			src="<%=basePath %>modular/system/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>

	</head>
	<body>
	    <div class="clearfloat content">
	      <div class="plan-left">
	         <div class="plan-tltle"><h2>设置组织机构成员</h2></div>
	          <div class="task-cj">
		           <s:form name="orgForm" 
					action="/user/org_setOrgAdmin.action" method="post">
					<input type="hidden" name="orgpath" id="orgpath" value="<%=basePath%>"/>
					<div class="row">
						<div class="col-sm-5">
							<div class="form-group">
								<s:hidden name="organization.orgID" class="form-control"
									id="orgID"></s:hidden>
								<!-- 隐藏域 ,获取角色ID-->
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
							<div>
								<a class="task-but3" href="javascript:;"
									id="btnSaveUser" style="margin-left:190px;">保存 </a>
								<a class="task-but4" href="javascript:;"
									onclick="location='<%=basePath %>user/org_list.action'">返回 </a>
							</div>
						</div>
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
		        init();
		});

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