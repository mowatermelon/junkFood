package com.geostar.gtgh.portal.interceptor;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.ibatis.executor.parameter.ParameterHandler;
import org.apache.ibatis.executor.statement.RoutingStatementHandler;
import org.apache.ibatis.executor.statement.StatementHandler;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.mapping.ParameterMapping;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Plugin;
import org.apache.ibatis.plugin.Signature;
import org.apache.ibatis.scripting.defaults.DefaultParameterHandler;

import com.geostar.gtgh.portal.utils.CheckUtils;
import com.geostar.gtgh.portal.utils.LogUtils;
import com.geostar.gtgh.portal.utils.ReflectUtils;
import com.geostar.gtgh.portal.vo.Page;

/**
 * 分布查询插件
 * @author caolei
 *
 */
@Intercepts({ @Signature(type = StatementHandler.class, method = "prepare", args = { Connection.class }) })
public class PageInterceptor implements Interceptor {
	private String dialect; // 数据库方言
	private String pageSqlId; // mapper.xml中需要拦截的ID(正则匹配)
	public static final String MYSQL = "mysql";
	public static final String ORACLE = "oracle";

	public Object intercept(Invocation invocation) throws Throwable {

		if (invocation.getTarget() instanceof StatementHandler) { // 控制SQL和查询总数的地方
			RoutingStatementHandler handler = (RoutingStatementHandler) invocation.getTarget();
			StatementHandler delegate = (StatementHandler) ReflectUtils.getFieldValue(handler, "delegate");
			MappedStatement mappedStatement = (MappedStatement) ReflectUtils.getFieldValue(delegate, "mappedStatement");
			ParameterHandler parameterHandler = (ParameterHandler) ReflectUtils.getFieldValue(delegate, "parameterHandler");
			Object queryObj = parameterHandler.getParameterObject();
			LogUtils.error("=========>:::"+queryObj);
			BoundSql boundSql = delegate.getBoundSql();

			LogUtils.error("sql查询语句============>>>" + boundSql.getSql());

			if (!validQueryId(mappedStatement.getId())) {// 如果检查查询sql语句不合法，不进行分布操作
				return invocation.proceed();
			}

			if (boundSql.getSql().toLowerCase().indexOf("select") == -1) {// 安全较验，如果不是查询语句，则不进行分页
				LogUtils.error("===================>: 警告信息：非查询语句请勿设置id为queryPage开头");
				return invocation.proceed();
			}
			Object parameterObj = boundSql.getParameterObject();
			Page<?> page = findPageObject(parameterObj);

			if (page == null) {
				LogUtils.error("=================>:提示信息：没有Page对象作为参数, 不是分页查询.");
				return invocation.proceed();
			}
			// 后面必须是分页查询了
			Connection connection = (Connection) invocation.getArgs()[0];
			prepareAndCheckDatabaseType(connection); // 验证和准备数据库类型

			queryTotalRecord(page, parameterObj, mappedStatement, connection);

			String sql = boundSql.getSql();
			String pageSql = buildPageSql(page, sql);
			LogUtils.info("生成分页sql: " + pageSql);
			ReflectUtils.setFieldValue(boundSql, "sql", pageSql);

		}
		return invocation.proceed();

	}

	/**
	 * <pre>
	 * 生成分页SQL
	 * </pre>
	 * 
	 * @author caolei
	 * @param page
	 * @param sql
	 * @return
	 */
	protected String buildPageSql(Page<?> page, String sql) {
		if (MYSQL.equalsIgnoreCase(dialect)) {
			return buildMysqlPageSql(page, sql);
		} else if (ORACLE.equalsIgnoreCase(dialect)) {
			return buildOraclePageSql(page, sql);
		}
		return sql;
	}

	/**
	 * <pre>
	 * 生成Mysql分页查询SQL
	 * </pre>
	 * 
	 * @author caolei
	 * @param page
	 * @param sql
	 * @return
	 */
	protected String buildMysqlPageSql(Page<?> page, String sql) {
		// 计算第一条记录的位置，Mysql中记录的位置是从0开始的。
		int offset = page.getOffset();// (page.getPageNo() - 1) *
										// page.getPageSize();
		return new StringBuilder(sql).append(" limit ").append(offset).append(",").append(page.getLimit()).toString();
	}

	/**
	 * <pre>
	 * 生成Oracle分页查询SQL
	 * </pre>
	 * 
	 * @author caolei
	 * @param page
	 * @param sql
	 * @return
	 */
	protected String buildOraclePageSql(Page<?> page, String sql) {
		// 计算第一条记录的位置，Oracle分页是通过rownum进行的，而rownum是从1开始的
		int offset = page.getOffset() + 1;// (page.getPageNo() - 1) *
											// page.getPageSize() + 1;
		StringBuilder sb = new StringBuilder(sql);
		sb.insert(0, "select u.*, rownum r from (").append(") u where rownum < ").append(page.getOffset() + page.getLimit() + 1);
		sb.insert(0, "select * from (").append(") where r >= ").append(offset);
		return sb.toString();
	}

	/**
	 * <pre>
	 * 查询总数
	 * </pre>
	 * 
	 * @author caolei
	 * @param page
	 * @param parameterObject
	 * @param mappedStatement
	 * @param connection
	 * @throws SQLException
	 */
	protected void queryTotalRecord(Page<?> page, Object parameterObject, MappedStatement mappedStatement, Connection connection) throws SQLException {

		BoundSql boundSql = mappedStatement.getBoundSql(parameterObject);
		String sql = boundSql.getSql();
		String countSql = this.buildCountSql(sql);

		LogUtils.error("分页时, 生成countSql========>>> " + countSql);

		List<ParameterMapping> parameterMappings = boundSql.getParameterMappings();
		BoundSql countBoundSql = new BoundSql(mappedStatement.getConfiguration(), countSql, parameterMappings, parameterObject);
		ParameterHandler parameterHandler = new DefaultParameterHandler(mappedStatement, parameterObject, countBoundSql);
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			pstmt = connection.prepareStatement(countSql);
			parameterHandler.setParameters(pstmt);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				page.setTotal(rs.getLong(1));
			}
		} finally {
			if (rs != null)
				try {
					rs.close();
				} catch (Exception e) {
					LogUtils.error("关闭ResultSet时异常.", e);

				}
			if (pstmt != null)
				try {
					pstmt.close();
				} catch (Exception e) {
					LogUtils.error("关闭PreparedStatement时异常.", e);
				}
		}
	}

	/**
	 * 根据原Sql语句获取对应的查询总记录数的Sql语句
	 * 
	 * @param sql
	 * @return
	 */
	protected String buildCountSql(String sql) {
		return "select  count(*) from(" + sql + ")";
	}

	/**
	 * 验证或者获取数据库连接类型
	 * 
	 * @param connection
	 * @throws SQLException
	 */
	protected void prepareAndCheckDatabaseType(Connection connection) throws SQLException {
		if (dialect == null) {
			String productName = connection.getMetaData().getDatabaseProductName();

			LogUtils.error("Database productName: " + productName);

			productName = productName.toLowerCase();
			if (productName.indexOf(MYSQL) != -1) {
				dialect = MYSQL;
			} else if (productName.indexOf(ORACLE) != -1) {
				dialect = ORACLE;
			} else {
				throw new RuntimeException("未知的数据类型，请自行扩展后使用");
			}

		} else {
			if (!dialect.equalsIgnoreCase(MYSQL) && !dialect.equalsIgnoreCase(ORACLE)) {
				throw new RuntimeException("不支持的数据连接类型，请自行扩展后使用");
			}
		}
	}

	/**
	 * 找出参数中的Page创面对象
	 * 
	 * @param parameterObj
	 * @return
	 */
	protected Page<?> findPageObject(Object parameterObj) {
		if (parameterObj instanceof Page) {
			return (Page<?>) parameterObj;
		} else if (parameterObj instanceof Map) {
			for (Object val : ((Map<?, ?>) parameterObj).values()) {
				if (val instanceof Page) {
					return (Page<?>) val;
				}
			}
		}
		return null;
	}

	/**
	 * 验证查询id是否符合格式
	 * 
	 * @param id
	 * @return
	 */
	private boolean validQueryId(String id) {
		if (id.indexOf(".") != -1) {
			String[] ids = id.split("\\.");
			if (CheckUtils.isNotEmpty(ids))
				id = ids[ids.length - 1];
		}
		if (CheckUtils.isEmpty(pageSqlId)) {
			LogUtils.error("===================>: 警告信息：pageSqlId为空");
			return false;
		}
		Pattern pattern = Pattern.compile(pageSqlId);
		Matcher matcher = pattern.matcher(id);
		return matcher.matches();
	}

	/**
	 * 拦截器对应的封装原始对象的方法
	 */
	public Object plugin(Object arg0) {
		if (arg0 instanceof StatementHandler) {
			return Plugin.wrap(arg0, this);
		} else {
			return arg0;
		}
	}

	/**
	 * 设置注册拦截器时设定的属性
	 */
	public void setProperties(Properties p) {
		this.dialect = p.getProperty("dialect");
		this.pageSqlId = p.getProperty("pageSqlId");
	}

	public String getDialect() {
		return dialect;
	}

	public void setDialect(String dialect) {
		this.dialect = dialect;
	}

	public String getPageSqlId() {
		return pageSqlId;
	}

	public void setPageSqlId(String pageSqlId) {
		this.pageSqlId = pageSqlId;
	}

}