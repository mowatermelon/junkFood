<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Zhuce.aspx.cs" Inherits="Zhuce" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>注册页</title>
    <link rel="stylesheet" href="DIVSTY.css" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
   <div id="MainArea">
                   
           <div id="Top_Left">
               
           </div>
           
            <div id="Top_Center">
              <div class="Space_T_L"></div>
              <div class="TBox">
                 <asp:TextBox ID="TextBox1" runat="server" onmouseover="this.style.backgroundColor='#DDDD00'" onmouseout="this.style.backgroundColor='#FFFFFF'"></asp:TextBox>
               </div>
               <div class="Space_T_L"></div>
              <div class="TBox">
                  <asp:TextBox ID="TextBox2" runat="server" onmouseover="this.style.backgroundColor='#DDDD00'" onmouseout="this.style.backgroundColor='#FFFFFF'"></asp:TextBox>
               </div>
               <div class="Space_T_L"></div>
              <div class="TBox">
                  <asp:Button ID="Button1" runat="server" Text="注册" onclick="Button1_Click" />
               </div>               
           </div>
           
           <div id="Top_Right">
               <div class="Space_T_R"><asp:Label ID="Label3" runat="server" Text=" "></asp:Label></div>
               
               <div class="Space_T_R"></div>
               
               <div class="Space_T_R">
                   
               </div>
               
               <div class="Space_T_R">
                   
               </div>
               
           </div>
                  
       </div>
    </form>
</body>
</html>
