<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Index.aspx.cs" Inherits="_Index" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>

<head>
    <title> >_< ~  INDEX >_< ~</title>
     <link href="Styles/Site01.css" rel="stylesheet" type="text/css" />
     <script type="text/javascript" src="Scripts/mo.js"></script>
</head>
<body>

    <form id="form1" runat="server" method="post">

   <!-------------------------------------------------------TOP BEGIN----------------------------------------------------------------------->
       <div id="TOP" runat="server">

           <div id="TOP_IMG"  runat="server">                

           </div>

           
           <div id="Top_Right"  runat="server">

                <div>
		 		    <span id="span_Index" class="btnHd btnOver" onmouseover="showIndex()" runat="server">����</span>
		 		    <span id="span_Tran" class="btnHd" onmouseover="showTran()" runat="server">����</span>
		 		    <span id="span_Kind" class="btnHd btnCenter" onmouseover="showKind()" runat="server">����</span>
                    <span id="span_Prod" class="btnHd" onmouseover="showProd()" runat="server">��Ʒ</span>
                    <span id="span_Cont" class="btnHd" onmouseover="showCont()" runat="server">����</span>
		 	    </div>

           </div>


       </div>
  <!-------------------------------------------------------TOP OVER----------------------------------------------------------------------->
  

 <!-------------------------------------------------------MID BEGIN----------------------------------------------------------------------->         
        <div id="mid"  runat="server">   


            <!-------------------------------------------------------MID INDEX BEGIN-------------------------------------> 
		 		<div id="Index" runat="server">

                    <div id="first_mid"  runat="server">
                           
                        <div id="ShowArea" runat="server">            
                            <ul id="goodImg" runat="server">

                            </ul>

		 			        <ul class="word"  runat="server">	
		 				        <li runat="server"><asp:Label ID="P2" runat="server" Text="" class="title"></asp:Label></li>
                                <li runat="server"><p id="P3" class="title02"  runat="server">��61��ͯ���ǹ�ʳƷ��������� ���ܰ������ɿ��� ����ƽ�� ˿������</p></li>
                                <li  class="price"  runat="server"><p id="pp">��Ʒ�۸� ��</p><i ID="P4" runat="server"></i></li>
                                <li runat="server"><p id="P5" class="price number"  runat="server">&nbsp;&nbsp;����2382</p></li>
                                <li runat="server">����<p id="P6" class="title "  runat="server">����ָ����Ʒ��2��������Amovo/ħ�� ħ�� ţ�̿�ζ٤�ɳ�</p></li>
                                <li runat="server">�ͻ���
                                    <select id="Select1" runat="server" >
                                        <option runat="server">�人</option>
                                        <option runat="server">�Ϻ�</option>
                                        <option runat="server">�人</option>
                                        <option runat="server">����</option>
                                        <option runat="server">����</option>
                                    </select>�˷�10.00Ԫ  ��69.00����
                                </li>
                                <li class="buyNumber" runat="server">
                                    <i>&nbsp;&nbsp;&nbsp;&nbsp;��ѡ����������</i>

                                    <label  runat="server"><input type="radio" name="buy_number"  runat="server" value="100"/>100</label>
                                    <label  runat="server"><input type="radio" name="buy_number"  runat="server" value="200" />200</label>
                                    <label  runat="server"><input type="radio" name="buy_number"  runat="server" value="300" />300</label>
                                    <asp:Button ID="buy"  class='buy' runat="server" Text="���� ����" OnClick="Good_Up"/>
                                </li>
                             </ul>    
                        </div>   
                    </div>
         
         
                    <div id="second_mid" runat="server">
                        <ul>
                            <li class='btn'  runat="server">
                                <asp:Button ID="PrePage"  class='all_border btn' runat="server" Text="< back" onclick="PrePage_Click" />
                            </li>

                            <li class='btn'  runat="server">
                                <asp:Button ID="NextPage"  class='all_border btn' runat="server" Text=" up >" onclick="NextPage_Click" />
                            </li>

                            <li class='bom_p bom_p_f_i'  runat="server">
                                <asp:HyperLink ID="CurPageL" runat="server" NavigateUrl="" class="bom_p bom_p_f_i"></asp:HyperLink>
                            </li>
                        </ul>

                    </div>
                      
		 		</div>
            <!-------------------------------------------------------MID INDEX OVER-------------------------------------> 

            <!-------------------------------------------------------MID TRAN BEGIN-------------------------------------> 
		 		<div id="Tran" runat="server">
                    <ul class="MIMI">
                        <li class="HMIMI hMIMI">�ɿ�������</li>
                        <li class="HMIMI hMIMI">�ɿ�������</li>
                        <li class="hMIMI">٤�ɳ�</li>
                        <li class="hMIMI">��Ҫ���Լ�������ߴ���ϣ������ʧ������,��Ҫ��Ұ����û��ͯ�档</li>
                        <li class="hMIMI">������</li>
                        <li class="hMIMI">����Ҫ��̫�߷����ò���������Ȥ,��ҪΪ��ȡ������ʤ����ʧȥ�˺͡�</li>
                        <li class="hMIMI">��ΰ��</li>
                        <li class="hMIMI">Ŭ�����ţ�ѧϰ�Ĺ��̱Ƚ������������,�չ��Լ���ͬʱҲҪ������������Ȥ�� </li>
                        <li class="hMIMI">DIY</li>
                        <li class="hMIMI">��δ���ܶ�Ϥ���£���һ��Ҫ���ر���,��Ҫ���ݸ߹��Լ���������������ˡ� </li>
                    </ul>
		 		</div>
            <!-------------------------------------------------------MID TRAN OVER-------------------------------------> 



            <!-------------------------------------------------------MID KIND BEGIN-------------------------------------> 
		 		<div id="Kind" runat="server">
                    <ul class="KIND">
                        <li class="HKIND hKIND">�ɿ�������</li>
                        <li class="HKIND hKIND">�ɿ���ȫ��</li>
                        <li class="HKIND hKIND">�ɿ����۸�</li>
                         <li class="HKIND hKIND">�޸�</li>
                        <li class="hKIND">��ΰ��Ȥζ���</li>
                        <li class="hKIND">Amovo/ħ�� ����1��1���ֹ����ɿ�֬ �����������˽��ɿ������ �ֹ�������ĺ��ɿ���</li>
                        <li class="hKIND">��388.00</li>
                        <li  class='hKIND' runat="server">
                             <asp:Button class='all_border btn' runat="server" Text="�޸�"/>
                        </li>
                        <li class="hKIND">�ɿ���������Ȥζ���</li>
                        <li class="hKIND">Amovo/ħ�� ����1��1����һ��ͯ�ڴ��ֹ����ɿ������װ���İ������ɿ��������������˽�</li>
                        <li class="hKIND">��488.00</li>
                        <li class='hKIND'  runat="server">
                             <asp:Button class='all_border btn' runat="server" Text="�޸�"/>
                        </li>
                        <li class="hKIND">��ΰ������ϵ��</li>
                        <li class="hKIND">Amovo/ħ�� ��һ��ͯ�� 35%�ɿ�ţ���ɿ��� ���ڴ��ɿ�֬ �ֹ����ɿ��� ������ʳ 120g</li>
                        <li class="hKIND">��100.00</li>
                        <li class='hKIND'  runat="server">
                             <asp:Button class='all_border btn' runat="server" Text="�޸�"/>
                        </li>
                        <li class="hKIND">٤�ɳ�΢��С�ܰ�����</li>
                        <li class="hKIND">Amovo/ħ�� ��һ��ͯ��С�ܰ������ֹ������ɿ�����װ ���ɿ�֬ ��ʳ���ս�������160g</li>
                        <li class="hKIND">��555.00</li>
                        <li class='hKIND'  runat="server">
                             <asp:Button class='all_border btn' runat="server" Text="�޸�"/>
                        </li>
                    </ul>

		 	    </div>
            <!-------------------------------------------------------MID KIND OVER-------------------------------------> 



            <!-------------------------------------------------------MID PROD BEGIN-------------------------------------> 
		 		<div id="Prod" class="info" runat="server">
                        <ul id="Ul1" class="News" runat="server">
                            <li class="hNews HNews">������������Ʒid</li>
                            <li class="hNews HNews">������������Ʒ����</li>                      
                        </ul>

                        <ul  id="buyNews" class="News" runat="server">
                        
                        </ul>

                        <ul>
                            <li id="Li1" class='btn'  runat="server">
                                <asp:Button ID="Button2"  class='all_border btn' runat="server" Text="< back" onclick="PrePage_Click" />
                            </li>

                            <li id="Li2" class='btn'  runat="server">
                                <asp:Button ID="Button3"  class='all_border btn' runat="server" Text=" up >" onclick="NextPage_Click" />
                            </li>

                            <li id="Li3" class='bom_p bom_p_f_i'  runat="server">
                                <asp:HyperLink ID="HyperLink7" runat="server" NavigateUrl="" class="bom_p bom_p_f_i"></asp:HyperLink>
                            </li>
                        </ul>
		 		</div>
            <!-------------------------------------------------------MID PROD OVER-------------------------------------> 




            <!-------------------------------------------------------MID CONT BEGIN-------------------------------------> 
                <div id="Cont" class="info" runat="server">
                    <div id="third_mid" runat="server">

                    <p id="P15" class="mo1" runat="server">
                        CONTENT
                   </p>
                
                    <p id="P16" class="mo mo2" runat="server">
                        ���⣺
                        <asp:TextBox ID="TextBox1" runat="server"  class="all_border inp">
                        </asp:TextBox>
                    </p>
        
                    <p id="P17" class="mo mo2" runat="server">
                        ���ݣ�
                        <asp:TextBox ID="TextBox2" runat="server"   class="all_border inp" Rows="25" TextMode="MultiLine">
                        </asp:TextBox>
                    </p>
                
                    <asp:Button ID="btn" class='btn all_border' runat="server" Text="����" />

                </div>
		 		</div>
            <!-------------------------------------------------------MID CONT OVER-------------------------------------> 



        </div>
 <!-------------------------------------------------------MID OVER----------------------------------------------------------------------->     



  <!-------------------------------------------------------BOM BEGIN----------------------------------------------------------------------->  
        <div id="BOM" runat="server">
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Admin.aspx" class="bom_p bom_p_f_i">
                ��������
            </asp:HyperLink>

            <div  class="bom_p_x">
                /
            </div>

            <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="~/Admin.aspx" class="bom_p">
                �ŵ�ָ��
            </asp:HyperLink>

            <div  class="bom_p_x">
                /
            </div>

            <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="~/Admin.aspx" class="bom_p">
                ��Ϣ����
            </asp:HyperLink>

            <div  class="bom_p_x">
                /
            </div>

            <asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="~/Admin.aspx" class="bom_p">
                ��Ҫ����
            </asp:HyperLink>

            <div  class="bom_p_x">
                /
            </div>

            <asp:HyperLink ID="HyperLink5" runat="server" NavigateUrl="~/Admin.aspx" class="bom_p">
                ��Ƹ��Ϣ
            </asp:HyperLink>

            <div  class="bom_p_x">
                /
            </div>

            <asp:HyperLink ID="HyperLink6" runat="server" NavigateUrl="~/Admin.aspx" class="bom_p">
                ��������
            </asp:HyperLink>
        </div>  
  <!-------------------------------------------------------BOM OVER----------------------------------------------------------------------->                   
    </form>

</body>
</html>
