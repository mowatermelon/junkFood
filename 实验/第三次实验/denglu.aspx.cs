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

public partial class _denglu : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack) //如果不是回载，表明这是第一次打开
        {
            //想做操作都放在这里，保证只会被执行一次。一般页面初始化都只会做一次。
        }
    }


    protected void Login(object sender, EventArgs e)
    {
        try
        {
            string s1 = TextBox1.Text;
            string s2 = TextBox2.Text;//先把用户输入取过来

            OleDbConnection OleDbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("user.mdb"));
            OleDbCon.Open();

            string Cmdstring = "select * from userinfo where name='mo01' and passWord='001'";//准备好SQL查询语句
            
            
            OleDbCommand Cmd = new OleDbCommand(Cmdstring, OleDbCon);
            Cmd.Parameters.AddWithValue("@UsN", s1);//SQL中的参数@UsN用我们这里的UserN来赋值
            Cmd.Parameters.AddWithValue("@UsP", s2);//SQL中的参数@UsP用我们这里的UserP来赋值

            OleDbDataReader UserData = Cmd.ExecuteReader();// 

            if (UserData.Read())//如果UserData里能读出记录，就表示有该用户，并且密码也符合哦，登陆成功
            {
                Session["UserID"] = UserData[0];//将登陆用户放入Session区域，别的页面也能知道
                Session["UserName"] = UserData[1];//将登陆用户放入Session区域，别的页面也能知道
                
                ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('登陆成功！');window.location.href='Default.aspx';</script>");
            }
            else
            {
               
                ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('登陆失败，请继续登陆！');window.location.href='denglu.aspx';</script>");
            }

            OleDbCon.Close();//关闭数据库链接，必须的！
                      
        }
        catch (Exception ex)
        {
            ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('" + ex.Message + "');window.location.href='denglu.aspx';</script>");
        }
    }

}
