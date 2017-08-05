package com.geostar.gtgh.portal.tools;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.apache.log4j.Logger;

import com.geostar.gtgh.portal.constant.StaticValue;

/**
 * 
 * < 初始化监听>
 * 
 * @author  wanqing
 * @version  [版本号, 2016年8月22日]
 * @see  [相关类/方法]
 * @since  [产品/模块版本]
 */
public class InitSystemService implements ServletContextListener  {
    private static Logger logger = Logger.getLogger(InitSystemService.class);
    
    public void contextInitialized(ServletContextEvent arg0) {
        this.initSystemGlobals();
    }
    public void contextDestroyed(ServletContextEvent arg0) {
    }

    private void initSystemGlobals() {
        try {
            String localPath = this.getClass().getClassLoader().getResource("/").getPath();
            SystemGlobals.setProperties(getProperties(StaticValue.SYSTEMGLOBALS_FILE));// 加载全局配置
            System.setProperty(StaticValue.CLASS_PATH, java.net.URLDecoder.decode(localPath, "utf-8"));
            //ConnectManager.getConnect();// 初始化数据库
            //InitSqlScript.getInstance();
            logger.info("配置文件初始化完成");
        } catch (Exception e) {
            logger.error("配置文件初始化失败", e);
        }
    }

    private Properties getProperties(String propertiesName) {
        InputStream is = getClass().getResourceAsStream(propertiesName);
        Properties dbProps = new Properties();
        try {
            dbProps.load(is);
            return dbProps;
        } catch (IOException ex) {
            return null;
        }
    }
}
