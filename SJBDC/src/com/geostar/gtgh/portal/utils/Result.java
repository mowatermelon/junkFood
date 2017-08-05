package com.geostar.gtgh.portal.utils;

import java.io.Serializable;

/**
 * 
 * portal接口返回的result对象
 * @author  wanqing
 * @version  [版本号, 2016年8月4日]
 * @see  [相关类/方法]
 * @since  [产品/模块版本]
 */
public class Result implements Serializable {
    
    private static final long serialVersionUID = 2376981387964656872L;
    public static final String SUCCESS="0";
    public static final String SUCCESS_MESSAGE="成功";
    public static final String ERROR="1";
    public static final String ERROR_MESSAGE="失败";
    
    
    private String code;
    
    private String message;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    
}
