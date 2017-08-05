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
    <title>武大吉奥GIS云平台 - 综合运维管理系统</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

	<jsp:include page="/view/usersys/inc/common-felib.jsp"/>

    <link rel="stylesheet" href="<%=basePath %>/view/usersys//platform-admin/css/page-common.css" />

	<!-- 加载树的js -->
	<link rel="stylesheet" href="view/usersys/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css" type="text/css" />        
    <!-- <link rel="stylesheet" href="fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle-tlb.css" type="text/css" /> --> 
    <script type="text/javascript" src="view/usersys/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>
    <!-- 引用，关联组织机构的外部JS -->
    <%-- <script type="text/javascript" src="platform-admin/user/role/js/updateOrg.js"></script>    
    <script type="text/javascript" src="platform-admin/user/role/js/addRole.js"></script> --%>
    
    <script type="text/javascript" src="view/usersys/platform-admin/user/role/js/setRolePerm.js"></script>
    

</head>
<body>

<div class="pageContainer">

    <!-- 页面头部 -->
    <%-- <div class="pageHeader">

        <!-- 页面顶部 -->
        <div class="siteTop">
            <jsp:include page="/view/usersys/platform-admin/inc/siteTop.jsp"/>
        </div>

        <div class="headerContainer">
             <jsp:include page="/view/usersys/platform-admin/inc/siteHeader.jsp"/>
        </div>

    </div> --%>

    <!-- 页面主体 -->
    <div class="pageBody">

        <!-- 侧面板 -->
        <%-- <div class="sidePanel">
            <div class="sidePanelContainer">
                <jsp:include page="/view/usersys/platform-admin/inc/sidePanel.jsp"/>
            </div>

        </div> --%>

        <!-- 主面板 -->
        <div class="mainPanel">

            <div class="mainPanelContainer">
                <!-- 当前位置 -->
                <!-- <div class="currentPosition">
                    当前位置： <a href="#">首页</a> &gt <a href="#">综合运维管理系统</a> &gt
                    <a href="#">用户管理</a> &gt 设置角色关联权限
                </div> -->

                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">设置角色关联权限</h3>

                    <!-- <ul class="nav nav-tabs">
                        <li ><a href="#orgSetPanel" id="btnOrg" data-toggle="tab">组织机构设置</a></li>
                    </ul> -->
                    
                    <!-- 所属系统 -->
							<div class="form-group">
								<label for="systemType" class="col-sm-2 control-label">所属系统</label>
								<div class="col-sm-3">
									<select class="form-control" id="menuSystemType"
										name="permissions.systemType" onchange="changNum(this.value)">
										<option value="">GeoCloud全部系统</option>
										<option value="GeoCloud门户">GeoCloud门户</option>
										<option value="GeoCloud运维">GeoCloud运维</option>
										<option value="GeoCloud基础资源">GeoCloud基础资源</option>
									</select>

								</div>
							</div>
							</br>
							

                    <!-- <div class="tab-content"> -->

							<!-- 组织机构设置面板内容 -->
                        <div class="tab-pane" id="orgSetPanel">
								<s:form name="setRolePermForm" class="form-horizontal" action="user/role_setRolePerm.action" method="post">
								<%-- <s:form name="orgForm" class="form-horizontal" action="user/org_updateOrgAssociationRole.action" method="post"> --%> 
								
								
								<!-- 隐藏域 ,获取角色ID-->
								<%-- <s:hidden name="role.roleID" id="roleID"/> --%>
								<s:hidden name="roleID" id="roleID"/>
								
								<%-- <!-- 隐藏域 ,获取角色ID-->
								<s:hidden name="roleID" id="orgRoleID" /> --%>
								
									<div class="zTreeDemoBackground left">
									
									<input type="hidden" name="permIDs" id="rolePermID" /> 
												<ul id="treeDemo" class="ztree"  id="citySel" ></ul>
												
									</div> 
									



									<div class="form-group">
										<div class="col-sm-offset-2 col-sm-10">
											<button type="button" class="btn btn-default" id="btnSave"
												data-toggle="modal" data-target="#addRolePermWindow">提交</button>
											<button type="button" class="btn btn-default"
												onclick="location='user/role_list.action'">返回角色列表</button>
										</div>
									</div>
									
								</s:form>
                        </div>
                        
					<!-- </div>  -->                
                </div>
            </div>


        </div>

    </div>

    <!-- 页面尾部 -->
    <div class="pageFooter clearfix">
        <div class="copyrightInfo">
            <p>Copyright  2014 GeoStar Inc. - 武大吉奥信息技术有限公司 - 鄂ICP备05007169号 </p>
        </div>

    </div>

</div>


	<!-- 机构下拉菜单内容 -->
	<div id="menuContent" class="menuContent"
		style="display: none; position: absolute;">
		<ul id="treeDemo" class="ztree"
			style="margin-top: 0; width: 180px; height: 200px; background: white; overflow-y: auto;"></ul>
	</div>
	
	
	<!-- 用户是否继续窗口 -->
	<div class="modal fade" id="addRolePermWindow" tabindex="-1"
		role="dialog">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
					<h4 class="modal-title">设置权限</h4>
				</div>
				<div class="modal-body">


				</div>
				<div class="modal-footer">
					<button id="btnSaveRolePerm" type="button"
						class="btn btn-primary" data-dismiss="modal">确认保存</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">放弃</button>
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
    

</script>

</body>
</html>