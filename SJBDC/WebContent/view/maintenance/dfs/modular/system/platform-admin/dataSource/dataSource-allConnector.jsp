<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>武大吉奥GIS云平台 - 综合运维管理系统</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <link rel="stylesheet" href="../fe-lib/bootstrap/3.3.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../fe-lib/bootstrap/3.3.2/css/bootstrap-theme.min.css">

    <script type="text/javascript" src="../fe-lib/jquery/1.11.2/jquery.min.js"></script>
    <script type="text/javascript" src="../fe-lib/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../fe-lib/jquery-slimScroll/1.3.3/jquery.slimscroll.min.js"></script>

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
                <a href="../home/index.jsp"><img src="img/siteLogo-platformAdmin.gif"/></a>
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
<!--                 当前位置
                <div class="currentPosition">
                    当前位置： <a href="#">首页</a> &gt <a href="#">综合运维管理系统</a> &gt
                    <a href="#">云资源管理</a> &gt 全部数据库连接
                </div> -->

                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">全部数据库连接</h3>

                    <form class="form-inline">
                        <div class="form-group">
                            <label for="queryKeywordIpt">关键字</label>
                            <input type="text" class="form-control" id="queryKeywordIpt" placeholder="请输入查询关键字">
                        </div>
                        <button type="submit" class="btn btn-default">查询</button>
                    </form>


                    <table class="table table-condensed table-hover">
                        <thead>
                        <tr>
                            <th>数据库连接名称</th>
                            <th>类型</th>
                            <th>实例名称</th>
                            <th>IP地址</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>wuhan-city-data</td>
                            <td>MySQL</td>
                            <td>database1</td>
                            <td>192.168.0.1</td>
                            <td>使用中</td>
                            <td>
                                <a href="myDataSource-datasetList.jsp">查看数据集</a>
                            </td>
                        </tr>
                        <tr>
                            <td>wuhan-city-data</td>
                            <td>MySQL</td>
                            <td>database1</td>
                            <td>192.168.0.1</td>
                            <td>使用中</td>
                            <td>
                                <a href="myDataSource-datasetList.jsp">查看数据集</a>
                            </td>
                        </tr>
                        <tr>
                            <td>wuhan-city-data</td>
                            <td>MySQL</td>
                            <td>database1</td>
                            <td>192.168.0.1</td>
                            <td>使用中</td>
                            <td>
                                <a href="myDataSource-datasetList.jsp">查看数据集</a>
                            </td>
                        </tr>
                        <tr>
                            <td>wuhan-city-data</td>
                            <td>MySQL</td>
                            <td>database1</td>
                            <td>192.168.0.1</td>
                            <td>使用中</td>
                            <td>
                                <a href="myDataSource-datasetList.jsp">查看数据集</a>
                            </td>
                        </tr>

                        </tbody>
                    </table>

                    <div id="resourceListToolbar">
                        <a href="myDataSource-addConnector.jsp" class="btn btn-default pull-left">添加数据库连接</a>

                        <nav class="pull-right">
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
                        </nav>
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