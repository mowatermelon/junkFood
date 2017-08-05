/**
 * 异常查询参数设置
 * 
 * @type {{querybox: *[], tableParams: {id: string, url: string, columns: *[]}}}
 */
var queryYWCXParams = {
	querybox : [ {
		lable : "地区选择",
		boxClass : "city-choose",
		name : "cityChoose",
		placeholder : "",
	}, {
		lable : "业务号",
		boxClass : "text-area",
		name : "ywh",
		placeholder : "请输入业务号",
	}, {
		lable : "单元号",
		boxClass : "text-area",
		name : "bdcdyh",
		placeholder : "请输入不动产单元号",
	} ],
	tableParams : {
		id : "resultList",
		url : "/SJBDC/commonController/queryPage.do?queryId=JgXnYwjgQueryMapper.queryPageBusinessInfo",
		columns : [
				{
					field : 'QXMC',
					title : '区县名称',
					width : 100,
					align : 'center',
				},
				{
					field : 'YWH',
					title : '业务号',
					width : 100,
					align : 'center',
				},
				{
					field : 'DJLX',
					title : '登记类型',
					width : 80,
					align : 'center',
				},
				{
					field : 'BDCQZH',
					title : '不动产证号',
					width : 200,
					align : 'center',
					formatter : function(v) {
						if (v)
							return '<span title="' + v + '">'
									+ _util.colvalue(v, 10) + '</span>'
						else
							return "";
					}
				},
				{
					field : 'BDCDYH',
					title : '不动产单元号',
					width : 100,
					align : 'center',
				},
				{
					title : '详情',
					width : 100,
					align : 'center',
					formatter : function(value, row, index) {
						var btnStr = '<a href="#" style="font-size:0.8rem !important;" onclick="viewModel(\''
								+ row.YWBSID + '\');">查看</a>';
						return btnStr;
					}
				} ]
	}
}

var queryYCCXParams = {
	querybox : [ {
		lable : "地区选择",
		boxClass : "city-choose",
		name : "cityChoose",
		placeholder : "",
	}, {
		lable : "业务号",
		boxClass : "text-area",
		name : "ywh",
		placeholder : "请输入业务号",
	} ],
	tableParams : {
		id : "resultList",
		url : "/SJBDC/commonController/queryPage.do?queryId=JgXnYwjgQueryMapper.queryPageBusExc",
		columns : [
				
				{
					field : 'R',
					title : '序号',
					width : 50,
					align : 'center',
					formatter : function(v) {
						return '<span>' + v + '</span>'
					}
				},
				{
					field : 'QXMC',
					title : '区域',
					width : 200,
					align : 'center'
				},
				{
					field : 'FXSJ',
					title : '发现时间',
					width : 200,
					align : 'center',
					formatter : function(value) {
						var date = '';
						if (value != '' && value != undefined) {
							date = _util.getDate(value).format(
									"yyyy年MM月dd HH时mm分");
						}
						return date;
					}
				},
				{
					field : 'YWH',
					title : '业务号',
					width : 100,
					align : 'center'
				},
				{
					field : 'DJLX',
					title : '登记类型',
					width : 100,
					align : 'center'
				},
				{
					field : 'YCDM',
					title : '异常类型',
					width : 200,
					align : 'center'
				},
				{
					field : 'YCSM',
					title : '异常说明',
					width : 200,
					align : 'center'
				},
				{
					field : 'opt',
					title : '操作',
					width : 200,
					align : 'center',
					formatter : function(v, rec) {
						return '<a style="display: inline-block;padding:8px 6px;cursor: pointer;" data-YWBSID="'
								+ rec.YWBSID
								+ '" onClick="openWindow(this)">查看</a>';
					}
				} ]
	}
}
