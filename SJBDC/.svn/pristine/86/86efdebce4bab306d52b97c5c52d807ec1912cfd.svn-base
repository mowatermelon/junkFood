<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
<meta charset="UTF-8">
<title>地市工作进展</title>
<%@ include file="../../../../Common/header/base.jsp"%>
<%@ include file="../../../../Common/header/bootstarp.jsp"%>
<%@ include file="../../../../Common/header/city.jsp"%>
<%@ include file="../../../../Common/header/head.jsp"%>
<%@ include file="../../../../Common/header/common.jsp"%>
<style>
html {
	font-size: 16px;
	width: 100%;
	height: 100%;
	margin: 0px;
	padding: 0px;
	font-family: '微软雅黑';
}

.container {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0 20%;
	padding-top: 100px;
	margin: 0;
	padding: 0 20%;
	padding-top: 100px;
	overflow-y: scroll;
}

.table-title {
	height: 60px;
	width: 100%;
	background: #e9f5fe !important;
}

table {
	width: 100%;
}

td {
	border: 1px solid #aaa;
	padding: 8px 0;
	text-align: center;
	height: 40px;
}

.table-title {
	font-weight: 700;
	font-size: 1.2rem !important;
}

.nav-tabs a {
	color: #aaa;
	font-size: 1rem;
	font-weight: normal;
}

.table-info tbody tr td:nth-child(odd) {
	background-color: #eff2f2;
}

.option-btn {
	list-style-type: none;
	float: left;
}

.table-modal tr td{
	margin:0px;
	padding:0px;
	border:0px;
}
input {
    box-sizing: border-box;
    height:100%;
    width: 100%;
}
.option-btn li {
	float: left;
	font-weight: 400;
	font-size: 0.8rem;
	padding: 0 5px;
}

.glyphicon {
	padding: 4px 6px;
	margin: 0px 4px;
	color: #fff;
	border-radius: 2px;
}

.blue {
	background: #41b2f1;
}

.green {
	background: #a5d079;
}

.brown {
	background: #b69062;
}

.purple {
	background: #aa80bb;
}

.modal-header{
	height:50px;
	line-height:50px;
	background:#2175de;
	color:#fff;
	
}
</style>
</head>
<body>
	<%@ include file="../../head.jsp"%>
	<div class="container">
		<div id="myTab">
			<div id="table1">
				<div class="row">
					<div class="col-xs-12">
						<table class="table-info">
							<tr>
								<td colspan="6" class="table-title">订购单位基本信息</td>
							</tr>
							<tr>
								<td>行政区</td>
								<td style="width: 20%" id="ZSBH"></td>
								<td>单位名称</td>
								<td style="width: 20%" id="ZSXLH"></td>
								<td>年度</td>
								<td style="width: 20%" id="ZSXLH"></td>
							</tr>
							<tr>
								<td>计划订购总量</td>
								<td style="width: 20%" id="ZSBH"></td>
								<td>其中证书</td>
								<td style="width: 20%" id="ZSXLH"></td>
								<td>其中证明</td>
								<td style="width: 20%" id="ZSXLH"></td>
							</tr>
							<tr>
								<td>实际交付总量</td>
								<td style="width: 20%" id="ZSBH"></td>
								<td>其中证书</td>
								<td style="width: 20%" id="ZSXLH"></td>
								<td>其中证明</td>
								<td style="width: 20%" id="ZSXLH"></td>
							</tr>
							<tr>
								<td>剩余证书总量</td>
								<td style="width: 20%" id="ZSBH"></td>
								<td>其中证书</td>
								<td style="width: 20%" id="ZSXLH"></td>
								<td>其中证明</td>
								<td style="width: 20%" id="ZSXLH"></td>
							</tr>
							<tr>
								<td>废证总量</td>
								<td style="width: 20%" id="ZSBH"></td>
								<td>其中证书</td>
								<td style="width: 20%" id="ZSXLH"></td>
								<td>其中证明</td>
								<td style="width: 20%" id="ZSXLH"></td>
							</tr>


						</table>


					</div>
				</div>
			</div>
			<div id="table2" style="margin-top: 40px;">
				<table>
					<tr>
						<td class="table-title"><div>订购信息</div>
							<ul class="option-btn">
								<li><a data-toggle="modal" data-target="#myModal"
									class="glyphicon glyphicon-plus blue"></a>新增</li>
								<li><div class="glyphicon glyphicon-trash green" id="remove_DG"></div>删除</li>
								<li><div class="glyphicon glyphicon-pencil brown" id="change_DG"></div>修改</li>
							</ul></td>
					</tr>
					<tr>
						<td>
							<div class="table-box">
								<table id="resultList1"
									style="font-size: 0.8rem !important; font-weight: 100 !important; overflow-y: scroll; overflow-x: hidden"></table>
							</div>
						</td>
					</tr>
				</table>
			</div>
			<div id="table3" style="margin-top: 40px;">
				<table>
					<tr>
						<td class="table-title"><div>劣证信息</div>
							<ul class="option-btn">
								<li><div class="glyphicon glyphicon-plus blue"></div>新增</li>
								<li><div class="glyphicon glyphicon-trash green"></div>删除</li>
								<li><div class="glyphicon glyphicon-pencil brown"></div>修改</li>
								<li><div class="glyphicon glyphicon-floppy-open purple"></div>保存</li>
							</ul></td>
					</tr>
					<tr>
						<td>
							<div class="table-box">
								<table id="resultList2"
									style="font-size: 0.8rem !important; font-weight: 100 !important; overflow-y: scroll; overflow: hidden"></table>
							</div>
						</td>
					</tr>
				</table>
			</div>
			<div id="table4" style="margin-top: 40px;">
				<table>
					<tr>
						<td class="table-title"><div>废证信息</div>
							<ul class="option-btn">
								<li><div class="glyphicon glyphicon-plus blue"></div>新增</li>
								<li><div class="glyphicon glyphicon-trash green"></div>删除</li>
								<li><div class="glyphicon glyphicon-pencil brown"></div>修改</li>
								<li><div class="glyphicon glyphicon-floppy-open purple"></div>保存</li>
							</ul></td>
					</tr>
					<tr>
						<td>
							<div class="table-box">
								<table id="resultList3"
									style="font-size: 0.8rem !important; font-weight: 100 !important; overflow: hidden;"></table>
							</div>
						</td>
					</tr>
				</table>
			</div>
		</div>

	</div>

	<!-- 订购信息的新增modal -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">新增订购信息</h4>
				</div>
				<div class="modal-body">
					<table class="table-modal" id="table_dg">
						<tr>
							<td>订购合同号</td>
							<td colspan="3"><input type="text"
								style="width: 100%; height: 100%" id="DGHTH"/></td>
						</tr>
						<tr>
							<td>印刷批次</td>
							<td><input type="text" id="YSPC" /></td>
							<td>印刷总数</td>
							<td><input type="text" id="YSZS" /></td>
						</tr>
						<tr>
							<td>其中证书</td>
							<td><input type="text" id="QZZS" /></td>
							<td>其中证明</td>
							<td><input type="text" id="QZZM" /></td>
						</tr>
						<tr>
							<td>订购日期</td>
							<td><input type="text" id="DJRQ" /></td>
							<td>印刷企业</td>
							<td><input type="text" id="YSQY" /></td>
						</tr>
						<tr>
							<td>计划交付日期</td>
							<td><input type="text" id="JHJFRQ"/></td>
							<td>实际交付日期</td>
							<td><input type="text" id="SJJFRQ"/></td>
						</tr>
						<tr>
							<td>延迟时间</td>
							<td><input type="text" id="YCSJ"/></td>
							<td>劣证数量</td>
							<td><input type="text" id="LZSL"/></td>
						</tr>
						<tr>
							<td>劣证率</td>
							<td><input type="text" id="LZL"/></td>
							
						</tr>
					</table>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" id="close_dg" data-dismiss="modal">关闭</button>
					<button type="button" class="btn btn-primary" id="save_dg" data-dismiss="modal">保存</button>
				</div>
			</div>
		</div>
	</div>

	<script src="zsjgPage7.js" type="text/javascript"></script>
</body>
</html>