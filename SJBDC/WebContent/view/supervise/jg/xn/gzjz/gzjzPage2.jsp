<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
<meta charset="UTF-8">
<title></title>
<%@ include file="../../../../Common/header/base.jsp"%>
<%@ include file="../../../../Common/header/bootstarp.jsp"%>
<%@ include file="../../../../Common/header/echart.jsp"%>
<%@ include file="../../../../Common/header/head.jsp"%>
<%@ include file="../../../../Common/header/common.jsp"%>
<style>
.container{
	width:100%;
	padding: 0 10%;
}
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

.fixed-table-header {
	background: #eef3f7 !important;
	font-size: 1rem !important;
}

.table-striped > tbody > tr:nth-of-type(2n+1) {
    background-color: #fff;
}

.table-striped>tbody>tr:nth-of-type(2n) {
	background-color: #eef3f7 !important;
}

</style>
</head>
<body>
	<%@ include file="../../head.jsp"%>
	<div class="container">
		<div class="filterDiv "></div>
		<div>
			<table id="resultList"></table>
		</div>
	</div>
	<script type="application/javascript" src="gzjzPage2.js"></script>

	
</body>
</html>