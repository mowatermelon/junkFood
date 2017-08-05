<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/common/top.jsp"%>
<%@ include file="/common/left.jsp"%>
<%@ include file="/common/dfs_url.jsp"%>

<html>
  <head>
    <title>武大吉奥GeoSmarter数据融合管理中心 - 系统参数设置</title>
    <script type=text/javascript src="<%=path %>/js/jquery.validate.js"></script>
	<script type=text/javascript src="<%=path %>/js/messages_cn.js"></script>
    <script src="<%=path %>/js/layer/layer.js"></script>
    <script type="text/javascript">
    	var dfs_url = "${dfs_url}";
    	var smtpBean;
    	$(document).ready(function(){
    		$("#firstpane .menu_body:eq(4)").show();
	        $("#firstpane a.menu_head").click(function(){
	            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
	            $(this).siblings().removeClass("current");
	        });
    		$.ajax({
				url : dfs_url,
				dataType : "json",
				data : {
					request : "GETSMTPINFO",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					requestMethod : "get"
				},
				success : function(data) {
					smtpBean = data;
					initSmtpInfo(data);
				}
			});
			 $("#smtpInfoForm").validate();  
    	});
    	
    	//初始化smtp相关信息
    	function initSmtpInfo(bean){
    		if(typeof(bean) != "undefined"){
	    		$("input#smtpHost").val(bean.smtpHost);
	    		$("input#smtpPort").val(bean.smtpPort);
	    		$("input#emailAccount").val(bean.mailAccount);
	    		$("input#userName").val(bean.usename);
	    		$("input#password").val(bean.password);
	    		$("input#smtpID").val(bean.id);
    		}
    	}
    	
    	//执行确定
    	function save(){
    	if($("#smtpInfoForm").valid()){
    		var host = $("input#smtpHost").val();
	    	var port = $("input#smtpPort").val();
	    	var emailAccount = $("input#emailAccount").val();
	    	var username = $("input#userName").val();
	    	var password = $("input#password").val();
	    	var id = $("input#smtpID").val();
	    	if(id==0){
	    		id="";
	    	}
	    	$.ajax({
				url : dfs_url,
				dataType : "json",
				data : {
					request : "GETSMTPINFO",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					requestMethod : "add",
					id : id,
					SMTPHOST : host,
					SMTPPORT : port,
					MAILACCOUNT : emailAccount,
					USENAME : username,
					PASSWORD : password
				},
				beforeSend:loading,
				error: function(){
					layer.close(index);
					layer.open({
				    	content: '保存失败，请重试！', 
				    	scrollbar: false
					});
				},
				success : function(data) {
				    layer.close(index);
					layer.open({
				    	content: '保存成功！', 
				    	scrollbar: false
					});
				}
			});
			}
    	}
    	
    	//执行取消
    	function cancle(){
    		initSmtpInfo(smtpBean);
    	}
    </script>
  </head>
  
  <body>
    <div class="clearfloat content">
    	<div class="plan-left">
	        <div class="plan-tltle">
	            <h2>系统参数设置</h2>
	        </div>
	        <form  id="smtpInfoForm" method="post" action="">
	        <div class="task-cj">
	            <div class="task-tr clearfloat">
	                <span>SMTP：</span>
	                <input id="smtpHost" name="smtpHost" type="text" class="task-bd1 required">
	                <i class="set-explain">填写SMTP服务器，例如：mail.geostar.com.cn</i>
	            </div>
	            <div class="task-tr clearfloat">
	                <span>SMTP端口：</span>
	                <input id="smtpPort" name="smtpPort" type="text" class="task-bd1 required number">
	                <i class="set-explain">填写SMTP端口，例如：25</i>
	            </div>
	            <div class="task-tr clearfloat">
	                <span>发信人邮件地址：</span>
	                <input id="emailAccount" name="emailAccount" type="text" class="task-bd1 required email">
	                <i class="set-explain">填写发件人邮件地址，例如：admin@geostar.com.cn</i>
	            </div>
	            <div class="task-tr clearfloat">
	                <span>SMTP用户：</span>
	                <input id="userName" name="userName" type="text" class="task-bd1 required">
	                <i class="set-explain">填写SMTP用户名</i>
	            </div>
	            <div class="task-tr clearfloat">
	                <span>SMTP密码：</span>
	                <input id="passWord" name="passWord" type="password" class="task-bd1 required">
	                <i class="set-explain">填写SMTP密码</i>
	            </div>
	            <div class="task-tr clearfloat">
	             <input type="submit"  style="display:none"/>
	                <a href="javascript:save();" title="保存" class="task-but3" style="margin-left:250px;">保存</a>
	                <a href="javascript:cancle();" title="取消" class="task-but4">取消</a>
	            </div>
	            
	            <input type="hidden" id="smtpID" value="">
	        </div>
	       </form>
    	</div>
	</div>

  </body>
</html>
