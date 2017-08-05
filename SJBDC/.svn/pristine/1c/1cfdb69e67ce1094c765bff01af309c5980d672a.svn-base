package com.geostar.gtgh.portal.utils;

import java.util.Random;
import java.util.UUID;

/**
 * 字符串工具类
 * 
 * @author hedongzhou
 * 
 */
public class StringUtils extends org.apache.commons.lang.StringUtils {

	/**
	 * 字符串转Unicode编码
	 * 
	 * @param str
	 * @return
	 */
	public static String string2Unicode(String str) {
		StringBuffer unicode = new StringBuffer();
		for (int i = 0; i < str.length(); i++) {
			char c = str.charAt(i);
			unicode.append("\\u" + Integer.toHexString(c));
		}
		return unicode.toString();
	}

	/**
	 * Unicode编码转字符串
	 * 
	 * @param unicode
	 * @return
	 */
	public static String unicode2String(String unicode) {
		StringBuffer string = new StringBuffer();
		String[] hex = unicode.split("\\\\u");
		for (int i = 1; i < hex.length; i++) {
			int data = Integer.parseInt(hex[i], 16);
			string.append((char) data);
		}
		return string.toString();
	}

	/**
	 * 转换成字符串
	 * 
	 * @param obj
	 * @return
	 */
	public static String value(Object obj) {
		if (obj == null) {
			return null;
		} else {
			return String.valueOf(obj);
		}
	}

	/**
	 * 生成UUID
	 * 
	 * @return
	 */
	public static String getUUID() {
		return UUID.randomUUID().toString();
	}

	/**
	 * 获取随机数
	 * 
	 * @param length
	 *            长度
	 * @return
	 */
	public static String getRandom(int length) {
		// 35是因为数组是从0开始的，26个字母+10个数字
		int maxNum = 36;
		// 生成的随机数
		int i;
		// 生成的密码的长度
		int count = 0;
		char[] str = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };
		StringBuffer randomStr = new StringBuffer();
		Random r = new Random();
		while (count < length) {
			// 生成随机数，取绝对值，防止生成负数，
			i = Math.abs(r.nextInt(maxNum)); // 生成的数最大为36-1
			if (i >= 0 && i < str.length) {
				randomStr.append(str[i]);
				count++;
			}
		}

		return randomStr.toString();
	}

	/**
	 * 多个字符串与比较值进行比较，忽略大小写，如果存在一个值相等的，返回true
	 * 
	 * @param compare
	 *            比较值
	 * @param strs
	 * @return
	 */
	public static boolean equalOneIgnoreCase(String compare, String... strs) {
		for (String str : strs) {
			if (compare.equalsIgnoreCase(str)) {
				return true;
			}
		}

		return false;
	}

	/**
	 * 多个字符串与比较值进行比较，如果存在一个值相等的，返回true
	 * 
	 * @param compare
	 *            比较值
	 * @param strs
	 * @return
	 */
	public static boolean equalOne(String compare, String... strs) {
		for (String str : strs) {
			if (compare.equals(str)) {
				return true;
			}
		}

		return false;
	}

	/**
	 * 多个字符串与比较值进行比较，如果存在一个值相等的，返回true
	 * 
	 * @param compare
	 *            比较值
	 * @param strs
	 * @return
	 */
	public static boolean equalOne(char compare, String... strs) {
		String c = String.valueOf(compare);

		for (String str : strs) {
			if (c.equals(str)) {
				return true;
			}
		}

		return false;
	}

	/**
	 * 去掉头尾空格，如果为null，则返回空字符串
	 * 
	 * @param str
	 * @return
	 */
	public static String trim(String str) {
		return trimToEmpty(str);
	}

	/**
	 * 字符串替换
	 * @param strSource 原始字符串
	 * @param strFrom 原始字符串中需要替换的部分	
	 * @param strTo 将替换成的部分
	 * @return
	 */
	public static String replace(String strSource, String strFrom, String strTo) {
		if (strSource == null) {
			return null;
		}
		int i = 0;
		if ((i = strSource.indexOf(strFrom, i)) >= 0) {
			char[] cSrc = strSource.toCharArray();
			char[] cTo = strTo.toCharArray();
			int len = strFrom.length();
			StringBuffer buf = new StringBuffer(cSrc.length);
			buf.append(cSrc, 0, i).append(cTo);
			i += len;
			int j = i;
			while ((i = strSource.indexOf(strFrom, i)) > 0) {
				buf.append(cSrc, j, i - j).append(cTo);
				i += len;
				j = i;
			}
			buf.append(cSrc, j, cSrc.length - j);
			return buf.toString();
		}
		return strSource;
	}
	public static void main(String[] args) {
		String string =replace("abcefg", "abc", "123");
		System.out.println(string);
	}
}
