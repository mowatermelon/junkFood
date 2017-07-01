<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
<head>
    <title>页面跳转实例</title>
    <link href="Styles/Site.css" rel="stylesheet" type="text/css" />    
</head>

<body style="text-align:center">
    <form id="form1" runat="server">
    <div>
        <div id="main">
            <asp:Label ID="Label1" runat="server" Text=" "></asp:Label>
        </div>
        
        <div id="p1">请输入你的班级和姓名</div>
        <div id="p2">班级：<asp:TextBox ID="TextBox1" runat="server" onmouseover="this.style.backgroundColor='#DDDD00'" onmouseout="this.style.backgroundColor='#FFFFFF'"></asp:TextBox></div>
        <div id="p3">姓名：<asp:TextBox ID="TextBox2" runat="server" onmouseover="this.style.backgroundColor='#DDDD00'" onmouseout="this.style.backgroundColor='#FFFFFF'"></asp:TextBox></div>
        <asp:Button ID="Button1" runat="server" Text="确定" onclick="InputXM" />
        </div>        
    </div>
    </form>
</body>
</html>
