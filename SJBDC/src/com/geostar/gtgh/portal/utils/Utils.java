/*     */ package com.geostar.gtgh.portal.utils;
/*     */ 
/*     */ import java.lang.reflect.Field;
/*     */ import java.util.List;
/*     */ import java.util.Map;
/*     */ import java.util.Set;
/*     */ import java.util.UUID;

/*     */ import net.sf.json.JSONArray;
/*     */ import net.sf.json.JSONObject;
/*     */ import net.sf.json.JSONSerializer;
/*     */ import net.sf.json.JsonConfig;
/*     */ import net.sf.json.util.CycleDetectionStrategy;
/*     */ import net.sf.json.xml.XMLSerializer;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ public class Utils
/*     */ {
/*     */   public static String getUUID()
/*     */   {
/*  22 */     return UUID.randomUUID().toString();
/*     */   }
/*     */   
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   public static String javaToString(Object obj)
/*     */   {
/*  31 */     if (obj == null)
/*  32 */       return "null";
/*  33 */     StringBuffer sb = new StringBuffer();
/*  34 */     Class<?> clazz = obj.getClass();
/*  35 */     Field[] fields = clazz.getDeclaredFields();
/*  36 */     sb.append("{");
/*     */     try { Field[] arrayOfField1;
/*  38 */       int j = (arrayOfField1 = fields).length; for (int i = 0; i < j; i++) { Field field = arrayOfField1[i];
/*  39 */         field.setAccessible(true);
/*  40 */         Class c = field.getType();
/*  41 */         Object o = field.get(obj);
/*  42 */         if ((c == String.class) && (o != null)) {
/*  43 */           sb.append("\"" + field.getName() + "\":\"" + replaceJsonStr(String.valueOf(o)) + "\",");
/*     */         } else {
/*  45 */           sb.append("\"" + field.getName() + "\":" + field.get(obj) + ",");
/*     */         }
/*     */       }
/*  48 */       sb.deleteCharAt(sb.length() - 1);
/*     */     } catch (Exception e) {
/*  50 */       e.printStackTrace();
/*     */     }
/*  52 */     sb.append("}");
/*  53 */     return sb.toString();
/*     */   }
/*     */   
/*     */   public static String javaToJsonStr(Object obj) {
/*  57 */     return ((obj instanceof List)) || ((obj instanceof Set)) || ((obj instanceof Object[])) ? JSONArray.fromObject(obj).toString() : JSONObject.fromObject(obj).toString();
/*     */   }
/*     */   
/*     */   public static String javaToJsonStr(Object obj, String strs) {
/*  61 */     JsonConfig jc = new JsonConfig();
/*  62 */     jc.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);
/*  63 */     jc.setExcludes(strs.split(","));
/*  64 */     return ((obj instanceof List)) || ((obj instanceof Set)) || ((obj instanceof Object[])) ? JSONArray.fromObject(obj, jc).toString() : JSONObject.fromObject(obj, jc).toString();
/*     */   }
/*     */   
/*     */   public static Object jsonStrToJava(String str, Class<?> clazz) {
/*  68 */     return JSONObject.toBean(JSONObject.fromObject(str), clazz);
/*     */   }
/*     */   
/*     */   public static Object jsonStrToJava(String str, Class<?> clazz, Map<?, ?> col) {
/*  72 */     return JSONObject.toBean(JSONObject.fromObject(str), clazz, col);
/*     */   }
/*     */   
/*     */   public static String obj2xml(Object obj, String rootName, String listName) {
/*  76 */     XMLSerializer xmlSerial = new XMLSerializer();
/*  77 */     xmlSerial.setTypeHintsEnabled(false);
/*  78 */     xmlSerial.setRootName(rootName);
/*  79 */     xmlSerial.setElementName(listName);
/*  80 */     return xmlSerial.write(JSONSerializer.toJSON(obj));
/*     */   }
/*     */   
/*     */   public static String json2xml(String jsonString, String rootName, String listName) {
/*  84 */     XMLSerializer xmlSerial = new XMLSerializer();
/*  85 */     xmlSerial.setTypeHintsEnabled(false);
/*  86 */     xmlSerial.setRootName(rootName);
/*  87 */     xmlSerial.setElementName(listName);
/*     */     
/*     */ 
/*     */ 
/*  91 */     return xmlSerial.write(JSONSerializer.toJSON(jsonString));
/*     */   }
/*     */   
/*     */   public static <T> T xml2Obj(String xmlString, Class<T> clazz) {
/*  95 */     return (T)json2Obj(xml2json(xmlString), clazz);
/*     */   }
/*     */   
/*     */   public static String xml2json(String xmlString) {
/*  99 */     XMLSerializer xmlSerializer = new XMLSerializer();
/* 100 */     return xmlSerializer.read(xmlString).toString();
/*     */   }
/*     */   
/*     */   public static <T> T json2Obj(String jsonStr, Class<T> clazz)
/*     */   {
/* 105 */     JSONObject jsonObj = JSONObject.fromObject(jsonStr);
/* 106 */     T obj = (T)JSONObject.toBean(jsonObj, clazz);
/* 107 */     return obj;
/*     */   }
/*     */   
/*     */   public static Map<String, Object> json2map(String jsonStr)
/*     */   {
/* 112 */     JSONObject jsonObj = JSONObject.fromObject(jsonStr);
/* 113 */     Map<String, Object> result = (Map)JSONObject.toBean(jsonObj, Map.class);
/* 114 */     return result;
/*     */   }
/*     */   
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   public static String replaceJsonStr(String jsonStr)
/*     */   {
/* 123 */     return jsonStr.replace("\n", "\\n").replace("\r", "\\r").replace("\"", "\\\"");
/*     */   }
/*     */   
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   public static String listToString(List<String> stringList, String splitStr)
/*     */   {
/* 144 */     if (stringList == null) {
/* 145 */       return null;
/*     */     }
/* 147 */     StringBuilder result = new StringBuilder();
/* 148 */     boolean flag = false;
/* 149 */     for (String string : stringList) {
/* 150 */       if (flag) {
/* 151 */         result.append(splitStr);
/*     */       } else {
/* 153 */         flag = true;
/*     */       }
/* 155 */       result.append(string);
/*     */     }
/* 157 */     return result.toString();
/*     */   }
/*     */   
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   public static String sqlTypeToString(int type)
/*     */   {
/* 166 */     switch (type) {
/*     */     case 2003: 
/* 168 */       return "ARRAY";
/*     */     case -5: 
/* 170 */       return "BIGINT";
/*     */     case -2: 
/* 172 */       return "BINARY";
/*     */     case -7: 
/* 174 */       return "BIT";
/*     */     case 2004: 
/* 176 */       return "BLOB";
/*     */     case 16: 
/* 178 */       return "BOOLEAN";
/*     */     case 1: 
/* 180 */       return "CHAR";
/*     */     case 2005: 
/* 182 */       return "CLOB";
/*     */     case 70: 
/* 184 */       return "DATALINK";
/*     */     case 91: 
/* 186 */       return "DATE";
/*     */     case 3: 
/* 188 */       return "DECIMAL";
/*     */     case 2001: 
/* 190 */       return "DISTINCT";
/*     */     case 8: 
/* 192 */       return "DOUBLE";
/*     */     case 6: 
/* 194 */       return "FLOAT";
/*     */     case 4: 
/* 196 */       return "INTEGER";
/*     */     case -16: 
/* 198 */       return "LONGNVARCHAR";
/*     */     case -4: 
/* 200 */       return "LONGVARBINARY";
/*     */     case -1: 
/* 202 */       return "LONGVARCHAR";
/*     */     case -15: 
/* 204 */       return "NCHAR";
/*     */     case 2011: 
/* 206 */       return "NCLOB";
/*     */     case 0: 
/* 208 */       return "NULL";
/*     */     case 2: 
/* 210 */       return "NUMERIC";
/*     */     case -9: 
/* 212 */       return "NVARCHAR";
/*     */     case 1111: 
/* 214 */       return "OTHER";
/*     */     case 7: 
/* 216 */       return "REAL";
/*     */     case 2006: 
/* 218 */       return "REF";
/*     */     case -8: 
/* 220 */       return "ROWID";
/*     */     case 5: 
/* 222 */       return "SMALLINT";
/*     */     case 2009: 
/* 224 */       return "SQLXML";
/*     */     case 2002: 
/* 226 */       return "STRUCT";
/*     */     case 92: 
/* 228 */       return "TIME";
/*     */     case 93: 
/* 230 */       return "TIMESTAMP";
/*     */     case -6: 
/* 232 */       return "TINYINT";
/*     */     case -3: 
/* 234 */       return "VARBINARY";
/*     */     case 12: 
/* 236 */       return "VARCHAR";
/*     */     }
/* 238 */     return "";
/*     */   }
/*     */ }

