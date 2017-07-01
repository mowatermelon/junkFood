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


public partial class _View : System.Web.UI.Page
{


    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
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
        }


        string MyHtml = ""; //在界面中待显示的Html代码，初始为空字符串

        string t1 = Label1.Text;
        string t2 = Label2.Text;

        int shu1 = Convert.ToInt32(t1);
        int shu2 = Convert.ToInt32(t2);



        for (int i = 1; i <= shu1; i++)
        {
            for (int m = 1; m <= shu2; m++)
            {
                mid.InnerHtml = MyHtml;
                MyHtml += "<div class='DataList'><img src='img/img0" + m + ".jpg'/><p id='mo'>img0" + m + ".jpg</p></div>";
            }
        }

    }

  
}
