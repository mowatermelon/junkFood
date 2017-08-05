$(function() {
	initRightTab("sjhj", 4);
	var url = location.href;
	var obj = _util.parseUrl(url);
	var xzqdm = "";
	if (obj) {
		xzqdm = obj.xzqdm;
	}
	var C_index = {
		init : function() {
			this._initCityChoose();
			this._initDatePicker();
		},
		_initDatePicker : function() {
			$("#startDate").datetimepicker({
				language : 'zh-CN',
				weekStart : 1,
				todayBtn : 1,
				autoclose : 1,
				todayHighlight : 1,
				startView : 2,
				minView : 2,
				forceParse : 0,
				format : 'yyyy-mm-dd'
			});
			$("#endDate").datetimepicker({
				language : 'zh-CN',
				weekStart : 1,
				todayBtn : 1,
				autoclose : 1,
				todayHighlight : 1,
				startView : 2,
				minView : 2,
				forceParse : 0,
				format : 'yyyy-mm-dd'
			});
		},
		_initCityChoose : function() {
			if (C_index.paramObj && C_index.paramObj.cityCode) {
				for (var i = 0; i < data.province.length; i++) {
					if (data.province[i].id == C_index.paramObj.cityCode) {
						console.info(data.province[i]);
						$('#cityChoice').val(data.province[i].name);
						$('#cityCode').val(data.province[i].id);
						break;
					}
				}
			}
			var cityPicker = new IIInsomniaCityPicker({
				defalutCityCode:xzqdm?xzqdm:"",
				target : '#cityChoice',
				valType : 'k-v',
				callback : function(city_id) {
					$('#cityCode').val(city_id);
				}
			});
			cityPicker.init();

		}
	}
	C_index.init();
	initTables(xzqdm);
})();

function initTables(xzqdm) {
	$('#resultList')
			.bootstrapTable(
					{
						url : '/SJBDC/commonController/queryPage.do', // 请求后台的URL（*）
						method : 'post', // 请求方式（*）
						striped : true, // 是否显示行间隔色
						cache : false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
						pagination : true, // 是否显示分页（*）
						height : getHeight(),
						sidePagination : "server", // 服务端请求
						sortable : false, // 是否启用排序
						sortOrder : "asc", // 排序方式
						queryParams : function(params) {
							return {
								"page.limit" : params.limit, // 页面大小
								"page.offset" : params.offset,
								"queryMap" : {
									"ywh" : $('#ywh').val(),
									"cityCode" : xzqdm ? xzqdm : $('#cityCode').val(),
									"status" : $('#status').val(),
									"startDate" : $('#startDate').val(),
									"endDate" : $('#endDate').val()
								},
								"queryId" : "JgXnSjjhQueryMapper.queryPageFKXX"
							}
						},// 传递参数（*）
						pageNumber : 1, // 初始化加载第一页，默认第一页
						pageSize : 20, // 每页的记录行数（*）
						pageList : [ 20, 40, 60, 100 ], // 可供选择的每页的行数（*）
						search : false, // 是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
						strictSearch : false,
						showColumns : false, // 是否显示所有的列
						showRefresh : false, // 是否显示刷新按钮
						minimumCountColumns : 2, // 最少允许的列数
						clickToSelect : true, // 是否启用点击选中行
						uniqueId : "ID", // 每一行的唯一标识，一般为主键列
						showToggle : false, // 是否显示详细视图和列表视图的切换按钮
						cardView : false, // 是否显示详细视图
						detailView : false, // 是否显示父子表
						columns : [
								{
									field : 'R',
									title : '序号',
									width : 30,
									align : 'center'
								},
								{
									field : 'QXDM',
									title : '行政区划',
									align : 'center',
									width : 150
								},
								{
									field : 'BIZMSGID',
									title : '报文ID',
									width : 100,
									align : 'center'
								},
								{
									field : 'YWH',
									title : '业务号',
									width : 100,
									align : 'center'
								},
								{
									field : 'FKLX',
									title : '反馈说明',
									width : 150,
									align : 'center',
									formatter : function(value) {
										if (value != undefined && value == '正确') {
											return '汇交成功';
										}
										return value;
									}
								},
								{
									field : 'FKSJ',
									title : '反馈时间',
									width : 150,
									align : 'center',
									formatter : function(value) {
										return _util.getDate(value).format(
												"yyyy年MM月dd HH时mm分");
									}
								},
								{
									field : 'SREP',
									title : '反馈报文',
									width : 80,
									align : 'center',
									formatter : function actionFormatter(value,
											row, index) {
										var div = "<img src='"
												+ base
												+ "view/maintenance/dfs/images/ico/read_2.png'>";
										if (value == 1) {
											div = "<a href='#' onclick=\"viewResInfo('"
													+ row.BIZMSGID
													+ "')\"><img src='"
													+ base
													+ "view/maintenance/dfs/images/ico/read_1.png' title='查看'></a>";
										}
										return div;
									}
								} /*
									 * , { field: 'GREP', title: '国家反馈报文',
									 * width: 80, align:'center',
									 * formatter:function actionFormatter(value,
									 * row, index){ var div="<img
									 * src='"+base+"view/maintenance/dfs/images/ico/read_2.png'>";
									 * if(value==1){ div="<a
									 * href='/SJBDC/comSupCtrler/queryXMLData.do?bizmsgId="+row.BIZMSGID+"&queryId=queryXMLDATA&flag=3'
									 * target='_blank' ><img
									 * src='"+base+"view/maintenance/dfs/images/ico/read_1.png'
									 * title='查看'></a>"; } return div; } }
									 */
						]
					});
}

function getHeight() {
	var height = $(window).height() - 100;
	return height - $('.box-title').height() - $('.query-box').height()
}
function viewResInfo(bizmsgId) {
	$.ajax({
				url : '/SJBDC/comSupCtrler/queryRepInfoById.do',
				dataType : "json",
				type : "post",
				data : {
					"queryId" : "JgXnSjjhQueryMapper.queryRepInfo",
					"bizmsgid" : bizmsgId
				},
				success : function(json) {
					if (json != undefined && json != '') {
						$('#BizMsgID').text(json.BizMsgID);
						$('#SuccessFlag').text(
								json.SuccessFlag == '1' ? '成功' : '失败');
						$('#ResponseCode').text(json.ResponseCode);
						$('#ResponseInfo').text(json.ResponseInfo);
						$('#QRCode').text(json.QRCode);
					}
					$('#viewModal').modal('show');
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {
					alert("网络错误，请联系管理员!");
				}
			});
}

function searchBtn(flag) {
	if (flag == 1) {
		$("input").each(function() {
			$(this).val('');
			$('#status').val('');
		});
	}
	$('#resultList').bootstrapTable('refresh',{
						'url' : '/SJBDC/commonController/queryPage.do',
						'queryParams' : function(params) {
							return {
								"page.limit" : params.limit, // 页面大小
								"page.offset" : params.offset, // 页码
								"queryMap" : {
									"ywh" : $('#ywh').val(),
									"cityCode" : $('#cityCode').val(),
									"status" : $('#status').val(),
									"startDate" : $('#startDate').val(),
									"endDate" : $('#endDate').val()
								},
								"queryId" : "JgXnSjjhQueryMapper.queryPageFKXX"
							}
						}
					})
}
