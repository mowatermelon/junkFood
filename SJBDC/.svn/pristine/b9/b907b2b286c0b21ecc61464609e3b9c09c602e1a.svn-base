<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%@ include file="../../common/dfs_url.jsp" %>
<%@ include file="../../common/top.jsp" %>
<%@ include file="../../common/left.jsp" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>任务详情</title>
    
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
		.task-gl {
			height: initial;	
		  	min-height: 650px;
		}

	</style>
	<!-- 数据服务平台 覆盖样式 end-->
	
    <script src="<%=path %>/js/layer/layer.js"></script>
    <script language="javascript" type="text/javascript" src="<%=path %>/js/flot_js/highcharts.js"></script>
    <script type="text/javascript">
		var dfs_url = "${dfs_url}";
		var dfs="${dfs}";
		var taskId = getUrlParam("taskId",window.location.search);
		$(document).ready(function(){
			$("#firstpane .menu_body:eq(1)").show();
	        $("#firstpane a.menu_head").click(function(){
	            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
	            $(this).siblings().removeClass("current");
	        });
		    $.ajaxSetup ({ cache: false }); 
			getTaskDetail(taskId);
		});
		
		function getTaskDetail(taskName){
		
			$.ajax({
				url : dfs_url,
				data : {
					request : "GETTASKDETAIL",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					name : taskName
				},
				error : function() {//请求失败处理函数  
					layer.close(index);
				layer.open({
			    	content: '加载任务详细信息失败！',
			    	scrollbar: false
					});
				},
				beforeSend:loading,
				success : function(task) {
				    layer.close(index);
					initTaskInfo(task.taskDetail);
					if(task.taskExecuteInfo!=null){
						initExecuteInfo(task.taskExecuteInfo);
					}
				},
				dataType : "json"
			});
		}
		
		
		
		//填充基本描述信息 模板
		function initTaskInfo(task) {
			var data = {
				bean : task
			};
			var html = template("taskInfo", data);
			document.getElementById("taskBasicInfo").innerHTML = html;
		}
		
		//填充执行信息模板
		function initExecuteInfo(executeInfo){
			var data = {
				bean : executeInfo
			};
			var name = executeInfo.schemaName;
			var type = executeInfo.schemaType;
			template.helper("getImageURL", function() {
					return getImageUrl(name,type);
			});
			template.helper("setContinueTime", function(stime) {
					var s = Date.parse(stime.replace(/-/g,"/"))*1;
					var c = new Date().getTime();
					var ctime = c-s;
					return getContinueTime(ctime);
			});
			var html = template("executeDetailInfo", data);
			document.getElementById("executeInfo").innerHTML = html;
			//var steplist = getStep(executeInfo.schemaName,executeInfo.node_id,executeInfo.executeInfo_id,executeInfo.schemaType);//填充日志详情
			initFlot(executeInfo.stepInfolist);
		}
    	
    	function getStep(name,nodeId,taskExectue_tid,stype){
    		var nodeBean = getNode(nodeId);
    		var stepArray = null;
    		$.ajax({
    			async : false,
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
			    	content: '加载步骤信息失败',
			    	scrollbar: false
					});
				},
				success : function(step) {
					stepArray = step;
				},
				dataType : "json"
			});
			return stepArray;
    	}
		
		//根据方案名称和类型获取图片
		function getImageUrl(schemaName,schemaType){
			var src;
			$.ajax({
				async : false,
				url : dfs_url,
				data : {
					request : "describeschema",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					name : schemaName,
					schematype : schemaType
				},
				error : function() {//请求失败处理函数  
					layer.open({
			    	content: '加载图片信息失败',
			    	scrollbar: false
					});
				},
				success : function(schema) {
					var bean = eval(schema);
					var list = bean.list;
					if(typeof(list) == "undefined"){
						layer.open({
					    	content: '加载图片信息失败',
					    	scrollbar: false
						});
					}else{
						if(list.length > 0){
							var id = list[0].id;
							var type = list[0].type;
							//请求图片
							src = getImageSrc(id,type);
						}
					}
				},
				dataType : "json"
			});
			return src;
		}
		
		function getImageSrc(id,type){
			var imageSrc;
			$.ajax({
				async : false,
				url : dfs_url,
				data : {
					request : "describeschema",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					id : id,
					schematype : type
				},
				error : function() {//请求失败处理函数  
					layer.open({
			    	content: '加载失败',
			    	scrollbar: false
					});
				},
				success : function(schema) {
					//请求图片
					imageSrc = dfs_url+"?request=getSchemaImage&service=DataFusionService&version=1.0.0&format=json&imageid="+schema.imageId;
				},
				dataType : "json"
			});
			return imageSrc;
		}
		
		//从服务中获取step数据
		function initFlot(steplist){
		   var stepSize=0;
		   if(steplist!=null){
			 stepSize = steplist.length;
		   }
			var stepName = new Array(stepSize);//步骤名称
			var time = new Array(stepSize);//花费时间s
			for(var i = 0;i<stepSize;i++){
				stepName[i] = steplist[i].stepName;
				time[i] = steplist[i].step_executetime;
			}
			//var stepName = ['步骤一', '二', '三'];
			//var time = [5, 10, 3];
			$('#stepExecuteInfo').highcharts({
		        title: {
		            text: '各步骤执行时间',
		            x: -20 //center
		        },
		        credits : {
		                enabled:false//不显示highCharts版权信息
		        },
		        xAxis: {
		            categories: stepName
		        },
		        yAxis: {
		            title: {
		                text: '时间 (秒)'
		            },
		            plotLines: [{
		                value: 0,
		                width: 1,
		                color: '#808080'
		            }]
		        },
		        tooltip: {
		            valueSuffix: '秒'
		        },
		        legend: {
		        	enabled:false,
		            layout: 'vertical',
		            align: 'right',
		            verticalAlign: 'middle',
		            borderWidth: 0
		        },
		        series: [{
		        	name: "执行时间",
		            data: time
		        }]
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
			    	content: '获取节点信息失败',
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
    	
		
		function taskExecuteInfo(){
			var url = "taskExecuteInfo.jsp?taskId="+taskId;
			location.href=url;
		}
		
		function findNode(nodeid){
		   var url=dfs+"/modular/node/nodeManage.jsp?node_id="+nodeid;
		   location.href=url;
		}
    </script>
    <script id="taskInfo" type="text/html">
    	<p>
		    <span>任务名称：{{bean.taskName}}</span>
		    <span>方案名称：{{bean.schemaName}}</span>
		    <span>所在分组：{{bean.nodeGroupName}}</span>
		</p>
		<p>
		    <span>执行周期：
             {{if bean.cycle=='1'}}
				 执行一次
             {{/if}}
             {{if bean.cycle=='5'}}
				每{{bean.cyclenum}}天{{bean.cyclenumhour}}点钟执行一次
             {{/if}}
             {{if bean.cycle=='2'}}
				 每{{bean.cyclenum}}秒执行一次
			 {{/if}}
			 {{if bean.cycle=='3'}}
				 每{{bean.cyclenum}}分执行一次
			 {{/if}}
			 {{if bean.cycle=='4'}}
				每{{bean.cyclenum}}小时执行一次
			 {{/if}}
            </span>
		    <span>开始时间：{{bean.starttime}} </span>
		</p>
		<p>任务描述：{{bean.description}}</p>
		<p>任务参数：
			{{each bean.parameters as param }}
				{{param.name}}:
                {{if param.value==''}}
                {{param.defaultValue}}
                {{else}}
                {{param.value}}
                {{/if}}
			{{/each}}
		</p>
    </script>
    <!-- <span>预计完成时间：{{bean.expextFinishtime}}</span> -->
    <script id="executeDetailInfo" type="text/html">
    	<div class="plan-tr3">
            <p>
                <span>所在节点：<a href="javascript:findNode('{{bean.nodeId}}')">{{bean.nodeGroupName}}/{{bean.nodeName}}</a></span>
                <span>执行开始时间：{{bean.starttime}}</span>
            </p>
            <p>
                <span>已耗时:{{setContinueTime(bean.starttime)}} </span>
            </p>
        </div>
        <div class="plan-tr2">执行步骤</div>
        <div id="stepImage" class="plan-tr3"><img src="{{getImageURL}}" /></div>
        <div class="plan-tr2">各步骤执行时间</div>
        <div id="stepExecuteInfo" style="width:100%;height:300px;" class="plan-tr3"></div>
    </script>
    
  </head>
  
  <body>
    
  	<div>
		<!-- <div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">数据融合</a> -> 任务详情</span>
		</div> -->
  
    <div class="plan-left">
        <div class="plan-tltle"><h2>任务详情</h2>
        	<a href="javascript:history.back();" title="返回">返回</a>
        	<a href="javascript:taskExecuteInfo();" title="历次执行情况">历次执行情况</a></div>
        <div class="plan-tr2">任务基本信息</div>
        <!-- 任务基本信息 -->
        <div id="taskBasicInfo" class="plan-tr3"></div>
        <div class="plan-tr2">任务执行信息</div>
        <!-- 任务执行信息 -->
        <div id="executeInfo"></div>
    </div>
    	    
	</div>
	
  </body>
</html>
