<%@ page contentType="text/html;charset=UTF-8" language="java"  import = "java.util.*"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ include file="/common/top.jsp"%>
<%@ include file="/common/left.jsp"%>
<%@ include file="/modular/paging/paging.jsp"%>
<!DOCTYPE html>

<%
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>

	<base href="<%=basePath %>">
    <title>武大吉奥GeoSmarter数据融合管理中心  - 用户管理</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
 	<script src="<%=_path %>/js/layer/layer.js"></script>
	<script type="text/javascript">
	$(document).ready(function(){
	    $("#firstpane .menu_body:eq(4)").show();
		        $("#firstpane a.menu_head").click(function(){
		            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
		            $(this).siblings().removeClass("current");
		        });
		var currentIndex = "${currentPage}";
		var totalCount = "${totalCount}";
		var pageSize = "${pageSize}";
		var pageCount = (totalCount % pageSize == 0 ? totalCount / pageSize
					: Math.ceil(totalCount / pageSize));
		var countArray = new Array(pageCount);
		pagination(currentIndex,countArray);//添加分页页码
	});
	
	function gotoPage(index){
		location.href="<%=basePath%>user/user_list.action?pageNo="+index;
	}
		
		
	//删除
	//function del(id){
	//	if(confirm("删除后不可恢复，您确定删除？")){
	//		window.location.href='<%=basePath %>/user/user_delete.action?userID='+id;
	//	}
	
	//}
	
	//删除
function deleteTask(id){
     //询问框
layer.confirm('删除后不可恢复，您确定删除？', {
    btn: ['确认','取消'], //按钮
    shade: false //不显示遮罩
}, function(){
    window.location.href='<%=basePath %>/user/user_delete.action?userID='+id;
    layer.msg('删除成功', {icon: 1});
}, function(){
    layer.msg('删除失败', {icon: 2});
});

}
	
	
	</script>
</head>
<body>
  <div class="clearfloat content">
      <div class="plan-left">
          <div class="plan-tltle"><h2>用户管理</h2></div>
          	<div class="task-gl">
          	 <s:form name="userForm" action="/user/user_list.action" >
          	  	<div class="plan-tr clearfloat">
          	  		<ul class="task-gl1">
						<li>用户名：<s:textfield name="user.userLoginName" class="form-control input-sm" id="queryKeywordIpt" />
						</li>
						<li class="button-cx">
									<button type="submit">
										查询
									</button>
					</ul>
          	  	</div>
          	  </s:form>
          	  	<div class="clearfloat">
                <ul class="plan-ico">
                    <li><a href="<%=basePath %>user/user_gotoAdd.action"><img title="添加用户" src="<%=_path%>/images/ico/new.png">添加用户</a></li>
                </ul>
            </div>
          	  <table border="0" cellspacing="0">
              	<thead>  
                	<tr class="type">
                    	<td width="35%">用户名</td>
						<td width="25%">是否是超级管理员</td>
						<td width="25%">用户创建时间</td>
						<td width="15%">操作</td>
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
						<td><a href="<%=basePath %>user/user_gotoUpdate.action?userID=<s:property value="#u.userID" />" >
							<img title="修改" src="<%=basePath %>/modular/system/theme/default/img/edit.png">
						</a> 						
						<s:if test='#u.userUsesMark==1'>
						<a href="<%=basePath %>user/user_updateUsesMark.action?userID=<s:property value="#u.userID" />&usesMark=0" >
							<img title="禁用" src="<%=basePath %>/modular/system/theme/default/img/disabled.png">
						</a>
						</s:if>
						<s:else>
						<a href='<%=basePath %>user/user_updateUsesMark.action?userID=<s:property value="#u.userID" />&usesMark=1' >
							<img title="启用" src="<%=basePath %>/modular/system/theme/default/img/start.png">
						</a>
						</s:else>
						<a href="javascript:deleteTask('<s:property value="#u.userID" />');">
							<img title="删除" src="<%=basePath %>/modular/system/theme/default/img/delete.png">
						</a>
						</td>							
					</tr>
					</s:iterator>
				</tbody>
			</table>
			<div id="pagination" class="page"></div>
		</div>
	</div>
            
  </div>
  



</body>
</html>