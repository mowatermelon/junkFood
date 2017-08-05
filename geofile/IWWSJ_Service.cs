using System.Collections.Generic;
using Geo.WeiXin.Model.WeiXinDB;
using System;

namespace Geo.WeiXin.IServices
{
    public interface IWWSJ_Service
    {
         
          DJ_WWSJ Get_WWSJ(string slbh);


         Tuple<int, IList<DJ_WWSJ>> Get_Page_GXXX(
            string slbh, string sqr, string zjhm, DateTime? yysj, uint pageIndex, uint pageSize = 100);
        

        /// <summary>
        /// 根据DJ_WWSJ.SLBH（预约SLBH）删除外网收件列表
        /// </summary>
        /// <param name="slbh_array">需要删除的（预约SLBH）</param>
        /// <returns>表示是否删除成功</returns>
         int Delete_WWSJ_Array(params string[] slbh_array);
        
        /// <summary>
        /// 根据DJ_WWSJ.SJID删除外网收件列表
        /// </summary>
        /// <param name="slbh_array">需要删除的SJID</param>
        /// <returns>表示是否删除成功</returns>
         int Delete_WWSJ(string id);
        

        /// <summary>
        /// 根据DJ_WWSJ.SJID获取外网收件信息
        /// </summary>
        /// <param name="sjid"></param>
        /// <returns></returns>
         DJ_WWSJ Get_WWSJBySJID(string sjid);
       
        /// <summary>
        /// 根据DJ_WWSJ.SQSX对应的编号获取相应的附件列表
        /// </summary>
        /// <param name="SQSX"></param>
        /// <returns></returns>
        IList<DJ_GXXX_FB> Get_GGXX_FB_LIST(string SQSX);
       
    }
}
