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
    
    <script type="text/javascript" src="view/usersys/platform-admin/user/user/js/addUser.js"></script>
    
	
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
                    <a href="#">用户管理</a> &gt 添加用户 -->
                </div>

                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">添加用户</h3>

					<s:form name="userForm" class="form-horizontal" action="user/user_save.action" method="post">
                   
                    
                        <div class="form-group">
                            <label for="userLoginName" class="col-sm-2 control-label">用户登录名称</label>
                            <div class="col-sm-3">                                
                                 <s:textfield name="user.userLoginName" class="form-control" id="userLoginName" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="userPassword" class="col-sm-2 control-label">用户登录密码</label>
                            <div class="col-sm-3">                                
                                 <s:textfield name="user.userPassword" class="form-control" id="userPassword" />
                            </div>
                        </div>
                        
                       <%--  <div class="form-group">
                            <label for="userUsesMark" class="col-sm-2 control-label">用户备注</label>
                            <div class="col-sm-3">                                
                                 <s:textfield name="user.userUsesMark" class="form-control" id="userUsesMark"/>
                            </div>
                        </div> --%>
                        
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

						
						
						<div class="form-group">
                            <label for="userInvalidTime" class="col-sm-2 control-label">用户失效时间</label>

                            <div class="col-sm-3">
                                 <s:textfield name="user.userInvalidTime" class="form-control" id="userInvalidTime" />
                            </div>
                        </div>

						<!-- <div class="form-group">
								<label for="iptOrganization" class="col-sm-2 control-label">所属机构</label>

								<div class="col-sm-3">
								
									<input type="hidden" name="orgID" id="orgID" />
									<input  id="citySel" type="text" readonly value=""
										style="width: 120px;" onclick="showMenu();" /> &nbsp;<a
										id="menuBtn" href="#" onclick="showMenu(); return false;">请指定机构</a>

								</div>
						</div> -->

							<div class="form-group">
								<label for="iptOrganization" class="col-sm-2 control-label">所属机构</label>

								<div class="col-sm-3">
										<input type="hidden" name="orgID" id="orgID" />
										<input id="citySel"
										type="text" readonly value="" style="width: 120px;"
										onclick="showMenu();" /> &nbsp;<a id="menuBtn" href="#"
										onclick="showMenu(); return false;">请指定机构</a>

								</div>
						</div> 
							

							<div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button type="button" class="btn btn-default" id ="btnSave" data-toggle="modal" data-target="#addFunctionWindow">提交</button>
                                <button type="button" class="btn btn-default" onclick="location='user/user_list.action'">返回用户列表</button>
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
					<h4 class="modal-title">添加用户</h4>
				</div>
				<div class="modal-body">


				</div>
				<div class="modal-footer">
					<button id="btnSaveFunctionPower" type="button"
						class="btn btn-primary" data-dismiss="modal">确认保存</button>
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
	
	
</body>
</html>