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
    <script type="text/javascript" src="view/usersys/platform-admin/user/role/js/addRole.js"></script>

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
              <!--   <div class="currentPosition">
                    当前位置： <a href="#">首页</a> &gt <a href="#">综合运维管理系统</a> &gt
                    <a href="#">用户管理</a> &gt 设置机构管理员
                </div> -->

                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">基本信息</h3>

                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#basicInfoPanel" data-toggle="tab">基本信息</a></li>
                        <!-- <li><a href="#powerSetPanel" id="btnPerm" data-toggle="tab">权限设置</a></li> -->
                        <li><a href="#userSetPanel" id="btnUser" data-toggle="tab">用户设置</a></li>
                        <li><a href="#orgSetPanel" id="btnOrg" data-toggle="tab">组织机构设置</a></li>
                    </ul>

                    <div class="tab-content">

                        <!-- 基本信息面板内容 -->
                        <div class="tab-pane active" id="basicInfoPanel">
                        	<s:form name="roleForm" class="form-horizontal" action="user/role_save.action" method="post">
                               <!-- 添加隐藏域 -->
                               <s:hidden id ="roleID" name="role.roleID"/>
                                <div class="form-group">
                                    <label for="roleName" class="col-sm-2 control-label">角色名称</label>
                                    <div class="col-sm-3">
                                        <s:textfield name="role.roleName" class="form-control" id="roleName" />
                                    </div>
                                </div>

                                <!-- <div class="form-group">
                                    <label for="iptIsDefault" class="col-sm-2 control-label">是否默认</label>
                                    <div class="col-sm-3">
                                        <input id="iptIsDefault" type="checkbox">
                                    </div>
                                </div> -->

                                <div class="form-group">
                                    <label for="roleRemark" class="col-sm-2 control-label">说明</label>

                                    <div class="col-sm-9">
                                    
                                    	<s:textarea name="role.roleRemark"  id="roleRemark" class="form-control" rows="3" />
                                        <!-- <textarea name="role.roleRemark"  id="roleRemark" class="form-control" rows="3"></textarea> -->
                                    </div>
                                </div>

									<div class="form-group">
										<div class="col-sm-offset-2 col-sm-10">
											<button type="button" class="btn btn-default" id="btnSave"
												data-toggle="modal" data-target="#addFunctionWindow">提交</button>
											<button type="button" class="btn btn-default"
												onclick="location='user/role_list.action'">返回角色列表</button>
										</div>
									</div>

								</s:form>
                        </div>

                        <!-- 权限设置面板内容 -->
                        <div class="tab-pane" id="powerSetPanel">
								<s:form name="permForm" class="form-horizontal" action="user/perm_save.action" method="post">
								
								<!-- 隐藏域 ,获取角色ID-->
								<input type="hidden" name="roleID" id="permRoleID" />
								<table id ="perm" class="table table-condensed table-hover">
                                <thead>
										<tr>
											<th><input id="chkAllSelect" type="checkbox"></th>
											<!-- <th>权限ID</th> -->
											<th>权限类型</th>
											<th>权限名称</th>
											<th>系统类型</th>
											<th>操作</th>
										</tr>
									</thead>
                                <tbody>
                                </tbody>
                            </table>

									<div class="form-group">
										<div class="col-sm-offset-2 col-sm-10">
											<button type="button" class="btn btn-default" id="btnSave"
												data-toggle="modal" data-target="#addPermWindow">提交</button>
											<button type="button" class="btn btn-default"
												onclick="location='user/role_list.action'">返回角色列表</button>
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
											<input type="hidden" name="roleID" id="userRoleID"/>
												<!-- 隐藏域 -->
												<!-- <input type="hidden" name="car_type" 
													id="car_type_val" /><br /> <label for="selAllUser"
													class="col-sm-4 control-label">待选用户</label> -->
													
													<input type="hidden" name="userIDs" 
													id="rightUserList" /><br /> <label for="selAllUser"
													class="col-sm-4 control-label">待选用户</label>
												<div class="col-sm-8">


													<%-- <select  multiple="multiple" size="10" class="form-control" id="selAllUser">                                           
                                                <!-- <option value ="volvo">Volvo</option>
                                                <option value ="saab">Saab</option>
                                                <option value="opel">Opel</option>
                                                <option value="audi">Audi</option> -->
                                            </select> --%>

													<%-- <select multiple="multiple" size="10" class="form-control"
														class="form-control" id="car_type_list">

													</select> --%>
													
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
													<%-- <select multiple="multiple" size="10" class="form-control" id="selSelectedUser">
                                                <!-- <option value ="volvo">Volvo</option>
                                                <option value ="saab">Saab</option>
                                                <option value="opel">Opel</option>
                                                <option value="audi">Audi</option> -->
                                            </select> --%>

													<%-- <select id="car_type" multiple="multiple" size="10"
														class="form-control">

													</select> --%>
													
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
												onclick="location='user/role_list.action'">返回角色列表</button>
										</div>
									</div>
									
								</s:form>
							</div>
							
							
							 <!-- 组织机构设置面板内容 -->
                        <div class="tab-pane" id="orgSetPanel">
								<s:form name="orgForm" class="form-horizontal" action="user/org_saveOrgAssociationRole.action" method="post">
								
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
									
									
									<div class="zTreeDemoBackground left">
									
									<input type="hidden" name="orgID" id="organizationRoleID" /> 
									
									<!-- <input 
												id="citySel" type="text" readonly value=""
												style="width: 120px;" onclick="showMenu();" /> &nbsp; -->
												
												<ul id="treeDemo" class="ztree"  id="citySel" onclick="showMenu();"></ul>
												
												<!-- 
												<a 	id="menuBtn" href="#" onclick="showMenu(); return false;">请指定机构</a> -->
										
									</div> 
									


									<!-- <div class="zTreeDemoBackground left">
										<ul id="treeDemo" class="ztree"></ul>
									</div> -->



									<div class="form-group">
										<div class="col-sm-offset-2 col-sm-10">
											<button type="button" class="btn btn-default" id="btnSave"
												data-toggle="modal" data-target="#addOrgWindow">提交</button>
											<button type="button" class="btn btn-default"
												onclick="location='user/role_list.action'">返回角色列表</button>
										</div>
									</div>
									
								</s:form>
                        </div>
                        
                        
					</div>                 
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
	
	

<!-- 权限是否删除窗口 -->
	<div class="modal fade" id="deletePermWindow" tabindex="-1"
		role="dialog">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
					<h4 class="modal-title">删除权限</h4>
				</div>
				<div class="modal-body"></div>
				<div class="modal-footer">
					<button id="btnDeletePerm" type="button"
						class="btn btn-primary" data-dismiss="modal">确认删除</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">放弃</button>
				</div>
			</div>
		</div>
	</div>
	

<!-- 角色是否继续窗口 -->
	<div class="modal fade" id="addFunctionWindow" tabindex="-1"
		role="dialog">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
					<h4 class="modal-title">添加角色</h4>
				</div>
				<div class="modal-body">


				</div>
				<div class="modal-footer">
					<button id="btnSaveFunctionPower" type="button"
						class="btn btn-primary" data-dismiss="modal">确认保存</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">放弃</button>
				</div>
			</div>
		</div>
	</div>
	
	
	<!-- 权限是否继续窗口 -->
	<div class="modal fade" id="addPermWindow" tabindex="-1"
		role="dialog">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
					<h4 class="modal-title">添加权限</h4>
				</div>
				<div class="modal-body">


				</div>
				<div class="modal-footer">
					<button id="btnSavePerm" type="button"
						class="btn btn-primary" data-dismiss="modal">确认保存</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">放弃</button>
				</div>
			</div>
		</div>
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
	
	
	<!-- 用户是否继续窗口 -->
	<div class="modal fade" id="addOrgWindow" tabindex="-1"
		role="dialog">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
					<h4 class="modal-title">添加组织机构</h4>
				</div>
				<div class="modal-body">


				</div>
				<div class="modal-footer">
					<button id="btnSaveOrg" type="button"
						class="btn btn-primary" data-dismiss="modal">确认保存</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">放弃</button>
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
        window.document.roleForm.submit();
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
    	window.location.href='<%=basePath %>/user/perm_delete.action?permID='+delPermID;
    }

</script>

</body>
</html>