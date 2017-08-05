$(function () {
    var C_index = {
        paramObj: {},
        init: function (){
        	initRightTab("ywjg",4);
            var obj = _util.parseUrl();
            C_index.paramObj = obj;
            if (obj && obj.ycdm != null) {
            	var str=decodeURI(obj.ycdm)
                $('#ycdm').val(str);
            }
            if (obj) {
                this._initDatePicker(obj.startDate, obj.endDate);
            }
            this._initCityChoose(C_index.paramObj);

        },
        _initDatePicker: function (startDate, endDate) {
            if (startDate && endDate) {
                $('#timeRange').val(startDate + '~' + endDate);
            }
            $('#timeRange').daterangepicker({
                language: 'zh-CN',
                opens: "right",
                startDate: startDate || "",
                endDate: endDate || ""
            }, function (start, end) {
                $('#timeRange').val(start.format('YYYY年MM月DD') + '~' + end.format('YYYY年MM月DD'));

            })
        },
        _initCityChoose : function(obj) {
        	 $.getJSON(base + "view/Common/json/city.json", function (data) {
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
			if(obj){
				var cityPicker = new IIInsomniaCityPicker({
					defalutCityCode:C_index.paramObj.cityCode?C_index.paramObj.cityCode:"",
					target : '#cityChoice',
					valType : 'k-v',
					callback : function(city_id) {
						$('#cityCode').val(city_id);
					}
				});
			}else{
				var cityPicker = new IIInsomniaCityPicker({
					target : '#cityChoice',
					valType : 'k-v',
					callback : function(city_id) {
						$('#cityCode').val(city_id);
					}
				});
			}
			
			cityPicker.init();

		})
        }
    }
    C_index.init();
    if(C_index.paramObj){
    	initTables(C_index.paramObj.cityCode,C_index.paramObj.startDate,C_index.paramObj.endDate);
    }else {
    	initTables();
    }
    


});


function initTables(qxdm,startDate,endDate) {
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
        queryParams: function (params) {
            return {
                "page.limit": params.limit, //页面大小
                "page.offset": params.offset,
                "queryMap": {
                    "cityCode":qxdm?qxdm:"",
                    "ywh": $('#ywh').val(),
                    "djlx": $('#djlx').val(),
                    "ycdm": $('#ycdm').val(),
                    "startDate":startDate? startDate: "",
                    "endDate": endDate?endDate: ""
                },
                "queryId": "JgXnYwjgQueryMapper.queryPageBusExc"
            }
        },//传递参数（*）
        pageNumber: 1,					   //初始化加载第一页，默认第一页
        pageSize: 20,					   //每页的记录行数（*）
        pageList: [10, 25, 50, 100],		//可供选择的每页的行数（*）
        search: false,					   //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: false,
        showColumns: false,				  //是否显示所有的列
        showRefresh: false,				  //是否显示刷新按钮
        minimumCountColumns: 2,			 //最少允许的列数
        clickToSelect: true,				//是否启用点击选中行
        uniqueId: "YWBSID",					 //每一行的唯一标识，一般为主键列
        showToggle: false,					//是否显示详细视图和列表视图的切换按钮
        cardView: false,					//是否显示详细视图
        detailView: false,				   //是否显示父子表
        columns: [{
            field: 'R',
            title: '序号',
            width: 50,
            align: 'center',
            formatter:function(v){
            	return '<span>'+v+'</span>'
            }
        }, {
            field: 'QXMC',
            title: '区域',
            width: 200,
            align: 'center'
        }, {
            field: 'FXSJ',
            title: '发现时间',
            width: 200,
            align: 'center',
            formatter: function (value) {
                var date = '';
                if (value != '' && value != undefined) {
                    date = _util.getDate(value).format("yyyy年MM月dd HH时mm分");
                }
                return date;
            }
        }, /*{
         field: 'DJJG',
         title: '登记机构',
         width: 200,
         align: 'center'
         }, */{
            field: 'YWH',
            title: '业务号',
            width: 100,
            align: 'center'
        }, {
            field: 'DJLX',
            title: '登记类型',
            width: 100,
            align: 'center'
        }, {
            field: 'YCDM',
            title: '异常类型',
            width: 200,
            align: 'center'
        }, {
            field: 'YCSM',
            title: '异常说明',
            width: 200,
            align: 'center'
        }, {
            field: 'opt',
            title: '操作',
            width: 200,
            align: 'center',
            formatter: function (v, rec) {
            	if(rec.BDCDYH){
            		return '<a style="display: inline-block;cursor: pointer;" data-YWBSID="'+rec.YWBSID+'" onclick="viewModel(\''+rec.YWBSID+'\');">查看</a>';
            	}
            	return "" 
            }
        }
        ]
    });
}

function openWindow(that) {
    window.open("index.jsp?YWID=" + $(that).data("ywbsid"));
}

function openPdf() {
    window.open("/SJBDC/view/documentFile/DJXX.pdf");
}

function getHeight() {
    var height = $(window).height() - 60;
    var contentWithPadding = $(".data-panel").innerHeight();
    return height - $('.box-title').height() - $('.query-box').height();
}

function searchBtn(flag) {
    if (flag == 1) {
        $("input").each(function () {
            $(this).val('');
            $('#djlx').val('');
        });
    }
    $('#resultList').bootstrapTable('refresh', {
        'url': '/SJBDC/commonController/queryPage.do',
        'queryParams': function (params) {
            return {
                "page.limit": params.limit, //页面大小
                "page.offset": params.offset, //页码
                "queryMap": {
                    "cityCode": $('#cityChoice').val(),
                    "ywh": $('#ywh').val(),
                    "djlx": $('#djlx').val()
                },
                "queryId": "JgXnYwjgQueryMapper.queryPageBusExc",
            }
        }
    })
}

function viewModel(bdcdyh){
	var h={
	    	 "lx":'h',
	    	 "data":['441802005003GB00629F00010021']
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
