package com.geostar.gtgh.portal.utils;

import java.math.BigDecimal;

/**
 * 数字工具
 *
 * @author hedongzhou
 *
 */
public class MathUtils {

	/**
	 * 是否为整数
	 * 
	 * @param value
	 * @return
	 */
	public static boolean isInt(Object value) {
		return getDouble(value) == getInt(value);
	}

	/**
	 * 获取int
	 * 
	 * @param value
	 * @return
	 */
	public static int getInt(Object value) {
		if (CheckUtils.isNotEmpty(value)) {
			if (Number.class.isAssignableFrom(value.getClass())) {
				return ((Number) value).intValue();
			} else {
				return Integer.valueOf(String.valueOf(value));
			}
		}

		return 0;
	}

	/**
	 * 获取long
	 * 
	 * @param value
	 * @return
	 */
	public static long getLong(Object value) {
		if (CheckUtils.isNotEmpty(value)) {
			if (Number.class.isAssignableFrom(value.getClass())) {
				return ((Number) value).longValue();
			} else {
				return Long.valueOf(String.valueOf(value));
			}
		}

		return 0L;
	}

	/**
	 * 获取double
	 * 
	 * @param value
	 * @return
	 */
	public static double getDouble(Object value) {
		if (CheckUtils.isNotEmpty(value)) {
			if (Number.class.isAssignableFrom(value.getClass())) {
				return ((Number) value).doubleValue();
			} else {
				return Double.valueOf(String.valueOf(value));
			}
		}

		return 0;
	}

	/**
	 * 获取BigDecimal
	 * 
	 * @param value
	 * @return
	 */
	public static BigDecimal getBigDecimal(Object value) {
		if (CheckUtils.isNotEmpty(value)) {
			if (Number.class.isAssignableFrom(value.getClass())) {
				return BigDecimal.valueOf(((Number) value).doubleValue());
			} else {
				return new BigDecimal(String.valueOf(value));
			}
		}

		return BigDecimal.ZERO;
	}

}
