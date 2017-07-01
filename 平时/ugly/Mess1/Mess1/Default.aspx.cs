using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Data.OleDb;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)//这个函数最重要，所有页面的动态样子都在这里决定
    {
        if (!IsPostBack)//如果是全页的刷新，新加载或者F5，ReDirect
        {
            if (Session["UserID"] == null)
            {
                TD_hy.Visible = false;
                TD_dl.Visible = true;
                TD_zc.Visible = true;
            }
            else
            {
                Label1.Text = Session["UserName"].ToString();
                TD_hy.Visible = true;
                TD_dl.Visible = false;
                TD_zc.Visible = false;
            }

            OleDbConnection OleDbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("user.mdb"));
            OleDbCon.Open();

            string Cmdstring = "select * from userinfo";//准备好SQL查询语句
            OleDbCommand Cmd = new OleDbCommand(Cmdstring, OleDbCon);

            OleDbDataReader MessData = Cmd.ExecuteReader();//查询名字与UserN一样，密码与UserP一样的用户，查询结果放在UserData里，就是一张表  

            string HtmlString = "";

            while(MessData.Read())
            {
                HtmlString = HtmlString  + "<div class='View_L'>" + MessData[0].ToString() + "</div>";
                HtmlString += "<div class='View_C'>" + MessData[1].ToString() + "</div>";
                HtmlString += "<div class='View_R'>" + MessData[2].ToString() + "</div>";
            }

            ShowArea.InnerHtml = HtmlString;
          
            OleDbCon.Close();//关闭数据库链接，必须的！

        }
    }

    protected void Clear_Login(object sender, EventArgs e)
    {
        Session["UserID"] = null;
        Session["UserName"] = null;
        Response.Redirect("default.aspx");
    }
}
