<%@ page contentType="text/html;charset=UTF-8" language="java" import = "java.util.*" %>
<%@ include file="/common/top.jsp" %>
<%@ include file="/common/left.jsp" %>
<%@ taglib uri="/struts-tags" prefix="s" %>
<!DOCTYPE html>
<%
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
	<base href="<%=basePath %>">
    <title>武大吉奥GeoSmarter数据融合管理中心  - 修改组织机构</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

	<jsp:include page="/modular/system/inc/common-felib.jsp"/>
    
	<link rel="stylesheet" href="<%=basePath %>modular/system/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css" type="text/css" />        
    <script type="text/javascript" src="<%=basePath %>modular/system/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>
	
    
    <script type="text/javascript" src="<%=basePath %>modular/system/platform-admin/user/organization/js/addOrganization.js"></script>
</head>


<body>
        <div class="clearfloat content">
            <div class="plan-left">
               <div class="plan-tltle"><h2>修改组织机构</h2></div>
               <div class="task-cj">
                   <s:form name="orgForm" class="form-horizontal" action="/user/org_update.action" method="post">
                   	<input type="hidden" name="orgpath" id="orgpath" value="<%=basePath%>"/>
				<s:hidden name="organization.orgID" class="form-control" id="orgID" ></s:hidden>
					
					<div class="form-group">
						<label for="orgCode" class="col-sm-2 control-label">
							组织机构编码
						</label>
						<div class="col-sm-5">
							<s:textfield name="organization.orgCode" class="form-control"
								id="orgCode" />
						</div>
					</div>
	
					<div class="form-group">
						<label for="orgName" class="col-sm-2 control-label">
							组织机构名称
						</label>
						<div class="col-sm-5">
							<s:textfield name="organization.orgName" class="form-control"
								id="orgName" />
						</div>
					</div>
	
					<div class="form-group">
						<label for="orgRemark" class="col-sm-2 control-label">
							组织机构备注
						</label>
						<div class="col-sm-5">
							<s:textfield name="organization.orgRemark" class="form-control"
								id="orgRemark" />
						</div>
					</div>
	
					<div class="form-group">
						<label for="orgTelephone" class="col-sm-2 control-label">
							组织机构电话
						</label>
						<div class="col-sm-5">
							<s:textfield name="organization.orgTelephone" class="form-control"
								id="orgTelephone" />
						</div>
					</div>
	
					<div class="form-group">
						<label for="orgFax" class="col-sm-2 control-label">
							组织机构传真
						</label>
						<div class="col-sm-5">
							<s:textfield name="organization.orgFax" class="form-control"
								id="orgFax" />
						</div>
					</div>
	
					<div class="form-group">
						<label for="orgZipCode" class="col-sm-2 control-label">
							组织机构邮政编码
						</label>
						<div class="col-sm-5">
							<s:textfield name="organization.orgZipCode" class="form-control"
								id="orgZipCode" />
						</div>
					</div>
	
					<div class="form-group">
						<label for="orgAddress" class="col-sm-2 control-label">
							组织机构地址
						</label>
						<div class="col-sm-5">
							<s:textfield name="organization.orgAddress" class="form-control"
								id="orgAddress" />
						</div>
					</div>
					<div class="form-group">
						<label for="iptOrganization" class="col-sm-2 control-label">
							所属机构
						</label>
	
						<div class="col-sm-5">
							<input type="hidden" name="orgParentID" id="orgParentID" />
							<input id="citySel" type="text" readonly value="<s:property value='organization.orgName'/>"  onclick="showMenu();" class="form-control" />
								
						</div>
					</div>
					
					<div class="form-group">
					</div>
					<div class="form-group">
					</div>
				</s:form>
					<div class="container-fluid catalog-edit-guide-footer">
					<div class="row">
						<div class="col-md-12">
							<div>
								<a class="task-but3" href="javascript:;"
									id="btnSaveFunctionPower" style="margin-left:190px;">保存 </a>
								<a class="task-but4" href="javascript:;"
									onclick="location='<%=basePath %>user/org_list.action'">返回 </a>
							</div>
						</div>
					</div>
				</div>
               </div>
            </div>
        </div>

	<!-- 机构下拉菜单内容 -->
	<div id="menuContent" class="menuContent"
		style="display: none; position: absolute;">
		<ul id="treeDemo" class="ztree"
			style="margin-top: 0; width: 400px; height: 200px; background: white; overflow-y: auto;"></ul>
	</div>

	<script>
		 $(document).ready(function(){
	     	$("#firstpane .menu_body:eq(4)").show();
		        $("#firstpane a.menu_head").click(function(){
		            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
		            $(this).siblings().removeClass("current");
		        });
		        initPage();
		        savefun();
		        
		});
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

		

		function savefun() {
			//setPanelScroll();
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