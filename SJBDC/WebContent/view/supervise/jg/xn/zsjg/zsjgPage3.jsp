<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
<meta charset="UTF-8">
<title>证书印制计划</title>
<%@ include file="../../../../Common/header/base.jsp"%>
<%@ include file="../../../../Common/header/bootstarp.jsp"%>
<%@ include file="../../../../Common/header/city.jsp"%>
<%@ include file="../../../../Common/header/head.jsp"%>
<%@ include file="../../../../Common/header/filter.jsp"%>
<%@ include file="../../../../Common/header/bootstarp-dateRange.jsp"%>
<%@ include file="../../../../Common/header/bootstarp-timePicker.jsp"%>
<%@ include file="../../../../Common/header/echart.jsp"%>
<%@ include file="../../../../Common/header/common.jsp"%>
<link type="text/css" rel="stylesheet" href="zsjgPage3.css">
<script type="application/javascript" src="zsjgPage3.js"></script>

</head>
<body>
	<%@ include file="../../head.jsp"%>
	<div class="container">
		<div class="mainContent">
			<div class="width100 height100" style="position: relative">
				<div class="filterDiv"></div>
				<div class="zongChart" id="zongChart">
					<div class="colaverage" id="zszmzzt" style="height: 40%"></div>
					<div class="colaverage fix-table" id="qszstable"
						style="height: 60%; font-size: 14px;">
						<table id="resultList" style="font-size: 14px; top: 10px"></table>
					</div>
				</div>
			</div>
		</div>

	</div>
</body>
</html>