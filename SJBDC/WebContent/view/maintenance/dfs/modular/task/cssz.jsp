<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../../common/dfs_url.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<% String path = request.getContextPath()+"/view/maintenance/dfs"; %>

<html>
	<head>
		<title>参数设置</title>
		<script src="<%=path %>/js/jquery-1.11.3.min.js" ></script>
		<script src="<%=path %>/js/layer/layer.js"></script>
		<script type=text/javascript src="<%=path %>/js/template.js"></script>
		<link href="<%=path %>/css/jkgl.css" rel="stylesheet" type="text/css">
		<script type="text/javascript">
			var dfsurl = '${dfs_url}';
			var type = "${param.type}";
			var id = "${param.id}";
			var old_id = "${param.old_id}";
			//如果在创建过程中改变了方案，参数设置需要改变
			
			var editparam= "" ;
			if(id == old_id){
				editparam = parent.$("#parentIframe").val();
			}else if(old_id==''){
			    editparam = parent.$("#parentIframe").val();
			}
			var index = parent.layer.getFrameIndex(window.name);
			$(document).ready(function() {
			    $.ajaxSetup ({ cache: false }); 
			    if(editparam!=''){
			       var json="{\"parameters\":[";
			        var len=editparam.split(",").length;
			        var array=editparam.split(",");
			        for(var i=0;i<len;i++){
			           var paramname=array[i].split("=")[0];
			           var paramvalue=array[i].split("=")[1];
			           var paramdesc="";
			           if(array[i].split("=").length>=3){
			               paramdesc=array[i].split("=")[2];
			           }
			           json=json+"{\"name\":\""+paramname+"\",";
			           json=json+"\"defaultValue\":\"\",";
			           json=json+"\"value\":\""+paramvalue+"\",";
			           json=json+"\"description\":\""+paramdesc+"\"},";
			        }
			        json = json.substring(0,json.length-1);
			        json =json+"]}";
			        var parjson=eval("(" + json + ")");
			       setParamUI(parjson.parameters);
			    }else{
			        $.ajax({
					async : false,
					url : dfsurl,
					data : {
						request : 'GETPARAMETERBYSCHEMAID',
						service : 'DataFusionService',
						version : '1.0.0',
						format : 'json',
						ID : id,
						SCHEMATYPE : type,
						EDITPARAM:editparam
					},
					success : function(da) {
						var param = da.parameters;
						 setParamUI(param);
					},
					dataType : "json"
				});
			    }
				
			});
			
			function setParamUI(params){
				var html = "";
				if(params.length > 0){
					var data = {
						param : params,
						length:params.length
					};
					html = template("paramSetting",data);
				}else{//无参数
					html = template("paramSetting2",new Array());
				}
				$("#paramlist").html(html);
			}
			
			//获取子窗口的值
			function create(){
			    //参数的长度
			    var length=$('#paramlength').val();
			    var paramStr="";
			    for (var i=0;i<length;i++)
				{
				   var name="paramName"+i;
				   var paramname= $('#'+name).val();
				   var value="paramValue"+i;
				   var paramvalue= $('#'+value).val();
				   var des="paramDes"+i;
				   var paramdes=$('#'+des).val();
				   paramStr=paramStr+paramname+'='+paramvalue+'='+paramdes+',';
				}
				//去掉最后一个逗号
				if(paramStr!="" && paramStr.indexOf(",")>0){
			  	   paramStr=paramStr.substring(0,paramStr.length-1);
				}
			   parent.$('#parentIframe').val(paramStr);
			   parent.$('#old_id').val(id);
               parent.layer.close(index);
			}
			
		function closediv(){
				parent.layer.close(index); //再执行关闭
		}
			
		</script>
		
		<script id="paramSetting" type="text/html">
            <input type="hidden" name="paramlength" id="paramlength" value="{{length}}">
			<ul>
				{{each param as value index}}
					<li>
						<span>{{value.name}}：</span>
                        <input type="hidden" name="paramName{{index}}" id="paramName{{index}}" value="{{value.name}}">
                         {{if value.value=='' || value.value==null}}
                              <input id="paramValue{{index}}" type="text" value="{{value.defaultValue}}" class="gzxx-input">
 							{{else}}
							  <input id="paramValue{{index}}" type="text" value="{{value.value}}" class="gzxx-input">
 						 {{/if}}
                        <input type="hidden" id="paramDes{{index}}" value="{{value.description}}">
                        {{if value.description=='' || value.description=='null'}}
                           {{else}}
						<i>({{value.description}})</i>
                        {{/if}}
					</li>
				{{/each}}
	            <li>
	                <a href="javascript:create();" class="task-but3">创建</a>
	                <a href="javascript:closediv();" class="task-but4">取消</a>
	            </li>
	        </ul>

		</script>
		
		<script id="paramSetting2" type="text/html">
			<span>无参数</span>
		</script>
		
	</head>
	
	<body style="background-color: #fff;">
		<!--参数设置-->
        <div id="paramlist" class="setting-cs">
        </div>
	</body>
</html>