<%@  Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head id="Head1" runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>happy</title>
    <link href="~/Styles/Site.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" charset="javascript" src="~/Scripts/mo.js"></script>
</head>
<body runat="server">
        <div class="mo mo1">
           <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One is always on a strange road, watching strange scenery and listening to strange music. Then one day, you will find that the things you try hard to forget are already gone. </p>
        </div>
         
        <div id="all_top" class="atop" runat="server">
     
            <div id="left_top" class="ltop" runat="server">
            </div>

            <div id="center_top" class="ctop" runat="server">

            <form id="form1" runat="server">

        
                <div class="mo02" runat="server">请输入你想要显示的盒子值和图片值</div>
                
                <div class="mo3" runat="server">盒子值：<asp:TextBox ID="TextBox1" runat="server" onmouseover="this.style.backgroundColor='#DDDD00'" onmouseout="this.style.backgroundColor='#FFFFFF'"></asp:TextBox></div>
        
                <div class="mo3" runat="server">图片值：<asp:TextBox ID="TextBox2" runat="server" onmouseover="this.style.backgroundColor='#DDDD00'" onmouseout="this.style.backgroundColor='#FFFFFF'"></asp:TextBox></div>
                
                    <asp:Button ID="Button1" runat="server" Text="确定" onclick="InputXM" />

                <div style="width: 200px; height: 15px; overflow: hidden;"></div>
        
            </form>
            </div>

        <div id="right_top" class="rtop" runat="server">

       </div>
       
        </div>

        <div class="mo mo1">
           <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个人总要走陌生的路，看陌生的风景，听陌生的歌，然后在某个不经意的瞬间，你会发现，原本是费尽心机想要忘记的事情真的就那么忘记了。 </p>
        </div>

</body>
</html>
