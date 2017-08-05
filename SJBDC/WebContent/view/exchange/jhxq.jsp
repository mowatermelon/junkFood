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
<%@ include file="../Common/header/icheck.jsp"%>
<%@ include file="../Common/header/common.jsp"%>
<link type="text/css" rel="stylesheet" href="table.css?v=${v }" />
</head>
<body>
	<div class="base-container">
		<div class="query-box">
			<div class="inner-box arrow-down">
				<span class="data-box-title">地区选择：</span> <input
					class="data-box-text-area city-area" id="cityChoice" />
			</div>
			<div class="inner-box arrow-down">
				<span class="data-box-title">汇交时间：</span> <input
					class="data-box-text-area date-range" id="timeRange" />
			</div>
			
			<div class="inner-box check-box">
				<span class="data-box-title">是否汇总：</span> 
				<label for="check_yes"><input type="radio"name="iCheck" checked value="0" id="check_yes"><span>是</span></label>
				<label for="check_no"><input type="radio"name="iCheck" value="1" id="check_no"><span>否</span></label>
				 
			</div>
			<div class="inner-box btn-box">
				<a id="queryBtn">查询</a> <a id="exportBtn">导出Excel</a>
			</div>
		</div>
		<div class="table-box fix-table">
			<table id="resultList"></table>
		</div>
	</div>
	<script src="jhxq.js?v=${v }" type="text/javascript"></script>

</body>
</html>