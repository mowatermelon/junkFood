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
    
    		<link rel="stylesheet" href="view/usersys/theme/default/css/date.css"
			type="text/css">
		<link rel="stylesheet" href="view/usersys/theme/default/css/style.css"
			type="text/css">
			
			<!-- chenzhi 2015.8.12 begin  -->
		<script type="text/javascript" src="view/usersys/fe-lib/jquery-validation/jquery.validate.min.js"></script>
		<script type="text/javascript" src="view/usersys/fe-lib/jquery-validation/additional-methods.js"></script>
		<script type="text/javascript" src="view/usersys/fe-lib/jquery-validation/messages_zh.js"></script>	
		
		<script type="text/javascript">
			$(function() {
				$('.form-horizontal').validate({
		         errorElement : 'span',
		         errorClass : 'help-block',
		         focusInvalid : true,
		         rules : {
		         
		         //组织机构编码验证
		         
		             'organization.orgCode' : {
		                 required : true,
		                 onlyLetterNumber:true
		             },
		             
		             
		             'organization.orgName':{
		             	required : true
		             },
		             'organization.orgRemark':{
		             	required : true
		             },
		             'organization.orgTelephone':{
		             	phone:true
		             },
		             'organization.orgFax':{
		             	required:true
		             },
		             'organization.orgZipCode':{
		             	chinaZip:true
		             },
		             'organization.orgAddress':{
		             	required:true
		             }
		         },
		         highlight : function(element) {
		             $(element).closest('.form-group').addClass('has-error');
		         },
		         success : function(label) {
		             label.closest('.form-group').removeClass('has-error');
		             label.remove();
		         },
		         errorPlacement : function(error, element) {
		             element.parent('div').append(error);
		         },
		         submitHandler : function(form) {
		         	//alert(1);
		             form.submit();
		         }
		     });
		})
		</script>
			
		<!-- chenzhi 2015.8.12 end  -->	
			
</head>


<body>
		<%-- <div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a
				href="javascript:void(0)">系统管理</a> -> 修改组织机构</span>
		</div> --%>
		<div class="system-edit">
			<h4>
				修改组织机构
			</h4>
			<hr />
			<s:form name="orgForm" class="form-horizontal" action="user/org_update.action" method="post">
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
					<!-- 显示父节点  -->
						<input type="hidden" name="orgParentID" id="orgParentID" value="${organization.orgParent.orgID}"/>
					<!--   	
						<input id="citySel" type="text" readonly value=""
							class="form-control" onclick="showMenu();" />
					-->
						<s:textfield name="organization.orgParent.orgName" class="form-control" id="citySel" onclick="showMenu();" readonly="true" ></s:textfield>
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
						<div class="col-md-offset-3 col-md-9">
							<a class="btn btn-default button-back" href="<%=basePath %>user/org_list.action"
								> <i
								class="glyphicon glyphicon-arrow-left"></i> 返回 </a>
							<a class="btn btn-primary button-submit" href="javascript:;"
								id="btnSaveFunctionPower"> <i
								class="glyphicon glyphicon-floppy-disk"></i> 保存 </a>
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
			$('.form-horizontal').submit();
			//window.document.orgForm.submit();
			//alert("添加成功");
		}
	</script>
	
	
	
</body>
</html>