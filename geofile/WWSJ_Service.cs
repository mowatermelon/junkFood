using System;
using System.Collections.Generic;
using System.Linq;
using Geo.WeiXin.BusinessServices.Base;
using Geo.WeiXin.IServices;
using Geo.WeiXin.Model.WeiXinDB;
using Sys.Data;
using Sys.Utils.Extensions;
using System.Data;

namespace Geo.WeiXin.BusinessServices
{
    public class WWSJ_Service : ServiceBase, IWWSJ_Service
    {
       

        public DJ_WWSJ Get_WWSJ(string slbh)
        {
            var wwsj = this.WeiXinDB.ToEnumerable2<DJ_WWSJ>(
                SQL.New(@"SELECT * FROM DJ_WWSJ WHERE SLBH = @p_0", DbParameter.NewParameters(slbh).ToArray())).FirstOrDefault();

            return wwsj;
        }


        public Tuple<int, IList<DJ_WWSJ>> Get_Page_GXXX(
            string slbh, string sqr, string zjhm, DateTime? yysj,  uint pageIndex, uint pageSize = 100)
        {
            List<DbParameter> parms = new List<DbParameter>();
            string where = "";

            if (!string.IsNullOrWhiteSpace(slbh))
            {
                parms.Add(DbParameter.New("SLBH", "%" + slbh + "%"));
                where += " AND SLBH LIKE @SLBH";
            }

            if (!string.IsNullOrWhiteSpace(sqr))
            {
                parms.Add(DbParameter.New("SQR", "%" + sqr + "%"));
                where += " AND SQR LIKE @SQR";
            }

            if (!string.IsNullOrWhiteSpace(zjhm))
            {
                parms.Add(DbParameter.New("ZJHM", "%" + zjhm + "%"));
                where += " AND ZJHM LIKE @ZJHM";
            }

            if (yysj != null)
            {
                parms.Add(DbParameter.New("YYRQ", yysj.Value));
                where += " AND YYRQ <= @YYRQ";
            }

            this.WeiXinDB.PagerProvider.SetPagerKey("SLBH");

            return this.WeiXinDB.ToPageListAsync2<DJ_WWSJ>(
                SQL.New("SELECT *,'More...' AS CZ  FROM DJ_WWSJ WHERE 1 = 1 {0} ORDER BY XH ASC".Format2(where), parms.ToArray()), pageIndex, pageSize).Result;
        }

        
        /// <summary>
        /// 根据DJ_WWSJ.SLBH（预约SLBH）删除外网收件列表
        /// </summary>
        /// <param name="slbh_array">需要删除的（预约SLBH）</param>
        /// <returns>表示是否删除成功</returns>
        public int Delete_WWSJ_Array(params string[] slbh_array)
        {
            if (slbh_array != null && slbh_array.Length > 0)
            {
                return this.WeiXinDB.ExecuteNoneQuery(@"
                    DELETE FROM DJ_WWSJ WHERE SLBH IN ({0})".Format2(slbh_array.Join2(",")));
            }
            return 0;
        }

        /// <summary>
        /// 根据DJ_WWSJ.SJID删除外网收件列表
        /// </summary>
        /// <param name="slbh_array">需要删除的SJID</param>
        /// <returns>表示是否删除成功</returns>
        public int Delete_WWSJ(string id)
        {
            if (id.Length > 0)
            {
                return this.WeiXinDB.ExecuteNoneQuery(@"
                    DELETE FROM DJ_WWSJ WHERE SJID IN ({0})".Format2(id));
            }
            return 0;
        }

        /// <summary>
        /// 根据DJ_WWSJ.SJID获取外网收件信息
        /// </summary>
        /// <param name="sjid"></param>
        /// <returns></returns>
        public DJ_WWSJ Get_WWSJBySJID(string sjid)
        {
            return this.WeiXinDB.ToEnumerable2<DJ_WWSJ>(
                SQL.New(@"SELECT * FROM DJ_WWSJ WHERE SJID = @p_0 ", DbParameter.NewParameters(sjid).ToArray())).FirstOrDefault();
        }


        /// <summary>
        /// 根据DJ_WWSJ.SQSX对应的编号获取相应的附件列表
        /// </summary>
        /// <param name="SQSX"></param>
        /// <returns></returns>
        public IList<DJ_GXXX_FB> Get_GGXX_FB_LIST(string SQSX)
        {
            return this.WeiXinDB.ToEnumerable2<DJ_GXXX_FB>(
                SQL.New(@"SELECT * FROM DJ_GXXX_FB WHERE BH = @p_0  ORDER BY XH ASC", DbParameter.NewParameters(SQSX).ToArray())).ToList();
        }

    }
}
