<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%
String basePath = request.getContextPath();
%>

<%@ include file="../common/dfs_url.jsp" %>
<%@ include file="../common/top.jsp" %>
<%@ include file="../common/left.jsp" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>首页</title>
		<script type="text/javascript" src="<%=path %>/js/flot_js/highcharts.js"></script>
		<script src="<%=path %>/js/layer/layer.js"></script>
		<script type="text/javascript" src="<%=path %>/js/progress/tj_Canvas.js"></script>
		<script type="text/javascript" src="<%=path %>/js/progress/round_big.js"></script>
			<script type="text/javascript" src="<%=path %>/js/flot_js/echarts-all.js"></script>
		<%-- 	
		<script type='text/javascript' src='${dfs}/dwr/engine.js'></script>
		<script type='text/javascript' src='${dfs}/dwr/util.js'></script>
		<script type='text/javascript' src='${dfs}/dwr/interface/SendPush.js'></script> 
		--%>
		<script type="text/javascript">
		    var dfs_url = "${dfs_url}";
		    var dfs="${dfs}";
		   
		    $(document).ready(function(){
		        $("#firstpane .menu_body:eq(0)").show();
		        $("#firstpane a.menu_head").click(function(){
		            $(this).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body").slideUp("slow");
		            $(this).siblings().removeClass("current");
		        });
		        $.ajaxSetup ({ cache: false }); 
		        initScanNodeView();
		        initRunningTask();
		        getNodeRroup(false);
		        initErrorTask();
		    });
			     
			//获取节点组
			function getNodeRroup(isQuery){
				if(isQuery == true){
					//给出等待提示
					$("#waiting_node").show();
				}
				$.ajax({
					url : dfs_url,
					dataType : "json",
					data : {
						request : "GETNODECONTAINCPU",
						service : "DataFusionService",
						version : "1.0.0",
						format : "json",
						isquery : isQuery
					},
					error : function() {//请求失败处理函数  
						layer.open({
					    	content: '刷新失败！',
					    	scrollbar: false
						});
						$("#waiting_node").hide();
					},
					success : function(data) {
						initNodeView(parseEchart(data));//初始化节点视图
						$("#waiting_node").hide();
						
					}
				});
			}
			
			function parseEchart(data){
				var returnObj={
					lenged:[],
					data:[]
				};
				returnObj.lenged=data.groupName;
				if(returnObj.lenged&&returnObj.lenged.length){													
					 for (var i = 0; i < returnObj.lenged.length; i++) {
		                    var node = data.nodelist[i] || [];		                  
		                    if (node&&node.length) {		            
		                        returnObj.data.push(node[0].y || 0);
		                    } else {	                      
		                        returnObj.data.push(0);
		                    }
		                }
				}
				return returnObj;
			}
			
			/* function generateArray(array){
				if(array.length<=0){
					return array;
				}
				var maxLength = 0;
				var index = 0;
				for(var i = 0;i<array.length;i++){//计算最大数组的长度
					var tempLength = array[i].length;
					if(tempLength > maxLength){
						maxLength = tempLength;
						index = i;
					}
				}
				//将所有数组用0补齐
				for(var m = 0;m<array.length;m++){
					if(m!=index){
						var cIndex = array[m].length;
						for(var n = cIndex;n<maxLength;n++){
							array[m][n] = -1;
						}
					}
				}
				
				//行列转换
				var rlength = array[0].length;
				var resultArray = new Array();
				for(var e=0;e<rlength;e++){
					resultArray[e] = new Array();
				}
				for (var i = 0; i < array.length; i++) {// 调整数组行列数据  
			        for (var j = 0; j < array[i].length; j++) {  
			            resultArray[j][i] = array[i][j];  
			        }
			    }
			    //将数据生成为charts能够识别的数据
			    var chartArray = new Array();
			    for(var l = 0;l<resultArray.length;l++){
			    	var oneJson = "{data:";
			    	var temp = JSON.stringify(eval(resultArray[l]));
			    	oneJson += temp+"}";
			    	chartArray[l] = eval('(' + oneJson + ')');
			    }
			    return chartArray;
			} */
			
			function initNodeView(obj) {
				/* var pwidth = false;
				if(groupArray.length<5){
					pwidth=35;
				}
				$("#nodeView").highcharts({
					chart : {
						type : 'column'
					},
					credits : {
						enabled : false
					//不显示highCharts版权信息
					},
					title : {
						text : '节点内存占用百分比'
					},
					plotOptions: {
			            series: {
			                pointWidth: pwidth //柱子的宽度值 单位为px
			            }
			        },
					tooltip : {
						crosshairs : true,
						shared : true,
						formatter : function(){
							var s = '<b>' + this.x + '</b>';
							$.each(this.points, function() {
								if(this.y>=0){
									s += '<br/>' + this.key + ': ' + this.y + '%';
								}
							});
							return s;
						}
					},
					xAxis : {
						categories : groupArray,
						title : {
							text : '节点组名称'
						}
					},
					yAxis : {
						min : 0,
						max : 100,
						title : {
							text : '内存占用百分比 (%)'
						}
					},
					legend : {
						enabled : false
					},
					series : nodeArray
				}); */
				
				
				var main2option = {
						calculable : false,
						 legend: {
						 		show : false,
	                            data:['节点资源占用情况']
	                        },
						xAxis : [ {
							type : 'category',
							data : obj.lenged
						} ],
						yAxis : [ {
							type : 'value',
//							axisLabel:{
//				                formatter:'{value}个'
//				            },
							name:'（个）',
							nameLocation:'end',
							nameTextStyle:{
								color : 'black',
								fontWeight : 'bold',
								fontSize: 15,
							},
							nameGap:100,
						} ],
						series : [
						{
							name : '节点资源占用情况',
							type : 'bar',
							data : obj.data,
							 barWidth: 20,
						     itemStyle : { normal: {label : {show: true, position: 'inside'}}},

						} ]
					};

					var lineChart = echarts.init(document.getElementById('nodeView'));
					lineChart.setOption(main2option);
			}

			//体检
			function initScanNodeView() {
				$.ajax({
					url : dfs_url,
					data : {
						request : "indexExamination",
						service : "DataFusionService",
						version : "1.0.0",
						format : "json",
						type : "PhysicalExamination"
					},
					error : function() {//请求失败处理函数  
						var d = dialog({
							title : '提示',
							content : '体检出错',
							okValue : '确定'
						});
						d.width(320).show();
					},
					success : function(data) {
						var error_node = data.ErrorNode.length;
						var error_task = data.ErrorExecuteTask;
						var all_task = data.AllExecuteTask;
						var cdate = data.CDate;//记录体检实时的时间
						var url="<%=path %>/modular/log/taskExecuteLog.jsp?state=Error&cdate="+cdate;						
						$("#errorTaskLog").attr("href","javascript:;");
            			$("#errorTaskLog").attr("onclick","location.href='"+url+"'");
            	
						var percent = 100;
						var n = 100;
						var err=parseInt(error_task);
						var total=parseInt(all_task);
						if (all_task > 0) {
							percent = Math.ceil((1-err/total)*100);
						}
						var main1option = {
								tooltip : {
									formatter : "{b} : {c}%"
								},

								series : [ {
									name : '业务指标',
									type : 'gauge',
									splitNumber : 10, // 分割段数，默认为5
									axisLine : { // 坐标轴线
										lineStyle : { // 属性lineStyle控制线条样式
											color : [ [ 0.2, '#ff4500' ], [ 0.8, '#48b' ],
													[ 1, '#228b22' ] ],
											width : 8
										}
									},
									axisTick : { // 坐标轴小标记
										splitNumber : 10, // 每份split细分多少段
										length : 12, // 属性length控制线长
										lineStyle : { // 属性lineStyle控制线条样式
											color : 'auto'
										}
									},
									axisLabel : { // 坐标轴文本标签，详见axis.axisLabel
										textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
											color : 'auto'
										}
									},
									splitLine : { // 分隔线
										show : true, // 默认显示，属性show控制显示与否
										length : 30, // 属性length控制线长
										lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
											color : 'auto'
										}
									},
									pointer : {
										width : 5
									},
									title : {
										show : true,
										offsetCenter : [ 0, '-40%' ], // x, y，单位px
										textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
											fontWeight : 'bolder'
										}
									},
									detail : {
										formatter : '{value}%',
										textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
											color : 'auto',
											fontWeight : 'bolder'
										}
									},
									data : [ {
										value : percent,
										name : '健康度'
									} ]
								} ]
							};
							var myChart = echarts.init(document.getElementById('percentLoad'));
							myChart.setOption(main1option);
					/* 	 var progress = new CircularProgress({
							text : {
								font : 'bold 30px arial',
								shadowBlur : 0,
								fillStyle : 'blue'
							}
						}); 
		
						document.getElementById("percentLoad").appendChild(progress.el);
						
						var canvasNum = $("#percentLoad").children().length;
						if(canvasNum > 1){
							$("#percentLoad canvas:first").remove();
						}
						var id = setInterval(function() {
							if (n == percent) {
								$("#error_task").html(error_task);
								$("#error_node").html(error_node);
								clearInterval(id);
							}
							progress.update(n--);
							$("#tj_Button").css({
							  "background-color":progress.tempColro
						 	});
						}, 60);
						
						paintCircleRound(percent);  */
					},
					dataType : "json"
				});
			}
			
			//绘制旋转图层
		  function paintCircleRound(percent){
				var rbig = new RoundBig(100);
				document.getElementById("myCanvas").appendChild(rbig.canvas);
				
				var canvasNum = $("#myCanvas").children().length;
				if(canvasNum > 1){
					$("#myCanvas canvas:first").remove();
				}
				if(percent!=100){
					var n = 0;
						var timer = setInterval(function() {
							if (n == (100-percent)){
								clearInterval(timer);
							}
							rbig.update(n++);
						}, 60);
				}else{
	    		    var i = 50;
	    		    var ip = setInterval(function(){
	    		    	if(percent == i){
	    		    		clearInterval(ip);
	    		    	}
	    		    	rbig.update(i++);  
	    		    },60);
				 }
		  }
			
		//正在运行的任务
		function initRunningTask(){
			$("#task_Running tr:eq(0)").nextAll().remove();
			$('#waiting_task').show();
			$.ajax({
				url : dfs_url,
				data : {
					request : "gettaskexecuteinfo",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					STARTPOSITION : 0,
					PAGESIZE : 5,
					ISQUERY : true,
					STATUS : "Running"//Running
				},
				error : function() {//请求失败处理函数 
				    $('#waiting_task').hide(); 
					var d = dialog({
						title : '提示',
						content : '获取正在运行任务失败',
						okValue : '确定'
					});
					d.width(320).show();
				},
				success : function(task) {
					$('#waiting_task').hide();
					var data = {
						rTask : task.list
					};
					template.helper("setRunPercent", function(nid,cId,sname,stype) {
						return getRunPercent(nid,cId,sname,stype);
					});
					
					template.helper("setForecastTime", function(stime,ctime) {
						return cacluteTime(stime,ctime);
					});
					var html = template("run_task", data);
					$("#task_Running tr:eq(0)").nextAll().remove();
					$("#task_Running tr:eq(0)").after(html);
				},
				dataType : "json"
			});
		}
			
		function getRunPercent(nodeid,cId,sname,stype){
			$.ajax({
				url : dfs_url,
				data : {
					request : "SETP_PERCENT",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					node_id : nodeid,
					cartId : cId,
					sname : sname,
					s_state : stype
				},
				error : function() {//请求失败处理函数  
					var d = dialog({
						title : '提示',
						content : '获取异常任务失败',
						okValue : '确定'
					});
					d.width(320).show();
				},
				success : function(data) {
					var result = data;
					if(result == 100){//当运行到最后一步的时候，不能直接返回100，设置成98
						$("#"+cId).html(98+"%");
					}else{
						$("#"+cId).html(result+"%");
					}
				},
				dataType : "json"
			});
		}
			
		function cacluteTime(s,c){
		    var lDate = Date.parse(s.replace(/-/g,"/"))*1;  
			if(c==null || c==0){
			  	return null;
			}
			var ctime = lDate+c;
			var temp = new Date();
			temp.setTime(ctime);
			return temp.format("yyyy-MM-dd HH:mm:ss");
		}

		//异常停止的任务
		function initErrorTask() {
			$("#error_tasklist tr:eq(0)").nextAll().remove();
			$("#waiting_error_task").show();
			$.ajax({
				url : dfs_url,
				data : {
					request : "indexExamination",
					service : "DataFusionService",
					version : "1.0.0",
					format : "json",
					STARTPOSITION : 0,
					PAGESIZE : 5,
					ISQUERY : true,
					STATUS : "Error",//Error
					TYPE:"executeExceptionTask"
				},
				error : function() {//请求失败处理函数
					$("#waiting_error_task").hide();
					var d = dialog({
						title : '提示',
						content : '获取异常任务失败',
						okValue : '确定'
					});
					d.width(320).show();
				},
				success : function(task) {
				    $("#waiting_error_task").hide();
					var eNodelist = task.ErrorExecuteNode;//获取节点段开
					var data = {
						eTask : task.ErrorTask.list
					};

					template.helper("setError", function(nodeId) {
					  if(eNodelist!=null && eNodelist.length>0){
						for(var i=0;i<eNodelist.length;i++){
							var node = eNodelist[i];
							if(null != node && node.nodeId==nodeId){
								return "节点断开";
							}
						}
					  }
						return "执行出错";
					});
					var html = template("task_error", data);
					$("#error_tasklist tr:eq(0)").nextAll().remove();
					$("#error_tasklist tr:eq(0)").after(html);
				},
				dataType : "json"
			});
		}
			
		function more(type){
			if(type=="run"){
				location.href="<%=path %>/modular/task/taskExecuteInfo.jsp?state=Running";
				return;
			}
			
			if(type=="error"){
				location.href="<%=path %>/modular/task/taskExecuteInfo.jsp?state=Error";
				return;
			}
		}
		function del(){
		 	$("#watch li").remove();
		}
			
		 //type(1:节点异常，2:节点繁忙,3:任务异常)
		function addAlarm(content){
		 $("#watch").find("li").remove();
		 var errnodenum=0;
		    if(content!=""){
		        for(var i=content.length-1;i>=0;i--){
		            var testdata=dwr.util.escapeHtml(content[i]);
			        var message=testdata.split(";")[0];
			        var type=testdata.split(";")[1];
			        if(type=='节点异常'){
			        	errnodenum=errnodenum+1;
						$("#watch").append("<li id='节点"+message+"'><a href='<%=path %>/modular/node/nodeManage.jsp'>"+message+"</a></li>");
			        }else{
			           var id=type.split("~")[0];
			           var endtime=type.split("~")[1];
			           $("#watch").append("<li id=任务执行异常'"+message+"'><a href='<%=path %>/modular/log/taskExecuteLog.jsp?taskexecuteid="+id+"'>"+endtime+" "+message+"</a></li>");
			        }
		        }
                  $("#error_node").html(errnodenum);
		    }
		}
		function init(){
		     SendPush.findMessageList();
		}	
			
		</script>
		
		<script id="run_task" type="text/html">
			{{each rTask}}
				<tr>
					<td title="{{rTask[$index].taskName}}"><div<%-- style="width:100px;height:30px;overflow:hidden;text-overflow:ellipsis;white-space:normal;"--%>>{{rTask[$index].taskName}}</div></td>
					<td title="{{rTask[$index].node_Group}}"><div <%--style="width:150px;height:30px;overflow:hidden;text-overflow:ellipsis;white-space:normal;"--%>>{{rTask[$index].node_Group}}</div></td>
					<td id="{{rTask[$index].id}}"><div sytle="width:50px;">{{setRunPercent(rTask[$index].node_id,rTask[$index].id,rTask[$index].schemaName,rTask[$index].schemaType)}}</div></td>
					<td>{{setForecastTime(rTask[$index].starttime,rTask[$index].expectFinishTime)}}</td>
				</tr>
			{{/each}}
		</script>
		
		<script id="task_error" type="text/html">
			{{each eTask}}
				<tr>
					<td title="{{eTask[$index].taskName}}"><div<%-- style="width:100px;height:30px;overflow:hidden;text-overflow:ellipsis;white-space:normal;"--%>>{{eTask[$index].taskName}}</div></td>
					<td title="{{eTask[$index].node_Group}}"><div <%--style="width:150px;height:30px;overflow:hidden;text-overflow:ellipsis;white-space:normal;"--%>>{{eTask[$index].node_Group}}</div></td>
                    <td>{{eTask[$index].start_time}}</td>
					<td>{{eTask[$index].end_time}}</td>
					<td><div sytle="width:80px;">{{setError(eTask[$index].node_id)}}</td>
				</tr>
			{{/each}}
		</script>
	<!-- <td>{{setErrorStep(eTask[$index].node_id,eTask[$index].id,eTask[$index].schemaName,eTask[$index].schemaType)}}</td> -->
	  
	  
	</head>
	
	<!-- <body onload="dwr.engine.setActiveReverseAjax(true);SendPush.send();init();"> -->
	
	<body style="overflow-x: hidden;">

		<div class="clearfloat content">
			<div class="content-L" style="width:100%;">
				<!--健康度-->
			<%-- 	<div class="health-pic">
					<div id="health_bgi" class="health-pic">
						<h2>健康度</h2>
						<div id="percentLoad" class="load"></div>
						<div id="myCanvas" style="position: absolute;z-index: 100;top:-22;left:-8"></div> 
						<div id="roundBJ" class="round">
						</div>
					</div>
					<div class="health-infor">
						<ul>
							<li><a href="javascript:error_node();"><img src="<%=path %>/images/ico/node-2.png"><em id="error_node">0</em>个节点停止</a>
							</li>
							<li><a id="errorTaskLog" href=""><img src="<%=path %>/images/ico/task-2.png"><em id="error_task">0</em>个任务执行异常</a>
							</li>
						</ul>
						<a id="tj_Button" href="javascript:initScanNodeView();" class="button-tj">体检</a>
					</div>
				</div> --%>
				
				<div class="health">
					<div id="health_bgi" class="health-pic">
						
						<div id="percentLoad" class="load">
						</div>
						<div id="myCanvas" style="position: absolute;z-index: 100;top:-22;left:-8"></div> 
						<div id="roundBJ" class="round">
						</div>
					</div>
					<div class="health-infor">
						<ul>
							<li><a href="javascript:error_node();"><img src="<%=path %>/images/ico/node-2.png"><em id="error_node">0</em>个节点停止</a>
							</li>
							<li><a id="errorTaskLog" href=""><img src="<%=path %>/images/ico/task-2.png"><em id="error_task">0</em>个任务执行异常</a>
							</li>
						</ul>
						<a id="tj_Button" href="javascript:initScanNodeView();" class="button-tj">体检</a>
					</div>
				</div> 
				
				<!--节点资源占用情况-->
				<div class="node" >
					<div class="node-title">
						<h2>节点资源占用情况</h2>
						<a href="javascript:getNodeRroup(true);" title="刷新"><img src="<%=path %>/images/ico/refresh.png">
						</a>
					</div>
					<div style="position: relative;">
					<div id="nodeView" style="min-width: 310px; width:95%;height: 320px; margin: 0 auto"></div>
					<div id="waiting_node" class="loading-pic">
						<img src="<%=path %>/images/pic/loading_node.gif" style="display: block; margin: 0px auto; padding-top: 115px;">
					</div>	
					</div>
				</div>
				<script>
				var totalwidth=$(window).width()-$('.health-pic').outerWidth()-88;
			  		$('.node').width(totalwidth);
				</script>
				<!--正在运行的任务-->
				<div class="task">
					<div class="task-title">
						<h2>正在执行的任务</h2>
						<%-- <a href="javascript:more('run');" title="更多"><img src="<%=path %>/images/ico/more.png"></a> --%>
						<a href="javascript:initRunningTask();" title="刷新"><img src="<%=path %>/images/ico/refresh.png">
						</a>
					</div>
					<div style="position: relative;">
						<table id="task_Running" cellspacing="0">
							<tr class="type">
								<td>任务名称</td>
								<td>所在节点</td>
								<td>运行进度</td>
								<td>预计完成时间</td>
							</tr>
						</table>
						<div class="loading-pic-2" id="waiting_task">
							<img src="<%=path %>/images/pic/loading_node.gif" >
						</div>
					</div>
				</div>
				<!--异常停止的任务-->
				<div class="task">
					<div class="task-title">
						<h2>异常停止的任务</h2>
						<%-- <a href="javascript:more('error');" title="更多"><img src="<%=path %>/images/ico/more.png"> --%>
						</a> <a href="javascript:initErrorTask();" title="刷新"><img src="<%=path %>/images/ico/refresh.png">
						</a>
					</div>
					<div style="position: relative;">
						<table id="error_tasklist" cellspacing="0">
							<tr class="type">
								<td>任务名称</td>
								<td>所在节点</td>
								<td>开始时间</td>
								<td>结束时间</td>
								<td>异常</td><!-- 执行出错，引擎中断 -->
								<!-- <td>异常结束步骤</td> -->
							</tr>
						</table>
						<div class="loading-pic-2" id="waiting_error_task">
							<img src="<%=path %>/images/pic/loading_node.gif" >
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--预警-->
		<div id="warning_div_dwms" class="warning_div clearfloat">
			<div id="warning-list_dwms" class="warning-list">
				<div class="warning-title">
					<span>预警</span> <!-- <a href="javascript:del()" title="删除"><img src="<%=path %>/images/pic/delete.png">
					</a> -->
				</div>
				<ul id="watch_dwms">
				</ul>
			</div>
			<div class="warning-ico">
				<a href="javascript:show_hide();"><img src="<%=path %>/images/pic/warning.png"></a>
			</div>
		</div>
		<iframe id="warningIframe" name="warningIframe" src="${dfs_index}" width="0px" heigth="0px" style="position: absolute;top: -200px;left: -200px;"></iframe>	
	</body>
	
	<script type="text/javascript">
		function show_hide(){
			$("#warning-list_dwms").toggle();
		}
	</script>
	
	
    <script type="text/javascript">
	    function setFloat() {
	        var g_h = $(top.document).scrollTop();
	        //var k_h = $(window.top.window).height();
	        var k_h=window.top.window.innerHeight;
	        var z_h = $(top.document).height();
	
	        var bottom = z_h - k_h - g_h;
	        var win = document.getElementById("warning_div_dwms");
	        win.style.bottom = bottom;
	    };
	    setFloat();
	    window.top.window.onscroll = function () {
	        setFloat();
	    }
    
/*     	setInterval(function(){
    		var canSeeH= window.top.document.body.clientHeight;
    		var totalH=window.top.document.body.offsetHeight;
    		$('#warning_div_dwms').css("bottom",totalH-canSeeH);
    		console.info(totalH-canSeeH);
    	},500); */
    	
/*     	$(window.top).scroll(function(event){
    		var canSeeH= top.document.body.clientHeight;
    		var totalH=top.document.body.offsetHeight;
    		$('#warning_div_dwms').css("bottom",totalH-canSeeH);
    		console.info(canSeeH+','+totalH);
    	}); */
    
        window.addEventListener('message',function(e){
            var data=$(e.data);
            
            $('a',data).each(function(i,item){
            	var url="<%=path%>"+"/modular/node/nodeManage.jsp"
            	$(item).attr("href","javascript:;");
            	$(item).attr("onclick","location.href='"+url+"'");
            })
            
            $('#watch_dwms').html(data);
            
        },false);1
        
        function error_node(){
        	location.href="<%=path %>/modular/node/nodeManage.jsp?state=3";
        	return;
        }
        function error_task(){
        }
    </script>

</html>
