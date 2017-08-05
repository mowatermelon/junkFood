<%@ Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head id="Head1" runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link href="~/Styles/Site.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="Form1" runat="server">
    <div class="page">
        <div class="header">
                <h1>
                    我的 ASP.NET 应用程序
                </h1>
            </div>

        <div class="main">
            <div class="caleD">
            <asp:Calendar ID="Calendar" runat="server" Height="400px" Width="500px" 
                    BackColor="White" EnableTheming="True" Font-Bold="True" Font-Underline="False" 
                    SelectedDate="11/16/2016 10:14:01" ViewStateMode="Enabled" OnSelectionChanged = "Calendar_SelectionChanged">
                <DayHeaderStyle BackColor="#0099FF" BorderColor="Black" />
                <DayStyle BackColor="White" BorderColor="White" ForeColor="#0099FF" 
                    BorderStyle="None" Font-Underline="False" />
                <NextPrevStyle BackColor="White" BorderColor="White" BorderStyle="None" 
                    ForeColor="Black" />
                <OtherMonthDayStyle BackColor="White" ForeColor="#CCCCCC" />
                <SelectedDayStyle Font-Italic="False" />
                <SelectorStyle BackColor="#33CCCC" BorderStyle="Solid" ForeColor="White" />
                <TitleStyle BackColor="White" Font-Bold="True" Font-Size="X-Large" 
                    ForeColor="Black" />
                <TodayDayStyle BackColor="#0099CC" ForeColor="White" />
                <WeekendDayStyle BackColor="#669999" Font-Bold="True" Font-Underline="False" 
                    ForeColor="White" Wrap="True" />
            </asp:Calendar>
            </div>
            <div class="noteD">
                <asp:Button ID="Button1" runat="server" class="Button" Text="添加记事" onclick="Button1_Click" />
                <asp:Button ID="Button2" runat="server" class="Button"  Text="显示记事" onclick="Button2_Click"  />           
                <asp:TextBox ID="TextBox" runat="server" BorderStyle="Solid" Columns="20" 
                    BackColor="White" BorderColor="Black" Height="118px"
                    Width="347px" TextMode="MultiLine"></asp:TextBox>
            </div>
        </div>
    </div>
    </form>
</body>
</html>
