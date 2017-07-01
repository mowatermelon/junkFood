<%@ Page Language="C#" AutoEventWireup="true" CodeFile="FileUploadFile.aspx.cs" Inherits="FileUploadFile" %>
<%@ Import Namespace="System.IO" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
   
    <title>FileUpload File</title>
    
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <!-- "raw tags"
        <asp:Label ID="lblImageFile2" Text="Image File:" AssociatedControlID="upImage" Runat="server" />
        <asp:FileUpload ID="upImage2" Runat="server" />    
        <asp:Button id="btnAdd2" Text="Add Image" OnClick="btnAdd_Click" Runat="server" />
        -->

        <!--怎样使得Button控件既能充当FIleupload的功能打开文件对话框又能实现上传功能-->
        <!--如果隐藏fileupload,则无法调用;考虑用TextBox覆盖Fileupload.-->
        <!--效果已做出来了,目前考虑如何让TextBox能接收并显示file路径-->
 <!--现存问题是那个路径不统一,在filefox下只显示文件名,在IE模式下因为安全机制会出现fake路径-->
        <!--另外我想加入局部刷新,用户刷新页面路径消失-->
        <asp:Label ID="lblImageFile" Text="Image File:" Runat="server" />
        <asp:TextBox ID="getfilepath" runat="server" Width="180px" AutoPostBack="false" />       
        <asp:Button id="Button1" Text="浏览..." Runat="server" />
        <asp:Button id="btnUpload" Text="Add Image" Runat="server" OnClick="btnAdd_Click" />
        <asp:FileUpload ID="upImage" Runat="server" style="position:relative;right:300px; opacity:0; filter:alpha(opacity=0); /* 针对 IE8 以及更早的版本 */" onchange="getfilepath.value = this.value;"/>
         

        <hr />
        <asp:DataList runat="server" ID="dlstImages" RepeatColumns="3">
            <ItemTemplate>
                <asp:Image ImageUrl='<%# Eval("Name", "~/UploadImages/{0}") %>' runat="server" style="width:442px" ID="Image1"/>
                <br />
                <%# Eval("Name") %>
            </ItemTemplate>
        </asp:DataList>
    </div>
    </form>
   <script type="text/javascript">
       function checkImg() {
           alert("weidong");
       }
       </script>
</body>
</html>