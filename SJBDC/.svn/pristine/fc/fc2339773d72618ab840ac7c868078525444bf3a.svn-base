package com.geostar.gtgh.portal.tools;

import java.util.Properties;

import com.geostar.gtgh.portal.constant.StaticValue;


/**
 * @ClassName: SystemGlobals 
 * @Description: 全局配置文件
 * @author xial
 * @date 2015年8月3日
 */
public class SystemGlobals {
	public static final String SYSTEM_GLOBALS_NAME = "SystemGlobals";

	private static Properties defaults = new Properties();

	private SystemGlobals() {
	}

	public static void setProperties(Properties properties) {
		defaults = properties;
		StaticValue.DBTYPE = getIntValue("GeoDW.dbtype", 1);
		StaticValue.CLASS_PATH = getValue("CLASS_PATH", "Portal2017_WEBROOT_PATH");
		StaticValue.SESSION_USER = getValue("SESSION_USER", "Portal2017_user");
		StaticValue.SESSION_PERMISSIONS = getValue("SESSION_PERMISSIONS", "DataServiceCenter2017_user");
		StaticValue.SESSION_SOLR_EXIST = getValue("SESSION_SOLR_EXIST", "Portal2017_SOLR_EXIST");
	}

	public static Properties getProperties() {
		return defaults;
	}

	public static String getValue(String key) {
		return defaults.getProperty(key);
	}

	public static String getValue(String key, String defaultValue) {
		String value = defaults.getProperty(key);
		if (value == null || "".equals(value)) {
			return defaultValue;
		}
		return value;
	}

	public static int getIntValue(String key, int defaultValue) {
		if (defaults.getProperty(key) == null) {
			return defaultValue;
		}
		try {
			return Integer.parseInt(defaults.getProperty(key));
		} catch (Exception e) {
			return defaultValue;
		}
	}
	
//	public static int getDatabaseType() {
//		String dirverStr = defaults.getProperty("GeoDW.driverClass");
//		int dbType = 1;
//		if (dirverStr == null) {
//			dbType = 1;
//		} else if (dirverStr.toLowerCase().contains("mysql.")){
//			dbType = 1;
//		} else if (dirverStr.toLowerCase().contains("oracle.")){
//			dbType = 2;
//		} else if (dirverStr.toLowerCase().contains("dm.")){
//			dbType = 3;
//		}
//		return dbType;
//	}

}
