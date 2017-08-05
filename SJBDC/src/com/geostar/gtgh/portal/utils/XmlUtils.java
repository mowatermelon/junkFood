package com.geostar.gtgh.portal.utils;

import java.io.StringReader;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;

import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.springframework.core.io.Resource;

/**
 * xml工具类
 * 
 * @author hedongzhou
 *
 */
@SuppressWarnings("all")
public class XmlUtils {

	/**
	 * 对象转换成xml
	 * 
	 * @param obj
	 *            对象
	 * @return
	 */
	public static String toXml(Object obj) {
		StringWriter writer = null;
		try {
			JAXBContext context = JAXBContext.newInstance(obj.getClass());
			Marshaller marshaller = context.createMarshaller();
			marshaller.setProperty(Marshaller.JAXB_ENCODING, "UTF-8");
			marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
			writer = new StringWriter();
			marshaller.marshal(obj, writer);
			return writer.toString();
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {
			IOUtils.close(writer);
		}
	}

	/**
	 * xml转换成对象
	 * 
	 * @param <T>
	 * @param xml
	 *            xml字符串
	 * @param cls
	 *            对象类型
	 * @return
	 */
	public static <T> T toObject(String xml, Class<T> cls) {
		StringReader reader = null;

		try {
			reader = new StringReader(xml);

			JAXBContext context = JAXBContext.newInstance(cls);
			Unmarshaller unmarshaller = context.createUnmarshaller();

			return (T) unmarshaller.unmarshal(reader);
		} catch (Exception e) {
			throw new RuntimeException(e);
		} finally {
			IOUtils.close(reader);
		}
	}

	/**
	 * xml转换成对象
	 * 
	 * @param <T>
	 * @param res
	 *            xml源
	 * @param cls
	 *            对象类型
	 * @return
	 */
	public static <T> T toObject(Resource res, Class<T> cls) {
		try {
			JAXBContext context = JAXBContext.newInstance(cls);
			Unmarshaller unmarshaller = context.createUnmarshaller();

			return (T) unmarshaller.unmarshal(res.getInputStream());
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * 解析xml字符串成Map
	 * 
	 * @param xml
	 * @return
	 * @throws Exception
	 */
	public static Map<String, Object> parseToMap(String xml) throws Exception {
		if (CheckUtils.isNotEmpty(xml)) {
			Map<String, Object> map = new HashMap<String, Object>();
			parseToMap(DocumentHelper.parseText(xml).getRootElement(), map);
			return map;
		} else {
			return null;
		}
	}

	public static Map<String, Object> parseToMap(Element e) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		parseToMap(e, map);
		return map;
	}

	/**
	 * 遍历节点
	 * 
	 * @param element
	 * @param map
	 */
	public static void parseToMap(Element element, Map<String, Object> map) {
		if (element.isRootElement()) {
			Iterator<Element> it = element.elementIterator();
			while (it.hasNext()) {
				parseToMap(it.next(), map);
			}
		} else {
			String key = element.getName();
			Object value = null;

			if (element.isTextOnly()) {
				value = element.getTextTrim();
			} else {
				value = new HashMap<String, Object>();
				Iterator<Element> it = element.elementIterator();
				while (it.hasNext()) {
					parseToMap(it.next(), (Map<String, Object>) value);
				}
			}

			map.put(key, value);
		}
	}

}
