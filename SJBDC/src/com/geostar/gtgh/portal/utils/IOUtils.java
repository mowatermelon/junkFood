package com.geostar.gtgh.portal.utils;

import java.io.Closeable;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Properties;

import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.util.PatternMatchUtils;

/**
 * IO工具类
 * 
 * @author hedongzhou
 * 
 */
public class IOUtils extends org.apache.commons.io.IOUtils {

	/**
	 * 资源解析
	 */
	public final static PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();

	/**
	 * 路径匹配
	 * 
	 * @param pattern
	 *            匹配符
	 * @param path
	 *            路径
	 * @return
	 */
	public static boolean match(String pattern, String path) {
		return PatternMatchUtils.simpleMatch(pattern, path);
	}

	/**
	 * 路径匹配
	 * 
	 * @param pattern
	 *            匹配符
	 * @param path
	 *            路径
	 * @return
	 */
	public static boolean match(String[] pattern, String path) {
		return PatternMatchUtils.simpleMatch(pattern, path);
	}

	/**
	 * 获取classpath下的配置信息
	 * 
	 * @param pathPattern
	 *            资源路径
	 * @return
	 * @throws IOException
	 */
	public static Properties loadProperty(String pathPattern)
			throws IOException {
		InputStream is = null;
		Resource res = loadOneResource(pathPattern);

		try {
			is = res.getInputStream();
			Properties pro = new Properties();
			pro.load(is);
			return pro;
		} finally {
			if (is != null) {
				is.close();
			}
		}
	}

	/**
	 * 判断资源是否存在
	 * 
	 * @param res
	 *            资源
	 * @return
	 */
	public static boolean isExist(Resource res) {
		if (res == null || !res.exists()) {
			return false;
		} else {
			return true;
		}
	}

	/**
	 * 获取classpath下的一个资源
	 * 
	 * @param pathPattern
	 *            资源路径
	 * @return 如果查询不到，则返回null
	 */
	public static Resource loadOneResource(String pathPattern) {
		Resource[] res = loadResource(pathPattern);

		if (res != null) {
			return res[0];
		} else {
			return null;
		}
	}

	/**
	 * 获取classpath下的资源
	 * 
	 * @param pathPatterns
	 *            资源路径
	 * @return 如果查询不到，则返回null
	 */
	public static Resource[] loadResource(Collection<String> pathPatterns) {
		return loadResource(ContainerUtils.toArray(pathPatterns, String.class));
	}

	/**
	 * 获取classpath下的资源
	 * 
	 * @param pathPatterns
	 *            资源路径
	 * @return 如果查询不到，则返回null
	 */
	public static Resource[] loadResource(String... pathPatterns) {
		Resource[] res = null;

		List<Resource> list = new ArrayList<Resource>();
		try {
			for (String pathPattern : pathPatterns) {
				Resource[] arr = resolver.getResources(pathPattern);

				for (Resource one : arr) {
					if (isExist(one)) {
						list.add(one);
					}
				}
			}
		} catch (IOException exception) {
		}

		if (list.size() > 0) {
			res = list.toArray(new Resource[0]);
		}

		return res;
	}

	/**
	 * 关闭IO
	 * 
	 * @param io
	 */
	public static void close(Closeable io) {
		try {
			if (io != null) {
				io.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 将资源文件解析成字符串
	 * 
	 * @param resource
	 * @return
	 * @throws Exception
	 */
	public static String getStringFormResource(Resource resource)
			throws Exception {
		InputStream is = null;
		try {
			if (resource == null || !resource.exists()) {
				throw new Exception("未找到文件");
			}
			is = resource.getInputStream();
			byte[] keyBytes = new byte[is.available()];
			is.read(keyBytes);
			return new String(keyBytes, "UTF-8");
		} finally {
			if (is != null) {
				is.close();
			}
		}

	}
}
