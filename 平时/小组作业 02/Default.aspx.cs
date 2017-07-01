using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.OleDb;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        OleDbConnection con = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("img.mdb"));
        con.Open();//打开数据库
        string CmdStr = "Select * from img order by ImgId desc";
        OleDbCommand Cmdsql01 = new OleDbCommand(CmdStr, con);

        OleDbDataReader MessData = Cmdsql01.ExecuteReader();

        string HtmlString = "";


        while (MessData.Read())
        {
            HtmlString += "<div class='DataList' >";
            HtmlString += "<img src=" + MessData[2].ToString() + "/>";
            HtmlString += "<p class='w1'>" + MessData[1].ToString() + "</p>";
            HtmlString += "</div>";

        }

        ShowArea.InnerHtml = HtmlString;
    }









    protected void Good_Up(object sender, EventArgs e)
    {
        if(FileUpload1.PostedFile !=null){
            string ImgName = FileUpload1.FileName;//获取用户选择的文件名(不含路径的)
            string type = ImgName.Substring(ImgName.LastIndexOf(".") + 1);//截取文件后缀名，字符串变量自带的Substring函数来实现
            DateTime now = DateTime.Now;
            string ImgPath = Server.MapPath("~\\img\\");//Server.MapPath函数是将网站文件夹下的相对路径转换为服务器上的绝对路径，必须转换！
            //GoodImg文件夹我们事先在网站文件夹下建好，再为每个用户建立一个属于他自己的同ID名文件夹。路径中间必须双斜杠\\，第一个斜杠是转义字符。
            if (!System.IO.Directory.Exists(ImgPath))//判断用户文件夹是否已经存在，如果GoodImg文件夹下不存在UserID文件夹，就创建它
                System.IO.Directory.CreateDirectory(ImgPath);//创建文件夹
            if (type == "JPG" || type == "GIF" || type == "jpg" || type == "gif")//根据后缀名来限制上传类型，只允许两种图片，注意大小写不一样，要判断两遍
                FileUpload1.SaveAs(ImgPath + "\\" + ImgName);//上传文件到GoodImg文件夹下的UserName文件夹中,文件名不变

            string ImgName02 = "img/" + ImgName;

            try
            {
                OleDbConnection con = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("img.mdb"));
                con.Open();//打开数据库

                OleDbCommand InsertGoodCmd = new OleDbCommand("insert into img(ImgName,ImgSrc,ImgTime)" +
                                                           " values('" + ImgName + "','" + ImgName02 + "','" + DateTime.Now + "')", con);
                int num = Convert.ToInt32(InsertGoodCmd.ExecuteNonQuery());

                if(num>0)
                    {
                        Response.Write("<script>alert(‘成功’);</script>");

                    }
                else
                {
                    Response.Write("<script>alert(‘失败’);</script>");
                    }

                con.Close();//用完一定要记得关上

                //ClientScript.RegisterStartupScript(GetType(), "警告", "<script type='text/javascript'>alert('图片上传成功，返回首页！');window.location.href='Default.aspx'</script>");
            }
            catch (Exception ex)
            {
                Response.Write("数据库错误，错误原因：" + ex.Message);
                Response.End();
            }


        }
            

            


        }
    }
