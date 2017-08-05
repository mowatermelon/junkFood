$(function () {
	initRightTab("ywjg",1);
	var url=decodeURI(location.href)
	var obj=_util.parseUrl(url);
	var djlx="";
	var qxdm=0;
	if(obj){
		djlx=obj.djlx;
		qxdm=obj.qxdm;
	}
    var C_index = {
        init: function () {
            this._initCityChoose();
            this._initDatePicker();
        },
        _initDatePicker: function () {
            $("#date-choose").datetimepicker({
                language: 'zh-CN',
                weekStart: 1,
                todayBtn: 1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                minView: 2,
                forceParse: 0
            });
        },
        _initCityChoose: function () {
            $.getJSON(base + "view/Common/json/city.json", function (data) {
                if (C_index.paramObj&& C_index.paramObj.cityCode) {
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
                    data: data,
                    target: '#cityChoice',
                    valType: 'k-v',
                    callback: function (city_id) {
                        $('#cityCode').val(city_id);
                    }
                });
                cityPicker.init();
            })
        }
    }
    C_index.init();
    setTimeout(initTables(djlx,qxdm),500);

});
	
function initTables(djlx,qxdm) {
    $('#resultList').bootstrapTable({
        url: '/SJBDC/commonController/queryPage.do',		 //请求后台的URL（*）
        method: 'post',					  //请求方式（*）
        striped: true,					  //是否显示行间隔色
        cache: false,					   //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,				   //是否显示分页（*）
        height: getHeight(),
        sidePagination: "server", // 服务端请求
        sortable: false,					 //是否启用排序
        sortOrder: "asc",				   //排序方式
        queryParams:function(params) {
        	return {
    			"page.limit" : params.limit, //页面大小
				"page.offset" : params.offset, //页码
				"queryMap":{
				"cityCode":qxdm?qxdm:$('#cityCode').val(),
				"bdcdyh":$('#bdcdyh').val(),
				"zsxlh":$('#zsxlh').val(),
				"ywh":$('#ywh').val(),
				"djlx":djlx?djlx:$('#djlx').val()
				},
				"queryId" : "JgXnYwjgQueryMapper.queryPageBusinessInfo",
        	}
		 },//传递参数（*）
        pageNumber: 1,					   //初始化加载第一页，默认第一页
        pageSize: 20,					   //每页的记录行数（*）
        pageList: [10, 20, 40, 100],		//可供选择的每页的行数（*）
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
        	field: 'R',
        	title: '序号',
        	width: 30,
        	align:'center'
        },{
            field: 'QXMC',
            title: '区县名称',
            width: 100,
            align: 'center',
        },{
            field: 'YWH',
            title: '业务号',
            width: 100,
            align: 'center',
        }, {
            field: 'DJLX',
            title: '登记类型',
            width: 80,
            align: 'center',
        }, {
            field: 'BDCQZH',
            title: '不动产证号',
            width: 200,
            align: 'center',
            formatter: function (v) {
                if (v)
                    return '<span title="'
                        + v
                        + '">'
                        + _util.colvalue(
                            v, 10)
                        + '</span>'
                else
                    return "";
            }
        }, {
        	 field: 'BDCDYH',
             title: '不动产单元号',
             width: 100,
             align: 'center',
        }/*,
        {
       	 field: 'ZSXLH',
            title: '证书序列号',
            width: 100,
            align:'center'
       },{
         	 field: 'ZL',
             title: '坐落',
             width: 300,
             align:'center'
        },{
         	 field: 'FZRQ',
             title: '发证日期',
             width: 100,
             align:'center',
             formatter: function (value) {
            	 if(value!=undefined&&value!=''){
            		 return _util.getDate(value).format("yyyy-MM-dd HH24:mimi:ss");
            	 }
            	 return '';
             }
        }*/,{
             title: '详情',
             width: 100,
             align:'center',
             formatter: function (value, row, index) {
            	 var btnStr='<a href="#" style="font-size:0.8rem !important;" onclick="viewModel(\''+row.BDCDYH+'\');">查看</a>';
            	 return btnStr;
             }
        }
        ]
    });
}

//设置bootstrap-table的高度
function getHeight(){
	var height = $(window).height()-60;
	var contentWithPadding = $(".data-panel"). innerHeight();
	return height-$('.box-title').height()-$('.query-box').height();
}
//查找按钮
function searchBtn(flag) {  
	if(flag==1){
		$("input").each(function(){
		    $(this).val('');
		  });
		$('#estateClass').val('');
	}
	$('#resultList').bootstrapTable('refresh', {'url': '/SJBDC/commonController/queryPage.do',
		'queryParams':function(params) {
        	return {
    			"page.limit" : params.limit, //页面大小
				"page.offset" : params.offset, //页码
				"queryMap":{
					"cityCode": $('#cityCode').val(),
					"bdcdyh":$('#bdcdyh').val(),
					"zsxlh":$('#zsxlh').val(),
					"ywh":$('#ywh').val(),
					"djlx":$('#djlx').val()
					},
				"queryId" : "com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageBusinessInfo",
        	}
		 }
	})
}

function viewModel(bdcdyh){
	var h={
	    	 "lx":'h',
	    	 "data":[bdcdyh]
	     		};
	$("#iframeModal").attr("src",encodeURI("ywjgModal.jsp?ywjgData="+JSON.stringify(h)))
	$('#modalView').modal('show');
	//window.open('../ywjg/index.jsp?YWID='+DJB_ID);
}

//绑定历史上下级的点击事件


//function modalShow(){
//	$('#modalView').on('show.bs.modal', function () {
//		var h={
//		    	 "lx":'h',
//		    	 "data":['441802005003GB00629F00010021']
//		     		};
//		var zd={
//	    		 "lx":'zd',
//	    		 "data":['441802005007GB00019','441802005005GB00065','441802005003GB00192']};
//		 var z={
//	    		 "lx":'z',
//	    		 "data":['441802005005GB00065F0001']
//	     		};
//		 $("#iframeModal").attr("src",encodeURI("ywjgModal.jsp?ywjgData="+JSON.stringify(h)))
//		})
//}

function modalClose(){
	$('#modalView').modal('hide');
	$('#modalView').on('hide.bs.modal', function () {
		 $("#iframeModal").attr("src","")
		})
}