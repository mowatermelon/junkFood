package com.geostar.gtgh.portal.controller;

import java.io.Console;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.aspectj.weaver.ast.Var;
import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.Element;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import cn.geostar.util.AuthorizeUtil;
import cn.geostar.util.MachineCodeUtils;

import com.geostar.gfstack.usersystem.user.model.User;
import com.geostar.gtgh.portal.constant.StaticValue;
import com.geostar.gtgh.portal.constant.SystemConstant.ConfigEnum;
import com.geostar.gtgh.portal.utils.CheckUtils;
import com.geostar.gtgh.portal.utils.DateUtils;
import com.geostar.gtgh.portal.utils.IOUtils;
import com.geostar.gtgh.portal.utils.JSONUtils;
import com.geostar.gtgh.portal.utils.JxlsUtils;
import com.geostar.gtgh.portal.utils.LogUtils;
import com.geostar.gtgh.portal.utils.ReflectUtils;
import com.geostar.gtgh.portal.utils.StringUtils;
import com.geostar.gtgh.portal.utils.XmlParser;
import com.geostar.gtgh.portal.vo.DataVo;
import com.geostar.gtgh.portal.vo.FilterVo;
import com.geostar.gtgh.portal.vo.MapSettingVo;
import com.geostar.gtgh.portal.vo.MapVo;
import com.geostar.gtgh.portal.vo.Page;
import com.google.code.ssm.api.format.Serialization;

/**
 * 通用接口类，不是项目基类
 * 
 * @author caolei
 *
 */
@SuppressWarnings("all")
//@SuppressWarnings该批注的作用是给编译器一条指令，告诉它对被批注的代码元素内部的某些警告保持静默
@Controller
@Service
@RequestMapping("/commonController")
public class CommonController extends BaseController {

	/**
	 * 通用中转方法
	 * 
	 * @param name
	 * @param request
	 * @return
	 */
	@RequestMapping("{name}/skip")
	public ModelAndView skip(@PathVariable String name, HttpServletRequest request) {
		//@PathVariable 与前面的RequestMapping 中的name映射
		ModelAndView mav = new ModelAndView();
		//Spring MVC 向前台页面传值-ModelAndView 该对象中包含了一个model属性和一个view属性
		if (name.equals("Common-base")) {// 如果是系统登录，
			User user = (User) request.getSession().getAttribute(StaticValue.SESSION_USER);
			if (user != null)
				mav.addObject(user);
		}
		/**
		 * 如果没有验证信息，无法登录
		 */

		if (CheckUtils.isNotEmpty(AuthorizeUtil.verify())) {
			mav.setViewName("blank");
			mav.addObject("errorMsg", AuthorizeUtil.verify());
			mav.addObject("code", MachineCodeUtils.GetMachineCode());
			return mav;
		}

		if (name.indexOf("-") != -1) {
			String[] names = name.split("-");
			name = "";// 清空name的值
			for (int i = 0; i < names.length; i++) {
				if (i == names.length - 1) {
					name += names[i];
				} else {
					name += names[i] + "/";
				}
			}
		}
		mav.setViewName(name);
		LogUtils.info("-------------------CommonController==>>>> skip：转车页面为：/view/" + name + ".jsp");
		return mav;
	}

	/**
	 * excel导出
	 * 
	 * @param dataVo
	 * @param response
	 */
	@RequestMapping("export")
	//export 导出
	public void export(DataVo dataVo, HttpServletResponse response) {
		response.reset();// 清空输出流
		response.setHeader("Content-disposition", "attachment; filename=" + DateUtils.getDate(DateUtils.getCurrentDate()) + ".xls");// 设定输出文件头
		response.setContentType("application/vnd.ms-excel;charset=GBK");// 定义输出类型
		List<?> list = commonService.queryList(dataVo);
		if (CheckUtils.isNotEmpty(list)) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("list", list);
			InputStream is = null;
			try {
				is = new FileInputStream(this.getClass().getResource("/").getPath() + ConfigEnum.TEMPLATEPATH.value + dataVo.getTemplate());
				JxlsUtils.toExcel(map, is, response.getOutputStream());
			} catch (Exception e) {
				e.printStackTrace();
				//printStackTrace()方法的意思是：在命令行打印异常信息在程序中出错的位置及原因。
			} finally {
				IOUtils.close(is);
			}
		}
	}

	/**
	 * 查询普通列表数据，返回list[{xxxx}]
	 * 
	 * @param dataVo
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "queryList", produces = { "application/json;charset=UTF-8" })
	public String queryList(DataVo dataVo) {
		try {
			return JSONUtils.toString(encodeStr(commonService.queryList(dataVo)));
		} catch (Exception e) {
			return setError(e.getMessage());
		}
	}

	/**
	 * 获取机器码
	 * 
	 * @return
	 */
	@RequestMapping("getValid")
	public ModelAndView getMachineCode() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("code", MachineCodeUtils.GetMachineCode());
		modelAndView.addObject("days", AuthorizeUtil.GetExpireDay());
		modelAndView.setViewName("blank");
		return modelAndView;
	}

	/**
	 * 调用修改逻辑
	 * 
	 * @param dataVo
	 */
	@RequestMapping("update")
	public String update(DataVo dataVo) {
		try {
			commonService.updateData(dataVo);
			return setSuccess("操作成功");
		} catch (Exception e) {
			return setError(e.getMessage());
		}
	}

	/**
	 * 查询地图数据
	 * 
	 * @param dataVo
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "queryMap", produces = { "application/json;charset=UTF-8" })
	public String queryMap(DataVo dataVo) {
		MapVo mapVo = new MapVo();
		if (CheckUtils.isEmpty(dataVo.getSettingId())) {
			throw new RuntimeException("参数异常");
		}
		MapSettingVo mapSettingVo = parseSetting(dataVo.getSettingId());
		List<Map<String, Object>> list = (List<Map<String, Object>>) commonService.queryList(dataVo);
		LogUtils.error("**************"+JSONUtils.toString(list));
		if (CheckUtils.isNotEmpty(list)) {
			mapVo.setFields(mapSettingVo.getFiledsList());
			for (Map<String, Object> map : list) {
				Map<String, Object> returnMap = new HashMap<String, Object>();
				if (CheckUtils.isEmpty(mapSettingVo.getCode())) {
					throw new RuntimeException("未获取到code参数，请检查xml文件");
				}
				if (map.get(mapSettingVo.getCode()) == null) {
			
					throw new RuntimeException("根据code未获致到数据");
				}
				List result = new ArrayList();
				returnMap.put("code", map.get(mapSettingVo.getCode()));
				if (CheckUtils.isNotEmpty(mapSettingVo.getKeysList())) {
					for (String s : mapSettingVo.getKeysList()) {
						result.add(map.get(s));
					}
				} else {
					for (Map.Entry<String, Object> entry : map.entrySet()) {
						result.add(entry.getValue());
					}
				}
				returnMap.put("result", result);
				mapVo.getData().add(returnMap);
			}
		}
		return JSONUtils.toString(mapVo);
	}

	/**
	 * 数据表格分页方法，
	 * 
	 * @param dataVo
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "queryPage", produces = { "application/json;charset=UTF-8" })
	public String queryPage(DataVo dataVo) {
		try {
			Page page = commonService.queryPage(dataVo);
			encodeStr(page.getRows());
			return JSONUtils.toString(page);
		} catch (Exception e) {
			return setError(e.getMessage());
		}
	}

	/**
	 * 将list中的二进制数据转换成为字符串
	 * 
	 * @param list
	 */

	/**
	 * 用来解析setting.xml配置的地图数据参数
	 * 
	 * @param id
	 * @return
	 */
	private MapSettingVo parseSetting(String id) {
		MapSettingVo mapSettingVo = new MapSettingVo();
		Element currElement = null;
		String localPath = this.getClass().getResource("/").getPath();
		Document document = null;
		try {
			document = XmlParser.getDocument(URLDecoder.decode(localPath, "utf-8") + ConfigEnum.XMLSETTINGPATH.value);
		} catch (UnsupportedEncodingException e1) {
			e1.printStackTrace();
		}
		Element element = XmlParser.getRootNode(document);
		List<Element> list = XmlParser.getChildList(element);
		for (Element e : list) {
			Attribute a = XmlParser.getAttribute(e, "name");
			if (a.getValue().equals(id)) {
				currElement = e;
				break;
			}
		}
		List<Element> fieldsElements = XmlParser.getNameElement(currElement, "fields");
		for (Element fElement : fieldsElements) {
			List<Element> fs = XmlParser.getNameElement(fElement, "field");
			for (Element f : fs) {
				mapSettingVo.getFiledsList().add(XmlParser.getNodeAttrMap(f));
			}
		}
		List<Element> dataElements = XmlParser.getNameElement(currElement, "data");
		for (Element dElement : dataElements) {
			List<Element> de = XmlParser.getNameElement(dElement, "keys");
			Element codeElement = XmlParser.getChild(dElement, "code");
			mapSettingVo.setCode(codeElement.getStringValue());
			for (Element f : de) {
				List<Element> keys = XmlParser.getNameElement(f, "key");
				for (Element e : keys) {
					mapSettingVo.getKeysList().add(e.getStringValue());
				}
			}
		}
		return mapSettingVo;
	}

}
