<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="../../common/dfs_url.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<% String path = request.getContextPath(); %>
<html>
  <head>
    <title>关注人设置</title>
    <script src="<%=path %>/view/dfs/js/jquery-1.11.3.min.js" ></script>
	<script src="<%=path %>/view/dfs/js/layer/layer.js"></script>
	<script type=text/javascript src="<%=path %>/view/dfs/js/template.js"></script>
	<link href="<%=path %>/view/dfs/css/jkgl.css" rel="stylesheet" type="text/css">
  </head>
  
  <script type="text/javascript">
 		var dfsurl = '${dfs_url}';
 		var isUpdate = false;
  		var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
 		
  		var name_care= '${param.name}';
 		var email_care = '${param.email}';
 		var type_care = '${param.type}';
 		var method_care = '${param.method}';
 		var parentTrId_care = '${param.trId}';
  		
  		$(document).ready(function(){
  		    $.ajaxSetup ({ cache: false }); 
  			$.ajax({
				async : false,
				url : dfsurl,
				data : {
					request : "GETCAREDUSER",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json"
				},
				error: function(){
					alert("error");
				},
				success : function(data) {
					for(var i=0; i<data.length;i++){
						var user = data[i];
						$("#caredPerson").append("<option value='"+user.email+"'>"+user.user_name+"</option>");  
					}
				},
				dataType : "json"
			});
			if(name_care != null && name_care!=""){//设置选中名字
				isUpdate = true;
				$("#caredPerson option[value='"+email_care+"']").attr("selected", true); 
  				$("#caredPerson").find("option[text='"+name_care+"']").attr("selected",true);
  			}
  			if(type_care != null && type_care!=""){//设置选中类型
  				if(type_care.indexOf("执行失败") > -1){
  					$("input:checkbox[value='执行失败']").attr("checked",true);
  				}
  				if(type_care.indexOf("执行成功") > -1){
  					$("input:checkbox[value='执行成功']").attr("checked",true);
  				}
  			}
  			if(method_care != null && method_care!=""){//设置选中方式
  				$("input:checkbox[value='邮件']").attr("checked",true);
  			}
  		});
  		
  		function executeOK(){
  			var userName = $("#caredPerson option:selected").text();
  			var caredEmail = $("#caredPerson").val();
  			
  			var caredType = "";
  			$("input[name='checkbox_t']:checked").each(function(){
  				caredType += $(this).parent().text()+"、";
            });
            caredType = caredType.substring(0,caredType.length-1);
            var caredMethod = $("input[name='checkbox_m']:checked").parent().text();
            
            var trId = parent.$("#careduserTable tr").length+1;
  			var html="<tr id=\""+trId+"\"><td>"+userName+"<input type=\"hidden\" id=\"caredEmail\" value=\""+caredEmail+"\"></td><td>"+caredType+"</td>"+
					 "<td>"+caredMethod+"</td>"+
					 "<td><a href=\"javascript:alterCaredUser('"+trId+"');\" title=\"编辑\"><img src=\"<%=path %>/view/dfs/images/ico/edit.png\"></a>"+
					 "<a href=\"javascript:deleteCareduser('"+trId+"');\" title=\"删除\"><img src=\"<%=path %>/view/dfs/images/ico/delete.png\"></a></td></tr>";
			if(isUpdate){
				parent.$("#careduserTable tr#"+parentTrId_care).remove();
			}
  			parent.$("#careduserTable").append(html);
  			parent.layer.close(index); //再执行关闭
  		}
  		
  		function closeCared(){
  			parent.layer.close(index); //再执行关闭
  		}
  </script>
  
  <body>
		<div class="gzxx-content clearfloat">
			<ul>
				<li><span>关注人：</span>
					<select id="caredPerson" class="gzxx-input">
					</select>
				</li>
				<li><span>关注类型：</span> 
					<label><input type="checkbox" name="checkbox_t" value="执行失败" id="CheckboxGroup1_2">执行失败</label> 
					<label><input type="checkbox" name="checkbox_t" value="执行成功" id="CheckboxGroup1_3">执行成功</label>
				</li>
				<li><span>通知方式：</span>
					<label><input type="checkbox" name="checkbox_m" value="邮件" id="CheckboxGroup1_0">邮件</label>
				</li>
				<li>
					<a href="javascript:executeOK()" title="确定" class="task-but3">确定</a> 
					<a href="javascript:closeCared()" title="取消" class="task-but4">取消</a>
				</li>
			</ul>
		</div>
  </body>
</html>
