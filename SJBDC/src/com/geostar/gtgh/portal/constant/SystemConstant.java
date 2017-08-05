package com.geostar.gtgh.portal.constant;

public class SystemConstant {

	/**
	 * 用于一些系统级的参数配置
	 * 
	 * @author caolei
	 *
	 */
	public enum ConfigEnum {
		/**
		 * 导出excel模板的位置
		 */
		TEMPLATEPATH("config//excel//"),
		XMLSETTINGPATH("config//setting//setting.xml"),
		XMLFILTERPATH("config//setting//filter.xml");
		final public String value;

		ConfigEnum(final String value) {

			this.value = value;
		}

	}

}
