<%@ page contentType="text/html;charset=UTF-8" language="java"  import = "java.util.*"%>

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
             <!--    <div class="currentPosition">
                    当前位置： <a href="#">首页</a> &gt <a href="#">综合运维管理系统</a> &gt
                    <a href="#">用户管理</a> &gt 角色列表
                </div>
 -->
                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">角色列表</h3>
                    
                  <div class="listTopToolbar">
						<s:form name="userForm" action="user/role_list.action" class="form-inline pull-left" >
                        
                            <div class="form-group">
                                <label for="queryKeywordIpt">根据角色名查询</label>                               
                            	<s:textfield name="role.roleName" class="form-control" id="queryKeywordIpt" placeholder="请输入查询关键字" />
                            </div>
                            <button type="submit" class="btn btn-default">查询</button>                        
						</s:form>

                        <a href="user/role_gotoAdd.action" class="btn btn-default pull-right">添加角色</a>
                    </div>

                    <table class="table table-condensed table-hover">
                            <thead>
                        <tr>                                                     
							<th>角色名称</th>
                            <th>角色启用备注</th>
							<th>角色备注</th>							
							<th>操作</th>
                        </tr>
                        </thead>
                        <tbody>             
						
						<s:iterator var="r" value="roleList">
						<tr>
							
							<s:hidden value="#r.roleID" />
							<td><s:property value="#r.roleName" /></td>												
							<td><s:property value="#r.roleUsesMark" /></td>
							<td><s:property value="#r.roleRemark" /></td>						
							<td>
							<a href="user/role_gotoUpdate.action?roleID=<s:property value="#r.roleID" />" >修改</a> 
							
							<s:if test='#r.roleUsesMark==1'>
							<a href="user/role_updateUsesMark.action?roleID=<s:property value="#r.roleID" />&usesMark=0" >禁用</a>
							启用
							</s:if>
							<s:else>
							禁用
							<a href='user/role_updateUsesMark.action?roleID=<s:property value="#r.roleID" />&usesMark=1' >启用</a>
							</s:else>
							
							<a href="javascript:void(0)" id ="btnSave"  onclick="setDelRole('<s:property value="#r.roleID" />');" data-toggle="modal" data-target="#addFunctionWindow">删除</a>
							
							<a href="user/role_gotoSetOrgAdmin.action?roleID=<s:property value="#r.roleID" />"" >设置权限</a> 
							</td>							
						</tr>
						</s:iterator>
										
                        </tbody>
                    </table>
					<!-- 
                    <nav class="pull-right">
                        <ul class="pagination">
                            <li>
                                <a href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li>
                                <a href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
					 -->

						<div class="pull-right">
							<s:if test="currentPage>1">
								<a href="user/role_list.action">首页</a>
							</s:if>
							<s:else>首页</s:else>
							<s:if test="currentPage>1">
								<a href="user/role_list.action?pageNo=<s:property value='currentPage-1'/>">上一页</a>
							</s:if>
							<s:else>上一页</s:else>
							<s:if test="pageCount>currentPage">
								<a href="user/role_list.action?pageNo=<s:property value='pageNo'/>">下一页</a>
							</s:if>
							<s:else>下一页</s:else>
							<s:if test="currentPage<pageCount">
								<a href="user/role_list.action?pageNo=<s:property value="pageCount"/>">尾页</a>
							</s:if>
							<s:else>尾页</s:else>
							当前页：
							<s:property value="currentPage" />
							每一页有：
							<s:property value="pageSize" />
							条 总记录数：
							<s:property value="totalCount" />
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



	<!-- 是否删除窗口 -->
	<div class="modal fade" id="addFunctionWindow" tabindex="-1"
		role="dialog">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
					<h4 class="modal-title">删除角色</h4>
				</div>
				<div class="modal-body"></div>
				<div class="modal-footer">
					<button id="btnSaveFunctionPower" type="button"
						class="btn btn-primary" data-dismiss="modal">确认删除</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">放弃</button>
				</div>
			</div>
		</div>
	</div>
	

	<script>
    
    
    
  //定义全局变量，暂时存放待删除的菜单ID
	var delRoleID = null;
    initPage(); 

	function initPage() {
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

	
	
	//设置菜单ID
	function setDelRole(roleID){
		delRoleID = roleID;
	}
	
	function addFunctionPower() {
		 //window.document.userForm.submit();
		 //alert("userID:"+<s:property value="#u.userID" />);
		window.location.href='<%=basePath %>/user/role_delete.action?roleID='+delRoleID;
		//alert("添加成功");
	}
    //$('.mainPanel').slimScroll();
</script>
</body>
</html>