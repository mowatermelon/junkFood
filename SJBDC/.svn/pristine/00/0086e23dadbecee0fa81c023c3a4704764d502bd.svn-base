<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%@ include file="../../common/dfs_url.jsp" %>
<%@ include file="../../common/top.jsp" %>
<%@ include file="../../common/left.jsp" %>
<%@ include file="../paging/paging.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>任务管理</title>

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

    <link href="<%=_path %>/css/ui-dialog.css" rel="stylesheet" />
	<script src="<%=_path %>/js/layer/layer.js"></script>
	<script src="<%=_path %>/js/task_js/task.js"></script>
	<script type=text/javascript>
		var dfsurl = '${dfs_url}';
		var pageSize = '${pageSize}';
		var pageIndex = 1;
		var pageCount = 0;
		$(document).ready(function() {
			$("#firstpane .menu_body:eq(1)").show();
	        $("#firstpane a.menu_head").click(function(){
	            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
	            $(this).siblings().removeClass("current");
	        });
	        $.ajaxSetup ({ cache: false }); 
			queryTask();
			
			//全选，反选
			$("#allTask").click(function(){
			    var isChecked = $(this).prop("checked");
			    $("input[name='CheckboxGroup']").prop("checked", isChecked);
			});
		});
		
		function taskDetailInfo(taskId){
			var url = "taskDetailInfo.jsp?taskId="+taskId;
			location.href=url;
		}
		
		function taskExecuteInfo(taskId){
			var url = "taskExecuteInfo.jsp?taskId="+taskId;
			location.href=url;
		}
		
		function reset(){
			$("#taskname").val("");
			$("#schemaname").val("");
			$("#state").val("");
		}
	</script>

	<script id="taskExecuteInfo" type="text/html">
		{{each list as value index}}
		<tr>
			<td class="fxk"><input type="checkbox" name="CheckboxGroup" value="{{value.taskName}};{{value.state}};{{value.isrunningJob}}"></td>
            <td>{{index+1}}</td>
			<td>{{value.taskName}}</td>
			<td>{{value.schemaName}}</td>
			<td>
				{{if value.state=='Running'}}
						<%--<img src="<%=path%>/images/ico/run.png" title="运行">--%>
						<span  style="color : #77BF54; font-size:14; line-height: 0px;"><br/>运行</span>
				{{else if value.state=='Halting' || value.state=='Stopped'}}
						<%--<img src="<%=path%>/images/ico/suspend.png" title="暂停">--%>
						<span style="color : #222; font-size:14px; line-height: 0px;"><br/>暂停</span>
				{{else if value.state=='Finished'}}
						<span  style="color : #77BF54; font-size:14; line-height: 0px;"><br/>完成</span>
						<%--<img src="<%=path%>/images/ico/ok.png" title="运行">--%>
				{{/if}}
			</td>
			<td>
			{{each value.threeRecentRunningStatus as temp index2}}
				{{if temp=='Finished'}}
					<span><img src="<%=path %>/images/ico/e_complete.png"> </span> 
				{{else if temp=='Running'}}
					<span><img src="<%=path %>/images/ico/e_run.png"> </span>
				{{else if temp=='Halting'}}
					<span><img src="<%=path %>/images/ico/e_suspend.png"> </span>
				{{else if temp=='Error'}}
					<span><img src="<%=path %>/images/ico/e_error.png"> </span>
				{{/if}}
			{{/each}}
			</td>
			<td>{{value.lastFinishtime}}</td>
			<td>{{value.nextFiretime}}</td>
			<td>
				<a href="javascript:taskDetailInfo('{{value.taskName}}')" title="任务详情" style="margin-top:10px;"><img src="<%=_path%>/images/ico/detail.png" ></a>
                <a href="javascript:taskExecuteInfo('{{value.taskName}}')" title="任务执行结果" style="margin-top:10px;"><img src="<%=_path%>/images/ico/comply.png"></a>
            </td>
		</tr>
		{{/each}}
	</script>

</head>
<body>

	<div>
	<!-- 	<div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">数据融合</a> -> 任务管理</span>
		</div> -->

	<div class="clearfloat content">
		<!--任务管理-右边栏-->
		<div class="plan-left">
			<div class="plan-tltle">
				<h2>任务管理</h2>
				<div class="title-add ">
							<a href="createTask.jsp"><img src="/SJBDC/view/maintenance/dfs/images/ico/add.png">任务创建</a>
						</div>
			</div>
			<!--任务管理-->
			<div class="task-gl">
				<div class="plan-tr clearfloat">
					<ul class="task-gl1">
						<li>任务名称：<input name="taskname" id="taskname" type="text">
						</li>
						<li>方案名称：<input name="schemaname" id="schemaname" type="text">
						</li>
						<li>运行状态：
							<select name="state" id="state" class="task-xl2">
								<option value="">任务状态</option>
								<option value="Running">运行</option>
								<!-- <option value="Stop">停止</option> -->
								<option value="Halting">暂停</option>
								<option value="Finished">完成</option>
							</select>
						</li>
						<li class="button-cx"><a href="javascript:queryTask();">查询</a>
						</li>
						<li class="button-cz"><a href="javascript:reset();">重置</a>
						</li>
					</ul>
				</div>
				<div class="clearfloat">
					<ul class="plan-ico">
						<li><a href="javascript:updateTask();"><img src="<%=_path%>/images/ico/edit.png">修改</a></li>
						<li><a href="javascript:deleteTask();"><img src="<%=_path%>/images/ico/delete.png">删除</a></li>
						<!-- <li><a href="javascript:stopTask();"><img src="<%=_path%>/images/ico/stop.png">停止</a></li> -->
						<li><a href="javascript:pauseTask();"><img src="<%=_path%>/images/ico/suspend.png">暂停</a></li>
						<li><a href="javascript:resumeTask();"><img src="<%=_path%>/images/ico/regain.png">恢复</a></li>
						<li><a href="javascript:runTask();"><img src="<%=_path%>/images/ico/run.png">立即执行</a></li>
						<li><a href="javascript:refresh();"><img src="<%=_path%>/images/ico/re-fresh.png">刷新</a></li>
					</ul>
				</div>
				<table border="0" cellspacing="0" id="tab">
					<tr class="type">
						<td class="fxk"><input id="allTask" type="checkbox" name="CheckboxGroup">
						</td>
						<td>序号</td>
						<td>任务名称</td>
						<td>方案</td>
						<td>任务状态</td>
						<td>最近三次运行结果</td>
						<td>
							<span>最近完成时间</span>
						</td>
						<td>
							<span>下次启动时间</span>
						</td>
						<td>操作</td>
					</tr>
				</table>
				<!--页码-->
				<div id="pagination" class="page"></div>
			</div>
		</div>
	</div>
		</div>
	
</body>
</html>