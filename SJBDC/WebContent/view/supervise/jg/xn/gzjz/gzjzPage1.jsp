<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
<meta charset="UTF-8">
<title>详细信息</title>
<%@ include file="../../../../Common/header/base.jsp"%>
<%@ include file="../../../../Common/header/bootstarp.jsp"%>
<%@ include file="../../../../Common/header/echart.jsp"%>
<%@ include file="../../../../Common/header/head.jsp"%>
<%@ include file="../../../../Common/header/common.jsp"%>
<%@ include file="../../../../Common/header/bootstarp-timePicker.jsp"%>
<%@ include file="../../../../Common/header/city.jsp"%>
<%@ include file="../../../../Common/header/filter.jsp"%>
<link type="text/css" rel="stylesheet" href="gzjzPage1.css">
<style>
.box-panel .box-title {
	color: #464646;
	font-size: 1.2rem;
	padding: 1rem 0px;
}

.filterDiv {
	padding: 8px 0;
	text-align: right;
	overflow: hidden;
}
</style>
</head>
<body>
	<%@ include file="../../head.jsp"%>
	<div class="container">
		<div class="filterDiv"></div>
		<div>
			<div id="bar-echart"></div>
			<div class="fix-table">
				<table id="resultList"></table>
			</div>
			
		</div>
	</div>
	<script type="application/javascript" src="gzjzPage1.js"></script>
</body>
</html>