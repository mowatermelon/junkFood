<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<%@ include file="../../common/dfs_url.jsp" %>
<%@ include file="../../common/top.jsp" %>
<%@ include file="../../common/left.jsp" %>
<%@ include file="../paging/paging.jsp" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>任务执行日志-日志详情</title>
    
	<!-- 数据服务平台 覆盖样式 begin-->
	<link rel="stylesheet" href="<%=_path%>/theme/default/css/date.css" type="text/css">
	<style type="text/css">
		.content{
			min-width: 0px;
		}
		.plan-left{
			width: 97.5%;
  			min-width: 0px;
			margin-top: 0px;
			margin-right: 15px;
		}
		.task-cj {
			height: initial;	
		  	min-height: 350px;
		}
		.task-gl {
			height: initial;	
		  	min-height: 650px;
		}
		form{
			margin:0px 0px 0px 0px;
		}
	</style>
	<!-- 数据服务平台 覆盖样式 end-->
	<script src="<%=_path %>/js/layer/layer.js"></script>
    
    <script type="text/javascript">
    	var dfs_url = "${dfs_url}";
    	var log_id = getUrlParam("id",window.location.search);
    	var status="${param.status}";
    	$(document).ready(function(){
        	$("#firstpane .menu_body:eq(3)").show();
	        $("#firstpane a.menu_head").click(function(){
	            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
	            $(this).siblings().removeClass("current");
	        });
	        
	        getTaskExecutelog();
    	});
    	
    	function getStep(name,nodeId,taskExectue_tid,stype){
    		var nodeBean = getNode(nodeId);
    		$.ajax({
				url : dfs_url,
				data : {
					request : "logdetail",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					nodename: name,
					nodeIP: nodeBean.ip,
					nodeport: nodeBean.port,
					id : taskExectue_tid,
					schemaType : stype
				},
				error : function() {//请求失败处理函数  
					layer.open({
			    	content: '查询步骤详细信息失败！',
			    	scrollbar: false
					});
				},
				success : function(bean) {
					if(stype=='TRANS'){
					 	$('#stepinfo').show();
						initStepView(bean.stepstatuslist);
					}else{
					   $('#stepinfo').hide();
					}
					if(status=='Running'){
					    initlogView(bean);
					}
				},
				dataType : "json"
			});
    	}
    	
    	function getNode(id){
    		var result = null;
    		$.ajax({
    			async : false,
				url : dfs_url,
				data : {
					request : "getnode",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					id : id
				},
				error : function() {//请求失败处理函数  
					layer.open({
			    	content: '获取节点信息失败！',
			    	scrollbar: false
					});
				},
				success : function(bean) {
					result = bean[0];
				},
				dataType : "json"
			});
			return result;
    	}
    	
    	//填充日志显示
    	function getTaskExecutelog(){
    		 $('#stepinfo').hide();//进入页面就隐藏步骤信息栏(处理闪退的bug)
    		$.ajax({
				url : dfs_url,
				data : {
					request : "getTaskexEcuteinfo",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					id : log_id
				},
				beforeSend:loading,
				error : function() {//请求失败处理函数 
				 	layer.close(index); 
					layer.open({
			    	content: '查询任务执行日志失败！',
			    	scrollbar: false
					});
				},
				success : function(bean) {
				 	layer.close(index);
					getStep(bean.jobName,bean.node_id,bean.id,bean.schemaType);//填充日志详情
					if(status!='Running'){
						initlogView(bean);
					}
				},
				dataType : "json"
			});
    	}
    	
    	//日志详情
    	function initStepView(value){
    		var data = {
    			steplist : value
    		};
			var html = template("stepView", data);
			$("#showStep tr:eq(0)").nextAll().remove(); 
			$("#showStep tr:eq(0)").after(html);
    	}
    	
    	//填充日志显示
    	function initlogView(bean){
    		var log = bean.logmsg;
    		if(log!=null){
	    		var logarray = log.split("\n");
	    		var data = {
	    			log : logarray
	    		};
				var html = template("logView", data);
				$("#showLog").append(html);
    		}
    	}
    </script>
    
    <script id="stepView" type="text/html">
    	{{each steplist}}
    		<tr>
				<td>{{$index+1}}</td>
                <td>{{steplist[$index].stepname}}</td>
                <td>{{steplist[$index].linesRead}}</td>
                <td>{{steplist[$index].linesWritten}}</td>
                <td>{{steplist[$index].linesInput}}</td>
                <td>{{steplist[$index].linesOutput}}</td>
                <td>{{steplist[$index].linesUpdated}}</td>
                <td>{{steplist[$index].errors}}</td>
                <td>{{steplist[$index].speed}}</td>
                <td>{{steplist[$index].statusDescription}}</td>
            </tr>
    	{{/each}}
    </script>
    
    <script id="logView" type="text/html">
		{{each log}}
			<p>{{log[$index]}}</p>
		{{/each}}
    </script>
  </head>
  
  <body>
  
  	<div>
		<!-- <div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">数据融合</a> -> 日志详情</span>
		</div> -->
  
  <div class="clearfloat content">
  
    <div class="plan-left">
        <div class="plan-tltle"><h2>日志详情</h2><a href="javascript:history.back(-1);" title="返回">返回</a></div>
        <!--日志详情-->
        <div class="task-gl">
            <div id="stepinfo">
            <div class="plan-tr2">步骤显示</div>
            <table id="showStep" border="0" cellspacing="0">
                <tr class="type2">
                    <td>序号</td>
                    <td>步骤名称</td>
                    <td>读</td>
                    <td>写</td>
                    <td>输入</td>
                    <td>输出</td>
                    <td>更新</td>
                    <td>错误</td>
                    <td>速度(条记录/秒)</td>
                    <td>操作状态</td>
                </tr>
            </table>
            </div>
            <div class="plan-tr2">日志显示</div>
            <div id="showLog" class="plan-tr3 border0"></div>
        </div>
    </div>
	</div>
	
	</div>
	
  </body>
</html>
