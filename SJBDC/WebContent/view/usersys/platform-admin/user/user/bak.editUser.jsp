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
    
    <script type="text/javascript" src="view/usersysplatform-admin/user/user/js/updateUser.js"></script>
    <%-- <script type="text/javascript" src="platform-admin/user/user/js/addUser.js"></script> --%>


</head>
<body>

<div class="pageContainer">

    <!-- 页面头部 -->
   <%--  <div class="pageHeader">

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
                    <a href="#">用户管理</a> &gt 修改用户
 -->                </div>

                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">修改用户</h3>

					<s:form name="userForm" class="form-horizontal"  action="user/user_update.action" >
                        <div class="form-group">
                            <label for="userLoginName" class="col-sm-2 control-label">用户登录名称</label>
                            <div class="col-sm-3">   
                                 <s:hidden name="user.userID" class="form-control" id="userID" ></s:hidden>
                                                            
                                 <s:textfield name="user.userLoginName" class="form-control" id="userLoginName" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="userPassword" class="col-sm-2 control-label">用户登录密码</label>
                            <div class="col-sm-3">                                
                                 <s:textfield name="user.userPassword" class="form-control" id="userPassword"    />
                            </div>
                        </div>
                        
                        
                        <div class="form-group">
                            <label for="userEmail" class="col-sm-2 control-label">用户邮箱</label>
                            <div class="col-sm-3">                                
                                 <s:textfield name="user.userInfo.userEmail" class="form-control" id="userEmail"/>
                            </div>
                        </div>
                        
                        
                        <div class="form-group">
								<label for="userIsSuperAdmin" class="col-sm-2 control-label">用户是否是超级管理员</label>
								<div class="col-sm-3">
									<label> <input type="radio"
										name="user.userIsSuperAdmin" id="user.userIsSuperAdmin"
										value="1"> 是
									</label> <label> <input type="radio"
										name="user.userIsSuperAdmin" id="user.userIsSuperAdmin"
										value="0" checked> 否
									</label>
								</div>
							</div>
                        
     
                        
                        
                         <div class="form-group">
                            <label for="userEnabledTime" class="col-sm-2 control-label">用户激活时间</label>

                            <div class="col-sm-3">
                                 <s:textfield name="user.userEnabledTime" class="form-control" id="userEnabledTime" />
                            </div>
                        </div>

						
						
						<div cass="form-group">
                            <label for="userInvalidTime" class="col-sm-2 control-label">用户失效时间</label>

                            <div class="col-sm-3">
                                 <s:textfield name="user.userInvalidTime" class="form-control" id="userInvalidTime" />
                            </div>
                        </div>
                        
						
						
						<div class="form-group">
								<label for="iptOrganization" class="col-sm-2 control-label">所属机构</label>
								<input type="hidden" name="userID" id="getUserID" /> 
								<input type="hidden" name="orgID" id="orgID" /> 
								<div class="col-sm-4">
										<input id="citySel"
										type="text" readonly value="" style="width: 120px;"
										onclick="showMenu();" />
										 &nbsp;<a id="menuBtn" href="#"
										onclick="showMenu(); return false;">请指定机构</a>

								</div>
						</div> 
						


								<div class="form-group">
									<div class="col-sm-offset-2 col-sm-10">
										<button type="button" class="btn btn-default" id="btnUpdate"
											data-toggle="modal" data-target="#addFunctionWindow">提交</button>
										<button type="button" class="btn btn-default"
											onclick="location='user/user_list.action'">返回用户列表</button>
									</div>

									<%--  <div><s:property value="msg"/></div> --%>
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
		<div class="modal-dialog  modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
					<h4 class="modal-title">修改用户</h4>
				</div>
				<div class="modal-body">

				</div>
				<div class="modal-footer">
					<button id="btnSaveFunctionPower" type="button"
						class="btn btn-primary" data-dismiss="modal">确认修改</button>
					<button type="button" class="btn btn-default" data-dismiss="modal">放弃</button>
				</div>
			</div>
		</div>
	</div>



	<script>
    setPanelScroll();
    function setPanelScroll() {
        $('.sidePanelContainer').slimScroll({
            width: $('.sidePanel').width(),
            height: $('.sidePanel').height()
        });
        $('.mainPanelContainer').slimScroll({
            width: $('.mainPanel').width(),
            height: $('.mainPanel').height()
        });
    }
    //$('.mainPanel').slimScroll();

    $('#iptBirthday').datepicker({
        inline: true,
        dateFormat:"yy-mm-dd"
    });
    $('#userEnabledTime').datepicker({
        inline: true,
        dateFormat:"yy-mm-dd"
    });
    $('#userInvalidTime').datepicker({
        inline: true,
        dateFormat:"yy-mm-dd"
    });
  
    initPage();

    function initPage() {
        setPanelScroll();
        $("#btnSaveFunctionPower").on("click", addFunctionPower);
        
    }

    function setPanelScroll(){
        $('.sidePanelContainer').slimScroll({
            width:$('.sidePanel').width(),
            height:$('.sidePanel').height()
        });
        $('.mainPanelContainer').slimScroll({
            width:$('.mainPanel').width(),
            height:$('.mainPanel').height()
        });
    }


    function addFunctionPower(){
        window.document.userForm.submit();
        //alert("添加成功");
    }

</script>
<!-- 
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

		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo"), setting, zNodes);
		});
	</SCRIPT> -->
	
</body>
</html>