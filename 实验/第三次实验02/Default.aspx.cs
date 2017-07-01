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

            if (TotalRead < PageSize)//总页至少一页
                TotalPage = 1;

            else if (TotalRead % PageSize == 0)//刚好整数页
                TotalPage = TotalRead / PageSize;

            else//有余数的，总数要加一页
                TotalPage = TotalRead / PageSize + 1;

            if (CurPage > TotalPage)
                CurPage = TotalPage;

            CurPgL.Text = "当前第" + CurPage + "页，共" + TotalPage + "页";

            if(CurPage == 1)//第一页的前一页不能用
                PrePage.Enabled = false;
            else if (CurPage == TotalPage)//最后一页的后一页不能用
                NextPage.Enabled = false;


            string CmdStr = "";//该变量存放查询第CurPage页包含的PageSize条记录的SQL指令字符串 

            if (CurPage > 1)
            {
                if (CurPage == TotalPage)
                    CmdStr = "select top * from mesboard  where (Id>(select MAX(Id) from (select top " + PageSize * (CurPage - 1) + " Id from mesboard  ))) order by Id  asc";
                else
                    CmdStr = "select top " + PageSize + " * from mesboard  where (Id>(select MAX(Id) from (select top " + PageSize * (CurPage - 1) + " Id from mesboard  ))) order by Id  asc";
            }

            else 
            {
                if (CurPage == TotalPage)
                    CmdStr = "select top * from mesboard order by Id asc";//如果是最后一页的第一页，直接查出所有记录就可以
                    
                else
                    CmdStr = "select top " + PageSize + " * from mesboard order by Id asc";//如果不是最后一页的第一页，直接查出PageSize条记录就可以
            
            }





            OleDbCommand Cmdsql = new OleDbCommand(CmdStr, OleDbCon);

            OleDbDataReader MessData = Cmdsql.ExecuteReader();

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
    
    
}
