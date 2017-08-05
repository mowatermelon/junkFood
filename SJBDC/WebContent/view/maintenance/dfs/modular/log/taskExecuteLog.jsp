<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<%@ include file="../../common/dfs_url.jsp" %>
<%@ include file="../../common/top.jsp" %>
<%@ include file="../../common/left.jsp" %>
<%@ include file="../paging/paging.jsp" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>任务执行日志</title>
    
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
    
    <script type="text/javascript" src="<%=_path %>/My97DatePicker/WdatePicker.js"></script>
    <script src="<%=_path %>/js/layer/layer.js"></script>
    <script type="text/javascript">
    	var dfs_url = "${dfs_url}";
    	var indexState = "${param.state}";
    	var pageIndex = 1;
    	var pageSize = 10;
    	var is_query = false;
    	//执行id
    	var taskexcute="${param.taskexecuteid}";
    	if(taskexcute=='' || taskexcute=='undefined' || taskexcute==null){
    	    taskexcute='';
    	}
    	$(document).ready(function(){
        	$("#firstpane .menu_body:eq(3)").show();
	        $("#firstpane a.menu_head").click(function(){
	            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
	            $(this).siblings().removeClass("current");
	        });
	        
	        if(typeof(indexState) != "undefined" && indexState!=''){//首页跳转过来
	        	var cdate = "${param.cdate}";
	    		is_query = true;
	    		$("#taskState").val(indexState);
	    		$("#startOrEnd").val(2);
	    		$("#startOrEnd").find("option[text='任务结束时间']").attr("selected",true);
	    		cdate = Math.round(cdate / 1000 );
	    		var sdate = new Date(cdate*1000);
	    		$("#startTime").val(sdate.format("yyyy-MM-dd hh:mm:ss"));
	    		var edate = new Date((cdate+600)*1000);
	    		$("#endTime").val(edate.format("yyyy-MM-dd hh:mm:ss"));
    		}
	        getTaskExecuteLog(is_query);
    	});
    	
    	function getTaskExecuteLog(isQuery){
    		is_query = isQuery;
    		var keyword = $("#keyWord").val();
    		var status = $("#taskState").val();
    		var isStart = $("#startOrEnd").val();
    		var stime = $("#startTime").val();
    		var etime = $("#endTime").val();
    		
    		var pSize;
    		$.ajax({
				url : dfs_url,
				data : {
					request : "getTaskexEcuteInfo",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					keyword : keyword,
					status : status,
					querytype : isStart,
					start_time : stime,
					end_time : etime ,
					startposition : (pageIndex-1)*pageSize,
					pagesize : pageSize*pageIndex,
					isQuery : isQuery,
					taskexecuteid:taskexcute
				},
				error : function() {//请求失败处理函数  
					layer.close(index);
					layer.open({
			    	content: '查询任务执行信息失败！',
			    	scrollbar: false
					});
				},
				beforeSend:loading,
				success : function(map) {
				 	layer.close(index);
					initLoglist(map.list);
					
					totalCount = map.totalCount;
					var pageCount = (totalCount % pageSize == 0 ? totalCount / pageSize
						: Math.ceil(totalCount / pageSize));
					var countArray = new Array(pageCount);
					pagination(pageIndex,countArray);//添加分页页码
				},
				dataType : "json"
			});
    	}
    	
    	function initLoglist(loglist){
    		var data = {
				list : loglist
			};
			template.helper("setContinueTime", function(stime,etime) {
				var ctime = 0;
				var s=Date.parse(stime.replace(/-/g,"/"))*1; 
				if(etime != null){
					var e=Date.parse(etime.replace(/-/g,"/"))*1; 
					ctime = e-s;
				}else if(etime==null || etime==""){
				   var nowtime=new Date().getTime();
				   ctime=nowtime-s;
				}
				return getContinueTime(ctime);
			});
			var html = template("taskExecutelog", data);
			$("#loglist tr:eq(0)").nextAll().remove(); 
			$("#loglist tr:eq(0)").after(html);
    	}
    	
    	function gotoPage(currentpage){
    		pageIndex = currentpage;//更新pageIndex
			getTaskExecuteLog(is_query);
    	}
    	
    	function gotologDetail(log_id,status){
    		location.href="taskExecutelogDetail.jsp?id="+log_id+"&status="+status;
    	}
    	
    	function resetQuery(){
    	  $("#keyWord").val("");
    	  $("#startTime").val("");
    	  $("#endTime").val("");
    	}
    </script>
    
    <script id="taskExecutelog" type="text/html">
    	{{each list as value index}}
    		<tr>
	            <td>{{index+1}}</td>
	            <td>{{value.jobName}}</td>
	            <td>{{value.schemaName}}</td>
	            <td>{{value.node_Group}}</td>
	            <td>{{value.start_time}}</td>
	            <td>{{value.end_time}}</td>
	            <td>{{setContinueTime(value.start_time,value.end_time)}}</td>
	            <td>
	            	{{if value.executeStatus=='Running'}}
						<a href="javascript:void(0)" title="运行">
							<img src="<%=path %>/images/ico/e_run.png">
						</a>
					{{else if value.executeStatus=='Halting' || value.executeStatus=='Stopped'}}
						<a href="javascript:void(0)" title="暂停">
							<img src="<%=path %>/images/ico/e_suspend.png">
						</a>
					{{else if value.executeStatus=='Finished'}}
						<a href="javascript:void(0)" title="完成">
							<img src="<%=path %>/images/ico/e_complete.png">
						</a>
					{{else if value.executeStatus=='Error'}}
						<a href="javascript:void(0)" title="错误">
							<img src="<%=path %>/images/ico/e_error.png">
						</a>
					{{/if}}
	            </td>
	            <td><a href="javascript:gotologDetail('{{value.id}}','{{value.executeStatus}}');" title="任务详情"><img src="<%=path %>/images/ico/detail.png"></a></td>
        	</tr>
    	{{/each}}
    </script>

  </head>
  
  <body>
  
  	<div>
		<!-- <div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">数据融合</a> -> 任务执行日志</span>
		</div> -->
  
  	<div class="clearfloat content">
  		<div class="plan-left">
        <div class="plan-tltle">
        	<h2>任务执行日志</h2>
        	<a href="javascript:;" onClick="javascript:history.back(-1);" title="返回">返回</a>
        </div>
        <!--任务执行日志-->
        <div class="task-gl">
            <div class="plan-tr clearfloat border0">
                <ul class="journal-input">
                	
                    <li>关&nbsp;&nbsp;键&nbsp;&nbsp;字：<input id="keyWord" name="" type="text"></li>
                    <li>执行状态：
                    	<select id="taskState" name="" class="task-xl2">
                    	<option value="">--请选择--</option>
                    	<option value="Halting">暂停</option>
                    	<option value="Running">正在运行</option>
                    	<option value="Error">错误</option>
                    	<option value="Finished">完成</option>
                    	</select>
                    </li>
                    </ul>
                    <ul class="journal-input">

                    <li>时间类型：
	                	<select id="startOrEnd" name="" class="task-xl2">
	                	<option value="1"> 任务开始时间</option>
	                	<option value="2"> 任务结束时间</option>
	                	</select>
                	</li>
                    <li>时间：
                    	<input id="startTime" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" name="" type="text" class="input-time">
                    		&nbsp;&nbsp;至&nbsp;&nbsp;
                    	<input id="endTime" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" name="" type="text" class="input-time">
                    </li>
                    <li class="button-cx"><a href="javascript:getTaskExecuteLog(true);">查询</a></li>
                    <li class="button-cz"><a href="javascript:resetQuery();">重置</a></li>
                </ul>
            </div>
            <table id="loglist" border="0" cellspacing="0">
                <tr class="type">
                    <td>序号</td>
                    <td>任务名称</td>
                    <td>方案名称</td>
                    <td>分组/节点</td>
                    <td><span>任务开始时间</span></td>
                    <td><span>任务结束时间</span></td>
                    <td>任务耗时</td>
                    <td>执行状态</td>
                    <td>操作</td>
                </tr>
            </table>
            <!-- 分页 -->
            <div id="pagination" class="page"></div>
        </div>
	    </div>
	</div>
	
	</div>
	
  </body>
</html>
