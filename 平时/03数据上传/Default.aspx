<%@  Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head id="Head1" runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>happy</title>
    <link href="~/Styles/Site.css" rel="stylesheet" type="text/css" />
</head>
<body>
        <div class="mo mo1">
           <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One is always on a strange road, watching strange scenery and listening to strange music. Then one day, you will find that the things you try hard to forget are already gone. </p>
        </div>
         
        <div id="all_top" class="atop" runat="server">
        <form id="form1" runat="server">
            <div id="left_top" class="ltop" runat="server">
                    <p class="mo1">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请输入两个数值，用以计算两个值的最大公约数和最小公倍数:
                    </p>
                   <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                    <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                    <asp:Button ID="Button1" runat="server" Text="确定" onclick="Button1_Click" onmouseover="ch_Title"/>
            </div>

            <div id="center_top" class="ctop" runat="server">

            </div>

        <div id="right_top" class="rtop" runat="server">

            <div id="right1_top">
                    <p  class="mo1">最小公倍数是：<asp:Label ID="Label1" runat="server" Text="Label1"></asp:Label></p>
            </div>

            <div id="right2_top">
                    <p  class="mo1">最大公约数是：<asp:Label ID="Label2" runat="server" Text="Label2"></asp:Label></p>
            </div>

            <div id="right3_top">
                    <p  class="mo1">两者之和是：<asp:Label ID="Label3" runat="server" Text="Label3"></asp:Label></p>
            </div>

            <div id="right4_top">
                    <p class="mo1">是否皆为素数：<asp:Label ID="Label4" runat="server" Text="Label4"></asp:Label></p>
            </div>
       </div>

        </form>
        </div>

        <div class="mo mo1">
           <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个人总要走陌生的路，看陌生的风景，听陌生的歌，然后在某个不经意的瞬间，你会发现，原本是费尽心机想要忘记的事情真的就那么忘记了。 </p>
        </div>

</body>
</html>
