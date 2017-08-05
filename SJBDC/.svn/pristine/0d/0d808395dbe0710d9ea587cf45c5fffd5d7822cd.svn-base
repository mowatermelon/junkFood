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
                <div class="currentPosition">
                    当前位置： <a href="#">首页</a> &gt <a href="#">综合运维管理系统</a> &gt
                    <a href="#">云资源管理</a> &gt GIS云服务
                </div>

                <!-- 主面板内容 -->
                <div class="mainPanelContent">
                    <h3 class="functionTitle">GIS云服务</h3>

                    <div class="gisResourceResume clearfix">
                        <div class=gisResourceTotalScore>100</div>
                        <div class="gisResourceTotalDescribe">体检得100分,系统运行良好</div>
                        <div class="serviceTotalDescribe">0个服务已停止, 0个服务访问异常</div>
                    </div>

                    <h3>服务概况</h3>

                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#allServicePanel" data-toggle="tab">全部(10)</a></li>
                        <li><a href="#runServicePanel" data-toggle="tab">运行中(10)</a></li>
                        <li><a href="#stopServicePanel" data-toggle="tab">已停止(0)</a></li>
                        <li><a href="#errorServicePanel" data-toggle="tab">访问异常(2)</a></li>

                    </ul>

                    <div class="tab-content">

                        <!-- 所有服务面板内容 -->
                        <div class="tab-pane active" id="allServicePanel">
                            <ul class="serviceSortList">
                                <li><a href="resourceManage-gis-resourceList.jsp">GeoGlobe地图服务:6</a></li>
                                <li><a href="resourceManage-gis-resourceList.jsp">GeoGlobe三维模型服务:0</a></li>
                                <li><a href="resourceManage-gis-resourceList.jsp">GeoGlobe公交服务:0</a></li>
                                <li><a href="resourceManage-gis-resourceList.jsp">GeoGlobe要素服务:4</a></li>
                                <li><a href="resourceManage-gis-resourceList.jsp">GeoGlobe地名地址服务:0</a></li>
                                <li><a href="resourceManage-gis-resourceList.jsp">GeoGlobe路径分析服务:0</a></li>
                                <li><a href="resourceManage-gis-resourceList.jsp">GeoGlobe空间处理服务:0</a></li>
                                <li><a href="resourceManage-gis-resourceList.jsp">GeoGlobe三维地名服务:0</a></li>
                                <li><a href="resourceManage-gis-resourceList.jsp">GeoGlobe专题图服务:0</a></li>
                                <li><a href="resourceManage-gis-resourceList.jsp">GeoGlobe路网导航服务:0</a></li>
                            </ul>
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