<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%@ include file="../../common/dfs_url.jsp" %>
<%@ include file="../../common/top.jsp" %>
<%@ include file="../../common/left.jsp" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<title>方案详情</title>
	
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
		.plan-tr2{
			width:initial;
		}

	</style>
	<!-- 数据服务平台 覆盖样式 end-->
	
	<script src="<%=_path %>/js/artTemplate/template.js"></script>
	<script src="<%=_path %>/js/layer/layer.js"></script>
	
	<script type="text/javascript">
		var dfs_url = "${dfs_url}";
		var pageSize = '${pageSize}';
		var pageIndex = 1;
		var pageCount = 0;
		function onload(){
			$("#firstpane .menu_body:eq(0)").show();
		        $("#firstpane a.menu_head").click(function(){
		            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
		            $(this).siblings().removeClass("current");
		        });
		    $.ajaxSetup ({ cache: false }); 
			onloadSchema("${param.id}","${param.type}");
		}
		
		function onloadSchema(id,type){
			$.ajax({
				url : dfs_url,
				data : {
					request : "describeschema",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					id : id,
					schematype : type
				},
				beforeSend:loading,
				error : function() {//请求失败处理函数  
					layer.close(index);
					layer.open({
				    	content: '加载失败',
				    	scrollbar: false
					});
				},
				success : function(schema) {
					var bean = eval(schema);
					loadSchemaInfo(bean);//加载信息
					loadTaskAboutSchema(bean);
					//请求图片
					document.getElementById("schemaImage").src = dfs_url+"?request=getSchemaImage&service=DataFusionService&version=1.0.0&format=json&imageid="+bean.imageId;
					layer.close(index);
				},
				dataType : "json"
			});
		}
		
		//填充基本描述信息 模板
		function loadSchemaInfo(sBean) {
			var data = {
				bean : sBean
			};
			var html = template("schemaDetail", data);
			document.getElementById("schemaDetailInfo").innerHTML = html;
		}
		
		function loadTaskAboutSchema(bean){
		    var schemaname=bean.name;
		    var type=bean.type;
			$.ajax({
				url : dfs_url,
				data : {
					request : 'getTaskexEcuteInfo',
					service : 'DataFusionService',
					version : '1.0.0',
					format : 'json',
					status : 'Running',
					startposition : (pageIndex-1)*pageSize,
					pagesize : pageSize,
					SCHEMANAME:schemaname,
					SCHEMATYPE:type
				},
				error : function() {//请求失败处理函数  
					layer.open({
				    	content: '请求正在运行的任务列表失败',
				    	scrollbar: false
					});
				},
				success : function(result) {
					initTaskExecutInfo(result);
				},
				dataType : "json"
			});
		}
		
		//填充任务执行情况 模板
		function initTaskExecutInfo(result){
				var data = {
					list : result
				};
			template.helper("setContinueTime", function(stime) {
					var s = Date.parse(stime.replace(/-/g,"/"))*1;
					var c = new Date().getTime();
					var ctime = c-s;
					return getContinueTime(ctime);
			});
			var html = template("taskExecuteInfo",data);
			$("#taskExecuteTable tr:eq(0)").after(html);
		}
		
		function getFiveRecent(taskId){
			var fiveResult = null;
			$.ajax({
				async : false,
				url : dfs_url,
				data : {
					request : "fiverecent",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					jobname : taskId
				},
				error : function() {//请求失败处理函数  
					layer.open({
				    	content: '获取任务执行情况失败',
				    	scrollbar: false
					});
				},
				success : function(result) {
					fiveResult = result;
				},
				dataType : "json"
			});
			return fiveResult;
		}
		
		function taskDetailInfo(taskId){
			var param ="taskId="+taskId;
			var url = "../task/taskDetailInfo.jsp?"+param;
			location.href=url;
		}
		
	</script>
	
	<script id="schemaDetail" type="text/html">
		<div class="plan-tr2">{{bean.name}}</div>
		<div class="plan-tr3">
			<p>
				<span>方案类型：{{bean.type}} </span> 
				<span>创建时间： {{bean.creattime}}</span> 
				<span>修改时间：{{bean.updatetime}}</span>
			</p>
			<p>方案描述：{{bean.description}}</p>
			<p>方案参数：
			{{each bean.parameters as param }}
				{{param.name}}:{{param.defaultValue}} 
			{{/each}}
			</p>
		</div>
		
	</script>
	
	<script id="taskExecuteInfo" type="text/html">
		{{each list as value index}}
		<tr>
			    <td>{{value.taskName}}</td>
	            <td>{{value.schemaName}}</td>
	            <td>{{value.node_Group}}</td>
	            <td>{{value.start_time}}</td>
	            <td>{{value.end_time}}</td>
	            <td>{{setContinueTime(value.start_time)}}</td>
	            <td>
	            	{{if value.status=='Running'}}
							<%--<img src="<%=path %>/images/ico/e_run.png">--%>
							<span  style="color : #77BF54; font-size:14; line-height: 0px;"><br/>运行</span>
					{{else if value.status=='Halting' || value.status=='Stopped'}}
							<%--<img src="<%=path %>/images/ico/e_suspend.png">--%>
							<font color = "#222" style="font-size:14px; line-height: 0px;"><br/>暂停</font>
					{{else if value.status=='Finished'}}
							<%--<img src="<%=path %>/images/ico/e_complete.png">--%>
							<span  style="color : #77BF54; font-size:14; line-height: 0px;"><br/>完成</span>
					{{else if value.status=='Error'}}
							<%--<img src="<%=path %>/images/ico/e_error.png">--%>
							<font color = "#FEA1A1" style="font-size:14px; line-height: 0px;"><br/>错误</font>
					{{/if}}
	            </td>
			<td>
                <a href="javascript:taskDetailInfo('{{value.taskName}}')" title="任务详情"><img src="<%=_path%>/images/ico/detail.png" ></a>
			</td>
		</tr>
		{{/each}}
	</script>
		
	<!-- 最近三次运行状态子模板 暂时不用 -->
	<script id="fiveRecent" type="text/html">
		{{each statusArray as isTrue index1}}
			{{each isTrue as value index2}}
				{{if statusArray[index1][index2]}}
					<span><img src="<%=path %>/images/ico/right.png"> </span> 
				{{else}}
					<span><img src="<%=path %>/images/ico/wrong.png"> </span>
				{{/if}}
			{{/each}}
		{{/each}}
	</script>
	
</head>

<body onload="onload()">

	<!--<div>
		 <div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">数据融合</a> -> 方案详情</span>
		</div>
		 -->
	<div class="clearfloat content">
		<!--方案管理右边栏-->
		<div class="plan-left">
			<div class="plan-tltle">
				<h2>方案详情</h2>
				<a href="javascript:;" onClick="javascript:history.back(-1);" title="返回">返回</a>
			</div>
			<div id="schemaDetailInfo"></div>
			<div class="plan-tr2">正在执行此方案的任务</div>
			<table border="0" cellspacing="0" id="taskExecuteTable">
				<tr class="type2">
                    <td>任务名称</td>
                    <td>方案名称</td>
                    <td>分组/节点</td>
                    <td><span>任务开始时间</span></td>
                    <td><span>任务结束时间</span></td>
                    <td>任务耗时(分)</td>
                    <td>执行状态</td>
                    <td>操作</td>
				</tr>
			</table>
		</div>
	</div>
	
	<div class="plan-tr2">转换步骤</div>
		<div class="plan-tr3">
			<img id="schemaImage">
		</div>
</body>
</html>
