using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Data.OleDb;
using System.Data.OracleClient;
using System.Globalization;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //TextBox.Text = "";
        //TextBox.Enabled = true;
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
    /*protected void Calendar_SelectionChanged(object sender, EventArgs e)
        {
            //TextBox.Text = "";
            //TextBox.Enabled = true;
        }
    protected void Click_01(object sender, EventArgs e)
    {
        try
        {
               oc.Open();
               OracleCommand cmd = oc.CreateCommand();
               string nowTime = Calendar.SelectedDate.ToShortDateString();
               string note = TextBox.Text;
               if (Check_Cf(nowTime))
               {
                   
                   cmd.CommandText = "INSERT INTO OA_SCHEDULE (NOTE,NOWTIME) VALUES('" + note + "',to_date('" + nowTime + "','yy-mm-dd'))";
                   int count = cmd.ExecuteNonQuery();
                   if (count>0)
                   {
                       TextBox.Text = nowTime + "\n没有日程安排，插入日程安排成功,插入的记录为\n" + note;
;
                   }
               }
               else
               {
                   cmd.CommandText = "UPDATE OA_SCHEDULE SET NOTE ='" + note + "' WHERE NOWTIME =  to_date('" + nowTime + "','yy-mm-dd')";
                   int countT = cmd.ExecuteNonQuery();

                   //OracleDataReader odr = cmd.ExecuteReader();
                   if (countT>0)
                   {
                       TextBox.Text = nowTime + "\n已经有了日程安排，已将原有日程安排修改为\n" + note;
                   }
                   //TextBox.Text = "插入记事失败,该日期已经插入了记事";
               }
              
            }
            catch (Exception ex)
            {
                TextBox.Text = ex.ToString();
            }
            finally
            {
                oc.Close();
            }

    }
    public bool Check_Cf(string nowtime) {
            OracleCommand cmd = oc.CreateCommand();
            cmd.CommandText = "SELECT * FROM OA_SCHEDULE WHERE NOWTIME =  to_date('" + nowtime + "','yy-mm-dd')";
 
            OracleDataReader odr = cmd.ExecuteReader();
            if (odr.HasRows)
            {
                return false;
            }
            return true;
    }
    protected void Click_02(object sender, EventArgs e)
    {
        TextBox.Enabled = false;
        TextBox.Text = "";
        try
        {
            oc.Open();
            OracleCommand cmd = oc.CreateCommand();
            string nowTime = Calendar.SelectedDate.ToShortDateString();
            cmd.CommandText = "select * from OA_SCHEDULE WHERE NOWTIME =  to_date('" + nowTime + "','yy-mm-dd')";
            OracleDataReader odr = cmd.ExecuteReader();
            string nongL = SolarToChineseLunisolarDate(Calendar.SelectedDate);
            if (odr.Read())
            {
                TextBox.Text = nongL + "\n" + odr[1].ToString() + "\n" + odr[0].ToString();
            }
            else
            {
                TextBox.Text = nongL + "\n" + nowTime + "\n没有记事";
            }
          
        }
        catch (Exception ex)
        {
            TextBox.Text = ex.ToString();
        }
        finally
        {
            oc.Close();
        }

    }

    static string SolarToChineseLunisolarDate(DateTime solarDateTime)
    {
        System.Globalization.ChineseLunisolarCalendar cal = new System.Globalization.ChineseLunisolarCalendar();

        int year = cal.GetYear(solarDateTime);
        int month = cal.GetMonth(solarDateTime);
        int day = cal.GetDayOfMonth(solarDateTime);
        int leapMonth = cal.GetLeapMonth(year);
        return string.Format("农历{0}{1}（{2}）年{3}{4}月{5}{6}"
                            , "甲乙丙丁戊己庚辛壬癸"[(year - 4) % 10]
                            , "子丑寅卯辰巳午未申酉戌亥"[(year - 4) % 12]
                            , "鼠牛虎兔龙蛇马羊猴鸡狗猪"[(year - 4) % 12]
                            , month == leapMonth ? "闰" : ""
                            , "无正二三四五六七八九十冬腊"[leapMonth > 0 && leapMonth <= month ? month - 1 : month]
                            , "初十廿三"[day / 10]
                            , "日一二三四五六七八九"[day % 10]
                            );
    }

    */
}
