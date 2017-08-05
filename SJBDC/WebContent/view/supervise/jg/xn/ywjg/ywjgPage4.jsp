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
<%@ include file="../../../../Common/header/bootstarp-timePicker.jsp"%>
<%@ include file="../../../../Common/header/echart.jsp"%>
<%@ include file="../../../../Common/header/common.jsp"%>
<style>
html, body {
	height: 100%;
	width: 100%;
	background: #FFF;
	overflow: hidden;
}

.data-content .box-title {
	padding: .8rem;
	background: #F2F2F2;
	font-size: 1.2rem;
}
.container{
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    margin:0px;
    padding: 10px 10% 0px 10%;
}
.data -content .data-panel {
	background: #fff;
	padding: 3rem 1.5rem;
}

.data-content .query-box {
	border: 1px solid #DBDBDB;
	margin: 0 auto 10px auto;
	position: relative;
	overflow: hidden;
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
	
	font-size: 1rem;
	
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



.box-title {
	color: #464646;
	font-size: 1.2rem;
	padding: 1rem 0;
}

.modal-dialog {
	width: 900px;
	margin: 30px auto;
}

.modal-header {
	padding: 8px 15px !important;
}
</style>
</head>
<body>
	<%@ include file="../../head.jsp"%>
	<!-- 模态框（Modal） -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="myModalLabel">登记信息</h4>
				</div>
				<div class="modal-body">
					<iframe src="dialogTable.html"
						style="width: 100%; height: 500px; border: none"></iframe>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal -->
	</div>

	<div id="clsjhj-content" class="container">
				<span class="glyphicon titleIcon box-title">&nbsp;异常查询</span>
		<div class="data-content">
			<div class="data-panel">
				<div class="query-box">
					<div class="inner-box">
						<span class="data-box-title">地区选择：</span> <input
							class="data-box-text-area" id="cityChoice" style="width: 170px;" />
						<span class="glyphicon  glyphicon-chevron-down input-icon"></span>
						<input type="hidden" id="cityCode" />
					</div>
					<div class="inner-box">
						<span class="data-box-title">业务号：</span> <input
							class="data-box-text-area" id="ywh" style="width: 170px;" />
					</div>
					<div class="inner-box">
						<span class="data-box-title">登记类型：</span> <select
							class="data-box-text-area" id="djlx" style="width: 170px;">
							<option value="">---请选择---</option>
							<option value="首次登记">首次登记</option>
							<option value="转移登记">转移登记</option>
							<option value="变更登记">变更登记</option>
							<option value="更正登记">更正登记</option>
							<option value="预告登记">预告登记</option>
							<option value="异议登记">异议登记</option>
							<option value="查封登记">查封登记</option>
							<option value="查封登记">注销登记</option>
						</select>
					</div>

					<div class="inner-box">
						<span class="data-box-title">异常说明：</span> <select
							class="data-box-text-area" id="ycdm" style="width: 170px;">
							<option value="">---请选择---</option>
							<option value="201">时序异常</option>
							<option value="202">超期办理</option>
							<option value="203">逻辑异常</option>
							<option value="205">证书异常</option>
							<option value="204">其他异常</option>
						</select>
					</div>
					<!-- 
					<div class="inner-box">
						<span class="data-box-title">时间区间：</span> <input
							class="data-box-text-area" id="timeRange" style="width: 170px;" />
					</div>
					 -->
					<a href="#" onclick="searchBtn(0);return false;" id="searchBtn">查询</a>
					<a href="#" onclick="searchBtn(1);return false;" id="searchBtn">重置</a>
				</div>
				<div class="table-box fix-table">
					<table id="resultList" style="font-size: 0.9rem !important;"></table>
				</div>
			</div>
		</div>
	</div>
	<div class="modal" id="modalView">
		<div class="modal-dialog modal-lg" style="width:70%;">
			<div class="modal-content" >
			<div style="height:80%;background: #fff">
			<iframe id="iframeModal" style="width:100%;height:100%"  frameborder=”no” border=”0″ marginwidth=”0″ marginheight=”0″></iframe>
			
			</div>
			</div>
			</div>
	</div>
	<script src="ywjgPage4.js?v=${v }" type="text/javascript"></script>
</body>
</html>
