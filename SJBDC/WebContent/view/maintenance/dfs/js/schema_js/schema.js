//第一次加载目录结构以及查询所有的方案列表
function onLoad() {
	var setting = {
		view: {
				showLine: true,
				selectedMulti: false,
				dblClickExpand: false
			},
			data: {
				simpleData: {
					enable: true,
					idKey: "id",
					pIdKey: "parentId",
					rootPId: 0
				}
			},
		callback : {
			onClick : click
		}
	};
	
	$.ajax({
		url : dfs_url,
		data : {
			request : "getcatalog",
			service : "DataFusionService",
			version : "1.0.0",
			format : "json"
		},
		beforeSend:loading,
		error : function() {//请求失败处理函数
		    layer.close(index);  
			var d = dialog({
			    title: '提示',
			    content: '加载目录失败',
			    okValue:'确定'
			});
			d.width(320).show();
		},
		success : function(directory) {
		    layer.close(index);
			/*var treeNodes = eval(directory);
			$.fn.zTree.init($("#plan_directory"), setting, treeNodes);
			zTree = $.fn.zTree.getZTreeObj("plan_directory");
			zTree.expandAll(true);*/
			
		},
		dataType : "json"
	});
	loadSchemaList();
}

//目录点击事件
function click(e, treeId, treeNode) {
	dirId = treeNode.id;
	isQuery = false;
	if(!isQuery){
		pageIndex = 1;
	}
	getSchemaByDirectoryId(treeNode.id);
}

//通过目录id获取方案
function getSchemaByDirectoryId(directoryId) {
	$.ajax({
		url : dfs_url,
		data : {
			request : "describeschema",
			service : "DataFusionService",
			version : "1.0.0",
			format : "json",
			ID_DIRECTORY : directoryId,
			startposition : (pageIndex-1)*pageSize,
			maxcount : pageSize
		},
		beforeSend:loading,
		error : function() {//请求失败处理函数
		    layer.close(index);  
			var d = dialog({
			    title: '提示',
			    content: '获取方案失败',
			    okValue:'确定'
			});
			d.width(320).show();
		},
		success : function(result) {
			layer.close(index);
			initData(result);
		},
		dataType : "json"
	});
}

//第一次访问页面加载列表
function loadSchemaList(){
	$.ajax({
		url : dfs_url,
		data : {
			request : "describeschema",
			service : "DataFusionService",
			version : "1.0.0",
			format : "json",
			startposition : (pageIndex-1)*pageSize,
			maxcount : pageSize
		},
		beforeSend:loading,
		error : function() {//加载方案列表  
		    layer.close(index);
			var d = dialog({
			    title: '提示',
			    content: '加载方案列表失败',
			    okValue:'确定'
			});
			d.width(320).show();
			
		},
		success : function(result) {
			layer.close(index);
			initData(result);
		},
		dataType : "json"
	});
}

//将服务返回的数据显示
function initData(result){
	var map = eval(result);
	var totalCount = map.totalCount;
	var list = map.list;
	addSchema(list);//添加列表显示
	//分页页码设置
	pageCount = (totalCount % pageSize == 0 ? totalCount / pageSize
					: Math.ceil(totalCount / pageSize));
	var countArray = new Array(pageCount);
	pagination(pageIndex,countArray);//添加分页页码
}

//artTemplate 调用添加方案列表
function addSchema(sArray){
	var data = {
		list: sArray
	};
	var listhtml = template("schemalist", data);
	$("#schema_list tr:eq(0)").nextAll().remove();
	$("#schema_list tr:eq(0)").after(listhtml);
}


//条件查询
function querySchema(){
	if(!isQuery){
		isQuery = true;//更改显示数据状态为查询数据
		pageIndex = 1;
	}
	dirId = "";
	
	/*var schemaName = document.getElementById("schameName").value;*/
	var startTime = document.getElementById("start").value;
	var endTime = document.getElementById("end").value;
	var timeType = document.getElementById("timeType").value;
	var date_type = "";
	
	if(timeType=='1'){
		date_type = "created_date";
	}else{
		date_type = "modified_date";
	}
	/*
	//增加查询条件
	if(createTime != "" ){
		date_type = "created_date";
		startTime = createTime.split("-")[0];
		endTime = createTime.split("-")[1];
	}
	
	if(updateTime != ""){
		date_type = "modified_date";
		startTime = updateTime.split("-")[0];
		endTime = updateTime.split("-")[1];
	}*/
	
	var ajaxData = {
			request : "describeschema",
			service : "DataFusionService",
			version : "1.0.0",
			format : "json",
			//name : schemaName,
			datetype : date_type,
			starttime : startTime,
			endtime : endTime,
			startposition : (pageIndex-1)*pageSize,
			maxcount : pageSize
	};
	
	$.ajax({
		url : dfs_url,
		data : ajaxData,
		error : function() {//请求失败处理函数
		   layer.close(index);  
			var d = dialog({
			    title: '提示',
			    content: '执行查询失败',
			    okValue:'确定'
			});
			d.width(320).show();
		},
		beforeSend:loading,
		success : function(result) {
			layer.close(index);
			initData(result);
		},
		dataType : "json"
	});
}

//分页操作
function gotoPage(currentpage) {
	pageIndex = currentpage;//更新pageIndex
	
	if (isQuery) {
		querySchema();
	} else {
		if (dirId == "") {
			loadSchemaList();
		} else {
			getSchemaByDirectoryId(dirId);
		}
	}
}

//点击图标之后，显示详细信息
function onClick(id, type) {
	location.href = "schemaDetail.jsp?id=" + id + "&type=" + type;
}

//删除方案
function deleSchema() {
	var checkedList = new Array();
	$("input[class='CheckboxGroup1']:checked").each(function() {
		checkedList.push($(this).val()+":"+$(this).attr("name"));
	});
	$.ajax({
		async : false,
		url : dfs_url,
		data : {
			request : "deleteschema",
			service : "DataFusionService",
			version : "1.0.0",
			format : "json",
			schemaid : checkedList.toString()
		},
		error : function() {//请求失败处理函数  
			 layer.open({
    	     content: '执行删除任务失败！',
    	     scrollbar: false
		               });
			d.width(320).show();
		},
		success : function(result) {
		    layer.open({
    	     content: '执行删除任务成功！',
    	     scrollbar: false
		               });
			$("[class ='CheckboxGroup1']:checked").attr("checked",false);
			window.location.reload();
		}
	});
}

//重置
function reset(){
	document.getElementById("schameName").value="";
	document.getElementById("start").value="";
	document.getElementById("end").value="";
} 








