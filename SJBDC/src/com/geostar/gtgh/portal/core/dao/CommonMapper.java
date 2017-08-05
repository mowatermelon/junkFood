package com.geostar.gtgh.portal.core.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.geostar.gtgh.portal.annotation.Localtion;
import com.geostar.gtgh.portal.utils.CheckUtils;
import com.geostar.gtgh.portal.vo.DataVo;

//可配置mapper方法
@Repository
public class CommonMapper {
	private SqlSessionTemplate sqlSession;

	@Autowired
	public void setSqlSession(SqlSessionTemplate sqlSession) {
		this.sqlSession = sqlSession;
	}
	public void save(Object c) {
		
		Localtion localtion = c.getClass().getAnnotation(Localtion.class);
		if (CheckUtils.isEmpty(localtion)) {
			throw new RuntimeException(c.getClass().getName() + "未设置xml配置地址注解，操作失败");
		}
		sqlSession.insert(localtion.value() + ".insert", c);
	}
	
	public void savebyid(Object c){
	    Localtion localtion =c.getClass().getAnnotation(Localtion.class);//这个通过Localtion 来定位到实体,在定位到指定的mapper.xml
	    if(CheckUtils.isEmpty(localtion)){
	    	throw new RuntimeException(c.getClass().getName()+"没有设置xml地址注解，操作失败");
	    }
	    sqlSession.insert(localtion.value()+"insert",c);
	}
	public void update(Object c) {
		Localtion localtion = c.getClass().getAnnotation(Localtion.class);
		if (CheckUtils.isEmpty(localtion)) {
			throw new RuntimeException(c.getClass().getName() + "未设置xml配置地址注解，操作失败");
		}
		sqlSession.update(localtion.value() + ".updateByPrimaryKey", c);
	}

	public void delete(Serializable id, Class<?> c) {
		Localtion localtion = c.getAnnotation(Localtion.class);
		if (CheckUtils.isEmpty(localtion)) {
			throw new RuntimeException(c.getName() + "未设置xml配置地址注解，操作失败");
		}
		sqlSession.delete(localtion.value() + ".deleteByPrimaryKey", id);
	}

	public <T> T load(Serializable id, Class<T> c) {
		Localtion localtion = c.getAnnotation(Localtion.class);
		if (CheckUtils.isEmpty(localtion)) {
			throw new RuntimeException(c.getName() + "未设置xml配置地址注解，操作失败");
		}
		return sqlSession.selectOne(localtion.value() + ".selectByPrimaryKey", id);
	}

	public List<?> query(DataVo dataVo) {
		return sqlSession.selectList(dataVo.getQueryId(), dataVo.getQueryMap());
	}

	public int updateData(DataVo dataVo) {
		return sqlSession.update(dataVo.getQueryId(), dataVo.getQueryMap());
	}

	public List<?> query(String queryId, Object queryMap) {
		return sqlSession.selectList(queryId, queryMap);
	}

	public <T> T queryOne(String queryId, Object queryMap, Class<T> c) {
		List<T> list = sqlSession.selectList(queryId, queryMap);
		if (list != null) {
			if(list.size()>1){
				throw new RuntimeException("查询数据异常，返回多条结果");
			}
			return list.get(0);
		}
		return null;
	}

	public int count(String queryId, Object queryMap) {
		return sqlSession.selectOne(queryId, queryMap);
	}

	public void deleteData(String queryId, Object queryMap) {
		sqlSession.delete(queryId, queryMap);
	}
}