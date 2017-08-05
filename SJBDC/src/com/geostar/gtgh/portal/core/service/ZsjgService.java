package com.geostar.gtgh.portal.core.service;

import com.geostar.gtgh.portal.core.entity.Zspc;


public interface ZsjgService {
    public void  deleteByPcId(String pcid);

	public void savePcxx(Zspc zspc, String jsonStr);

	public void updatePcxx(Zspc zspc, String jsonStr);
   
}
