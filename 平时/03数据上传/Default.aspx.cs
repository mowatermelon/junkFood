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
            Label1.Text = "  ";
            Label2.Text = "  ";
            Label3.Text = "  ";
            Label4.Text = "  ";
            TextBox1.Text = "  ";
            TextBox2.Text = "  ";
        }
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        String t1 = TextBox1.Text;
        String t2 = TextBox2.Text;

        int shu1 = Convert.ToInt32(t1);
        int shu2 = Convert.ToInt32(t2);

        Label1.Text = MinShuGB(shu1, shu2).ToString();
        Label2.Text = MaxShuGY(shu1, shu2).ToString();
        Label3.Text = Sum(shu1, shu2).ToString();
        Label4.Text = IsShu(shu1);

    }

    public int MinShuGB(int shu1, int shu2)
    {
        int k = shu1;

        while (!(k % shu1 == 0 && k % shu2 == 0))
            k++;

        return (k);
    }

    public int MaxShuGY(int shu1, int shu2)
    {
        int k = shu1;

        while (!(shu1 % k == 0 && shu2 % k == 0))
            k--;

        return (k);
    }

    public int Sum(int shu1, int shu2) {
        int k1 = shu1;
        int k2 = shu2;
        int k3 = k1 + k2;
        return (k3);
    }


    public string IsShu(int shu) 
    {
        string work="是";
        int m = 2;

        while (shu % m != 0 && m < shu) {
            m++;
            }

        return (work);



        }
}