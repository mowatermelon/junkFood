package com.geostar.gtgh.portal.utils;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class exceltest {
    @SuppressWarnings({"unchecked", "unused", "rawtypes"})
    public static void main(String[] args) throws ClassNotFoundException, InstantiationException, IllegalAccessException, SecurityException, NoSuchMethodException, IllegalArgumentException, InvocationTargetException {
        Class classType=Class.forName("com.geostar.gtgh.portal.utils.exceltest");
        Method[] methods = classType.getMethods();
        for(Method method : methods){
            System.out.println(method.getName());
        }
        Object invokeTester = classType.newInstance();
        Method med1=classType.getMethod("getAll",String.class);
        Object o1=med1.invoke(invokeTester,"zzz");
        
    }
    
    public void exceltest(){
        
    }
    
    public String getAll(String zzz){
        return "zzzz";
    }
}
