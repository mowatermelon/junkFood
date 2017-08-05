<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="java.util.*"%>

<%@ taglib uri="/struts-tags" prefix="s"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
<html>
	<head>
		<base href="<%=basePath%>">
		<title>武大吉奥GIS云平台 - 综合运维管理系统</title>
		<meta charset="utf-8">
		<meta name="viewport"
			content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

		<jsp:include page="/view/usersys/inc/common-felib.jsp" />


		<link rel="stylesheet"
			href="view/usersys/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css"
			type="text/css" />
		<script type="text/javascript"
			src="view/usersys/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>

		<link rel="stylesheet"
			href="<%=basePath%>/view/usersys/platform-admin/css/page-common.css" />

		<script type="text/javascript"
			src="view/usersys/platform-admin/user/perm/js/permList.js"></script>

		<link rel="stylesheet" href="view/usersys/theme/default/css/date.css"
			type="text/css">
		<link rel="stylesheet" href="view/usersys/theme/default/css/style.css"
			type="text/css">
			<!-- chenzhi 2015.8.12 begin -->
			<script type="text/javascript"
				src="view/usersys/fe-lib/jquery-validation/jquery.validate.min.js"></script>
			<script type="text/javascript"
				src="view/usersys/fe-lib/jquery-validation/additional-methods.js"></script>
			<script type="text/javascript"
				src="view/usersys/fe-lib/jquery-validation/messages_zh.js"></script>
<!-- chenzhi 2015.8.12 end -->
	</head>
	<body>
		<!--内容-->
		<div class="system-R-content">
			<%-- <div class="position">
				<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a
					href="javascript:void(0)">系统管理</a> -> 权限列表</span>
			</div> --%>
			<div class="title">
				<h4>
					权限列表
				</h4>
				
				<div class="title-add ">
							<a href="javascript:;" data-toggle="modal"
								data-target="#addFunctionWindow"><img title="添加功能权限"
									src="view/usersys/theme/default/img/new.png">
								<span>服务新增</span>
							</a>
									
						</div>
			</div>
			<div>
				<ul class="nav nav-tabs" id="mytab" style="  ">
					<li class="active">
						<a href="#allServicePanel" id="btnPerm" data-toggle="tab">功能权限</a>
					</li>
					<li>
						<a href="#runServicePanel" id="btnMenu" data-toggle="tab">菜单权限</a>
					</li>
					<li>
						<a href="#stopServicePanel" id="btnPageElement" data-toggle="tab">页面元素权限</a>
					</li>
				</ul>
			</div>
			<div class="tab-content">
				<!-- 功能权限面板内容 -->
				<div class="tab-pane active" id="allServicePanel">
					<div class="tool">
						
						<div class="form-serch">
							<s:form name="operateForm" action="user/operate_list.action"
								class="form-inline ">
								<div class="form-group form-group-sm">
									<s:textfield name="operation.operationName"
										class="form-control" id="operationName" placeholder="根据名称查询" />
								</div>
								<button type="submit" class="btn btn-default btn-sm">
									<span class="glyphicon glyphicon-search"></span> 查询
								</button>
							</s:form>
						</div>
					</div>
					<div class="tableContainer">
						<div class="tableBorder">
							<table id="perm" cellspacing="1" width="100%"
								class="table table-striped">
								<thead>
									<tr class="title">
										<th>
											操作对象名称
										</th>
										<th>
											操作对象编码
										</th>
										<th>
											操作对象链接地址
										</th>
										<th>
											操作对象排序
										</th>
										<th>
											操作对象启用备注
										</th>
										<th>
											操作
										</th>
									</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
						</div>
						<!-- 列表底部工具条  -->
						<div class="listBottomToolbar">
							<div id="operatePager">
							</div>
						</div>
					</div>
				</div>

				<!-- 菜单权限面板内容 -->
				<div class="tab-pane" id="runServicePanel">
					<div class="tool">
						<!-- <div class="add">
							<a href="javascript:;" data-toggle="modal"
								data-target="#addMenuWindow"><img title="添加菜单权限"
									src="view/usersys/theme/default/img/new.png">添加菜单权限</a>
						</div> -->
						<div class="form-serch">
							<s:form name="menuForm" action="user/menu_list.action"
								class="form-inline pull-right">
								<div class="form-group form-group-sm">
									<s:textfield name="menu.menuName" class="form-control"
										id="menuName" placeholder="根据名称查询" />
								</div>
								<button type="submit" class="btn btn-default btn-sm">
									<span class="glyphicon glyphicon-search"></span> 查询
								</button>
							</s:form>
						</div>
					</div>
					<div class="tableContainer">
						<div class="tableBorder">
							<table id="menu" cellspacing="1" width="100%"
								class="table table-striped">
								<thead>
									<tr class="title">
										<th>
											菜单名称
										</th>
										<th>
											菜单链接地址
										</th>
										<th>
											菜单标记
										</th>
										<!--<th>菜单系统类型</th>
											 <th>上级菜单ID</th> -->
										<th>
											操作
										</th>
									</tr>
								</thead>
								<tbody>

								</tbody>
							</table>
						</div>
						<!-- 列表底部工具条  -->
						<div class="listBottomToolbar">
							<div id="pager">
							</div>
						</div>
					</div>

				</div>

				<!-- 页面元素权限面板内容 -->
				<div class="tab-pane" id="stopServicePanel">
					<div class="tool">
						<!-- <div class="add">
							<a href="javascript:;" data-toggle="modal"
								data-target="#addPageElementWindow"><img title="添加页面元素权限"
									src="view/usersys/theme/default/img/new.png">添加页面元素权限</a>
						</div> -->
						<div class="form-serch">
							<s:form name="pageElementForm" action="user/page_list.action"
								class="form-inline pull-right">
								<div class="form-group form-group-sm">
									<s:textfield name="pageElement.elementName"
										class="form-control" id="elementName" placeholder="根据名称查询" />
								</div>
								<button type="submit" class="btn btn-default btn-sm">
									<span class="glyphicon glyphicon-search"></span> 查询
								</button>
							</s:form>
						</div>
					</div>
					<div class="tableContainer">
						<div class="tableBorder">
							<table id="pageElement" cellspacing="1" width="100%"
								class="table table-striped">
								<thead>
									<tr class="title">
										<th>
											页面元素名称
										</th>
										<th>
											元素编码
										</th>
										<th>
											元素排序
										</th>
										<th>
											操作
										</th>
									</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
						</div>
						<!-- 列表底部工具条  -->
						<div class="listBottomToolbar">
							<%-- <nav class="pull-right">
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
			                    </nav> --%>

							<div id="pageElementPager">
							</div>
						</div>
					</div>

				</div>



			</div>



			<!-- 添加 功能权限 窗口 -->
			<%@include
				file="/view/usersys/platform-admin/user/perm/addOperation.jsp"%>
			<!-- 修改 功能权限 窗口 -->
			<%@include
				file="/view/usersys/platform-admin/user/perm/updateOperation.jsp"%>

			<!-- 添加菜单权限窗口 -->
			<%@include file="/view/usersys/platform-admin/user/perm/addMenu.jsp"%>
			<!-- 修改菜单权限窗口 -->
			<%@include
				file="/view/usersys/platform-admin/user/perm/updateMenu.jsp"%>

			<%@include
				file="/view/usersys/platform-admin/user/perm/addPageElement.jsp"%>
			<%@include
				file="/view/usersys/platform-admin/user/perm/updatePageElement.jsp"%>




			<jsp:include page="/view/usersys/platform-admin/inc/util.jsp" />



			<script>

	
	
	//定义全局变量，暂时存放待删除的菜单ID
	var delMenuId = null;
	$(document).ready(function(){
		$.fn.zTree.init($("#treeDemo"), setting, zNodes);
		var type = "<s:property value='type'/>";
		//alert(type);
		
		
		//初始化模组
		initPage();
		
		setPanelScroll();
		
		if(type=="menu"){
			$('#mytab li:eq(1) a').tab('show');
			findMenuList(1,10);
			
		}else if(type=="page"){
			$('#mytab a:last').tab('show');
			findPageElementList(1,10);
			
		}else{
			findOperateList(1,10);
		}
	});
	
	

	function initPage() {
		setPanelScroll();
		//删除菜单
		$("#btnDeleteMenu").on("click", deleteMenu);
		//添加功能权限
		$("#btnSaveFunctionPower").on("click",addFunctionPower);
		//修改功能权限
		$("#btnUpateFunctionPower").on("click",updateFunctionPower);
		//添加菜单权限
		$("#btnSaveMenuPower").on("click",addMenuPower);
		//修改菜单权限
		$("#btnUpdateMenuPower").on("click",updateMenuPower);
		
		
		//添加页面元素权限
		$("#btnSavePageElementPower").on("click",addPageElementPower);
		//添加页面元素权限
		$("#btnUpdatePageElementPower").on("click",updatePageElementPower);
		
		//删除操作对象权限
		$("#btnDeleteOperate").on("click",deleteOperate);
		
		
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
	
	/* chenzhi 2015.8.12 begin */
	function addFunctionPower() {
		$('#addOperationformID').submit();
		//window.document.operateAddForm.submit();
		//alert("添加功能权限");
	}
	
	function updateFunctionPower() {
		 $('#operateUpdateFormID').submit();
		 //window.document.operateUpdateForm.submit();
		//alert("添加功能权限");
	}

	function addMenuPower() {
		$('#addMenuPermFormID').submit();
		//alert("添加菜单权限");
		//window.document.addMenuPermForm.submit();
	}

	function addPageElementPower() {
		$('#pagePermAddFormID').submit();
		//alert("添加页面元素权限");
		//window.document.pagePermAddForm.submit();
	}
	
	function updatePageElementPower() {
		$('#pagePermUpdateFormID').submit();
		//alert("添加页面元素权限");
		//window.document.pagePermUpdateForm.submit();
	}
	
	//设置菜单ID
	function setDelMenu(menuId){
		delMenuId = menuId;
	}
	
	//删除菜单
	function deleteMenu(){
		//alert("123");
		window.location.href='<%=basePath%>/user/menu_delete.action?menuID='+ delMenuId;
				//alert("删除成功");
			}

	//修改菜单权限
	function updateMenuPower() {
		$('#updateMenuPermFormID').submit();
		//window.document.updateMenuPermForm.submit();
			}
	
	/* chenzhi 2015.8.12 end */
	
</script>



			<SCRIPT type="text/javascript">
		var setting = {
			check: {
				enable: true,
				chkboxType: {"Y":"", "N":""}
			},
			view: {
				dblClickExpand: false
			},
			data: {
				simpleData: {
					enable: true
				}
			},
			callback: {
				beforeClick: beforeClick,
				onCheck: onCheck
			}
		};

		var zNodes =[
			{id:1, pId:0, name:"北京"},
			{id:2, pId:0, name:"天津"},
			{id:3, pId:0, name:"上海"},
			{id:6, pId:0, name:"重庆"},
			{id:4, pId:0, name:"河北省", open:true, nocheck:true},
			{id:41, pId:4, name:"石家庄"},
			{id:42, pId:4, name:"保定"},
			{id:43, pId:4, name:"邯郸"},
			{id:44, pId:4, name:"承德"},
			{id:5, pId:0, name:"广东省", open:true, nocheck:true},
			{id:51, pId:5, name:"广州"},
			{id:52, pId:5, name:"深圳"},
			{id:53, pId:5, name:"东莞"},
			{id:54, pId:5, name:"佛山"},
			{id:6, pId:0, name:"福建省", open:true, nocheck:true},
			{id:61, pId:6, name:"福州"},
			{id:62, pId:6, name:"厦门"},
			{id:63, pId:6, name:"泉州"},
			{id:64, pId:6, name:"三明"}
		 ];

		function beforeClick(treeId, treeNode) {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo");
			zTree.checkNode(treeNode, !treeNode.checked, null, true);
			return false;
		}
		
		function onCheck(e, treeId, treeNode) {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
			nodes = zTree.getCheckedNodes(true),
			v = "";
			for (var i=0, l=nodes.length; i<l; i++) {
				v += nodes[i].name + ",";
			}
			if (v.length > 0 ) v = v.substring(0, v.length-1);
			var cityObj = $("#citySel");
			cityObj.attr("value", v);
		}

		function showMenu() {
			var cityObj = $("#citySel");
			var cityOffset = $("#citySel").offset();
			$("#menuContent").css({left:cityOffset.left + "px", top:cityOffset.top + cityObj.outerHeight() + "px"}).slideDown("fast");

			$("body").bind("mousedown", onBodyDown);
		}
		function hideMenu() {
			$("#menuContent").fadeOut("fast");
			$("body").unbind("mousedown", onBodyDown);
		}
		function onBodyDown(event) {
			if (!(event.target.id == "menuBtn" || event.target.id == "citySel" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length>0)) {
				hideMenu();
			}
		}
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			
			  var name = $(e.target).html();
			  if(name=="功能权限"){
				  $('.title-add span').text("添加功能权限");
				  //添加功能权限
				  $('.title-add a').attr("data-target","#addFunctionWindow");
			  }else if(name=="菜单权限"){
				  //添加菜单权限
				  $('.title-add span').text("添加菜单权限");
				  $('.title-add a').attr("data-target","#addMenuWindow");
			  }else{
				  //添加页面元素权限
				  $('.title-add span').text("添加页面元素权限");
				  $('.title-add a').attr("data-target","#addPageElementWindow");
			  }
			})
		
	</SCRIPT>
	</body>
</html>