<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> 
    <link href="../Plugins/bootstrap/bootstrap.min.css" type="text/css" rel="stylesheet"/>
    <link href="gzjl.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="../../Common/js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="../../Script/plugins/bootstrap/js/bootstrap.js"></script>
    <script type="text/javascript" src="gzjl.js"></script>
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
                <li><a href="FINDALL.jsp">首页</a></li>
                <li class='head_checked'><a href="gzjlindex.jsp" id="gzjlNav" >工作交流</a></li>
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
            <a class='location' href='gzjlindex.jsp' style="color:#333333;">工作交流</a>
            <span style="color:#ACACAC"> > </span>
            <span id="curLocation" style="color:#1F77DB"></span>
        </div>
    </div>
    <!-- e 当前位置 -->
    <div class="g_gzjl_body" style='width: 100%;padding-left: 15%;padding-right: 15%;'>
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
        <div id="gzjlContent" class="g_gzjl_content"></div>
        <!--e 交流内容-->

       <!--s 分页 -->
        <div class="g_gzjl_pagination">
            <div>
                <ul id="gzjlPagination" class="pagination" ></ul>
            </div>
        </div>
        <!--e 分页 -->

          <!--s 提问 -->
        <div id="gzjlAsk" class="g_gzjl_question">
            <div class="title">
                <div></div>
                <span>我要提问</span>
            </div>
            <div class="question_body">
                <div class="point">请在这里简要描述你的问题</div>
                <textarea id="questionContent" class="q_content"></textarea>
            </div>       
            <div id="askIssiueSub" class="g_gzjl_question_subBtn">立即提交</div>
        </div>
        <!--e 提问 -->

        <!--s 回复 -->
        <div id="gzjlReply" class="g_gzjl_question" style="display:none">
            <div class="title">
                <div></div>
                <span>我要回复</span>
            </div>
            <div class="question_body">
                <div class="point">请在这里简要描述你的回复</div>
                <textarea id="replyContent" class="q_content"></textarea>
            </div>       
            <div id="replyIssiueSub" class="g_gzjl_question_subBtn">立即提交</div>
        </div>
        <!--e 回复 -->  
               
    </div>

    <script src="../Plugins/jqPaginator.js" type="text/javascript"></script>
</body>
</html>
