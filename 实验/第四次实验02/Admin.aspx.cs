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


public partial class _Admin : System.Web.UI.Page
{

    static Int32 CurPage = 1, PageSize = 6, TotalPage = 0, TotalRead = 0;

    protected void Page_Load(object sender, EventArgs e)//这个函数最重要，所有页面的动态样子都在这里决定
    {
        if (!IsPostBack)//如果是全页的刷新，新加载或者F5，ReDirect
        {
        }
    }

    
}
