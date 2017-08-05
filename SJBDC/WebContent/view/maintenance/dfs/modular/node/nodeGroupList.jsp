<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../../common/dfs_url.jsp" %>
<%@ include file="../../common/top.jsp" %>
<%@ include file="../../common/left.jsp" %>
<%@ include file="../../modular/paging/paging.jsp" %>
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
		.task-gl {
			height: initial;	
		  	min-height: 650px;
		}
		.glance {
            height: 40px;
            background-color: #eff6fe;
            border-bottom: 1px solid #dfdfdf;
        }
        .with {
            width: 100%;
            min-width: 1024px;
            margin: 0px auto;
        }
        .glance h2 {
            float: left;
            font-size: 18px;
            color: #333;
            height: 40px;
            line-height: 40px;
            text-indent: 20px;
            margin:0;
        }

        .glance-tab {
            float: right;
            height: 40px;
            width: 202px;
        }

        .glance-tab .glanceb {
            background-color: #fff;
            font-size: 16px;
            color: #005599;
            border-left: 1px solid #dfdfdf;
        }

        .glance-tab .glancea {
            font-size: 14px;
            color: #333;
        }
        .glance-tab a {
            display: block;
            width: 100px;
            line-height: 40px;
            height: 40px;
            text-align: center;
            border-left: 1px solid #dfdfdf;
            float: left;
            text-decoration: none;
        }
	</style>
	<!-- 数据服务平台 覆盖样式 end-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="<%=_path %>/js/layer/layer.js"></script>
<title>武大吉奥GeoSmarter数据融合管理中心 - 分组管理</title>
<script type=text/javascript>
	var dfsurl = '${dfs_url}';
	var pageSize = '${pageSize}';
	var pageIndex = 1;
	var pageCount = 0;
	$(document).ready(
			function() {
				$("#firstpane .menu_body:eq(2)").show();
				$("#firstpane a.menu_head").click(
						function() {
							$(this).addClass("current").next("ul.menu_body")
									.slideToggle(300).siblings("ul.menu_body")
									.slideUp("slow");
							$(this).siblings().removeClass("current");
						});
				$.ajaxSetup ({ cache: false }); 
				queryNodeGroup();
				
				$("#alltask").click(function(){
				    var isChecked = $(this).prop("checked");
				    $(this).attr("checked",isChecked);
				    $("input[name='CheckboxGroup']").prop("checked", isChecked);
				});
			});
	function queryNodeGroup() {
		$.ajax({
			url : dfsurl,
			data : {
				request : 'GETNODEGROUP',
				service : 'DataFusionService',
				version : '1.0.0',
				format : 'json',
				startposition : (pageIndex - 1) * pageSize,
				maxcount : pageSize
			},
			error : function() {
				layer.close(index);
			},
			beforeSend : loading,
			success : function(nodeGroup) {
				layer.close(index);
				var obj = nodeGroup;
				var totalCount = obj.totalCount;
				var list = obj.list;
				if (totalCount >= 0) {
					var datavalue = {
						list : list
					};
					var html = template("nodeGrouplistImpl", datavalue);
					$("#tab tr:eq(0)").nextAll().remove();
					$("#tab tr:eq(0)").after(html);
					//分页页码设置
					pageCount = (totalCount % pageSize == 0 ? totalCount
							/ pageSize : Math.ceil(totalCount / pageSize));
					var countArray = new Array(pageCount);
					pagination(pageIndex, countArray);//添加分页页码
				}
			},
			dataType : "json"
		});

	}

	//分页操作
	function gotoPage(currentpage) {
		pageIndex = currentpage;//更新pageIndex
		queryNodeGroup();
	}

	function updateNodeGroup() {
		var checknum = $("input[name='CheckboxGroup']:checkbox:checked").length;
		var isAll = $("#alltask").attr('checked');
		if (checknum < 1) {
			layer.open({
				content : "请选择一条记录！",
				scrollbar : false
			});
		}else if(isAll=="checked"){
			var con = "不支持批量操作！";
			if(checknum == 1){
				con = "请去掉全选，并选择一条记录！";
			}
			layer.open({
				content : con,
				scrollbar : false
			});
		} else {
			//修改
			var checkvalue = $("input[name='CheckboxGroup']:checkbox:checked").val();
			var dfsurl = '${dfs_url}';
			//根据ID查找节点组信息
			$.ajax({
				async : false,
				url : dfsurl,
				data : {
					request : 'GETNODEGROUP',
					service : 'DataFusionService',
					version : '1.0.0',
					format : 'json',
					NODEGROUP_ID : checkvalue
				},
				error : function(d) {
					return false;
				},
				success : function(da) {
					//跳转到修改页面
					location = "createNodeGroup.jsp?id=" + da.nodeGroupId
							+ "&name=" + da.name + "&description="
							+ da.description;
				},
				dataType : "json"
			});
		}
	}
	
	function deleteNodeGroup() {
		var checknum = $("input[name='CheckboxGroup']:checkbox:checked").length;
		var isAll = $("#alltask").attr('checked');
		var dfsurl = '${dfs_url}';
		if (checknum < 1 || (isAll=="checked" && checknum==1)) {
			layer.open({
				content : '请选择一条记录！',
				scrollbar : false
			});
		} else {
			//删除
			var str = "";
			$("input[name='CheckboxGroup']:checkbox:checked").each(function() {
				if($(this).val()!="复选框"){
					str += $(this).val() + ",";
				}
			});
			
			if (str != "" && str.indexOf(",") > 0) {
				str = str.substring(0, str.length - 1);
			}
			
			 layer.confirm('删除后不可恢复，您确定删除?',{
				btn:['确认','取消'],
				shade:false
				},function(){     
				$.ajax({
					async : false,
					url : dfsurl,
					data : {
						request : 'DELETENODEGROUP',
						service : 'DataFusionService',
						version : '1.0.0',
						format : 'json',
						NODEGROUP_ID : str
					},
					error : function(d) {
						layer.msg('删除失败',{icon:2}); 
						return false;
					},
					success : function(da) {
						if (da.status == 'SUCCESS') {
					    	layer.msg('删除成功!',{icon:1});
							document.location.reload();
					   }else {
							layer.msg('删除失败!'+da.status,{icon:2});
						}
					},
					dataType : "json"
				});
				},function(){
				//layer.msg('取消',{icon:2});
				});
			
		}
	}
	
	//删除节点组之前检查节点组是否包含节点，如果包含节点就不能删除
	function checkNodeGroup(gid){
		var size = -1;
		$.ajax({
			async : false,
			url : dfsurl,
			data : {
				request : "getNode",
				service : 'DataFusionService',
				version : '1.0.0',
				format : 'json',
				NODEGROUPID : gid
			},
			error : function(d) {
				return false;
			},
			success : function(da) {
				size = da.length;
			},
			dataType : "json"
		});
		return size;
	}
	
	function refresh() {
		window.location.href = 'nodeGroupList.jsp';
	}
	
	//节点组的详细信息
	function detailInfo(id, name, des) {
		window.location.href = 'nodeGroupDetailInfo.jsp?id=' + id + "&name="
				+name+"&description="+des;
	}
</script>
</head>
<body>
<!-- <div class="glance with">
    <h2>
               节点管理
    </h2>
    <div class="glance-tab">
      <a href="http://127.0.0.1:8080/DataCenter/view/dfs/modular/node/nodeManage.jsp" title="节点" class="glancea " data-body_tag="#tab_1_body_1">融合节点</a>
      <a href="http://127.0.0.1:8080/DataCenter/view/dfs/modular/node/nodeGroupList.jsp" title="分组" class="glancea glanceb" data-body_tag="#tab_1_body_0">融合分组</a>
    </div>
</div> -->
	<div>
		<!-- <div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">数据融合</a> -> 分组管理</span>
		</div> -->

<div class="clearfloat content">
     <div class="plan-left">
        <div class="plan-tltle title"><h2>分组管理</h2>
        	<div class="title-add ">
							<a href="nodeManage.jsp" ><img  src="/GDDataCenter/view/dfs/images/ico/comply.png">节点管理</a>
						</div>
        </div>
        <!--分组管理-->
        <div class="task-gl">
            <div class="clearfloat">
                <ul class="plan-ico">
                    <li><a href="createNodeGroup.jsp"><img src="<%=_path %>/images/ico/new.png">新建</a></li>
                    <li><a href="javascript:updateNodeGroup();"><img src="<%=_path %>/images/ico/edit.png">修改</a></li>
                    <li><a href="javascript:deleteNodeGroup();"><img src="<%=_path %>/images/ico/delete.png">删除</a></li>
                    <li><a href="javascript:refresh();"><img src="<%=_path %>/images/ico/re-fresh.png">刷新</a></li>
                </ul>
            </div>
            <table border="0" cellspacing="0" id="tab">
                <tr class="type">
                    <td class="fxk"><input type="checkbox" name="CheckboxGroup" id="alltask" value="复选框"></td>
                    <td>分组ID</td>
                    <td>分组名称</td>
                    <td>分组描述</td>
                    <td>操作</td>
                </tr>
                 <script id="nodeGrouplistImpl" type="text/html">
                         {{each list as value}}  
        					<tr>
                    		<td class="fxk"><input type="checkbox" name="CheckboxGroup" value="{{value.nodeGroupId}}"></td>
							<td>{{value.nodeGroupId}}</td>
                    		<td>{{value.name}}</td>
                    		<td>{{value.description}}</td>
                    		<td><a href="javascript:detailInfo('{{value.nodeGroupId}}','{{value.name}}','{{value.description}}');" title="分组详情"><img src="<%=_path %>/images/ico/detail.png"></a></td>
                			</tr>
    					 {{/each}}
                </script>
            </table>
          	<!--页码-->
		    <div id="pagination" class="page"></div>
           
        </div>
    </div>
</div>
	</div>
</body>
</html>