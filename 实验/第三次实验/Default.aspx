<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>

<head>
    <title> >_< ~  INDEX >_< ~</title>
     <link href="Styles/Site01.css" rel="stylesheet" type="text/css" />
</head>
<body>

    <form id="form1" runat="server">
   <div id="MainArea">

       <div id="TOP" runat="server">

           <div id="Top_Left"  runat="server">

              <div id="top_l01"  runat="server">
                  WELCOME&nbsp;&nbsp;&nbsp;WELCOME&nbsp;&nbsp;&nbsp;WELCOME
               </div>

              <div id="top_l02"  runat="server">
                  WATERMELON&nbsp;&nbsp;&nbsp;WATERMELON&nbsp;&nbsp;&nbsp;WATERMELON
               </div>

           </div>

             
           <div id="Top_Center"  runat="server">
                   <div id="TD_hy" runat="server" class="TC">
                
                    欢迎你，亲爱的
                    <asp:Label ID="Label1" runat="server" Text=" ">
                    </asp:Label>
                    
                    ，点击
                    <asp:LinkButton ID="LinkButton1" runat="server" onclick="Clear_Login">
                    这里
                    </asp:LinkButton>
                    
                    退出登录。<br />
                </div>  
           </div>

           
           <div id="Top_Right"  runat="server">

               <div id="top_R01"  class="top top_R"  runat="server">
                    <div id="TD_dl" runat="server">
                        <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="~/Denglu.aspx" class="mo3">用户登陆</asp:HyperLink>
                    </div>
               </div>

               <div id="top_R02"  class="top top_R"  runat="server">
                    <div id="TD_zc" runat="server">
                        <asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="#third_mid" class="mo3">用户发布</asp:HyperLink>
                    </div>  
               </div>  

           </div>


         </div>
        
        <div id="mid"  runat="server">

        <div id="first_mid"  runat="server">

            <div class="View_L">留言编号</div>
            <div class="View_C">留言姓名</div>
            <div class="View_R">留言内容</div>
       
            <div id="ShowArea" runat="server">            
     
            </div>   
         </div>
         
         
         <div id="second_mid" runat="server">
                <div class='View_L mo5'  runat="server">
                    <asp:Button ID="PrePage"  class='mo4' runat="server" Text="上一页" onclick="PrePage_Click" />

                </div>

                <div class='View_C mo5'  runat="server">
                    <asp:Button ID="NextPage"  class='mo4' runat="server" Text="下一页" onclick="NextPage_Click" />
                    
                </div>

                <div class='View_R  mo5'  runat="server">
                    <asp:HyperLink ID="CurPageL" runat="server" NavigateUrl="" class="mo4"></asp:HyperLink>
                </div>
            </div>  



           <div id="third_mid" class="smid" runat="server">
            <p class="mo3" runat="server">请输入留言内容</p>
                
                <p class="mo3" runat="server">标题：<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox></p>
        
                <p class="mo3" runat="server">内容：<asp:TextBox ID="TextBox2" runat="server"></asp:TextBox></p>
                
            <asp:Button ID="Button1" runat="server" Text="确定" onclick="Button1_Click" />


            </div>



        </div>  

        <div id="BOM" runat="server">
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="" class="mo3"></asp:HyperLink>
        </div>  
                 
   </div> 
    </form>

</body>
</html>
