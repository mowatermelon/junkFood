<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content ="IE=edge,chrome=1" /> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>广东省不动产信息基础平台-综合监管中心</title>
<link rel="stylesheet" href="index.css"
	type="text/css" /></link>
<script type="text/javascript" src="../Common/js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="index.js"></script>
<script type="text/javascript" src="../Common/js/util.js"></script>
</head>
<body>
	<div class="container-fluid" style="padding:0px;margin:0px">
		<div>
			<div style="width: 100%">
				<div class="g-head">
				<span><img src="title.png" style="margin-left:10px;margin-bottom:14px" target=""></span>
					<ul class="g-mt" style="height:50px">
						<li><a id="a1" name="index" url="" class="g-pmt-2-1-1"><img src="images/sy.png" style="position:absolute;left:35px;top:16px;">首页</a>
						</li>
						<li><a id="a2" name="zhjg" url="jg/xn/gzjz/gzjzPage1.jsp" data-forward='{"Page":"toGzjz"}' class="g-pmt-2-2"><img src="images/zhjg.png" style="position:absolute;left:16px;top:16px;">综合监管</a>
						<!-- <li><a id="a3" name="xxwh" url="jg/xn/gzjz/gzjzPage2.jsp" class="g-pmt-2-4">信息维护</a>
						</li> -->
						<!--  <li><a id="a3" name="zhjg_diy"  url="jg/queryHead.html" class="g-pmt-2-3">综合查询</a>
						</li> --> 
						<li><a id="a4" name="zdyjg" url="http://19.16.104.151:7001/GeoShow" class="g-pmt-2-4"><img src="images/zdyjg.png" style="position:absolute;left:14px;top:16px;">自定义监管</a>
						</li>
						<!-- <li><a id="a5" style="margin-right:15px" name="" url="view/dwpt/jsp/supervise/businessCategory.jsp" class="g-pmt-2-5">用户信息</a>					
						</li> -->
				</ul>

				</div>
			</div>
		</div>

			<div style="width:100%;position:absolute;top:50px;bottom:0px;overflow:hidden;" id="iframeContainer1">
			<iframe src="" id="ifrmContent" name="ifrmContent"  style="width: 100%;height: 100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
			</div>
		
	</div>
</body>


</html>