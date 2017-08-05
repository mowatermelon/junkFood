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
<%@ include file="../../../../Common/header/ztree.jsp"%>
<script type="text/javascript"
		src="../../../../Common/js/dicHindle.js"></script>
<script type="text/javascript"
		src="../../../../Common/js/city.js"></script>
	<script type="text/javascript"
		src="/SJBDC/view/supervise/jg/xn/ywjg/ywjgModal.js"></script>
<link type="text/css" rel="stylesheet" href="ywjgModal.css">
</head>
<body>
	<div class="modal-container">
			<div class="modal-header">
				<button type="button" class="closeIncon" onclick="closeModal()">
				</button>
				<span class="modal-title">查看详情</span>
				<div class="time-line-box">
					<div class="line-child-box" id="topHistory">
						<div class="text-icon">
							<span>上级</span>
						</div>
						<div class="slideDIV">
							<div class="content"></div>
						</div>
					</div>
					<div class="line-child-box cur" id="middleHistory">
						<div class="text-icon">
							<span>当前</span>
						</div>
						<div class="slideDIV">
							<div class="content"></div>
						</div>
					</div>
					<div class="line-child-box" id="bottomHistory">
						<div class="text-icon">
							<span>下级</span>
						</div>
						<div class="slideDIV">
							<div class="content"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-body">
				<div class="container">
					<div class="col-xs-3 left-time-line ztree" id="treeDemo"></div>
					<div class="col-xs-9" id="info-other" style="display: none">
						<ul id="myTab" class="nav nav-tabs">
							<li class="active" id="djxxTitle"><a href="#tab1"
								data-toggle="tab"> 登记信息 </a></li>
							<li id="qlxxTitle"><a href="#tab2" data-toggle="tab" >
									权利信息 </a></li>
							<!-- <li><a href="#tab6" data-toggle="tab"> 权利类型 </a></li> -->
							<li id="qtqlTitle"><a href="#tab3" data-toggle="tab" >
									其它权利 </a></li>
							<li id="daxxTitle"><a href="#tab4" data-toggle="tab" >
									档案信息 </a></li>
							<li id="txxxTitle"><a href="#tab5" data-toggle="tab" >
									图形信息 </a></li>


						</ul>
						<div id="myTabContent" class="tab-content">
							<div class="tab-pane fade in active" id="tab1">
								<div class="inner-box">
									<div class="table-title">申请</div>
									<table class="table-box" id="sqTable">
										<tr>
											<td style="width: 20%">业务号</td>
											<td style="width: 30%" name="YWH"></td>
											<td style="width: 20%">登记类型</td>
											<td style="width: 30%" name="DJDL"></td>
										</tr>

										<tr>
											<td style="width: 20%">申请事项</td>
											<td style="width: 30%" name="SQSX"></td>
											<td>申请证书版本</td>
											<td name="SQZSBS"></td>
										</tr>

										<tr>
											<td style="width: 20%">申请分别持证</td>
											<td style="width: 30%" name="SQFBCZ"></td>
											<td style="width: 20%">权利人名称</td>
											<td style="width: 30%" name="QLRMC"></td>
										</tr>

										<tr>
											<td style="width: 20%">权利人证件种类</td>
											<td style="width: 30%" name="ZJZL"></td>
											<td style="width: 20%">权利人证件号</td>
											<td style="width: 30%" name="ZJH"></td>
										</tr>

										<tr>
											<td style="width: 20%">受理人员</td>
											<td style="width: 30%" name="SLRY"></td>
											<td style="width: 20%">受理时间</td>
											<td style="width: 30%" name="SLSJ"></td>
										</tr>
										<tr>
											<td style="width: 20%">行政区域</td>
											<td style="width: 30%" name="QXDM"></td>
											<td style="width: 20%"></td>
											<td style="width: 30%"></td>
										</tr>

									</table>

									<div class="table-title">审批信息</div>
									<table class="table-box" name="spxxTable">
										<tr>
											<td style="width: 20%">审核环节</td>
											<td style="width: 30%" name="JDMC"></td>
											<td style="width: 20%">审核意见</td>
											<td style="width: 30%" name="SHYJ"></td>
										</tr>
										<tr>
											<td>审核人员</td>
											<td name="" SHRYXM></td>
											<td>审核时间</td>
											<td name="SHJSSJ"></td>
										</tr>
									</table>

									<div class="table-title">缮证信息</div>
									<table class="table-box" name="szxxTable">
										<tr>
											<td style="width: 20%">缮证证号</td>
											<td style="width: 30%" name="SZZH"></td>
											<td style="width: 20%">印刷序列号</td>
											<td style="width: 30%" name="YSXLH"></td>
										</tr>
									</table>
								</div>
							</div>
							<div class="tab-pane fade" id="tab2">
								<div class="inner-box">
									<div class="table-title">房屋权利信息</div>
									<div style="float: right">单位：平方米</div>
									<table class="table-box" id="qlxxTable">
										<tr>
											<td style="width: 20%" >业务号</td>
											<td style="width: 30%" name="YWH"></td>
											<td style="width: 20%" >房屋所有权</td>
											<td style="width: 30%" name="FWSYQ"></td>
										</tr>
										<tr>
											<td style="width: 20%" >证件种类</td>
											<td style="width: 30%" name="ZJZL"></td>
											<td style="width: 20%" >证件号</td>
											<td style="width: 30%" name="ZJH"></td>
										</tr>
										<tr>
											<td style="width: 20%" >公共情况</td>
											<td style="width: 30%" name="GGXX"></td>
											<td style="width: 20%" >权利人类型</td>
											<td style="width: 30%" name="QLRXL"></td>
										</tr>
										<tr>
											<td style="width: 20%" >登记类型</td>
											<td style="width: 30%" name="DJLX"></td>
											<td style="width: 20%" >登记原因</td>
											<td style="width: 30%" name="DJYY"></td>
										</tr>
										<tr>
											<td style="width: 20%">土地使用权人</td>
											<td style="width: 30%" name="TDSYQR"></td>
											<td style="width: 20%">土地使用期限</td>
											<td style="width: 30%" name="TDSYQX"></td>
										</tr>
										<tr>
											<td style="width: 20%">房地产交易价格</td>
											<td style="width: 30%" name="FDJYJG"></td>
											<td style="width: 20%">规划用途</td>
											<td style="width: 30%" name="GHYT"></td>
										</tr>
										<tr>
											<td style="width: 20%">房屋性质</td>
											<td style="width: 30%" name="FWXZ"></td>
											<td style="width: 20%">建筑面积</td>
											<td style="width: 30%" name="JZMJ"></td>
										</tr>
										<tr>
											<td style="width: 20%">分摊建筑面积</td>
											<td style="width: 30%" name="FTJZMJ"></td>
											<td style="width: 20%">专有建筑面积</td>
											<td style="width: 30%" name="ZYJZMJ"></td>
										</tr>
									</table>
								</div>

							</div>
							<div class="tab-pane fade" id="tab3">
								<div class="inner-box">
									<div class="table-title">查封信息</div>
									<table class="table-box">
										<tr>
											<td style="width: 20%">业务号</td>
											<td style="width: 30%"></td>
											<td style="width: 20%">查封类型</td>
											<td style="width: 30%"></td>
										</tr>
										<tr>
											<td style="width: 20%">查封机关</td>
											<td style="width: 30%"></td>
											<td style="width: 20%">查封文号</td>
											<td style="width: 30%"></td>
										</tr>
										<tr>
											<td style="width: 20%">查封时间</td>
											<td style="width: 30%"></td>
											<td style="width: 20%"></td>
											<td style="width: 30%"></td>
										</tr>
									</table>
								</div>
								<div class="inner-box">
									<div class="table-title">抵押信息</div>
									<table class="table-box">
										<tr>
											<td style="width: 20%">业务号</td>
											<td style="width: 30%"></td>
											<td style="width: 20%">抵押方式</td>
											<td style="width: 30%"></td>
										</tr>
										<tr>
											<td style="width: 20%">抵押类型</td>
											<td style="width: 30%"></td>
											<td style="width: 20%">抵押人</td>
											<td style="width: 30%"></td>
										</tr>
										<tr>
											<td style="width: 20%">抵押证明号</td>
											<td style="width: 30%"></td>
											<td style="width: 20%">登记时间</td>
											<td style="width: 30%"></td>
										</tr>
										<tr>
											<td style="width: 20%">登记原因</td>
											<td style="width: 80%" colspan="3"></td>
										</tr>
									</table>
								</div>
								<div class="inner-box">
									<div class="table-title">异议信息</div>
									<table class="table-box">
										<tr>
											<td style="width: 20%">业务号</td>
											<td style="width: 30%">&nbsp;</td>
											<td style="width: 20%">登记簿</td>
											<td style="width: 30%">&nbsp;</td>
										</tr>
										<tr>
											<td style="width: 20%">异议证明号</td>
											<td style="width: 30%">&nbsp;</td>
											<td style="width: 20%">登记时间</td>
											<td style="width: 30%">&nbsp;</td>
										</tr>
										<tr>
											<td style="width: 20%">登记机构</td>
											<td style="width: 30%" colspan="3">&nbsp;</td>
										</tr>
										<tr>
											<td style="width: 20%">异议事项</td>
											<td style="width: 30%" colspan="3">&nbsp;</td>
										</tr>
									</table>
								</div>
								
								
							</div>
							<div class="tab-pane fade " id="tab4">
								<div class="inner-box">
								<div class="table-title">档案列表</div>
								<ul class="infoList">
									<li title="名称:详细信息文件.pdf&#10大小:20.5kb&#10类型:PDF文档">
										<img  src="image/officeIcon/PDF.jpg" class="officeIcon">
										<span style="width:100%;display: inline-block;">详细信息文件.pdf</span>
									</li>
								</ul>
								</div>
							</div>
							<div class="tab-pane fade " id="tab5">
								<div class="inner-box">
									<iframe style="width:100%;border:none;height:100%" src="http://19.16.104.151:7001/SJBDC/view/supervise/map/index.html?config=cfg/bdc_gd/config_jg1.json&BDCLX=房屋&BSID=BE4D0605AC434E7CA750356CC2789D5A&ZDZHTZM=B"></iframe>
								</div>
							</div>
							<div class="tab-pane fade" id="tab6">
								<div class="inner-box">
									<div class="table-title">宗地权利信息</div>
									<div style="float: right">单位：平方米</div>
									<table class="table-box">
										<tr>
											<td style="width: 10%">不动产类型</td>
											<td colspan="5" style="width: 90%">&nbsp;</td>
										</tr>
										<tr>
											<td style="width: 10%">坐落</td>
											<td colspan="5" name="ZL">&nbsp;</td>
										</tr>
										<tr>
											<td colspan="1" rowspan="4" style="width: 10%">土地状况</td>
											<td style="width: 0%; display: none"></td>
											<td style="width: 25%">宗地面积</td>
											<td style="width: 25%" name="ZDMJ">&nbsp;</td>
											<td style="width: 20%">用途</td>
											<td style="width: 20%" name="YT">&nbsp;</td>
										</tr>
										<tr>
											<td style="width: 25%" >权利类型</td>
											<td style="width: 25%" name="QLLX">&nbsp;</td>
											<td style="width: 20%">权利性质</td>
											<td style="width: 20%" name="QLXZ">&nbsp;</td>
										</tr>
										<tr>
											<td style="width: 25%">权利设定方式</td>
											<td style="width: 25%" name="QLSDFS">&nbsp;</td>
											<td style="width: 20%">容积率</td>
											<td style="width: 20%" name="RJL">&nbsp;</td>
										</tr>
										<tr>
											<td style="width: 25%">建筑密度</td>
											<td style="width: 25%" name="JZMD">&nbsp;</td>
											<td style="width: 20%">建筑限高</td>
											<td style="width: 20%" name="JZXG">&nbsp;</td>

										</tr>
										<tr>
											<td style="width:10%">附记</td>
											<td style="width:90%"colspan="5" name="FJ">&nbsp;</td>
										</tr>
										<tr>
											<td style="width: 100%" colspan="5">空间坐标、位置说明或四至描述</td>
										</tr>
										<tr style="height: 80px;">
											<td style="width: 0%; display: none"></td>
											<td style="width: 100%" colspan="5">&nbsp;</td>
										</tr>
									</table>
								</div>
								
								<div class="inner-box">
								<div class="table-title">宗地权利变化基本信息</div>
								<table class="table-normal" style="width: 100%" cellpadding="0"
									cellspacing="0" id="tableZdqlxx">
									<thead>
										<tr>
											<td style="width: 25%">变化原因</td>
											<td style="width: 25%">变化内容</td>
											<td style="width: 25%">登记时间</td>
											<td style="width: 25%">登薄人</td>
										<tr>
									</thead>
								</table>
							</div>
							</div>
						</div>
					</div>
					<div class="col-xs-9" style="background: #fff; display: none"
						id="info-zhuang">
						<div class="tab-pane">
							<div class="inner-box">
								<div class="table-title">幢基本信息</div>
								<div style="float: right">单位：平方米</div>
								<table class="table-box" style="width: 100%"
									id="tableZrzJbxx">
									<tr>
										<td style="width: 20%">不动产单元号</td>
										<td style="width: 30%" id="BDCDYH">&nbsp;</td>
										<td style="width: 20%">项目名称</td>
										<td style="width: 30%" id="XMMC">&nbsp;</td>
									</tr>
									<tr>
										<td style="width: 20%">房屋坐落</td>
										<td colspan="3" id="FWZL">&nbsp;</td>
									</tr>
									<tr>
										<td style="width: 20%">竣工日期</td>
										<td style="width: 30%" id="JGRQ">&nbsp;</td>
										<td style="width: 20%">建筑物名称</td>
										<td style="width: 30%" id="JZWMC">&nbsp;</td>
									</tr>
									<tr>
										<td style="width: 20%">规划用途</td>
										<td style="width: 30%" id="GHYT">&nbsp;</td>
										<td style="width: 20%">房屋结构</td>
										<td style="width: 30%" id="FWJG">&nbsp;</td>
									</tr>
									<tr>
										<td style="width: 20%">总层数</td>
										<td style="width: 80%" colspan="3" id="ZCS">&nbsp;</td>
									</tr>
									<tr>
										<td style="width: 20%">地上层数</td>
										<td style="width: 30%" id="DSCS">&nbsp;</td>
										<td style="width: 20%">地下层数</td>
										<td style="width: 30%" id="DSCS">&nbsp;</td>
									</tr>
								</table>
							</div>
							<div class="inner-box">
								<div class="table-title">幢逻辑信息</div>
								<table class="table-normal" style="width: 100%" cellpadding="0"
									cellspacing="0" id="tableLjzJbxx">
									<thead>
										<tr>
											<td style="width: 30%">门牌号</td>
											<td style="width: 35%">预测建筑面积</td>
											<td style="width: 35%">实测建筑面积</td>
										<tr>
									</thead>
								</table>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
</body>
</html>