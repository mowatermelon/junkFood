package com.geostar.gtgh.portal.constant;

public class StaticValue {
    // mysql
    public static final int MYSQL_DBTYPE = 1;
    
    // oracle
    public static final int ORACLE_DBTYPE = 2;
    
    // dameng
    public static final int DAMENG_DBTYPE = 3;
    
    // MYSQL配置文件路径
    public static final String MYSQL_DBFILE = "/config/ibatis/mysqlMapConfig.xml";
    
    // ORACLE配置文件路径
    public static final String ORACLE_DBFILE = "/config/ibatis/oracleMapConfig.xml";
    
    // DAMENG配置文件路径
    public static final String DAMENG_DBFILE = "/config/ibatis/damengMapConfig.xml";
    
    // Catalog配置文件路径
    /*public static final String CATALOG_FILE = "/config/catalog.xml";

    public static final String METADATA_FILE_PATH = "/config/metaDataExtension/";*/
    
    public static final String SYSTEMGLOBALS_FILE = "/config/SystemGlobals.properties";
    
    public static final String USER_SYS_CONFIG_FILE = "/config.properties";
    
    /*	public static final String DATATYPE_ENUM_FILE = "/config/dataTypeEnum.properties";*/
    
    public static final String SOLRCLOUD_SERVER_FILE = "/config/solrCloudServer.properties";
    
    public static final String INIT_DWMS_TABLE = "geo_dwms.sql";
    public static final String INIT_USER_TABLE = "userinfo_table.sql";
    
    public static final String INIT_USER_INSERT = "userinfo_insert.sql";
    
    // 当前配置数据库类型,默认mysql
    public static int DBTYPE = 1;
    
    public static String CLASS_PATH = "Portal2017_WEBROOT_PATH";
    
    public static String SESSION_USER = "Portal2017_user";
    
    public static String SESSION_PERMISSIONS = "DataServiceCenter2017_user";
    
    public static String SESSION_SOLR_EXIST = "Portal2017_SOLR_EXIST";
    
    public static final Long CHECK_TIMEOUT_INTERVAL = 5 * 60 * 1000L;
    
    public static final Long CHECK_TIMEOUT_DATE = 15 * 60 * 1000L;
    
    /*public static final String RESOURCE_TYPE_FILE = "/config/resourceType.xml";*/
}
