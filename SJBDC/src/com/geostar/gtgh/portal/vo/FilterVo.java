package com.geostar.gtgh.portal.vo;

/**
 * 对返回数据进行混淆类，
 * 用来获取配置参数，得到哪些字体进行混淆，混淆条件
 * @author caolei
 *
 */
public class FilterVo {
	public String key;
	public int startIndex;
	public int endIndex;

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public int getStartIndex() {
		return startIndex;
	}

	public void setStartIndex(int startIndex) {
		this.startIndex = startIndex;
	}

	public int getEndIndex() {
		return endIndex;
	}

	public void setEndIndex(int endIndex) {
		this.endIndex = endIndex;
	}

}