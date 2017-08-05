<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>



<%@ include file="../../common/dfs_url.jsp" %>
<%@ include file="../../common/top.jsp" %>
<%@ include file="../../common/left.jsp" %>
<%@ include file="../paging/paging.jsp" %>

<%
response.setHeader("Access-Control-Allow-Origin", "*");
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<title>方案管理</title>
	
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

	</style>
	<!-- 数据服务平台 覆盖样式 end-->
	
	<link rel="stylesheet" href="<%=_path%>/css/zTreeStyle/zTreeStyle.css" type="text/css"> 
  	<script type="text/javascript" src="<%=_path %>/js/zTreeJs/jquery.ztree.core-3.5.js"></script>
  	<script src="<%=_path %>/js/layer/layer.js"></script>
  	<script type="text/javascript" src="<%=_path %>/My97DatePicker/WdatePicker.js"></script>
	<script type="text/javascript" src="<%=_path %>/js/schema_js/schema.js"></script>
	<script type="text/javascript">
		var dfs_url = "${dfs_url }";
		var pageCount = 0;
		var pageSize = 10;
		var pageIndex = 1;
		var dirId = "";
		var isQuery = false;
		
		$(document).ready(function() {
			//加载菜单
		   	$("#firstpane .menu_body:eq(0)").show();
	        $("#firstpane a.menu_head").click(function(){
	            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
	            $(this).siblings().removeClass("current");
	        });
	        $.ajaxSetup ({ cache: false }); 
			//全选，反选
			$("#allSchema").click(function(){
			    var isChecked = $(this).prop("checked");
			    $("input[class='CheckboxGroup1']").prop("checked", isChecked);
			});
			
			/* 批量删除 */
			$("#deleteSchema").click(function() {
				// 判断是否至少选择一项 
				var checkedNum = $("input.CheckboxGroup1:checked").length;
				if (checkedNum == 0) {
					  layer.open({
    	               content: '请选择需要删除的项',
    	               scrollbar: false
		               });
				      return;
				}
				
				 //批量选择
				 layer.confirm('删除后不可恢复，您确定删除？', {
                  btn: ['确认','取消'], //按钮
                  shade: false //不显示遮罩
                  }, function(){
                   deleSchema();
                  layer.msg('删除成功', {icon: 1});
                  }, function(){
                  //layer.msg('删除失败', {icon: 2});
                  });
				 
				// 批量选择 
				//if (confirm("确定要删除所选项目？")) {
				//	deleSchema();
				//}
			});
		});
		
		
	</script>
	
	<!-- artTemplate绘制列表模板 -->
	<script id="schemalist" type="text/html">
		{{each list as rowValue index}}
			<tr>
			 <td>{{index+1}}</td>
			<td><span style="cursor: pointer;" onClick="onClick({{rowValue.id}},'{{rowValue.type}}')">{{rowValue.name}}</span></td>
			<td>{{rowValue.creattime}}</td>
			<td>{{rowValue.updatetime}}</td>
			<td>{{rowValue.description}}</td>
			<%-- <td><a href="javascript:onClick({{rowValue.id}},'{{rowValue.type}}')" title="方案详情"><img src="<%=_path %>/images/ico/detail.png"/> </a></td> --%>
			</tr>
		{{/each}}
	</script>
	
</head>

<body onload="onLoad()">

	<div>
		<!-- <div class="position">
			
		</div>
		 -->
 	<div class = "clearfloat content">
		<div class="plan-left">
			<div class="plan-tltle">
				<h2>方案管理</h2>
			</div>
			<div class="plan-left-L">
				<!--目录树-->
				<!--  <div class="plan-nav">
					<ul id="plan_directory" class="ztree"></ul>
				</div>  -->
				
				<div class="plan-detail" style="width:100% !important">
					<!--方案条件查询-->
					<div class="plan-tr clearfloat">
                    	<!-- <ul class="plan-inputnew ">
                            <li>方案名称：<input id="schameName" name="" type="text"></li>
                        </ul> -->
                        <ul class="plan-inputnew ">
							<li>选择类型：
								<select id="timeType" name="" class="task-xl2">
									<option value="1">创建时间</option>
									<option value="2">修改时间</option>
								</select>
							</li>
							<li>起始时间：<input id="start"  onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" class="Wdate" name=""type="text"></li>
							<li>截止时间：<input id="end"  onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})" class="Wdate" name=""type="text"></li>
							
							 <li class="button-cx" style="padding-left:0"><a href="javascript:querySchema()">查询</a></li>
							<li class="button-cz"><a href="javascript:reset()">重置</a></li>
						</ul>
                       <!--  <ul class="plan-inputnew padding-bottom">
                            <li class="button-cx"><a href="javascript:querySchema()">查询</a></li>
							<li class="button-cz"><a href="javascript:reset()">重置</a></li>
                        </ul> -->
	                </div>
					<!-- 删除操作 -->
					<div class="clearfloat">
						<!-- <ul class="plan-ico">
							<li>
								<a href="javascript:void(0)" id="deleteSchema"><img src="<%=_path %>/images/ico/delete.png">删除</a>
							</li>
						</ul> -->
					</div>
					
					<!-- 方案列表 -->
					<table border="0" cellspacing="0" id="schema_list">
						<tr class="type">
							<!-- <td class="fxk"><input type="checkbox" name="CheckboxGroup1" id="allSchema" /></td> -->
							<td style="width:8%">序号</td>
							<td style="width:20%">方案名称</td>
							<td style="width:15%"><span>创建时间</span></td>
							<td style="width:15%"><span>修改时间</span></td>
							<td><span>方案描述</span></td>
							<!-- <td>详细</td> -->
						</tr>
					</table>
					
					<!--页码-->
					<div id="pagination" class="page"></div>
				</div>
			</div>
		</div>
	</div>
		
	</div>
</body>
</html>
