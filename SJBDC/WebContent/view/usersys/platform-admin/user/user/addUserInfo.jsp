<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>武大吉奥GIS云平台 - 综合运维管理系统</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <link rel="stylesheet" href="/view/usersys/fe-lib/bootstrap/3.3.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="/view/usersys/fe-lib/bootstrap/3.3.2/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="/view/usersys/fe-lib/jqueryui/1.10.4/themes/bootstrap3/jquery-ui-1.10.3.custom.css">
    <!--[if lt IE 9]>
    <link rel="stylesheet" href="../fe-lib/jqueryui/1.10.4/themes/bootstrap3/jquery.ui.1.10.3.ie.css">
    <![endif]-->

    <script type="text/javascript" src="/view/usersys/fe-lib/jquery/1.11.2/jquery.min.js"></script>
    <script type="text/javascript" src="/view/usersys/fe-lib/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/view/usersys/fe-lib/jqueryui/1.10.4/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="/view/usersys/fe-lib/jquery-slimScroll/1.3.3/jquery.slimscroll.min.js"></script>

    <link rel="stylesheet" href="/view/usersys/userCenter/css/page-common.css">


<script type="text/javascript">

	$(document).ready(function(){

		$("#btnSave").click(function(){

			var username = $("#username").val();
			$.post("user!checkUser",{"user.username":username},function(result){
				//alert(result);
				if (result=='failed'){
					alert("用户名已存在");
				}else{
					var obj = {
							"user.username":$("#username").val(),
							"user.password":$("#password").val()
						};
					$.post("user!save",obj,function(result){
						if (result=="success"){
							//刷新列表
							window.parent.document.userForm.submit();
						}else{
							alert("保存失败");
						}		
					});
				}
			});
			
		});
		
	});

</script>

</head>
<body>

<div class="pageContainer">

    <!-- 页面头部 -->
    <div class="pageHeader">

        <!-- 页面顶部 -->
        <div class="siteTop">
            <jsp:include page="/view/usersys/platform-admin/inc/siteTop.jsp"/>
        </div>

        <div class="headerContainer">
            <!-- 网站LOGO -->
            <div class="siteLogo">
                <a href="/view/usersys/home/index.jsp"><img src="img/siteLogo-platformAdmin.gif"/></a>
            </div>

            <!-- 用户信息 -->
            <div class="userInfo">
                <img class="userIcon" src="/view/usersys/userCenter/img/user-pic.gif">

                <div class="userName">张杰，武大吉奥公司</div>
                <div class="userLastLoginTime">您上次登录的时间 2015-4-12 11:12:13</div>
            </div>
        </div>

    </div>

    <!-- 页面主体 -->
    <div class="pageBody">

        <!-- 侧面板 -->
        <div class="sidePanel">
            <div class="sidePanelContainer">
                <jsp:include page="/view/usersys/platform-admin/inc/sidePanel.jsp"/>
            </div>

        </div>

        <!-- 主面板 -->
        <div class="mainPanel">

            <div class="mainPanelContainer">
                <!-- 当前位置 -->
               <!--  <div class="currentPosition">
                    当前位置： <a href="#">首页</a> &gt <a href="#">综合运维管理系统</a> &gt
                    <a href="#">用户管理</a> &gt 添加用户
                </div> -->

                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">添加用户</h3>

                    <form class="form-horizontal">
                        <div class="form-group">
                            <label for="iptZhName" class="col-sm-2 control-label">中文名</label>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="iptZhName">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="iptEnName" class="col-sm-2 control-label">英文名</label>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="iptEnName">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="iptFullName" class="col-sm-2 control-label">英文全名</label>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="iptFullName">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="iptSex" class="col-sm-2 control-label">性别</label>
                            <div class="col-sm-3">
                                <select class="form-control" id="iptSex">
                                    <option>男</option>
                                    <option>女</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="iptAge" class="col-sm-2 control-label">年龄</label>
                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="iptAge">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="iptBirthday" class="col-sm-2 control-label">生日</label>

                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="iptBirthday">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="iptOrganization" class="col-sm-2 control-label">机构</label>

                            <div class="col-sm-3">
                                <select class="form-control" id="iptOrganization">
                                    <option>请指定机构</option>
                                    <option>某市某局</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="iptDepartment" class="col-sm-2 control-label">部门</label>

                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="iptDepartment">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="iptPosition" class="col-sm-2 control-label">职位</label>

                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="iptPosition">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="iptMobile" class="col-sm-2 control-label">手机</label>

                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="iptMobile">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="iptTel" class="col-sm-2 control-label">电话</label>

                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="iptTel">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="iptFax" class="col-sm-2 control-label">传真</label>

                            <div class="col-sm-3">
                                <input type="text" class="form-control" id="iptFax">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="iptHomepage" class="col-sm-2 control-label">主页</label>

                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="iptHomepage">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="iptAddress" class="col-sm-2 control-label">通讯地址</label>

                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="iptAddress">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-offset-2 col-sm-10">
                                <button type="submit" class="btn btn-default">提交</button>
                                <button type="button" class="btn btn-default">放弃</button>
                            </div>
                        </div>
                    </form>

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
        inline: true
    });
</script>
</body>
</html>