package com.geostar.gtgh.portal.core.entity;

import java.util.Date;

import com.geostar.gtgh.portal.annotation.Localtion;
import com.geostar.gtgh.portal.annotation.NotNull;

@Localtion("com.geostar.gtgh.portal.core.dao.WorkArticleMapper")
public class WorkArticle {
	private String id;

	private String lrr;

	private Date lrsj;

	@NotNull("标题")
	private String bt;
	@NotNull("类型")
	private Integer lx;
	@NotNull("内容")
	private String rr;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getLrr() {
		return lrr;
	}

	public void setLrr(String lrr) {
		this.lrr = lrr;
	}

	public Date getLrsj() {
		return lrsj;
	}

	public void setLrsj(Date lrsj) {
		this.lrsj = lrsj;
	}

	public String getBt() {
		return bt;
	}

	public void setBt(String bt) {
		this.bt = bt;
	}

	public Integer getLx() {
		return lx;
	}

	public void setLx(Integer lx) {
		this.lx = lx;
	}

	public String getRr() {
		return rr;
	}

	public void setRr(String rr) {
		this.rr = rr;
	}
}