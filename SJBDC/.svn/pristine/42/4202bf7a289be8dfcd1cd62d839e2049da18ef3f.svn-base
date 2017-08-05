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
                    <a href="#">云资源管理</a> &gt 数据集列表
                </div>

                <!-- 主面板内容 -->
                <div class="mainPanelContent">

                    <h3 class="functionTitle">数据集列表</h3>

                    <h5>所属数据连接：wuhan-city-database</h5>

                    <form class="form-inline">

                        <div class="form-group pull-left">
                            <label for="datasetTypeSel">数据类型</label>
                            <select id="datasetTypeSel" class="form-control">
                                <option value="全部分类">全部分类</option>
                                <option value="兴趣点瓦片">兴趣点瓦片</option>
                                <option value="地势图瓦片">地势图瓦片</option>
                                <option value="地形瓦片">地形瓦片</option>
                                <option value="多时相三维地形瓦片">多时相三维地形瓦片</option>
                                <option value="多时相三维模型瓦片">多时相三维模型瓦片</option>
                                <option value="多时相地势瓦片">多时相地势瓦片</option>
                                <option value="多时相影像瓦片">多时相影像瓦片</option>
                                <option value="多时相矢量瓦片">多时相矢量瓦片</option>
                                <option value="影像瓦片">影像瓦片</option>
                                <option value="模型瓦片">模型瓦片</option>
                                <option value="矢量">矢量</option>
                                <option value="矢量标注">矢量标注</option>
                                <option value="矢量点">矢量点</option>
                                <option value="矢量瓦片">矢量瓦片</option>
                                <option value="矢量线">矢量线</option>
                                <option value="矢量面">矢量面</option>
                            </select>
                        </div>

                        <div class="form-group pull-right">
                            <label for="queryKeywordIpt">关键字</label>
                            <input type="text" class="form-control" id="queryKeywordIpt" placeholder="请输入查询关键字">
                            <button type="submit" class="btn btn-default">查询</button>
                        </div>
                    </form>

                    <table class="table table-condensed table-hover">
                        <thead>
                        <tr>
                            <th>数据集名称</th>
                            <th>数据集类型</th>
                            <th>数据量</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>工业一级区片基准地价</td>
                            <td>兴趣点瓦片</td>
                            <td>12MB</td>
                            <td>使用中</td>
                            <td>详细信息 </td>
                        </tr>
                        <tr>
                            <td>工业一级区片基准地价</td>
                            <td>兴趣点瓦片</td>
                            <td>12MB</td>
                            <td>使用中</td>
                            <td>详细信息 </td>
                        </tr>
                        <tr>
                            <td>工业一级区片基准地价</td>
                            <td>兴趣点瓦片</td>
                            <td>12MB</td>
                            <td>使用中</td>
                            <td>详细信息 </td>
                        </tr>
                        <tr>
                            <td>工业一级区片基准地价</td>
                            <td>兴趣点瓦片</td>
                            <td>12MB</td>
                            <td>使用中</td>
                            <td>详细信息 </td>
                        </tr>

                        </tbody>
                    </table>

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