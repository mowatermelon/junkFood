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

public partial class _List : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.Params["Action"] == "GetData")
        {
            GetData();
            Response.End();
        }
    }
    class Node
    {
        public string LIFECYCLE { get; set; }
        public string SLBH { get; set; }
        public string QLRMC { get; set; }
        public string ZJHM { get; set; }
        public string ZL { get; set; }
        public string DJLX { get; set; }
        public string BDCZH { get; set; }
        public string BDCDYH { get; set; }
        public string DJRQ { get; set; }
        public string GDH { get; set; }
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

    System.Collections.ArrayList m_ArrQLRZJH = new ArrayList();
    System.Collections.ArrayList m_ArrQLRMC = new ArrayList();
    void GetData()
    {
        try
        {
            oc.Open();
            OracleCommand cmd = oc.CreateCommand();
            cmd.CommandText = "SELECT ''AS LIFECYCLE,A.SLBH,'' AS QLRMC,'' AS ZJHM,B.ZL AS ZL,A.DJLX,A.BDCZH,A.BDCDYH,A.DJRQ,A.GDH FROM DJ_DJB A INNER JOIN DJ_SJD B ON A.SLBH = B.SLBH WHERE A.LIFECYCLE=1 AND A.BDCZH LIKE '%)%' AND B.ZL IS NOT NULL";
            string getWhere = GetWhere();
            if (getWhere != "")
            {
                cmd.CommandText += getWhere;
            }
            OracleDataReader odr = cmd.ExecuteReader();
            IList<Node> list = new List<Node>();

            while (odr.Read())
            {
                string sDJRQ = Format(odr[8].ToString());
                string sLIFECYCLE = Format(odr[0].ToString());
                string sZT = "";
                string sSLBHs = "";
                string MC = "";
                string ZJH = "";
                for (var r = 0; r < list.Count; r++)
                {
                    var sSLBH = Format(odr[1].ToString());
                    if (sSLBHs == "")
                    {
                        sSLBHs = sSLBH;
                    }
                    else
                    {
                        sSLBHs += "|" + sSLBH;
                    }
                }

                if (sSLBHs != "")
                {
                    //获取其他信息   m_ArrQLRZJH  m_ArrQLRMC
                    GetOtherInfo(sSLBHs);
                    //获取当前信息状态信息
                    for (int k = 0; k < list.Count; k++)
                    {
                        string strSLBH = Format(odr[1].ToString());
                        //权利人名称
                        if (m_ArrQLRMC.Count > 0)
                        {
                            for (int j = 0; j < m_ArrQLRMC.Count; j++)
                            {
                                if (m_ArrQLRMC[j] != "")
                                {
                                    foreach (string i in m_ArrQLRMC)
                                    {
                                        string strQLRMC = i.ToString();
                                        if (strQLRMC != "")
                                        {
                                            MC = strQLRMC;
                                        }
                                        else
                                        {
                                            MC = "dsds";
                                        }
                                    }

                                }

                            }

                        }

                        //权利人证件号
                        if (m_ArrQLRZJH.Count > 0)
                        {
                            for (int j = 0; j < m_ArrQLRZJH.Count; j++)
                            {
                                if (m_ArrQLRZJH[j] != "")
                                {
                                    foreach (string i in m_ArrQLRZJH)
                                    {
                                        string strQLRZJH = i.ToString();
                                        if (strQLRZJH != "")
                                        {
                                            ZJH = strQLRZJH;
                                        }
                                        else
                                        {
                                            ZJH = "dsds";
                                        }
                                    }

                                }

                            }

                        }



                    }
                }
                //str.Length();
                if (sLIFECYCLE == "1")
                {
                    if (sDJRQ == "")
                    {
                        sZT = "无效";
                    }
                    else
                    {
                        sZT = "历史";
                    }
                }
                else if (sDJRQ == "")
                {
                    sZT = "办理中";
                }
                else
                {
                    sZT = "现实";
                }

                list.Add(new Node()
                {
                    LIFECYCLE = sZT,
                    SLBH = odr[1].ToString(),
                    QLRMC = MC,
                    ZJHM = ZJH,
                    ZL = odr[4].ToString(),
                    DJLX = odr[5].ToString(),
                    BDCZH = odr[6].ToString(),
                    BDCDYH = odr[7].ToString(),
                    DJRQ = sDJRQ,
                    GDH = odr[9].ToString(),

                });
                //声明数组 保存SLBH

                //li.Add(odr[1].ToString());

            }
            var griddata = new { Rows = list };
            string s = new JavaScriptSerializer().Serialize(griddata);
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
    //DJDL,QLRMC,GDH,BDCZH,ZL,SLBH
    public string GetWhere()
    {
        string getWhere = "";
        string sDJDL = Request.Params["DDJDL"];
        string sQLRMC = Request.Params["QLRMC"];
        string sGDH = Request.Params["GDH"];
        string sBDCZH = Request.Params["BDCZH"];
        string sZL = Request.Params["ZL"];
        string sSLBH = Request.Params["SLBH"];
        if (Request.Params["DDJDL"] != "")
        {
            string DJDL = "";
            if (sDJDL == "首次登记")
            {
                DJDL = "100";
            }
            if (sDJDL == "转移登记")
            {
                DJDL = "200";
            }
            if (sDJDL == "变更登记")
            {
                DJDL = "300";
            }
            if (sDJDL == "注销登记")
            {
                DJDL = "400";
            }
            if (sDJDL == "更正登记")
            {
                DJDL = "500";
            }
            if (sDJDL == "异议登记")
            {
                DJDL = "600";
            }
            if (sDJDL == "预告登记")
            {
                DJDL = "700";
            }
            if (sDJDL == "查封登记")
            {
                DJDL = "800";
            }
            if (sDJDL == "其它登记")
            {
                DJDL = "900";
            }
            getWhere += " AND B.DJDL LIKE '" + sSqlInject(DJDL) + "' "; ;
        }
        if (Request.Params["QLRMC"] != "")
        {
            getWhere += " AND A.SLBH IN (SELECT SLBH FROM DJ_QLRGL WHERE QLRMC LIKE '%" + sSqlInject(sQLRMC) + "%' AND QLRLX IN ('权利人', '抵押权人') OR QLRLX IS NULL)  ";
        }
        if (Request.Params["GDH"] != "")
        {
            getWhere += " AND A.GDH LIKE '%" + sSqlInject(sGDH) + "%' ";
        }
        if (Request.Params["BDCZH"] != "")
        {
            getWhere += " AND A.BDCZH LIKE '%" + sSqlInject(sBDCZH) + "%' ";
        }
        if (Request.Params["ZL"] != "")
        {
            getWhere += " AND B.ZL LIKE '%" + sSqlInject(sZL) + "%' ";
        }
        if (Request.Params["SLBH"] != "")
        {
            getWhere += " AND B.SLBH LIKE '%" + sSqlInject(sSLBH) + "%' ";
        }


        return getWhere;
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

    //获取数据库权利人信息
    void GetOtherInfo(string sWhere)
    {//   m_ArrQLRZJH  m_ArrQLRMC
        string[] sArrTJ = sWhere.Split('|');
        string sSLBHs = "";
        for (var k = 0; k < sArrTJ.Length; k++)
        {
            var sTJ = Format(sArrTJ[k]);
            if (sTJ != "")
            {
                if (sSLBHs == "")
                {
                    sSLBHs = "'" + sTJ + "'";
                }
                else
                {
                    sSLBHs += ",'" + sTJ + "'";
                }
            }
        }
        string sQLRMC = "";
        string sQLRZJH = "";
        string sSLBH = "";
        m_ArrQLRMC.Clear();  //权利人名称
        m_ArrQLRZJH.Clear(); //权利人
        if (oc != null && sSLBHs != "")
        {
            //oc.Open();
            OracleCommand cmd2 = oc.CreateCommand();
            cmd2.CommandText = "SELECT B.QLRMC,A.ZJHM,B.SLBH FROM DJ_QLR A LEFT JOIN DJ_QLRGL B ON A.QLRID = B.QLRID WHERE B.SLBH IN(" + sSLBHs + ") AND (B.QLRLX IS NULL OR B.QLRLX IN ('权利人', '抵押权人')) ORDER BY B.SXH";
            OracleDataReader odr2 = cmd2.ExecuteReader();
            while (odr2.Read())
            {
                sQLRMC = Format(odr2[0].ToString());
                sQLRZJH = Format(odr2[1].ToString());
                sSLBH = Format(odr2[2].ToString());
                int MCCount = m_ArrQLRMC.Count;
                int ZJHCount =m_ArrQLRZJH.Count;
                //获取权利名称
                if (MCCount == 0)
                {
                    m_ArrQLRMC.Insert(MCCount, sQLRMC);
                }
                else if (MCCount >= 1)
                {
                    string strQLRMC = m_ArrQLRMC[MCCount-1] + "、" + sQLRMC;
                    m_ArrQLRMC.Remove(m_ArrQLRZJH.Contains(sQLRMC));
                    m_ArrQLRMC.Insert(MCCount, strQLRMC);
                }
                //获取权利人证件号
                if (ZJHCount == 0)
                {
                    m_ArrQLRZJH.Insert(MCCount, sQLRZJH);
                }
                else if (ZJHCount >= 1)
                {
                    string strQLRZJH = m_ArrQLRZJH[ZJHCount - 1] + "、" + sQLRZJH;
                    m_ArrQLRZJH.Remove(m_ArrQLRZJH.Contains(sQLRZJH));
                    m_ArrQLRZJH.Insert(ZJHCount, strQLRZJH);
                }

            }
        }
    }

}