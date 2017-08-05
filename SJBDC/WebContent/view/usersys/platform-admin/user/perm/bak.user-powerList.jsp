<%@ page contentType="text/html;charset=UTF-8" language="java"  import = "java.util.*"%>

<%@ taglib uri="/struts-tags" prefix="s" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<head>
	<base href="<%=basePath%>">
    <title>武大吉奥GIS云平台 - 综合运维管理系统</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <jsp:include page="/view/usersys/inc/common-felib.jsp"/>
    
    
	<link rel="stylesheet" href="view/usersys/fe-lib/zTree/3.5.17/css/zTreeStyle/zTreeStyle.css" type="text/css" />        
    <script type="text/javascript" src="view/usersys/fe-lib/zTree/3.5.17/js/jquery.ztree.all-3.5.min.js"></script>

    <link rel="stylesheet" href="<%=basePath%>/view/usersys/platform-admin/css/page-common.css" />

	<script type="text/javascript" src="view/usersys/platform-admin/user/perm/js/permList.js"></script>
	

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
<!--                 <div class="currentPosition">
                    当前位置： <a href="#">首页</a> &gt <a href="#">综合运维管理系统</a> &gt
                    <a href="#">用户管理</a> &gt 权限列表
                </div> -->
                
                

                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">权限列表</h3>
                    
                    <ul class="nav nav-tabs" id="mytab">
                        <li class="active"><a href="#allServicePanel" id ="btnPerm" data-toggle="tab">功能权限</a></li>
                        <!-- <li><a href="#runServicePanel" data-toggle="tab">菜单权限</a></li> -->
                        <li><a href="#runServicePanel"  id="btnMenu" data-toggle="tab" >菜单权限</a></li>
                       
                        <li><a href="#stopServicePanel" id="btnPageElement" data-toggle="tab">页面元素权限</a></li>
                    </ul>

                    <div class="tab-content">

                        <!-- 功能权限面板内容 -->
                        <div class="tab-pane active" id="allServicePanel">
                        	<!-- 列表顶部工具条  -->
		                    <div class="listTopToolbar">
		                        <s:form name="operateForm" action="user/operate_list.action" class="form-inline pull-left">
		                            <div class="form-group">
		                                <label for="queryKeywordIpt">查找功能权限</label>
		                                <s:textfield name="operation.operationName" class="form-control"
												id="operationName" placeholder="请输入查询关键字" />
		                            </div>
		                            <button type="submit" class="btn btn-default">查询</button>
		                       </s:form>
		
		                        <button type="button" class="btn btn-default pull-right" data-toggle="modal" data-target="#addFunctionWindow">
                                    	添加功能权限
                                </button>
		                    </div>
		
							<table id ="perm" class="table table-condensed table-hover">
                                <thead>
										<tr>
											<!-- <th><input id="chkAllSelect" type="checkbox"></th> -->
											<th>操作对象名称</th>
											<th>操作对象编码</th>
											<th>操作对象链接地址</th>
											<th>操作对象排序</th>
											<th>操作对象启用备注</th>
											<th>操作</th>
										</tr>
									</thead>
                                <tbody>
                                </tbody>
                            </table>
                            
		                   
		                    
							<!-- 列表底部工具条  -->
							<div class="listBottomToolbar">
			                    <%-- <nav id="functionPowerPager" class="pull-right">
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
			                    <div class="pull-right" id="operatePager">
								</div>
							</div>

                            

                        </div>

                        <!-- 菜单权限面板内容 -->
                        <div class="tab-pane" id="runServicePanel">                        
                        	
		                    
								<!-- 菜单权限面板内容 -->
								<div class="listTopToolbar">
									<s:form name="menuForm" action="user/menu_list.action"
										class="form-inline pull-left">

										<div class="form-group">
											<label for="queryKeywordIpt">查找菜单权限</label>
											<s:textfield name="menu.menuName" class="form-control"
												id="menuName" placeholder="请输入查询关键字" />
										</div>
										<button type="submit" class="btn btn-default">查询</button>
									</s:form>

									<button type="button" class="btn btn-default pull-right"
										data-toggle="modal" data-target="#addMenuWindow">
										添加菜单权限</button>
								</div>



								<table  id ="menu" class="table table-condensed table-hover">
									<thead>
										<tr>
											<th>菜单名称</th>
											<th>菜单链接地址</th>
											<th>菜单标记</th>
											<!--<th>菜单系统类型</th>
											 <th>上级菜单ID</th> -->
											<th>操作</th>
										</tr>
									</thead>
									<tbody>
									
									</tbody>
								</table>

								
		                    
							<!-- 列表底部工具条  -->
								<div class="listBottomToolbar">
									<div class="pull-right" id="pager">
									</div>
								</div>
                            
                        </div>

                        <!-- 页面元素权限面板内容 -->
                        <div class="tab-pane" id="stopServicePanel">
                            	<!-- 列表顶部工具条  -->
		                    <div class="listTopToolbar">
		                        
		                        <s:form name="pageElementForm" action="user/page_list.action" class="form-inline pull-left">
		                            <div class="form-group">
		                                <label for="queryKeywordIpt">查找页面权限</label>
		                                <s:textfield name="pageElement.elementName" class="form-control"
												id="elementName" placeholder="请输入查询关键字" />
		                            </div>
		                            <button type="submit" class="btn btn-default">查询</button>
		                       </s:form>
		                        
		                         <button type="button" class="btn btn-default pull-right" data-toggle="modal" data-target="#addPageElementWindow">
                                    	添加页面元素权限
                                </button>
		
		                        
		                    </div>
		
		                    <table  id ="pageElement" class="table table-condensed table-hover">
		                        <thead>
		                        <tr>
		                            <th>页面元素名称</th>
		                            <th>元素编码</th>
		                            <th>元素排序</th>
		                            <th>操作</th>
		                        </tr>
		                        </thead>
		                        <tbody>
		                        </tbody>
		                    </table>
		                    
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
			                    
			                    <div class="pull-right" id="pageElementPager">
								</div>
							</div>
                        </div>
                        
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
<!-- 添加 功能权限 窗口 -->
<%@include file="/view/usersys/platform-admin/user/perm/addOperation.jsp"%>
<!-- 修改 功能权限 窗口 -->
<%@include file="/view/usersys/platform-admin/user/perm/updateOperation.jsp"%>

<!-- 添加菜单权限窗口 -->
<%@include file="/view/usersys/platform-admin/user/perm/addMenu.jsp"%>
<!-- 修改菜单权限窗口 -->
<%@include file="/view/usersys/platform-admin/user/perm/updateMenu.jsp"%>

<%@include file="/view/usersys/platform-admin/user/perm/addPageElement.jsp"%>
<%@include file="/view/usersys/platform-admin/user/perm/updatePageElement.jsp"%>





<!-- 是否删除权限窗口 -->
	<div class="modal fade" id="deleteOperateWindow" tabindex="-1"
		role="dialog">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
					<h4 class="modal-title">删除功能权限</h4>
				</div>
				<div class="modal-body">


				</div>
				<div class="modal-footer">
					<button id="btnDeleteOperate" type="button"
						class="btn btn-primary" data-dismiss="modal">确认删除</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">放弃</button>
				</div>
			</div>
		</div>
	</div>





<jsp:include page="/view/usersys/platform-admin/inc/util.jsp"/>



<!-- 是否删除窗口 -->
	<div class="modal fade" id="deleteMenuWindow" tabindex="-1"
		role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
					<h4 class="modal-title">删除菜单</h4>
				</div>
				<div class="modal-body">


				</div>
				<div class="modal-footer">
					<button id="btnDeleteMenu" type="button"
						class="btn btn-primary" data-dismiss="modal">确认删除</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">放弃</button>
				</div>
			</div>
		</div>
	</div>


	
	
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

	function addFunctionPower() {
		 window.document.operateAddForm.submit();
		//alert("添加功能权限");
	}
	
	function updateFunctionPower() {
		 window.document.operateUpdateForm.submit();
		//alert("添加功能权限");
	}

	function addMenuPower() {
		//alert("添加菜单权限");
		window.document.addMenuPermForm.submit();
	}

	function addPageElementPower() {
		//alert("添加页面元素权限");
		window.document.pagePermAddForm.submit();
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
		window.location.href='<%=basePath %>/user/menu_delete.action?menuID='+delMenuId;
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