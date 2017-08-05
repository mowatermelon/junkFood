<%@ Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head id="Head1" runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>实现登记业务的查询</title>
    <link href="Styles/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
    <script src="Scripts/jquery-1.9.0.min.js" type="text/javascript"></script>    
    <script src="Scripts/ligerui.all.js" type="text/javascript"></script> 
    <script src="Scripts/indexdata.js" type="text/javascript"></script>
        <script type="text/javascript">
            var tab = null;
            var accordion = null;
            var tree = null;
            $(function () {
                $("#home").attr("src", "web/welcome.html");
                //布局
                $("#layout").ligerLayout({ leftWidth: 190, height: '100%', heightDiff: -34, space: 4, onHeightChanged: f_heightChanged });

                var height = $(".l-layout-center").height();

                //Tab
                $("#framecenter").ligerTab({ height: height });

                //面板
                $("#accordion").ligerAccordion({ height: height - 50, speed: null});

                $(".l-link").hover(function () {
                    $(this).addClass("l-link-over");
                }, function () {
                    $(this).removeClass("l-link-over");
                });

                tab = $("#framecenter").ligerGetTabManager();
                accordion = $("#accordion").ligerGetAccordionManager();
                $("#pageloading").hide();

            });
            function f_heightChanged(options) {
                if (tab)
                    tab.addHeight(options.diff);
                if (accordion && options.middleHeight - 24 > 0)
                    accordion.setHeight(options.middleHeight - 24);
            }
            function f_addTab(tabid, text, url) {
                tab.addTabItem({ tabid: tabid, text: text, url: url });
            } 
             
            
     </script> 
    <style type="text/css"> 
        body,html{height:100%;}
        body{ padding:0px; margin:0;   overflow:hidden;}  
        .l-link{ display:block; height:26px; line-height:26px; padding-left:10px; text-decoration:underline; color:#333;}
        .l-link2{text-decoration:underline; color:white; margin-left:2px;margin-right:2px;}
        .l-layout-top{background:#102A49; color:White;}
        .l-layout-bottom{ background:#E5EDEF; text-align:center;}
        #pageloading{position:absolute; left:0px; top:0px; background:white url('loading.gif') no-repeat center; width:100%; height:100%;z-index:99999;}
        .l-link{ display:block; line-height:22px; height:22px; padding-left:16px;border:1px solid white; margin:4px;}
        .l-link-over{ background:#FFEEAC; border:1px solid #DB9F00;} 
        .l-winbar{ background:#2B5A76; height:30px; position:absolute; left:0px; bottom:0px; width:100%; z-index:99999;}
        .space{ color:#E7E7E7;}
        /* 顶部 */ 
        .l-topmenu{ margin:0; padding:0; height:31px; line-height:31px; background:url('lib/images/top.jpg') repeat-x bottom;  position:relative; border-top:1px solid #1D438B;  }
        .l-topmenu-logo{ color:#E7E7E7; padding-left:35px; line-height:26px;background:url('lib/images/topicon.gif') no-repeat 10px 5px;}
        .l-topmenu-welcome{  position:absolute; height:24px; line-height:24px;  right:30px; top:2px;color:#070A0C;}
        .l-topmenu-welcome a{ color:#E7E7E7; text-decoration:underline} 

     </style>
</head>
<body>
    <div id="pageloading"></div>  
    <!--<form id="Form1" runat="server">-->
    <div class="page">
        <div class="header">
                <h1>
                    实现登记业务的查询
                </h1>
            </div>

        <div class="main">
          <div id="layout" style="width:99.2%; margin:0 auto; margin-top:4px; "> 
                <div position="left"  title="主要菜单" id="accordion"> 
                            <div title="应用场景">
                            <div style=" height:7px;"></div>
                                 <a class="l-link" href="javascript:f_addTab('listpage','查询登记表单','web/listPage.aspx')">查询登记表单</a>
                                <a class="l-link" href="javascript:f_addTab('roundpage','数据图形显示','web/roundQuery.aspx')">数据图形显示</a>  
                            </div>    
                             <div title="登记大类">
                            <div style=" height:7px;"></div>
                                  <a class="l-link" href="#">首次登记</a>
                                  <a class="l-link" href="#">转移登记</a>
                                  <a class="l-link" href="#">变更登记</a>
                                  <a class="l-link" href="#">注销登记</a>
                                  <a class="l-link" href="#">更正登记</a>
                                  <a class="l-link" href="#">异议登记</a>
                                  <a class="l-link" href="#">预告登记</a>
                                  <a class="l-link" href="#">查封登记</a>
                                  <a class="l-link" href="#">其它登记</a>                                  
                            </div> 
                </div>
                <div position="center" id="framecenter"> 
                    <div tabid="home" title="我的主页" style="height:300px" >
                        <iframe frameborder="0" name="home" id="home" src=""></iframe>
                    </div> 
                </div> 
        
            </div>
            <div  style="height:32px; line-height:32px; text-align:center;">
                    Copyright © 2016-2020 <a href="http://www.ztgeo.com.cn/">www.watermelon.com</a>
            </div>
            <div style="display:none"></div>
        </div>
    </div>
    <!--</form>-->
</body>
</html>
