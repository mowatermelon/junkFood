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
<script type="text/javascript" src="../../../../Common/js/dicHindle.js"></script>
<script type="text/javascript" src="../../../../Common/js/city.js"></script>
<script type="text/javascript"
	src="zsjgModal.js"></script>
<link type="text/css" rel="stylesheet" href="zsjgModal.css">
</head>
<body>
	<div class="modal-container">
		<div class="modal-header">
			<button type="button" class="closeIncon" onclick="closeModal()">
			</button>
			<span class="modal-title">查看详情</span>
		</div>
		<div class="modal-body">
			<div class="container">
				<div class="col-xs-12" id="info-other">
					<ul id="myTab" class="nav nav-tabs">
						<li class="active" id="djxxTitle"><a href="#tab1"
							data-toggle="tab">基本信息 </a></li>
						<li id="qlxxTitle"><a href="#tab2" data-toggle="tab">
								文件附件 </a></li>
					</ul>
					<div id="myTabContent" class="tab-content">
						<div class="tab-pane fade in active" id="tab1">
							<div class="inner-box">
								<div class="table-title">证书、证明详细信息</div>
								<table class="table-box" id="sqTable">
									<tr>
										<td style="width: 25%">证书号</td>
										<td style="width: 25%" id="ZSBH"></td>
										<td style="width: 25%">证书工本号</td>
										<td style="width: 25%" id="ZSXLH"></td>
									</tr>
									<tr>
										<td style="width: 25%">证书类型</td>
										<td style="width: 25%" id="ZSLX"></td>
										<td style="width: 25%">印制企业</td>
										<td style="width: 25%" id="YZQY"></td>
									</tr>
									<tr>
										<td style="width: 25%">交付批次</td>
										<td style="width: 25%" id="JFPC"></td>
										<td style="width: 25%">交付日期</td>
										<td style="width: 25%" id="JFRQ"></td>
									</tr>
									<tr>
										<td style="width: 25%">备案机构</td>
										<td style="width: 25%" id="LRR"></td>
										<td style="width: 25%">备案日期</td>
										<td style="width: 25%" id="LRRQ"></td>
									</tr>
									<tr>
										<td style="width: 25%">发证人</td>
										<td style="width: 25%" id="FZR"></td>
										<td style="width: 25%">发证日期</td>
										<td style="width: 25%" id="FZRQ"></td>
									</tr>
									<tr>
										<td style="width: 25%">领证人</td>
										<td style="width: 25%" id="LZR"></td>
										<td style="width: 25%">领证日期</td>
										<td style="width: 25%" id="LZRQ"></td>
									</tr>
									<tr>
										<td style="width: 25%">废弃日期</td>
										<td style="width: 25%" id="FQRQ"></td>
										<td style="width: 25%">废弃说明</td>
										<td style="width: 25%" id="FQYY"></td>
									</tr>
									<tr>
										<td style="width: 25%">回收日期</td>
										<td style="width: 25%" id="HSRQ"></td>
										<td style="width: 25%">回收原因</td>
										<td style="width: 25%" id="HSYY"></td>
									</tr>
									<tr style="height: 100px;">
										<td style="width: 25%">备注</td>
										<td style="width: 25%" colspan="3" id=BZ></td>

									</tr>

								</table>
							</div>
						</div>
						<div class="tab-pane fade" id="tab2">
							<div class="inner-box">
								<div class="table-title">证书、证明附件</div>
								<div style="width:100%;height:500px;" id="iframeDiv">
        							<iframe style="width:100%;height:100%;" src="../../../../documentFile/zsjgPDF/example.pdf"></iframe>
        						</div>
								</table>
							</div>

						</div>

					</div>
				</div>
			</div>
		</div>
</body>
</html>