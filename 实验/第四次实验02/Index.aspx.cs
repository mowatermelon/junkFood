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


public partial class _Index : System.Web.UI.Page
{

    static Int32 CurPage = 1, PageSize = 4, TotalPage = 0, TotalRead = 0;

    protected void Page_Load(object sender, EventArgs e)//这个函数最重要，所有页面的动态样子都在这里决定
    {


        if (!IsPostBack)//如果是全页的刷新，新加载或者F5，ReDirect
        {

            PrePage.Enabled = true;
            NextPage.Enabled = true;

            OleDbConnection OleDbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("user.mdb"));
            OleDbCon.Open();

            string Cmdsql = "select count(*) from Img";//准备好SQL查询语句
            OleDbCommand Cmd = new OleDbCommand(Cmdsql, OleDbCon);

            TotalRead = Convert.ToInt32(Cmd.ExecuteScalar());

            //HyperLink1.Text = "蹦 蹦  跳 跳 >_<~,这 里 是 西 瓜 为 您 报 道 ，小 莫 小 陌 这 里 一 共 有" + TotalRead.ToString() + "条 可 怜 的 留 言";

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

            if (CurPage == 1)//第一页的前一页不可见
                PrePage.Enabled = false;
            else if (CurPage == TotalPage)//最后一页的后一页不可见
                NextPage.Enabled = false;


            String CmdStr = "";//该变量存放查询第CurPage页包含的PageSize条记录的SQL指令字符串 

            if (CurPage == 1)
            {
                if (TotalPage == 1)
                    CmdStr = "Select * from Img order by ImgId";
                else if (TotalPage > 1)
                    CmdStr = "Select top " + PageSize + " * from Img order by ImgId";
            }
            else if (CurPage > 1)
            {
                string CmdStr1 = "Select MAX(ImgId) from (Select top " + (CurPage - 1) * PageSize + " ImgId from Img order by ImgId )";
                OleDbCommand Cmd1 = new OleDbCommand(CmdStr1, OleDbCon);
                int MZ = Convert.ToInt16(Cmd1.ExecuteScalar());

                if (CurPage == TotalPage)
                    CmdStr = "Select * from Img where Int(ImgId)>" + MZ + " order by ImgId ";
                else
                    CmdStr = "Select top " + PageSize + " *  from Img where Int(ImgId)>" + MZ + " order by ImgId ";
            }





            OleDbCommand Cmdsql01 = new OleDbCommand(CmdStr, OleDbCon);

            OleDbDataReader MessData = Cmdsql01.ExecuteReader();

            Int32 Num = (CurPage - 1) * PageSize + 1;//当前页的起始序号

            string HtmlString = "";

            while (MessData.Read())
            {

                  HtmlString += "<div class='DataList' >";
                  HtmlString += "<img src="+ MessData[3].ToString() +"/>";
                  HtmlString += "<p id='mo'>" + MessData[2].ToString() + "</p>";
                  HtmlString += "</div>";

            }

            ShowArea.InnerHtml = HtmlString;

            MessData.Close();//关闭数据库链接，必须的！
            OleDbCon.Close();//关闭数据库链接，必须的！

        }
    } 

    protected void PrePage_Click(object sender, EventArgs e)
    {
        CurPage -= 1;
        Response.Redirect("Index.aspx");
    }


    protected void NextPage_Click(object sender, EventArgs e)
    {
        CurPage += 1;
        Response.Redirect("Index.aspx");
    }


    protected void FinaPage_Click(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        try
        {


                string UserI = TextBox1.Text;
                string UserC = "mo01";
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

                ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('发表成功！');window.location.href='Index.aspx#Cont';</script>");


        }
        catch (Exception ex)
        {
            ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('" + ex.Message + "');window.location.href='Index.aspx';</script>");
        }
    }




}
