using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            TextBox1.Text = " ";
            TextBox2.Text = " ";
        }
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        String t1 = TextBox1.Text;
        String t2 = TextBox2.Text;

        int shu1 = Convert.ToInt32(t1);
        int shu2 = Convert.ToInt32(t2);
    }
}