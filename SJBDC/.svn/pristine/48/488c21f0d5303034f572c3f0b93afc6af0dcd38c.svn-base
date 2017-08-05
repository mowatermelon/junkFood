package com.geostar.gtgh.portal.controller;

import java.io.ByteArrayInputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//import oracle.net.aso.l;
//import oracle.net.aso.q;


import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.geostar.gtgh.portal.core.service.CommonService;
import com.geostar.gtgh.portal.utils.JSONUtils;
import com.geostar.gtgh.portal.utils.LogUtils;
import com.geostar.gtgh.portal.vo.DataVo;

/**
 * 
 * <数据交换管理模块，监管中心>
 * 
 * @author caolei
 * @version [版本号, 2016年10月21日]
 * @see [相关类/方法]
 * @since [产品/模块版本]
 */
@Controller
@RequestMapping("/sjjhController")
@SuppressWarnings("all")
public class SjjhController extends BaseController {
	private CommonService commonService;

	@Autowired
	public void setCommonService(CommonService commonService) {
		this.commonService = commonService;
	}

	/**
	 * 从数据库中读取xml流并在页面上显示
	 * 
	 * @param request
	 * @param response
	 * @author wushixong
	 */
	@RequestMapping(value = "/queryXMLData")
	public void queryXMLData(DataVo dataVo, HttpServletRequest request, HttpServletResponse response) {
		LogUtils.error("**************"+JSONUtils.toString(dataVo));
		List<Map<String, Object>> list = (List<Map<String, Object>>) commonService.queryList(dataVo);
		byte[] buf = null;
		OutputStream os = null;
		if (list.size() > 0) {
			for (Map<String, Object> map : list) {
				for (Map.Entry<String, Object> entry : map.entrySet()) {
					if (entry.getValue() instanceof byte[]) {
						buf = (byte[]) entry.getValue();
					}
				}
			}
			try {
				response.setContentType("application/xml");
				response.setHeader("Cache-control", "no-cache ");
				os = response.getOutputStream();
				os.write(buf);
				os.flush();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	@ResponseBody
	@RequestMapping(value = "/queryRepInfoById")
	public String queryRepInfoById(DataVo dataVo, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> rtnMap = new HashMap<String, Object>();// 返回值map
		List<Map> list = (List<Map>) commonService.queryList(dataVo);
		String SuccessFlag = "", BizMsgID = "", ResponseCode = "", ResponseInfo = "", QRCode = "";
		try {
			if (list != null && list.size() > 0) {
				Map<String, Object> v_map = (Map) list.get(0);
				if (v_map.get("SREPXMLDATA") != null) {
					byte[] srep = (byte[]) v_map.get("SREPXMLDATA");
					SAXReader sr = new SAXReader();
					Document doc = sr.read(new ByteArrayInputStream(srep));
					Element ele = doc.getRootElement();
					SuccessFlag = ele.element("SuccessFlag").getText();
					BizMsgID = ele.element("BizMsgID").getText();
					ResponseCode = ele.element("ResponseCode").getText();
					ResponseInfo = ele.element("ResponseInfo").getText();
					QRCode = ele.element("QRCode").getText();
				}
				if (v_map.get("GREPXMLDATA") != null) {
					byte[] grep = (byte[]) v_map.get("GREPXMLDATA");
					SAXReader sr = new SAXReader();
					Document doc = sr.read(new ByteArrayInputStream(grep));
					Element ele = doc.getRootElement();
					SuccessFlag = ele.element("SuccessFlag").getText();
					BizMsgID = ele.element("BizMsgID").getText();
					ResponseCode = ele.element("ResponseCode").getText();
					ResponseInfo = ele.element("ResponseInfo").getText();
					QRCode = ele.element("QRCode").getText();
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		rtnMap.put("SuccessFlag", SuccessFlag);
		rtnMap.put("BizMsgID", BizMsgID);
		rtnMap.put("ResponseCode", ResponseCode);
		rtnMap.put("ResponseInfo", ResponseInfo);
		rtnMap.put("QRCode", QRCode);
		return JSONUtils.toString(rtnMap);
	}

	/**
	 * 解析区县数据，地图使用
	 * 
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/parseData")
	public String parseData() {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		List<Map<String, Object>> list = (List<Map<String, Object>>) commonService.queryList("SjjhQueryMapper.queryQxxx", null);
		for (Map map : list) {
			if (map.get("QXDM") != null) {
				queryMap.put("cityCode", map.get("QXDM").toString());
				map.put("child", commonService.queryList("SjjhQueryMapper.queryQxxx", queryMap));
			}
		}
		return JSONUtils.toString(list);
	}
}
