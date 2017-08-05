package com.geostar.gtgh.portal.utils;

import java.lang.reflect.Field;
import java.util.Collection;
import java.util.Map;

import com.geostar.gtgh.portal.annotation.NotNull;
import com.geostar.gtgh.portal.utils.ReflectUtils.LoopClassFieldDeal;

/**
 * 检查工具类
 * 
 * @author hedongzhou
 * 
 */
@SuppressWarnings("all")
public class CheckUtils {

	/**
	 * 非空校验
	 * 
	 * @param Obj
	 *            对象
	 * @param errExpr
	 *            错误信息表达式，如“%s不能为空”，%s代表字段名称或者NotNull注解的值
	 * @return
	 */
	public static void checkNotNull(Object Obj, final String errExpr) {
		final Object temp = Obj;

		ReflectUtils.loopClassField(temp.getClass(), new LoopClassFieldDeal() {
			public boolean deal(Field field) {
				NotNull check = field.getAnnotation(NotNull.class);

				if (check != null) {
					field.setAccessible(true);

					Object value = null;
					try {
						value = field.get(temp);
					} catch (Exception e) {
						throw new RuntimeException(e);
					}

					if (isEmpty(value)) {
						String name = check.value();

						if (isEmpty(name)) {
							name = field.getName();
						}

						throw new RuntimeException(String.format(errExpr, name));
					}
				}

				return true;
			}
		});
	}

	/**
	 * 判断Map中是否存在NotEmpty的元素
	 * 
	 * @param map
	 * @param keys
	 * @return
	 */
	public static boolean has(Map<?, ?> map, Object... keys) {
		return ContainerUtils.mapHasAll(map, keys);
	}

	/**
	 * 判断Map中是否存在一个NotEmpty的元素
	 * 
	 * @param map
	 * @param keys
	 * @return
	 */
	public static boolean hasOne(Map<?, ?> map, Object... keys) {
		return ContainerUtils.mapHasOne(map, keys);
	}

	/**
	 * 是否等于其中一个
	 * 
	 * @param compare
	 *            比较值
	 * @param values
	 *            值数组
	 * @return
	 */
	public static <T> boolean equalOne(T compare, T... values) {
		if (compare == null || CheckUtils.isEmpty(values)) {
			return false;
		} else if (compare instanceof String) {
			return StringUtils.equalOne((String) compare, (String[]) values);
		} else if (ReflectUtils.isBaseType(compare)) {
			for (T value : values) {
				if (compare == value) {
					return true;
				}
			}
		}

		return false;
	}

	/**
	 * 只要有一个对象为空，则返回true
	 * 
	 * @param objs
	 * @return
	 */
	public static boolean isOneEmpty(Object... objs) {
		if (isEmpty(objs)) {
			return true;
		}

		for (Object one : objs) {
			if (isEmpty(one)) {
				return true;
			}
		}

		return false;
	}

	/**
	 * 所有的对象都不为空
	 * 
	 * @param objs
	 * @return
	 */
	public static boolean isNoOneEmpty(Object... objs) {
		return !isOneEmpty(objs);
	}

	/**
	 * 判断是否为空
	 * 
	 * @param objs
	 * @return
	 */
	public static boolean isEmpty(Object[] objs) {
		if (objs == null || objs.length == 0) {
			return true;
		}

		return false;
	}

	/**
	 * 判断是否不为空
	 * 
	 * @param objs
	 * @return
	 */
	public static boolean isNotEmpty(Object[] objs) {
		return !isEmpty(objs);
	}

	/**
	 * 判断是否为空
	 * 
	 * @param obj
	 * @return
	 */
	public static boolean isEmpty(Object obj) {
		if (obj == null) {
			return true;
		} else if (obj instanceof String && StringUtils.isBlank((String) obj)) {
			return true;
		} else if (obj instanceof Collection && ContainerUtils.collectionIsEmpty((Collection<?>) obj)) {
			return true;
		} else if (obj instanceof Map && ContainerUtils.mapIsEmpty((Map<?, ?>) obj)) {
			return true;
		}
		return false;
	}

	/**
	 * 判断是否不为空
	 * 
	 * @param <T>
	 * @param obj
	 * @return
	 */
	public static <T> boolean isNotEmpty(Object obj) {
		return !isEmpty(obj);
	}

}
