 <%@ page language="java" import="java.util.*" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>证书监管主页面</title>
<%@ include file="../../../../Common/header/base.jsp"%>
<%@ include file="../../../../Common/header/bootstarp.jsp"%>
<%@ include file="../../../../Common/header/city.jsp"%>
<%@ include file="../../../../Common/header/head.jsp"%>
<%@ include file="../../../../Common/header/filter.jsp"%>
<%@ include file="../../../../Common/header/bootstarp-dateRange.jsp"%>
<%@ include file="../../../../Common/header/echart.jsp"%>
<%@ include file="../../../../Common/header/common.jsp"%>
<%@ include file="../../../../Common/header/head.jsp"%>
    <style>
        .box-title {
            color: #464646;
            font-size: 1.2rem;
            padding: 1rem 0;
            display: block;
        }

        .data-box .data-box-title {
            background: #EEEEEE;
            padding: .4rem;
            font-size: .9rem;
            font-weight: 700;
            color: #6D6D6D;
        }

        .progress {
            height: 6px;
            overflow: hidden;
            background-color: #f5f5f5;
            border-radius: 0px;
            box-shadow: none;
        }

        .progress-box .progress-box-info {
            padding: 5px 0;
            overflow: hidden;
        }

        .progress-box-info span {
            display: block;
            color: #868686;
            width: 50%;
            float: left;
        }

        .progress-box-info span:last-child {
            text-align: right;
        }



        .point-box .text-box, .point-box .point-echart {
            width: 50%;
            float: left;
        }

        .text-box .text-title {
            font-size: 1.2rem;
            color: #ADADAD;
            padding-bottom: 1.5rem;
            padding-left: 30px;
        }

        .point-box .text-box span {
            display: block;
            padding-bottom: 2rem;
            color: #ADADAD;
            font-weight: normal;

        }

        .text-box b {
            font-weight: normal;
            padding-left: 1rem;
        }

        .text-box span .glyphicon-arrow-up {
            font-size: .8rem;
            color: #57EA9A;
            margin-left: 1rem;
        }
        .text-box span .glyphicon-arrow-down {

            font-size: .8rem;
            color: #759FEB;
            margin-left: 1rem;
        }
    </style>
</head>
<body>
	<%@ include file="../../head.jsp"%>
<div class="container">
    <div class="row">
        <div class="col-xs-3 left-panel">
            <div class="row">
                <div class="col-xs-12">


                    <span class="glyphicon glyphicon-stats box-title">&nbsp;媒体报道统计</span>

                    <div class="data-box">
                        <div class="data-box-title">网媒前五</div>
                        <div class="data-progress-panel">
                            <div class="progress-box">
                                <div class="progress-box-info">
                                    <span>中国经济网</span><span>9</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                         aria-valuemax="100" style="width: 20%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="data-progress-panel">
                            <div class="progress-box">
                                <div class="progress-box-info">
                                    <span>微博</span><span>5</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                         aria-valuemax="100" style="width: 19%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="data-progress-panel">
                            <div class="progress-box">
                                <div class="progress-box-info">
                                    <span>新华网</span><span>3</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                         aria-valuemax="100" style="width:12%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="data-progress-panel">
                            <div class="progress-box">
                                <div class="progress-box-info">
                                    <span>财新网</span><span>1</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                         aria-valuemax="100" style="width: 40%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="data-progress-panel">
                            <div class="progress-box">
                                <div class="progress-box-info">
                                    <span>论坛</span><span>1</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                         aria-valuemax="100" style="width: 40%;"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="data-box" style="margin-top: 50px">
                        <div class="data-box-title">纸媒前五</div>
                        <div class="data-progress-panel">
                            <div class="progress-box">
                                <div class="progress-box-info">
                                    <span>微博</span><span>8</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                         aria-valuemax="100" style="width: 10%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="data-progress-panel">
                            <div class="progress-box">
                                <div class="progress-box-info">
                                    <span>中国经营报</span><span>2</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                         aria-valuemax="100" style="width: 45%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="data-progress-panel">
                            <div class="progress-box">
                                <div class="progress-box-info">
                                    <span>河源日报</span><span>1</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                         aria-valuemax="100" style="width: 40%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="data-progress-panel">
                            <div class="progress-box">
                                <div class="progress-box-info">
                                    <span>羊城晚报</span><span>1</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                         aria-valuemax="100" style="width: 20%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="data-progress-panel">
                            <div class="progress-box">
                                <div class="progress-box-info">
                                    <span>国家税务总局</span><span>1</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                         aria-valuemax="100" style="width: 10%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-9 right-panel">
            <div class="row">
                <div class="col-xs-12">
                    <div class="row">
                        <div class="col-xs-6 point-box">
                            <span class="glyphicon glyphicon-stats box-title">&nbsp;媒体热门搜索</span>
                            <div class="point-echart" id="point-echart">
                            </div>
                            <div class="text-box">
                                <div class="text-title">热门搜索</div>
                                <span>1、房产税产  <b> 10</b><i class=" glyphicon glyphicon-arrow-up"></i></span>
                                <span>2、不动产<b> 8</b><i class=" glyphicon glyphicon-arrow-up"></i></span>
                                <span>3、抵押证  <b> 6</b><i class=" glyphicon glyphicon-arrow-down"></i></span>
                                <span>4、不动产登记   <b> 2</b><i class=" glyphicon glyphicon-arrow-up"></i></span>
                                <span>5、不动产;抵押   <b> 2</b><i class=" glyphicon glyphicon-arrow-down"></i></span>
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <span class="glyphicon glyphicon-stats box-title">&nbsp;今日热点关注舆情</span>
                            <table id="resultList"></table>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div id="area-echart" style="height: 300px"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript" src="yqjg.js"></script>
</body>
</html>