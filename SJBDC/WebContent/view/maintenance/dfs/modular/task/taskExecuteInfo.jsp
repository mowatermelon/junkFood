<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>


<%@ include file="../../common/dfs_url.jsp" %>
<%@ include file="../../common/top.jsp" %>
<%@ include file="../../common/left.jsp" %>
<%@ include file="../paging/paging.jsp" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>任务执行记录</title>
    
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
    
    <script src="<%=_path %>/js/layer/layer.js"></script>
    <script type="text/javascript" src="<%=_path %>/My97DatePicker/WdatePicker.js"></script>
    <script type="text/javascript">
    	var dfs_url = "${dfs_url }";
    	//var id = "${param.taskId}";
    	var id=getUrlParam("taskId",window.location.search);
    	if(id=="null"){
    		id=null;
    	}
    	
    	var state = getUrlParam("state",window.location.search);
    	if(state=="null"){
    		state=null;
    	}
    	var pageIndex = 1;
    	var pageSize = 10;
    	var totalCount = 0;
    	
    	$(document).ready(function() {
    		$("#firstpane .menu_body:eq(1)").show();
	        $("#firstpane a.menu_head").click(function(){
	            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
	            $(this).siblings().removeClass("current");
	        });
	        $.ajaxSetup ({ cache: false }); 
    		loadlist(id);
    	});
    	
    	function loadlist(taskId){
    		var isStart = $("#startOrEnd").val();
    		var startTime = document.getElementById("start").value;
    		var endTime = document.getElementById("end").value;
    		var task_state = state;
    		var isquery = false;
    		if(state!="" || state != null){
    			isquery = true;
    		}
    		$.ajax({
				url : dfs_url,
				data : {
					request : "getTaskexEcuteInfo",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					jobname : taskId,
					start_time : startTime,
					end_time : endTime,
					querytype : isStart,
					isquery : isquery,
					status : task_state,
					startposition : (pageIndex-1)*pageSize,
					pagesize : pageSize*pageIndex
				},
				beforeSend:loading,
				error : function() {//请求失败处理函数  
					layer.close(index);
					layer.open({
			    	content: '获取任务执行情况失败', 
			    	scrollbar: false
					});
				},
				success : function(result) {
					layer.close(index);
					initExecuteInfo(result.list);
					
					totalCount = result.totalCount;
					var pageCount = (totalCount % pageSize == 0 ? totalCount / pageSize
						: Math.ceil(totalCount / pageSize));
					var countArray = new Array(pageCount);
					pagination(pageIndex,countArray);//添加分页页码
				},
				dataType : "json"
			});
    	}
    	
    	function initExecuteInfo(list){
    		var data = {
				list : list
			};
			template.helper("setContinueTime", function(stime,etime) {
				var ctime = 0;
				var s =  Date.parse(stime.replace(/-/g,"/"))*1;
				if(etime != null){
					var e = Date.parse(etime.replace(/-/g,"/"))*1;
					ctime = e-s;
				}else if(etime==null || etime==""){
				   var nowtime=new Date().getTime();
				   ctime=nowtime-s;
				}
				return getContinueTime(ctime);
			});
			template.helper("initLogmsg", function(value) {
				 var contentmsg="";
				 if(value != null){
					 var splitChar = "\r\n";
					 if(value.indexOf("\r\n") < 0){
					 	splitChar = "\n";
					 }
					 var htmlArray = value.split(splitChar);
					 for(var i=0;i<htmlArray.length;i++){
					    contentmsg+=htmlArray[i]+"<br>";
					 }
				 }
				 return contentmsg;
			});
			
			var html = template("executeInfo",data);
			$("#infoList tr:gt(0)").remove();
			$("#infoList tr:eq(0)").after(html);
    	}
    	
    	//分页操作
		function gotoPage(currentpage) {
			pageIndex = currentpage;//更新pageIndex
			loadlist(id);
		}
		
		function query(){
			loadlist(id);
		}
		
		function executelog(htmlcontent){
			layer.open({
			    content: htmlcontent,
			    area: ['680px', '90%'],
			    scrollbar: false
			});
		}
    </script>
    <script id="executeInfo" type="text/html">
		{{each list as value index }}
			<tr>
	            <td class="fxk">{{index+1}}</td>
	            <td>{{value.node_Group}}</td>
	            <td>
					{{if value.executeStatus=='Running'}}
							<%--	<img src="<%=path %>/images/ico/e_run.png"> --%>
							<span  style="color : #77BF54; font-size:14; line-height: 0px;"><br/>运行</span>
					{{else if value.executeStatus=='Halting' || value.executeStatus=='Stopped'}}
						<%--	<img src="<%=path %>/images/ico/e_suspend.png"> --%>
							<font color = "#222" style="font-size:14px; line-height: 0px;"><br/>暂停</font>
					{{else if value.executeStatus=='Finished'}}
						<%--	<img src="<%=path %>/images/ico/e_complete.png"> --%>
							<span  style="color : #77BF54; font-size:14; line-height: 0px;"><br/>完成</span>
					{{else if value.executeStatus=='Error'}}
							<font color = "#FEA1A1" style="font-size:14px; line-height: 0px;"><br/>错误</font>
						<%--	<img src="<%=path %>/images/ico/e_error.png"> --%>
					{{/if}}
          
				</td>
	            <td>{{setContinueTime(value.starttime,value.endtime)}}</td>
	            <td>{{value.starttime}}</td>
	            <td>{{value.endtime}}</td>
	            <td>
                    {{if value.executeStatus=='Finished'}}
						<a href="javascript:executelog('{{initLogmsg(value.logmsg)}}');" title="执行日志详情"><img src="<%=path %>/images/ico/detail.png"></a>
                       {{else if value.executeStatus=='Error'}}
                         <a href="javascript:executelog('{{initLogmsg(value.logmsg)}}');" title="错误日志详情"><img src="<%=path %>/images/ico/log-details.png"></a>
                    {{/if}}
				</td>
	            <%--<td>
                   {{if value.executeStatus=='Error'}}
						<a href="javascript:executelog('{{initLogmsg(value.logmsg)}}');" title="错误日志详情"><img src="<%=path %>/images/ico/log-details.png"></a>
					 {{else}}
                         <a href="javascript:void(0);" title="错误日志详情"><img src="<%=path %>/images/ico/log-details.png"></a>
					{{/if}}
				</td> --%>
	        </tr>
		{{/each}}
    </script>
  </head>
  
  <body>
    
  	<div>
	<!-- 	<div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">数据融合</a> -> 任务执行结果</span>
		</div> -->
  
  	<div class="clearfloat content">
  	<div class="plan-left">
        <div class="plan-tltle"><h2>任务执行结果</h2><a href="javascript:history.back();" title="返回">返回</a></div>
        <!--任务执行结果-->
        <div class="task-gl">
            <div class="plan-tr clearfloat border0">
                <ul class="task-zxjg">
                	<li>
	                	<select id="startOrEnd" name="" class="task-xl2">
	                	<option value="1"> 执行开始时间</option>
	                	<option value="2"> 执行结束时间</option>
	                	</select>
                	</li>
                    <li>开始日期：<input id="start" class="Wdate" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" name="" type="text"></li>
                    <li>截止日期：<input id="end" class="Wdate" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" name="" type="text"></li>
                    <li><a href="javascript:query();">查询</a></li>
                </ul>
            </div>
            <table id="infoList" border="0" cellspacing="0">
                <tr class="type">
                    <td>序号</td>
                    <td>分组-节点</td>
                    <td>执行状态</td>
                    <td>执行用时（分）</td>
                    <td><span>执行开始时间</span></td>
                    <td><span>执行结束时间</span></td>
                    <td>日志</td>
                    <%-- <td>错误日志</td>--%>
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
