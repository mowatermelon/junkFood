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

public partial class rec : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)//第一次加载这个页面才显示欢迎，不是第一次，不需要再欢迎一次了。
        {
            //label1和label2是取用Session中转的服务器内存变量            
            string s1 = Session["banj"].ToString();
            string s2 = Session["XM"].ToString();

            Label1.Text = s1;
            Label2.Text = s2;

            //label3和label4是取用Application中转的服务器内存变量   
            string s3 = Application["banj"].ToString();
            string s4 = Application["XM"].ToString();

            Label3.Text = s3;
            Label4.Text = s4;

            //label5和label6是取用Cookies中转的硬盘文件中的变量
            string s5 = Request.Cookies["banj"].Value;
            string s6 = Request.Cookies["XM"].Value;

            Label5.Text = s5;
            Label6.Text = s6;

            //label7和label8是直接取上一个网页传过来的变量
            Label7.Text = Request.QueryString["ID"];
            Label8.Text = Request.QueryString["Pas"];

        }
    }
}
