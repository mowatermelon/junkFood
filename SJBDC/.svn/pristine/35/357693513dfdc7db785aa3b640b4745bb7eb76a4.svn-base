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
                <!-- <div class="currentPosition">
                    当前位置： <a href="#">首页</a> &gt <a href="#">综合运维管理系统</a> &gt
                    <a href="#">用户管理</a> &gt 机构列表
                </div>
 -->
                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">机构列表</h3>
					<div class="listTopToolbar">
						<s:form name="userForm" action="user/org_list.action" class="form-inline pull-left" >
                        
                            <div class="form-group">
                                <label for="queryKeywordIpt">根据组织机构名查询</label>                               
                            	<s:textfield name="organization.orgName" class="form-control" id="queryKeywordIpt" placeholder="请输入查询关键字" />
                            </div>
                            <button type="submit" class="btn btn-default">查询</button>                        
						</s:form>

                        <a href="user/org_gotoAdd.action" class="btn btn-default pull-right">添加组织机构</a>
                    </div>
                    
                    <table class="table table-condensed table-hover">
                        
                        
                        <thead>
                        <tr>                                                     
                            <th>组织机构名称</th>
                            <th>组织机构编码</th>
							<th>组织机构电话</th>
							<th>组织机构地址</th>
							<th>上级组织机构名称</th>
							<th>操作</th>
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
							<a href="user/org_gotoUpdate.action?orgID=<s:property value="#o.orgID" />"" >修改</a> 
							<%-- <a href="user/org_delete.action?orgID=<s:property value="#o.orgID" />" >删除</a> --%>
							<!-- <button type="button" class="btn btn-default" id ="btnSave" data-toggle="modal" data-target="#addFunctionWindow" onclick="location='user/user_list.action'">提交</button> -->
							<a href="javascript:void(0)" id ="btnSave"  onclick="setDelUser('<s:property value="#o.orgID" />');" data-toggle="modal" data-target="#addFunctionWindow">删除</a>
							<a href="user/org_gotoSetOrgAdmin.action?orgID=<s:property value="#o.orgID" />"" >设置机构管理员</a> 
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
								<a href="user/org_list.action">首页</a>
							</s:if>
							<s:else>首页</s:else>
							<s:if test="currentPage>1">
								<a href="user/org_list.action?pageNo=<s:property value='currentPage-1'/>">上一页</a>
							</s:if>
							<s:else>上一页</s:else>
							<s:if test="pageCount>currentPage">
								<a href="user/org_list.action?pageNo=<s:property value='pageNo'/>">下一页</a>
							</s:if>
							<s:else>下一页</s:else>
							<s:if test="currentPage<pageCount">
								<a href="user/org_list.action?pageNo=<s:property value="pageCount"/>">尾页</a>
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
					<h4 class="modal-title">删除组织机构</h4>
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
/*     setPanelScroll();
    function setPanelScroll(){
        $('.sidePanelContainer').slimScroll({
            width:$('.sidePanel').width(),
            height:$('.sidePanel').height()
        });
        $('.mainPanelContainer').slimScroll({
            width:$('.mainPanel').width(),
            height:$('.mainPanel').height()
        });
    } */
    
    
  	//定义全局变量，暂时存放待删除的菜单ID
	var delOrgID = null; 
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
	function setDelUser(orgID){
		delOrgID = orgID;
	}
	
	function addFunctionPower() {
		 //window.document.userForm.submit();
		 //alert("userID:"+<s:property value="#u.userID" />);
		window.location.href='<%=basePath %>/user/org_delete.action?orgID='+delOrgID;
		//alert("添加成功");
	}
	
    //$('.mainPanel').slimScroll();
</script>
</body>
</html>