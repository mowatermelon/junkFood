<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>首页</title>
    <link href="~/Styles/Site.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
        <div id="main" runat="server" style="width: 656px; overflow: hidden; line-height: 30px;margin: 0 auto;">    
            <div style="width: 656px; height:30PX; overflow: hidden;">
            
                <div id="TD_hy" runat="server" style="width: 352px; float:left; height: 30px; overflow: hidden; line-height: 30px;">
                
                     欢迎你，亲爱的
                     <asp:Label ID="Label1" runat="server" Text=" " Width="88px" ForeColor="Red" Height="16px">
                    </asp:Label>
                    
                    ，点击
                    <asp:LinkButton ID="LinkButton1" runat="server" Font-Size="Small" onclick="Clear_Login">
                    这里
                    </asp:LinkButton>
                    
                    退出登录。<br />
                </div>
                
         <div id="TD_dl" runat="server" style="width: 152px; float:left; height: 30px; overflow: hidden; line-height: 30px;text-align:center;">
             <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/denglu.aspx">用户登陆</asp:HyperLink>
         </div>
         
         
          <div id="TD_zc" runat="server" style="width: 152px; float:left; height: 30px; overflow: hidden; line-height:30px;text-align:center;">
              <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="~/zhuce.aspx">用户注册</asp:HyperLink>
         </div> 
                
       </div>
    
   
     <div class="View_L">用户编号</div>
     <div class="View_C">用户姓名</div>
     <div class="View_R">用户密码</div>
       
      <div id="ShowArea" runat="server" style="width: 656px; height: 300px; overflow: hidden;margin: 0 auto;display:inline;">    
      
        
     
      </div>   
      
  
     
     </div>
    </form>
</body>
</html>
