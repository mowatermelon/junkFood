package com.geostar.gtgh.portal.utils;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Map;

import net.sf.jxls.transformer.XLSTransformer;

import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.core.io.Resource;

/**
 * jxls工具类
 *
 * @author caolei
 *
 */
@SuppressWarnings("all")
public class JxlsUtils {

	private static final XLSTransformer former = new XLSTransformer();

	/**
	 * 导出Excel
	 * 
	 * @param params
	 *            参数
	 * @param pathPattern
	 *            路径匹配符
	 * @param out
	 *            输出
	 * @throws Exception
	 */
	public static void toExcel(Object params, String pathPattern, OutputStream out) throws Exception {
		Resource resource = IOUtils.loadOneResource(pathPattern);

		if (resource == null) {
			throw new IOException("未能找到资源：" + pathPattern);
		}

		InputStream in = null;
		try {
			in = resource.getInputStream();

			toExcel(params, in, out);
		} finally {
			IOUtils.close(in);
		}
	}

	/**
	 * 导出Excel
	 * 
	 * @param params
	 *            参数
	 * @param in
	 *            输入
	 * @param out
	 *            输出
	 * @throws Exception
	 */
	public static void toExcel(Object params, InputStream in, OutputStream out) throws Exception {
		Map realParams = null;

		if (params instanceof Map) {
			realParams = (Map) params;
		} else {
			realParams = ReflectUtils.getFieldValue(params);
		}

		Workbook workbook = former.transformXLS(in, realParams);
		workbook.write(out);
		out.flush();
	}

}
