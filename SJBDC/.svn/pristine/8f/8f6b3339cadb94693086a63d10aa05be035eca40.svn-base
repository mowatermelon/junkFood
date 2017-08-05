<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
	</style>
	<!-- 数据服务平台 覆盖样式 end-->

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type=text/javascript src="<%=path %>/js/jquery.validate.js"></script>
<script type=text/javascript src="<%=path %>/js/messages_cn.js"></script>
<script src="<%=_path %>/js/layer/layer.js"></script>

<title>武大吉奥GeoSmarter数据融合管理中心 - 创建分组</title>
<script type=text/javascript>
    // var id='${param.id}';
    var id=getUrlParam("id",window.location.search);
     //var NodegroupName = '${param.name}';
     var NodegroupName=getUrlParam("name",window.location.search);
    $(document).ready(function(){
        $("#firstpane .menu_body:eq(2)").show();
		        $("#firstpane a.menu_head").click(function(){
		            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
		            $(this).siblings().removeClass("current");
		        });
		 $.ajaxSetup ({ cache: false }); 
    	$("#nodeGroupForm").validate();
    	  
    	 if(id == "" || id == undefined){
    	 $('#nodeGroupname').attr("readonly",false);
    jQuery.validator.addMethod("nodegroupname",function(value,element){   //用jquery ajax的方法验证分组名是不是已存在  
    	 var dfsurl='${dfs_url}';
    	 var flag = 1;
    	 $.ajax({
    	  async:false,
    	  url:dfsurl,
    	  data:{
    	   request:'GETNODEGROUP',
    	   service:'DataFusionService',
    	   version:'1.0.0',
    	   format:'json',
    	   name:value
    	   },
    	   error:function(msg){
    	   },
    	   success:function(msg){
    	    if(msg.name!=null){
    	       flag=0;
    	    }else{
    	       flag=1;
    	    }
    	   },
    	   dataType:"json"
    	 });
    	    if(flag == 0){  
		         return false;  
		      }else{  
		         return true;  
		      }  
    	},"分组名已经存在");
       }else{
          $('#nodeGroupname').attr("readonly",true);//更新节点组，节点组名称不能修改
       }
    });
    function submitNodeGroup(){
              if($("#nodeGroupForm").valid()){
              	 var dfsurl='${dfs_url}';
              	 var id=$("#nodeGroup_Id").val();
              	 var NodegroupName = $("#nodeGroupname").val();
              	 var operator='AddNodeGroup';
              	 var content='创建成功！';
              	 var errorcontent='创建失败!';
              	 if(id!=''){
              	    operator='UPDATENODEGROUP';
              	    content='更新成功！';
              	    errorcontent='更新失败！';
              	 }
			     $.ajax({
				     beforeSend:loading,
				     async:false, 
				     url:dfsurl,
				     data:{
				        request:operator,
				        service:'DataFusionService',
				        version:'1.0.0',
				        format:'json',
				     	name:NodegroupName,
				     	description:$("#description").val(),
				     	nodegroup_id:$("#nodeGroup_Id").val()
				     },
				     error: function(d){
				     	layer.open({
				     	  content:errorcontent,
				     	  scrollbar:false,
				     	});
				     	
				     },
				     success:function(da){
				     layer.close(index);
				         if(da.status=='SUCCESS'){
				          layer.open({
				          content: content,
				          scrollbar:false,
				          yes:function(){
				          window.location.href='nodeGroupList.jsp';
				          }
				          });
				         
				         }else{
				           layer.open({
				     	   content:errorcontent,
				     	   scrollbar:false,
				     	   });
				         }
				     },
			    	dataType:"json"
			     });
			
			     }
    }
    function cancel(){
         $("#nodeGroupname").val("");
         $("#description").val("");
    }
</script>
</head>
<body>

  	<div>
<!-- 		<div class="position">
			<span>您的当前位置：<a href="javascript:void(0)">首页</a> -> <a href="javascript:void(0)">数据融合</a> -> 分组创建</span>
		</div> -->
		
<div class="clearfloat content">
     <!--分组创建右边栏-->
    <div class="plan-left">
        <div class="plan-tltle">
            <h2>分组创建</h2>
            <a href="javascript:history.back(-1);" title="返回">返回</a>
        </div>
        <form  id="nodeGroupForm" method="post" action="">
         <input type="hidden"  name="nodeGroup_Id" id="nodeGroup_Id" value="${param.id}"/>
	        <div class="task-cj">
	            <div class="task-tr clearfloat">
	                <span>分组名称：</span>
	                <input type="text" class="task-bd1 required nodegroupname" name="name" id="nodeGroupname"  value="${param.name}" readonly="readonly"/>
	               <!-- <i class="set-explain">所创建分组别名，在系统中可以通过别名查询找到该分组的相关信息</i>-->
	            </div>
	            <div class="task-tr clearfloat">
	                <span>分组描述：</span>
	                <textarea name="description" class="task-bd2" id="description">${param.description}</textarea>
	            </div>
	            <div class="task-tr clearfloat">
	            <input type="submit"  style="display:none"/>
	                 
	                <div class="container-fluid catalog-edit-guide-footer">
						<div class="row">
							<div class="col-md-12">
								<div style="margin-left:60px;">
									<a class="task-but3" href="javascript:submitNodeGroup();"
										title= "创建" style="margin-left:190px;">保存 </a>
									<a class="task-but4" href="javascript:cancel();"
										title="取消" data-dismiss="modal">取消 </a>
								</div>
							</div>
						</div>
					</div>
	            </div>
	        </div>
          </form>
    </div>
</div>
</body>
</html>