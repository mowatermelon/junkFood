$(function(){
	var C_index = {
		init:function(){
			initRightTab('zsjg_xxwh',1)
			initTables_qyzz();
			initTables_ysxx();
		}
	}
	C_index.init();
	 
	$("#add_qyzz").bind("click",function(){
		alert($('#resultList1').bootstrapTable('getSelections'));
	})
})



function initTables_qyzz() {
    $('#resultList1').bootstrapTable({
        url: '',		 //请求后台的URL（*）
        method: 'post',					  //请求方式（*）
        striped: true,					  //是否显示行间隔色
        cache: false,					   //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: false,				   //是否显示分页（*）
        height: getHeight(),
//        sidePagination: "server", // 服务端请求
        sortable: false,					 //是否启用排序
        sortOrder: "asc",				   //排序方式
        undefinedText:"",
        'queryParams':function(params) {
        	return {
				"queryMap":{
					"zsxlh":$('#ysh').val(),
					"zslx":$('#type').val(),
					"qxdm":xzqdm,
					"zszt":$('#status').val(),
					"yzqy":$('#yzqy').val()
				},
				"queryId" : "com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForZSCX"
        	}
		 },
        //传递参数（*）
        pageNumber: 1,					   //初始化加载第一页，默认第一页
        pageSize: 20,					   //每页的记录行数（*）
        pageList: [20, 40, 60, 100],		//可供选择的每页的行数（*）
        search: false,					   //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: false,
        showColumns: false,				  //是否显示所有的列
        showRefresh: false,				  //是否显示刷新按钮
        minimumCountColumns: 2,			 //最少允许的列数
        clickToSelect: true,				//是否启用点击选中行
        uniqueId: "ID",					 //每一行的唯一标识，一般为主键列
        showToggle: false,					//是否显示详细视图和列表视图的切换按钮
        cardView: false,					//是否显示详细视图
        detailView: false,				   //是否显示父子表
        columns: [
                  {
        	width: 30,
        	align:'center',
        	checkbox:true
         },
         {
        	field: 'xh',
        	title: '序号',
        	width: 30,
        	align:'center',
        	 formatter:function (value, row, index){
	            	return index+1;
         }
        },{
            field: 'XZQMC',
            title: '名称',
            align: 'center',
            width: 80
        },{
            field: 'ZSLX',
            title: '附件',
            width: 60,
            align:'center',
            formatter:function (value, row, index){
            	return '<a href="#">查看</a>'
     }
        }
        ],
        data:[{
        	"XZQMC":"上海邮票厂"
        },{
        	"XZQMC":"上海邮票厂"
        },{
        	"XZQMC":"上海邮票厂"
        }]
    });
}

function initTables_ysxx() {
    $('#resultList2').bootstrapTable({
        url: '',		 //请求后台的URL（*）
        method: 'post',					  //请求方式（*）
        striped: true,					  //是否显示行间隔色
        cache: false,					   //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: false,				   //是否显示分页（*）
        height: getHeight(),
//        sidePagination: "server", // 服务端请求
        sortable: false,					 //是否启用排序
        sortOrder: "asc",				   //排序方式
        undefinedText:"",
        'queryParams':function(params) {
        	return {
				"queryMap":{
					"zsxlh":$('#ysh').val(),
					"zslx":$('#type').val(),
					"qxdm":xzqdm,
					"zszt":$('#status').val(),
					"yzqy":$('#yzqy').val()
				},
				"queryId" : "com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageForZSCX"
        	}
		 },
        //传递参数（*）
        pageNumber: 1,					   //初始化加载第一页，默认第一页
        pageSize: 20,					   //每页的记录行数（*）
        pageList: [20, 40, 60, 100],		//可供选择的每页的行数（*）
        search: false,					   //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: false,
        showColumns: false,				  //是否显示所有的列
        showRefresh: false,				  //是否显示刷新按钮
        minimumCountColumns: 2,			 //最少允许的列数
        clickToSelect: true,				//是否启用点击选中行
        uniqueId: "ID",					 //每一行的唯一标识，一般为主键列
        showToggle: false,					//是否显示详细视图和列表视图的切换按钮
        cardView: false,					//是否显示详细视图
        detailView: false,				   //是否显示父子表
        columns: [{
        	field: 'xh',
        	title: '序号',
        	width: 30,
        	align:'center',
        	 formatter:function (value, row, index){
	            	return index+1;
         }
        },{
            field: 'XZQMC',
            title: '订购合同号',
            align: 'center',
            width: 80
        },{
            field: 'ZSLX',
            title: '印刷批次',
            width: 60,
            align:'center'
        }, {
            field: 'ZSXLH',
            title: '印刷总数',
            width: 100,
            align:'center'
        },  {
            field: 'ZSBH',
            title: '其中证书',
            width: 150,
            align:'center'
        },
        {
            field: 'YZQY',
            title: '其中证明',
            width: 150,
            align:'center'
        },
        {
            field: 'ZSZT',
            title: '订购日期',
            width: 150,
            align:'center',
        },
        {
            field: 'JFRQ',
            title: '印刷企业',
            width: 150,
            align:'center'
        },  
        {
            field: 'FJ',
            title: '计划交付日期',
            width: 80,
            align:'center'
        },
        {
            field: 'FJ',
            title: '实际交付日期',
            width: 80,
            align:'center'
        },
        {
            field: 'FJ',
            title: '延迟时间',
            width: 80,
            align:'center'
        },
        {
            field: 'FJ',
            title: '劣证数量',
            width: 80,
            align:'center'
        },
        {
            field: 'FJ',
            title: '劣证率',
            width: 80,
            align:'center'
        }
        ]
    });
}



function getHeight(){
	return 400;
//	var height = $(window).height()-20;
//	var contentWithPadding = $(".data-panel"). innerHeight();
//	return height-$('.box-title').height()-$('.query-box').height()-contentWithPadding;
}