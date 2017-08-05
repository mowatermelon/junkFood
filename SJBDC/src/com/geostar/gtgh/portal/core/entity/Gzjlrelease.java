package com.geostar.gtgh.portal.core.entity;
import java.util.Date;

import com.geostar.gtgh.portal.annotation.Localtion;

@Localtion("com.geostar.gtgh.portal.core.dao.GzjlMapper")
public class Gzjlrelease {
	private String description;
	private String creatEuser;
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCreatEuser() {
		return getCreatEuser();
	}
	public void setUserName(String userName) {
		this.creatEuser = userName;
	}
	
}
