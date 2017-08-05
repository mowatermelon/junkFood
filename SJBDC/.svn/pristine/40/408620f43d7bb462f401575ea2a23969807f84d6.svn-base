package com.geostar.gtgh.portal.interceptor;

import java.sql.Blob;
import java.sql.Clob;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import oracle.sql.BLOB;
import oracle.sql.CLOB;

import org.apache.ibatis.executor.parameter.ParameterHandler;
import org.apache.ibatis.executor.resultset.DefaultResultSetHandler;
import org.apache.ibatis.executor.resultset.ResultSetHandler;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.mapping.ResultMap;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Plugin;

import com.geostar.gtgh.portal.utils.JSONUtils;
import com.geostar.gtgh.portal.utils.LogUtils;
import com.geostar.gtgh.portal.utils.ReflectUtils;

/**
 * 拦截返回值，设置oracle的blob与clob字体与返回结果类型的映射
 * 
 * @author caolei
 *
 */
@Intercepts({ @org.apache.ibatis.plugin.Signature(method = "handleResultSets", type = ResultSetHandler.class, args = { Statement.class }) })
public class ResultHandlerInterceptor implements Interceptor {
	public Object intercept(Invocation invocation) throws Throwable {
		DefaultResultSetHandler defaultResultSetHandler = (DefaultResultSetHandler) invocation.getTarget();

		/**
		 * 判断是否认证通过，不通过走默认拦截器
		 */
		if (validateReturnType(defaultResultSetHandler) || validateSql(defaultResultSetHandler)) {
			return invocation.proceed();
		}

		ParameterHandler parameterHandler = (ParameterHandler) ReflectUtils.getFieldValue(defaultResultSetHandler, "parameterHandler");
		Object parameterObj = parameterHandler.getParameterObject();
		// 判断ParameterObj是否是我们定义的MapParam，如果是则进行自己的处理逻辑
		if (parameterObj instanceof HashMap) {
			ResultSet rs = null;
			try {
				Statement statement = (Statement) invocation.getArgs()[0];
				rs = (ResultSet) statement.getResultSet();
				ResultSetMetaData md = rs.getMetaData(); // 得到结果集(rs)的结构信息，比如字段数、字段名等
				int columnCount = md.getColumnCount(); // 返回此 ResultSet 对象中的列数
				List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>();
				Map<String, Object> rowData = null;
				while (rs.next()) {
					rowData = new HashMap<String, Object>(columnCount);
					for (int i = 1; i <= columnCount; i++) {
						/**
						 * 如果是oracle的blob字段，转换成二进制字节数组
						 */
						if (rs.getObject(i) instanceof BLOB) {
							Blob blob = rs.getBlob(i);
							byte[] returnValue = null;
							if (null != blob) {
								returnValue = blob.getBytes(1, (int) blob.length());
							}
							rowData.put(md.getColumnName(i), returnValue);
							/**
							 * 如果是oracle clob字段，直接转换成String
							 */
						} else if (rs.getObject(i) instanceof CLOB) {
							String value = "";
							Clob clob = rs.getClob(i);
							if (clob != null) {
								int size = (int) clob.length();
								value = clob.getSubString(1, size);
							}
							rowData.put(md.getColumnName(i), value);

						} else {
							/**
							 * 其它类型不做细分，需要的时候再进行扩展，目前不进行支持
							 */
							rowData.put(md.getColumnName(i), rs.getObject(i));
						}
					}
					resultList.add(rowData);
				}

				return resultList;
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				closeResultSet(rs);
			}
		}

		return invocation.proceed();
	}

	/**
	 * 判断 是否是查询语句，非查询语句不拦截
	 * 
	 * @param defaultResultSetHandler
	 * @return
	 */
	private boolean validateSql(DefaultResultSetHandler defaultResultSetHandler) {
		BoundSql boundSql = (BoundSql) ReflectUtils.getFieldValue(defaultResultSetHandler, "boundSql");
		if (boundSql.getSql().toLowerCase().indexOf("select") == -1) {// 安全较验，如果不是查询语句，则不进行分页
			LogUtils.info("===================>: 警告信息：非查询语句自动进入默认拦截器");
			return true;
		}
		return false;
	}

	/**
	 * 判断是否返回值类型符合要求
	 * 
	 * @param defaultResultSetHandler
	 * @return
	 */
	private boolean validateReturnType(DefaultResultSetHandler defaultResultSetHandler) {
		MappedStatement ms = (MappedStatement) ReflectUtils.getFieldValue(defaultResultSetHandler, "mappedStatement");
		/**
		 * 获取sql的返回值类型
		 */
		List<ResultMap> rms = ms.getResultMaps();
		ResultMap rm = rms != null && rms.size() > 0 ? rms.get(0) : null;
		String type = rm != null && rm.getType() != null ? rm.getType().getName() : null;
		/**
		 * 如果定义的不是返回map类型，刚走默认拦截器
		 */
		for (String returnType : returnTypes) {
			if (type != null && !type.equals(returnType)) {
				LogUtils.info("===================>: 警告信息：返回值类型不匹配，自动进入默认拦截器");
				return true;
			}
		}

		return false;
	}

	/**
	 * 关闭ResultSet
	 * 
	 * @param resultSet
	 *            需要关闭的ResultSet
	 */
	private void closeResultSet(ResultSet resultSet) {
		try {
			if (resultSet != null) {
				resultSet.close();
			}
		} catch (SQLException e) {

		}
	}

	/**
	 * 插件入口
	 */
	public Object plugin(Object arg0) {
		if (arg0 instanceof DefaultResultSetHandler) {
			return Plugin.wrap(arg0, this);
		} else {
			return arg0;
		}
	}

	public void setProperties(Properties p) {}

	private List<String> returnTypes;

	public List<String> getReturnTypes() {
		return returnTypes;
	}

	public void setReturnTypes(List<String> returnTypes) {
		this.returnTypes = returnTypes;
	}

}