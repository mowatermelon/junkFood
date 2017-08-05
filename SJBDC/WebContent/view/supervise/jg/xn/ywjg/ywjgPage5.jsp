<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<html>
<head>
<title></title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<%@ include file="../../../../Common/header/base.jsp"%>
<%@ include file="../../../../Common/header/bootstarp.jsp"%>
<%@ include file="../../../../Common/header/bootstarp-dateRange.jsp"%>
<%@ include file="../../../../Common/header/bootstarp-timePicker.jsp"%>
<%@ include file="../../../../Common/header/city.jsp"%>
<link type="text/css" rel="stylesheet" href="ywjgPage2.css">
<%@ include file="../../../../Common/header/head.jsp"%>
<%@ include file="../../../../Common/header/common.jsp"%>


<%
	String djlx = request.getParameter("djlx");
%>
<style>
html, body {
	height: 100%;
	width: 100%;
	background: #FFF;
	overflow: hidden;
}
.slideDIV .content::-webkit-scrollbar {
		  width: 5px;
	}
	
.slideDIV .content::-webkit-scrollbar-thumb {
		  background-color: rgba(0, 0, 0, 0.2); 
	}
#clsjhj-content .data-content {
	margin: 10px;
}

.data-content .box-title {
	padding: .8rem;
	background: #F2F2F2;
	font-size: 1.2rem;
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
	margin: 14px 25px;
	color: #fff;
	padding: 5px 30px;
	float: left;
	margin: 14px 25px;
}



</style>

</head>
<body>
	<%@ include file="../../head.jsp"%>
	<div class="container">
		<div id="clsjhj-content">
			<div class="data-content">
				<div class="data-panel">
					<div class="query-box">
						<div class="inner-box">
							<span class="data-box-title">地区选择：</span> <input
								class="data-box-text-area" id="cityChoice" style="width: 180px;" />
							<span class="glyphicon  titleIcon input-icon"></span>
							<input type="hidden" id="cityCode" />
						</div>
						<div class="inner-box">
							<span class="data-box-title">不动产单元号：</span> <input
								style="width: 150px;" class="data-box-text-area" id="bdcdyh" />
						</div>
						<div class="inner-box">
							<span class="data-box-title">业务号：</span> <input
								style="width: 150px;" class="data-box-text-area" id="ywh" />
						</div>
						<!--   <div class="inner-box">
                    <span class="data-box-title">证书序列号：</span>
                   <input style="width: 150px;" class="data-box-text-area" id="zsxlh"/>
                </div> -->
						<a href="#" onclick="searchBtn(0);return false;" id="searchBtn">查询</a>
						<a href="#" onclick="searchBtn(1);return false;" id="searchBtn">重置</a>
					</div>
					<div class="table-box fix-table	">
						<input type="hidden" id="djlx" />
						<table id="resultList" style="font-size: 0.9rem !important;"></table>
					</div>
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
	<script src="ywjgPage5.js?v=${v }" type="text/javascript"></script>
</body>
</html>
