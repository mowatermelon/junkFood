package com.geostar.gtgh.portal.utils;

import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;
import org.json.JSONTokener;

public class HttpClientUtils {

	/**
	 * post from表单提交
	 * @param url
	 * @param params
	 * @return
	 */
	public static String post(String url, Map<String, String> params) {
		HttpClient httpclient = new DefaultHttpClient();
		HttpPost post = postForm(url, params);
		String body = invoke(httpclient, post);
		httpclient.getConnectionManager().shutdown();
		return body;
	}
	/**
	 * 指定提交参数类型的post请求
	 * @param url
	 * @param param
	 * @param contentType
	 * @param charset
	 * @return
	 * @throws Exception
	 */
	public static JSONObject post(String url, String param, String contentType, String charset) throws Exception {
		HttpPost httpPost = new HttpPost(url);
		httpPost.setHeader(HTTP.CONTENT_TYPE, contentType);
		HttpClient httpClient = new DefaultHttpClient();
		StringEntity se = new StringEntity(param, charset);
//		se.setContentType("test/json;charset=UTF-8");
//		se.setContentEncoding(new BasicHeader(HTTP.CONTENT_TYPE, "application/json;charset=UTF-8"));
		httpPost.setEntity(se);
		HttpResponse res = httpClient.execute(httpPost);
		if (res.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
			HttpEntity entity = res.getEntity();
			return new JSONObject(new JSONTokener(new InputStreamReader(entity.getContent(), EntityUtils.getContentCharSet(entity))));
		} else {
			return null;
		}
	}

	public static String get(String url) {
		return get(url, null);
	}
	
	public static String get(String url, Map map) {
		String paramStr = getUrlParamsByMap(map);
		if (map != null && !map.isEmpty()) {
			if (url.indexOf("?") > 0) {
				url += ("&" + paramStr);
			} else {
				url += ("?" + paramStr);
			}
		}
		HttpClient httpclient = new DefaultHttpClient();
		HttpGet get = new HttpGet(url);
		String body = invoke(httpclient, get);
		httpclient.getConnectionManager().shutdown();
		return body;
	}

	private static String invoke(HttpClient httpclient, HttpUriRequest httpost) {
		HttpResponse response = sendRequest(httpclient, httpost);
		return paseResponse(response);
	}

	private static String paseResponse(HttpResponse response) {
		HttpEntity entity = response.getEntity();
		String charset = EntityUtils.getContentCharSet(entity);
		String body = null;
		try {
			body = EntityUtils.toString(entity);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return body;
	}

	private static HttpResponse sendRequest(HttpClient httpclient, HttpUriRequest httpost) {
		HttpResponse response = null;
		try {
			response = httpclient.execute(httpost);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return response;
	}

	private static HttpPost postForm(String url, Map<String, String> params) {
		HttpPost httpost = new HttpPost(url);
		List<NameValuePair> nvps = new ArrayList<NameValuePair>();
		Set<String> keySet = params.keySet();
		for (String key : keySet) {
			nvps.add(new BasicNameValuePair(key, params.get(key)));
		}
		try {
			httpost.setEntity(new UrlEncodedFormEntity(nvps, HTTP.UTF_8));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return httpost;
	}
	
	/**
	 * 将url转换成map
	 * @param param
	 * @return
	 */
	public static Map<String, Object> getUrlParams(String param) {
		Map<String, Object> map = new HashMap<String, Object>(0);
		if (StringUtils.isBlank(param)) {
			return map;
		}
		String[] params = param.split("&");
		for (int i = 0; i < params.length; i++) {
			String[] p = params[i].split("=");
			if (p.length == 2) {
				map.put(p[0], p[1]);
			}
		}
		return map;
	}  
	  
	/** 
	 * 将map转换成url 
	 * @param map 
	 * @return 
	 */  
	public static String getUrlParamsByMap(Map<String, Object> map) {
		if (map == null) {
			return "";
		}
		StringBuffer sb = new StringBuffer();
		for (Map.Entry<String, Object> entry : map.entrySet()) {
			if (StringUtils.isNotBlank(sb.toString())) {
				sb.append("&");
			}
			try {
				sb.append(entry.getKey() + "=" + URLEncoder.encode(entry.getValue().toString(), "utf-8"));
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		return sb.toString();
	}  
}
