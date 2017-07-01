<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>

<head>
    <title>上课用标准页面</title>
     <link href="Styles/Site.css" rel="stylesheet" type="text/css" />
</head>
<body>

    <form id="form1" runat="server">
   <div id="MainArea">
     <!-- 主区块开始 -->

       <div id="TOP" runat="server">
        <!-- 主区块里面的顶部区块开始 -->

           <div id="Top_Left"  runat="server">
           <!-- 主区块里面的顶部区块里面的左部区块开始 -->

              <div id="top_l01"  runat="server">
                  请输入一个数值作为文本框的个数：<asp:TextBox ID="TextBox1" runat="server" class="top top_L"></asp:TextBox>
               </div>

              <div id="top_l02"  runat="server">
                  请输入一个数值作为文本框的最终值：<asp:TextBox ID="TextBox2" runat="server" class="top top_L"></asp:TextBox>
               </div>

               <div id="top_l03"  runat="server">
                  <asp:Button ID="Button1" runat="server" Text="确定" onclick="Button1_Click" />
               </div>

           </div><!-- 主区块里面的顶部区块里面的左部区块结束 -->

             
           <div id="Top_Center"  runat="server">
           <!-- 主区块里面的顶部区块里面的中间区块开始 -->
             <p id="TC">HAPPY IS GREAT!</p>   
           </div><!-- 主区块里面的顶部区块里面的中间区块结束 -->

           
           <div id="Top_Right"  runat="server">
           <!-- 主区块里面的顶部区块里面的右部区块开始 -->

               <div id="top_R01"  class="top top_R"  runat="server">
               盒子总数是：<asp:Label ID="Label1" runat="server" Text="Label1"></asp:Label>
               </div>

               <div id="top_R02"  class="top top_R"  runat="server">
               主要重复展示图片个数有：<asp:Label ID="Label2" runat="server" Text="Label2"></asp:Label>张图片
               </div>
         

           </div><!-- 主区块里面的顶部区块里面的右部区块结束 -->


         </div><!-- 主区块里面的顶部区块结束 --> 
        
        <div id="mid"  runat="server">
        <!-- 主区块里面的中部区块开始 -->

        </div>  

        <div id="BOM" runat="server">
        <!-- 主区块里面的底部区块开始 -->

        </div>  
                 
   </div> <!-- 主区块结束 -->
    </form>

</body>
</html>
