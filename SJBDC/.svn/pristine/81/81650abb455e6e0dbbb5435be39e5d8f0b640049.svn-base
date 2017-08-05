<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>



<%@ include file="../../common/dfs_url.jsp" %>
<%@ include file="../../common/top.jsp" %>
<%@ include file="../../common/left.jsp" %>
<%@ include file="../paging/paging.jsp" %>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>节点详情</title>
    
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
		form{
			margin:0px 0px 0px 0px;
		}
	</style>
	<!-- 数据服务平台 覆盖样式 end-->
    
    <script type="text/javascript">
    	var dfs_url = "${dfs_url}";
    	var pageCount = 0;
		var pageSize = 10;
		var pageIndex = 1;
		var flag = false;//判断是分页绘制
		
    	var nodeId = getUrlParam("nodeId",window.location.search);
    	var gName = '${param.gname}';
    	var taskState = "${param.taskState}";
    	$(document).ready(function(){
    		$("#firstpane .menu_body:eq(2)").show();
	        $("#firstpane a.menu_head").click(function(){
	            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
	            $(this).siblings().removeClass("current");
	        });
	       $.ajaxSetup ({ cache: false }); 
	       getNodeDetailInfo(nodeId);
    	});
    	
    	//得到节点的详细信息
    	function getNodeDetailInfo(id){
    	   $.ajax({
				url : dfs_url,
				data : {
					request : "GETNODEDETAIL",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					id : id,
					taskState : taskState,
					startposition : (pageIndex-1)*pageSize,
					pagesize : pageSize
				},
				error : function() {//请求失败处理函数  
					var d = dialog({
					    title: '提示',
					    content: '查询节点失败',
					    okValue:'确定'
					});
					d.width(320).show();
				},
				success : function(bean) {
					if(!flag){//如果是分页请求，则不绘制上面部分
						initNodeInfo(bean.node,gName);
					}
					var taskList_Node = eval(bean.taskExecutelist);
					initTaskInfo(taskList_Node.list);
					
					var totalCount = taskList_Node.totalCount;
					pageCount = (totalCount % pageSize == 0 ? totalCount / pageSize
						: Math.ceil(totalCount / pageSize));
					var countArray = new Array(pageCount);
					pagination(pageIndex,countArray);//添加分页页码
				},
				dataType : "json"
			});
    	}
    	
    	
    	
    	//填充节点详情
    	function initNodeInfo(bean,gName){
    		var data = {
				groupName : gName,
				node : bean
			};
			var html = template("nodeInfo", data);
			$("div#nodeInfo").append(html);
    	}
    	//填充信息列表
    	function initTaskInfo(taskList){
    		var data = {
				list : taskList
			};
			template.helper("setContinueTime", function(time) {
				if(typeof time == "string"){
					var endTime = Date.parse(time.replace(/-/g,"/"))*1;
					var currentTime = new Date().getTime(); 
					return getContinueTime(currentTime - endTime);
				}else{
					return getContinueTime(time);
				}
			});
			var html = template("task_Node", data);
			$("#taskInfo tr:eq(0)").nextAll().remove(); 
			$("#taskInfo tr:eq(0)").after(html);
    	}
    	
    	function gotoTaskDetail(taskId){
    	location.href="../task/taskDetailInfo.jsp?taskId="+taskId;
    	}
    	
    	function gotoPage(currentpage) {
    		flag = true;
			pageIndex = currentpage;//更新pageIndex
			getNodeDetailInfo(nodeId);
		}
    	
    </script>
    
    <script id="nodeInfo" type="text/html">
			<p>
	            <span>节点名称： {{node.name}} </span>
	            <span>分组名称：{{groupName}}</span>
	        </p>
	        <p>
	            <span>节点描述：{{node.description}}</span>
	            <span>节 点  IP：{{node.ip}}</span>
	        </p>
	        <p>服务端口：{{node.port}}</p>
    </script>
    <script id="task_Node" type="text/html">
		{{each list as value index}}
			<tr>
	            <td>{{value.jobName}}</td>
	            <td>{{value.schemaName}}</td>
	            <td>
					{{if value.executeStatus=='Running'}}
						<span  style="color : #77BF54; font-size:14; line-height: 0px;">运行</span>
						<%--<img src="<%=path %>/images/ico/e_run.png">--%>
					{{else if value.executeStatus=='Halting'}}
						<span style="color : #222; font-size:14px; line-height: 0px;">暂停</span>
						<%--<img src="<%=path %>/images/ico/e_suspend.png">--%>
					{{else if value.executeStatus=='Finished'}}
						<span  style="color : #77BF54; font-size:14; line-height: 0px;">完成</span>
						<%--<img src="<%=path %>/images/ico/e_complete.png">--%>
					{{else if value.executeStatus=='Error'}}
						<span style="color :#FEA1A1; font-size:14px; line-height: 0px;">错误</span>
						<%--<img src="<%=path %>/images/ico/e_error.png">--%>
					{{/if}}
				</td>
	            <td>{{value.start_time}}</td>
	            <td>
					{{if value.executeStatus=='Running'}}
						{{setContinueTime(value.start_time)}}
					{{else}}
						{{setContinueTime(value.continued_Time)}}
					{{/if}}
				</td>
	            <td>
					{{if value.executeStatus=='Finished'}}
						<a href="javascript:gotoTaskDetail('{{value.taskName}}');" title="完成详情"><img src="<%=path %>/images/ico/detail.png"></a>
                       {{else if value.executeStatus=='Error'}}
                         <a href="javascript:gotoTaskDetail('{{value.taskName}}');" title="错误详情"><img src="<%=path %>/images/ico/log-details.png"></a>
                    {{/if}}
					<%--<a href="javascript:gotoTaskDetail('{{value.taskName}}');" title="任务详情"><img src="<%=path %>/images/ico/detail.png"></a>--%>
				</td>
	        </tr>
		{{/each}}
    </script>
  </head>
  
  <body>
  
    	<div>
		<!-- <div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">数据融合</a> -> 节点详情</span>
		</div> -->
  
	  <div class="clearfloat content">
	    <div class="plan-left">
	        <div class="plan-tltle"><h2>节点详情</h2><a href="javascript:history.back();" title="返回">返回</a></div>
	        <!--节点详情结果-->
	        <div class="task-gl">
	            <div id="nodeInfo" class="plan-tr3"></div>
	            <div class="plan-tr2">任务信息</div>
	            <table id="taskInfo" border="0" cellspacing="0">
	                <tr class="type2">
	                    <td>任务名称</td>
	                    <td>方案名称</td>
	                    <td>执行状态</td>
	                    <td>任务开始时间</td>
	                    <td>已耗时(分)</td>
	                    <td>操作</td>
	                </tr>
	            </table>
	            <div id="pagination" class="page"></div>
	        </div>
	    </div>
    </div>
    
    </div>
    
  </body>
</html>
