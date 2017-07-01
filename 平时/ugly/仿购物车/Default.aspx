<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>

<head>
    <title>上课用标准页面</title>
    <link rel="stylesheet" href="DIVSTY.css" type="text/css" />
    <!-- 样式表的链入 -->
</head>
<body>

    <form id="form1" runat="server">

   <div id="MainArea" style="width: 1024px; height: 825px; background-color: #99FF33;margin:0 auto;">
     <!-- 主区块开始 -->

       <div id="TOP" style="width: 1024px; height: 125px;">
        <!-- 主区块里面的顶部区块开始 -->

           <div id="Top_Left" style="width: 200px; height: 125px; background-color: #FF6699; float: left; overflow: hidden;">
           <!-- 主区块里面的顶部区块里面的左部区块开始 -->

              <div style="width: 200px; height: 15px; overflow: hidden;">
              </div><!-- 左部区块里的第一行，空白，间隔用 -->

              <div style="width: 200px; height: 25px; overflow: hidden; text-align: center; vertical-align: middle;">
                  <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
               </div><!-- 左部区块里的第二行，放文本框1 -->

              <div style="width: 200px; height: 10px; overflow: hidden;">
              </div><!-- 左部区块里的第三行，空白，间隔用 -->

              <div style="width: 200px; height: 25px; overflow: hidden; text-align: center; vertical-align: middle;">
                  <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
               </div><!-- 左部区块里的第四行，放文本框2 -->

               <div style="width: 200px; height: 15px; overflow: hidden;">
               </div><!-- 左部区块里的第五行，空白，间隔用 -->

               <div style="width: 200px; height: 25px; overflow: hidden;text-align: center; vertical-align: middle;">
                  <asp:Button ID="Button1" runat="server" Text="确定" onclick="Button1_Click" />
               </div><!-- 左部区块里的第六行，放确定按钮 -->

               <div style="width: 200px; height: 15px; overflow: hidden;">
               </div><!-- 左部区块里的第七行，空白，间隔用 -->

           </div><!-- 主区块里面的顶部区块里面的左部区块结束 -->

             
           <div id="Top_Center" style="width: 424px; height: 125px; float: left; background-color: #FFFF99; overflow: hidden;">
           <!-- 主区块里面的顶部区块里面的中间区块开始 -->
                 

           </div><!-- 主区块里面的顶部区块里面的中间区块结束 -->

           
           <div id="Top_Right" style="width: 400px; height: 125px; float: left; background-color: #9999FF; overflow: hidden;">
           <!-- 主区块里面的顶部区块里面的右部区块开始 -->

               <div style="width: 400px; height: 25px; float: left; background-color: #9999FF; overflow: hidden; line-height: 25px;">
                  
               </div><!-- 右部区块里的第一行，空白，间隔用 -->

               <div style="width: 400px; height: 25px; float: left; background-color: #9999FF; overflow: hidden; line-height: 25px;">
               最小公倍数是：<asp:Label ID="Label1" runat="server" Text="Label1"></asp:Label>
               </div><!-- 右部区块里的第二行，放具体内容 -->

               <div style="width: 400px; height: 25px; float: left; background-color: #9999FF; overflow: hidden;">
               
               </div><!-- 右部区块里的第三行，空白，间隔用 -->

               <div style="width: 400px; height: 25px; float: left; background-color: #9999FF; overflow: hidden; line-height: 25px;">
               最大公约数是：<asp:Label ID="Label2" runat="server" Text="Label2"></asp:Label>
               </div><!-- 右部区块里的第四行，放具体内容 -->

               <div style="width: 400px; height: 25px; float: left; background-color: #9999FF; overflow: hidden;">

               </div><!-- 右部区块里的第五行，空白，间隔用 -->
         

           </div><!-- 主区块里面的顶部区块里面的右部区块结束 -->


         </div><!-- 主区块里面的顶部区块结束 --> 
        
        <div id="MID" runat="server" style="width: 1024px; height: 600px;background-color: #77DDDF;overflow:hidden;">
        <!-- 主区块里面的中部区块开始 -->
        </div><!-- 主区块里面的中部区块结束 --> 

        <div id="BOM" style="width: 1024px; height: 100px; background-color: #FF11FF">
        <!-- 主区块里面的底部区块开始 -->
       

        </div><!-- 主区块里面的底部区块结束 -->
                 
   </div> <!-- 主区块结束 -->


    </form>

</body>
</html>
