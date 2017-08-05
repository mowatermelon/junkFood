using System;
using System.Collections.Generic;
using System.Collections;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Script.Serialization;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Data.OleDb;
using System.Data.OracleClient;
using System.Globalization;

public partial class _Round : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.Params["Action"] == "GetData")
        {
            GetData();
            Response.End();
        }
    }


    static string conn = string.Concat(
         @"Data Source=",
         @"    (DESCRIPTION=",
         @"        (ADDRESS_LIST=",
         @"            (ADDRESS=",
         @"                (PROTOCOL=TCP)",
         @"                (HOST=eva-PC.geostar.com.cn)",
         @"                (PORT=1521)",
         @"            )",
         @"        )",
         @"        (CONNECT_DATA=",
         @"            (SERVICE_NAME=orcl)",
         @"        )",
         @"    );",
         @"Persist Security Info=True;",
         @"User Id=SXSXK;",
         @"Password=SXSXK"
     );
    OracleConnection oc = new OracleConnection(conn);

    void GetData()
    {
        try
        {
            oc.Open();
            OracleCommand cmd = oc.CreateCommand();
            /*首次登记   100*/
            /*转移登记   200*/
            /*变更登记   300*/
            /*注销登记   400*/
            /*更正登记   500*/
            /*异议登记   600*/
            /*预告登记   700*/
            /*查封登记   800*/            
            /*其它登记   900*/
            cmd.CommandText = "SELECT COUNT(0),DJDL FROM DJ_SJD WHERE DJDL IN (100,200,300,400,500,600,700,800,900) GROUP BY DJDL ORDER BY DJDL";
            OracleDataReader odr = cmd.ExecuteReader();
            var array = new int[9];

            int i = 0;
            while (odr.Read())
            {//Format(odr[0].ToString())
                if (i <= 9) {
                    array[i] = Convert.ToInt32(odr[0]);                
                }
               i++;
            }
            string s = new JavaScriptSerializer().Serialize(array);
            Response.Write(s);

        }
        catch (Exception ex)
        {
            //hiddenP.InnerText = ex.ToString();
        }
        finally
        {
            oc.Close();
        }
    }

    //sSQL注入
    public string sSqlInject(string sVal)
    {
        string Text = Format(sVal).Replace("\'", "''");
        return Text;

    }

    //格式化
    public string Format(string sVal)
    {
        if (sVal == null || sVal + "" == "null")
        {
            return "";
        }
        else
        {
            return "" + sVal;
        }
    }


}