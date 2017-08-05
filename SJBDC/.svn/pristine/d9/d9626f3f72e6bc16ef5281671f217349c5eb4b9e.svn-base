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
              <!--   <!-- 当前位置 -->
                <div class="currentPosition"> 当前位置： <a href="#">首页</a> &gt <a href="#">综合运维管理系统</a> &gt <a href="#">用户管理</a> &gt 用户列表</div> -->
                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">用户列表</h3>
					<div class="listTopToolbar">
						<s:form name="userForm" action="user/user_list.action" class="form-inline pull-left" >
                            <div class="form-group">
                                <label for="queryKeywordIpt">根据角色名查询</label>                               
                            	<s:textfield name="user.userLoginName" class="form-control" id="queryKeywordIpt" placeholder="请输入查询关键字" />
                            </div>
                            <button type="submit" class="btn btn-default">查询</button>                        
						</s:form>
                        <a href="user/user_gotoAdd.action" class="btn btn-default pull-right">添加用户</a>
                    </div>
                    
                    <table class="table table-condensed table-hover">
                        <thead>
                        <tr>                                                     
							<th>用户名</th>
                            <th>是否是超级管理员</th>
							<th>用户创建时间</th>							
							<th>操作</th>
                        </tr>
                        </thead>
                        <tbody>             
						
						<s:iterator var="u" value="userList">
						<tr>
							<s:hidden value="#u.userID" />							
							<td><s:property value="#u.userLoginName" /></td>
																			
							<td>
        						<s:if test="#u.userIsSuperAdmin==1">系统超级管理员</s:if>
        						<s:elseif test="#u.manageOrg !=null && #u.manageOrg.size() >0">机构管理员</s:elseif>
        						<s:else>普通用户</s:else>							
							</td>
							<td><s:property value="#u.userCreateTime" /></td>	
														
							<td><a href="user/user_gotoUpdate.action?userID=<s:property value="#u.userID" />" >修改</a> 
							
							<s:if test='#u.userUsesMark==1'>
							<a href="user/user_updateUsesMark.action?userID=<s:property value="#u.userID" />&usesMark=0" >禁用</a>
							启用
							</s:if>
							<s:else>
							禁用
							<a href='user/user_updateUsesMark.action?userID=<s:property value="#u.userID" />&usesMark=1' >启用</a>
							</s:else>
							<%-- <a href="javascript:void(0)" id ="btnSave"  onclick='setDelMenu(\""+ <s:property value="#u.userID" /> +"\")' data-toggle="modal" data-target="#addFunctionWindow">删除</a> --%>
							
							<a href="javascript:void(0)" id ="btnSave"  onclick="setDelMenu('<s:property value="#u.userID" />');" data-toggle="modal" data-target="#addFunctionWindow">删除</a>
							<!-- <button type="button" class="btn btn-default" id ="btnSave" data-toggle="modal" data-target="#addFunctionWindow">提交</button> -->
							
							</td>							
						</tr>
						</s:iterator>				
                        </tbody>
                    </table>

						<div class="pull-right">
							<s:if test="currentPage>1">
								<a href="user/user_list.action">首页</a>
							</s:if>
							<s:else>首页</s:else>
							<s:if test="currentPage>1">
								<a href="user/user_list.action?pageNo=<s:property value='currentPage-1'/>">上一页</a>
							</s:if>
							<s:else>上一页</s:else>
							<s:if test="pageCount>currentPage">
								<a href="user/user_list.action?pageNo=<s:property value='pageNo'/>">下一页</a>
							</s:if>
							<s:else>下一页</s:else>
							<s:if test="currentPage<pageCount">
								<a href="user/user_list.action?pageNo=<s:property value="pageCount"/>">尾页</a>
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
    <!-- <div class="pageFooter clearfix">
        <div class="copyrightInfo">
            <p>Copyright  2014 GeoStar Inc. - 武大吉奥信息技术有限公司 - 鄂ICP备05007169号 </p>
        </div>
    </div> -->

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
					<h4 class="modal-title">删除用户</h4>
				</div>
				<div class="modal-body">


				</div>
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
	var delUserID = null;
	
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
	function setDelMenu(userID){
		delUserID = userID;
	}
	
	function addFunctionPower() {
		 //window.document.userForm.submit();
		 //alert("userID:"+<s:property value="#u.userID" />);
		window.location.href='<%=basePath %>/user/user_delete.action?userID='+delUserID;
		//alert("添加成功");
	}

	//$('.mainPanel').slimScroll();
</script>
</body>
</html>