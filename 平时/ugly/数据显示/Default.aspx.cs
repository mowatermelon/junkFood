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
        
        
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        string MyHtml = ""; //在界面中待显示的Html代码，初始为空字符串

        string t1 = TextBox1.Text;
        string t2 = TextBox2.Text;

        int shu1 = Convert.ToInt32(t1);
        int shu2 = Convert.ToInt32(t2);

        for (int i = 1; i <= shu1; i++)
        {
            for (int m = 1; m <= shu2; m++) {
                MID.InnerHtml = MyHtml;
                MyHtml += "<div class='DataList'>" + m + "</div>";            
            }

            //注意+=操作符，是将每一个新的DIV添加到原来的后面
            //
            //循环构建100个div，这些div的class都是DataList，格式由样式表文件DIVSTY.css中的.DataList决定

            
            //构建好的待显示的Html代码字符串MyHtml，在我们预先划定好的id=MID的DIV中一次性展示出来
        }
        
        //另外，页面间数据传递，大家自己按照课本试试。
        
        //提醒：如果用Response.Redirect(show.aspx?id=111)这种形式跳转，那么在界面页的form里面不要加action="show.aspx" method="get"
        //如果想show.aspx接收default.aspx页面里的文本框数据，则要在界面页的form里面加action="show.aspx" method="get"
        //就是说，用?传数据的同时，就不能用文本框传数据。大家分别试验。

        //下周一，各小组上讲台讲自己小组的页面间传递数据，以及用html字符串控制界面指定DIV的显示。按照创新性来打分，没有做的，全组都没有分。
    }
}