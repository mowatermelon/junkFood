package com.geostar.gtgh.portal.core.service.impl;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geostar.gtgh.portal.core.dao.CommonMapper;
import com.geostar.gtgh.portal.core.service.CommonService;
import com.geostar.gtgh.portal.utils.CheckUtils;
import com.geostar.gtgh.portal.vo.DataVo;
import com.geostar.gtgh.portal.vo.Page;

@Service("commonService")
public class CommonServiceImpl implements CommonService {
	protected CommonMapper commonMapper;

	@Autowired
	public void setCommonMapper(CommonMapper commonMapper) {
		this.commonMapper = commonMapper;
	}

	@Override
	public void save(Object c) {
		commonMapper.save(c);
	}

	@Override
	public void update(Object c) {
		commonMapper.update(c);
	}

	@Override
	public <T> T load(Serializable id, Class<T> c) {
		return commonMapper.load(id, c);
	}

	@Override
	public Page<?> queryPage(DataVo dataVo) {
		if (CheckUtils.isEmpty(dataVo.getQueryId())) {
			throw new RuntimeException("参数有误，未获取到查询id");
		}
		Page<?> page = dataVo.getPage();
		if (CheckUtils.isEmpty(page)) {
			throw new RuntimeException("参数有误，未获取到Page对象");
		}
		Map<String, Object> params = dataVo.getQueryMap();
		params.put("page", page);
		page.setRows(commonMapper.query(dataVo));
		return page;
	}

	@Override
	public List<?> queryList(DataVo dataVo) {
		if (CheckUtils.isEmpty(dataVo.getQueryId())) {
			throw new RuntimeException("参数有误，未获取到查询id");
		}
		return commonMapper.query(dataVo);
	}

	@Override
	public void delete(Serializable id, Class<?> c) {

		commonMapper.delete(id, c);
	}

	public int updateData(DataVo dataVo) {
		return commonMapper.updateData(dataVo);
	}

	@Override
	public List<?> queryList(String queryId, Map<String, Object> queryMap) {
		if (CheckUtils.isEmpty(queryId)) {
			throw new RuntimeException("参数有误，未获取到查询id");
		}
		return commonMapper.query(queryId, queryMap);
	}

	@Override
	public void deleteData(String queryId, Object queryMap) {
		if (CheckUtils.isEmpty(queryId)) {
			throw new RuntimeException("参数有误，未获取到执行id");
		}
		commonMapper.deleteData(queryId, queryMap);
	}

}
