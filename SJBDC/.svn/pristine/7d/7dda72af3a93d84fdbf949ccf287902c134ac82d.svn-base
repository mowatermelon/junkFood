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
		<title>武大吉奥GeoSmarter数据融合管理中心 - 设置权限</title>
		<meta charset="utf-8">
		<meta name="viewport"
			content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <script type="text/javascript">
		   $(document).ready(function(){
	     	$("#firstpane .menu_body:eq(4)").show();
		        $("#firstpane a.menu_head").click(function(){
		            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
		            $(this).siblings().removeClass("current");
		        });
		});
		</script>
		<jsp:include page="/modular/system/inc/common-felib.jsp" />

		<link rel="stylesheet"
			href="<%=basePath%>/modular/system/platform-admin/css/page-common.css" />

		<!-- 加载树的js -->
		<link rel="stylesheet"
			href="modular/system/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css"
			type="text/css" />
		<script type="text/javascript"
			src="modular/system/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>

		<script type="text/javascript"
			src="modular/system/platform-admin/user/role/js/setRolePerm.js"></script>
	</head>
	<body>
	    <div class="clearfloat content">
	         <!--任务管理-右边栏-->
			<div class="plan-left">
			    <div class="plan-tltle">
					<h2 style="line-height:40px;">设置角色关联权限</h2>
				</div>
				<div class="task-cj">
						  <s:form name="setRolePermForm" class="form-horizontal"
						action="/user/role_setRolePerm.action" method="post">
		
						<!-- 所属系统 -->
						<div class="form-group">
							<label for="systemType" class="col-sm-2 control-label">
								所属系统
							</label>
							<div class="col-sm-5">
								<select class="form-control" id="menuSystemType"
									name="permissions.systemType" onchange="changNum(this.value)">
									<option value="DFSCenter">
										数据融合平台
									</option>
									<option value="DataServiceCenter">
										数据服务中心
									</option>
									<option value="DataCenterPortal">
										数据中心门户
									</option>
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
							<label for="systemType" class="col-sm-2 control-label">
								权限勾选
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
									<div>
									   <a class="task-but3" href="javascript:;"
											onclick="saveRolePerm()" style="margin-left:190px;"> 保存 </a>
										<a class="task-but4" href="javascript:;"
											onclick="location='<%=basePath%>user/role_list.action'">返回 </a>
									
									</div>
								</div>
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
        $("#btnSaveRolePerm").on("click",saveRolePerm);
        
        
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


    
    function saveRolePerm(){
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