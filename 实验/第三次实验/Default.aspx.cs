using System;
using System.Drawing;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Data.OleDb;


public partial class _Default : System.Web.UI.Page
{

    static Int32 CurPage = 1, PageSize = 6, TotalPage = 0, TotalRead = 0;

    protected void Page_Load(object sender, EventArgs e)//这个函数最重要，所有页面的动态样子都在这里决定
    {

        if (!IsPostBack)//如果是全页的刷新，新加载或者F5，ReDirect
        {
            if (Session["UserID"] == null)
            {
                TD_hy.Visible = false;
                TD_dl.Visible = true;
                TD_zc.Visible = false;
                third_mid.Visible = false;
            }
            else
            {
                Label1.Text = Session["UserName"].ToString();
                TD_hy.Visible = true;
                TD_dl.Visible = true;
                TD_zc.Visible = true;
                third_mid.Visible = true;
                HyperLink3.Text = "留言列表";
                HyperLink3.NavigateUrl = "#mid";

            }

            PrePage.Enabled = true;
            NextPage.Enabled = true;

            OleDbConnection OleDbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("user.mdb"));
            OleDbCon.Open();

            string Cmdsql = "select count(*) from mesboard";//准备好SQL查询语句
            OleDbCommand Cmd = new OleDbCommand(Cmdsql, OleDbCon);

            TotalRead = Convert.ToInt32(Cmd.ExecuteScalar());

            HyperLink1.Text = "蹦 蹦  跳 跳 >_<~,这 里 是 西 瓜 为 您 报 道 ，小 莫 小 陌 这 里 一 共 有" + TotalRead.ToString() + "条 可 怜 的 留 言" ;

            if (TotalRead < PageSize)//总页至少一页
                TotalPage = 1;

            else if (TotalRead % PageSize == 0)//刚好整数页
                TotalPage = TotalRead / PageSize;

            else//有余数的，总数要加一页
                TotalPage = TotalRead / PageSize + 1;

            if (CurPage > TotalPage)
                CurPage = TotalPage;

            CurPageL.Text = "当前第" + CurPage + "页，共" + TotalPage + "页";

            //HyperLink3.Text = TotalPage.ToString();

            if(CurPage == 1)//第一页的前一页不可见
                PrePage.Enabled = false;
            else if (CurPage == TotalPage)//最后一页的后一页不可见
                NextPage.Enabled = false;


            String CmdStr = "";//该变量存放查询第CurPage页包含的PageSize条记录的SQL指令字符串 

            if (CurPage > 1)
            {
                if (CurPage == TotalPage)
                    CmdStr = "select top * from mesboard  where (Id>(select MAX(Id) from (select top " + PageSize * (CurPage - 1) + " Id from mesboard  ))) order by Id";
                else
                    CmdStr = "select top " + PageSize + " * from mesboard  where (Id>(select MAX(Id) from (select top " + PageSize * (CurPage - 1) + " Id from mesboard  ))) order by Id";
            }

            else 
            {
                if (CurPage == TotalPage)
                    CmdStr = "select top * from mesboard order by Id";//如果是最后一页的第一页，直接查出所有记录就可以
                    
                else
                    CmdStr = "select top " + PageSize + " * from mesboard order by Id";//如果不是最后一页的第一页，直接查出PageSize条记录就可以
            
            }





            OleDbCommand Cmdsql01 = new OleDbCommand(CmdStr, OleDbCon);

            OleDbDataReader MessData = Cmdsql01.ExecuteReader();

            Int32 Num = (CurPage - 1) * PageSize + 1;//当前页的起始序号

            string HtmlString = "";

            while(MessData.Read())
            {
                HtmlString = HtmlString  + "<div class='View_L'>" + MessData[0].ToString() + "</div>";
                HtmlString += "<div class='View_C'>" + MessData[2].ToString() + "</div>";
                HtmlString += "<div class='View_R'>" + MessData[1].ToString() + "</div>";
            }

            ShowArea.InnerHtml = HtmlString;

            MessData.Close();//关闭数据库链接，必须的！
            OleDbCon.Close();//关闭数据库链接，必须的！

        }
    }   
    
        protected void Button1_Click(object sender, EventArgs e)
    {
        try
        {
            if (Label1.Text == null)
				{
					 ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('没有登录哦！');window.location.href='denglu.aspx';</script>");
				}
				else {
						  
						  string UserI = TextBox1.Text;
                          string UserC = Label1.Text;
            			  string UserN = TextBox2.Text;

            			  OleDbConnection OleDbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("user.mdb"));
            			  OleDbCon.Open();

                          string Cmdstring = "insert into mesboard values(@UsI,@UsC,@UsN)";//准备好SQL查询语句
            			  OleDbCommand Cmd = new OleDbCommand(Cmdstring, OleDbCon);
            			  Cmd.Parameters.AddWithValue("@UsI", UserI);//SQL中的参数@UsN用我们这里的UserI来赋值
            			  Cmd.Parameters.AddWithValue("@UsN", UserN);//SQL中的参数@UsN用我们这里的UserN来赋值
            			  Cmd.Parameters.AddWithValue("@UsC", UserC);//SQL中的参数@UsP用我们这里的UserC来赋值

            			  Cmd.ExecuteNonQuery();//执行插入指令        
            			  OleDbCon.Close();//关闭数据库链接，必须的！

            			  ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('发表成功！');window.location.href='Default.aspx';</script>");
				
				}        
          

        }
        catch (Exception ex)
        {
            ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('" + ex.Message + "');window.location.href='Default.aspx';</script>");
        }
    }

        protected void PrePage_Click(object sender, EventArgs e)
    {
        CurPage -= 1;
        Response.Redirect("Default.aspx");
    }


        protected void NextPage_Click(object sender, EventArgs e)
        {
            CurPage += 1;
            Response.Redirect("Default.aspx");
        }


        protected void FinaPage_Click(object sender, EventArgs e)
        {

        }

        protected void Clear_Login(object sender, EventArgs e)
        {
            Session["UserID"] = null;
            Session["UserName"] = null;
            Response.Redirect("default.aspx");
        }
    
}
