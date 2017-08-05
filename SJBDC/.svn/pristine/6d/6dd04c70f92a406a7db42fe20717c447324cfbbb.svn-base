package com.geostar.gtgh.portal.core.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//import oracle.net.aso.q;

import org.apache.commons.beanutils.PropertyUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geostar.gtgh.portal.constant.CodeConstant;
import com.geostar.gtgh.portal.core.dao.CommonMapper;
import com.geostar.gtgh.portal.core.entity.Gzjz;
import com.geostar.gtgh.portal.core.entity.Zspc;
import com.geostar.gtgh.portal.core.entity.Zspcfl;
import com.geostar.gtgh.portal.core.service.GzjzService;
import com.geostar.gtgh.portal.core.service.ZsjgService;
import com.geostar.gtgh.portal.utils.CheckUtils;
import com.geostar.gtgh.portal.utils.DateUtils;
import com.geostar.gtgh.portal.utils.JSONUtils;
import com.geostar.gtgh.portal.utils.LogUtils;
import com.geostar.gtgh.portal.utils.StringUtils;
import com.geostar.gtgh.portal.vo.GzjzVo;
import com.geostar.gtgh.portal.vo.GzjzVo.GzjzModeVo;

@Service("gzjzService")
@SuppressWarnings("all")
public class GzjzServiceImpl implements GzjzService {
	protected CommonMapper commonMapper;

	@Autowired
	public void setCommonMapper(CommonMapper commonMapper) {
		this.commonMapper = commonMapper;
	}

	/**
	 * 修改工作进展数据
	 */
	@Override
	public void updateGzjz(GzjzVo gzjzVo) {
		List<GzjzModeVo> list = (List<GzjzModeVo>) JSONUtils.toList(gzjzVo.getJsonStr(), GzjzModeVo.class);
		for (GzjzModeVo gzjz : list) {
			Gzjz queryGzjz = commonMapper.queryOne(CodeConstant.QueryIdEnum.GzjzqueryObjByQxdmAndLx.id, gzjz, Gzjz.class);
			try {
				PropertyUtils.copyProperties(queryGzjz, gzjz);
			} catch (Exception e) {
				throw new RuntimeException("属性复制失败，请检查");
			}
			commonMapper.update(queryGzjz);
		}
	}

}
