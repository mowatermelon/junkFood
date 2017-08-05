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
</style>
</head>
<body>
<%@ include file="../../head.jsp"%>
	<div class="container">
		<div id="myTab">
		<div id="table1" style="margin-top: 40px;">
				<table class="table-info">
					<tr>
						<td class="table-title" colspan="4"><div>基本信息</div>
							<ul class="option-btn">
								<li><div class="glyphicon glyphicon-plus blue"></div>新增</li>
								<li><div class="glyphicon glyphicon-pencil brown"></div>修改</li>
								<li><div class="glyphicon glyphicon-floppy-open purple"></div>保存</li>
							</ul></td>
					</tr>
					<tr>
								<td>营业执照代码</td>
								<td style="width: 20%" id="ZSBH"></td>
								<td>名称</td>
								<td style="width: 20%" id="ZSXLH"></td>
							</tr>
							<tr>
								<td>类型</td>
								<td style="width: 20%" id="ZSBH"></td>
								<td>法定代表人</td>
								<td style="width: 20%" id="ZSXLH"></td>
							</tr>
							<tr>
								<td>注册资本</td>
								<td style="width: 20%" id="ZSBH"></td>
								<td>成立日期</td>
								<td style="width: 20%" id="ZSXLH"></td>
							</tr>
							<tr>
								<td>住所</td>
								<td style="width: 20%" id="ZSBH" colspan="3"></td>
							</tr>
							<tr>
								<td>营业期限自</td>
								<td style="width: 20%" id="ZSBH"></td>
								<td>营业期限至</td>
								<td style="width: 20%" id="ZSXLH"></td>
							</tr>
							<tr style="height:100px;">
								<td>经营范围</td>
								<td style="width: 20%" id="ZSBH" colspan="3"></td>
								
							</tr>
							<tr>
								<td>登记机关</td>
								<td style="width: 20%" id="ZSBH"></td>
								<td>核准日期</td>
								<td style="width: 20%" id="ZSXLH"></td>
							</tr>
							<tr>
								<td>登记状态</td>
								<td style="width: 20%" id="ZSBH"></td>
								<td></td>
								<td style="width: 20%" id="ZSXLH"></td>
							</tr>
				</table>
			</div>
			
			<div id="table2" style="margin-top: 40px;">
				<table>
					<tr>
						<td class="table-title"><div>企业资质</div>
							<ul class="option-btn" id="">
								<li><div class="glyphicon glyphicon-plus blue" id="add_qyzz"></div>新增</li>
								<li><div class="glyphicon glyphicon-trash green"></div>删除</li>
							</ul></td>
					</tr>
					<tr><td>
						<div class="table-box">
							<table id="resultList1"
								style="font-size: 0.8rem !important; font-weight: 100 !important; overflow-y: scroll;">
								
								</table>
						</div></td>
					</tr>
				</table>
			</div>
			
			<div id="table3" style="margin-top: 40px;">
				<table>
					<tr>
						<td class="table-title"><div>企业资质</div>
							<ul class="option-btn" id="">
								<li><div class="glyphicon glyphicon-plus blue" id="add_qyzz"></div>新增</li>
								<li><div class="glyphicon glyphicon-trash green"></div>删除</li>
							</ul></td>
					</tr>
					<tr><td>
						<div class="table-box">
							<table id="resultList2"
								style="font-size: 0.8rem !important; font-weight: 100 !important; overflow-y: scroll;">
								
								</table>
						</div></td>
					</tr>
				</table>
			</div>
		</div>	

	</div>
	<script src="zsjgPage8.js" type="text/javascript"></script>
</body>
</html>