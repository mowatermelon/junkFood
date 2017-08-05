var xzqdm = "";
$(function() {
	initRightTab("zsjg", 3);
	var C_index = {
		init : function() {
			this._initCityChoose();
			this._initDatePicker();
		},
		_initDatePicker : function() {
			$("#startDate").datetimepicker({
				language : 'zh-CN',
				weekStart : 1,
				format : 'yyyy-mm-dd',
				todayBtn : 1,
				autoclose : 1,
				todayHighlight : 1,
				startView : 2,
				minView : 2,
				forceParse : 0
			});
			$("#endDate").datetimepicker({
				language : 'zh-CN',
				weekStart : 1,
				format : 'yyyy-mm-dd',
				todayBtn : 1,
				autoclose : 1,
				todayHighlight : 1,
				startView : 2,
				minView : 2,
				forceParse : 0
			});
		},
		_initCityChoose : function() {

			var cityPicker = new IIInsomniaCityPicker({
				target : '#cityChoice',
				valType : 'k-v',
				hideCityInput : '#city',
				hideProvinceInput : '#province',
				callback : function(city_id) {
					xzqdm = city_id;
				}
			});
			cityPicker.init();

		}
	}
	C_index.init();
	initTables();
});

function initTables() {
	$('#resultList')
			.bootstrapTable(
					{
						url : '/SJBDC/commonController/queryPage.do', // 请求后台的URL（*）
						method : 'post', // 请求方式（*）
						striped : true, // 是否显示行间隔色
						cache : true, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
						pagination : true, // 是否显示分页（*）
						height : getHeight(),
						sidePagination : "server", // 服务端请求
						sortable : false, // 是否启用排序
						sortOrder : "asc", // 排序方式
						queryParams : function(params) {
							return {
								"page.limit" : params.limit, // 页面大小
								"page.offset" : params.offset, // 页码
								"queryMap" : {
									"zsxlh" : $('#ysh').val(),
									"zslx" : $('#type').val(),
									"cityCode" : xzqdm,
									"zszt" : $('#status').val(),
									"yzqy" : $('#yzqy').val()
								},
								"queryId" : "JgXnZsjgQueryMapper.queryPageZSXX",
							}
						},// 传递参数（*）
						pageNumber : 1, // 初始化加载第一页，默认第一页
						pageSize : 15, // 每页的记录行数（*）
						pageList : [ 10, 20, 40, 100 ], // 可供选择的每页的行数（*）
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
									field : 'xh',
									title : '序号',
									width : 30,
									align : 'center',
									formatter : function(value, row, index) {
										return index + 1;
									}
								},
								{
									field : 'QXMC',
									title : '区域',
									align : 'center',
									width : 80
								},
								{
									field : 'ZSLX',
									title : '类型',
									width : 60,
									align : 'center',
									formatter : function(v) {
										if (v==1)
											return "证书"
										else
											return "证明";
									}
								},
								{
									field : 'ZSXLH',
									title : '证书印刷号',
									width : 100,
									align : 'center'
								},
								{
									field : 'ZSBH',
									title : '证号',
									width : 150,
									align : 'center',
									formatter : function(v) {
										if (v)
											return '<span title="' + v + '">'
													+ _util.colvalue(v, 10)
													+ '</span>'
										else
											return "";
									}

								},
								{
									field : 'YZQY',
									title : '印制企业',
									width : 150,
									align : 'center'
								},
								{
									field : 'ZSZT',
									title : '使用情况',
									width : 150,
									align : 'center',
									formatter : function(value, row, index) {
										if (row.ZSZT == 1) {
											return '已使用'
										} else if (row.ZSZT == 4) {
											return '未使用'
										} else if (row.ZSZT == 2) {
											return '已废弃'
										} else if (row.ZSZT == 3) {
											return '已回收'
										}
										return "";
									}
								},
								{
									field : 'SJRKSJ',
									title : '交付日期',
									width : 150,
									align : 'center',
								},
								{
									field : 'FJ',
									title : '详情',
									width : 80,
									align : 'center',
									formatter : function(value, row, index) {
										return '<a style="display: inline-block;cursor: pointer;" onclick="viewModel(\''+row.YWBSID+'\');">查看</a>';
									}
								} ]
					});
}

function getHeight() {
	var height = $(window).height()+60;
	var contentWithPadding = $(".data-panel").innerHeight();
	return height - $('.box-title').height() - $('.query-box').height()- contentWithPadding;
}

function searchBtn(flag) {
	if (flag == 1) {
		$("input").each(function() {
			$(this).val('');
			$('#status').val('');
		});
	}
	$('#resultList').bootstrapTable('refresh', {
		'url' : '/SJBDC/commonController/queryPage.do',
		'queryParams' : function(params) {
			return {
				"page.limit" : params.limit, // 页面大小
				"page.offset" : params.offset, // 页码
				"queryMap" : {
					"zsxlh" : $('#ysh').val(),
					"zslx" : $('#type').val(),
					"cityCode" : xzqdm,
					"zszt" : $('#status').val(),
					"yzqy" : $('#yzqy').val()
				},
				"queryId" : "JgXnYwjgQueryMapper.queryPageZSXX"
			}
		}
	})
}

function viewModel(ywbsid){
	$("#iframeModal").attr("src","zsjgModal.jsp?YWBSID="+ywbsid)
	$('#modalView').modal('show');
}

function modalClose(){
	$('#modalView').modal('hide');
	$('#modalView').on('hide.bs.modal', function () {
		 $("#iframeModal").attr("src","")
		})
}