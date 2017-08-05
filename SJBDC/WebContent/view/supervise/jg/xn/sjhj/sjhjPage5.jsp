<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
<meta charset="UTF-8">
<title>交换趋势</title>
<title></title>
<%@ include file="../../../../Common/header/base.jsp"%>
<%@ include file="../../../../Common/header/bootstarp.jsp"%>
<%-- <%@ include file="../../../../Common/header/bootstarp-dateRange.jsp"%> --%>
<%@ include file="../../../../Common/header/bootstarp-timePicker.jsp"%>
<%@ include file="../../../../Common/header/city.jsp"%>
<%@ include file="../../../../Common/header/echart.jsp"%>
<%@ include file="../../../../Common/header/filter.jsp"%>
<%@ include file="../../../../Common/header/head.jsp"%>
<%@ include file="../../../../Common/header/common.jsp"%>
<link type="text/css" rel="stylesheet" href="sjhjPage5.css">

<script type="application/javascript" src="sjhjPage5.js"></script>

<style>
.filter-plugin-area {
	display: block;
}
</style>
</head>
<body>
	<%@ include file="../../head.jsp"%>
	<div class="container">
		<div class="gzjz-page">
			<div class="filterDiv" style="padding-top: 20px; padding-right: 15px">

			</div>
			<div class="mainContent" style="top: 50px;">
				<div class="width100 height100" style="position: relative">
					<div class="zongChart" id="zongChart" style="top: 0px;">
						<div class="tipMsg">
							<span>汇交总量为<b class="word2" id="HJZL"></b>,上报总量为<b
								class="word2" id="SBZL"></b></span>
						</div>
						<div class="colaverage4" id="zszmzzt"></div>
						<div class="colaverage6 table1 fix-table" id="qszstable">
							<table id="resultList" style="font-size: 14px; top: 10px"></table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>