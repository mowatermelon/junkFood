package com.geostar.gtgh.portal.core.entity;

import java.math.BigDecimal;
import java.util.Date;

import com.geostar.gtgh.portal.annotation.Localtion;
@Localtion("com.geostar.gtgh.portal.core.dao.ZspcMapper")
public class Zspc {
    private String qxdm;

    private String jfpc;

    private Date jhjfrq;

    private BigDecimal ycjfts;

    private BigDecimal jhdnpczs;

    private Date sjrksj;

    private String id;

    private String qyid;

    private String dghth;

    private Date sjjfrq;

    private String pcnd;

    private Date dgrq;

    public String getQxdm() {
        return qxdm;
    }

    public void setQxdm(String qxdm) {
        this.qxdm = qxdm;
    }

    public String getJfpc() {
        return jfpc;
    }

    public void setJfpc(String jfpc) {
        this.jfpc = jfpc;
    }

    public Date getJhjfrq() {
        return jhjfrq;
    }

    public void setJhjfrq(Date jhjfrq) {
        this.jhjfrq = jhjfrq;
    }

    public BigDecimal getYcjfts() {
        return ycjfts;
    }

    public void setYcjfts(BigDecimal ycjfts) {
        this.ycjfts = ycjfts;
    }

    public BigDecimal getJhdnpczs() {
        return jhdnpczs;
    }

    public void setJhdnpczs(BigDecimal jhdnpczs) {
        this.jhdnpczs = jhdnpczs;
    }

    public Date getSjrksj() {
        return sjrksj;
    }

    public void setSjrksj(Date sjrksj) {
        this.sjrksj = sjrksj;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getQyid() {
        return qyid;
    }

    public void setQyid(String qyid) {
        this.qyid = qyid;
    }

    public String getDghth() {
        return dghth;
    }

    public void setDghth(String dghth) {
        this.dghth = dghth;
    }

    public Date getSjjfrq() {
        return sjjfrq;
    }

    public void setSjjfrq(Date sjjfrq) {
        this.sjjfrq = sjjfrq;
    }

    public String getPcnd() {
        return pcnd;
    }

    public void setPcnd(String pcnd) {
        this.pcnd = pcnd;
    }

    public Date getDgrq() {
        return dgrq;
    }

    public void setDgrq(Date dgrq) {
        this.dgrq = dgrq;
    }
}