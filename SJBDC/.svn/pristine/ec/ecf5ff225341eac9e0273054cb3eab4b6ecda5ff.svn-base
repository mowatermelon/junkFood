package com.geostar.gtgh.portal.handle;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.geostar.gtgh.DataCenter_util.HttpHelper;
import com.geostar.gtgh.portal.tools.SystemGlobals;


@Controller
public class ModelAction {
    
    @RequestMapping(value = "/loginid",method = RequestMethod.GET)
    public ResponseEntity<String> heartbeat(){
        StringBuilder out = new StringBuilder ();
        HttpHeaders headers = new HttpHeaders ();
        MediaType mt = new MediaType ("application","json",Charset.forName ("utf-8"));
        headers.setContentType (mt);
        out.append ("{\"result\":\"" + "100001" + "\",\"desc\":\"failure\"}");
        return new ResponseEntity<String> (out.toString (),headers,HttpStatus.OK);
    }
    
    @RequestMapping(value="/listCarAlarm")
    public String listCarAlarm(ModelMap model,HttpServletRequest request){
           return "test/test";
    }
    
    @RequestMapping(value="/testvoid")
    public void testVoid(HttpServletRequest request,HttpServletResponse response){
        response.setContentType("application/json;charset=UTF-8");
        response.setHeader("Pragma", "No-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expires", 0);
        try {
            response.getWriter().write("{\"result\":\"" + "100001" + "\",\"desc\":\"failure\"}");
        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    @RequestMapping("/index")
    public String toIndex(HttpServletRequest request,ModelMap model){
        
        return "index";
    }
    
    @RequestMapping("/nj_index")
    public String toNjIndex(HttpServletRequest request,ModelMap model){
    	 String mt=request.getParameter("mt");
         if (mt==null) {
             request.setAttribute("mt", "");
         }else{
             request.setAttribute("mt", mt);
         }
        return "portal/index_portal";
    }
    
    @RequestMapping("/index/toindex")
    public String indextoIndex(HttpServletRequest request,ModelMap model){
        
        return "test/index";
    }
    
    @RequestMapping("/portal_portalInterface")
    @SuppressWarnings("unchecked")
    public void portalInterface(HttpServletRequest request,HttpServletResponse response) {
        response.setContentType("application/json;charset=UTF-8");
        response.setHeader("Pragma", "No-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expires", 0);
        String dataCenterUrl = SystemGlobals.getValue("dataCenter.url");
        
        dataCenterUrl += "portal-getData";
        HttpHelper httpHelper;
        try {
           // String queryStr = request.getQueryString();
            Map<String, String[]> params = request.getParameterMap();  
            String queryString = "";  
            for (String key : params.keySet()) {  
                String[] values = params.get(key);  
                for (int i = 0; i < values.length; i++) {  
                    String value = values[i];  
                    queryString += key + "=" + value + "&";  
                }  
            } 
            queryString=queryString.substring(0, queryString.length()-1);
            httpHelper = new HttpHelper(dataCenterUrl);
            String tempResponse = httpHelper.Post(queryString);
            
            response.getWriter().write(tempResponse);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
     
   
}
