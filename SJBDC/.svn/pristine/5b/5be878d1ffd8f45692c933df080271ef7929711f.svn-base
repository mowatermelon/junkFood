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

    <link rel="stylesheet" href="<%=basePath %>/view/usersys/platform-admin/css/page-common.css" />
    <!-- 引用，关联用户，权限的外部JS -->
    <%-- <script type="text/javascript" src="platform-admin/user/role/js/addRole.js"></script> --%>

	<script type="text/javascript" src="view/usersys/platform-admin/user/organization/js/addUser.js"></script>
	<!-- 加载树的js -->
	<link rel="stylesheet" href="view/usersys/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css" type="text/css" />        
    <!-- <link rel="stylesheet" href="fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle-tlb.css" type="text/css" /> --> 
    <script type="text/javascript" src="view/usersys/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>

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
               <!--  <div class="currentPosition">
                    当前位置： <a href="#">首页</a> &gt <a href="#">综合运维管理系统</a> &gt
                    <a href="#">用户管理</a> &gt 设置组织机构管理员
                </div> -->

                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">设置组织机构管理员</h3>

                   <!--  <ul class="nav nav-tabs">
                        <li><a href="#userSetPanel" id="btnUser" data-toggle="tab">用户设置</a></li>
                    </ul>
					
					 
                    <div class="tab-content"> -->


                        <!-- 用户设置面板内容 -->
							<div class="tab-pane" id="userSetPanel">
								<s:form name="orgForm" class="form-horizontal"
									action="user/org_setOrgAdmin.action" method="post">
									<div class="row">

										<div class="col-sm-5">
											<div class="form-group">
											
											<s:hidden name="organization.orgID" class="form-control" id="orgID" ></s:hidden>
											<!-- 隐藏域 ,获取角色ID-->
											<input type="hidden" name="roleID" id="userRoleID"/>
												<!-- 隐藏域 -->
													<input type="hidden" name="userIDs" 
													id="rightUserList" /><br /> <label for="selAllUser"
													class="col-sm-4 control-label">待选用户</label>
												<div class="col-sm-8">
													
													<select multiple="multiple" size="10" class="form-control"
														class="form-control" id="leftUserList">

													</select>
												</div>
											</div>
										</div>

										<div class="col-sm-2">
											<button type="submit" class="btn btn-default">- &gt
											</button>
											<br />
											<button type="button" class="btn btn-default">&lt -
											</button>
										</div>

										<div class="col-sm-5">
											<div class="form-group">
												<label for="selSelectedUser" class="col-sm-4 control-label">已选择用户</label>
												<div class="col-sm-8">
													
													<select id="userList" multiple="multiple" size="10"
														class="form-control">

													</select>
													
												</div>
											</div>
										</div>
									</div>

									<div class="form-group">
										<div class="col-sm-offset-2 col-sm-10">
											<button type="button" class="btn btn-default" id="btnSave"
												data-toggle="modal" data-target="#addUserWindow">提交</button>
											<button type="button" class="btn btn-default"
												onclick="location='user/org_list.action'">返回组织机构列表</button>
										</div>
									</div>
									
								</s:form>
							</div>
							
                        
                        
					<!-- </div>               
                </div> -->  
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
	<div class="modal fade" id="addUserWindow" tabindex="-1"
		role="dialog">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
					<h4 class="modal-title">添加用户</h4>
				</div>
				<div class="modal-body">


				</div>
				<div class="modal-footer">
					<button id="btnSaveUser" type="button"
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