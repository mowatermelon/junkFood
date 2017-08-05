<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<html>
<head>
<title></title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<%@ include file="../../../../Common/header/base.jsp"%>
<%@ include file="../../../../Common/header/bootstarp.jsp"%>
<%@ include file="../../../../Common/header/city.jsp"%>
<%@ include file="../../../../Common/header/common.jsp"%>
<%@ include file="../../../../Common/header/head.jsp"%>
<%@ include file="../../../../Common/header/bootstarp-timePicker.jsp"%>
<style>
html, body {
	height: 100%;
	width: 100%;
	background: #FFF;
	overflow: hidden;
}

.container {
	position: absolute;
	top: 0px;
	bottom: 0px;
	width: 100%;
	padding: 0 10%;
}

.data-content .box-title {
	padding: .8rem;
	font-size: 1.2rem;
}

.data-content .data-panel {
	background: #fff;
}

.data-content .query-box {
	border: 1px solid #DBDBDB;
	margin: 0 auto 10px auto;
	position: relative;
	overflow: hidden;
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
	padding: 5px 20px;
	float: left;
	margin: 14px 10px;
	color: #fff;
	float: left;
}

.box-title {
	color: #464646;
	font-size: 1.2rem;
	padding: 1rem 0;
}

.nav-tabs a {
	background-color: #eee;
	color: #333;
	font-size: 16px;
}
</style>
</head>
<body>
	<%@ include file="../../head.jsp"%>
	<div class="container">
		<div class="row box-title-area">
			<span class="glyphicon titleIcon box-title" style="padding-left:30px;">&nbsp;交换查询</span>
		<div id="clsjhj-content">
			<div class="data-content">
				<div class="data-panel">
					<div class="query-box">
						<div class="inner-box">
							<span class="data-box-title">地区选择：</span> <input
								class="data-box-text-area" id="cityChoice" style="width: 180px;" />
							<span class="glyphicon  glyphicon-chevron-down input-icon"></span>
							<input type="hidden" id="cityCode" />
						</div>
						<div class="inner-box">
							<span class="data-box-title">业务号：</span> <input
								style="width: 100px;" class="data-box-text-area" id="ywh" />
						</div>
						<div class="inner-box">
							<span class="data-box-title">反馈时间：</span> <input
								style="width: 120px;" readonly="true" class="data-box-text-area"
								id="startDate" /> <span
								class="glyphicon  glyphicon-calendar input-icon"></span>
						</div>
						<div class="inner-box">
							<span class="data-box-title">至</span> <input
								style="width: 120px;" readonly="true" class="data-box-text-area"
								id="endDate" /> <span
								class="glyphicon  glyphicon-calendar input-icon"></span>
						</div>
						<div class="inner-box">
							<span class="data-box-title">反馈类型：</span> <select
								style="width: 100px;" class="data-box-text-area" id="status">
								<option value="">全部</option>
								<option value="正确">汇交成功</option>
								<option value="数据校验错误">数据校验错误</option>
								<option value="中心端解压错误">中心端解压错误</option>
								<option value="中心端解密错误">中心端解密错误</option>
								<option value="接收签名错误">接收签名错误</option>
								<option value="有提示信息">有提示信息</option>
								<option value="图形无法构面">图形无法构面</option>
								<option value="重复上报">重复上报</option>
							</select>
						</div>
						<a href="#" onclick="searchBtn(0);return false;" id="searchBtn">查询</a>
						<a href="#" onclick="searchBtn(1);return false;" id="searchBtn">重置</a>
					</div>
					<div class="table-box fix-table">
						<table id="resultList" style="font-size: 0.8rem !important;"></table>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="modal" id="viewModal">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
					</button>
					<h4 class="modal-title">响应报文</h4>
				</div>
				<div class="modal-body" id="RepText">
					<table class="table table-bordered">
						<tr>
							<td style="width: 120px;">报文ID</td>
							<td id="BizMsgID" style="width: 80%"></td>
						</tr>
						<tr>
							<td>成功标识</td>
							<td id="SuccessFlag"></td>
						</tr>
						<tr>
							<td>响应编码</td>
							<td id="ResponseCode"></td>
						</tr>
						<tr>
							<td>响应信息</td>
							<td id="ResponseInfo"></td>
						</tr>
						<tr>
							<td>二维码</td>
							<td id="QRCode"></td>
						</tr>
					</table>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal-dialog -->
	</div>
	<!-- /.modal -->
	<script src="sjhjPage7.js?v=${v }" type="text/javascript"></script>
</body>
</html>
