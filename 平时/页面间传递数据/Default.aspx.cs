using System;
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

public partial class _Default : System.Web.UI.Page 
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack) //如果不是回载，表明这是第一次打开
        {
            //想做操作都放在这里，保证只会被执行一次。一般页面初始化都只会做一次。
        }       
    }


    protected void InputXM(object sender, EventArgs e)
    {       

        string s1 = TextBox1.Text;
        string s2 = TextBox2.Text;//先把用户输入取过来

        if (s1.Length == 0 || s2.Length == 0)
            ClientScript.RegisterStartupScript(GetType(), "警告", "<script type='text/javascript'>alert('班级或姓名为空，请重新输入！');window.location.href='Default.aspx';</script>");
        else
        {
            //下面这三种方式，都是通过服务器程序中转来实现不同页面间的数据传递（交换）
            //其他所有网页只需要知道这两个变量名，就可以访问用户之前在别的网页中输入的数据了，很自由
            Session["banj"] = s1;
            Session["XM"] = s2;//网站服务器里开辟空间，存进去两个变量，这两个变量对同一用户通用

            Application["banj"] = s1;
            Application["XM"] = s2;//网站服务器里开辟空间，存进去两个变量，这两个变量对同一服务器用户通用

            Response.Cookies["banj"].Value = TextBox1.Text;
            Response.Cookies["banj"].Expires = DateTime.Now.AddDays(30);
            Response.Cookies["XM"].Value = TextBox2.Text;
            Response.Cookies["XM"].Expires = DateTime.Now.AddDays(30);//在客户电脑硬盘里建立一个cookie文件，这两个变量加密放在文件里，客户无须每次都输入


            //下面这一种方式，就是不占服务器内存也不占客户电脑硬盘，直接转给指定页面
            Response.Redirect("rec.aspx?ID=" + TextBox1.Text + "&Pas=" + TextBox2.Text); //只能写相对地址，因为相对位置才能永远不变。
        }
    }
}
