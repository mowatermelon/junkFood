package com.geostar.gtgh.portal.controller;

import java.io.ByteArrayInputStream;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.RuntimeErrorException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.jsqlparser.statement.update.Update;
//import oracle.net.aso.d;
//import oracle.net.aso.q;

import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.Node;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

//import sun.util.logging.resources.logging;
import cn.geostar.util.AuthorizeUtil;

import com.geostar.core.util.format.map.test;
import com.geostar.gfstack.usersystem.user.model.User;
import com.geostar.gtgh.portal.constant.StaticValue;
import com.geostar.gtgh.portal.constant.SystemConstant.ConfigEnum;
import com.geostar.gtgh.portal.core.service.CommonService;
//import com.geostar.gtgh.portal.tools.ConnectionPoolManager;
//import com.geostar.gtgh.portal.tools.DataSource;
import com.geostar.gtgh.portal.tools.SystemGlobals;
import com.geostar.gtgh.portal.utils.CheckUtils;
import com.geostar.gtgh.portal.utils.DateUtils;
import com.geostar.gtgh.portal.utils.IOUtils;
import com.geostar.gtgh.portal.utils.JSONUtils;
import com.geostar.gtgh.portal.utils.JxlsUtils;
import com.geostar.gtgh.portal.utils.LogUtils;
import com.geostar.gtgh.portal.utils.XmlParser;
import com.geostar.gtgh.portal.vo.DataVo;
import com.geostar.gtgh.portal.vo.MapSettingVo;
import com.geostar.gtgh.portal.vo.MapVo;
import com.geostar.gtgh.portal.vo.Page;

/**
 * 业务监管页面
 * 
 * @author caolei
 *
 */
@SuppressWarnings("all")
@Controller
@RequestMapping("/ywjgController")
public class YwjgController extends BaseController {
	private CommonService commonService;

	@Autowired
	public void setCommonService(CommonService commonService) {
		this.commonService = commonService;
	}

	/**
	 * 通用中转方法
	 * 
	 * @param name
	 * @param request
	 * @return
	 */
	@RequestMapping("{ywid}/showDialog")
	public ModelAndView showDialog(@PathVariable String ywid, HttpServletRequest request) {
		ModelAndView mav = new ModelAndView();
		if (CheckUtils.isNotEmpty(ywid)) {
			Map<String, Object> queryMap = new HashMap<String, Object>();
			queryMap.put("ywid", ywid);
			List list = commonService.queryList("com.geostar.gtgh.portal.core.dao.CommonQueryMapper.query_V_YWJG_JBXX", queryMap);

			if (CheckUtils.isNotEmpty(list))
				mav.addObject("baseInfo", list.get(0));
		}
		mav.setViewName("supervise/jg/xn/ywjg/ywjgModal");
		return mav;
	}

}
