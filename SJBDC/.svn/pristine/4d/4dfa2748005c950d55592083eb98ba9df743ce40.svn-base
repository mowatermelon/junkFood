package com.geostar.gtgh.portal.utils;

import java.io.IOException;
import java.io.Reader;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.core.io.Resource;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.geostar.gtgh.portal.core.entity.Zspcfl;

/**
 * JSON处理类
 * 
 * @author hedongzhou
 * 
 */
public class JSONUtils {

	private static ObjectMapper mapper = new ObjectMapper();

	static {
		mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
		mapper.configure(MapperFeature.SORT_PROPERTIES_ALPHABETICALLY, true);
		mapper.setDateFormat(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));
		mapper.getSerializerProvider().setNullValueSerializer(new JsonSerializer<Object>() {
			public void serialize(Object obj, JsonGenerator json, SerializerProvider provider) throws IOException, JsonProcessingException {
				json.writeString("");
			}
		});
	}

	/**
	 * 获取JSON节点对象
	 * 
	 * @param jsonStr
	 * @return
	 */
	public static JsonNode toJsonNode(String jsonStr) {
		try {
			return mapper.readTree(jsonStr);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * 根据路径获取JSON节点对象
	 * 
	 * @param jsonStr
	 * @param path
	 * @return
	 */
	public static JsonNode toJsonNode(String jsonStr, String path) {
		JsonNode node = toJsonNode(jsonStr);

		boolean numFlag = false;
		String num = "";
		char[] arr = path.toCharArray();
		int j = 0;
		for (int i = 0; i < arr.length; i++) {
			char one = arr[i];

			if (one == '.') {
				if (arr[i - 1] != ']') {
					node = node.path(path.substring(j, i));
				}
				j = i + 1;
			} else if (one == '[') {
				node = node.path(path.substring(j, i));
				j = i + 1;
				numFlag = true;
			} else if (one == ']') {
				numFlag = false;
				j = i + 1;
				node = node.get(Integer.valueOf(num));
			} else if (numFlag) {
				num += String.valueOf(one);
			}
		}

		if (j != arr.length) {
			node = node.path(path.substring(j));
		}

		return node;
	}

	/**
	 * 获取JSON格式字符串
	 * 
	 * @param obj
	 * @return
	 */
	public static String toString(Object obj) {
		if (obj == null) {
			return "";
		} else {
			try {
				return mapper.writeValueAsString(obj);
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
		}
	}

	/**
	 * 获取JSON格式字符串
	 * 
	 * @param reader
	 * @return
	 */
	public static String toString(Reader reader) {
		try {
			return mapper.readTree(reader).toString();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * JSON格式字符串转换成目标对象
	 * 
	 * @param <T>
	 * @param jsonStr
	 *            JSON格式字符串
	 * @param cls
	 *            目标对象类型
	 * @return
	 */
	public static <T> T toObject(String jsonStr, Class<T> cls) {
		
		try {
			return mapper.readValue(jsonStr, cls);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/**
	 * JSON格式字符串转换成目标集合对象
	 * 
	 * @param <T>
	 * @param jsonStr
	 *            JSON格式字符串
	 * @param cls
	 *            目标对象类型
	 * @return
	 */
	public static <T> T toList(String jsonStr, Class<T> cls) {
		JavaType javaType = getCollectionType(ArrayList.class, cls);
		try {
			return mapper.readValue(jsonStr, javaType);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	private static JavaType getCollectionType(Class<?> collectionClass, Class<?>... elementClasses) {
		return mapper.getTypeFactory().constructParametricType(collectionClass, elementClasses);
	}

	/**
	 * JSON格式字符串转换成目标对象
	 * 
	 * @param <T>
	 * @param res
	 *            json源
	 * @param cls
	 *            目标对象类型
	 * @return
	 */
	public static <T> T toObject(Resource res, Class<T> cls) {
		try {
			return (T) mapper.readValue(res.getInputStream(), cls);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * 将json array反序列化为对象
	 *
	 * @param json
	 * @param jsonTypeReference
	 * @return
	 */
	public static <T> T decode(String json, TypeReference<T> jsonTypeReference) {
		try {
			return (T) mapper.readValue(json, jsonTypeReference);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
