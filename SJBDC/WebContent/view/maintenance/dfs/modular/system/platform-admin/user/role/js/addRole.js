


/*<script type="text/javascript">*/

	$(document).ready(function(){

		$("#btnPerm").click(function(){
			
			var roleID = $("#permRoleID").val($("#roleID").val());
			//alert("roleID:"+roleID);
			//清空
			$("#perm tbody").empty();			
			var permname = $("#permname").val();
			$.post("user/perm_list.action?respType=JSON",{"permissions.permname":permname},function(result){
				//alert(result);
				var permList = result.permList;
				for(var index = 0;index<permList.length;index++)
				{  
					$("#perm tbody").append("<tr><td><input name='chkSelectPower' type='checkbox'></td><td>"
							/*+ permList[index].permID +"</td><td>"*/
							+"<input name="+permList[index].permName+" id='"+permList[index].permID +"' type='hidden'/>" 
							+ permList[index].permType+"</td><td>"
							+ permList[index].permName+"</td><td>"
							+ permList[index].systemType+"</td><td>"
						   
							+"<a href='user/perm_gotoUpdate.action?permID="+ permList[index].permID +"'>修改</a>"
							/* +"<a href='user/perm_updateUsesMark.action?menuID="+ menuList[index].menuID +"&usesMark=0"+"'>启用</a>" */
							+"<a  href='javascript:void(0)'  onclick='setDelPerm( "+permList[index].permID+");' data-toggle='modal' data-target='#deletePermWindow' >删除</a></td>"
							
							
							+"</tr>");	
					
				}
			});
			
		});
		
		   $("#chkAllSelect").click(function(){//实现全选和反选
		       if(this.checked){
		         $("input[type='checkbox']").attr("checked",true);
		      }
		      else{
		         $("input[type='checkbox']").attr("checked",false);
		      }
		   
		   });

		   
		   //加载用户列表
		   $("#btnUser").click(function(){
			   
			   var roleID1 = $("#roleID").val();
			   //alert("roleID1"+roleID1);
			   var roleID = $("#userRoleID").val(roleID1);
			   //alert("roleID:"+roleID);
			   //$("")
				//清空
				$("#leftUserList").empty();
				$("#userList").empty();
				var userLoginName = $("#userLoginName").val();
				$.post("user/user_list.action?respType=JSON",{"user.userLoginName":userLoginName},function(result){
					//alert(result);
					var userList = result.userList;
					for(var index = 0;index<userList.length;index++)
					{  
						var userName = userList[index].userLoginName;
						
						var userID = userList[index].userID;
						//alert("userID:"+userID);
						
						/*$("#leftUserList").append("<option value="+userName+">"+userName +"</option>"); //为Select追加一个Option(下拉项)*/				
						$("#leftUserList").append("<option value="+userID+","+userName+">"+userName +"</option>"); //为Select追加一个Option(下拉项)
						
					}
					
					
					/* $("#userRight option[index='0']").remove();
					$("#select_id option[value='volvo']").remove(); //删除Select中Value='3'的Option  */

					
				});
				
			});
		   
		   
		   //加载组织机构列表
		   $("#btnOrg").click(function(){
			   
			 //获取角色ID
				var roleID2 = $("#roleID").val();
				//alert("roleID2:"+roleID2);
				var roleID = $("#orgRoleID").val(roleID2);
				//alert("获取的roleID:"+roleID);

				
				 initPage();
				 
				 function initPage(){
					 
					 var orgID = $("#orgID").val();
					 
					 getOrgData(orgID,function(zNodes){
						 initTree(zNodes);
					 });
					 
					 //
					 //$("#citySel").click(showMenu);
				 }
				 
				 function getOrgData(orgID,callback,failFn){
					 //queryOrgListByRoleID
					 $.post("user/org_queryOrgList.action",{"organization.orgID":orgID},function(result){
						 	
						 	var jsonResult = eval(result.jsonResult);			 	
						 	
						 	callback(jsonResult);
						 	
						 });
				 }
				 
				 function initTree(zNodes){
					 /*var zNodes =[
					  			{id:1, pId:0, name:"北京"},
					  			{id:2, pId:0, name:"天津"},
					  			{id:3, pId:0, name:"上海"},
					  			{id:6, pId:0, name:"重庆"},
					  			{id:4, pId:0, name:"河北省", open:true, nocheck:true},
					  			{id:41, pId:4, name:"石家庄"},
					  			{id:42, pId:4, name:"保定"},
					  			{id:43, pId:4, name:"邯郸"},
					  			{id:44, pId:4, name:"承德"},
					  			{id:5, pId:0, name:"广东省", open:true, nocheck:true},
					  			{id:51, pId:5, name:"广州"},
					  			{id:52, pId:5, name:"深圳"},
					  			{id:53, pId:5, name:"东莞"},
					  			{id:54, pId:5, name:"佛山"},
					  			{id:6, pId:0, name:"福建省", open:true, nocheck:true},
					  			{id:61, pId:6, name:"福州"},
					  			{id:62, pId:6, name:"厦门"},
					  			{id:63, pId:6, name:"泉州"},
					  			{id:64, pId:6, name:"三明"}
					  		 ];*/
					  		 
					  		 
					 
					 var setting = {
								check: {
									enable: true,
									chkboxType: {"Y":"", "N":""}
								},
								view: {
									dblClickExpand: false
								},
								data: {
									simpleData: {
										enable: true
									}
								},
								callback: {
									beforeClick: beforeClick,
									onCheck: onCheck
								}
							};
					 $.fn.zTree.init($("#treeDemo"), setting, zNodes);
				 }

				function beforeClick(treeId, treeNode) {
					var zTree = $.fn.zTree.getZTreeObj("treeDemo");
					zTree.checkNode(treeNode, !treeNode.checked, null, true);
					return false;
				}
				
				function onCheck(e, treeId, treeNode) {
					var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
					nodes = zTree.getCheckedNodes(true),
					v = "";
					
					f="";
					for (var i=0, l=nodes.length; i<l; i++) {
						v += nodes[i].name + ",";
						f += nodes[i].id + ",";
						
						//alert("id:"+nodes[i].id);
					}
					if (v.length > 0 ) v = v.substring(0, v.length-1);
					var cityObj = $("#citySel");
					cityObj.attr("value", v);
					
					if (f.length > 0 ) f = f.substring(0, f.length-1);
					var cityObj = $("#organizationRoleID");
					cityObj.attr("value", f);
				}

				function showMenu() {
					var cityObj = $("#citySel");
					var cityOffset = $("#citySel").offset();
					//$("#menuContent").css({left:cityOffset.left + "px", top:cityOffset.top + cityObj.outerHeight() + "px"}).slideDown("fast");

					//$("body").bind("mousedown", onBodyDown);
				}
		   });
		   
		
	});

/*</script>*/




/*<script>*/
$(function() {
	$("#leftUserList").dblclick(
					function() {
						var val = this.value;
						var aaa = val.split(",");
						var userID= aaa[0];
						var s_val = aaa[1];
						if (s_val == '')
							return;
						$(this).children("option[value='" + val + "']")
								.remove();
						$("#userList").append(
								'<option value="' + val + '">' + s_val
										+ '</option>');
						// 以下代码作用是 将选择到的值备份到一个id为rightUserList的input中，可以进行传值
						$("#rightUserList").val($("#rightUserList").val() + userID + "@");
						//alert($("#rightUserList").val())
					});

	$("#userList").dblclick(
					function() {
						var val = this.value;
						var aaa = val.split(",");
						var userID= aaa[0];
						var s_val = aaa[1];
						if (s_val == '')
							return;
						$(this).children("option[value='" + val + "']")
								.remove();
						$("#leftUserList").append(
								'<option value="' + val + '">' + s_val
										+ '</option>');

						var now_val = $("#rightUserList").val();
						now_val = now_val.replace(userID + "@", "");
						$("#rightUserList").val(now_val);
						//alert($("#rightUserList").val())
					});

}) 
/*</script>*/
