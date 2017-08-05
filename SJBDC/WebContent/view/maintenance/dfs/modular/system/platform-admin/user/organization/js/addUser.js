


/*<script type="text/javascript">*/


		   
		   //加载用户列表
		   /*$("#btnUser").click(function(){*/
			   function init(){
			       var roleID1 = $("#roleID").val();
			   //alert("roleID1"+roleID1);
			   var roleID = $("#userRoleID").val(roleID1);
			   var bathpath=$("#orgpath").val();
			   //alert("roleID:"+roleID);
			   //$("")
				//清空
				$("#leftUserList").empty();
				$("#userList").empty();
				var userLoginName = $("#userLoginName").val();
				$.post(bathpath+"user/user_list.action?respType=JSON",{"user.userLoginName":userLoginName},function(result){
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
				
			   }
			   
			/*});*/
		   
		   

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
