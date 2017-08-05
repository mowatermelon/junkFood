<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<head>
<title></title>
<%
	String DJB_ID = request.getParameter("YWID");
%>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">


<%@ include file="../../../../Common/header/base.jsp"%>
<%@ include file="../../../../Common/header/bootstarp.jsp"%>
<%@ include file="../../../../Common/header/common.jsp"%>

<style>
.container{
	width:100%;
	padding:0;
}
.nav-tabs li {
	width: 20%;
	text-align: center;
	border: none;
}

.nav-tabs a {
	color: #868686;
	font-size: 1.2rem;
	font-weight: normal;
}

.nav-tabs .active a {
	border: none !important;
	border-bottom: 2px solid #FF7E20 !important;
	color: #FF7E20 !important;
	font-weight: bold !important;
}

.nav-tabs li:hover {
	border: none;
}

.nav-tabs a:hover {
	background: #fff !important;
	border: none !important;
}

.tab-content .inner-box {
	padding: 0px 15px
}

.inner-box .table-title {
	border-left: 5px solid #318AFE;
	padding-left: 10px;
	margin: 20px 0;
	color: #808080;
	font-size: 1.2rem;
	font-weight: 100;
}

.tab-content .table-box {
	width: 100%;
}

.table-box td:nth-child(2n+1) {
	background: #EBF3F6;
	color: #969999;
}

.table-box td {
	text-align: center;
	padding: 7px 0;
	font-size: .95rem;
	border: 1px solid #d8d8d8;
}

.left-time-line {
	background: #EFEFEF;
}

.left-time-line .time-line-box {
	padding: 73px 0;
}

.time-line-box .line-child-box {
	background: #fff;
	padding: 50px 10px 20px 10px;
	color: #616161;
	position: relative;
	margin-top: 60px;
	box-shadow: 0 0 2px 2px #E3E3E3;
}

.time-line-box .line-child-box:first-child {
	margin-top: 0px;
}

.time-line-box .text-icon {
	display: block;
	width: 50px;
	height: 50px;
	line-height: 50px;
	position: absolute;
	background: #318AFE;
	color: #fff;
	border-radius: 50px;
	text-align: center;
	left: 50%;
	margin-left: -25px;
	top: -25px;
	box-shadow: 0 0 0px 5px #EFEFEF;
	font-weight: 700;
	font-size: 1.1rem;
}

.time-line-box .active-box {
	color: #FF6B01 !important;
	box-shadow: 0 0 2px 2px #F2BD97;
}

.active-box .text-icon {
	background: #FF6B01 !important;
}

.left-time-line:before {
	content: '';
	position: absolute;
	left: 50%;
	margin-left: 1px;
	width: 2px;
	background: #d2d2d2;
	height: 100%;
}
</style>


<script>
	
</script>
</head>
<body>
	<div class="container">
		<div class="col-xs-3 left-time-line">
			<div class="time-line-box">
				<div class="line-child-box">
					<div class="text-icon">
						<span>上级</span>
					</div>
					<p>业务登记号：2016019283</p>

					<p>转移登记</p>
				</div>
				<div class="line-child-box active-box">
					<div class="text-icon">
						<span>当前</span>
					</div>
					<p>业务登记号：2016019283</p>

					<p>转移登记</p>
				</div>
				<div class="line-child-box">
					<div class="text-icon">
						<span>下级</span>
					</div>
					<p>业务登记号：2016019283</p>

					<p>转移登记</p>
				</div>
			</div>
		</div>
		<div class="col-xs-9">
			<ul id="myTab" class="nav nav-tabs">
				<li class="active"><a href="#tab1" data-toggle="tab"> 登记类型
				</a></li>
				<li><a href="#tab2" data-toggle="tab"> 权利类型 </a></li>
				<li><a href="#tab3" data-toggle="tab"> 其它类型 </a></li>
				<li><a href="#tab4" data-toggle="tab"> 档案信息 </a></li>
				<li><a href="#tab5" data-toggle="tab"> 图形信息 </a></li>


			</ul>
			<div id="myTabContent" class="tab-content">
				<div class="tab-pane fade in active" id="tab1">
					<div class="inner-box">
						<div class="table-title">申请</div>
						<table class="table-box">
							<tr>
								<td style="width: 20%">业务号</td>
								<td style="width: 30%">${baseInfo.YWH }</td>
								<td style="width: 20%">登记类型</td>
								<td style="width: 30%">${baseInfo.DJLX }</td>
							</tr>

							<tr>
								<td style="width: 20%">申请事项</td>
								<td style="width: 30%">${baseInfo.SQSX }</td>
								<td>申请证书版本</td>
								<td>${baseInfo.SQZSBB }</td>
							</tr>

							<tr>
								<td style="width: 20%">申请分别持证</td>
								<td style="width: 30%">${baseInfo.SQFBCZ }</td>
								<td>权利人名称</td>
								<td>${baseInfo.QLRMC }</td>
							</tr>

							<tr>
								<td style="width: 20%">权力号码</td>
								<td style="width: 30%">${baseInfo.QLHM }</td>
								<td>受理人员</td>
								<td>${baseInfo.SLRY }</td>
							</tr>

							<tr>
								<td style="width: 20%">受理时间</td>
								<td style="width: 30%">${baseInfo.SLSJ }</td>
								<td>行政区域</td>
								<td>${baseInfo.QXDM }</td>
							</tr>


						</table>

						<div class="table-title">审批信息</div>
						<table class="table-box">
							<tr>
								<td style="width: 20%">审核环节</td>
								<td style="width: 30%">${baseInfo.SHHJ }</td>
								<td style="width: 20%">审核意见</td>
								<td style="width: 30%">${baseInfo.SHYJ }</td>
							</tr>
							<tr>
								<td>审核人员</td>
								<td>${baseInfo.SHRY }</td>
								<td>审核时间</td>
								<td>${baseInfo.SHSJ }</td>
							</tr>
						</table>

						<div class="table-title">缮证信息</div>
						<table class="table-box">
							<tr>
								<td style="width: 20%">缮证证号</td>
								<td style="width: 30%">&nbsp;</td>
								<td style="width: 20%">印刷序列号</td>
								<td style="width: 30%">&nbsp;</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="tab-pane fade" id="tab2">
					<div class="inner-box">
						<div class="table-title">权利信息</div>
						<table class="table-box">
							<tr>
								<td style="width: 20%">业务号</td>
								<td style="width: 30%">${baseInfo.YWH }</td>
								<td style="width: 20%">房屋所有权</td>
								<td style="width: 30%">${baseInfo.DJLX }</td>
							</tr>
							<tr>
								<td style="width: 20%">证件种类</td>
								<td style="width: 30%">${baseInfo.YWH }</td>
								<td style="width: 20%">证件号</td>
								<td style="width: 30%">${baseInfo.DJLX }</td>
							</tr>
							<tr>
								<td style="width: 20%">公共情况</td>
								<td style="width: 30%">${baseInfo.YWH }</td>
								<td style="width: 20%">权利人类型</td>
								<td style="width: 30%">${baseInfo.DJLX }</td>
							</tr>
							<tr>
								<td style="width: 20%">登记类型</td>
								<td style="width: 30%">${baseInfo.YWH }</td>
								<td style="width: 20%">登记原因</td>
								<td style="width: 30%">${baseInfo.DJLX }</td>
							</tr>
							<tr>
								<td style="width: 20%">土地使用权人</td>
								<td style="width: 30%">${baseInfo.YWH }</td>
								<td style="width: 20%">独用土地面积</td>
								<td style="width: 30%">${baseInfo.DJLX }</td>
							</tr>
							<tr>
								<td style="width: 20%">分摊土地面积</td>
								<td style="width: 30%">${baseInfo.YWH }</td>
								<td style="width: 20%">土地使用期限</td>
								<td style="width: 30%">${baseInfo.DJLX }</td>
							</tr>
							<tr>
								<td style="width: 20%">房地产交易价格</td>
								<td style="width: 30%">${baseInfo.YWH }</td>
								<td style="width: 20%">规划用途</td>
								<td style="width: 30%">${baseInfo.DJLX }</td>
							</tr>
							<tr>
								<td style="width: 20%">房屋性质</td>
								<td style="width: 30%">${baseInfo.YWH }</td>

							</tr>
						</table>

						<div class="table-title">宗地信息</div>
						<table class="table-box">
							<tr>
								<td style="width: 20%">宗地代码</td>
								<td style="width: 30%">&nbsp;</td>
								<td style="width: 20%">不动产单元号</td>
								<td style="width: 30%">&nbsp;</td>
							</tr>
							<tr>
								<td style="width: 20%">坐落</td>
								<td style="width: 30%">&nbsp;</td>
								<td style="width: 20%">宗地面积</td>
								<td style="width: 30%">&nbsp;</td>
							</tr>
							<tr>
								<td style="width: 20%">实测面积</td>
								<td style="width: 30%">&nbsp;</td>
								<td style="width: 20%">面积单位</td>
								<td style="width: 30%">&nbsp;</td>
							</tr>
							<tr>
								<td style="width: 20%">权利类型</td>
								<td style="width: 30%">&nbsp;</td>
								<td style="width: 20%">权利性质</td>
								<td style="width: 30%">&nbsp;</td>
							</tr>
							<tr>
								<td style="width: 20%">用途</td>
								<td style="width: 30%">&nbsp;</td>
								<td style="width: 20%">宗地四至</td>
								<td style="width: 30%">&nbsp;</td>
							</tr>
						</table>
					</div>

				</div>
				<div class="tab-pane fade" id="tab3">
					<div class="inner-box">
						<div class="table-title">其它权利</div>
						<table class="table-box">
							<tr>
								<td style="width: 20%">查封状态</td>
								<td style="width: 30%">&nbsp;</td>
								<td style="width: 20%">查封类型</td>
								<td style="width: 30%">&nbsp;</td>
							</tr>
							<tr>
								<td style="width: 20%">查封机关</td>
								<td style="width: 30%">&nbsp;</td>
								<td style="width: 20%">查封文号</td>
								<td style="width: 30%">&nbsp;</td>
							</tr>
							<tr>
								<td style="width: 20%">查封时间</td>
								<td style="width: 30%">&nbsp;</td>
								<td style="width: 20%">抵押状态</td>
								<td style="width: 30%">&nbsp;</td>
							</tr>
							<tr>
								<td style="width: 20%">抵押方式</td>
								<td style="width: 30%">&nbsp;</td>
								<td style="width: 20%">抵押人</td>
								<td style="width: 30%">&nbsp;</td>
							</tr>
							<tr>
								<td style="width: 20%">抵押证明号</td>
								<td style="width: 30%">&nbsp;</td>
								<td style="width: 20%">抵押时间</td>
								<td style="width: 30%">&nbsp;</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="tab-pane fade " id="tab4">
					<div class="inner-box"></div>
				</div>
				<div class="tab-pane fade " id="tab5">
					<div class="inner-box">
						<iframe style="width:100%;border:none;height:500px" src="http://19.16.104.151:7001/SJBDC/view/supervise/map/index.html?config=cfg/bdc_gd/config_jg_live.json&BDCLX=房屋&BSID=55DB6F5B55C34770A90E1FF467A73527&ZDZHTZM=B"></iframe>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>