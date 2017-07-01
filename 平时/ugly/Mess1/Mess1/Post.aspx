<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Post.aspx.cs" Inherits="Zhuce" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>注册页</title>
    <link rel="stylesheet" href="DIVSTY.css" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
         
      <div id="main" runat="server" style="width: 650px; height: 30px; overflow: hidden; line-height: 30px;margin: 0 auto;">    
         <div id="TD_hy" runat="server" style="width: 350px; float:left; height: 30px; overflow: hidden; line-height: 30px;">
            欢迎你，亲爱的<asp:Label ID="Label3" runat="server" Text=" " Width="88px" 
                 ForeColor="Red" Height="16px"></asp:Label>，点击<asp:LinkButton 
            ID="LinkButton1" runat="server" Font-Size="Small" onclick="Clear_Login">这里</asp:LinkButton>退出登录。<br />
         </div>
         <div id="TD_dl" runat="server" style="width: 150px; float:left; height: 30px; overflow: hidden; line-height: 30px;text-align:center;">
             <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Denglu.aspx">用户登陆</asp:HyperLink>
         </div>
          <div id="TD_zc" runat="server" style="width: 150px; float:left; height: 30px; overflow: hidden; line-height: 30px;text-align:center;">
              <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="~/Zhuce.aspx">用户注册</asp:HyperLink>
         </div>        
       </div>
         
         
         <div id="Post" runat="server" style="width: 650px; overflow: hidden; line-height: 30px;margin: 0 auto;">
         
         
         <div style="width: 150px; float:left; height: 30px; overflow: hidden; line-height: 30px;text-align:center;">
             
             <asp:Label ID="Label1" runat="server" Text="标题：" Width="150px"></asp:Label>
             
         </div>    
         
         
             
         <div style="width: 500px; float:left; height: 30px; overflow: hidden; line-height: 30px;">
             
             <asp:TextBox ID="TextBox1" runat="server" Width="483px"></asp:TextBox>
             
         </div>

          <div style="width: 150px; float:left; height: 30px; overflow: hidden; line-height: 30px;text-align:center;">
             <asp:Label ID="Label2" runat="server" Text="内容：" Width="150px"></asp:Label>
         </div>    
         
         
             
         <div style="width: 500px; float:left; height: 300px; overflow: hidden; line-height: 30px;">
            
             <asp:TextBox ID="TextBox2" runat="server" Height="290px" TextMode="MultiLine" 
                 Width="490px"></asp:TextBox>
            
         </div>
         
         <div style="width: 650px; overflow: hidden; line-height: 30px; text-align: center;">
             <asp:Button ID="Button1" runat="server" Text="发布" onclick="Button1_Click1" />
         </div>
           
         </div>   
           
    </form>
</body>
</html>
