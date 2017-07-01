using System;
using System.Drawing;
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
//using System.Data.SqlClient;//这个必须有，连SQL Server
using System.Data.OleDb;//这个用Access数据库的话，必须有

public partial class Zhuce : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)//这个函数最重要，所有页面的样子都在这里决定
    {
        if (!IsPostBack)//如果是全页的刷新，新加载或者F5
        {
            if (Session["UserID"] == null)
            {
                TD_hy.Visible = false;
                TD_dl.Visible = true;
                TD_zc.Visible = true;
                TextBox1.Enabled = false;
                TextBox1.BackColor = Color.FromArgb(122, 122, 122);
                TextBox2.Enabled = false;
                TextBox2.BackColor = Color.FromArgb(122, 122, 122);
                Button1.Enabled = false;
            }
            else
            {
                TD_hy.Visible = true;
                TD_dl.Visible = false;
                TD_zc.Visible = false;
                TextBox1.Enabled = true;
                TextBox1.BackColor = Color.FromArgb(255, 255, 255);
                TextBox2.Enabled = true;
                TextBox2.BackColor = Color.FromArgb(255, 255, 255);
                Button1.Enabled = true;
            }
        }
    }

    protected void Clear_Login(object sender, EventArgs e)
    {
        Session["user"] = null;
        Response.Redirect("default.aspx");
    }


    protected void Button1_Click1(object sender, EventArgs e)
    {
        try
        {
            string BT = TextBox1.Text;
            string NR = TextBox2.Text;

            OleDbConnection OleDbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("test.mdb"));
            OleDbCon.Open();

            string Cmdstring = "insert into Mess(UserID,UserName,Title,Content) values(@ID,@UN,@Ti,@Ct)";//准备好SQL查询语句
            OleDbCommand Cmd = new OleDbCommand(Cmdstring, OleDbCon);

            Cmd.Parameters.AddWithValue("@ID", Session["UserID"].ToString());
            Cmd.Parameters.AddWithValue("@UN",Session["UserName"].ToString());
            Cmd.Parameters.AddWithValue("@Ti",TextBox1.Text);
            Cmd.Parameters.AddWithValue("@Ct",TextBox2.Text);
            
            Cmd.ExecuteNonQuery();//执行插入指令        
            OleDbCon.Close();//关闭数据库链接，必须的！

            //注册成功，就弹出小窗口提示，并将页面转到首页Default.aspx
            ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('发布成功！');window.location.href='Default.aspx';</script>");

        }
        catch (Exception ex)
        {
            ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('" + ex.Message + "');window.location.href='Post.aspx';</script>");
        }
    }
}
