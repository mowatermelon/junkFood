<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="java.util.*"%>
<%@ include file="/common/top.jsp" %>
<%@ include file="/common/left.jsp" %>
<%@ include file="/modular/paging/paging.jsp"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<base href="<%=basePath%>">
		<title>武大吉奥GeoSmarter数据融合管理中心 - 权限管理</title>

		<jsp:include page="/modular/system/inc/common-felib.jsp" />
		<script type="text/javascript" src="<%=basePath %>js/jquery.validate.js"></script>
		<script type="text/javascript" src="<%=basePath %>js/messages_cn.js"></script>
		
		
		<link rel="stylesheet"
			href="<%=basePath %>modular/system/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css"
			type="text/css" />
		<script type="text/javascript"
			src="<%=basePath %>modular/system/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>

		<link rel="stylesheet"
			href="<%=basePath%>modular/system/platform-admin/css/page-common.css" />

		<script type="text/javascript" src="<%=basePath %>modular/system/platform-admin/user/perm/js/permList.js"></script>
		
		<script src="<%=_path %>/js/layer/layer.js"></script>
		
		
	</head>
	<body>
	   <div class="clearfloat content">
	        <!--任务管理-右边栏-->
			<div class="plan-left">
			  <div class="plan-tltle">
				<h2>权限列表</h2>
			  </div>
			  <div class="task-cj">
			    <ul class="nav nav-tabs" id="mytab">
					<li class="active">
						<a href="#allServicePanel" id="btnPerm" data-toggle="tab">功能权限</a>
					</li>
					<!-- <li><a href="#runServicePanel" data-toggle="tab">菜单权限</a></li> -->
					<li>
						<a href="#runServicePanel" id="btnMenu" data-toggle="tab">菜单权限</a>
					</li>
					<li>
						<a href="#stopServicePanel" id="btnPageElement" data-toggle="tab">页面元素权限</a>
					</li>
				</ul>
				<div class="tab-content" style="margin-top: 10px;">
				<!-- 功能权限面板内容 -->
				<div class="tab-pane active" id="allServicePanel">
				
					<div class="tool">
						<div class="add">
							<a href="#" data-toggle="modal" data-target="#addFunctionWindow"><img title="添加功能权限"
									src="<%=_path%>/images/ico/new.png">添加功能权限</a>
						</div>
								<div>
									<s:form name="operateForm" action="/user/operate_list.action"
										class="form-inline pull-right">
										<div class="plan-tr clearfloat">
											<ul class="qxgl-input">
												<li>
													<span>根据名称查询:</span>
													<s:textfield name="operation.operationName" id="operationName" />
													<button type="submit">查询</button>
												</li>
												
											</ul>
										</div>

										<%--<div class="form-group form-group-sm">
									<s:textfield name="operation.operationName"
										class="form-control" id="operationName" placeholder="根据名称查询" />
								</div>
								<button type="submit" class="btn btn-default btn-sm">
									<span class="glyphicon glyphicon-search"></span> 查询
								</button>--%>
									</s:form>
								</div>
							</div>
					<table id="perm"  border="0" cellspacing="0" class="menu-qx">
							<thead>
								<tr class="type">
									<td>
										操作对象名称
									</td>
									<td>
										操作对象编码
									</td>
									<td>
										操作对象链接地址
									</td>
									<td>
										操作对象排序
									</td>
									<td>
										操作对象启用备注
									</td>
									<td>
										操作
									</td>
								</tr>
								</thead>
								<tbody></tbody>
						</table>
						<div id="Operate_pagination" class="page"></div>
				</div>

				<!-- 菜单权限面板内容 -->
				<div class="tab-pane" id="runServicePanel">
					<div class="tool">
						<div class="add">
							<a href="#" data-toggle="modal" data-target="#addMenuWindow"><img title="添加菜单权限"
									src="<%=_path%>/images/ico/new.png">添加菜单权限</a>
						</div>

								<div>
									<s:form name="menuForm" action="/user/menu_list.action"
										class="form-inline pull-right">
										<div class="plan-tr clearfloat">
											<ul class="qxgl-input">
												<li>
													<span>根据名称查询:</span>
													<s:textfield name="menu.menuName"
														id="menuName" />
													<button type="submit">
														查询
													</button>
												</li>

											</ul>
										</div>
							<%-- <div class="form-serch">
							<s:form name="menuForm" action="user/menu_list.action"
								class="form-inline pull-right">
								<div class="form-group form-group-sm">
									<s:textfield name="menu.menuName" class="form-control"
										id="menuName" placeholder="根据名称查询" />
								</div>
								<button type="submit" class="btn btn-default btn-sm">
									<span class="glyphicon glyphicon-search"></span> 查询
								</button> --%>
									</s:form>
								</div>
							</div>
					<div>
						<table id="menu" border="0" cellspacing="0" class="menu-qx">
							<thead >
								<tr class="type">
									<td>
										菜单名称
									</td>
									<td>
										菜单链接地址
									</td>
									<td>
										菜单标记
									</td>
									<!--<th>菜单系统类型</th>
											 <th>上级菜单ID</th> -->
									<td>
										操作
									</td>
								</tr>
							</thead>
							<tbody>

							</tbody>
						</table>
						<div id="menu_pagination" class="page"></div>
					</div>

				</div>

				<!-- 页面元素权限面板内容 -->
				<div class="tab-pane" id="stopServicePanel">
					<div class="tool">
						<div class="add">
							<a href="javascript:;" data-toggle="modal" data-target="#addPageElementWindow"><img title="添加页面元素权限"
									src="<%=_path%>/images/ico/new.png">添加页面元素权限</a>
						</div>
								<div>
									<s:form name="pageElementForm" action="/user/page_list.action"
										class="form-inline pull-right">
										<div class="plan-tr clearfloat">
											<ul class="qxgl-input">
												<li>
													<span>根据名称查询:</span>
													<s:textfield name="pageElement.elementName" id="elementName" />
													<button type="submit">
														查询
													</button>
												</li>

											</ul>
										</div>

							<%-- <div class="form-serch">
							<s:form name="pageElementForm" action="user/page_list.action"
								class="form-inline pull-right">
								<div class="form-group form-group-sm">
									<s:textfield name="pageElement.elementName"
										class="form-control" id="elementName" placeholder="根据名称查询" />
								</div>
								<button type="submit" class="btn btn-default btn-sm">
									<span class="glyphicon glyphicon-search"></span> 查询
								</button>--%>
									</s:form>
								</div>
							</div>
					<div class="tableContainer">
						<table id="pageElement" border="0" cellspacing="0" class="menu-qx">
							<thead>
								<tr class="type">
									<td>
										页面元素名称
									</td>
									<td>
										元素编码
									</td>
									<td>
										元素排序
									</td>
									<td>
										操作
									</td>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
						<div id="pager_pagination" class="page"></div>

					</div>
				</div>
			  </div>
			</div>
	   </div>
		<!--内容-->



			<!-- 添加 功能权限 窗口 -->
			<%@include
				file="/modular/system/platform-admin/user/perm/addOperation.jsp"%>
			<!-- 修改 功能权限 窗口 -->
			<%@include
				file="/modular/system/platform-admin/user/perm/updateOperation.jsp"%>

			<!-- 添加菜单权限窗口 -->
			<%@include file="/modular/system/platform-admin/user/perm/addMenu.jsp"%>
			<!-- 修改菜单权限窗口 -->
			<%@include
				file="/modular/system/platform-admin/user/perm/updateMenu.jsp"%>

			<%@include
				file="/modular/system/platform-admin/user/perm/addPageElement.jsp"%>
			<%@include
				file="/modular/system/platform-admin/user/perm/updatePageElement.jsp"%>




			<jsp:include page="/modular/system/platform-admin/inc/util.jsp" />



			<script>

	
	
	//定义全局变量，暂时存放待删除的菜单ID
	var delMenuId = null;
	$(document).ready(function(){
	    $("#firstpane .menu_body:eq(4)").show();
		        $("#firstpane a.menu_head").click(function(){
		            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
		            $(this).siblings().removeClass("current");
		        });
		$.fn.zTree.init($("#treeDemo"), setting, zNodes);
		type = "<s:property value='type'/>";
		//alert(type);
		
		
		//初始化模组
		initPage();
		
		
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
	
	function gotoPage(index){
		if(type=="menu"){
			findMenuList(index,10);
		}else if(type=="page"){
			findPageElementList(index,10);
		}else{
			findOperateList(index,10);
		}
	}
	
	

	function initPage() {
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
	
	
	

	function addFunctionPower() {
       if($("#operateAddForm").valid()){
		 window.document.operateAddForm.submit();
		//alert("添加功能权限");
		}
	}
	
	function updateFunctionPower() {
		 window.document.operateUpdateForm.submit();
		//alert("添加功能权限");
	}

	function addMenuPower() {
	if($("#addMenuPermForm").valid()){
		//alert("添加菜单权限");
		window.document.addMenuPermForm.submit();
	  }
	}

	function addPageElementPower() {
	if($("#pagePermAddForm").valid()){
		//alert("添加页面元素权限");
		window.document.pagePermAddForm.submit();
		}
	}
	
	function updatePageElementPower() {
		//alert("添加页面元素权限");
		window.document.pagePermUpdateForm.submit();
	}
	
	//设置菜单ID
	function setDelMenu(menuId){
		delMenuId = menuId;
	}
	
	//删除菜单
	function deleteMenu(){
		//alert("123");
		window.location.href='<%=basePath%>/user/menu_delete.action?menuID='+delMenuId;
		//alert("删除成功");
	}
	
	//修改菜单权限
	function updateMenuPower(){
		 window.document.updateMenuPermForm.submit();
	}
	
	
	
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

		
	</SCRIPT>
	</body>
</html>