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

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="<%=_path %>/My97DatePicker/WdatePicker.js"></script>
<script src="<%=_path %>/js/layer/layer.js"></script>
<title>武大吉奥GeoSmarter数据融合管理中心 - 系统操作日志</title>
<script type=text/javascript>
	var dfsurl='${dfs_url}';
    var pageSize='${pageSize}';
    var pageIndex=1;
    var pageCount=0;
    $(document).ready(function(){
        	$("#firstpane .menu_body:eq(3)").show();
		        $("#firstpane a.menu_head").click(function(){
		            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
		            $(this).siblings().removeClass("current");
		        });
		        queryLog();
    });
    
    //查询系统操作日志的信息
    function queryLog(){
        var keyword=$('#keyword').val();
        var starttime=$('#starttime').val();
        var endtime=$('#endtime').val();
        	$.ajax({
				url : dfsurl,
				data : {
					request : 'GETOPERATORLOG',
					service : 'DataFusionService',
					version : '1.0.0',
					format : 'json',
					KEYWORD:keyword,
				        STARTTIME:starttime,
				        ENDTIME:endtime,
				        startposition:(pageIndex-1)*pageSize,
						maxcount:pageSize
				},
				error:function(){
					layer.close(index);
				},
				beforeSend:loading,
				success : function(logdata) {
				    layer.close(index);
				  var obj=logdata;
			         	var totalCount=obj.totalCount;
			         	var list=obj.list;
			        	 	var datavalue={list:list};
			             	var html=template("loglistImpl",datavalue);
			             	$("#tab tr:eq(0)").nextAll().remove(); 
			             	$("#tab tr:eq(0)").after(html);
			             	//分页页码设置
							pageCount = (totalCount % pageSize == 0 ? totalCount / pageSize: Math.ceil(totalCount / pageSize));
							var countArray = new Array(pageCount);
							pagination(pageIndex,countArray);//添加分页页码
				},
				dataType : "json"
			});
        	
    }
    
    
    
    //分页操作
	function gotoPage(currentpage) {
		pageIndex = currentpage;//更新pageIndex
		queryLog();
	}
	
	
	function clear(){
	 $("#keyword").val("");
	 $("#starttime").val("");
	 $("#endtime").val("");
	}
	
   
</script>
</head>
<body>

  	<div>
		<!-- <div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">数据融合</a> -> 系统操作日志</span>
		</div> -->

<div class="clearfloat content">
    <!--系统操作日志-右边栏-->
    <div class="plan-left">
        <div class="plan-tltle"><h2>系统操作日志</h2></div>
        <!--系统操作日志-->
        <div class="task-gl">
            <div class="plan-tr clearfloat border0">
                <ul class="journal-input">
                    <li>关键字：<input id="keyword" type="text"></li>
                    <li class="input-time2">日志记录时间：<input id="starttime" type="text" class="input-time" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})">&nbsp;&nbsp;至&nbsp;&nbsp;<input id="endtime" type="text" class="input-time" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})"></li>
                    <li class="button-cx"><a href="javascript:queryLog();">查询</a></li>
                    <li class="button-cz"><a href="javascript:clear();">重置</a></li>
                </ul>
            </div>
            <table border="0" cellspacing="0" id="tab">
                <tr class="type">
                    <td>序号</td>
                    <td>操作用户帐号</td>
                    <td>客户端IP</td>
                    <td>操作类型</td>
                    <td><span>记录时间</span></td>
                    <td>日志详细信息</td>
                    <td>操作状态</td>
                </tr>
               <script id="loglistImpl" type="text/html">
                         {{each list as value index}}  
        					<tr>
                               <td>{{++index}}</td>
                               <td>{{value.username}}</td>
                               <td>{{value.userip}}</td>
                           	   <td>{{value.operatortype}}</td>
                               <td>{{value.logtime}}</td>
                               <td>{{value.content}}</td>
                               <td>{{value.status}}</td>
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