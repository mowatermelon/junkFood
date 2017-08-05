$(function(){
	var C_index = {
		init:function(){
			initRightTab('zsjg_xxwh',0)
			initTables_dg();
			initTables_lz();
			initTables_fz();
			initBindClick()
		}
	}
	C_index.init();
	  
})

function initBindClick(){
	$("#close_dg").bind("click",function(){
		$('#myModal').on('hidden.bs.modal', function (e) {
			$("#table_dg tr td input[type=text]").val('')
			})
	})
	$("#save_dg").bind("click",function(){
	  var data={
			  "DGHTH":$("#DGHTH").val(),
			  "YSPC":$("#YSPC").val(),
			  "YSZS":$("#YSZS").val(),
			  "QZZS":$("#QZZS").val(),
			  "QZZM":$("#QZZM").val(),
			  "DJRQ":$("#DJRQ").val(),
			  "YSQY":$("YSQY").val(),
			  "JHJFRQ":$("#JHJFRQ").val(),
			  "SJJFRQ":$("#SJJFRQ").val(),
			  "YCSJ":$("#YCSJ").val(),
			  "LZSL":$("#LZSL").val(),
			  "LZL":$("#LZL").val(),
	  };
	  $('#resultList1').bootstrapTable('append', data);
	  $("#myModal").on("hidden.bs.modal", function() {  
		  $("#table_dg tr td input[type=text]").val('') 
	}); 
	});
	
	$("#remove_DG").bind("click",function(){
		var ids=getIdSelections()
		$('#resultList1').bootstrapTable('remove',{
			field: 'DGHTH',
			values: ids
		})
		
	})
	$("#change_DG").bind("click",function(){
		
		var rows=$('#resultList1').bootstrapTable('getSelections');
		
		if(rows.length==1){
			$("#myModal").modal("show"); 
				$("#DGHTH").val(rows[0].DGHTH);
				$("#YSPC").val(rows[0].YSPC);
				$("#YSZS").val(rows[0].YSZS);
				$("#QZZS").val(rows[0].QZZS);
				$("#QZZM").val(rows[0].QZZM);
				$("#DJRQ").val(rows[0].DJRQ);
				$("YSQY").val(rows[0].YSQY);
				$("#JHJFRQ").val(rows[0].JHJFRQ);
				$("#SJJFRQ").val(rows[0].SJJFRQ);
				$("#YCSJ").val(rows[0].YCSJ);
				$("#LZSL").val(rows[0].LZSL);
				$("#LZL").val(rows[0].LZL);   
		}
	})
	
}



function getIdSelections() {
    var rows=$('#resultList1').bootstrapTable('getSelections')
    var ids=[];
    for(var i=0;i<rows.length;i++){
    	ids.push(rows[i].DGHTH)
    }
    return ids;
}


function initTables_dg() {
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
		idField:'DGHTH',
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
        showToggle: false,					//是否显示详细视图和列表视图的切换按钮
        cardView: false,					//是否显示详细视图
        detailView: false,				   //是否显示父子表
        columns: [{
        	field:'state',
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
        },
        {
            field: 'DGHTH',
            title: '订购合同号',
            align: 'center',
            width: 100
        },{
            field: 'YSPC',
            title: '印刷批次',
            width: 60,
            align:'center'
        }, {
            field: 'YSZS',
            title: '印刷总数',
            width: 60,
            align:'center'
        },  {
            field: 'QZZS',
            title: '其中证书',
            width: 60,
            align:'center'
        },
        {
            field: 'QZZM',
            title: '其中证明',
            width: 60,
            align:'center'
        },
        {
            field: 'DJRQ',
            title: '订购日期',
            width: 150,
            align:'center',
        },
        {
            field: 'YSQY',
            title: '印刷企业',
            width: 150,
            align:'center'
        },  
        {
            field: 'JHJFRQ',
            title: '计划交付日期',
            width: 150,
            align:'center'
        },
        {
            field: 'SJJFRQ',
            title: '实际交付日期',
            width: 150,
            align:'center'
        },
        {
            field: 'YCSJ',
            title: '延迟时间',
            width: 60,
            align:'center'
        },
        {
            field: 'LZSL',
            title: '劣证数量',
            width: 60,
            align:'center'
        },
        {
            field: 'LZL',
            title: '劣证率',
            width: 60,
            align:'center'
        }
        ]
    });
}

function initTables_lz() {
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
            title: '证书工本号',
            align: 'center',
            width: 80
        },{
            field: 'ZSLX',
            title: '证书类型',
            width: 60,
            align:'center'
        }
        ]
    });
}


function initTables_fz() {
    $('#resultList3').bootstrapTable({
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
            title: '证书工本号',
            align: 'center',
            width: 80
        },{
            field: 'ZSLX',
            title: '证书类型',
            width: 60,
            align:'center'
        }, {
            field: 'ZSXLH',
            title: '废弃人',
            width: 100,
            align:'center'
        },  {
            field: 'ZSBH',
            title: '废弃时间',
            width: 150,
            align:'center'
        },
        {
            field: 'YZQY',
            title: '废弃原因',
            width: 150,
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