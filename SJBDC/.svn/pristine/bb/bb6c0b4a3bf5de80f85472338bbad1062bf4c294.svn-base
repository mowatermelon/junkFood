<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<html>
<head>
<title></title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<script type="application/javascript" src="../../../../Script/jquery.js"></script>
<%@ include file="../../../../Common/header/base.jsp"%>
<%@ include file="../../../../Common/header/bootstarp.jsp"%>
<%@ include file="../../../../Common/header/bootstarp-timePicker.jsp"%>
<%@ include file="../../../../Common/header/city.jsp"%>
<%@ include file="../../../../Common/header/head.jsp"%>
<%@ include file="../../../../Common/header/common.jsp"%>

<style>
html, body {
	height: 100%;
	width: 100%;
	background: #FFF;
	overflow: hidden;
}

.container{
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
	font-weight: 700;
}



.query-box a {
	display: block;
	background: #1C7099;
	padding: 5px 30px;
	float: left;
	color: #fff;
	padding: 5px 30px;
	float: left;
	margin: 14px 15px;
	
}
.box-title {
	color: #464646;
	font-size: 1.2rem;
	padding: 1rem 0;
}

th {
	color: black;
	border-bottom: 1px;
}
</style>
</head>
<body><%@ include file="../../head.jsp"%>
	<div class="container">
		<div class="row box-title-area">
				<span class="glyphicon titleIcon box-title">&nbsp;证书查询</span>
		</div>
		<div id="clsjhj-content">
			<div class="data-content">
				<div class="data-panel">
					<div class="query-box">
					<div style="width:100%;height:60px;">
						<div class="inner-box">
							<span class="data-box-title">地区选择：</span> <input
								style="width: 200px;" class="data-box-text-area" id="cityChoice" />
							<span class="glyphicon  glyphicon-chevron-down input-icon"></span>
						</div>
						<div class="inner-box">
							<span class="data-box-title">类型：</span><select
								style="width: 200px;" class="data-box-text-area" id="type">
								<option value="">---请选择---</option>
								<option value="1">证书</option>
								<option value="2">证明</option>
							</select>
						</div>
						 
						
						<div class="inner-box">
							<span class="data-box-title">使用情况：</span> <select
								style="width: 200px;" class="data-box-text-area" id="status">
								<option value="">---请选择---</option>
								<option value="4">未使用</option>
								<option value="1">已使用</option>								
								<option value="2">已废弃</option>
								<option value="3">已回收</option>
							</select>
						</div>
						</div>
						<div class="inner-box">
							<span class="data-box-title">印刷号：</span> <input
								style="width: 200px;" class="data-box-text-area" id="ysh" />
						</div>
						<div class="inner-box">
							<span class="data-box-title">印制企业：</span> <input
								style="width: 200px;" class="data-box-text-area" id="yzqy" />
						</div>
						<div style="width:100%;height:60px;display: inline-block;">
						<a href="#" onclick="searchBtn(0);return false;" id="searchBtn" style="margin-right:0px;float:left">查询</a>
						<a href="#" onclick="searchBtn(1);return false;" id="searchBtn" style="margin-right:0px;float:left">重置</a>
						</div>
					</div>
					<div class="table-box fix-table">
						<table id="resultList" style="font-size: 0.9rem !important;"></table>
					</div>
				</div>
			</div>
		</div>
	</div>
		<div class="modal" id="modalView">
		<div class="modal-dialog modal-lg" style="width:60%;">
			<div class="modal-content" >
			<div style="height:80%;background: #fff">
			<iframe id="iframeModal" style="width:100%;height:100%"  frameborder=”no” border=”0″ marginwidth=”0″ marginheight=”0″></iframe>
				
			</div>
			</div>
			</div>
	</div> 
	<script src="zsjgPage6.js?v=${v }" type="text/javascript"></script>
</body>
</html>
