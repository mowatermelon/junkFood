	
	/*<script type="text/javascript">*/

	$(document).ready(function(){
		
		/*//加载组织机构列表
		   $("#btnOrg").click(function(){*/
			   
			   	//获取角色ID
				var roleID = $("#roleID").val();
				
				//alert("roleID:"+roleID);
				
				var systemType = $("#menuSystemType").val();
				//alert("systemType:"+systemType);
				
				 initPage();
				 
				 
				 $('#menuSystemType').change(function() {
						//alert($(this).children('option:selected').val());
						systemType = $(this).children('option:selected').val();// 这就是selected的值
						//window.location.href = ;//页面跳转并传参 
						
						initPage();
					})
					
					
				 function initPage(){
					 
					 
					 getOrgData(roleID,function(zNodes){
						 initTree(zNodes);
					 });
					 
					 //
					 //$("#citySel").click(showMenu);
				 }
				 
				 function getOrgData(roleID,callback,failFn){
					 
					 //org_queryOrgListByRoleID.action
					 //perm_queryPermListBySystemType.action?respTye=JSON
					 
					 $.post("user/perm_queryPermListBySystemType.action?respTye=JSON",{"systemType":systemType,"roleID":roleID},function(result){
						 	
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
//					if (v.length > 0 ) v = v.substring(0, v.length-1);
//					var cityObj = $("#citySel");
//					cityObj.attr("value", v);
					
					if (f.length > 0 ) f = f.substring(0, f.length-1);
					var cityObj = $("#rolePermID");
					cityObj.attr("value", f);
				}

		  /* });*/
		   
		
	});
	/*</script>*/
