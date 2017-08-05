	
	
/*<script type="text/javascript">*/
		function findPageElementList(pageNo,pageSize){
			//清空
			$("#pageElement tbody").empty();

			var elementName = $("#elementName").val();
			$.post("user/page_list.action?respType=JSON",{"pageElement.elementName":elementName,"pageNo":pageNo,"pageSize":pageSize},function(result){
			//alert(result);
			var pageElementList = result.pageElementList;
			var pageCount = result.pageCount;
			var pageNo = result.pageNo;
			var pageSize = result.pageSize;
			var totalCount = result.totalCount;
			var currentPage = result.currentPage;
			
			for(var index = 0;index<pageElementList.length;index++)
			{  
				
				var usesMark = pageElementList[index].elementUsesMark;
				//alert("usesMark:"+usesMark);
				var trStr="";
				trStr = "<tr><td>"
						+ pageElementList[index].elementName +"</td><td>"
						+ pageElementList[index].elementCode+"</td><td>"
						+ pageElementList[index].elementSort+"</td><td>"	
					   /*	+ pageElementList[index].elementUsesMark+"</td><td>"*/
						+"<a href='javascript:void(0)' onclick='gotoPageUpdate(\""+pageElementList[index].elementID+"\");' data-toggle='modal' data-target='#updatePageElementWindow'><img title='修改' src='view/usersys/theme/default/img/edit.png'></a>  ";
						
						if( usesMark == 0){
							trStr+="<a href='user/page_updateUsesMark.action?elementID="+ pageElementList[index].elementID +"&usesMark=1"+"'><img title='启用' src='view/usersys/theme/default/img/start.png'></a>";
						}else{
							trStr+="<a href='user/page_updateUsesMark.action?elementID="+ pageElementList[index].elementID +"&usesMark=0"+"'><img title='禁用' src='view/usersys/theme/default/img/disabled.png'></a>";
						}
						 
						trStr+="<a href='javascript:void(0)' onclick='deleteOperate(\""+ pageElementList[index].elementID+"\",\"page\"   );'  ><img title='删除' src='view/usersys/theme/default/img/delete.png'></a></td>"
						+"</tr>";	
				
				$("#pageElement tbody").append(trStr);	
						
			}
				
			
			 pagePager(pageCount,pageNo,pageSize,totalCount,currentPage,function(p1,p2){
				 findPageElementList(p1,p2);
			}); 
			
		
		}); 
	}
		
		 function pagePager(pageCount,pageNo,pageSize,totalCount,currentPage,func){ 
			//清空
			$("#pageElementPager").empty();
			
			var html="";
			
			html+='<div class="row" style="margin-top: 15px;">';
			html+='<div class="col-sm-6">第'+currentPage+'页 ( 总共'+pageCount+'页 )</div>';
			html+='<div class="col-sm-6"><nav class="pull-right"><ul class="pagination"	style="margin-top: 0px; margin-bottom: 0px;">';
			if(currentPage>1){
				html+='<li><a href="javascript:findPageElementList('+(currentPage-1)+',10)">上一页</a></li>';
			}
			else{
				html+='<li class="disabled"><a href="javascript:;">上一页</a></li>';
			}
			for(var i=((currentPage-5)>0?(currentPage-5):1);i<=((currentPage+5)>pageCount?(pageCount):(currentPage+5));i++){
				html+='<li class="'+(currentPage==i?'active':'')+'"><a href="javascript:findPageElementList('+i+',10)">'+i+'</a></li>';
			}
			if(pageCount>currentPage){
				html+='<li><a href="javascript:findPageElementList('+(currentPage+1)+',10)">下一页</a></li>';
			}
			else{
				html+='<li class="disabled"><a href="javascript:;">下一页</a>	</li>';
			}
			html+='</ul></nav></div></div>';
			$("#pageElementPager").append(html);
		};
		
		function gotoPageUpdate(elementID){
			$.post("user/page_gotoUpdate.action?respType=JSON",{"elementID":elementID},function(result){
				var pageElement = result.pageElement;
				var permissions = result.permissions
				$("#update_elementID").val(pageElement.elementID);
				$("#update_elementName").val(pageElement.elementName);
				$("#update_elementCode").val(pageElement.elementCode);
				$("#update_elementSort").val(pageElement.elementSort);
				$("#update_elementUsesMark").val(pageElement.elementUsesMark);
				$("#update_page_permName").val(permissions.permName);
				$("#update_page_systemType").val(permissions.systemType);
			});
			
		}
		
		$(document).ready(function(){
		$("#btnPageElement").click(function(){
			//默认是第一页，每页4条数据
			findPageElementList(1,10);
				
			});
	
	});

/*</script>*/		
	
	
	/*<script type="text/javascript">*/
	function findMenuList(pageNo,pageSize){
		$("#menu tbody").empty();
	var menuName = $("#menuName").val();
	//alert("menuName:"+menuName);
	//返回JSON类型的List,根据菜单名称的条件查询，下一页，每一页条数    
	$.post("user/menu_list.action?respType=JSON",{"menu.menuName":menuName,"pageNo":pageNo,"pageSize":pageSize},function(result){
		var menuList = result.menuList;
		var pageCount = result.pageCount;
		var pageNo = result.pageNo;
		var pageSize = result.pageSize;
		var totalCount = result.totalCount;
		var currentPage = result.currentPage;
		for(var index = 0;index<menuList.length;index++)
		{  
			var usesMark = menuList[index].menuUsesMark;
			var trStr="";
			trStr = "<tr><td>"
					+ menuList[index].menuName+"</td><td>"
					+ menuList[index].menuUrl+"</td><td>"
					+ menuList[index].menuRemark+"</td><td>"
					+"<a href='javascript:void(0)' onclick='gotoMenuUpdate(\""+menuList[index].menuID+"\");' data-toggle='modal' data-target='#updateMenuWindow'><img title='修改' src='view/usersys/theme/default/img/edit.png'></a> ";
					
					if( usesMark == 0){
						trStr+="<a href='user/menu_updateUsesMark.action?menuID="+ menuList[index].menuID +"&usesMark=1"+"'><img title='启用' src='view/usersys/theme/default/img/start.png'></a>";
					}else{
						trStr+="<a href='user/menu_updateUsesMark.action?menuID="+ menuList[index].menuID +"&usesMark=0"+"'><img title='禁用' src='view/usersys/theme/default/img/disabled.png'></a>";
					}
					 
					trStr+="<a href='javascript:void(0)' onclick='deleteOperate(\""+ menuList[index].menuID+"\",\"menu\"   );'  ><img title='删除' src='view/usersys/theme/default/img/delete.png'></a></td>";
					+"</tr>";	
			
			$("#menu tbody").append(trStr);	
		}	
		
		 menuPager(pageCount,pageNo,pageSize,totalCount,currentPage,function(p1,p2){
			findMenuList(p1,p2);
		}); 
		
	}); 
}
	
	 function menuPager(pageCount,pageNo,pageSize,totalCount,currentPage,func){ 
		//清空
		$("#pager").empty();
		
		var html="";
			
			html+='<div class="row" style="margin-top: 15px;">';
			html+='<div class="col-sm-6">第'+currentPage+'页 ( 总共'+pageCount+'页 )</div>';
			html+='<div class="col-sm-6"><nav class="pull-right"><ul class="pagination"	style="margin-top: 0px; margin-bottom: 0px;">';
			if(currentPage>1){
				html+='<li><a href="javascript:findMenuList('+(currentPage-1)+',10)">上一页</a></li>';
			}
			else{
				html+='<li class="disabled"><a href="javascript:;">上一页</a></li>';
			}
			for(var i=((currentPage-5)>0?(currentPage-5):1);i<=((currentPage+5)>pageCount?(pageCount):(currentPage+5));i++){
				html+='<li class="'+(currentPage==i?'active':'')+'"><a href="javascript:findMenuList('+i+',10)">'+i+'</a></li>';
			}
			if(pageCount>currentPage){
				html+='<li><a href="javascript:findMenuList('+(currentPage+1)+',10)">下一页</a></li>';
			}
			else{
				html+='<li class="disabled"><a href="javascript:;">下一页</a>	</li>';
			}
			html+='</ul></nav></div></div>';
			$("#pager").append(html);
		
	};
	
	
	
	function gotoMenuUpdate(menuID){
		$.post("user/menu_gotoUpdate.action?respType=JSON",{"menuID":menuID},function(result){
			var menu = result.menu;
			var permissions = result.permissions
			$("#update_menuID").val(menu.menuID);
			$("#update_menuName").val(menu.menuName);
			$("#update_menuUrl").val(menu.menuUrl);
			$("#update_menuRemark").val(menu.menuRemark);
			$("#update_menuCode").val(menu.menuCode);
			$("#update_menuPermName").val(permissions.permName);
			$("#menuSystemType").val(permissions.systemType);
		});
		
	}
	
	
	$(document).ready(function(){
	$("#btnMenu").click(function(){
		//默认是第一页，每页4条数据
		findMenuList(1,10);
			
		});

});
	

/*</script>*/
		
/*<script type="text/javascript">*/	
	
	//定义全局变量，暂时存放待删除的操作ID
	var delOperateID = null;
	
		function findOperateList(pageNo,pageSize){
			//清空
			$("#perm tbody").empty();

			var operationName = $("#operationName").val();
			$.post("user/operate_list.action?respType=JSON",{"operation.operationName":operationName,"pageNo":pageNo,"pageSize":pageSize},function(result){

			//alert(result);
			var operationList = result.operationList;
			var pageCount = result.pageCount;
			var pageNo = result.pageNo;
			var pageSize = result.pageSize;
			var totalCount = result.totalCount;
			var currentPage = result.currentPage;			
			for(var index = 0;index<operationList.length;index++)
			{  
				/*$("#perm tbody").append("<tr><td><input name='chkSelectPower' type='checkbox'></td><td>"
						+ operationList[index].operationName +"</td><td>"
						+ operationList[index].operationCode+"</td><td>"
						+ operationList[index].operationUrl+"</td><td>"
						+ operationList[index].operationSort+"</td><td>"
						+ operationList[index].operationUsesMark+"</td><td>"
						+"<a href='javascript:void(0)' onclick='gotoOperUpdate(\""+operationList[index].operationID+"\");' data-toggle='modal' data-target='#updateFunctionWindow'>修改</a>  "
						+"<a href='javascript:void(0)' onclick='deleteOperate(\""+operationList[index].operationID+"\",\"operate\");'>删除</a></td>"
						+"</tr>");*/	
				
				
				
				var usesMark = operationList[index].operationUsesMark;
				var trStr="";
				trStr = "<tr><td>"
						+ operationList[index].operationName +"</td><td>"
						+ operationList[index].operationCode+"</td><td>"
						+ operationList[index].operationUrl+"</td><td>"
						+ operationList[index].operationSort+"</td><td>"
						+ operationList[index].operationUsesMark+"</td><td>"
						+"<a href='javascript:void(0)' onclick='gotoOperUpdate(\""+operationList[index].operationID+"\");' data-toggle='modal' data-target='#updateFunctionWindow'><img title='修改' src='view/usersys/theme/default/img/edit.png'></a> ";
						if( usesMark == 0){
							trStr+="<a href='user/operate_updateUsesMark.action?operationID="+ operationList[index].operationID +"&usesMark=1"+"'><img title='启用' src='view/usersys/theme/default/img/start.png'></a>";
						}else{
							trStr+="<a href='user/operate_updateUsesMark.action?operationID="+ operationList[index].operationID +"&usesMark=0"+"'><img title='禁用' src='view/usersys/theme/default/img/disabled.png'></a>";
						}
						 
						trStr+="<a href='javascript:void(0)' onclick='deleteOperate(\""+operationList[index].operationID+"\",\"operate\");'><img title='删除' src='view/usersys/theme/default/img/delete.png'></a></td>";
						+"</tr>";	
				
				$("#perm tbody").append(trStr);	
			}
			
			 pager(pageCount,pageNo,pageSize,totalCount,currentPage,function(p1,p2){
				 findOperateList(p1,p2);
			}); 
			
		
		}); 
	}
		
		 function pager(pageCount,pageNo,pageSize,totalCount,currentPage,func){ 
			//清空
			$("#operatePager").empty();
			var html="";
			
			html+='<div class="row" style="margin-top: 15px;">';
			html+='<div class="col-sm-6">第'+currentPage+'页 ( 总共'+pageCount+'页 )</div>';
			html+='<div class="col-sm-6"><nav class="pull-right"><ul class="pagination"	style="margin-top: 0px; margin-bottom: 0px;">';
			if(currentPage>1){
				html+='<li><a href="javascript:findOperateList('+(currentPage-1)+',10)">上一页</a></li>';
			}
			else{
				html+='<li class="disabled"><a href="javascript:;">上一页</a></li>';
			}
			for(var i=((currentPage-5)>0?(currentPage-5):1);i<=((currentPage+5)>pageCount?(pageCount):(currentPage+5));i++){
				html+='<li class="'+(currentPage==i?'active':'')+'"><a href="javascript:findOperateList('+i+',10)">'+i+'</a></li>';
			}
			if(pageCount>currentPage){
				html+='<li><a href="javascript:findOperateList('+(currentPage+1)+',10)">下一页</a></li>';
			}
			else{
				html+='<li class="disabled"><a href="javascript:;">下一页</a>	</li>';
			}
			html+='</ul></nav></div></div>';
			$("#operatePager").append(html);
		};
		
		function gotoOperUpdate(operationID){
			$.post("user/operate_gotoUpdate.action?respType=JSON",{"operationID":operationID},function(result){
				var operation = result.operation;
				var permissions = result.permissions
				$("#update_operationID").val(operation.operationID);
				$("#update_operationName").val(operation.operationName);
				$("#update_operationCode").val(operation.operationCode);
				$("#update_operationUrl").val(operation.operationUrl);
				$("#update_operationSort").val(operation.operationSort);
				$("#update_oper_permName").val(permissions.permName);
				$("#update_oper_systemType").val(permissions.systemType);
			});
			
		}
		
		//设置操作ID
		function setDelOperate(operateID){
			delOperateID = operateID;
		}
		
		//删除功能权限
		function deleteOperate(permID,permType){
//			if(confirm("删除后不可恢复，您确定删除？")){
//				if(permType=="operate"){
//					window.location.href= basePath + '/user/operate_delete.action?operationID='+permID;
//				}else if(permType=="menu"){
//					window.location.href= basePath + '/user/menu_delete.action?menuID='+permID;
//				}else if(permType=="page"){
//					window.location.href= basePath + '/user/page_delete.action?elementID='+permID;
//				}
//			}
			
			
			window.parent.Util.confirm(
				null,
				"删除后不可恢复，您确定删除？",
				function(){
					if(permType=="operate"){
						window.location.href= basePath + '/user/operate_delete.action?operationID='+permID;
					}else if(permType=="menu"){
						window.location.href= basePath + '/user/menu_delete.action?menuID='+permID;
					}else if(permType=="page"){
						window.location.href= basePath + '/user/page_delete.action?elementID='+permID;
					}
				},
				null
			)
				
			
			//alert(permType);
//			$("#btnOk").click(function(){
//				/*var submitForm = $("#submitForm")
//				submitForm.attr("action","ordersAction/orders_deleteOrdersAll.shtml?orderId="+orderId);
//				submitForm.submit();*/
//				if(permType=="operate"){
//					
//					window.location.href= basePath + '/user/operate_delete.action?operationID='+permID;
//				
//				}else if(permType=="menu"){
//					
//					window.location.href= basePath + '/user/menu_delete.action?menuID='+permID;
//				
//				}else if(permType=="page"){
//					
//					window.location.href= basePath + '/user/page_delete.action?elementID='+permID;
//					
//				}
//				
//			});
			//$('#confirmModel').modal('show');
			
		}
		
		
		

		$(document).ready(function(){
			
		
		$("#btnPerm").click(function(){
			//默认是第一页，每页10条数据
			findOperateList(1,10);					
				
			});
		
		
		$("#chkAllSelect").click(function(){//实现全选和反选
		       if(this.checked){
		         $("input[type='checkbox']").attr("checked",true);
		      }
		      else{
		         $("input[type='checkbox']").attr("checked",false);
		      }
		   
		   });
	
	});
		
		

