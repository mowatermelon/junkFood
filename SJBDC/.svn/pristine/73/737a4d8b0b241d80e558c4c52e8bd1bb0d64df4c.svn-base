<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<head>
	<base href="<%=basePath%>" />
    <title>武大吉奥GIS云平台 - 综合运维管理系统</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <jsp:include page="/view/usersys/inc/common-felib.jsp"/>

    <link rel="stylesheet" href="platform-admin/css/page-common.css" />

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
            <jsp:include page="/view/usersys/platform-admin/inc/siteHeader.jsp"/>
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
                    <a href="#">云资源管理</a> &gt 存储资源
                </div> -->

                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">存储资源</h3>

                    <table class="table table-condensed table-hover">
                        <thead>
                        <tr>
                            <th>实例信息</th>
                            <th>类型</th>
                            <th>区域</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>实例名</td>
                            <td>MySql</td>
                            <td>区域1</td>
                            <td>运行中</td>
                            <td><a href="myCloudResource-resourceManage.jsp">管理</a></td>
                        </tr>
                        <tr>
                            <td>实例名</td>
                            <td>MySql</td>
                            <td>区域1</td>
                            <td>运行中</td>
                            <td><a href="myCloudResource-resourceManage.jsp">管理</a></td>
                        </tr>
                        <tr>
                            <td>实例名</td>
                            <td>MySql</td>
                            <td>区域1</td>
                            <td>运行中</td>
                            <td><a href="myCloudResource-resourceManage.jsp">管理</a></td>
                        </tr>
                        <tr>
                            <td>实例名</td>
                            <td>MySql</td>
                            <td>区域1</td>
                            <td>运行中</td>
                            <td><a href="myCloudResource-resourceManage.jsp">管理</a></td>
                        </tr>
                        <tr>
                            <td>实例名</td>
                            <td>MySql</td>
                            <td>区域1</td>
                            <td>运行中</td>
                            <td><a href="myCloudResource-resourceManage.jsp">管理</a></td>
                        </tr>

                        </tbody>
                    </table>

                    <nav id="paginationBar">
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

    <!-- 页面尾部 -->
    <div class="pageFooter clearfix">
        <div class="copyrightInfo">
            <p>Copyright  2014 GeoStar Inc. - 武大吉奥信息技术有限公司 - 鄂ICP备05007169号 </p>
        </div>

    </div>

</div>

<script>
    setPanelScroll();
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
    //$('.mainPanel').slimScroll();
</script>
</body>
</html>