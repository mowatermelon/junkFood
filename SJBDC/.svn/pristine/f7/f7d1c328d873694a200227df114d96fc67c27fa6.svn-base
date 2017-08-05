package com.geostar.gtgh.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.geostar.gtgh.portal.core.service.GzjzService;
import com.geostar.gtgh.portal.utils.CheckUtils;
import com.geostar.gtgh.portal.vo.GzjzVo;

/**
 * 
 * <工作进展>
 * 
 * @author caolei
 * @version [版本号, 2016年10月21日]
 * @see [相关类/方法]
 * @since [产品/模块版本]
 */
@Controller
@RequestMapping("/gzjzController")
public class GzjzController extends BaseController {
	private GzjzService gzjzService;

	@Autowired
	public void setGzjzService(GzjzService gzjzService) {
		this.gzjzService = gzjzService;
	}

	/**
	 * 修改工作进展数据
	 * 
	 * @param gzjzvo
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/updateGzjz")
	public String updateGzjz(GzjzVo gzjzvo) {
		if (CheckUtils.isEmpty(gzjzvo) || CheckUtils.isEmpty(gzjzvo.getJsonStr())) {
			return setError("参数异常");
		}
		try {
			gzjzService.updateGzjz(gzjzvo);
		} catch (Exception e) {
			e.printStackTrace();
			return setError(e.getMessage());
		}
		return setSuccess("操作成功");
	}

}
