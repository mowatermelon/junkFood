<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<html>
<head>
<title></title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<%@ include file="../Common/header/base.jsp"%>
<%@ include file="../Common/header/bootstarp.jsp"%>
<%@ include file="../Common/header/bootstarp-dateRange.jsp"%>
<%@ include file="../Common/header/city.jsp"%>
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
				<span class="data-box-title">反馈时间：</span> <input
					class="data-box-text-area date-range" id="timeRange" />
			</div>
			<div class="inner-box">
				<span class="data-box-title">业务号：</span> <input
					class="data-box-text-area" id="ywh" />
			</div>
			<div class="inner-box">
				<span class="data-box-title">登记类型：</span> <select
					class="data-box-text-area" id="status">
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
			<div class="inner-box btn-box">
				<a id="queryBtn">查询</a>
			</div>
		</div>
		<div class="table-box fix-table">
			<table id="resultList"></table>
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
	<script src="fkxx.js?v=${v }" type="text/javascript"></script>
</body>
</html>
