<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@ include file="../Common/header/base.jsp"%>
<%@ include file="../Common/header/echart.jsp"%>
<%@ include file="../Common/header/bootstarp.jsp"%>
<%@ include file="../Common/header/bootstarp-dateRange.jsp"%>
<%@ include file="../Common/header/city.jsp"%>
<%@ include file="../Common/header/common.jsp"%>
<style>
.base-container {
	width: 100%;
}

.container-header {
	background: #F3F3F3;
	position: relative;
}

.nav-tabs {
	border-bottom: none;
}

.nav-tabs>li {
	margin-bottom: 0px;
}

.nav>li>a {
	padding: 12px 51px;
	font-size: 1rem;
	color: #555555;
	border: none !important;
	background: none !important;
}

.nav-tabs .active a {
	color: #FE8626 !important;
	border-bottom: 2px solid #FE8626 !important;
}

.nav>li>a:hover {
	background: none;
}

.container-header .plugin-box {
	position: absolute;
	top: 6px;
	right: 12px;
}

.plugin-box a {
	position: relative;
}

.plugin-box .arrow-down {
	width: 0;
	height: 0;
	border-top: 6px solid #565656;
	border-right: 3px solid transparent;
	border-left: 3px solid transparent;
	position: absolute;
	top: 14px;
	right: 8px;
}

.plugin-box input {
	border: none;
	height: 34px;
	padding: 0 8px;
	color: #686868;
	font-size: .9rem;
	font-weight: normal;
}

.plugin-box .city-box input {
	width: 89px;
}

.plugin-box .date-box input {
	width: 200px;
}

.daterangepicker .calendar {
	max-width: 390px !important
}

.table-box table {
	font-size: .9rem;
}

.fix-table .fixed-table-header {
	background: #D1F3FF !important;
	font-size: 1rem !important;
}

.fix-table .table-striped>tbody>tr:nth-of-type(2n) {
	background-color: #EEFCFF !important;
}

.box-title {
	position: relative;
	padding: 12px 0;;
}

.box-title span {
	color: #0298CD;
	border-left: 7px solid #02A3D9;
	padding-left: 10px;
	font-weight: 700;
}

.box-title .btn-area {
	position: absolute;
	right: 0px;
	top: 7px;
}

.box-title .btn-area a {
	display: inline-block;
	background: #EAEAEA;
	color: #282828;
	padding: 5px 30px;
	font-size: .9rem;
}

.btn-area .selected {
	color: #fff !important;
	background: #03A2D9 !important;
}


.fixed-table-container thead th .th-inner {
	color: #556061;
}



.echart-inner-box {
	min-height: 220px;
}
</style>
</head>
<body>
	<div class="container-header">
		<ul id="myTab" class="nav nav-tabs">
			<li class="active"><a href="#data-area-box"
				data-table="resultList1" data-toggle="tab">按时间</a></li>
			<li><a href="#city-area-box" data-table="resultList2"
				data-toggle="tab">按区域</a></li>
		</ul>

		<div class="plugin-box">
			<a class="city-box"> <input id="cityChoice" readonly /> <span
				class="arrow-down"></span>
			</a> <a class="date-box"> <input readonly id="timeRange" /> <span
				class="arrow-down"></span>
			</a>
		</div>
	</div>
	<div class="container base-container tab-content">
		<div class="tab-pane fade in active" id="data-area-box">
			<div class="echart-box">
				<div class="row">
					<div class="col-xs-6">
						<div class="box-title">
							<span>数据上报（按时间）</span>
						</div>
						<div id="resultList1-line-echart" class="echart-inner-box"></div>
					</div>
					<div class="col-xs-6">
						<div class="box-title">
							<span>异常分析（按时间）</span>
						</div>
						<div id="resultList1-bar-echart" class="echart-inner-box"></div>
					</div>
				</div>
			</div>
			<div class="table-box fix-table">
				<div class="box-title">
					<span>上报数据详情(按时间)</span>
				</div>
				<table id="resultList1"></table>
			</div>
		</div>
		<div class="tab-pane fade" id="city-area-box">
			<div class="echart-box tab-content">
				<div class="row tab-pane fade in active" id="echart-box-line">
					<div class="col-xs-12">
						<div class="box-title">
							<span>数据上报（按区域）</span>
						</div>
						<div id="resultList2-bar-echart1" class="echart-inner-box"></div>
					</div>
				</div>

				<div class="row tab-pane fade" id="echart-box-bar">
					<div class="col-xs-12">
						<div class="box-title">
							<span>异常分析（按区域）</span>
						</div>
						<div id="resultList2-bar-echart2" class="echart-inner-box"></div>
					</div>
				</div>
			</div>

			<div class="table-box fix-table">
				<div class="box-title">
					<span>上报数据详情(按区域)</span>
					<div class="btn-area nav nav-tabs">
						<a class="selected" href="#echart-box-line">上报详情</a><a
							href="#echart-box-bar">异常分析</a>
					</div>
				</div>
				<table id="resultList2"></table>
			</div>
		</div>

	</div>
	<script src="sjsb.js?v=${v }" type="text/javascript"></script>
	<script>
		
	</script>
</body>
</html>