<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>

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
		  	min-height: 350px;
		}
		form{
			margin:0px 0px 0px 0px;
		}
		.node-info {
			height: 450px;
		}
	</style>
	<!-- 数据服务平台 覆盖样式 end-->

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="<%=_path %>/js/layer/layer.js"></script>
<script src="<%=_path %>/js/node_js/node.js"></script>
<title>武大吉奥GeoSmarter数据融合管理中心 - 分组详情</title>
<script type=text/javascript>
	var dfs_url = '${dfs_url}';
	var id = '${param.id}';
	var name = '${param.name}';
	var description = '${param.description}';
		
	$(document).ready(function() {
		$("#firstpane .menu_body:eq(2)").show();
		        $("#firstpane a.menu_head").click(function(){
		            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
		            $(this).siblings().removeClass("current");
		        });
		$.ajaxSetup ({ cache: false }); 
		//由节点组ID找到节点信息
		$.get(dfs_url, {
			request : 'GETNODE',
			service : 'DataFusionService',
			version : '1.0.0',
			format : 'json',
			NODEGROUPID : id
		}, function(data) {
			var obj = jQuery.parseJSON(data);
			if (obj.length > 0) {
				var totalCount = obj.length;
				var pageSize = 6;
				var page = (totalCount % pageSize == 0 ? totalCount
						/ pageSize : Math.ceil(totalCount / pageSize));
				var pagearr = new Array(page);
				var pageSizearr = new Array(pageSize);
				template.helper("getIndex", function(pageSize, i, j) {
					return (pageSize * i) + j;
				});

				var datavalue = {
					gName : name,
					gId : id,
					list : obj,
					pagearr : pagearr,
					pageSizearr : pageSizearr,
					pageSize : pageSize,
					totalCount : totalCount
				};
				var html = template("nodeGroupDetailImpl", datavalue);
				$("#nodeGroupDeatailInfo").html(html);
			}
		});

	});
	
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
					img.onload = function(){};
					if(percent==0){
						img.src = "../../images/pic/node-wrong.png";
					}else if(percent >= 80){
						img.src = "../../images/pic/node-mang.png";
					}else if(percent <80){
						img.src = "../../images/pic/node-xian.png";
					}
				},
				dataType : "json"
			});
    	};
	
</script>

	<style type="text/css">
    	.tips-left{font-size:16px; cursor:pointer; background-color:#fff; line-height:30px;}
    	.tips-left li a{ color:#333;}
    	.tips-left li a:hover{color:#f60;}
    </style>
    
</head>
<body>

  	<div>
<!-- <div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">数据融合</a> -> 分组详情</span>
		</div>  -->

<div class="clearfloat content">
     <!--分组详情右边栏-->
    <div class="plan-left">
        <div class="plan-tltle">
            <h2>分组详情</h2>
            <a href="javascript:history.back(-1);" title="返回">返回</a>
        </div>
        <div class="plan-tr3">
            <p>分组名称：<script type="text/javascript">document.write(name);</script></p>
            <p>分组描述：<script type="text/javascript">document.write(description);</script></p>
        </div>
        <div class="plan-tr2">节点信息</div>
        <div class="node-info" id="nodeGroupDeatailInfo">
        <script id="nodeGroupDetailImpl" type="text/html">
        {{if totalCount <= pageSize}}
            <ul class="clearfloat">
                   {{each list as value}}
 					<li>
						<div class="node-ico-x" onmouseout="javascript:mouseOut('{{gId}}','{{value.nodeId}}');" onmouseover="javascript:mouseIn('{{gId}}','{{value.nodeId}}');">
							<a id="{{gId}}_{{value.nodeId}}_a" href="javascript:void(0);" class="node-name">{{value.name}}</a>
							<div id="{{gId}}_{{value.nodeId}}_div" style="display: none;">
                            	<a href="javascript:nodeDetail('{{value.nodeId}}','{{gName}}');" title="详情"><img src="<%=path%>/images/ico/xq.png"></a>
                            	<a href="javascript:deleteNode('{{value.nodeId}}')" title="删除"><img src="<%=path%>/images/ico/sc.png"></a>
                            </div>
							<img id="{{gId}}_{{value.nodeId}}_img" onload="loadImag('{{gId}}','{{value.nodeId}}')" src="<%=path%>/images/pic/node-no.png" class="node-img">
						</div>
                    	<div class="node-bj"></div>
                    	<div class="node-txt">
                        <p>IP:{{value.ip}}</p>
                        <p>端口：{{value.port}}</p>
                        <p>正在运行：{{value.count}}</p>
                    	</div>
                	</li>
                   {{/each}}
              </ul>
       {{else}}
        {{each pagearr as value1 i}}
               <ul class="clearfloat">
                   {{each pageSizearr as value2 j}}
                   {{if getIndex(pageSize,i,j) < totalCount}}
 					<li>
						<div class="node-ico-x" onmouseout="javascript:mouseOut('{{gId}}','{{list[getIndex(pageSize,i,j)].nodeId}}');" onmouseover="javascript:mouseIn('{{gId}}','{{list[getIndex(pageSize,i,j)].nodeId}}');">
							<a id="{{gId}}_{{list[getIndex(pageSize,i,j)].nodeId}}_a" href="javascript:void(0);" class="node-name">{{list[getIndex(pageSize,i,j)].name}}</a>
							<div id="{{gId}}_{{list[getIndex(pageSize,i,j)].nodeId}}_div" style="display: none;">
                            	<a href="javascript:nodeDetail('{{list[getIndex(pageSize,i,j)].nodeId}}','{{gName}}');" title="详情"><img src="<%=path%>/images/ico/xq.png"></a>
                            	<a href="javascript:deleteNode('{{list[getIndex(pageSize,i,j)].nodeId}}')" title="删除"><img src="<%=path%>/images/ico/sc.png"></a>
                            </div>
							<img id="{{gId}}_{{list[getIndex(pageSize,i,j)].nodeId}}_img" onload="loadImag('{{gId}}','{{list[getIndex(pageSize,i,j)].nodeId}}')" src="<%=path%>/images/pic/node-no.png" class="node-img">
						</div>
                    	<div class="node-bj"></div>
                    	<div class="node-txt">
                        <p>IP:{{list[getIndex(pageSize,i,j)].ip}}</p>
                        <p>端口：{{list[getIndex(pageSize,i,j)].port}}</p>
                        <p>正在运行:{{list[getIndex(pageSize,i,j)].count}}</p>
                    	</div>
                	</li>
					{{/if}}
                   {{/each}}
              </ul>
        {{/each}}
  {{/if}}
	</script>
        </div>
    </div>
</div>
	
	</div>
	
</body>
</html>