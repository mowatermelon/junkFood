<%@ Page Language="C#" AutoEventWireup="true" CodeFile="zhuce.aspx.cs" Inherits="_zhuce" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head id="Head1" runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>REGISITER</title>
    <link href="~/Styles/Site.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" charset="javascript" src="~/Scripts/mo.js"></script>
</head>
<body id="Body1" runat="server">
        <div class="mo mo1">
           <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The sky is blue rain and I am waiting for you smoke rises, Jiang thousands of miles in the bottom of the bottle Book Han Lishu and imitation of the former elegant when I meet you </p>
        </div>
         
        <div id="all_top" class="atop" runat="server">
     
            <div id="left_top" class="ltop" runat="server">
            </div>

            <div id="center_top" class="ctop" runat="server">

            <form id="form1" runat="server">

        
                <div id="Div1" class="mo02" runat="server">请输入注册的用户名和密码</div>
                
                <div id="Div2" class="mo3" runat="server">用户名：<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox></div>
        
                <div id="Div3" class="mo3" runat="server">密码：<asp:TextBox ID="TextBox2" runat="server"></asp:TextBox></div>
                
                    <asp:Button ID="Button1" runat="server" Text="确定" onclick="Button1_Click" />

                <div style="width: 200px; height: 15px; overflow: hidden;"></div>
        
            </form>
            </div>

        <div id="right_top" class="rtop" runat="server">

       </div>
       
        </div>

        <div class="mo mo1">
           <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;天青色等烟雨   而我在等你   炊烟袅袅升起   隔江千万里   在瓶底书汉隶仿前朝的飘逸    就当我为遇见你伏笔</p>
        </div>

</body>
</html>
