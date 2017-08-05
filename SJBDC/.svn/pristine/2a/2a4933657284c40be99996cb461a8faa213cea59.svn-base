package com.geostar.gtgh.portal.core.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//import oracle.net.aso.q;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geostar.gtgh.portal.constant.CodeConstant;
import com.geostar.gtgh.portal.core.dao.CommonMapper;
import com.geostar.gtgh.portal.core.entity.Zspc;
import com.geostar.gtgh.portal.core.entity.Zspcfl;
import com.geostar.gtgh.portal.core.service.ZsjgService;
import com.geostar.gtgh.portal.utils.CheckUtils;
import com.geostar.gtgh.portal.utils.DateUtils;
import com.geostar.gtgh.portal.utils.JSONUtils;
import com.geostar.gtgh.portal.utils.StringUtils;

@Service("zsjgService")
@SuppressWarnings("all")
public class ZsjgServiceImpl implements ZsjgService {
	protected CommonMapper commonMapper;

	@Autowired
	public void setCommonMapper(CommonMapper commonMapper) {
		this.commonMapper = commonMapper;
	}

	@Override
	public void deleteByPcId(String pcid) {
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("pcid", pcid);
		List<Zspcfl> flList = (List<Zspcfl>) commonMapper.query(CodeConstant.QueryIdEnum.ZsxxQueryZsfl.id, queryMap);
		for (Zspcfl zspcfl : flList) {
			queryMap.put("pcflid", zspcfl.getId());
			int flag = commonMapper.count(CodeConstant.QueryIdEnum.ZsxxcountZSXX.id, queryMap);
			if (flag == 0) {
				commonMapper.deleteData(CodeConstant.QueryIdEnum.ZsxxdeleteZSXX.id, queryMap);
			} else {
				throw new RuntimeException("证书已经被使用");
			}
			commonMapper.delete(zspcfl.getId(), Zspcfl.class);
		}
		commonMapper.delete(pcid, Zspc.class);
	}

	/**
	 * 添加批次信息
	 */
	@Override
	public void savePcxx(Zspc zspc, String jsonStr) {
		if (CheckUtils.isEmpty(zspc.getId()))
			zspc.setId(StringUtils.getUUID());
		zspc.setSjrksj(DateUtils.getCurrentDate());
		List<Zspcfl> list = (List<Zspcfl>) JSONUtils.toObject(jsonStr, Zspcfl.class);
		for (Zspcfl zspcfl : list) {
			if (CheckUtils.isNoOneEmpty(zspcfl.getQibh(), zspcfl.getJsbh())) {
				throw new RuntimeException("批次分类信息起始编号与结束编号不全，请检查");
			}
			Map<String, Object> queryMap = new HashMap<String, Object>();
			queryMap.put("qibh", zspcfl.getQibh());
			queryMap.put("jsbh", zspcfl.getJsbh());
			int flag = commonMapper.count(CodeConstant.QueryIdEnum.ZsxxqueryBHXX.id, queryMap);
			if (flag > 0) {
				throw new RuntimeException(zspcfl.getQibh() + "~" + zspcfl.getJsbh() + "存在编号冲突，请检查");
			}

			zspcfl.setId(StringUtils.getUUID());
			zspcfl.setPcid(zspc.getId());
			zspcfl.setSjrksj(DateUtils.getCurrentDate());
			commonMapper.save(zspcfl);
		}
		commonMapper.save(zspc);
	}

	/**
	 * 修改批次信息
	 */
	@Override
	public void updatePcxx(Zspc zspc, String jsonStr) {
		if (CheckUtils.isEmpty(zspc.getId())) {
			throw new RuntimeException("未获取到证书批次id");
		}
		commonMapper.delete(zspc.getId(), Zspc.class);
		List<Zspcfl> list = (List<Zspcfl>) JSONUtils.toList(jsonStr, Zspcfl.class);
		for (Zspcfl zspcfl : list) {
			if (CheckUtils.isEmpty(zspcfl.getId())) {
				commonMapper.delete(zspcfl.getId(), Zspcfl.class);
			}
		}
		savePcxx(zspc, jsonStr);
	}

}
