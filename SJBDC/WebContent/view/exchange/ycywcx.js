$(function () {
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
                var cityPicker = new IIInsomniaCityPicker({
                    data: data,
                    target: '#cityChoice',
                    valType: 'k-v',
                    hideCityInput: '#city',
                    hideProvinceInput: '#province',
                    callback: function (city_id) {
                    }
                });
                cityPicker.init();
            })
        }
    }
    C_index.init();
    initTables();
});

function initTables() {
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
			"page.offset" : params.offset,
			"queryMap":{
				"cityChoice":$('#cityChoice').val(),
				"ywh":$('#ywh').val(),
				"djlx":$('#djlx').val()
			},
			"queryId" : "com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageBusExc"
        	}
        },//传递参数（*）
        pageNumber: 1,					   //初始化加载第一页，默认第一页
        pageSize: 10,					   //每页的记录行数（*）
        pageList: [10, 25, 50, 100],		//可供选择的每页的行数（*）
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
                	  checkbox:true,
                  }
            ,{
            	formatter:function(value, row, index){
          			if(!row.FXSJ){
          				return "";
          			}
              		var dateDiff=_util.DateDiff(row.FXSJ,show());        		
              		var html="";        		
              		if(parseInt(dateDiff)<=2&&row.CLQk!=undefined&&row.CLQk=='未反馈'){
              			html+='<span style="align:center" class="glyphicon glyphicon-envelope"></span>';
              		}
                      return html;
            	},
            	width: 5,
            	align:'center'
            },
            
            {
        	field: 'R',
        	title: '序号',
        	width: 50,
        	align:'center'
        },{
            field: 'QXMC',
            title: '行政区名称',
            width: 100,
            align:'center'
        }, {
       	 field: 'DJJG',
         title: '登记机构',
         width: 200,
         align:'center'
        } ,{
            field: 'YWH',
            title: '业务号',
            width: 100,
            align:'center'
        }, {
            field: 'DJLX',
            title: '登记类型',
            width: 100,
            align:'center'
        }, {
            field: 'YCDM',
            title: '异常类型',
            width: 100,
            align:'center'
        }, {
            field: 'YCSM',
            title: '异常描述',
            width: 200,
            align:'center'
        }, {
            field: 'FXSJ',
            title: '发现时间',
            width: 100,
            align:'center',
            formatter: function (value) {
            	var date='';
            	if(value!=''&&value!=undefined){
            		date=_util.getDate(value).format("MM月dd HH时mm分");
            	}
                return date;
            }
        }, {
            field: 'CLQk',
            title: '处理情况',
            width: 100,
            align:'center'
        }, {
            field: 'FKRY',
            title: '反馈人员',
            width: 100,
            align:'center'
        }
        ]
    });
}

function getHeight(){
	var height = $(window).height()-20;
	var contentWithPadding = $(".data-panel"). innerHeight();

	return height-$('.box-title').height()-$('.query-box').height()-contentWithPadding;
}
function searchBtn(flag) {  
	if(flag==1){
		$("input").each(function(){
		    $(this).val('');
		    $('#djlx').val('');
		  });
	}
	$('#resultList').bootstrapTable('refresh', {'url': '/SJBDC/commonController/queryPage.do',
		'queryParams':function(params) {
        	return {
    			"page.limit" : params.limit, //页面大小
				"page.offset" : params.offset, //页码
				"queryMap":{
					"cityChoice":$('#cityChoice').val(),
					"ywh":$('#ywh').val(),
					"djlx":$('#djlx').val()
				},
				"queryId" : "com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageBusExc",
        	}
		 }
	})
}

function batchRep(){
	var rowDatas=$('#resultList').bootstrapTable('getAllSelections');
	var ywhArr='';
	if(rowDatas.length>0){
		for(var i=0;i<rowDatas.length;i++){
			ywhArr+="'"+rowDatas[i].YWH+"',";
		}
		ywhArr=ywhArr.substring(0,ywhArr.length-1);
	}else{
		alert('请先选择数据再进行操作!');
		return;
	}
	$.ajax({
		type:"POST",
		url:"/SJBDC/comSupCtrler/batchRepInfo.do",
		async:false,
		data:{"ywhStr":ywhArr},
		success: function(data){
			$('#resultList').bootstrapTable('refresh', {'url': '/SJBDC/commonController/queryPage.do'});
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			alert("服务器忙，请稍后再试！")
		}
	});	
}
function show(){
	   var mydate = new Date();
	   var str = "" + mydate.getFullYear() + "-";
	   str += (mydate.getMonth()+1) + "-";
	   str += mydate.getDate();
	   return str;
	  }
