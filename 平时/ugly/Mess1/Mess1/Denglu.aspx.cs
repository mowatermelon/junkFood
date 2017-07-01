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

public partial class _denglu : System.Web.UI.Page
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

            OleDbConnection OleDbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("user.mdb"));
            OleDbCon.Open();

            string Cmdstring = "select * from userinfo where UserName=@UsN and UserPWD=@UsP";//准备好SQL查询语句
            
            OleDbCommand Cmd = new OleDbCommand(Cmdstring, OleDbCon);
            Cmd.Parameters.AddWithValue("@UsN", UserN);//SQL中的参数@UsN用我们这里的UserN来赋值
            Cmd.Parameters.AddWithValue("@UsP", UserP);//SQL中的参数@UsP用我们这里的UserP来赋值

            OleDbDataReader UserData = Cmd.ExecuteReader();//查询名字与UserN一样，密码与UserP一样的用户，查询结果放在UserData里，就是一张表  

            if (UserData.Read())//如果UserData里能读出记录，就表示有该用户，并且密码也符合哦，登陆成功
            {
                Session["UserID"] = UserData[0];//将登陆用户放入Session区域，别的页面也能知道
                Session["UserName"] = UserData[1];//将登陆用户放入Session区域，别的页面也能知道
                
                ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('登陆成功！');window.location.href='Default.aspx';</script>");
            }
            else
            {
                //登陆失败，弹出小窗口提示，页面继续留在登陆页Denglu.aspx
                ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('登陆失败，请继续登陆！');window.location.href='Denglu.aspx';</script>");
            }

            OleDbCon.Close();//关闭数据库链接，必须的！
                      
        }
        catch (Exception ex)
        {
            ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('" + ex.Message + "');window.location.href='Login.aspx';</script>");
        }
    }

}
