<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>武大吉奥GIS云平台 - 综合运维管理系统</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <link rel="stylesheet" href="/view/usersys/fe-lib/bootstrap/3.3.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="/view/usersys/fe-lib/bootstrap/3.3.2/css/bootstrap-theme.min.css">

    <script type="text/javascript" src="/view/usersys/fe-lib/jquery/1.11.2/jquery.min.js"></script>
    <script type="text/javascript" src="/view/usersys/fe-lib/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/view/usersys/fe-lib/jquery-slimScroll/1.3.3/jquery.slimscroll.min.js"></script>

    <link rel="stylesheet" href="css/page-common.css">
    <style type="text/css">
        .gisResourceTotalScore {
            font-size: 64px;
            float: left;
            background: #eee;
            border: 1px solid #999;
            padding: 20px;
            margin: 0 20px 20px 0;
            color: green;
        }

        .gisResourceTotalDescribe {
            font-size: 24px;
            line-height: 300%;
        }

        .serviceSortList li {
            float: left;
            list-style: none;
            width: 24%;
            padding: 10px;
        }

        h5{
            font-size: 14px;
            padding: 10px 20px;
            background: #eee;
        }
    </style>

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
                <a href="/view/usersys/platform-admin/index.jsp"><img src="img/siteLogo-platformAdmin.gif"/></a>
            </div>

            <!-- 用户信息 -->
            <div class="userInfo">
                <img class="userIcon" src="img/user-pic.gif">

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
<!--                 <div class="currentPosition">
                    当前位置： <a href="#">首页</a> &gt <a href="#">综合运维管理系统</a> &gt
                    <a href="#">云资源管理</a> &gt GIS云服务
                </div>
 -->
                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">订单处理队列</h3>

                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#allServicePanel" data-toggle="tab">正在处理</a></li>
                        <li><a href="#runServicePanel" data-toggle="tab">处理成功(10)</a></li>
                        <li><a href="#stopServicePanel" data-toggle="tab">处理失败(3)</a></li>
                        <li><a href="#errorServicePanel" data-toggle="tab">待处理(10)</a></li>
                    </ul>

                    <div class="tab-content">

                        <!-- 正在处理面板内容 -->
                        <div class="tab-pane active" id="allServicePanel">
                            <h5>订单基本信息</h5>
                            <p><b>订单编号：</b> 1418872004099</p>
                            <p><b>所属用户：</b> username  </p>
                            <p><b>所属机构：</b> 某市某局 </p>
                            <p><b>生成时间：</b> 2014-12-18 11:06:44  </p>

                            <h5>订单处理进程</h5>
                            <table class="table table-condensed table-hover">
                                <thead>
                                <tr>
                                    <th>资源名称</th>
                                    <th>处理状态</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>广东全省100万影像底图</td>
                                    <td>模板投递成功</td>
                                    <td><a href="#">商品详情</a>
                                        <a href="#">查看日志</a></td>
                                </tr>
                                <tr>
                                    <td>广东全省100万影像底图</td>
                                    <td>模板投递失败</td>
                                    <td><a href="#">商品详情</a>
                                        <a href="#">查看日志</a></td>
                                </tr>
                                <tr>
                                    <td>广东全省100万影像底图</td>
                                    <td>正在处理</td>
                                    <td><a href="#">商品详情</a>
                                        <a href="#">查看日志</a></td>
                                </tr>
                                <tr>
                                    <td>广东全省100万影像底图</td>
                                    <td>排队中</td>
                                    <td><a href="#">商品详情</a>
                                        <a href="#">查看日志</a></td>
                                </tr>
                                <tr>
                                    <td>广东全省100万影像底图</td>
                                    <td>排队中</td>
                                    <td><a href="#">商品详情</a>
                                        <a href="#">查看日志</a></td>
                                </tr>

                                </tbody>
                            </table>

                        </div>

                        <!-- 正在运行服务面板内容 -->
                        <div class="tab-pane" id="runServicePanel">
                            正在运行服务
                        </div>

                        <!-- 已停止服务面板内容 -->
                        <div class="tab-pane" id="stopServicePanel">
                            已停止服务
                        </div>

                        <!-- 访问异常服务面板内容 -->
                        <div class="tab-pane" id="errorServicePanel">
                            访问异常服务
                        </div>
                    </div>
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
</script>
</body>
</html>