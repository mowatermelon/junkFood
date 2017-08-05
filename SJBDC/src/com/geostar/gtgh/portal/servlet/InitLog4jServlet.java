package com.geostar.gtgh.portal.servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

/**
 * 指定mybatis打印sql交给log4J处理
 * 
 * @author caolei
 *
 */
public class InitLog4jServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	@Override
	public void init() throws ServletException {
		super.init();
		org.apache.ibatis.logging.LogFactory.useLog4JLogging();
		System.out.println("************tell mybatis use log4j************");
	}

}