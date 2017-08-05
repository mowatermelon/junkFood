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
    <title>武大吉奥GeoSmarter数据融合管理中心 - 机构管理</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<script src="<%=_path %>/js/layer/layer.js"></script>
</head>
<body>
    <div class="clearfloat content">
       <div class="plan-left">
           <div class="plan-tltle"><h2>机构管理</h2></div>
            <div class="task-gl">
               <s:form name="userForm" action="/user/org_list.action">
                 <div class="plan-tr clearfloat">
					<ul class="task-gl1">
						<li>机构名：<s:textfield name="organization.orgName" id="queryKeywordIpt"/> 
						</li>
						<li class="button-cx"><button type="submit">查询</button> 
						</li>
					</ul>
				</div>
				</s:form>
				<div class="clearfloat">
                <ul class="plan-ico">
                    <li><a href="<%=basePath %>user/org_gotoAdd.action"><img title="添加机构" src="<%=_path%>/images/ico/new.png">添加机构</a></li>
                </ul>
            	</div>
            	
            	<table id="tbTagEnum" border="0" cellspacing="0">
				<thead>
					<tr class="type">
                        <td>组织机构名称</td>
                        <td>组织机构编码</td>
						<td>组织机构电话</td>
						<td>组织机构地址</td>
						<td>上级组织机构名称</td>
						<td>操作</td>
					</tr>
				</thead>
				<tbody>
					<s:iterator var="o" value="orgList">
						<tr>
							<s:hidden value="#o.orgID"/>
							<td><s:property value="#o.orgName" /></td>
							<td><s:property value="#o.orgCode" /></td>												
							<td><s:property value="#o.orgTelephone" /></td>							
							<td><s:property value="#o.orgAddress" /></td>
							<td>
							<s:if test='("root").equals(#o.orgParent.orgID)'>
							顶层机构
							</s:if>
							<s:else><s:property value="#o.orgParent.orgName"/></s:else>
							
							
							<td>
								<a href="<%=basePath %>user/org_gotoUpdate.action?orgID=<s:property value="#o.orgID" />" style="margin-top:5px;">
									<img title="修改" src="<%=_path %>/modular/system/theme/default/img/edit.png">
								</a> 
								<a href="javascript:void(0)" onclick="del('<s:property value="#o.orgID" />');" style="margin-top:5px;">
									<img title="删除" src="<%=_path %>/modular/system/theme/default/img/delete.png">
								</a>
								<a href="<%=basePath %>user/org_gotoSetOrgAdmin.action?orgID=<s:property value="#o.orgID" />" style="margin-top:5px;">
									<img title="设置机构成员" src="<%=_path %>/modular/system/theme/default/img/setting.png">
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

	function del(id) {
			 //询问框
         layer.confirm('删除后不可恢复，您确定删除？', {
              btn: ['确认','取消'], //按钮
              shade: false //不显示遮罩
             }, function(){
         window.location.href='<%=basePath %>/user/org_delete.action?orgID='+id;
            layer.msg('删除成功', {icon: 1});
           }, function(){
            layer.msg('删除失败', {icon: 2});
          });
	}
</script>
</body>
</html>