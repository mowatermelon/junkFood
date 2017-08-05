package com.geostar.gtgh.portal.controller;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Clob;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import oracle.sql.CLOB;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.geostar.gfstack.usersystem.user.model.User;
import com.geostar.gtgh.portal.constant.StaticValue;
import com.geostar.gtgh.portal.core.service.CommonService;
import com.geostar.gtgh.portal.utils.JSONUtils;
import com.geostar.gtgh.portal.vo.DataVo;
//import com.sun.net.httpserver.Authenticator.Success;

/**
 * 综合监管控制层
 * @author wushixong
 *
 */
@SuppressWarnings("all")
@Controller
@RequestMapping("/comSupCtrler")
public class ComSupCtrler {
	private CommonService commonService;
	private Map<String, Object> rtnMap=new HashMap<String, Object>();//返回值map
	@Autowired
	public void setCommonService(CommonService commonService) {
		this.commonService = commonService;
	}
	/**
	 * 从数据库中读取xml流并在页面上显示
	 * @param request
	 * @param response
	 * @author wushixong
	 */
	@RequestMapping(value="/queryXMLData")
	public void queryXMLData(HttpServletRequest request, HttpServletResponse response){
		String bizmsgId=request.getParameter("bizmsgId");
		String flag=request.getParameter("flag");
		String queryId=request.getParameter("queryId");
		DataVo dv=new DataVo();
		Map<String, Object> queryMap=new HashMap<String, Object>();
		queryMap.put("bizmsgid", bizmsgId);
		queryMap.put("flag", flag);
		dv.setQueryMap(queryMap);
		dv.setQueryId("com.geostar.gtgh.portal.core.dao.CommonQueryMapper."+queryId);
		List<Map> list=(List<Map>)commonService.queryList(dv);
		byte [] buf=null;
		OutputStream os=null;
		if(list.size()>0){
			for (Map<String, Object> map : list) {
				for (Map.Entry<String, Object> entry : map.entrySet()) {
					if(entry.getValue() instanceof byte[]){
						buf=(byte[])entry.getValue();
					}
				}
			}
			try {
				response.setContentType("application/xml");
				response.setHeader("Cache-control", "no-cache ");
				os = response.getOutputStream();
				os.write(buf);
				os.flush();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	@RequestMapping(value="/showFileView")
	public void showFileView(HttpServletRequest request, HttpServletResponse response){
		try {
		String path=request.getSession().getServletContext().getRealPath("/")+"/view/documentFile/440103/201607290009/fwda.pdf";
		/*String qxdm=request.getParameter("qxdm");
		String ywh=request.getParameter("ywh");
		String fileName=request.getParameter("fileName");
		String fileType=request.getParameter("fileType");
		path=path+"/"+qxdm+"/"+ywh+"/"+fileName+fileType;*/
		String fileType=".pdf";
		OutputStream os=null;
		byte [] byteArr;
					File file=new File(path);
					if(file.exists()){
						byteArr=new byte[(int)file.length()];
						BufferedInputStream bis=new BufferedInputStream(new FileInputStream(file));
						int r = bis.read(byteArr);
						if(r!=(int)file.length()){
							throw new IOException("读取文件不正确！");
						}
						bis.close();
						if(fileType!=null&&".pdf".equals(fileType)){
							response.setContentType("application/pdf");
						}else{
							response.setContentType("image/*");
						}
						response.setHeader("Cache-control", "no-cache ");
						os = response.getOutputStream();
						os.write(byteArr);
						os.flush();
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
	}
	@ResponseBody
	@RequestMapping(value="/batchRepInfo")
	public String batchRepInfo(HttpServletRequest request, HttpServletResponse response){
		String ywhStr=request.getParameter("ywhStr");
		User user = (User) request.getSession().getAttribute(StaticValue.SESSION_USER);
		DataVo dv=new DataVo();
		dv.setQueryId("com.geostar.gtgh.portal.core.dao.CommonQueryMapper.updateRepInfo");
		Map<String, Object> map=new HashMap<String, Object>();
		String userName="";
		if(user!=null){
			userName= user.getUsername();
		}
		map.put("repPerson", userName);
		map.put("ywhStr", ywhStr);
		dv.setQueryMap(map);
		commonService.updateData(dv);
		return JSONUtils.toString(map);
	}
	@ResponseBody
	@RequestMapping(value="/queryRepInfoById")
	public String queryRepInfoById(HttpServletRequest request, HttpServletResponse response){
		String bizmsgid=request.getParameter("bizmsgid");
		String queryId=request.getParameter("queryId");
		String flag=request.getParameter("flag");
		DataVo dv=new DataVo();
		dv.setQueryId(queryId);
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("bizmsgid",bizmsgid );
		dv.setQueryMap(map);
		List<Map> list=(List<Map>)commonService.queryList(dv);
		//byteToString(list);
		String SuccessFlag="",BizMsgID="",ResponseCode="",ResponseInfo="",QRCode="";
		try {
			if(list!=null&&list.size()>0){
				Map<String, Object> v_map=(Map)list.get(0);
				if(v_map.get("SREPXMLDATA")!=null){
					byte [] srep=(byte [])v_map.get("SREPXMLDATA");
					SAXReader sr=new SAXReader();
					Document doc=sr.read(new ByteArrayInputStream(srep));
					Element ele=doc.getRootElement();
					SuccessFlag=ele.element("SuccessFlag").getText();
					BizMsgID=ele.element("BizMsgID").getText();
					ResponseCode=ele.element("ResponseCode").getText();
					ResponseInfo=ele.element("ResponseInfo").getText();
					QRCode=ele.element("QRCode").getText();
					}
				if(v_map.get("GREPXMLDATA")!=null){
					byte [] grep=(byte [])v_map.get("GREPXMLDATA");
					SAXReader sr=new SAXReader();
					Document doc=sr.read(new ByteArrayInputStream(grep));
					Element ele=doc.getRootElement();
					SuccessFlag=ele.element("SuccessFlag").getText();
					BizMsgID=ele.element("BizMsgID").getText();
					ResponseCode=ele.element("ResponseCode").getText();
					ResponseInfo=ele.element("ResponseInfo").getText();
					QRCode=ele.element("QRCode").getText();
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		rtnMap.put("SuccessFlag", SuccessFlag);
		rtnMap.put("BizMsgID", BizMsgID);
		rtnMap.put("ResponseCode", ResponseCode);
		rtnMap.put("ResponseInfo", ResponseInfo);
		rtnMap.put("QRCode", QRCode);
		return JSONUtils.toString(rtnMap);
	}
	/**
	 * 查询业务基本信息
	 * @param request
	 * @param response
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/queryBasicInfo")
	public String queryBasicInfo(HttpServletRequest request, HttpServletResponse response){
		String ywid=request.getParameter("ywid");
		String queryId="com.geostar.gtgh.portal.core.dao.CommonQueryMapper.query_V_YWJG_JBXX";
		DataVo dv=new DataVo();
		dv.setQueryId(queryId);
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("ywid",ywid );
		dv.setQueryMap(map);
		List<Map> list=(List<Map>)commonService.queryList(dv);
		if(list!=null&&list.size()>0){
			return JSONUtils.toString(list.get(0));
		}
		return "";
	}
	
	
	private void byteToString(List<Map> list) {
		for (Map<String, Object> map : list) {
			for (Map.Entry<String, Object> entry : map.entrySet()) {
				if(entry.getValue() instanceof byte[]){
					try {
						map.put(entry.getKey(),new String((byte[]) entry.getValue(),"utf-8")); 
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
				
			}
		}
	}
}
