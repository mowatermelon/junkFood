<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Admin.aspx.cs" Inherits="_Admin" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>

<head>
    <title> >��< ~  AMOVO >��< ~</title>
     <link href="Styles/main.css" rel="stylesheet" type="text/css" />
     <script src="Scripts/shop.js" type="text/javascript"></script>
</head>
<body  runat="server">

    <form id="form1" runat="server">

   <!-------------------------------------------------------TOP BEGIN----------------------------------------------------------------------->
       <div id="TOP" runat="server" class="top">
             <div id="logo" runat="server" class="top_l">
                <p id="shopName" runat="server">AMOVO</p>
             </div>

             <div id="shopList" runat="server" class="top_r">
                <ul>
                    <li id="Li1"  runat="server">
                         <asp:HyperLink ID="List01" runat="server" NavigateUrl="#" class="">
                                        HOME
                        </asp:HyperLink>
                    </li>

                    <li id="Li2"  runat="server">
                         <asp:HyperLink ID="List02" runat="server" NavigateUrl="~/Index.aspx"  Text="SHOP">
                                        
                        </asp:HyperLink>
                    </li>

                    <li id="Li3"  runat="server">
                         <asp:HyperLink ID="List03" runat="server" NavigateUrl="#STORE" Text="STORE">
                                        
                        </asp:HyperLink>
                    </li>

                    <li id="Li4"  runat="server">
                         <asp:HyperLink ID="List04" runat="server" NavigateUrl="#CONTENT"  Text="CONTENT">           
                        </asp:HyperLink>
                    </li>

                    <li id="Li5"  runat="server" ondblclick="clear" >                      
                         <asp:HyperLink ID="List05" runat="server" NavigateUrl="#"  Text="LOGIN">
                                        
                        </asp:HyperLink>
                    </li>
                                             
                </ul>
             
                
             </div>

       </div>
  <!-------------------------------------------------------TOP OVER----------------------------------------------------------------------->
  

 <!-------------------------------------------------------MID BEGIN----------------------------------------------------------------------->         
        <div id="mid"  runat="server">   

            <!-------------------------------------------------------MID HOME BEGIN-------------------------------------> 
            <div id="HOME" class="mid_home" runat="server">
                <ul  runat="server">
                    <li id="img01" class="Carousel" runat="server">
                        <p id="welcome01" class="welcome">Reject cocoa butter</p>
                        <h1 class="welcome">welocom to amovo</h1>
                        <p class="welcome">SHOP NOW     -------></p>
                    </li>

                    <li id="img02" class="Carousel" runat="server">

                    </li>
                </ul>
            </div>
            <!-------------------------------------------------------MID HOME OVER-------------------------------------> 



            <!-------------------------------------------------------MID SHOP BEGIN-------------------------------------> 
            <div id="SHOP"  class="mid_shop"  runat="server">
               <!-------------------------------------------------------MID SHOP 01 BEGIN--------------------> 
                <ul id="advertisement" class="mid_shop_01" runat="server">
                    <li id="advertisement01"   runat="server">
                        <h2 class="welcome ads01"   runat="server">SALE</h2>
                        <p class="welcome"   runat="server">&nbsp;&nbsp;UP TO 25% OFF</p>
                        <p class="welcome"   runat="server">Our latest coupons</p>
                    </li>

                    <li id="advertisement02"    runat="server">
                        <h4 class="welcome  ads01"  runat="server">Leading brands of pure cocoa butter chocolate</h4>
                        <p class="welcome"  runat="server">&nbsp;&nbsp;&nbsp;Discover more</p>
                        <p class="welcome"  runat="server">SHOP NOW     -------></p>
                    </li>                      
                </ul>
                <!-------------------------------------------------------MID SHOP 01 OVER--------------------> 

               <!-------------------------------------------------------MID SHOP 02 BEGIN--------------------> 
                <ul id="gift" class="mid_shop_02" runat="server">
                    <li id="gift01"  runat="server">
                        <p  class="welcome giftp01"  runat="server">DECORATION</p>
                        <i  class="welcome"  runat="server">shopping -></i>
                    </li>
 
                     <li id="gift02"  runat="server">
                        <p  class="welcome giftp01"  runat="server">BEST SALE 2016</p>
                        <small><i  class="welcome"  runat="server">shopping --></i></small>
                    </li>                   

                    <li id="gift03"  runat="server">
                        <p  class="welcome giftp01"  runat="server">Children's Day must-have chocolate</p>
                        <i  class="welcome"  runat="server">shopping -----></i>
                    </li>                   
                </ul>
                <!-------------------------------------------------------MID SHOP 02 OVER--------------------> 


               <!-------------------------------------------------------MID SHOP 03 BEGIN--------------------> 


                <ul id="commodity" runat="server">
                <a ></a>
                </ul>

                <ul id="goodbutton"  runat="server">
                   <li id="Li6"  runat="server">
                         <asp:Button ID="PrePage" runat="server" Text="<" OnClick="PrePage_Click" class="btn"/>
                    </li>
                    
                   <li id="Li7"  runat="server">
                         <asp:Button ID="NextPage" runat="server" Text=">" OnClick="NextPage_Click" class="btn"/>
                    </li>  
                    
                    <li id="Li8"  runat="server">
                         <asp:Label ID="CurPageL" runat="server"></asp:Label>
                    </li>                                                             
                </ul>
                <!-------------------------------------------------------MID SHOP 03 OVER--------------------> 



            </div>
            <!-------------------------------------------------------MID SHOP OVER-------------------------------------> 



            <!-------------------------------------------------------MID STORE BEGIN-------------------------------------> 
            <div id="STORE" class="mid_store" runat="server" >
                <ul id="Ul1" runat="server">
                    <li id="news01"  class="good"   runat="server">
                        <h1 id="H1" runat="server">٤�ɳ�</h1>
                        <i>&nbsp;&nbsp;��Ҫ���Լ�������ߴ���ϣ������ʧ������,��Ҫ��Ұ����û��ͯ�档</i>
                    </li>

                    <li id="news02"  class="good"  runat="server">
                        <h1 id="H2" runat="server" >������</h1>
                        <i>&nbsp;&nbsp;����Ҫ��̫�߷����ò���������Ȥ,��ҪΪ��ȡ������ʤ����ʧȥ�˺͡�</i>
                    </li>
                    
                    
                    <li id="news03"  class="good"  runat="server">
                        <h1 id="H3" runat="server">��ΰ��</h1>
                        <i>&nbsp;&nbsp;Ŭ�����ţ�ѧϰ�Ĺ��̱Ƚ������������,�չ��Լ���ͬʱҲҪ������������Ȥ�� </i>
                    </li>

                    <li id="news04"  class="good"  runat="server">
                        <h1 id="H4" runat="server">DIY</h1>
                        <i>&nbsp;&nbsp;��δ���ܶ�Ϥ���£���һ��Ҫ���ر���,��Ҫ���ݸ߹��Լ���������������ˡ� </i>
                    </li>                                    
                </ul>
            </div>
            <!-------------------------------------------------------MID STORE OVER-------------------------------------> 



            <!-------------------------------------------------------MID CONTENT BEGIN-------------------------------------> 

            <!-------------------------------------------------------MID CONTENT OVER-------------------------------------> 




            <!-------------------------------------------------------MID LOGIN BEGIN-------------------------------------> 
            <div id="LOGIN"  class="mid_login" runat="server">
                  <div id="Div1" class="mo1" runat="server">
                        LOGIN
                        <asp:Button ID="close" runat="server" Text="X" class=""/>
                    </div>

                    <div id="Div2" runat="server">
                        <h2>�û�����</h2>
                        <asp:TextBox ID="TextBox3" runat="server"  class="input logini">
                        </asp:TextBox>
                    </div>
        
                    <div id="Div3" runat="server">
                        <h2>��&nbsp;&nbsp;�룺</h2>
                        <asp:TextBox ID="TextBox4" runat="server"  class="input logini" TextMode="Password">
                        </asp:TextBox>
                    </div>
                
                    <asp:Button ID="loginbtn" runat="server" Text="��¼" class="btn" OnClick="Login"/>

                    <asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="~/Register.aspx">
                        û���ʺţ�����ע��
                    </asp:HyperLink>
            </div>
            <!-------------------------------------------------------MID LOGIN OVER-------------------------------------> 


        </div>
 <!-------------------------------------------------------MID OVER----------------------------------------------------------------------->     



  <!-------------------------------------------------------BOM BEGIN----------------------------------------------------------------------->  
            <div id="CONTENT"  class="bottom" runat="server">
                <ul>
                    <li id="CONTENT01"  runat="server">
                        <p class="welcome contentp01">Remember if you feel good praise</p>
                        <p class="welcome">CALL US :666 666 666</p>
                        <p class="welcome">ADDRESS:safty & securty</p>
                        <p class="welcome">The quality of absolute security</p>
                    </li>
                
                     <li id="CONTENT02"  runat="server">
                            <h1 id="H5" runat="server">
                                CONTENT
                            </h1>
                
                            <p id="P1" runat="server">
                                ���⣺
                                <asp:TextBox ID="TextBox1" runat="server"  class="input" Text="TITLE">
                                </asp:TextBox>
                           </p>
        
                            <p id="P2" runat="server">
                                ���ݣ�
                                <asp:TextBox ID="TextBox2" runat="server"   class="input" Rows="25" TextMode="MultiLine" Text="TALK WITH US" Font-Names="���� Light" Font-Size="20px">
                                </asp:TextBox>
                            </p>
                
                            <asp:Button ID="submit" class='btn' runat="server" Text="����" OnClick="send"/>
                    </li>               
                </ul>


            </div>
  <!-------------------------------------------------------BOM OVER----------------------------------------------------------------------->                   
    </form>

</body>
</html>
