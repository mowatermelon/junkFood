


	/*<script type="text/javascript">*/

	$(document).ready(function(){
			//加载组织机构列表
		   $("#btnOrg").click(function(){
			   
			 //获取角色ID
				var roleID = $("#roleID").val();
//				alert("roleID2:"+roleID2);
				$("#orgRoleID").val(roleID);
				var orgRoleID = $("#orgRoleID").val();
				//alert("roleID:"+$("#roleID").val());
				//alert("获取的roleID:"+orgRoleID);
				
				 initPage();
				 
				 function initPage(){
					 
					 var orgID = $("#orgID").val();
					 
					 getOrgData(orgID,roleID,function(zNodes){
						 initTree(zNodes);
					 });
					 
					 //
					 //$("#citySel").click(showMenu);
				 }
				 
				 function getOrgData(orgID,roleID,callback,failFn){
					 
					 $.post("user/org_queryOrgListByRoleID.action",{"organization.orgID":orgID,"roleID":roleID},function(result){
						 	
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
					  		 
					 /*var zNodes =[
					    {
					        "id": "root",
					        "pId": "root",
					        "open": true,
					        "name": "组织机构"
					    },
					    {
					        "id": "863e80c6-3329-42b9-8452-40cc303e6b68",
					        "pId": "root",
					        "open": true,
					        "name": "test"
					    },
					    {
					        "id": "62e87ee0-d500-42e4-990f-d47fe0c6d3da",
					        "pId": "root",
					        "open": true,
					        "name": "1234"
					    },
					    {
					        "id": "5142bd71-63f2-42b4-8286-84cf8d5fcfd8",
					        "pId": "root",
					        "open": true,
					        "name": "asdas"
					    },
					    {
					        "id": "50cbf7b8-13ba-4951-b853-133bf0bc5d28",
					        "pId": "59e97e1e-7522-4d25-aa79-9c0667fad1b9",
					        "open": true,
					        "name": "市场"
					    },
					    {
					        "id": "59e97e1e-7522-4d25-aa79-9c0667fad1b9",
					        "pId": "root",
					        "open": true,
					        "name": "组织机构4"
					    },
					    {
					        "id": "bf861e7a-eaeb-41e2-a3b0-43e28343c041",
					        "pId": "root",
					        "open": true,
					        "name": "组织机构5"
					    },
					    {
					        "id": "0a1abb4b-16d0-4570-80e0-fb86982c2a86",
					        "pId": "root",
					        "open": true,
					        "name": "组织机构6"
					    },
					    {
					        "id": "c6278498-7d49-4d81-b347-a1d989f40298",
					        "pId": "244ac649-3411-4a24-a830-2348be125f0f",
					        "open": true,
					        "name": "市场"
					    },
					    {
					        "id": "d1cd3bc2-6fde-48e7-87c0-aece1ae48fd2",
					        "pId": "root",
					        "open": true,
					        "name": "423423423"
					    },
					    {
					        "id": "a26b6cff-9ccb-4d3c-95c8-87c1f4419a47",
					        "pId": "ca768064-eaa9-42b1-9b4c-2661c3b400b8",
					        "open": true,
					        "name": "地税"
					    },
					    {
					        "id": "be3e5590-2c33-4c72-9826-0b80248e92de",
					        "pId": "ff24a827-251d-40ac-a7ff-419f2ca0bfd5",
					        "open": true,
					        "name": "市场"
					    },
					    {
					        "id": "ff24a827-251d-40ac-a7ff-419f2ca0bfd5",
					        "pId": "root",
					        "open": true,
					        "name": "地税局1"
					    },
					    {
					        "id": "ca768064-eaa9-42b1-9b4c-2661c3b400b8",
					        "pId": "root",
					        "open": true,
					        "name": "地税局2"
					    },
					    {
					        "id": "7695fd2c-30bc-4ed7-9375-832cfbc2f8b4",
					        "pId": "root",
					        "open": true,
					        "name": "地税局3"
					    },
					    {
					        "id": "4e35da0d-eebc-4074-805d-4bc082183003",
					        "pId": "62e87ee0-d500-42e4-990f-d47fe0c6d3da",
					        "open": true,
					        "name": "人力资源",
					        "checked": true
					    },
					    {
					        "id": "0febce96-5366-464f-8a30-fa39f5557086",
					        "pId": "bf861e7a-eaeb-41e2-a3b0-43e28343c041",
					        "open": true,
					        "name": "人力资源"
					    },
					    {
					        "id": "da469d30-c025-424f-8ecb-261e57f916da",
					        "pId": "0febce96-5366-464f-8a30-fa39f5557086",
					        "open": true,
					        "name": "组织机构6"
					    },
					    {
					        "id": "b912cc76-1e85-466a-a2c6-1e255e931884",
					        "pId": "be3e5590-2c33-4c72-9826-0b80248e92de",
					        "open": true,
					        "name": "组织机构6"
					    },
					    {
					        "id": "c340128b-482c-4474-8c2a-d0b7d1674dfd",
					        "pId": "adebeb35-548b-48e4-b66a-a49201bc7544",
					        "open": true,
					        "name": "423423423"
					    },
					    {
					        "id": "244ac649-3411-4a24-a830-2348be125f0f",
					        "pId": "c340128b-482c-4474-8c2a-d0b7d1674dfd",
					        "open": true,
					        "name": "市场"
					    },
					    {
					        "id": "adebeb35-548b-48e4-b66a-a49201bc7544",
					        "pId": "7695fd2c-30bc-4ed7-9375-832cfbc2f8b4",
					        "open": true,
					        "name": "研发中心"
					    }
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
					var cityObj = $("#organizationRoleID");
					cityObj.attr("value", f);
				}

		   });
		   
		
	});
	/*</script>*/
