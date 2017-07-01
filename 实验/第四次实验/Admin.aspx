<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Admin.aspx.cs" Inherits="_Admin" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>

<head>
    <title> >。< ~  ADMIN >。< ~</title>
     <link href="Styles/Site01.css" rel="stylesheet" type="text/css" />
     <script type="text/javascript" src="Scripts/mo.js"></script>
</head>
<body>

    <form id="form1" runat="server">

   <!-------------------------------------------------------TOP BEGIN----------------------------------------------------------------------->
       <div id="TOP" runat="server">

           <div id="TOP_IMG"  runat="server">

                

           </div>

           
           <div id="Top_Right"  runat="server">

                <div>
		 		    <span id="span_Index" class="btnHd btnOver" onmouseover="showIndex()" runat="server">乐销</span>
		 		    <span id="span_Tran" class="btnHd" onmouseover="showTran()" runat="server">乐品</span>
		 		    <span id="span_Kind" class="btnHd btnCenter" onmouseover="showKind()" runat="server">乐种</span>
                    <span id="span_Prod" class="btnHd" onmouseover="showProd()" runat="server">乐址</span>
                    <span id="span_Cont" class="btnHd" onmouseover="showCont()" runat="server">乐日</span>
		 	    </div>

           </div>


       </div>
  <!-------------------------------------------------------TOP OVER----------------------------------------------------------------------->
  

 <!-------------------------------------------------------MID BEGIN----------------------------------------------------------------------->         
        <div id="mid"  runat="server">   

		 	<div class="bd">

            <!-------------------------------------------------------MID INDEX BEGIN-------------------------------------> 
		 		<div id="Index" class="info" runat="server">
		 			<ul class="mo4">	
		 				<li><p id="P1" runat="server">新闻新闻新闻新闻新闻新闻新闻新闻</p></li>
		 				<li><p id="P2" runat="server">新闻新闻新闻新闻新闻新闻新闻新闻</p></li>
		 				<li><p id="P3" runat="server">新闻新闻新闻新闻新闻新闻新闻新闻</p></li>
		 				<li><p id="P4" runat="server">新闻新闻新闻新闻新闻新闻新闻新闻</p></li>
		 				<li><p id="P5" runat="server">新闻新闻新闻新闻新闻新闻新闻新闻</p></li>
		 				<li><p id="P6" runat="server">新闻新闻新闻新闻新闻新闻新闻新闻</p></li>
		 				<li><p id="P7" runat="server">新闻新闻新闻新闻新闻新闻新闻新闻</p></li>
		 			</ul>
		 		</div>
            <!-------------------------------------------------------MID INDEX OVER-------------------------------------> 



            <!-------------------------------------------------------MID TRAN BEGIN-------------------------------------> 
		 		<div id="Tran" class="info" runat="server">
		 			<ul class="mo4">	
		 				<li><p id="P8" runat="server">图片图片图片图片图片图片图片图片</p></li>
                        <li><p id="P9" runat="server">图片图片图片图片图片图片图片图片</p></li>
                        <li><p id="P10" runat="server">图片图片图片图片图片图片图片图片</p></li>
                        <li><p id="P11" runat="server">图片图片图片图片图片图片图片图片</p></li>
                        <li><p id="P12" runat="server">图片图片图片图片图片图片图片图片</p></li>
                        <li><p id="P13" runat="server">图片图片图片图片图片图片图片图片</p></li>
                        <li><p id="P14" runat="server">图片图片图片图片图片图片图片图片</p></li>
                     </ul>
		 		</div>
            <!-------------------------------------------------------MID TRAN OVER-------------------------------------> 



            <!-------------------------------------------------------MID KIND BEGIN-------------------------------------> 
		 		<div id="Kind" class="info" runat="server">
		 			<ul class="mo4">	
		 				<li><p id="P25" runat="server">KindKindKindKindKindKindKindKind</p></li>
                        <li><p id="P26" runat="server">KindKindKindKindKindKindKindKind</p></li>
                        <li><p id="P27" runat="server">KindKindKindKindKindKindKindKind</p></li>
                        <li><p id="P28" runat="server">KindKindKindKindKindKindKindKind</p></li>
                        <li><p id="P29" runat="server">KindKindKindKindKindKindKindKind</p></li>
                        <li><p id="P30" runat="server">KindKindKindKindKindKindKindKind</p></li>
                        <li><p id="P31" runat="server">KindKindKindKindKindKindKindKind</p></li>
                     </ul>

		 	    </div>
            <!-------------------------------------------------------MID KIND OVER-------------------------------------> 



            <!-------------------------------------------------------MID PROD BEGIN-------------------------------------> 
		 		<div id="Prod" class="info" runat="server">
		 			<ul class="mo4">	
		 				<li><p id="P18" runat="server">ProdProdProdProdProdProdProdProd</p></li>
                        <li><p id="P19" runat="server">ProdProdProdProdProdProdProdProd</p></li>
                        <li><p id="P20" runat="server">ProdProdProdProdProdProdProdProd</p></li>
                        <li><p id="P21" runat="server">ProdProdProdProdProdProdProdProd</p></li>
                        <li><p id="P22" runat="server">ProdProdProdProdProdProdProdProd</p></li>
                        <li><p id="P23" runat="server">ProdProdProdProdProdProdProdProd</p></li>
                        <li><p id="P24" runat="server">ProdProdProdProdProdProdProdProd</p></li>
                     </ul>
		 		</div>
            <!-------------------------------------------------------MID PROD OVER-------------------------------------> 




            <!-------------------------------------------------------MID CONT BEGIN-------------------------------------> 
                <div id="Cont" class="info" runat="server">
                    <div id="third_mid" class="smid" runat="server">

                    <p id="P15" class="mo1" runat="server">
                        CONTENT
                   </p>
                
                    <p id="P16" class="mo mo2" runat="server">
                        标题：
                        <asp:TextBox ID="TextBox1" runat="server"  class="all_border inp">
                        </asp:TextBox>
                    </p>
        
                    <p id="P17" class="mo mo2" runat="server">
                        内容：
                        <asp:TextBox ID="TextBox2" runat="server"   class="all_border inp" Rows="25" TextMode="MultiLine">
                        </asp:TextBox>
                    </p>
                
                    <asp:Button ID="btn" class='btn all_border' runat="server" Text="发布" />

                </div>
		 		</div>
            <!-------------------------------------------------------MID CONT OVER-------------------------------------> 



		 	</div>

        </div>
 <!-------------------------------------------------------MID OVER----------------------------------------------------------------------->     



  <!-------------------------------------------------------BOM BEGIN----------------------------------------------------------------------->  
        <div id="BOM" runat="server">
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Index.aspx" class="bom_p_f_a bom_p_x">
                你瞅啥瞅？
            </asp:HyperLink>

            <div  class="bom_p_a">
                千金难买我乐意
            </div>

        </div>  
  <!-------------------------------------------------------BOM OVER----------------------------------------------------------------------->                   
    </form>

</body>
</html>
