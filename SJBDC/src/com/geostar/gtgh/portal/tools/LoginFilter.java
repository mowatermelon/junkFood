package com.geostar.gtgh.portal.tools;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.servlet.DispatcherServlet;

import com.geostar.gfstack.usersystem.user.model.User;
import com.geostar.gtgh.portal.constant.StaticValue;
import com.geostar.gtgh.portal.utils.HttpClientUtils;

public class LoginFilter extends DispatcherServlet {
    
    private static final long serialVersionUID = -2842156012788007813L;

    
    String index = "/commonController/portal-portal/skip.do";
    
    @Override
    protected void doDispatch(HttpServletRequest request, HttpServletResponse response) throws Exception {
        setSessionUser(request,response);
        super.doDispatch(request, response);
    }
    
    private void setSessionUser(HttpServletRequest request, HttpServletResponse response) throws Exception {
        
        String path = request.getContextPath();
        String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
        
        String url = clearJsessionid(request.getRequestURI());
        User user = (User)request.getSession().getAttribute(StaticValue.SESSION_USER);
        request.getSession().setAttribute(StaticValue.SESSION_USER, getCurrentUser());
        if (url.equals(request.getContextPath())) {// 未配置请求的访问,返回到首页
            response.sendRedirect(request.getContextPath()+index); 
        }

        else if (url.contains("solr_")||url.contains("test")||url.contains("queryList")||url.contains("queryPage")||url.contains("queryMap")) {
            return;
        }
        else {
            // session中没有用户信息时,从用户管理系统获取
            if (user == null) {
                user = getCurrentUser();
                if (user != null) { // 获取用户权限列表
                    request.getSession().setAttribute(StaticValue.SESSION_USER, user);
                    String getAuthoritiesUrl = basePath
                            + "user/user_queryAuthoritiesByUserID.action?userID=" + user.getUserID();
                    String res1 = HttpClientUtils.get(getAuthoritiesUrl);
                    res1 = res1.replace("\"jsonResult\":\"[{", "\"jsonResult\":[{").replace("}]\"}", "}]}");
                    request.getSession().setAttribute(StaticValue.SESSION_PERMISSIONS, res1);
                   // request.getSession().setAttribute(StaticValue.SESSION_SOLR_EXIST, SolrjUtils.isServerExist());
                }else{
                    response.sendRedirect(request.getContextPath()+index);
                }
            }
        }
    }
    
    private User getCurrentUser() {
        User currentUser = null;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null) {
            Object userDetails = authentication.getPrincipal();
            if (userDetails != null) {
                if (userDetails instanceof String || !(userDetails instanceof User)) {
                }
                else {
                    currentUser = (User)userDetails;
                }
            }
        }
        return currentUser;
    }
    
    private final String jsessionid = ";jsessionid=";
    
    private String clearJsessionid(String url) {
        if (url.contains(jsessionid)) {
            url = url.substring(0, url.indexOf(jsessionid));
        }
        if (url.endsWith("/") || url.endsWith("?")) {
            url = url.substring(0, url.length() - 1);
        }
        return url;
    }
    
}
