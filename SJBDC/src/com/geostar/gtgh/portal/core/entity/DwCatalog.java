package com.geostar.gtgh.portal.core.entity;

import java.util.Date;

import com.geostar.gtgh.portal.annotation.Localtion;
@Localtion("com.geostar.gtgh.portal.core.dao.DwCatalogMapper")
public class DwCatalog {
    private String id;

    private String parentid;

    private String opercode;

    private String name;

    private String tagfilter;

    private String path;

    private Integer depth;

    private Integer orderindex;

    private Date createtime;

    private Date updatetime;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getParentid() {
        return parentid;
    }

    public void setParentid(String parentid) {
        this.parentid = parentid;
    }

    public String getOpercode() {
        return opercode;
    }

    public void setOpercode(String opercode) {
        this.opercode = opercode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTagfilter() {
        return tagfilter;
    }

    public void setTagfilter(String tagfilter) {
        this.tagfilter = tagfilter;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Integer getDepth() {
        return depth;
    }

    public void setDepth(Integer depth) {
        this.depth = depth;
    }

    public Integer getOrderindex() {
        return orderindex;
    }

    public void setOrderindex(Integer orderindex) {
        this.orderindex = orderindex;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public Date getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }
}