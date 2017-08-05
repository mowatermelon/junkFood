package com.geostar.gtgh.portal.core.entity;

import java.util.Date;
import java.math.BigDecimal;

import com.geostar.gtgh.portal.annotation.Localtion;
@Localtion("com.geostar.gtgh.portal.core.dao.GzjzMapper")
public class Gzjz {
	private String id;
	private String qxdm;
	private String qxmc;
	private String jb;
	private String lxCode;
	private String lx;
	private String sm;
	private Date wcsj;
	private BigDecimal flag;
	private String pqxdm;
	private BigDecimal jblx;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getQxdm() {
		return qxdm;
	}

	public void setQxdm(String qxdm) {
		this.qxdm = qxdm;
	}

	public String getQxmc() {
		return qxmc;
	}

	public void setQxmc(String qxmc) {
		this.qxmc = qxmc;
	}

	public String getJb() {
		return jb;
	}

	public void setJb(String jb) {
		this.jb = jb;
	}

	public String getLxCode() {
		return lxCode;
	}

	public void setLxCode(String lxCode) {
		this.lxCode = lxCode;
	}

	public String getLx() {
		return lx;
	}

	public void setLx(String lx) {
		this.lx = lx;
	}

	public String getSm() {
		return sm;
	}

	public void setSm(String sm) {
		this.sm = sm;
	}

	public Date getWcsj() {
		return wcsj;
	}

	public void setWcsj(Date wcsj) {
		this.wcsj = wcsj;
	}

	public BigDecimal getFlag() {
		return flag;
	}

	public void setFlag(BigDecimal flag) {
		this.flag = flag;
	}

	public String getPqxdm() {
		return pqxdm;
	}

	public void setPqxdm(String pqxdm) {
		this.pqxdm = pqxdm;
	}

	public BigDecimal getJblx() {
		return jblx;
	}

	public void setJblx(BigDecimal jblx) {
		this.jblx = jblx;
	}

}
