<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> 
    <link href="../Plugins/bootstrap/bootstrap.min.css" type="text/css" rel="stylesheet"/>
    <link href="gzjl.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="../../Common/js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="../../Common/js/util.js"></script>
    <script type="text/javascript" src="gzjlindex.js"></script>
    <title>广东省工作交流情况</title>
</head>
<body>
    <!-- s 头部 -->
    <div class="g_head">
        <span>
            <img src="../Images/gzjl/gdbdclogo.png" style="margin-left: 10px;margin-bottom: 14px;"/>
        </span>
        <div style="height:50px;float: right;">
            <ul calss='g-mt' style="float:left;list-style: none;">
                <li id="a1"  url='portal'><a  class='g-pmt-2' href='FINDALL.jsp' >首页</a></li> 
                <li id="a2" name='工作交流' ahref='gzjlindex.jsp' url='gzjl.html'><a  class='g-pmt-2' >工作交流</a></li>
                <li id="a3" name='通知公告' ahref='gzjlindex.jsp?target=tzgg' url='tzgg.jsp?lx=1'><a  class='g-pmt-2' >通知公告</a></li>
                <li id="a4" name='工作简报' ahref='gzjlindex.jsp?target=gzjb' url='tzgg.jsp?lx=2'><a  class='g-pmt-2'  >工作简报</a></li>
                <li id="a5" name='法律法规' ahref='gzjlindex.jsp?target=flfg' url='tzgg.jsp?lx=3'><a  class='g-pmt-2'  >法律法规</a></li>
            </ul>
            <div style="float: right">
                <div class="g_head_icon"></div>
                <span class="g_head_txt">领导,欢迎登陆</span>
                <a class="g_head_logout" href="${pageContext.request.contextPath}/j_spring_security_logout"></a>
            </div>
        </div>
    </div>
    <!-- e 头部 -->

    <!-- s 当前位置 -->   
    <!-- e 当前位置 -->

    <div class="g_gzjl_body">
        <!-- s 搜索 
        <div class="g_gzjl_content_search">
            <div>
                <div class="g_gzjl_content_search_icon"></div>
                <input id="gzjlSearchContent" class="g_gzjl_content_search_txt" type="text" placeholder="请输入关键字"/>
                <div id="gzjlSearchBtn" class="g_gzjl_content_search_btn">搜 索</div>
            </div>
        </div>
        e 搜索 -->
		<div style="width:100%;position:absolute;top:50px;bottom:0px;overflow:hidden;" id="iframeContainer1">
			<iframe id="ifrmContent"src='gzjl.html' name="ifrmContent"  style="width: 100%;height: 100%;" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
		</div>
		<script src="../Plugins/jqPaginator.js" type="text/javascript"></script>
</body>
</html>
