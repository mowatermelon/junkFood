<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="java.util.*"%>

<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ include file="/common/top.jsp"%>
<%@ include file="/common/left.jsp"%>
<%@ include file="/modular/paging/paging.jsp"%>
<!DOCTYPE html>

<%
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html>
	<head>

		<base href="<%=basePath%>">
		<title>武大吉奥GeoSmarter数据融合管理中心 - 角色管理</title>
		<meta charset="utf-8">
		<meta name="viewport"content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
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
			location.href="<%=basePath%>user/role_list.action?pageNo="+index;
		}
		
		//删除
		function del(id){
			 //询问框
         layer.confirm('删除后不可恢复，您确定删除？', {
              btn: ['确认','取消'], //按钮
              shade: false //不显示遮罩
             }, function(){
          window.location.href='<%=basePath %>/user/role_delete.action?roleID='+id;
            layer.msg('删除成功', {icon: 1});
           }, function(){
            layer.msg('删除失败', {icon: 2});
          });
		}
	</script>



	</head>
	<body>
		<div class="clearfloat content">
			<!--角色管理右边栏-->
			<div class="plan-left">
				<div class="plan-tltle">
					<h2>
						角色管理
					</h2>
				</div>
				<!--角色管理-->
				<div class="task-gl">
					<s:form name="userForm" action="/user/role_list.action">
						<div class="plan-tr clearfloat">
							<ul class="task-gl1">
								<li>
									根据角色名查询：
									<s:textfield name="role.roleName" id="queryKeywordIpt" />
								</li>
								<li class="button-cx">
									<button type="submit">
										查询
									</button>
								</li>
							</ul>
						</div>
					</s:form>
					<div class="clearfloat">
						<ul class="plan-ico">
							<li>
								<a href="<%=basePath%>user/role_gotoAdd.action"><img
										src="<%=_path%>/images/ico/new.png">添加角色</a>
							</li>
						</ul>
					</div>
					<table border="0" cellspacing="0">
						<tr class="type">
							<td>
								角色名称
							</td>
							<td>
								角色启用备注
							</td>
							<td>
								角色备注
							</td>
							<td>
								操作
							</td>
						</tr>
						<s:iterator var="r" value="roleList">
							<tr>
								<s:hidden value="#r.roleID" />
								<td>
									<s:property value="#r.roleName" />
								</td>
								<td>
									<s:property value="#r.roleUsesMark" />
								</td>
								<td>
									<s:property value="#r.roleRemark" />
								</td>
								<td>
									<a
										href="<%=basePath%>user/role_gotoUpdate.action?roleID=<s:property value="#r.roleID" />">
										<img src="<%=_path%>/images/ico/edit.png" title="修改"> </a>
									<s:if test='#r.roleUsesMark==1'>
										<a
											href="<%=basePath%>user/role_updateUsesMark.action?roleID=<s:property value="#r.roleID" />&usesMark=0">
											<img title="禁用"
												src="<%=basePath%>modular/system/theme/default/img/disabled.png"> </a>
									</s:if>
									<s:else>
										<a
											href='<%=basePath%>user/role_updateUsesMark.action?roleID=<s:property value="#r.roleID" />&usesMark=1'>
											<img title="启用"
												src="<%=basePath%>modular/system/theme/default/img/start.png"> </a>
									</s:else>
									<a href="javascript:del('<s:property value="#r.roleID" />');" id="btnSave"
										data-toggle="modal" data-target="#addFunctionWindow"><img
											src="<%=_path%>/images/ico/delete.png" title="删除"> </a>
									<a
										href="<%=basePath%>user/role_gotoSetOrgAdmin.action?roleID=<s:property value="#r.roleID" />"" ><img
											src="<%=_path%>/images/ico/purview.png" title="设置权限">
									</a>
								</td>
							</tr>
						</s:iterator>
					</table>

					<div id="pagination" class="page"></div>
				</div>
			</div>
		</div>
	</body>
</html>