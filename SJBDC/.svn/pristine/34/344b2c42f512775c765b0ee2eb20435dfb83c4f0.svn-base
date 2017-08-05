package com.geostar.gtgh.portal.utils;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Map;

/**
 * 容器工具类
 * 
 * @author hedongzhou
 * 
 */
@SuppressWarnings("all")
public class ContainerUtils {

	/**
	 * 合并数组
	 * 
	 * @param first
	 *            第一个数组
	 * @param rest
	 *            多个数组
	 * @return
	 */
	public static <T> T[] concat(T[] first, T[]... rest) {
		if (CheckUtils.isNotEmpty(rest)) {
			int totalLength = first.length;

			for (T[] array : rest) {
				totalLength += array.length;
			}

			int offset = first.length;
			first = Arrays.copyOf(first, totalLength);
			for (T[] array : rest) {
				System.arraycopy(array, 0, first, offset, array.length);
				offset += array.length;
			}
		}

		return first;
	}

	/**
	 * 集合转变成Array
	 * 
	 * @param collection
	 * @param cls
	 * @return
	 */
	public static <T> T[] toArray(Collection<T> collection, Class<T> cls) {
		return collection.toArray((T[]) Array.newInstance(cls, 0));
	}

	/**
	 * Array转变成List
	 * 
	 * @param objects
	 * @return
	 */
	public static <T> List<T> toList(T... objects) {
		return Arrays.asList(objects);
	}

	/**
	 * 判断集合是否为空，或无数据
	 * 
	 * @param collection
	 * @return
	 */
	public static boolean collectionIsEmpty(Collection<?> collection) {
		if (collection != null && collection.size() > 0) {
			return false;
		}
		return true;
	}

	/**
	 * 判断集合是否不为空，并且有数据
	 * 
	 * @param collection
	 * @return
	 */
	public static boolean collectionIsNotEmpty(Collection<?> collection) {
		return !collectionIsEmpty(collection);
	}

	/**
	 * 判断Map是否为空，或无数据
	 * 
	 * @param map
	 * @return
	 */
	public static boolean mapIsEmpty(Map<?, ?> map) {
		if (map == null || map.isEmpty()) {
			return true;
		}
		return false;
	}

	/**
	 * 判断Map是否不为空，并且有数据
	 * 
	 * @param map
	 * @return
	 */
	public static boolean mapIsNotEmpty(Map<?, ?> map) {
		return !mapIsEmpty(map);
	}

	/**
	 * 判断Map中是否存在NotEmpty的元素
	 * 
	 * @param map
	 * @param keys
	 * @return
	 */
	public static boolean mapHasAll(Map<?, ?> map, Object... keys) {
		if (mapIsEmpty(map)) {
			return false;
		}

		for (Object key : keys) {
			if (!map.containsKey(key) || map.get(key) == null || CheckUtils.isEmpty(map.get(key))) {
				return false;
			}
		}

		return true;
	}

	/**
	 * 判断Map中是否存在一个NotEmpty的元素
	 * 
	 * @param map
	 * @param keys
	 * @return
	 */
	public static boolean mapHasOne(Map<?, ?> map, Object... keys) {
		if (mapIsEmpty(map)) {
			return false;
		}

		for (Object key : keys) {
			if (mapHasAll(map, key)) {
				return true;
			}
		}

		return false;
	}

	/**
	 * 获取长度
	 * 
	 * @param collection
	 * @return
	 */
	public static int count(Collection<?> collection) {
		return collectionIsEmpty(collection) ? 0 : collection.size();
	}

	/**
	 * 获取长度
	 * 
	 * @param map
	 * @return
	 */
	public static int count(Map<?, ?> map) {
		return mapIsEmpty(map) ? 0 : map.size();
	}

}
