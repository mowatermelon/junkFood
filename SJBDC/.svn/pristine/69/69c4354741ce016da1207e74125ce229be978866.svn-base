package com.geostar.gtgh.portal.core.entity;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.geostar.gtgh.portal.constant.StaticValue;

public class PageInfo<T> {
    private static final String DEFAULT_ASC = "asc";
    
    private static final String DEFAULT_DESC = "desc";
    
    private static final String DEFAULT_ORDERBY = "createTime";
    
    protected int pageNo = 1;
    
    protected int pageSize = 10;
    
    protected long totalPage = 1L;
    
    protected long totalCount = -1L;
    
    protected String orderBy = null;
    
    protected String order = null;
    
    protected List<T> result = new ArrayList();
    
    protected List<Object> extResult = new ArrayList();
    
    
    public int getPageNo() {
        return pageNo;
    }
    
    public void setPageNo(int pageNo) {
        this.pageNo = pageNo;
        if (pageNo < 1)
            this.pageNo = 1;
    }
    
    public void setPageNo(String s_pageNo) {
        try {
            pageNo = Integer.parseInt(s_pageNo);
        }
        catch (Exception localException) {
        }
        if (pageNo < 1)
            pageNo = 1;
    }
    
    public int getPageSize() {
        return pageSize;
    }
    
    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }
    
    public void setPageSize(String s_pageSize) {
        try {
            pageSize = Integer.parseInt(s_pageSize);
        }
        catch (Exception localException) {
        }
        if (pageSize < 1)
            pageSize = 10;
    }
    
    public String getOrderBy() {
        return orderBy;
    }
    
    public void setOrderBy(String orderBy) {
        if (StringUtils.isNotBlank(orderBy)) {
            this.orderBy = orderBy;
        }
        else {
            this.orderBy = "createTime";
        }
    }
    
    public String getOrder() {
        return order;
    }
    
    public void setOrder(String order) {
        if (StringUtils.isNotBlank(order)) {
            order = order.toLowerCase();
            if ((!StringUtils.equals("asc", order)) && (!StringUtils.equals("desc", order))) {
                throw new IllegalArgumentException("排序方向" + order + "不是合法值");
            }
            this.order = order;
        }
        else {
            this.order = "asc";
        }
    }
    
    public boolean isOrderBySetted() {
        return (StringUtils.isNotBlank(orderBy)) && (StringUtils.isNotBlank(order));
    }
    
    public List<T> getResult() {
        return result;
    }
    
    public void setResult(List<T> result) {
        this.result = result;
    }
    
    public long getTotalCount() {
        return totalCount;
    }
    
    public void setTotalCount(long totalCount) {
        this.totalCount = totalCount;
    }
    
    public long getTotalPage() {
        if (totalCount < 0L) {
            return -1L;
        }
        
        long count = totalCount / pageSize;
        if (totalCount % pageSize > 0L) {
            count += 1L;
        }
        return count;
    }
    
    public void setTotalPage(long totalPage) {
        this.totalPage = totalPage;
    }
    
    public long getBeginCount() {
        return pageNo > 0 ? (pageNo - 1) * pageSize : 0;
    }
    
    public long getEndCount() {
        if (StaticValue.DBTYPE == 1) {
            return pageSize;
        }
        return getBeginCount() + pageSize * (pageNo > 0 ? 1 : 0);
    }
    
    public List<Object> getExtResult() {
        return extResult;
    }
    
    public void setExtResult(List<Object> extResult) {
        this.extResult = extResult;
    }
}
