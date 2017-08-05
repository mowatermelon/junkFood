<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> 
    <link href="../Plugins/bootstrap/bootstrap.min.css" type="text/css" rel="stylesheet"/>
    <link href="FINDALL.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="../../Common/js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="ALLMessage.js"></script>
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
                <li><a href="FINDALL.jsp">首页</a>
                <li><a href="gzjlindex.jsp" id="gzjlNav" >工作交流</a></li>
                <li><a href="gzjlindex.jsp?target=tzgg" id="tzggNav" >通知公告</a></li>
                <li><a href="gzjlindex.jsp?target=gzjb" id="gzjbNav">工作简报</a></li>
                <li><a href="gzjlindex.jsp?target=flfg" id="flfgNav" >法律法规</a></li>                        
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
    <div class="g_mark">
        <div>
            <img src="../Images/gzjl/gd_path.png" style="margin:0px 0px 4px 0px;"/>
            <span style="color:#ACACAC">当前位置：</span>
           <!--  <a class='location'  style="color:#333333;">搜索信息</a> -->
            <span style="color:#ACACAC"> > </span>
            <span id="curLocation" style="color:#1F77DB"></span>            
        </div>
    </div>
    <!-- e 当前位置 -->
    <div class="g_gzjl_body">
        <!--s 搜索 -->
        <div class="g_gzjl_content_search">
            <div>
                <div class="g_gzjl_content_search_icon"></div>
                <input id="gzjlSearchContent" class="g_gzjl_content_search_txt" type="text" placeholder="请输入关键字"/>
                <div id="gzjlSearchBtn" class="g_gzjl_content_search_btn">搜 索</div>
            </div>
        </div>
        <!--e 搜索 -->
        
        <!--s 交流内容 -->
        <div class='content1' style='width:100%;height:100%;'>
        		<div  class='bordercontent' style='border: 0'>
        			<!-- <p style='padding-left: 0px;height: 28px;background-color: #f1ffff;'>
        			<a style='padding-left:10%;color: red;' href="FINDALL.jsp">首页</a>
               		<a style='padding-left:3%;color: #0000ff;' href="gzjlindex.jsp" id="gzjlNav" >工作交流</a>
              		<a style='padding-left:3%;color: #0000ff;' href="gzjlindex.jsp?target=tzgg" id="tzggNav" >通知公告</a>
                	<a style='padding-left:3%;color: #0000ff;' href="gzjlindex.jsp?target=gzjb" id="gzjbNav">工作简报</a>
               		<a style='padding-left:3%;color: #0000ff;' href="gzjlindex.jsp?target=flfg" id="flfgNav" >法律法规</a> 
        			</p> -->
         			<div id="gzjlContent" style='padding-top: 10px;'></div>
        		</div>        	    
		</div>		     
    </div>

    <script src="../Plugins/jqPaginator.js" type="text/javascript"></script>
</body>
</html>
