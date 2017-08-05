<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<html>
<head>
<title></title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
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
html, body {
	height: 100%;
	width: 100%;
	background: #FFF;
	overflow: hidden;
}
.container{
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    padding: 0 10%;
}
.data-content .box-title {
	padding: .8rem;
	background: #F2F2F2;
	font-size: 1.2rem;
}

.data-content .query-box {
	height: 60px;
	border: 1px solid #DBDBDB;
	margin: 0 auto 10px auto;
	position: relative;
}

.query-box .inner-box {
	position: relative;
	overflow: hidden;
	float: left;
}

.inner-box .data-box-title {
	color: #333333;
	padding: 0 12px;
	float: left;
	height: 60px;
	line-height: 60px;
}

.inner-box .data-box-text-area {
	float: left;
	width: 327px;
	border: 1px solid #DBDBDB;
	height: 30px;
	margin-top: 15px;
	position: relative;
	display: block;
	padding: 0px 8px;
}

.inner-box .data-box-text-area>span {
	float: right;
	margin-top: 5px;
}

.inner-box .input-icon {
	position: absolute;
	top: 20px;
	left: 400px;
}

.chaxun {
	float: left;
	padding: 2.5px 20px;
	margin: 15px 50px;
}

.fixed-table-header thead {
	color: #fff;
	font-size: 1rem;
	font-weight: 700;
}

.query-box a {
	display: block;
	background: #1C7099;
	padding: 5px 25px;
	float: left;
	margin: 14px 15px;
	color: #fff;
	padding: 5px 25px;
	float: left;
	margin: 14px 15px;
}

th {
	color: black;
	background-color: white;
	border-bottom: 1px;
}

.box-title {
	color: #464646;
	font-size: 1.2rem;
	padding: 1rem 0;
}
</style>
</head>
<body>
	<%@ include file="../../head.jsp"%>
	<div id="clsjhj-content" class="container">
		<div class="row box-title-area">
			<div class="col-xs-12">
				<span class="glyphicon glyphicon-stats box-title">&nbsp;舆情详情</span>
			</div>
		</div>
		<div class="data-content">
			<div class="data-panel">
				<div class="query-box">
					<div class="inner-box">
						<span class="data-box-title">关键字：</span> <input
							class="data-box-text-area" id="keyCode" style="width: 180px;" />
					</div>
					<div class="inner-box">
						<span class="data-box-title">来源：</span> <input
							class="data-box-text-area" id="ly" style="width: 180px;" />
					</div>
					<div class="inner-box">
						<span class="data-box-title">舆情影响：</span> <select
							class="data-box-text-area" id="yqys" style="width: 180px;">
							<option value="">---请选择---</option>
							<option value="0">正面</option>
							<option value="1">负面</option>

						</select>
					</div>
					<a href="#" id="searchBtn">查询</a> <a href="#" id="refrash">重置</a>
				</div>
				<div class="table-box">
					<table id="resultList" style="font-size: 0.8rem !important;"></table>
				</div>
			</div>
		</div>
	</div>
	<script src="yqjgPage4.js" type="text/javascript"></script>
</body>
</html>
