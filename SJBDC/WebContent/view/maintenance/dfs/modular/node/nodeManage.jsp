<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%@ include file="../../modular/paging/paging.jsp"%>

<%@ include file="../../common/dfs_url.jsp"%>
<%@ include file="../../common/top.jsp"%>
<%@ include file="../../common/left.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>节点管理</title>
<script type="text/javascript">

/*         $(window.parent.document).find("#Fusion").load(function(){
            var main = $(window.parent.document).find("#Fusion");
            var thisheight = $(document).height()+30;
            main.height(thisheight);
        }); */
    </script>

<!-- 数据服务平台 覆盖样式 begin-->
<link rel="stylesheet" href="<%=_path%>/theme/default/css/date.css"
	type="text/css">
<style type="text/css">
.content {
	min-width: 0px;
}

.plan-left {
	width: 97.5%;
	min-width: 0px;
	/*  	margin-top: 15px; 
			margin-right: 15px; */
}

.task-gl {
	height: initial;
	min-height: 650px;
}
.group-filter{
	margin:10px 15px 0px 15px;
	overflow:hidden;
}
.group-filter div:first-child(){
	width:95px;
}
.group-filter div{
	float:left;
}
.group-filter a{
	padding: 3px 10px;
   	margin: 0 10px;
   	cursor: pointer;
	display: block;
	text-align: center;
	float: left;
}
.group-filter .selected{
	background:#2D91DF;
	color:#fff;
}
.node-info ul li{
	width:33%
}
.node-txt {
   border: 1px solid #e7e8eb;
    margin-top: 15px;
    padding: 10px;
}

.node-info {
   
    padding: 8px 0px;
}
</style>
<!-- 数据服务平台 覆盖样式 end-->
<title>节点管理</title>
<script src="<%=_path %>/js/artTemplate/template.js"></script>
<script src="<%=_path %>/js/node_js/node.js"></script>
<script src="<%=_path %>/js/layer/layer.js"></script>
<script type="text/javascript">
    	var dfs_url = "${dfs_url}";
    	var indexState = "${param.state}";
    	var pageIndex = 1;
    	var pageSize = 2;
    	var groupAll = null;
    	var countArray;//用于分页
    	var index2;
    	var nodeID="${param.node_id}";
    	function loading2(){
			    index2 =layer.load(2, {
	   			 shade: [0.1,'#fff'] //0.1透明度的白色背景
				});
		}
    	function initPage(){
    		$("#firstpane .menu_body:eq(2)").show();
	        $("#firstpane a.menu_head").click(function(){
	            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
	            $(this).siblings().removeClass("current");
	        });
	        $.ajaxSetup ({ cache: false }); 
    		loadNodeGroupTree();
    		
    	}
    	
    	//初始化节点组
    	function loadNodeGroupTree(){
    		$.ajax({
				url : dfs_url,
				data : {
					request : "GETNODEGROUP",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json"
				},
				error : function() {//请求失败处理函数  
				    layer.close(index);
					layer.open({
			    	content: '加载节点组失败',
			    	scrollbar: false
					});
					
				},
				beforeSend:loading,
				success : function(grouplist) {
				  	layer.close(index);
					groupAll = grouplist.list;
					initNodeGroupTree(grouplist.list);
					if(typeof(indexState) != "undefind" && indexState!=""){//从首页跳转过来
						$("#status").val(indexState);
						$("#status").find("option[text='断开']").attr("selected",true); 
						queryNode();
					}else if(nodeID!='' && nodeID!=null){
			             //根据ID查询节点信息
				    		$.ajax({
								url : dfs_url,
								data : {
									request : "getnode",
									service : "DataFusionService",
									version : "1.0.0",
									format : "json",
									ID : nodeID
								},
								error : function() {//请求失败处理函数
								    layer.close(index2);
								    layer.open({
							    	content: '查询节点失败',
							    	scrollbar: false
									});
								},
								beforeSend:loading2,
								success : function(nodelist) {
									$("#pagination").html("");
									$("#nodelist_Gid ").text("");
									layer.close(index2);
									if(nodelist.length>0){
										initNodeByGroupId("","查询结果","",nodelist);
									}else{
									  layer.open({
								    	  content: '无匹配结果',
								    	  scrollbar: false
									  });
									}
								},
								dataType : "json"
							});
					}
					else{
						//对节点组进行分页
						var totalCount = groupAll.length;
						pageCount = (totalCount % pageSize == 0 ? totalCount / pageSize
							: Math.ceil(totalCount / pageSize));
						countArray = new Array(pageCount);
						//pagination(pageIndex,countArray);//添加分页页码
						//第一次加载首先加载第一页内容，然后计算分页（节省时间）
						gotoPage(1);
					}
				},
				dataType : "json"
			});
    	}
    	
    	//根据节点组数组查询初始化节点下所有节点
    	function loadNodeAll(group){
    		//处理第一次加载和点击所有的加载
    		var content = $("#nodelist_Gid").html();
    		if(content!="" || content != null){
    			$("#nodelist_Gid").html("");
    		}
    		if(group.length>0){
	    		for(var i = 0;i<group.length;i++){
	    			var groupId = group[i].nodeGroupId;
	    			var groupName = group[i].name;
	    			var groupDesription = group[i].description;
	    			loadNode(groupId,groupName,groupDesription,false);
	    		}
    		}else{
    		  	layer.open({
			    	content: '无数据',
			    	scrollbar: false
				});
    		}
    	}
    	
    	//根据节点组id获取所有节点
    	function loadNode(groupId,groupName,groupDes,isClick,obj){
    		if(isClick==true){
    			$("#nodelist_Gid").html("");
    			$("#pagination").html("");
    		}
    		$.ajax({
				url : dfs_url,
				data : {
					request : "getnode",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					nodegroupid : groupId,
					startposition : 0,//值获取最新五条数据
					maxcount : 5
				},
				beforeSend:loading2,
				error : function() {//请求失败处理函数  
					 layer.close(index2);
					 layer.open({
				    	content: '加载节点失败',
				    	scrollbar: false
						});
				},
				success : function(nodelist) {
					layer.close(index2);
					if(nodelist.length>0){
						initNodeByGroupId(groupId,groupName,groupDes,nodelist);
					}else{
						if(isClick==true){
						 layer.open({
			             content: groupName+'节点组无节点',
			    	     scrollbar: false
					     });
			    		}
					}
				},
				dataType : "json"
			});
    	}
    	
    	//查询
    	function queryNode(){
    		var nodeName = document.getElementById("nodeName").value;
    		var nodeIp = document.getElementById("ip").value;
    		var nodePort = document.getElementById("port").value;
    		var nodeStatus = $("#status").val();
    		
    		$.ajax({
				url : dfs_url,
				data : {
					request : "getnode",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					name : nodeName,
					ip : nodeIp,
					port : nodePort,
					status : nodeStatus
				},
				error : function() {//请求失败处理函数
				    layer.close(index2);
				    layer.open({
			    	content: '查询节点失败',
			    	scrollbar: false
					});
				},
				beforeSend:loading2,
				success : function(nodelist) {
					$("#pagination").html("");
					$("#nodelist_Gid ").text("");
					layer.close(index2);
					if(nodelist.length>0){
						initNodeByGroupId("","查询结果","",nodelist);
					}else{
					  layer.open({
				    	  content: '无匹配结果',
				    	  scrollbar: false
					  });
					}
				},
				dataType : "json"
			});
			 
    	}
    	
    	//初始化节点组导航（UI）
    	function initNodeGroupTree(nodelist){
    		var data = {
				list : nodelist
			};
			var html = template("nodeGroupTree", data);
			$(".filter-a").append(html);
			$(".filter-a a").on("click",function(){
				var groupid=$(this).attr("data-groupid");
				var groupName = $(this).attr("data-groupname");
				$('.selected').removeClass("selected");
				$(this).addClass("selected");
				if(groupid){
					loadNode(groupid,groupName,'',true);
				}else{
					location.reload()
				}
				
			})
    	}
    	
    	//根据节点组绘制节点
    	function initNodeByGroupId(groupId,groupName,groupDes,nodelist){
    		var data = {
    			gName : groupName,
    			gId : groupId,
    			gDes : groupDes,
				nodelist : nodelist
			};
			var html = template("groupArt", data);
			$("#nodelist_Gid").append(html);
    	}
    	
    	//跳转到详情
    	function toDetailInfo(id,name,description){
    		location.href="nodeGroupDetailInfo.jsp?id="+id+"&name="+name+"&description="+description;
    	}
    	
    	//重置
    	function resetQuery(){
    		document.getElementById("nodeName").value="";
    		document.getElementById("ip").value="";
    		document.getElementById("port").value="";
    		document.getElementById("status").value="";
    	}
    	
    	//根据节点的内存占用率修改背景
    	function loadImag(gid,nId){
    		$.ajax({
				url : dfs_url,
				data : {
					request : "getNodeContainCpu",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					id : nId
				},
				error : function() {//请求失败处理函数
					loadImag(gid,nId);
				},
				success : function(data) {
					var percent = eval(data);
					var id = gid+"_"+nId+"_img";
					var img = document.getElementById(id);
					if(img!=null){
						img.onload = function(){};
						if(percent==0){
							img.src = "../../images/pic/node-wrong.png";
						}else if(percent >= 80){
							img.src = "../../images/pic/node-mang.png";
						}else if(percent <80){
							img.src = "../../images/pic/node-xian.png";
						}
					}
				},
				dataType : "json"
			});
    	};
    	
    	//分页跳转		 
    	function gotoPage(index){
    	/* 	$("#pagination").html("");
    		var gArray = new Array();
    		for(var i = ((index-1)*2),j=0;j<2 && i<groupAll.length;i++,j++){
    			gArray[j] = groupAll[i];
    		} */
    		loadNodeAll(groupAll);
    		//pagination(index,countArray);//添加分页页码
    	}
    	
    	//执行刷新操作
    	function refreshGroup(gId){
    	    $("#waiting_node").show();
    		$.ajax({
				url : dfs_url,
				data : {
					request : "getnode",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					nodegroupid : gId,
					startposition : 0,//值获取最新五条数据
					maxcount : 5
				},
				success : function(nodelist) {
					$("#"+gId+"_ul").html("");
					var data = {
						nodelist : nodelist
					};
					var html = template("refreshGroup", data);
					$("#"+gId+"_ul").append(html);
					$("#waiting_node").hide();
				},
				dataType : "json"
			});
    	}
    </script>

<script id="nodeGroupTree" type="text/html">
		{{each list as nodeGroup}}
			<!--<li class="menu-b"><a>{{nodeGroup.name}}</a></li>-->

			<a data-groupid='{{nodeGroup.nodeGroupId}}' data-groupname='{{nodeGroup.name}}' >{{nodeGroup.name}}</a>
		{{/each}}
    </script>

<script id="groupArt" type="text/html">
		<div class="plan-tr2">
			{{gName}}
			<a href="javascript:refreshGroup('{{gId}}');"><img src="<%=path%>/images/ico/refresh.png" title="刷新"></a>
			<a href="javascript:toDetailInfo('{{gId}}','{{gName}}','{{gDes}}');"><img src="<%=path %>/images/ico/comply.png" title="进入分组详情"></a>
		</div>
		<div class="node-info height0">
			<ul id="{{gId}}_ul" class="clearfloat">
				{{each nodelist as value index}}
					<li>
						<div style="float:left" class="node-ico-x" onmouseout="javascript:mouseOut('{{gId}}','{{value.nodeId}}');" onmouseover="javascript:mouseIn('{{gId}}','{{value.nodeId}}');">
							<a id="{{gId}}_{{value.nodeId}}_a" href="javascript:void(0);" class="node-name">{{value.name}}</a>
							<div id="{{gId}}_{{value.nodeId}}_div" style="display: none;">
	                        	<a href="javascript:nodeDetail('{{value.nodeId}}','{{gName}}');" title="详情"><img src="<%=path%>/images/ico/xq.png"></a>
	                            <a href="javascript:deleteNode('{{value.nodeId}}')" title="删除"><img src="<%=path%>/images/ico/sc.png"></a>
	                         </div>
							<img id="{{gId}}_{{value.nodeId}}_img" onload="loadImag('{{gId}}','{{value.nodeId}}')" src="<%=path%>/images/pic/node-no.png" class="node-img">
						</div>
						
						<div class="node-txt" style="float:left">
							<p>IP：{{value.ip}}</p>
							<p>端口号：{{value.port}}</p>
							{{if value.count > 0}}
								<a href="javascript:viewRunningTask('{{value.nodeId}}','{{gName}}','Running');">正在运行：{{value.count}}</a>
							{{/if}}
						</div>
                        
					</li>
				{{/each}}
			</ul>
			<div id="waiting_node" class="loading-pic2" style="display:none;">
				<img src="<%=path %>/images/pic/loading_node.gif" >
			</div>
		</div>
	</script>

<script id="refreshGroup" type="text/html">
		{{each nodelist as value index}}
			<li>
				<div style="float:left" class="node-ico-x" onmouseout="javascript:mouseOut('{{gId}}','{{value.nodeId}}');" onmouseover="javascript:mouseIn('{{gId}}','{{value.nodeId}}');">
					<a id="{{gId}}_{{value.nodeId}}_a" href="javascript:void(0);" class="node-name">{{value.name}}</a>
					<div id="{{gId}}_{{value.nodeId}}_div" style="display: none;">
                       	<a href="javascript:nodeDetail('{{value.nodeId}}','{{gName}}');" title="详情"><img src="<%=path%>/images/ico/xq.png"></a>
                           <a href="javascript:deleteNode('{{value.nodeId}}')" title="删除"><img src="<%=path%>/images/ico/sc.png"></a>
                        </div>
					<img id="{{gId}}_{{value.nodeId}}_img" onload="loadImag('{{gId}}','{{value.nodeId}}')" src="<%=path%>/images/pic/node-no.png" class="node-img">
				</div>
				<div class="node-txt"  style="float:left">
					<p>IP：{{value.ip}}</p>
					<p>端口号：{{value.port}}</p>
                    {{if value.count > 0}}
								<a href="javascript:viewRunningTask('{{value.nodeId}}','{{gName}}','Running');">正在运行：{{value.count}}</a>
					{{/if}}
				</div>
			</li>
		{{/each}}
	</script>

</head>

<body onload="initPage()">
	<!--   <div class="glance with">
    <h2>
               节点管理
    </h2>
    <div class="glance-tab">
        <a href="http://127.0.0.1:8080/DataCenter/view/dfs/modular/node/nodeManager.jsp" title="节点" class="glancea glanceb" data-body_tag="#tab_1_body_1">融合节点</a>
        <a href="http://127.0.0.1:8080/DataCenter/view/dfs/modular/node/nodeGroupList.jsp" title="分组" class="glancea " data-body_tag="#tab_1_body_0">融合分组</a>
    </div>
</div> -->
	<!--  <div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">数据融合</a> -> 节点管理</span>
		</div> -->
	<div class="plan-left">
		<div class="plan-tltle title">
			<h2>节点管理</h2>
				
				
				<div class="title-add">
							<a href="nodeGroupList.jsp" ><img 
									src="/SJBDC/view/maintenance/dfs/images/ico/comply.png">分组管理</a>
						</div>
		</div>
		<div class="plan-left-L">
			<!--节点组-->
<%-- 	<div class="node-nav">
				<ul id="nodegroup">
					<li class="menu-a-cur"><img
						src="<%=path%>/images/pic/arrow-bottom.png"><a
						href="javascript:gotoPage(1);">所有</a></li>
				</ul>
			</div>  --%>
	
			<!--节点详情-->
			<div class="plan-detail" style="width:100%">
				<div class="group-filter">
					<div>分组名称：</div>
					<div class="filter-a">
						<a class="selected">全部</a>
						
					</div>
				</div>
				<div class="plan-tr clearfloat" >
					<ul class="task-gl1" style="width:100%;padding-bottom:8px">
						<li>节点名称：<input id="nodeName" name="" type="text"></li>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;&nbsp;P：<input
							id="ip" name="" type="text"></li>
						<li>端&nbsp;&nbsp;口&nbsp; 号：<input id="port" name=""
							type="text"></li>
						<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态： <select
							id="status" class="task-xl2">
								<option value="">运行状态</option>
								<option value="1">连通</option>
								<option value="3">断开</option>
						</select>
						</li>
						<li class="button-cx"><a href="javascript:queryNode()">查询</a>
						</li>
						<li class="button-cz"><a href="javascript:resetQuery()">重置</a>
						</li>
					</ul>
					<!-- <ul class="plan-but">
					
						<li class="button-cx"><a href="javascript:queryNode();">查询</a>
						</li>
						<li class="button-cz"><a href="javascript:resetQuery();">重置</a>
						</li>
					</ul> -->
				</div>
				<!-- 节点展示 -->
				<div id="nodelist_Gid"></div>
				<!--页码-->
				<div id="pagination" class="page" style="display:none"></div>
			</div>
		</div>
	</div>
	</div>
</body>
</html>
