<%@  Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="_Login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head id="Head1" runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>LOGIN</title>
    <link href="~/Styles/Site.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" charset="javascript" src="~/Scripts/mo.js"></script>
</head>
<body id="Body1" runat="server">
        <div class="mo">
           <p>Milk chocolate: you think the other side is very pure, very cute, is a lovely elf.Dark chocolate: you feel each other's personality, very mysterious, love adventure, unfathomable.Chocolatenuts: do you think that with each other very warm, very want to always accompany.</p>
        </div>
         
        <div id="all_top" class="atop" runat="server">
     

            <div id="center_top" class="ctop" runat="server">

                <form id="form1" runat="server">

        
                    <div id="Div1" class="mo1" runat="server">
                        LOGIN
                    </div>
                
                    <div id="Div2" class="mo mo2" runat="server">
                        用户名：
                        <asp:TextBox ID="TextBox1" runat="server"  class="all_border inp">
                        </asp:TextBox>
                    </div>
        
                    <div id="Div3" class="mo mo2" runat="server">
                        密&nbsp;&nbsp;码：
                        <asp:TextBox ID="TextBox2" runat="server"  class="all_border inp" TextMode="Password">
                        </asp:TextBox>
                    </div>
                
                    <asp:Button ID="btn" runat="server" Text="登录" onclick="Login" class="all_border"/>

                    <asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="~/Register.aspx" class="mo3">
                        没有帐号？立即注册
                    </asp:HyperLink>
                
                </form>

            </div>

       
        </div>

        <div class="mo">
           <p>牛奶巧克力：表示你觉得对方很纯洁，很乖巧，是个可爱的小精灵。黑巧克力：表示你觉得对方有个性，很神秘，喜欢冒险，深不可测。果仁巧克力：表示你觉得与对方一起很温馨，很想随时陪伴左右。</p>
        </div>

</body>
</html>
