	var setting = {
		view : {
			dblClickExpand : false
		},
		data : {
			simpleData : {
				enable : true
			}
		},
		callback : {
			beforeClick : beforeClick,
			onClick : onClick
		}
	};

	function getSchemaTree() {
		$.ajax({
			url : dfsurl,
			data : {
				request : 'GETSCHEMATREE',
				service : 'DataFusionService',
				version : '1.0.0',
				format : 'json'
			},
			contentType : "application/x-www-form-urlencoded; charset=utf-8",
			success : function(transport){
				eval("var data = " + transport);
				var zNodes = data;
				$.fn.zTree.init($("#treeDemo"), setting, zNodes);
				var zTree = $.fn.zTree.getZTreeObj("treeDemo");
				zTree.expandAll(true);
				showTreeMenu();
			}
		});
	}
	
	function showTreeMenu() {
		var cityObj = $("#schemaName");
		var cityOffset = $("#schemaName").offset();
		$("#menuContent").css({
			left : cityOffset.left + "px",
			top : cityOffset.top + cityObj.outerHeight() + "px"
		}).slideDown("fast");

		$("body").bind("mousedown", onBodyDown);
	}
	
	function hideTreeMenu() {
		$("#menuContent").fadeOut("fast");
		$("body").unbind("mousedown", onBodyDown);
	}
	
	function onBodyDown(event) {
		if (!(event.target.id == "menuBtn" || event.target.id == "menuContent" || $(
				event.target).parents("#menuContent").length > 0)) {
			hideTreeMenu();
		}
	}
	
	function beforeClick(treeId, treeNode) {
		var check = (treeNode && treeNode.isParent);
		var type = treeNode.type;
		var ktrname = type.indexOf(".ktr") == -1 ? false : true;
		var kjbname = type.indexOf(".kjb") == -1 ? false : true;
		if(type!=''){
		  return true;
		}else{
		   var cityObj = $("#schemaName");
			cityObj.attr("value", "");
			  layer.open({
    	               content: '只能选择方案',
    	               scrollbar: false
		               });
			return false;
		}
	}
	
	function onClick(e, treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("treeDemo"), nodes = zTree.getSelectedNodes(), v = "";
		var vid = "";
		var vtype="";
		for ( var i = 0, l = nodes.length; i < l; i++) {
			v += nodes[i].name + ",";
			vid += nodes[i].id + ",";
			vtype += nodes[i].type +",";
		}
		if (v.length > 0){//name
			v = v.substring(0, v.length - 1);
			$("#schemaName").val(v);
		}
		if (vid.length > 0){//id
			vid = vid.substring(0, vid.length - 1);
			$("#schemaId").val(vid);
		}
		if(vtype.length>0){//type
		  	vtype = vtype.substring(0, vtype.length - 1);
		  	$("#schemaType").val(vtype);
		}
		
	}

	function getParameterInfo() {
		//得到方案的id、方案的名称来查询此方案对应的参数信息
		var name = $("#schemaName").val();
		var id = $("#schemaId").val();
		var type=$("#schemaType").val();
		var old_id = $("#old_id").val();//记录点击创建之后的方案id
		if (name == "") {
		    layer.open({
	           content: '请先选择方案信息!',
	           scrollbar: false
	        });
		} else {
			var temp = layer.open({
				type : 2,
				title : '参数设置',
				maxmin : true,
				shadeClose : false, //点击遮罩关闭层
				area : [ '500px', '400px' ],
				content : 'cssz.jsp?id=' + id + '&type=' + type + '&old_id=' + old_id
			});
		}
	}
	
	function initNodeGroup(){
		$.ajax({
			async : false,
			url : dfsurl,
			data : {
				request : 'GETNODEGROUP',
				service : 'DataFusionService',
				version : '1.0.0',
				format : 'json'
			},
			success : function(group) {
				setGroup(group.list);
			},
			dataType : "json"
		});
	}
	
	function setGroup(group){
		for(var i = 0;i<group.length;i++){
			var html = "<option value="+group[i].nodeGroupId+">"+group[i].name+"</option>";
			$("#nodeGroup").append(html);
		}
	}
	
	
		
function changeCycle(){
	var cycle = document.getElementById("cycle").value;
	var cyclemode_td = document.getElementById("cyclemode_td");
	var enddate_td = document.getElementById("enddate_td");
	if(cycle == '1'){//run once
		cyclemode_td.style.display = 'none';
		enddate_td.style.display = 'none';
	}else {//cycle run 
		cyclemode_td.style.display = '';
		enddate_td.style.display = '';
		var cyclemode_span = document.getElementById('cyclemode_span');
		if(cycle == '2'){//second
			cyclemode_span.innerHTML = '每<input type="text" id="cyclenum" name="cyclenum"  class="task-bd3" style="float:none;display:inline-block;width:50px;">秒执行一次';
		}else if(cycle == '3'){//minute
			cyclemode_span.innerHTML = '每<input type="text" id="cyclenum" name="cyclenum"  class="task-bd3" style="float:none;display:inline-block;width:50px;">分执行一次';
		}else if(cycle == '4'){//hour
			cyclemode_span.innerHTML = '每<input type="text" id="cyclenum" name="cyclenum"  class="task-bd3" style="float:none;display:inline-block;width:50px;">小时执行一次';
		}else if(cycle == '5'){//day
			cyclemode_span.innerHTML = '每<input type="text" id="cyclenum" name="cyclenum"  class="task-bd3" style="float:none;display:inline-block;width:50px;">天执行一次';
		}
	}
}


function initCycle(cycle){
	if(cycle == '1'){//run once
		cyclemode_td.style.display = 'none';
		enddate_td.style.display = 'none';
	}else {//cycle run 
		cyclemode_td.style.display = '';
		enddate_td.style.display = '';
		var cyclemode_span = document.getElementById('cyclemode_span');
		if(cycle == '2'){//second
			cyclemode_span.innerHTML = '每<input type="text" id="cyclenum" name="cyclenum"  class="task-bd3" style="float:none;display:inline-block;width:50px;">秒执行一次';
		}else if(cycle == '3'){//minute
			cyclemode_span.innerHTML = '每<input type="text" id="cyclenum" name="cyclenum"  class="task-bd3" style="float:none;display:inline-block;width:50px;">分执行一次';
		}else if(cycle == '4'){//hour
			cyclemode_span.innerHTML = '每<input type="text" id="cyclenum" name="cyclenum"  class="task-bd3" style="float:none;display:inline-block;width:50px;">小时执行一次';
		}else if(cycle == '5'){//day
			cyclemode_span.innerHTML = '每<input type="text" id="cyclenum" name="cyclenum"  class="task-bd3" style="float:none;display:inline-block;width:50px;">天执行一次';
		}
	}
}

function enableEnddate(value){
	var enddate = document.getElementById("enddate");
	if(value == '0'){
		enddate.disabled = 'disabled';
		enddate.value = '';
	}else if(value == '1'){
		enddate.disabled = '';
	}
}

function getSmtpInfo(){
	var smtpBean ;
	$.ajax({
		async : false,
		url : dfsurl,
		dataType : "json",
		data : {
			request : "GETSMTPINFO",
			service : "DataFusionService",
			version : "1.0.0",
			format : "json",
			requestMethod : "get"
		},
		success : function(data) {
			smtpBean = data;
		}
	});
	return smtpBean;
}

function createTask(){
	var smtpInfo = getSmtpInfo();//获取smtp配置信息
	var operator='addTask';
	//修改
	if(id!=''){
	   operator='UPDATETASK';
	}else if(id=='undifined' || id==''){
	   operator='addTask';
	}
	if ($("#taskForm").valid()) {
		// 任务名称
		var taskName = $('#taskName').val();
		// 任务描述
		var description = $('#description').val();
		// 方案ID
		var schemaId = $('#schemaId').val();
		// 方案名称
		var schemaName = $('#schemaName').val();
		var schemaType = $('#schemaType').val();
		// 节点组
		var nodeGroup = $('#nodeGroup').val();
		var subject = "{0}您好，这是任务运行情况邮件提醒！";
		//所在节点组为{3}
		var content="尊敬的{0}您好！<br>以下是任务情况。<br>1：任务名称为:{1}<br>2：任务开始时间为:{2}<br>执行日志：<br>{3}";
		//关注人和关注方式
		var jsonObject ="{\"host\":\""+smtpInfo.smtpHost+"\",\"port\":\""+smtpInfo.smtpPort+"\",\"emailAccount\":\""+smtpInfo.mailAccount+"\",\"username\":\""+smtpInfo.usename+"\",\"password\":\""+smtpInfo.password+"\",\"subject\":\""+subject+"\",\"mailContent\":\""+content+"\",\"caredInfo\":";
		var caredArray = "[";
		var trRows = $("#careduserTable tr").length;
		if(trRows>1){
		    for(var i = 1;i<trRows;i++){
			var tempjson = "{";
			for(var j = 0;j<=2;j++){
				var tddom = $("#careduserTable").find("tr:eq("+i+")").find("td:eq("+j+")").text();
				if(j==0){
					var email = $("#careduserTable").find("tr:eq("+i+")").find("td:eq("+j+")").find("input[type='hidden']:eq(0)").val();
					tempjson+="\"email\":\""+email+"\","+"\"tousername\":\""+tddom.replace(/^\s+|\s+$/g, '')+"\",";
				}else if(j==1){
					var type = tddom.replace(/^\s+|\s+$/g, '');
					var typeArray = type.split("、");
					var typeJson = "";
					for(var m = 0;m<typeArray.length;m++){
						if(typeArray[m] == "执行成功"){
							typeJson += "Finished,";
						}
						if(typeArray[m] == "执行失败"){
							typeJson += "Error,";
						}
					}
					typeJson = typeJson.substring(0,typeJson.length-1);
					tempjson+="\"careType\":\""+typeJson+"\",";
				}else if(j==2){
					var method = tddom.replace(/^\s+|\s+$/g, '');
					var methodArray = method.split("、");
					var jsonNode = "";
					for(var n = 0;n<methodArray.length;n++){
						if(methodArray[n] == "邮件"){
							jsonNode += "email,";
						}
						if(methodArray[n] == "短信"){
							jsonNode += "message,";
						}
					}
					jsonNode = jsonNode.substring(0,jsonNode.length-1);
					tempjson+="\"careMethod\":\""+jsonNode+"\"";
				}
			}
			tempjson+="}";
			caredArray+=tempjson+",";
		}
		caredArray = caredArray.substring(0,caredArray.length-1);
		}
		
		caredArray+="]";
		jsonObject +=caredArray;
		jsonObject +="}";
		// 开始时间
		var starttime = $('#starttime').val();
		// 周期
		var cycle = $('#cycle').val();
		// cyclenum
		var cyclenum = $('#cyclenum').val();
		// 参数
		var parentIframe = $('#parentIframe').val();
		var cronstring = '';
		//if (cycle == '1') {
		//	cronstring = '';
	//	} else if (cycle == '2') {// second
		//	cronstring = '0/' + cyclenum + ' * * * * ?';
	//} else if (cycle == '3') {// minute
	//		cronstring = '0 0/'+ cyclenum +' * * * ?';
	//	} else if (cycle == '4') {// hour
	//		cronstring = '0 0 0/' + cyclenum + ' * * ?';
	//	} else if (cycle == '5') {// day
	//		cronstring = '* * ' + cyclenumhour + ' */' + cyclenum + ' * ?';
	//	}

		
		// 结束时间
		var endtime = $('#enddate').val();
		$.ajax({
			type : "post",
			url : dfspost,
			data : {
				request : operator,
				service : 'DataFusionService',
				version : '1.0.0',
				format : 'json',
				NAME : taskName,
				CORN : cronstring,
				STARTTIME : starttime,
				ENDTIME : endtime,
				PARAMETER_VALUE : parentIframe,
				SNAME : schemaName,
				ID : schemaId,
				NODEGROUPID : nodeGroup,
				CYCLE : cycle,
				CYCLENUM : cyclenum,
				DESCRIPTION : description,
				SCHEMATYPE : schemaType,
				CAREDUSER : jsonObject,
				VALIDATION:false
			},
			beforeSend:loading,
			success : function(group) {
				layer.close(index);
				if (group.status == true) {
					layer.open({
						content : '操作成功',
						scrollbar : false,
						yes : function(yesindex) {
							layer.close(yesindex);
							window.location.href = 'taskManager.jsp';
						}
					});
				} else {
					var message = "保存失败！";
					if(group.error != null){
						message = group.error.details[0];
					}
					layer.open({
						content : message,
						scrollbar : false,
						yes : function(yesindex) {
							layer.close(yesindex);
							//操作失败保持在修改页面
						}
					});
				}
			},
			dataType : "json"
		});
	}

}
	
	function   renovates(){ 
		window.location.href = 'taskManager.jsp';
	} 
	
	function addCare(){
	//查找smtp是否已配置
	 		$.ajax({
				url : dfsurl,
				dataType : "json",
				data : {
					request : "GETSMTPINFO",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					requestMethod : "get"
				},
				success : function(data) {
					if(data.smtpHost!='' && data.smtpHost!='null' && data.smtpHost!=null){
					     layer.open({
				        	type: 2,
							title : '关注信息',
							maxmin : false,
							shadeClose : false, //点击遮罩关闭层
						    area: ['500px', '300px'],
						   content: 'cared.jsp'
				    	});
					}else{
					    layer.open({
							content : '请先在系统参数设置模块设置smtp信息！',
							scrollbar : false
						});
					}
				}
			});
			
		
	}
	
	//修改关注人
	function alterCaredUser(trId){
		var name = "";
		var email = "";
		var type = "";
		var method = "";
		
		$("tr#"+trId).each(function(i){
			$(this).children().each(function(j){
				if(j == 0){
					name = $(this).text();
					email = $(this).find("input:hidden").val();
				}
				if(j == 1){
					type = $(this).text();
				}
				if(j== 2){
					method = $(this).text();
				}
			});
		});
		
		var temp = layer.open({
			type: 2,
			title : '关注信息',
			shadeClose : false, //点击遮罩关闭层
		    area: ['500px', '300px'],
		    //fix: false, //不固定
		    maxmin: false,
		    content: 'cared.jsp?name='+name+'&email='+ email+'&type='+type+'&method='+method+'&trId='+trId
		});
	}

	//删除关注人
	function deleteCareduser(trId) {
		$("tr#" + trId).remove();
	}
	
