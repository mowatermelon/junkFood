<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml"   runat="server">
<head>
<link rel="stylesheet" type="text/css" href="CSS/Ass.css">
    <title>个人博客‘hello’</title>
</head>
<body  runat="server">

<div  runat="server">	    
	<section class="p10"  runat="server">
	<a href=""  runat="server">YOUR MEMORY</a>
	</section>
</div>

      <div id="ShowArea" runat="server">            
     
       </div>   



<div runat="server">
<form id="form1" runat="server">
    
        <asp:FileUpload ID="FileUpload1" runat="server" class="button" onclick=""/>
        <asp:Button ID="upload" runat="server" OnClick="Good_Up" Text="button" class="all_border btn" />
         

        <hr />
    </form>
</div>



</body>
</html>
