<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
<meta charset="UTF-8">
<title>印制企业</title>
<%@ include file="../../../Common/header/base.jsp"%>
<%@ include file="../../../Common/header/bootstarp.jsp"%>
<%@ include file="../../../Common/header/city.jsp"%>
<%@ include file="../../../Common/header/head.jsp"%>
<%@ include file="../../../Common/header/filter.jsp"%>
<%@ include file="../../../Common/header/bootstarp-dateRange.jsp"%>
<%@ include file="../../../Common/header/bootstarp-timePicker.jsp"%>
<%@ include file="../../../Common/header/echart.jsp"%>
<%@ include file="../../../Common/header/common.jsp"%>
<link type="text/css" rel="stylesheet" href="zsjgPage4.css">

<script type="application/javascript" src="zsjgPage4.js"></script>

</head>
<body>
	<%@ include file="../xxwhhead.jsp"%>
	<div class="container">
		<div class="mainContent">
			<div class="width100 height100" style="position: relative">
				<div class="filterDiv"></div>
				<div class="zongChart" id="zongChart">
					<div class="colaverage" style="height: 40%">
						<div
							style="width: 35%; height: 100%; float: left; position: relative">
							<div
								style="position: absolute; width: 100%; top: 0px; bottom: 0px"
								id="qyjx"></div>
						</div>
						<div
							style="width: 65%; height: 100%; float: left; position: relative">
							<div>企业劣证率总体统计</div>
							<div style="position: absolute; width: 100%; top: 50px; bottom: 0px; font-size: 14px;" class="fix-table" id="qylztable">
								<table id="qylz" style="width: 100%;font-size: 0.9rem;" border="0" cellspacing="0" cellpadding="0">
								</table>
							</div>
						</div>
					</div>
					<div style="position: absolute; width: 100%;height:60%; font-size: 14px;" class="fix-table" id="qszstable">
						<table id="qyxx" style="width: 100%; font-size: 0.9rem;" border="0" cellspacing="0" cellpadding="0">
						</table>
					</div>
				</div>
			</div>
		</div>

	</div>
</body>
</html>