package com.geostar.gtgh.portal.controller;

import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.dom4j.Element;
import org.springframework.beans.factory.annotation.Autowired;

import com.geostar.gtgh.portal.constant.SystemConstant.ConfigEnum;
import com.geostar.gtgh.portal.core.service.CommonService;
import com.geostar.gtgh.portal.utils.CheckUtils;
import com.geostar.gtgh.portal.utils.JSONUtils;
import com.geostar.gtgh.portal.utils.ReflectUtils;
import com.geostar.gtgh.portal.utils.StringUtils;
import com.geostar.gtgh.portal.utils.XmlParser;
import com.geostar.gtgh.portal.vo.FilterVo;

/**
 * Controller的基类
 * 
 * @author caolei
 *
 */
public class BaseController {
	protected CommonService commonService;

	@Autowired
	public void setCommonService(CommonService commonService) {
		this.commonService = commonService;
	}

	/**
	 * 向前台返回错误信息，msg为信息内容
	 * 
	 * @param msg
	 * @return
	 */
	protected String setError(String msg) {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("code", 1);
		returnMap.put("msg", msg);
		return JSONUtils.toString(returnMap);
	}
	
	/**
	 * 将返回结果集进行加密
	 * 
	 * @param formList
	 */
	protected List<?> encodeStr(List<?> formList) {
		List<FilterVo> resultList = new ArrayList<FilterVo>();
		try {
			String localPath = this.getClass().getResource("/").getPath();
			Element element = XmlParser.getRootNode(URLDecoder.decode(localPath, "utf-8") + ConfigEnum.XMLFILTERPATH.value);
			List<Element> list = XmlParser.getNameElement(element, "cloumn");
			for (int i = 0; i < list.size(); i++) {
				Element e = list.get(i);
				FilterVo filterVo = ReflectUtils.mapToBean(XmlParser.getNodeAttrMap(e), FilterVo.class);
				resultList.add(filterVo);
			}

		} catch (Exception e1) {
			e1.printStackTrace();
		}
		if (CheckUtils.isNotEmpty(formList)) {
			for (Object object : formList) {
				if (object instanceof Map) {
					Map<String, Object> map = (Map<String, Object>) object;
					for (FilterVo filterVo : resultList) {
						if (map.get(filterVo.getKey()) != null) {
							map.put(filterVo.getKey(), makeCode(map.get(filterVo.getKey()).toString(), filterVo));
							continue;
						}
					}
				}
			}
		}
		return formList;
	}

	/**
	 * 
	 * @param str
	 * @param filterVo
	 * @return
	 */
	private String makeCode(String str, FilterVo filterVo) {
		String strFrom;
		if (filterVo.getStartIndex() != 0 && filterVo.getEndIndex() != 0) {
			strFrom = str.substring(filterVo.getStartIndex(), filterVo.getEndIndex());
		} else if (filterVo.getStartIndex() != 0 && filterVo.getEndIndex() == 0) {
			strFrom = str.substring(filterVo.getStartIndex(), str.length());
		} else {
			strFrom = str.substring(0, filterVo.getEndIndex());
		}
		if (CheckUtils.isNotEmpty(strFrom)) {
			StringBuffer strTo = new StringBuffer("");
			for (int i = 0; i < strFrom.length(); i++) {
				strTo.append("*");
			}
			str = StringUtils.replace(str, strFrom, strTo.toString());
		}
		return str;
	}

	/**
	 * 向前台返回正确信息，msg为信息内容
	 * 
	 * @param msg
	 * @return
	 */
	protected String setSuccess(String msg) {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("code", 0);
		returnMap.put("msg", msg);
		return JSONUtils.toString(returnMap);
	}

	/**
	 * 将二进制数组转换成字符串
	 * 
	 * @param list
	 */
	protected void byteToString(List<Map> list) {
		for (Map<String, Object> map : list) {
			if (CheckUtils.isEmpty(map)) {
				return;
			}
			for (Map.Entry<String, Object> entry : map.entrySet()) {
				if (entry.getValue() instanceof byte[]) {
					try {
						map.put(entry.getKey(), new String((byte[]) entry.getValue(), "utf-8"));
					} catch (Exception e) {
						e.printStackTrace();
					}
				}

			}
		}
	}

	/**
	 * 根据list 中的map中某一个字段值相同的数据
	 * 
	 * @param list
	 * @param key
	 * @param value
	 * @return
	 */
	protected List<Map<String, Object>> getListByCondiction(List<Map<String, Object>> list, String key, String value) {
		List<Map<String, Object>> returnList = new ArrayList<Map<String, Object>>();
		for (Map<String, Object> map : list) {
			if (map.get(key).toString().equals(value)) {
				returnList.add(map);
			}
		}
		return returnList;
	}
}
