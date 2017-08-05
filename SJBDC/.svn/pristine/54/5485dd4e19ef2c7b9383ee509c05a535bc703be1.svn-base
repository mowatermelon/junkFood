function deleteNode(nodeId) {
    layer.confirm('删除后不可恢复，您确定删除？',{
	    btn:['确认','取消'],
	    shade:false
    },function(){
		$.ajax({
			async : false,
			url : dfs_url,
			data : {
				request : "deleteNode",
				service : "DataFusionService",
				version : "1.0.0",
				format : "json",
				node_id : nodeId
			},
			error : function() {//请求失败处理函数 
			  layer.msg('删除失败',{icon:2});
				layer.open({
			    	content: '删除节点失败',
			    	scrollbar: false
				});
			},
			success : function(data) {
				if(data.status=="forbidden"){
					layer.open({
				    	content: '节点有任务正在运行，禁止删除！',
				    	scrollbar: false
					});
				}else{
				    layer.msg('删除成功',{icon:1});
					window.location.reload();
				}
			},
			dataType : "json"
		});
	},
	 function(){
	});
}

//点击详情
function nodeDetail(nodeId, gName) {
     var url="nodeDetail.jsp?nodeId=" + nodeId + "&gname="+ gName;
	 window.location.href = url;
}

//节点上面查看点击正在运行任务
function viewRunningTask(nodeId,groupName,taskState){
	 var url="nodeDetail.jsp?nodeId=" + nodeId + "&gname="+ groupName + "&taskState=" + taskState;
	 window.location.href = url;
}

function mouseOut(gid, nid) {
	$("#" + gid + "_" + nid + "_a").show();
	$("#" + gid + "_" + nid + "_div").hide();
}

function mouseIn(gid, nid) {
	$("#" + gid + "_" + nid + "_a").hide();
	$("#" + gid + "_" + nid + "_div").show();
}