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

    static Int32 CurPage01 = 1, PageSize01 = 1, TotalPage01 = 0, TotalRead = 0;

    static Int32 CurPage02 = 1, PageSize02 = 4, TotalPage02 = 0, TotalReadms = 0;
    protected void Page_Load(object sender, EventArgs e)//这个函数最重要，所有页面的动态样子都在这里决定
    {


        if (!IsPostBack)//如果是全页的刷新，新加载或者F5，ReDirect
        {
            OleDbConnection OleDbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("user.mdb"));
            OleDbCon.Open();
//--------------------------------------------------------------------------------------------------这里是实现商品分页显示的效果的开始
            PrePage01.Enabled = true;
            NextPage01.Enabled = true;

            string Cmdsql = "select count(*) from Img";//准备好SQL查询语句
            OleDbCommand Cmd = new OleDbCommand(Cmdsql, OleDbCon);

            TotalRead = Convert.ToInt32(Cmd.ExecuteScalar());


            if (TotalRead < PageSize01)//总页至少一页
                TotalPage01 = 1;

                else if (TotalRead % PageSize01 == 0)//刚好整数页
                        TotalPage01 = TotalRead / PageSize01;

                        else//有余数的，总数要加一页
                            TotalPage01 = TotalRead / PageSize01 + 1;


            if (CurPage01 > TotalPage01)
                CurPage01 = TotalPage01;

            CurPageL01.Text = "当前第" + CurPage01+ "页，共" + TotalPage01 + "页";

            //HyperLink3.Text = TotalPage.ToString();

            if (CurPage01 == 1)//第一页的前一页不可见
                PrePage01.Enabled = false;
            else if (CurPage01 == TotalPage01)//最后一页的后一页不可见
                NextPage01.Enabled = false;


            String CmdStr = "";//该变量存放查询第CurPage页包含的PageSize条记录的SQL指令字符串 

            if (CurPage01 == 1)
            {
                if (TotalPage01 == 1)
                    CmdStr = "Select * from Img order by ImgId";
                else if (TotalPage01 > 1)
                    CmdStr = "Select top " + PageSize01 + " * from Img order by ImgId";
            }
            else if (CurPage01 > 1)
            {
                string CmdStr1 = "Select MAX(ImgId) from (Select top " + (CurPage01 - 1) * PageSize01 + " ImgId from Img order by ImgId )";
                OleDbCommand Cmd1 = new OleDbCommand(CmdStr1, OleDbCon);
                int MZ = Convert.ToInt16(Cmd1.ExecuteScalar());

                if (CurPage01 == TotalPage01)
                    CmdStr = "Select * from Img where Int(ImgId)>" + MZ + " order by ImgId ";
                else
                    CmdStr = "Select top " + PageSize01 + " *  from Img where Int(ImgId)>" + MZ + " order by ImgId ";
            }

            OleDbCommand Cmdsql01 = new OleDbCommand(CmdStr, OleDbCon);

            OleDbDataReader MessData = Cmdsql01.ExecuteReader();

            Int32 Num = (CurPage01 - 1) * PageSize01 + 1;//当前页的起始序号

            string HtmlString = "";
            string HtmlString1 = "";
            string HtmlString2 = "";

            while (MessData.Read())
            {

                HtmlString += "<ul class='img'>";
                HtmlString += "<li class='imgA imgB' style='background-image:url(" + MessData[3].ToString() + ");'></li>";
                HtmlString += "<li class='imgA imgS' style='background-image:url(" + MessData[3].ToString() + ");'></li>";
                HtmlString += "<li class='imgA imgS' style='background-image:url(" + MessData[3].ToString() + ");'></li>";
                HtmlString += "<li class='imgA imgS' style='background-image:url(" + MessData[3].ToString() + ");'></li>";
                HtmlString += "<li class='imgA imgS' style='background-image:url(" + MessData[3].ToString() + ");'></li>";
                HtmlString += "</ul>";

                HtmlString1 +=  MessData[2].ToString();

                HtmlString2 +=  MessData[4].ToString();

            }


//--------------------------------------------------------------------------------------------------这里是实现商品分页显示的效果的结束

//--------------------------------------------------------------------------------------------------这里是实现留言分页显示的效果的开始

            PrePage02.Enabled = true;
            NextPage02.Enabled = true;

            string Cmdmssql = "select count(*) from mesboard";//准备好SQL查询语句
            OleDbCommand Cmdms = new OleDbCommand(Cmdmssql, OleDbCon);

            TotalReadms = Convert.ToInt32(Cmdms.ExecuteScalar());

            if (TotalReadms < PageSize01)//总页至少一页
                TotalPage02 = 1;

            else if (TotalReadms % PageSize02 == 0)//刚好整数页
                TotalPage02 = TotalReadms / PageSize02;

            else//有余数的，总数要加一页
                TotalPage02 = TotalReadms / PageSize02 + 1;


            if (CurPage02 > TotalPage02)
                CurPage02 = TotalPage02;

            CurPageL02.Text = "当前第" + CurPage02 + "页，共" + TotalPage02 + "页";

            //HyperLink3.Text = TotalPage.ToString();

            if (CurPage02 == 1)//第一页的前一页不可见
                PrePage02.Enabled = false;
            else if (CurPage02 == TotalPage02)//最后一页的后一页不可见
                NextPage02.Enabled = false;



            String CmdmsStr = "";//该变量存放查询第CurPage页包含的PageSize条记录的SQL指令字符串 

            if (CurPage02 == 1)
            {
                if (TotalPage02 == 1)
                    CmdmsStr = "Select * from mesboard order by Id";
                else if (TotalPage02 > 1)
                    CmdmsStr = "Select top " + PageSize02 + " * from mesboard order by Id";
            }


            else if (CurPage02 > 1)
            {
                string CmdStr2 = "Select MAX(Id) from (Select top " + (CurPage02 - 1) * PageSize02 + " Id from mesboard order by Id )";
                OleDbCommand Cmd1 = new OleDbCommand(CmdStr2, OleDbCon);
                int MZ02 = Convert.ToInt16(Cmd1.ExecuteScalar());

                if (CurPage02 == TotalPage02)
                    CmdmsStr = "Select * from mesboard where Int(Id)>" + MZ02 + " order by Id ";
                else
                    CmdmsStr = "Select top " + PageSize02 + " *  from mesboard where Int(Id)>" + MZ02 + " order by Id ";
            }

            OleDbCommand Cmdsql02 = new OleDbCommand(CmdmsStr, OleDbCon);

            OleDbDataReader ContData = Cmdsql02.ExecuteReader();

            string HtmlString3 = "";

            while (ContData.Read())
            {

                HtmlString3 += "<li class='hNews'>" + ContData[2].ToString() + "</li>";
                HtmlString3 += "<li class='hNews'>" + ContData[1].ToString() + "</li>";

            }

//--------------------------------------------------------------------------------------------------这里是实现留言分页显示的效果的结束

            goodImg.InnerHtml = HtmlString;
            P2.Text = HtmlString1;
            P4.InnerHtml = HtmlString2;
            buyNews.InnerHtml = HtmlString3;

            MessData.Close();//关闭数据库链接，必须的！
            ContData.Close();//关闭数据库链接，必须的！
            OleDbCon.Close();//关闭数据库链接，必须的！
        }
    }

    protected void PrePage01_Click(object sender, EventArgs e)
    {
        CurPage01 -= 1;
        Response.Redirect("Index.aspx");
    }


    protected void NextPage01_Click(object sender, EventArgs e)
    {
        CurPage01 += 1;
        Response.Redirect("Index.aspx");
    }


    protected void PrePage02_Click(object sender, EventArgs e)
    {
        CurPage02 -= 1;
        //Index.Visible = false;
        //Prod.Visible = true;
        Server.Transfer("~\\Index.aspx?div=Prod");
    }


    protected void NextPage02_Click(object sender, EventArgs e)
    {
        CurPage02 += 1;
        //Index.Visible = false;
        //Prod.Visible= true;
        Server.Transfer("~\\Index.aspx?div=Prod");
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

            string Cmdstring = "insert into mesboard values(@UsI,@UsC,@UsN)";
            OleDbCommand Cmd = new OleDbCommand(Cmdstring, OleDbCon);
            Cmd.Parameters.AddWithValue("@UsI", UserI);
            Cmd.Parameters.AddWithValue("@UsN", UserN);
            Cmd.Parameters.AddWithValue("@UsC", UserC);

            Cmd.ExecuteNonQuery();  
            OleDbCon.Close();

            ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('发表成功！');window.location.href='Index.aspx#Cont';</script>");


        }
        catch (Exception ex)
        {
            ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('" + ex.Message + "');window.location.href='Index.aspx';</script>");
        }
    }

    protected void Good_Up(object sender, EventArgs e)
    {
        string GoodPl = Request.Form["Select1"];
        string GoodN = Request.Form["buy_number"];

            try
            {
                if (GoodPl != null && GoodN != null)
                {
                    string GoodP = P4.InnerHtml;
                    string GoodC = P2.Text;

                    int Gop = int.Parse(GoodP);

                    OleDbConnection OleDbCon = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("user.mdb"));
                    OleDbCon.Open();

                    int GoN = int.Parse(GoodN);
                    int AllG = Gop * GoN;

                    string Cmdstring = "UPDATE Buy, Img SET Buy.BuyNum = '" + GoodN + "', Buy.BuyPath = '" + GoodPl + "',Buy.ProdId = Img.ImgId ,Buy.count = Buy.count+1 WHERE Int(Img.ImgPrice) ='" + Gop + "'and Img.ImgContent = '" + GoodC + "' and Buy.BuyId =Img.ImgId";
                    OleDbCommand Cmd = new OleDbCommand(Cmdstring, OleDbCon);

                    


                    int number = Cmd.ExecuteNonQuery();

                    if (number > 0)
                    {
                        
                        ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('购买成功！一共消费" + AllG + "浪漫币');</script>");
                    }
                    else
                    {  
                        ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('购买不成功！');</script>");                    
                    }


                    OleDbCon.Close();


                }
                else {
                    ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('亲 你好像有数据你没有选中哦');</script>");
                
                }



            }
            catch (Exception ex)
            {
                ClientScript.RegisterStartupScript(GetType(), "提醒", "<script type='text/javascript'>alert('" + ex.Message + "');window.location.href='Index.aspx';</script>");
            }
        }

    }
