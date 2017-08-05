package com.geostar.gtgh.portal.core.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.geostar.gtgh.portal.vo.DataVo;
import com.geostar.gtgh.portal.vo.Page;

public interface CommonService {
	public void save(Object c);

	public void update(Object c);

	public void delete(Serializable id, Class<?> c);
	
	public void deleteData(String queryId, Object queryMap);
	
	public <T> T load(Serializable id, Class<T> c);

	public Page<?> queryPage(DataVo dataVo);
	
	public List<?> queryList(DataVo dataVo);
	
	public List<?> queryList(String queryId,Map<String, Object>queryMap);
	
	public int updateData(DataVo dataVo);
}
