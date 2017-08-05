package com.geostar.gtgh.portal.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Properties;

import com.geostar.gtgh.portal.constant.PropertyConstants;
import com.geostar.gtgh.portal.constant.StaticValue;
import com.geostar.gtgh.portal.tools.SystemGlobals;

public class PropertyUtils {
    private static String localPath = System.getProperty(StaticValue.CLASS_PATH);
    
    public static String getPropValue(String fileName, String key, String defaultValue) {
        String rValue = defaultValue;
        try {
            fileName = localPath + fileName;
            InputStream inputFile = new FileInputStream(fileName);
            Properties props = new Properties();
            props.load(inputFile);
            inputFile.close();
            if (props.containsKey(key)) {
                rValue = props.getProperty(key);
            }
        }
        catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        return rValue;
    }
    
    public static String getServerName() {
        String serverName = PropertyConstants.localServerName;
        if (serverName == null) {
            String url = SystemGlobals.getValue("GeoDW.jdbcUrl");
            String dbType = SystemGlobals.getValue("GeoDW.dbtype");
            if (dbType.equals("1")) {
                int begin = url.lastIndexOf("/");
                int end = url.indexOf("?");
                serverName = url.substring(begin + 1, end == -1 ? url.length() : end);
            }
            else {
                serverName = url.substring(url.lastIndexOf(":"), url.length());
            }
            PropertyConstants.localServerName = serverName;
        }
        return serverName;
    }
    
    /*public static ArrayList<String> getDataTypeEnum() {
        ArrayList<String> dataTypeList = PropertyConstants.dataTypeEnum;
        if ((dataTypeList == null) || (dataTypeList.isEmpty())) {
            try {
                dataTypeList = new ArrayList();
                String fileName = localPath + "/config/dataTypeEnum.properties";
                InputStream inputFile = new FileInputStream(fileName);
                Properties props = new Properties();
                props.load(inputFile);
                inputFile.close();
                for (Object obj : props.keySet()) {
                    dataTypeList.add(obj.toString());
                }
                PropertyConstants.dataTypeEnum = dataTypeList;
            }
            catch (IOException e) {
                e.printStackTrace();
            }
        }
        return dataTypeList;
    }*/
    
    public static ArrayList<String> getSolrServers() {
        ArrayList<String> solrCloudServers = PropertyConstants.solrCloudServers;
        if ((solrCloudServers == null) || (solrCloudServers.isEmpty())) {
            try {
                solrCloudServers = new ArrayList();
                String fileName = localPath + "/config/solrCloudServer.properties";
                InputStream inputFile = new FileInputStream(fileName);
                Properties props = new Properties();
                props.load(inputFile);
                inputFile.close();
                for (Object obj : props.keySet()) {
                    solrCloudServers.add(props.getProperty(obj.toString()));
                }
                PropertyConstants.solrCloudServers = solrCloudServers;
            }
            catch (IOException e) {
                e.printStackTrace();
            }
        }
        return solrCloudServers;
    }
}
