<%@ Page Language="C#" AutoEventWireup="true" CodeFile="View.aspx.cs" Inherits="_View" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>

<head>
    <title>介绍信息界面</title>
     <link href="Styles/View.css" rel="stylesheet" type="text/css" />
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
                  传过来的盒子值：<asp:Label ID="Label1" runat="server" Text="Label1"></asp:Label>
               </div>

              <div id="top_l02"  runat="server">
                  传过来的图片值：<asp:Label ID="Label2" runat="server" Text="Label2"></asp:Label>
               </div>



           </div><!-- 主区块里面的顶部区块里面的左部区块结束 -->

             
           <div id="Top_Center"  runat="server">
           <!-- 主区块里面的顶部区块里面的中间区块开始 -->
             <p id="TC">HAPPY IS GREAT!</p>   
           </div><!-- 主区块里面的顶部区块里面的中间区块结束 -->

           
           <div id="Top_Right"  runat="server">
           <!-- 主区块里面的顶部区块里面的右部区块开始 -->

               <div id="top_R01"  class="top top_R"  runat="server">
               盒子总数是：<asp:Label ID="Label3" runat="server" Text="Label3"></asp:Label>
               </div>

               <div id="top_R02"  class="top top_R"  runat="server">
               主要重复展示图片个数有：<asp:Label ID="Label4" runat="server" Text="Label4"></asp:Label>张图片
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
