package com.geostar.gtgh.portal.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.geostar.gfstack.usersystem.user.model.User;
import com.geostar.gtgh.portal.constant.CodeConstant;
import com.geostar.gtgh.portal.constant.StaticValue;
import com.geostar.gtgh.portal.core.entity.WorkAnswer;
import com.geostar.gtgh.portal.core.entity.WorkArticle;
import com.geostar.gtgh.portal.utils.CheckUtils;
import com.geostar.gtgh.portal.utils.DateUtils;
import com.geostar.gtgh.portal.utils.StringUtils;

/**
 * 
 * <门户网站统一处理逻辑>
 * 
 * @author caolei
 * @version [版本号, 2016年10月21日]
 * @see [相关类/方法]
 * @since [产品/模块版本]
 */
@Controller
@RequestMapping("/protalController")
public class ProtalController extends BaseController {
	/**
	 * 添加文章
	 * 
	 * @param workAnswer
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/addArticle")
	public String addArticle(WorkArticle workArticle, HttpServletRequest request) {
		CheckUtils.checkNotNull(workArticle, "%s不能为空");
		if (CheckUtils.isEmpty(workArticle.getId()))
			workArticle.setId(StringUtils.getUUID());
		User user = (User) request.getSession().getAttribute(StaticValue.SESSION_USER);
		if (user != null)
			workArticle.setLrr(user.getUsername());
		
		if (CheckUtils.isEmpty(workArticle.getLrsj())) {
			workArticle.setLrsj(DateUtils.getCurrentDate());
		}

		commonService.save(workArticle);
		return setSuccess("操作成功");
	}

	/**
	 * 添加提问或者回复提问
	 * 
	 * @param workAnswer
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/addAnswer")
	public String addAnswer(WorkAnswer workAnswer, HttpServletRequest request) {
		if (CheckUtils.isEmpty(workAnswer.getContent())) {
			return setError("内容为空，请检查");
		}
		workAnswer.setYwbsid(StringUtils.getUUID());
		User user = (User) request.getSession().getAttribute(StaticValue.SESSION_USER);
		if (user != null)
			workAnswer.setCreateuser(user.getUsername());
		if (CheckUtils.isEmpty(workAnswer.getPid())) {
			workAnswer.setPid(StringUtils.value(0));
		}
		if (CheckUtils.isEmpty(workAnswer.getCreatetime())) {
			workAnswer.setCreatetime(DateUtils.getCurrentDate());
		}
		commonService.save(workAnswer);
		return setSuccess("操作成功");
	}

	/**
	 * 删除问题或者回复信息
	 * 
	 * @param ywbsid
	 * @return
	 */
	@ResponseBody
	@RequestMapping("{ywbsid}/deleteAnswer")
	public String deleteAnswer(@PathVariable String ywbsid) {
		if (CheckUtils.isEmpty(ywbsid)) {
			return setError("id为空，请检查");
		}
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("ywbsid", ywbsid);
		commonService.deleteData(CodeConstant.QueryIdEnum.DeleteProtalById.id, paramMap);
		return setSuccess("操作成功");
	}

	/**
	 * 删除问题或者回复信息
	 * 
	 * @param ywbsid
	 * @return
	 */
	@ResponseBody
	@RequestMapping("{id}/deleteArticle")
	public String deleteArticle(@PathVariable String id) {
		if (CheckUtils.isEmpty(id)) {
			return setError("id为空，请检查");
		}
		try {
			commonService.delete(id, WorkArticle.class);
		} catch (Exception e) {
			return setError(e.getMessage());
		}

		return setSuccess("操作成功");
	}

}
