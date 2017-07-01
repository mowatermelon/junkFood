<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Index.aspx.cs" Inherits="_Index" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>

<head>
    <title> >_< ~  INDEX >_< ~</title>
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
		 		    <span id="span_Index" class="btnHd btnOver" onmouseover="showIndex()" runat="server">«… ÷</span>
		 		    <span id="span_Tran" class="btnHd" onmouseover="showTran()" runat="server">«…“Î</span>
		 		    <span id="span_Kind" class="btnHd btnCenter" onmouseover="showKind()" runat="server">«…÷÷</span>
                    <span id="span_Prod" class="btnHd" onmouseover="showProd()" runat="server">«…∆∑</span>
                    <span id="span_Cont" class="btnHd" onmouseover="showCont()" runat="server">«…—‘</span>
		 	    </div>

           </div>


       </div>
  <!-------------------------------------------------------TOP OVER----------------------------------------------------------------------->
  

 <!-------------------------------------------------------MID BEGIN----------------------------------------------------------------------->         
        <div id="mid"  runat="server">   

		 	<div class="bd">

            <!-------------------------------------------------------MID INDEX BEGIN-------------------------------------> 
		 		<div id="Index" class="info" runat="server">

                    <div id="first_mid"  runat="server">

                        <div class="View_L">¡Ù—‘±‡∫≈</div>
                        <div class="View_C">¡Ù—‘–’√˚</div>
                        <div class="View_R">¡Ù—‘ƒ⁄»›</div>
       
                        <div id="ShowArea" runat="server">            
     
                        </div>   
                    </div>
         
         
                    <div id="second_mid" runat="server">
                        <div id="Div1" class='View_L'  runat="server">
                            <asp:Button ID="PrePage"  class='all_border btn' runat="server" Text="…œ“ª“≥" onclick="PrePage_Click" />
                        </div>

                        <div id="Div2" class='View_C'  runat="server">
                            <asp:Button ID="NextPage"  class='all_border btn' runat="server" Text="œ¬“ª“≥" onclick="NextPage_Click" />
                        </div>

                        <div id="Div3" class='View_R'  runat="server">
                            <asp:HyperLink ID="CurPageL" runat="server" NavigateUrl="" class="bom_p bom_p_f_i"></asp:HyperLink>
                        </div>
                    </div>
                      
		 		</div>
            <!-------------------------------------------------------MID INDEX OVER-------------------------------------> 



            <!-------------------------------------------------------MID TRAN BEGIN-------------------------------------> 
		 		<div id="Tran" class="info" runat="server">
		 			<ul class="mo4">	
		 				<li><p id="P8" runat="server">Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨</p></li>
                        <li><p id="P9" runat="server">Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨</p></li>
                        <li><p id="P10" runat="server">Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨</p></li>
                        <li><p id="P11" runat="server">Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨</p></li>
                        <li><p id="P12" runat="server">Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨</p></li>
                        <li><p id="P13" runat="server">Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨</p></li>
                        <li><p id="P14" runat="server">Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨Õº∆¨</p></li>
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
                        ±ÍÃ‚£∫
                        <asp:TextBox ID="TextBox1" runat="server"  class="all_border inp">
                        </asp:TextBox>
                    </p>
        
                    <p id="P17" class="mo mo2" runat="server">
                        ƒ⁄»›£∫
                        <asp:TextBox ID="TextBox2" runat="server"   class="all_border inp" Rows="25" TextMode="MultiLine">
                        </asp:TextBox>
                    </p>
                
                    <asp:Button ID="btn" class='btn all_border' runat="server" Text="∑¢≤º" />

                </div>
		 		</div>
            <!-------------------------------------------------------MID CONT OVER-------------------------------------> 



		 	</div>

        </div>
 <!-------------------------------------------------------MID OVER----------------------------------------------------------------------->     



  <!-------------------------------------------------------BOM BEGIN----------------------------------------------------------------------->  
        <div id="BOM" runat="server">
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="#Index" class="bom_p bom_p_f_i">
                πÿ”⁄Œ“√«
            </asp:HyperLink>

            <div  class="bom_p_x">
                /
            </div>

            <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="~/Index.aspx" class="bom_p">
                √≈µÍ÷∏“˝
            </asp:HyperLink>

            <div  class="bom_p_x">
                /
            </div>

            <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="#Cont" class="bom_p">
                –≈œ¢∑¥¿°
            </asp:HyperLink>

            <div  class="bom_p_x">
                /
            </div>

            <asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="~/Login.aspx" class="bom_p">
                Œ““™º”√À
            </asp:HyperLink>

            <div  class="bom_p_x">
                /
            </div>

            <asp:HyperLink ID="HyperLink5" runat="server" NavigateUrl="~/Login.aspx" class="bom_p">
                ’–∆∏–≈œ¢
            </asp:HyperLink>

            <div  class="bom_p_x">
                /
            </div>

            <asp:HyperLink ID="HyperLink6" runat="server" NavigateUrl="~/Admin.aspx" class="bom_p">
                ”—«È¡¥Ω”
            </asp:HyperLink>
        </div>  
  <!-------------------------------------------------------BOM OVER----------------------------------------------------------------------->                   
    </form>

</body>
</html>
