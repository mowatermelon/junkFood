var pageObj = {
    init: function () {
    	initRightTab("yqjg",1);
    	var obj = _util.parseUrl();
    	if(obj&&obj.source){
    		$('#ly').val(decodeURI(obj.source));
    	}
        this.initTable();
        this.bindEvent();
    }, initTable: function () {
        $('#resultList').bootstrapTable({
            url: '/SJBDC/commonController/queryPage.do',		 //请求后台的URL（*）
            method: 'post',					  //请求方式（*）
            striped: true,					  //是否显示行间隔色
            cache: false,					   //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,				   //是否显示分页（*）
            height: pageObj.getHeight(),
            sidePagination: "server", // 服务端请求
            sortable: false,					 //是否启用排序
            sortOrder: "asc",				   //排序方式
            queryParams: function (params) {
                return pageObj.getQueryParams(params)
            },
            pageNumber: 1,					   //初始化加载第一页，默认第一页
            pageSize: 15,					   //每页的记录行数（*）
            pageList: [15, 25, 50, 100],		//可供选择的每页的行数（*）
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
                field: 'LISTORDER',
                title: '序号',
                width: 20,

            }, {
                field: 'KEYWORD',
                title: '关键字',
                width: 50,

            }, {
                field: 'SOURCE',
                title: '舆情来源',
                width: 50,

            }, {
                field: 'TYPE',
                title: '舆情影响',
                width: 50,
                formatter: function (value) {
                    if (value == 0) {
                        return "正面"
                    } else {
                        return "负面"
                    }
                }
            }, {
                field: 'XQ',
                title: '舆论详情',
                width: 200,
                formatter: function (value) {
                    return "<a title=" + value + ">" + _util.colvalue(value, 30) + "</a>"
                }

            }, {
                field: 'FXSJ',
                title: '发现时间',
                width: 80,
                formatter: function (v) {
                    return _util.getDate(v).format("yyyy-MM-dd");
                }

            }
            ]
        });
    }, getHeight: function () {

        var height = $(window).height() - 30;
        return height - $('.query-box').outerHeight() - $('.box-title-area').outerHeight();
    },
    getQueryParams: function (params) {
        return {
            "page.limit": params.limit, //页面大小
            "page.offset": params.offset,
            "queryMap": {
                "keyCode": $('#keyCode').val(),
                "source": $('#ly').val(),
                "type": $('#yqys').val()
            },
            "queryId": "com.geostar.gtgh.portal.core.dao.CommonQueryMapper.queryPageYQXX"
        }
    }, bindEvent: function () {
        $('#searchBtn').click(function () {
            var option = $('#resultList').bootstrapTable('getOptions');
            option.queryParams = function (params) {
                return pageObj.getQueryParams(params);
            }
            option.page = 1;
            $('#resultList').bootstrapTable('refresh', option)
        })
        $('#refrash').click(function () {
            $('#keyCode').val("");
            $('#ly').val("");
            $('#yqys').val("0");
            $('#searchBtn').click();
        })

    }
}
pageObj.init();

