var ids = "";
function queryTask() {

	var taskname = $("#taskname").val();
	var schemaname = $("#schemaname").val();
	var status = $("#state").val();
	$.ajax({
		url : dfsurl,
		data : {
			request : 'GETTASK',
			service : 'DataFusionService',
			version : '1.0.0',
			format : 'json',
			taskName : taskname,
			SCHEMANAME : schemaname,
			state : status,
			startposition : (pageIndex - 1) * pageSize,
			maxcount : pageSize
			
		},
		beforeSend:loading,
		success : function(task) {
		    layer.close(index);
		    var obj =task;
			var totalCount = obj.totalCount;
			var list = obj.list;
			if (totalCount >= 0) {
				initTaskExecutInfo(list);
				//分页页码设置
				pageCount = (totalCount % pageSize == 0 ? totalCount / pageSize: Math.ceil(totalCount / pageSize));
				var countArray = new Array(pageCount);
				pagination(pageIndex, countArray);//添加分页页码
			}else{
			   //清空任务列表
			   $("#tab tr:eq(0)").nextAll().remove();
			   $("#pagination").remove();
			}
		},
		dataType : "json"
	});
}

//获取所有选中的任务的id数组
function getSelect(){
	var checkBoxlist = $("input[name='CheckboxGroup']:checked");
	var ids = "";
	//此处循环算法过滤掉全选复选框
	var isAll = $("#allTask").prop("checked");
	if(!isAll){
		for(var i = 0;i<checkBoxlist.length;i++){
			ids+= checkBoxlist[i].value+",";
		}
	}else{
		for(var i = 0;i<checkBoxlist.length-1;i++){
			ids+= checkBoxlist[i+1].value+",";
		}
	}
	ids = ids.substring(0, ids.length - 1);
	return ids;
}

//填充任务执行情况 模板
function initTaskExecutInfo(result) {
	var data = {
		list : result
	};
	var html = template("taskExecuteInfo", data);
	$("#tab tr:eq(0)").nextAll().remove();
	$("#tab tr:eq(0)").after(html);
}

//分页操作
function gotoPage(currentpage) {
	pageIndex = currentpage;//更新pageIndex
	queryTask();
}

//删除
function deleteTask(){
    ids=getSelect();
    if(ids==""){
	    layer.open({
    	content: '请选择一条记录',
    	scrollbar: false
		});
	}else if(ids!="" && ids.split(",").length>1){
        layer.open({
	    	content: '不支持批量操作',
	    	scrollbar: false
		});
    }else if(ids.split(",").length==1){
         var status=ids.split(";")[1];
          //如果状态是正在运行、暂停状态，给予提示
        layer.confirm('删除任务可能会影响到数据的准确性！', {
		    btn: ['是','否'],
		    shade: false 
		}, function(){
			var otype = "DELETETASK";
			executeOperate(otype);
		}, function(){
		    return;
		});
    }
   
}

//停止
function stopTask(){
	var otype = "STOPTASK";
	executeOperate(otype);
}
//暂停
function pauseTask(){
	var otype = "PAUSETASK";
	executeOperate(otype);
}
//恢复
function resumeTask(){
	var otype = "RESUMETASK";
	executeOperate(otype);
}
//运行
function runTask(){
	var otype = "RUNTASK";
	executeOperate(otype);
}
//刷新
function refresh(){
	queryTask();
}

//参数operateType为请求服务的接口标示
//runTask,stopTask,deleteTask,pauseTask,resumeTask
function executeOperate(operateType){
    ids = getSelect();
    if(ids==""){
	    layer.open({
    	content: '请选择一条记录',
    	scrollbar: false
		});
	}else if(ids!="" && ids.split(",").length>1){
	    layer.open({
    	content: '不支持批量操作',
    	scrollbar: false
		});
	}else{
	   var status= ids.split(";")[1];
	   var isrunningjob=ids.split(";")[2];
	   var msg="";
	    if(operateType=="PAUSETASK"){
	        if(status=='Halting'){
	            msg="已暂停的任务，不能再暂停！";
	        }else if(status=='Stopped'){
	            msg="已暂停的任务，不能暂停！";
	        }else if(status=='Finished'){
	            msg="已完成的任务，不能暂停！";
	        }else if(isrunningjob=='true'){
	            msg="此任务，不能暂停！";
	        }
	   }else if(operateType=="RESUMETASK"){
	       if(status=='Running'){
	            msg="正在运行的任务，不能恢复！";
	       }else if(status=='Finished'){
	            msg="已完成的任务，不能恢复！";
	       }
	   }else if(operateType=="RUNTASK"){
	      if(status=='Stopped'){
	           msg="已暂停的任务，不能运行！";
	      }else if(status=='Halting'){
	          msg="已暂停的任务，不能运行";
	      }
	   }
	   if(msg!=""){
	         layer.open({
		    	content: msg,
		    	scrollbar: false
				});
	   }else{
	       taskid=ids.split(";")[0];
	       $.ajax({
			url : dfsurl,
			data : {
				request : operateType,
				service : "DataFusionService",
				version : "1.0.0",
				format : "json",
				TNAMES : taskid
			},
			beforeSend:loading,
			success : function(result) {
				layer.close(index);
			    if(result.status==true){
					layer.open({
			    	content: '操作成功',
			    	scrollbar: false,
			    	yes:function(yesindex){
			    	    layer.close(yesindex);
						refresh();//执行成功刷新列表
			    	}
					});
			    }else{
			       layer.open({
			    	content: '操作失败',
			    	scrollbar: false,
			    	yes:function(yesindex){
			    	    layer.close(yesindex);
						refresh();//执行成功刷新列表
			    	}
					});
			    }
			},
			dataType : "json"
		});
	   }
	 
		
	}
	
}

//修改任务
function updateTask(){
	var checknum=$("input[name='CheckboxGroup']:checkbox:checked").length;
	var all = $("#allTask").is(':checked');
	
	if(checknum==0){
		layer.open({
	    	content: '请选择一条记录！',
	    	scrollbar: false
		});
	}else if(checknum!='1' || all == true){
		layer.open({
	    	content: '不支持批量修改，<br>请去掉全选按钮，并请选择一条记录！',
	    	scrollbar: false
		});
	}else{
	   //修改
	   var checkvalue= $("input[name='CheckboxGroup']:checkbox:checked").val();
	   var id=checkvalue.split(";")[0];
	   var dfsurl='${dfs_url}';
	   location="createTask.jsp?id="+id;
	}
}
