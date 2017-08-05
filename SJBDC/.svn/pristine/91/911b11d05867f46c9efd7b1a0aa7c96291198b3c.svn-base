<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<html>
<head>
<title></title>
<%@ include file="../Common/header/base.jsp"%>
<%@ include file="../Common/header/echart.jsp"%>
<%@ include file="../Common/header/bootstarp.jsp"%>
<%@ include file="../Common/header/template.jsp"%>
<%@ include file="../Common/header/common.jsp"%>
<script src="${base }/view/Common/js/circle.js" type="text/javascript"></script>

<style>
#inner-context {
	margin: 10px 20px
}

#inner-context .data-box {
	width: 100%;
	border: 1px solid #ededed;
	margin-bottom: 10px;
}

.data-box .inner-box {
	padding: 10px 20px;
	overflow: hidden;
}

.inner-box .inner-left-box {
	width: 25%;
	float: left;
}

.inner-box .inner-right-box {
	width: 75%;
	float: left;
}

.inner-left-box .panel-box {
	
}

.panel-box span {
	display: block;
	margin: 10px 0;
}

.panel-box span:first-child {
	color: #222;
	font-size: 1.2rem;
}

.panel-box b {
	font-size: 2rem;
	background: #77BEED;
	color: #fff;
	padding: 0px 13px;
	margin-right: 8px;
}

.inner-left-box .msg-box {
	background: #F5F5F5;
	margin-bottom: 10px;
}

.msg-box .msg-inner-box {
	padding: 20px;
}

.msg-inner-box span {
	display: block;
}

.msg-inner-box b {
	color: #FCA866;
	padding: 0 5px;
}

.inner-right-box .box-title {
	font-size: 1.2rem;
	padding: 0 20px;
}

/* .box-title span:last-child {
	float: right;
	color: #53BA4D;
	cursor: pointer;;
} */

.per-box span {
	display: block;
	margin: 10px 0;
	font-size: 1.1rem;
}

.per-box .circle-box {
	width: 12%;
	text-align: center;
	float: left;
}

.inner-right-box .table-box {
	margin: 0px 60px;
}

.table-box table {
	border: 1px solid #ededed;
}

.table-box tr {
	font-size: 1rem;
	border-bottom: 1px solid #ededed;
	height: 45px;
}

.table-box td {
	text-align: center;
}

.system-box {
	margin: 20px 44px
}

.system-box .box-inner {
	border: 1px solid #aaa;
	overflow: hidden
}

.box-inner .box-title {
	background: #efefef;
	padding: 10px 0;
	text-align: center;
}

.box-inner .box-icon {
	font-size: 7rem;
	padding: 10px 0;
	color: #aaa;
	text-align: center;
}

.box-inner .data-line {
	margin-bottom:10px;
	overflow:hidden;
}

.box-data span {
	width: 50%;
	display: block;
	float: left;
	text-align: center;
	font-size:1.1rem;
}
</style>
</head>
<body>
	<div id="inner-context">
		<div class="data-box">
			<div class="inner-box">
				<div class="inner-left-box">
					<div class="panel-box">
						<span>数据总量</span> <span><b id="ResTotal">0</b>项</span>
					</div>

					<div class="panel-box">
						<span>数据容量</span> <span><b id="ResCapacity">0</b>GB</span>
					</div>
				</div>
				<div class="inner-right-box">
					<div class="per-box">
						<span>数据类型占比</span>

						<div class="circle-box">
							<canvas id="100" width="100" height="100" data-color="#FB8588"></canvas>
							<span>数据表</span>
						</div>
						<div class="circle-box">
							<canvas id="200" width="100" height="100" data-color="#FFBD7F"></canvas>
							<span>GeoGlobe数据</span>
						</div>
						 
						<div class="circle-box">
							<canvas id="300" width="100" height="100" data-color="#6BC696"></canvas>
							<span>多维数据库</span>
						</div>
						<div class="circle-box">
							<canvas id="400" width="100" height="100" data-color="#6CC0FF"></canvas>
							<span>文件</span>
						</div>
						<div class="circle-box">
							<canvas id="501" width="100" height="100" data-color="#8E95C6"></canvas>
							<span>ArcGIS数据</span>
						</div>
						<div class="circle-box">
							<canvas id="502" width="100" height="100" data-color="#8E95C6"></canvas>
							<span>实时数据</span>
						</div>
						<div class="circle-box">
							<canvas id="600" width="100" height="100" data-color="#8E95C6"></canvas>
							<span>ArcGIS服务</span>
						</div>
						<div class="circle-box">
							<canvas id="800" width="100" height="100" data-color="#8E95C6"></canvas>
							<span>其它</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="data-box">
			<div class="inner-box">
				<div class="inner-left-box">
					<div id="main1" style="height: 320px"></div>
					<div class="msg-box">
						<div class="msg-inner-box">
							<span><b>0</b>个节点停止</span> <span><b>0</b>个任务执行异常</span>
						</div>
					</div>
					<div class="msg-box">
						<div class="msg-inner-box">
							<span><b>0</b>个服务停止</span> <span><b>0</b>个服务访问异常</span>
						</div>
					</div>
				</div>
				<div class="inner-right-box">
					<div class="box-title">
						<span>节点资源占用情况</span> <!-- <span class="glyphicon glyphicon-refresh"></span> -->
					</div>
					<div class="row system-box">
						
						
						
					</div>

					<!--   <div id="main2" style="height:320px"></div>-->
					<!-- <div class="table-box">
						<table style="width: 100%">
							<tr>
								<td></td>
								<td>数据透视服务</td>
								<td>GeoSmarterKPI服务</td>
								<td>OLAP服务</td>
								<td>数据融合服务</td>
								<td>社会关系网服务</td>
								<td>数据上传服务</td>
							</tr>
							<tr>
								<td><b>已停止</b></td>
							</tr>
							<tr>
								<td><b>运行中</b></td>
							</tr>
						</table>
					</div> -->
				</div>
			</div>
		</div>
	</div>
	
	<script id="system-template" type="text/html">
    <$if(data&&data.length){
    for(var i=0;i<data.length ;i++){$>
		<div class="col-sm-4" >
		<div class="box-inner" data-name="<$=data[i].groupName$>">
			<div class="box-title"><$=data[i].groupName$></div>
			<div class="box-icon">
				<span class="glyphicon glyphicon-cloud-download"></span>
			</div>
			<div class="box-data">
				<div class="data-line">
					<span>连接中断：<$=data[i].breakNet$></span> <span>CPU占用高：<$=data[i].highCpu$></span>
				</div>
				<div class="data-line">
					<span>IO占用高：<$=data[i].highIo$></span> <span>内存占用高：<$=data[i].highMem$></span>
				</div>

			</div>
			</div>
		</div>					
    <$}$>
    <$}$>
</script>
	<script src="index.js?v=${v }" type="text/javascript"></script>
</body>
</html>
