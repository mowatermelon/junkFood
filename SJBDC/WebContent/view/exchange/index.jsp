<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<html>
<head>
<title></title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript"
	src="http://api.map.baidu.com/api?v=2.0&ak=ZUONbpqGBsYGXNIYHicvbAbM"></script>
<%@ include file="../Common/header/base.jsp"%>
<%@ include file="../Common/header/bootstarp.jsp"%>
<%@ include file="../Common/header/echart.jsp"%>
<%@ include file="../Common/header/common.jsp"%>
    <script src="${base }view/Common/js/city.js?v=${v }" type="text/javascript"></script>
<style type="text/css">
html, body {
	height: 100%;
	width: 100%;
	background: #EFF4F7;
	overflow: hidden;
}

.inner-box {
	position: relative;
	overflow: hidden;
}

.map-box {
	border: 1px solid #b3b6c2;
	background: #fff;
}

.inner-box  .table-box {
	position: absolute;
	z-index: 999;
}

.inner-box .panel-box {
	position: absolute;
	width: 19%;
	z-index: 999;
}

.inner-box .msg-box {
	position: absolute;
	z-index: 9;
	top: 20px;
	right: 20px;
}

.inner-box  .table-box {
	width: 40%;
	bottom: 20px;
	right: 20px;
	width: 40%;
}

.inner-box .panel-box {
	top: 20px;
	left: 20px;
}

.fixed-table-body tr td {
	padding: 4px !important;
	vertical-align: middle;
}

.fixed-table-container thead th .th-inner, .fixed-table-container tbody td .th-inner
	{
	padding: 4px;
	font-size: 1rem
}

#resultList {
	font-size: .9rem;
}

.map-box #main1 {
	position: absolute;
	left: 0;
	right: 0;
	z-index: 99;
}

.panel-box .data-box {
	width: 100%;
	margin-bottom: 10px;
}

.panel-box .box-title {
	padding: 8px;
	background: #23BFF2;
	color: #fff;
	font-size: 1.2rem;
	text-align: center;
	font-weight: 700;
}

.data-box .data-inner-box {
	padding: 3px 10px;
	overflow: hidden;
	background: #F7FBFE;
}

.data-inner-box .cell-block {
	width: 50%;
	float: left;
	text-align: center;
	padding-bottom: 15px;
	color: #232323;
}

.cell-block b, .cell-block span {
	display: block;
}

.cell-block b {
	font-size: 2rem;
	padding: 15px 0;
}

.cell-block:nth-child(1)>b {
	color: #14B3F4
}

.cell-block:nth-child(2)>b {
	color: #04B9CE
}

.cell-block:nth-child(3)>b {
	color: #20C34E
}

.cell-block:nth-child(4)>b {
	color: #FE457E
}

.cell-block:nth-child(1), .cell-block:nth-child(2) {
	border-bottom: 1px solid #DEDEDE;
}

.cell-block:nth-child(1), .cell-block:nth-child(3) {
	border-right: 1px solid #DEDEDE;
}

.fix-table .fixed-table-header {
	background: none !important;
}

.fix-table .table-striped>tbody>tr {
	background: none !important;
}

.fix-table .table-striped>tbody>tr:nth-of-type(2n) {
	background: none !important;
}
.msg-box a{
	background:#FBFDFC;
	border:1px soild #DDE1E2;
	padding:6px 15px;
	color:#9A9A9A;
}
.msg-box a span:nth-child(1){
	margin-right:20px;
}
.msg-box b{
	color:#FF9B01;
	font-size:1.5rem;
	padding:0 8px;
}
.fixed-table-header table{
    border-bottom: 2px solid #5DC0E7 !important;
}

</style>
</head>
<body>
	<div id="index-content">
		<div class="inner-box">
			<div class="panel-box"></div>
			<div class="msg-box">
				<a><span>接入率：<b>0.85%</b></span><span>已接入：<b>1/121</b></span></a>
			</div>
			<div class="map-box">
				<div id="main1"></div>
				<div id="main"></div>
			</div>
			<div class="table-box fix-table">
				<table id="resultList"></table>
			</div>
		</div>
	</div>
	<script src="index.js?v=${v }" type="text/javascript"></script>
</body>
</html>

