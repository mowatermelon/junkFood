using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
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
                TD_zc.Visible = true;
                HyperLink2.Text = "上传商品";
                HyperLink2.NavigateUrl = "GoodUp.aspx";
            }

            string MyHtml = ""; //在界面中待显示的Html代码，初始为空字符串

            try
            {
                OleDbConnection OleDbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("img.mdb"));
                OleDbCon.Open();

                string Cmdstring = "select * from GoodItem";//准备好SQL查询语句
//"select top 12 ItemName,ItemNum,ItemPrice,ItemPics from GoodItem order by ItemCreatTime DESC"

                OleDbCommand Cmd = new OleDbCommand(Cmdstring, OleDbCon);
                
                OleDbDataReader GoodData = Cmd.ExecuteReader();

                while(GoodData.Read())
                {
                    MyHtml += "<div class='Item'>";
                    MyHtml += "<div class='pic'><img src=" + GoodData[2].ToString() + " /></div>";
                    MyHtml += "<div class='price'>" + GoodData[4].ToString() + "</div>";
                    MyHtml += "<div class='name'>" + GoodData[1].ToString() + "</div>";
                    MyHtml += "<div class='shop'>" + GoodData[5].ToString() + "</div>";
                    MyHtml += "<div class='icons'>" + GoodData[8].ToString() + "</div>";
                    MyHtml += "</div>";
                }                

                OleDbCon.Close();//关闭数据库链接，必须的！

            }
            catch (Exception ex)
            {
                ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('" + ex.Message + "');window.location.href='Login.aspx';</script>");
            }
            
            MID.InnerHtml = MyHtml;
            
        }
    }
    protected void Clear_Login(object sender, EventArgs e)
    {
        Session["UserID"] = null;
        Session["UserName"] = null;
        Response.Redirect("default.aspx");
    }
}
}