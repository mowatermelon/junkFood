<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="../../common/dfs_url.jsp" %>
<%@ include file="../../common/top.jsp" %>
<%@ include file="../../common/left.jsp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

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
		  	min-height: 650px;
		}

	</style>
	<!-- 数据服务平台 覆盖样式 end-->

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type=text/javascript src="<%=path %>/js/jquery.validate.js"></script>
<script type=text/javascript src="<%=path %>/js/messages_cn.js"></script>
<link rel="stylesheet" href="<%=_path%>/css/zTreeStyle/zTreeStyle.css" type="text/css"> 
<script type="text/javascript" src="<%=_path %>/js/zTreeJs/jquery.ztree.core-3.5.js"></script>
<script src="<%=_path %>/js/layer/layer.js"></script>
<script type="text/javascript" src="<%=_path %>/My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript" src="<%=_path %>/js/task_js/createTask.js"></script>
<title>武大吉奥GeoSmarter数据融合管理中心 - 任务创建</title>
<style type="text/css">
ul.ztree {margin-top: 10px;border: 1px solid #617775;background: #f0f6e4;width:190px;height:160px;overflow-y:scroll;overflow-x:auto;}
</style>
<script type=text/javascript>
	var dfsurl = '${dfs_url}';
	var dfspost='${dfs_url_proxy}';
	var id='${param.id}';
	//var id=getUrlParam("id",window.location.search);
	$(document).ready(function() {
	    //加载菜单
		$("#firstpane .menu_body:eq(1)").show();
        $("#firstpane a.menu_head").click(function(){
            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
        });
        if(id=="" ||  id=='undefined' || id == null){
        	$("#task_title").html("任务创建");
        }else{
            $("#task_title").html("任务修改");
        }
        $.ajaxSetup ({ cache: false }); 
		initNodeGroup();
		$("#taskForm").validate();
		
		if(id=="" || id=='undefined' || id == null){//处于更新任务的时候不检测
			jQuery.validator.addMethod("taskname", function(value, element) {    //用jquery ajax的方法验证任务名是不是已存在  
		      var flag = 1;  
		      $.ajax({
		        async : false,
				url : dfsurl,
				data : {
					request : 'GETTASK',
					service : 'DataFusionService',
					version : '1.0.0',
					format : 'json',
					NAME:value
				},
				error:function(msg){
				},
				success : function(msg) {
					if(msg.taskName!=null){
						flag=0;
					}else{
					    flag=1;
					}
				},
				dataType : "json"
			});  
		      if(flag == 0){  
		          return false;  
		      }else{  
		          return true;  
		      }  
		  
		  }, "任务名已经存在");
		}
		//修改
		if(id!='' && id!='undefined' && id!=null){
			$("#task_title").html("任务修改");
		    //根据ID查找任务的详细信息
		        $.ajax({
				     async:false,
				     url:dfsurl,
				     data:{
				        request:'GETTASK',
				        service:'DataFusionService',
				        version:'1.0.0',
				        format:'json',
				     	NAME:id,
				     	UPDATE:'updateTask'
				     },
				     error: function(d){
				     	return false;
				     },
				     success:function(da){
				     	//任务名称
				        $('#taskName').val(da.taskName);
				        $('#taskName').attr("readonly",true);//更新任务，任务名称不能修改
				        //任务说明
				        $('#description').val(da.description);
				        //方案ID
				        $('#schemaId').val(da.schemaId);
				        //方案的名称
				        $('#schemaName').val(da.schemaName);
				        //方案的类型
				        $('#schemaType').val(da.schemaType);
				        //方案的参数
				        var paramlist=da.parameters;
				        var paramstr="";
				        if(paramlist!=null && paramlist.length>0){
				           for(var i=0;i<paramlist.length;i++){
				             var name=paramlist[i].name;
				             var des=paramlist[i].description;
				             var defaultValue=paramlist[i].defaultValue;
				             var value=paramlist[i].value;
				             if(value=='' && defaultValue!=''){
				                paramstr=paramstr+name+"="+defaultValue+"="+des+",";
				             }else if(value!=''){
				                paramstr=paramstr+name+"="+value+"="+des+",";
				             }
				           }
				           //去掉最后一个逗号
							if(paramstr!="" && paramstr.indexOf(",")>0){
						  	   paramstr=paramstr.substring(0,paramstr.length-1);
						  	   $('#parentIframe').val(paramstr);
							}
				        }
				        //关注人
				        var userInfoArray = da.caredInfo;
				        if(userInfoArray!=null && userInfoArray.length>0){
				           for(var m = 0;m<userInfoArray.length;m++){
					        var trId = $("#careduserTable tr").length+1;
				        	var caredObj = eval(userInfoArray[m]);
				        	if(caredObj.careMethod == "email"){
						        var caredMethod = "邮件";
				        	}
				        	
					        var caredType = "";
				        	if(caredObj.careType.indexOf("Error")>-1){
				        		caredType+="执行失败";
				        	}
				        	if(caredObj.careType.indexOf(",")>-1){
				        		caredType+="、";
				        	}
				        	if(caredObj.careType.indexOf("Finished")>-1){
				        		caredType+="执行成功";
				        	}
				  			var html="<tr id=\""+trId+"\"><td>"+caredObj.tousername+"<input type=\"hidden\" id=\"caredEmail\" value=\""+caredObj.email+"\"></td><td>"+caredType+"</td>"+
									 "<td>"+caredMethod+"</td>"+
									 "<td><a href=\"javascript:alterCaredUser('"+trId+"');\" title=\"编辑\"><img src=\"<%=path %>/images/ico/edit.png\"></a>"+
									 "<a href=\"javascript:deleteCareduser('"+trId+"');\" title=\"删除\"><img src=\"<%=path %>/images/ico/delete.png\"></a></td></tr>";
				  			$("#careduserTable").append(html);
				        }
				        }
				        
				        //节点组
				        var nodeGroupId=da.nodeGroupId;
				        //节点组名称
				        var nodeGroupName=da.nodeGroupName;
				        $("#nodeGroup").val(nodeGroupId);
				        //开始时间
				        var starttime=da.starttime;
				        $('#starttime').val(starttime);
				        //周期
				        var cycle=da.cycle;
				        initCycle(cycle);
				        $('#cycle').val(cycle);
				        if(cycle!='1'){
				          var cyclenum= da.cyclenum;
				          $('#cyclenum').val(cyclenum);
				         // if(cycle=='5'){
				          //  var cyclenumhour=da.cyclenumhour;
				         //   $('#cyclenumhour').val(cyclenumhour);
				        //  }
				          $("#cyclemode_td").css('display','block');
				          if(da.endtime != null && da.endtime !=""){
				          	$("#enddateRadio2").attr("checked","checked");
				          	$("#enddate").attr("disabled",false);
				          	$("#enddate").val(da.endtime);
				          }
				        }
				        
				     },
			    	dataType:"json"
			     });
		}
	});
	
	
</script>
</head>
<body>
	<div>
		<!-- <div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">数据融合</a> -> 任务创建</span>
		</div> -->
	<form  id="taskForm" method="post" action="">
		<div class="clearfloat content">
			<!--任务创建右边栏-->
			<div class="plan-left">
				<div class="plan-tltle">
					<h2 id="task_title">任务创建</h2>
					<a href="javascript:history.back();" title="返回">返回</a>
				</div>
				<div class="task-cj">
					<div class="task-tr clearfloat">
						<span>名称：</span> <input type="text" class="task-bd1 required taskname"
							name="taskName" id="taskName">
					</div>
					<div class="task-tr clearfloat">
						<span>说明：</span>
						<textarea name="description" id="description" class="task-bd2"></textarea>
					</div>
					<div class="task-tr clearfloat">
						<span>方案：</span> <input name="schemaId" id="schemaId" type="hidden"> 
							<input name="schemaType" id="schemaType" type="hidden">
							<input name="schemaName" id="schemaName" type="text" class="task-bd3 required" onclick="getSchemaTree();">
						<a href="javascript:getParameterInfo();" class="task-but1"
							title="参数设置">参数设置</a> <input type="hidden" id="parentIframe">
							<input type="hidden" id="old_id">
					</div>
					<div class="task-tr clearfloat">
						<span>分组：</span> <select id="nodeGroup" name="nodeGroup"
							class="task-xl required">
							<option></option>
							<!--<option>--任务执行状态--</option>
                   <option value="Running"> 运行</option>
                   <option value="Finished"> 停止</option>
                   <option value="Halting"> 暂停</option>-->
						</select>
					</div>
					<div class="task-tr clearfloat">
						<span>关注人及关注类型：</span>
						<div class="task-gz">
							<table border="0" cellspacing="1" id="careduserTable">
								<tr class="task-type">
									<td>关注人</td>
									<td>关注类型</td>
									<td>通知类型</td>
									<td>操作</td>
								</tr>
							</table>
							<a href="javascript:addCare()" class="task-but2" title="增加">增加</a>
						</div>
					</div>
					<div class="task-tr clearfloat">
						<span>开始时间：</span> <input name="starttime" type="text"
							id="starttime" class="task-bd3 required"
							onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',minDate: '%y-%M-%d' });">
					</div>
					<div class="task-tr clearfloat">
						<span>周期：</span> <select name="cycle" class="task-xl required" id="cycle"
							onchange="changeCycle();">
							<option value="1">执行一次</option>
							<option value="2">秒</option>
							<option value="3">分</option>
							<option value="4">小时</option>
							<option value="5">天</option>
						</select>
					</div>
					<div class="task-tr clearfloat" id="cyclemode_td"
						style="display:none;">
						<span>周期模式：</span>
						<div id="cyclemode_span">
							每<input type="text" id="cyclenum" name="cyclenum"
								class="task-bd3"
								style="float:none;display:inline-block;width:50px;">秒
						</div>
					</div>
					<div class="task-tr clearfloat" style="display:none;"
						id="enddate_td">
						<span>截止日期：</span>
						<div>
							<input type="radio" id="enddateRadio" name="enddateRadio"
								checked="checked" value="0"
								style="float:none;display:inline-block;margin-top:10px;"
								onchange="enableEnddate(this.value);">永不结束 <input
								type="radio" id="enddateRadio2" name="enddateRadio" value="1"
								style="float:none;display:inline-block;margin-top:10px;"
								onchange="enableEnddate(this.value);"><input type="text"
								disabled="disabled" name="enddate" id="enddate"
								readonly="readonly"
								onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'});"
								style="float:none;display:inline-block;">
						</div>
					</div>
					<div class="task-tr clearfloat">
						<input type="submit" style="display:none" /> <a
							href="javascript:createTask();" title="创建" class="task-but3"
							style="margin-left:250px;">保存</a> <a
							href="javascript:renovates();" title="取消" class="task-but4">取消</a>
					</div>

					<div id="menuContent" class="menuContent"
						style="display:none; position: absolute;">
						<ul id="treeDemo" class="ztree"
							style="margin-top:0; min-width: 173px;min-height:90px;"></ul>
					</div>
				</div>
			</div>
		</div>
	</form>
	</div>
</body>
</html>