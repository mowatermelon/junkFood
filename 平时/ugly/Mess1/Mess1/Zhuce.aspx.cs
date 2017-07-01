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


//using System.Data.SqlClient;//这个必须有，连SQL Server
using System.Data.OleDb;//这个用Access数据库的话，必须有

public partial class Zhuce : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        try
        {
            string UserN = TextBox1.Text;
            string UserP = TextBox2.Text;

            OleDbConnection OleDbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("test.mdb"));
            OleDbCon.Open();

            string Cmdstring = "insert into YH(UserName,UserPWD) values(@UsN,@UsP)";//准备好SQL查询语句
            OleDbCommand Cmd = new OleDbCommand(Cmdstring, OleDbCon);
            Cmd.Parameters.AddWithValue("@UsN", UserN);//SQL中的参数@UsN用我们这里的UserN来赋值
            Cmd.Parameters.AddWithValue("@UsP", UserP);//SQL中的参数@UsP用我们这里的UserP来赋值

            Cmd.ExecuteNonQuery();//执行插入指令        
            OleDbCon.Close();//关闭数据库链接，必须的！

            Session["User"] = UserN;
            //注册成功，就弹出小窗口提示，并将页面转到首页Default.aspx
            ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('注册成功！');window.location.href='Default.aspx';</script>");
        
        }
        catch (Exception ex)
        {
            ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('" + ex.Message + "');window.location.href='Login.aspx';</script>");
        }
    }

}
