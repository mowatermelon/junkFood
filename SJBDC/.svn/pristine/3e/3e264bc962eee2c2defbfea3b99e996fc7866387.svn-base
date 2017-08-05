package com.geostar.gtgh.portal.servlet;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.dom4j.Document;
import org.dom4j.Element;

import com.geostar.gtgh.DataCenter_util.Dom4jUtils;


/**
 * 
 * 基础页面初始化servlet
 * 
 * @author  wanqing
 * @version  [版本号, 2016年7月28日]
 * @see  [相关类/方法]
 * @since  [产品/模块版本]
 */
public class BasePageServlet {
    
    /**
     * 页面初始化解析菜单xml
     * @param request
     * @param response [参数说明]
     * 
     * @return void [返回类型说明]
     * @exception throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    public static void initPage(HttpServletRequest request, HttpServletResponse response) {
       // PrintWriter writer;
        /**
         * 往页面写入和页面名称相同的js和css文件
         */
        /*try {
            writer = response.getWriter();
            String pageUrl = request.getRequestURI();
            String jsUrl = pageUrl.replace(".jsp", ".js");
            String cssUrl = pageUrl.replace(".jsp", ".css"); 
            writer.write("<script src='" + jsUrl + "' type='text/javascript'></script>");
            writer.write("<link href='" + cssUrl + "' rel='stylesheet' type='text/css'/>");
        }
        catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }*/
        //获取请求页面的物理路径
        String strPagePath = request.getSession().getServletContext().getRealPath(request.getServletPath());
        Map<String, String> map = new HashMap<String, String>();
        //获取请求页面的xml物理路径
        String strXmlFile = strPagePath.replace(".jsp", ".xml");
        File xmlFile = new File(strXmlFile);
        if (xmlFile != null) {
            InputStream in = null;
            Document document = null;
            try {
                in = new FileInputStream(xmlFile);
                document = Dom4jUtils.createDocument(in);
            }
            catch (FileNotFoundException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            
            Element element = Dom4jUtils.getElement(document, "//root//QueryBlock");
            if (element != null) {
                map.put(element.attribute("targetDiv").getValue(), getElementInnerXml(element));
            }
            
            element = Dom4jUtils.getElement(document, "//root//QueryBarBlock");
            if (element != null) {
                map.put("QueryBar", element.asXML());
            }
            
            element = Dom4jUtils.getElement(document, "//root//MenuBlock");
            if (element != null) {
                map.put(element.attribute("targetDiv").getValue(), getElementInnerXml(element));
            }
            
            element = Dom4jUtils.getElement(document, "//root//ChartBlock");
            if (element != null) {
                map.put("ChartBlock", element.asXML());
            }
            
            element = Dom4jUtils.getElement(document, "//root//CellBlock");
            if (element != null) {
                map.put("CellBlock", element.asXML());
            }
        }
        JSONObject jsonObject = JSONObject.fromObject(map);
        request.setAttribute("jsonParm", jsonObject);
        
    }
    
    /**
     * 获取xml中不包含当前节点的内容
     * @param element
     * @return [参数说明]
     * 
     * @return String [返回类型说明]
     * @exception throws [违例类型] [违例说明]
     * @see [类、类#方法、类#成员]
     */
    @SuppressWarnings("rawtypes")
    private static String getElementInnerXml(Element element) {
        List nodes = null;
        if (element != null) {
            nodes = element.elements();
        }
        StringBuffer sbf = new StringBuffer("");
        if (nodes != null && nodes.size() > 0) {
            for (Iterator it = nodes.iterator(); it.hasNext();) {
                Element elm = (Element)it.next();
                // do something
                sbf.append(elm.asXML());
            }
        }
        return sbf.toString();
    }
}
