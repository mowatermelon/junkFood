<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String _path = request.getContextPath()+"/view/maintenance/dfs";
String ip=request.getLocalAddr();
int port=request.getLocalPort();
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <script type="text/javascript">
  		var index; 
  		//获取url中的参数
        function getUrlParam(key,url) {
              var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
              var r = decodeURI(url).substr(1).match(reg);  //匹配目标参数
              if (r != null) return unescape(r[2]); return null; //返回参数值
        }
        
        
        //将毫秒转换
        function getContinueTime(msd){
			if(msd == null){
				return 0+"秒";
			}
			var time = parseFloat(msd) / 1000;
			var theTime = parseInt(time);// 秒
		    var theTime1 = 0;// 分
		    var theTime2 = 0;// 小时
		    if(theTime > 60) {
		        theTime1 = parseInt(theTime/60);
		        theTime = parseInt(theTime%60);
	            if(theTime1 > 60) {
		            theTime2 = parseInt(theTime1/60);
		            theTime1 = parseInt(theTime1%60);
	            }
		    }
	        var result = ""+parseInt(theTime)+"秒";
	        if(theTime1 > 0) {
	        	result = ""+parseInt(theTime1)+"分"+result;
	        }
	        if(theTime2 > 0) {
	        	result = ""+parseInt(theTime2)+"小时"+result;
	        }
		    return result;
		}
		
		//扩展Date对象
		Date.prototype.format = function(f) {
			var o = {
				"M+" : this.getMonth() + 1, //month
				"d+" : this.getDate(), //day
				"h+" : this.getHours(), //hour 24
				"H+" : this.getHours(), //     
				"m+" : this.getMinutes(), //minute
				"s+" : this.getSeconds(), //second
				"q+" : Math.floor((this.getMonth() + 3) / 3), //quarter
				"S" : this.getMilliseconds()
			//millisecond
			};
			if (/(y+)/.test(f))
				f = f.replace(RegExp.$1, (this.getFullYear() + "")
						.substr(4 - RegExp.$1.length));
			for ( var k in o)
				if (new RegExp("(" + k + ")").test(f))
					f = f.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
							: ("00" + o[k]).substr(("" + o[k]).length));
			return f;
		};
    
  	</script>
  </head>
  
   <body>
  	
  	<%--
  	<!--左边导航栏-->
    <div class="nav-leftjk" id="firstpane">
        <a href="javascript:void(0);" class="menu_head hide" id="menu0"><img src="<%=_path %>/images/ico/plan.png">方案库</a>
        <ul style="display:none;" class="menu_body" id="menu_body0">
            <!--当前选中时样式为 nav-menu-cur  未选中时样式 nav-menu-->
            <li class="nav-menu hide" id="fagl"><a href="<%=_path %>/modular/schema/schemaManage.jsp"><img src="<%=_path %>/images/ico/plan-gl.png">方案管理</a></li>
        </ul>
        <a href="javascript:void(0);" class="menu_head hide"  id="menu1"><img src="<%=_path %>/images/ico/task.png">任务</a>
        <ul  style="display:none;" class="menu_body" id="menu_body1">
            <!--当前选中时样式为 nav-menu-cur  未选中时样式 nav-menu-->
            <li class="nav-menu hide" id="taskcj"><a href="<%=_path %>/modular/task/createTask.jsp"><img src="<%=_path %>/images/ico/task-new.png">任务创建</a></li>
            <li class="nav-menu hide" id="taskgl"><a href="<%=_path %>/modular/task/taskManager.jsp"><img src="<%=_path %>/images/ico/task-gl.png">任务管理</a></li>
        </ul>
        <a href="javascript:void(0);" class="menu_head hide"  id="menu2"><img src="<%=_path %>/images/ico/node.png">节点</a>
        <ul  style="display:none;" class="menu_body">
           <!--当前选中时样式为 nav-menu-cur  未选中时样式 nav-menu-->
           <li class="nav-menu hide" id="fzgl"><a href="<%=_path %>/modular/node/nodeGroupList.jsp"><img src="<%=_path %>/images/ico/packet.png">分组管理</a></li>
           <li class="nav-menu hide" id="jdgl"><a href="<%=_path %>/modular/node/nodeManage.jsp"><img src="<%=_path %>/images/ico/node-gl.png">节点管理</a></li>
        </ul>
        <a href="javascript:void(0);" class="menu_head hide"  id="menu3"><img src="<%=_path %>/images/ico/journal.png">日志</a>
        <ul  style="display:none;" class="menu_body">
            <!--当前选中时样式为 nav-menu-cur  未选中时样式 nav-menu-->
            <li class="nav-menu hide" id="zxrz"><a href="<%=_path %>/modular/log/taskExecuteLog.jsp"><img src="<%=_path %>/images/ico/journal-zx.png">任务执行日志</a></li>
            <li class="nav-menu hide" id="czrz"><a href="<%=_path %>/modular/log/operatorLogList.jsp"><img src="<%=_path %>/images/ico/journal-xt.png">系统操作日志</a></li>
        </ul>
        <a href="javascript:void(0);" class="menu_head hide"  id="menu4"><img src="<%=_path %>/images/ico/setting.png">系统</a>
        <ul  style="display:none;" class="menu_body">
            <!--当前选中时样式为 nav-menu-cur  未选中时样式 nav-menu-->
            <li class="nav-menu hide" id="cssz"><a href="<%=_path %>/modular/system/smtpInfo.jsp"><img src="<%=_path %>/images/ico/system.png">系统参数设置</a></li>
            <li class="nav-menu hide" id="jsgl"><a href="<%=_path %>/user/role_list.action"><img src="<%=_path %>/images/ico/role.png">角色管理</a></li>
            <li class="nav-menu hide" id="yhgl"><a href="<%=_path %>/user/user_list.action"><img src="<%=_path %>/images/ico/user-gl.png">用户管理</a></li>
            <li class="nav-menu hide" id="jggl"><a href="<%=_path %>/user/org_list.action"><img src="<%=_path %>/images/ico/user-gl.png">机构管理</a></li>
            <li class="nav-menu hide" id="qxgl"><a href="<%=_path %>/user/perm_list.action"><img src="<%=_path %>/images/ico/user-gl.png">权限管理</a></li>
        </ul>
    </div>
    --%>
    
  </body>
</html>
<script type="text/javascript">
  	var userMenuData='<%=session.getAttribute("GeoDFS_permissions")%>';
  	    if(userMenuData!='' && userMenuData!='null'){
  	       var temp = eval('('+userMenuData+')');
		for(var i=0;i<temp.jsonResult.length;i++){
		   if(temp.jsonResult[i].permAuthor=='true'){
		      if(temp.jsonResult[i].permName=='方案库'){
		      $('#menu0').attr("class","menu_head");
		   }else if(temp.jsonResult[i].permName=='方案管理'){
		      $('#fagl').attr("class","nav-menu");
		   }else if(temp.jsonResult[i].permName=='任务'){
		      $('#menu1').attr("class","menu_head");
		   }else if(temp.jsonResult[i].permName=='任务创建'){
		   	  $('#taskcj').attr("class","nav-menu");
		   }else if(temp.jsonResult[i].permName=='任务管理'){
		     $('#taskgl').attr("class","nav-menu");
		   }else if(temp.jsonResult[i].permName=='节点'){
		     $('#menu2').attr("class","menu_head");
		   }else if(temp.jsonResult[i].permName=='分组管理'){
		     $('#fzgl').attr("class","nav-menu");
		   }else if(temp.jsonResult[i].permName=='节点管理'){
		     $('#jdgl').attr("class","nav-menu");
		   }else if(temp.jsonResult[i].permName=='日志'){
		     $('#menu3').attr("class","menu_head");
		   }else if(temp.jsonResult[i].permName=='任务执行日志'){
		     $('#zxrz').attr("class","nav-menu");
		   }else if(temp.jsonResult[i].permName=='系统操作日志'){
		     $('#czrz').attr("class","nav-menu");
		   }else if(temp.jsonResult[i].permName=='系统'){
		     $('#menu4').attr("class","menu_head");
		   }else if(temp.jsonResult[i].permName=='系统参数设置'){
		     $('#cssz').attr("class","nav-menu");
		   }else if(temp.jsonResult[i].permName=='角色管理'){
		     $('#jsgl').attr("class","nav-menu");
		   }else if(temp.jsonResult[i].permName=='用户管理'){
		     $('#yhgl').attr("class","nav-menu");
		   }else if(temp.jsonResult[i].permName=='机构管理'){
		     $('#jggl').attr("class","nav-menu");
		   }else if(temp.jsonResult[i].permName=='权限管理'){
		     $('#qxgl').attr("class","nav-menu");
		   }else{
		      continue;
		   }
		   }
		   
		}
  	    }
		function loading(){
		   //layer.load(0, {shade: false}); //0代表加载的风格，支持0-2
		    index =layer.load(2, {
   			 shade: [0.1,'#fff'] //0.1透明度的白色背景
			});
		}
</script>
