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
                    <h3 class="functionTitle">云资源实例管理</h3>

                    <ul class="nav nav-tabs" id="resourceManageTab">
                        <li class="active"><a href="#reourceBasicInfo" data-toggle="tab">实例详情</a></li>
                        <li><a href="#serviceConfig" data-toggle="tab">服务配置</a></li>
                        <li><a href="#serviceAuth" data-toggle="tab">服务授权</a></li>
                        <li><a href="#resourceMonitor" data-toggle="tab">实例监控</a></li>
                    </ul>

                    <div class="tab-content">

                        <div class="tab-pane active" id="reourceBasicInfo">
                            <h5>基本信息</h5>
                            <ul>
                                <li>ID： i-25hl0nnza</li>
                                <li>状态：  运行中</li>
                                <li>所在可用区： 北京可用区A</li>
                                <li>名称： iZ25hl0nnzaZ</li>
                                <li>描述：</li>
                                <li>镜像ID： win2012_stand_cn_40G_20141114.vhd</li>
                            </ul>
                            <h5>配置信息</h5>
                            <ul>
                                <li>CPU：1核</li>
                                <li>CPU主频：2GHz</li>
                                <li>内存：4GB</li>
                                <li>数据盘：10GB</li>
                                <li>操作系统：CentOS6</li>
                                <li>系统架构：x86_64</li>
                                <li>节点数量：2</li>
                            </ul>
                            <h5>付费信息</h5>
                            <ul>
                                <li>创建时间： 2014-12-29 16:58:40</li>
                                <li>购买时长： 1年</li>
                                <li>到期时间： 2015-06-30 00:00</li>
                            </ul>

                        </div>

                        <div class="tab-pane" id="serviceConfig">
                            <h5>基本信息</h5>
                            <ul>
                                <li>服务名称：img100</li>
                                <li>服务名称：广东全省100万影像底图</li>
                                <li>服务访问地址：http://xxx.com/img100</li>
                            </ul>
                            <h5>服务元信息</h5>
                            <ul>
                                <li>标题：XXXXXXXX</li>
                                <li>关键字：XXXXXXXX</li>
                                <li>单位：XXXXXXXX</li>
                                <li>联系人：XXXXXXXX</li>
                                <li>电话：XXXXXXXX</li>
                                <li>地址 ：XXXXXXXX</li>
                                <li>省份：XXXXXXXX</li>
                                <li>国家：XXXXXXXX</li>
                                <li>摘要：XXXXXXXX</li>
                                <li>在线资源  ：XXXXXXXX</li>
                                <li>网站：XXXXXXXX</li>
                                <li>职位 ：XXXXXXXX</li>
                                <li>传真：XXXXXXXX</li>
                                <li>城市：XXXXXXXX</li>
                                <li>邮编：XXXXXXXX</li>
                                <li>邮箱：XXXXXXXX</li>
                            </ul>
                            <h5>数据源信息</h5>
                            <ul>
                                <li>数据连接：mysql_connect</li>
                                <li>数据集名称：liangjunxiong.工业一级区片基准地价</li>
                                <li>数据集类型：矢量面</li>
                            </ul>
                        </div>

                        <div class="tab-pane" id="serviceAuth">

                        </div>

                        <div class="tab-pane" id="resourceMonitor">

                        </div>
                    </div>

                    <script>
                        $(function () {
                            $('#resourceManageTab a:first').tab('show')
                        })
                    </script>


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