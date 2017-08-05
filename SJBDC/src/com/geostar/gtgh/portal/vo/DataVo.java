package com.geostar.gtgh.portal.vo;

import java.util.HashMap;
import java.util.Map;

public class DataVo {
	private String queryId;// 查询对应的select 语句id,对应全路径 必填

	private String settingId;// 用来查询地图数据对应配置的xml文件
	private Page<?> page;

	private String template;// 导出excel模板id;
	private Map<String, Object> queryMap = new HashMap<String, Object>();

	public String getTemplate() {
		return template;
	}

	public void setTemplate(String template) {
		this.template = template;
	}

	public String getQueryId() {
		return queryId;
	}

	public void setQueryId(String queryId) {
		this.queryId = queryId;
	}

	public Page<?> getPage() {
		return page;
	}

	public void setPage(Page<?> page) {
		this.page = page;
	}

	public Map<String, Object> getQueryMap() {
		return queryMap;
	}

	public void setQueryMap(Map<String, Object> queryMap) {
		this.queryMap = queryMap;
	}

	public String getSettingId() {
		return settingId;
	}

	public void setSettingId(String settingId) {
		this.settingId = settingId;
	}

}
