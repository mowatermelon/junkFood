package com.geostar.gtgh.portal.utils;

import java.io.Serializable;

public class PortalInterfaceResult implements Serializable {

    /**
     * 注释内容
     */
    private static final long serialVersionUID = -2472991156480566616L;
    
    private Result result;
    
    private Object data;
    
    public PortalInterfaceResult(){
        result = new Result();
        result.setCode(Result.SUCCESS);
        result.setMessage(Result.SUCCESS_MESSAGE);
    }

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
    
    
    
}
