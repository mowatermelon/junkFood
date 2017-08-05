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
    
	<link rel="stylesheet" href="view/usersys/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css" type="text/css" />        
    <script type="text/javascript" src="view/usersys/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>
	
    <link rel="stylesheet" href="<%=basePath %>/view/usersys/platform-admin/css/page-common.css" />
    
    <script type="text/javascript" src="view/usersys/platform-admin/user/organization/js/addOrganization.js"></script>
    
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
                    <a href="#">用户管理</a> &gt 修改机构
                </div>
 -->
                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">修改机构</h3>

					<s:form name="orgForm" class="form-horizontal" action="user/org_update.action" method="post">
                    
                    	 <s:hidden name="organization.orgID" class="form-control" id="orgID" ></s:hidden>
                        
                        <%-- <div class="form-group">
                            <label for="iptOrganization" class="col-sm-2 control-label">上级机构</label>

                            <div class="col-sm-3">
                                <select class="form-control" id="iptOrganization">
                                    <option>请指定机构</option>
                                    <option>某市某局</option>
                                </select>
                            </div>
                        </div> --%>

							<%-- <div class="form-group">
								<label for="iptOrganization" class="col-sm-2 control-label">上级机构</label>

								<div class="col-sm-3">
									<input name="organization.orgParent.orgID" id="citySel" type="text" readonly value=""
										style="width: 120px;" onclick="showMenu();" />
										
										<s:textfield name="organization.orgParent.orgID" id="citySel" readonly value=""
										style="width: 120px;" onclick="showMenu();" />
										 &nbsp;
										 <a	id="menuBtn" href="#" onclick="showMenu(); return false;">请指定机构</a>

									<!-- <select class="form-control" id="iptOrganization">
                                    <option>请指定机构</option>
                                    <option>某市某局</option>
                                </select> -->
								</div>
							</div> --%>

							<div class="form-group">
                            <label for="orgCode" class="col-sm-2 control-label">组织机构编码</label>
                            <div class="col-sm-3">
                            	<s:textfield name="organization.orgCode" class="form-control" id="orgCode" />
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="orgName" class="col-sm-2 control-label">组织机构名称</label>
                            <div class="col-sm-3">
                            	<s:textfield name="organization.orgName" class="form-control" id="orgName" />
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="orgRemark" class="col-sm-2 control-label">组织机构备注</label>
                            <div class="col-sm-3">
                            	<s:textfield name="organization.orgRemark" class="form-control" id="orgRemark" />
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="orgTelephone" class="col-sm-2 control-label">组织机构电话</label>
                            <div class="col-sm-3">
                            	<s:textfield name="organization.orgTelephone" class="form-control" id="orgTelephone" />
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="orgFax" class="col-sm-2 control-label">组织机构传真</label>
                            <div class="col-sm-3">
                            	<s:textfield name="organization.orgFax" class="form-control" id="orgFax" />
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="orgZipCode" class="col-sm-2 control-label">组织机构邮政编码</label>
                            <div class="col-sm-3">
                            	<s:textfield name="organization.orgZipCode" class="form-control" id="orgZipCode" />
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="orgAddress" class="col-sm-2 control-label">组织机构地址</label>
                            <div class="col-sm-8">
                            	<s:textfield name="organization.orgAddress" class="form-control" id="orgAddress" />
                            </div>
                        </div>
           
           				<div class="form-group">
								<label for="iptOrganization" class="col-sm-2 control-label">所属机构</label>

								<div class="col-sm-3">
										<input type="hidden" name="orgParentID" id="orgParentID" />
										<input id="citySel"
										type="text" readonly value="" style="width: 120px;"
										onclick="showMenu();" /> &nbsp;<a id="menuBtn" href="#"
										onclick="showMenu(); return false;">请指定机构</a>

								</div>
						</div>


                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">                                
                                <button type="button" class="btn btn-default" id ="btnSave" data-toggle="modal" data-target="#addFunctionWindow">提交</button>
                                <button type="button" class="btn btn-default" onclick="location='user/org_list.action'">返回组织机构列表</button>
                            </div>
                        </div>
                   </s:form>

                </div>
            </div>


        </div>

    </div>

    <!-- 页面尾部 -->
    <div class="pageFooter clearfix">
        <div class="copyrightInfo">
            <p>Copyright 2014 GeoStar Inc. - 武大吉奥信息技术有限公司 - 鄂ICP备05007169号 </p>
        </div>

    </div>

</div>


	<!-- 机构下拉菜单内容 -->
	<div id="menuContent" class="menuContent"
		style="display: none; position: absolute;">
		<ul id="treeDemo" class="ztree"
			style="margin-top: 0; width: 180px; height: 200px; background: white; overflow-y: auto;"></ul>
	</div>




	<!-- 是否继续窗口 -->
	<div class="modal fade" id="addFunctionWindow" tabindex="-1"
		role="dialog">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
					<h4 class="modal-title">添加机构</h4>
				</div>
				<div class="modal-body"></div>
				<div class="modal-footer">
					<button id="btnSaveFunctionPower" type="button"
						class="btn btn-primary" data-dismiss="modal">确认保存</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">放弃</button>
				</div>
			</div>
		</div>
	</div>



	<!-- 机构下拉菜单内容 -->
	<div id="menuContent" class="menuContent"
		style="display: none; position: absolute;">
		<ul id="treeDemo" class="ztree"
			style="margin-top: 0; width: 180px; height: 200px; background: white; overflow-y: auto;"></ul>
	</div>

	<script>
		setPanelScroll();
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
		//$('.mainPanel').slimScroll();

		$('#iptBirthday').datepicker({
			inline : true
		});

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

		function addFunctionPower() {
			window.document.orgForm.submit();
			//alert("添加成功");
		}
	</script>
	
	
	
</body>
</html>