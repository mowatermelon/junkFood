<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<html>
<head lang="en">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <link type="text/css" rel="stylesheet"
          href="../../../../Script/plugins/bootstrap/css/bootstrap.min.css">
    <script type="application/javascript" src="../../../../Script/jquery.js"></script>
    <script type="application/javascript"
            src="../../../../Script/plugins/bootstrap/js/bootstrap.min.js"></script>
    <link type="text/css" rel="stylesheet"
          href="../../../../Common/css/index.css">
    <script type="application/javascript"
            src="../../../../Common/js/util.js"></script>
    <style>
        .container {
            width: 100%;
            margin: 0;
            padding: 0;
            overflow-x:hidden;
        }

        table {
            width: 100%;
        }

        td {
            border: 1px solid #aaa;
            padding: 8px 0;
            text-align: center;
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
    </style>
<script type="text/javascript">
$(function () {
	$.ajax({
 		url:'/SJBDC/comSupCtrler/queryBasicInfo.do',
 		dataType:"json",
 		type:"post",
 		data:{
 			"ywid":'<%=request.getParameter("ywid")%>'
 		},
 		success:function(json){
 			if(json!=null&&json!=undefined){
 				$('#ywh').text(json.YWH);
 				$('#sqr').text(json.QLRMC);
 				$('#xzqh').text(json.QXDM);
 				$('#ywlx').text(json.DJLX);
 				//$('#sqrdh').text(json.SQRDH);
 				$('#slry').text(json.SLRY);
 				$('#shry').text(json.SHRYXM);
 				$('#zsxlh').text(json.YSXLH);
 				$('#zt').text(json.STATUS);
 				$('#cfzt').text(json.CXZT);
 				$('#dyzt').text(json.DYZT);
 				$('#yyzt').text(json.YYZT);
 				if(json.SLSJ!=undefined&&json.SLSJ!='null'){
 					$('#slsj').text(_util.getDate(json.SLSJ).format("yyyy-MM-dd HH24:mm:ss"));
 				}
 				if(json.SHJSSJ!=undefined&&json.SHJSSJ!='null'){
 					$('#shsj').text(_util.getDate(json.SHJSSJ).format("yyyy-MM-dd HH24:mm:ss"));
 				}
 			}
 		},
 		error:function(XMLHttpRequest, textStatus, errorThrown){
 			alert("网络错误，请刷新重试!");
 		}
 	});
});
</script>
</head>
<body>
<div class="container">

    <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade in active" id="table1">
            <div class="row">
                <div class="col-xs-12">

                    <table>
                        <tr>
                            <td style="width: 100%" colspan="5" class="table-title">基本信息</td>
                        </tr>

                        <tr>
                            <td style="width: 25%">业务编号</td>
                            <td style="width: 25%" id="ywh"> </td>
                            <td style="width: 25%">申请人</td>
                            <td style="width: 25%" id="sqr"></td>


                        </tr>
                        <tr>
                            <td>行政区划</td>
                            <td id="xzqh"></td>
                            <td>业务类型</td>
                            <td id="ywlx"></td>


                        </tr>
                        <tr>
                            <td>受理人员</td>
                            <td id="slry"></td>
							<td>受理时间</td>
                            <td id="slsj"></td>
                        </tr>
                        <tr>
                            <td>审核时间</td>
                            <td id="shsj"></td>
							 <td>审核人员</td>
                            <td id="shry"></td>

                        </tr>
                        <tr>
                            <td>登记机构</td>
                            <td >清远市不动产登记中心</td>
                            <td>证书序列号</td>
                            <td id="zsxlh"></td>
                        </tr>
                        <tr>
                            <td>状态</td>
                            	<td id="zt"></td>
                            	<td >查封状态</td>
                            	<td id="cfzt"></td>
                        </tr>
						<tr>
							
                            	<td>抵押状态</td>
                            	<td id="dyzt"></td>
                            	<td>异议状态</td>
                            <td id="yyzt"></td>
						</tr>
                    </table>

                </div>
            </div>
        </div>

    </div>
</div>
</body>
</html>