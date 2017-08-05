<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<%@ include file="../Common/header/base.jsp"%>
    <link type="text/css" href="${base }view/portal/portal.css" rel="stylesheet"/>

    <script type="text/javascript" src="${base }view/portal/portal_Config.js"></script>
    <script type="text/javascript" src="${base }view/portal/portal.js"></script>  
    <%-- <script type="text/javascript">
			$(document).ready(function(){
				var userMenuData='<%=session.getAttribute("Portal2017_user")%>';	
				alert(userMenuData);						
				});
			 $("#dz").click(function (){
				alert("ss");
			}); 
			
		</script>  --%>
    <title>广东省不动产登记信息管理基础平台</title>
</head>
<body>
    <div class="page_top">
        <div class="m_top">
            <div>
                <div class="m_top_icon"></div>
                <span class="m_top_txt">${Portal2017_user.userLoginName}，欢迎登陆!</span> 
                <a class="m_top_logout" id="dz" href="${pageContext.request.contextPath}/j_spring_security_logout"></a>
            </div>
        </div>
        <div class="m_content_search">
            <div class="m_content_search_shadow"></div>
            <div class="m_content_search_icon"></div>
            <input id="gzjlSearchContent" class="m_content_search_txt" type="text" placeholder="请输入关键字"/>
            <div id="searchGzjl" class="m_content_search_btn">搜 索</div>
        </div>
    </div>

    <div class="page_body">
        <div class="m_content">
            <div class="m_content_body">
                <!-- s 系统入口-->
                <div class="m_content_sys">
                    <span class="m_content_sys_mark">系统入口</span>
                    <div class="m_content_sys_wrap">
                        <div class="m_pre_sys">
                            <div id="preSys" style="display:none;"></div>
                        </div>
                        <div class="m_content_sys_body"></div>
                        <div class="m_next_sys">
                            <div id="nextSys"></div>
                        </div>
                    </div>
                </div>
                <!-- e 系统入口-->

                <!--s 工作交流-->
                <div class="m_content_caw">
                    <div class="m_content_caw_mark">
                        <span class="m_content_caw_mark_enter">工作交流</span>
                        <span id="gzjlMore" class="m_content_caw_mark_more">更多交流></span>
                    </div>
                    <div class="m_content_caw_body">
                        <div class="caw_content_shadow"></div>
                        <div class="caw_content">
                        </div>
                    </div>
                </div>
                <!--e 工作交流-->
            </div>
        </div>
    </div> 
</body>
</html>
