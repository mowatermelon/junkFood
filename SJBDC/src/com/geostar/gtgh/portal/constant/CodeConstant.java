package com.geostar.gtgh.portal.constant;

public class CodeConstant {

	/**
	 * 用于一些系统级的参数配置
	 * 
	 * @author caolei
	 *
	 */

	public enum ZsztEnum {
		YSY(1), // 已使用
		FZ(2), // 废证
		LZ(3), // 劣证
		WSY(4);// 未使用

		final public int id;

		ZsztEnum(final int id) {
			this.id = id;
		}

	}
	
	public enum QueryIdEnum{
		/**
		 *根据区县代码和类型查询gzjz对象
		 */
		//enum 表示枚举
		GzjzqueryObjByQxdmAndLx("com.geostar.gtgh.portal.core.dao.GzjzMapper.queryObjByQxdmAndLx"),
		ZsxxQueryZsfl("com.geostar.gtgh.portal.core.dao.ZspcflMapper.queryPCFL"),
		ZsxxcountZSXX("com.geostar.gtgh.portal.core.dao.ZsxxMapper.countZSXX"),
		ZsxxdeleteZSXX("com.geostar.gtgh.portal.core.dao.ZsxxMapper.deleteZSXX"),
		ZsxxqueryBHXX("com.geostar.gtgh.portal.core.dao.ZspcflMapper.queryBHXX"),
		DeleteProtalById("com.geostar.gtgh.portal.core.dao.WorkAnswerMapper.deleteBYYwbsid");
		final public String id;

		QueryIdEnum(final String id) {
			this.id = id;
		}
	}

}
