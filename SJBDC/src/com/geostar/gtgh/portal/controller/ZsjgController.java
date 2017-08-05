package com.geostar.gtgh.portal.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.geostar.gtgh.portal.constant.CodeConstant;
import com.geostar.gtgh.portal.core.entity.Zsqy;
import com.geostar.gtgh.portal.core.entity.Zsxx;
import com.geostar.gtgh.portal.core.service.ZsjgService;
import com.geostar.gtgh.portal.utils.CheckUtils;
import com.geostar.gtgh.portal.utils.StringUtils;
import com.geostar.gtgh.portal.vo.ZsjgVo;

/**
 * 
 * <证书监管>
 * 
 * @author caolei
 * @version [版本号, 2016年10月21日]
 * @see [相关类/方法]
 * @since [产品/模块版本]
 */
@Controller
@RequestMapping("/zsjgController")
public class ZsjgController extends BaseController {
	
	private ZsjgService zsjgServcie;

	@Autowired
	public void setZsjgServcie(ZsjgService zsjgServcie) {
		this.zsjgServcie = zsjgServcie;
	}

	

	/**
	 * 添加企业信息
	 * 
	 * @param zsqy
	 */
	@ResponseBody
	@RequestMapping("addQyxx")
	public String addQyxx(Zsqy zsqy) {
		try {
			commonService.save(zsqy);
		} catch (Exception e) {
			return setError(e.getMessage());
		}
		return setSuccess("操作成功");
	}

	/**
	 * 创建批次信息
	 * 
	 * @param zsqy
	 */
	@ResponseBody
	@RequestMapping("createPcxx")
	public String createPcxx(ZsjgVo zsjgVo) {
		if (CheckUtils.isEmpty(zsjgVo.getZspc()) && CheckUtils.isEmpty(zsjgVo.getJsonStr())) {
			return setError("参数信息异常");
		}
		try {
			zsjgServcie.savePcxx(zsjgVo.getZspc(), zsjgVo.getJsonStr());
		} catch (Exception e) {
			e.printStackTrace();
			return setError(e.getMessage());
		}
		return setSuccess("操作成功");
	}

	/**
	 * 创建批次信息
	 * 
	 * @param zsqy
	 */
	@ResponseBody
	@RequestMapping("updatePcxx")
	public String updatePcxx(ZsjgVo zsjgVo) {
		if (CheckUtils.isEmpty(zsjgVo.getZspc()) && CheckUtils.isEmpty(zsjgVo.getJsonStr())) {
			return setError("参数信息异常");
		}
		try {
			zsjgServcie.updatePcxx(zsjgVo.getZspc(), zsjgVo.getJsonStr());
		} catch (Exception e) {
			e.printStackTrace();
			return setError(e.getMessage());
		}
		return setSuccess("操作成功");
	}

	/**
	 * 删除证书信息
	 * 
	 * @return
	 */
	@ResponseBody
	@RequestMapping("{zsid}/deleteZsxxById")
	public String deleteZsxxById(@PathVariable String zsid) {
		if (CheckUtils.isEmpty(zsid)) {
			setError("参数不全，未获取到证书id");
		}
		Zsxx zsxx = commonService.load(zsid, Zsxx.class);
		if (CheckUtils.isEmpty(zsxx)) {
			setError("参数id有误，证书未获取 到");
		}
		try {
			if (Integer.parseInt(zsxx.getZszt()) == CodeConstant.ZsztEnum.FZ.id) {// 如果是废证
				zsxx.setFqr(null);
				zsxx.setFqyy(null);
				zsxx.setFqrq(null);
			} else if (Integer.parseInt(zsxx.getZszt()) == CodeConstant.ZsztEnum.LZ.id) {// 如果是劣证
				// TODO
			} else if (Integer.parseInt(zsxx.getZszt()) == CodeConstant.ZsztEnum.YSY.id) {
				// TODO
			}
			zsxx.setZszt(StringUtils.value(CodeConstant.ZsztEnum.WSY.id));
			commonService.update(zsxx);
		} catch (Exception e) {
			e.printStackTrace();
			return setError(e.getMessage());
		}
		return setSuccess("操作成功");

	}

	/**
	 * 根据批次id进行删除，对应删除批次表记录，对应批次分类信息，对应生成证书信息 成立条件：1、对应当前证书都未使用，使用已经有使用信息，条件不成立;
	 * 
	 * @return
	 */
	@ResponseBody
	@RequestMapping("{pcid}/deleteByPcId")
	public String deleteByPcId(@PathVariable String pcid) {
		if (CheckUtils.isEmpty(pcid)) {
			return setError("未获取到批次id");
		}
		try {
			zsjgServcie.deleteByPcId(pcid);
		} catch (Exception e) {
			e.printStackTrace();
			return setError(e.getMessage());
		}
		return setSuccess("操作成功");
	}

	

	// songying 2016-11-16 首页登陆
	@RequestMapping(value = "toIndex", produces = { "application/json;charset=UTF-8" })
	public String toIndex(HttpServletRequest request, HttpServletResponse response) throws Exception {
		return "redirect:/view/portal/portal.jsp";
	}
}
