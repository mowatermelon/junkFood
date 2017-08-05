var pageObj = {
    queryParams: {
        "startDate": new Date().addDate('d', -7).format("yyyy-MM-dd"),
        "endDate": new Date().format("yyyy-MM-dd"),
        cityCode: "",// 选中的市县id
    },
    /**
     * 初始化入口
     */
    init: function () {
        var obj = _util.parseUrl();
        if (obj) {
            this.queryParams.startDate = obj.startDate || this.queryParams.startDate;
            this.queryParams.endDate = obj.endDate || this.queryParams.endDate;
            this.queryParams.cityCode = obj.cityCode || "";
        }

        $('#timeRange').val(new Date(this.queryParams.startDate).format('yyyy-MM-dd') + '~' + new Date(this.queryParams.endDate).format('yyyy-MM-dd'));
        this.getHeight();//初始化高度
        this.initPlugin();//初始化插件
        this.initTable();//初始化table
        this.bindEvent();//绑定事件
    },
    /**
     * 绑定事件
     */
    bindEvent: function () {
        var that = this;
        $('.btn-box a').click(function () {
            var id = $(this).attr("id");
            if (id == "queryBtn") {
                that.reloadTable();
            }
        })
    },
    /**
     * 计算表格高度
     */
    getHeight: function () {
        this.tableHeight = $(window).height() - $('.query-box').outerHeight() - 30;
    },

    /**
     * 初始化插件信息
     */
    initPlugin: function () {
        var that = this;
        /**
         * 初始化省市选择控件
         *
         * @type {IIInsomniaCityPicker}
         */
        var cityPicker = new IIInsomniaCityPicker({
            target: '#cityChoice',
            valType: 'k-v',
            defalutCityCode: that.queryParams.cityCode,
            callback: function (city_id) {
                that.queryParams.cityCode = city_id;

            }
        });
        cityPicker.init();

        /**
         * 初始化时间选择器
         */
        $('#timeRange').daterangepicker({
            language: 'zh-CN',
            opens: "right",
            startDate: that.queryParams.startDate,
            endDate: that.queryParams.endDate
        }, function (start, end) {
            that.queryParams.startDate = start.format('YYYY-MM-DD');
            that.queryParams.endDate = end.format('YYYY-MM-DD')
        })


    }, initTable: function () {
        var that = this;

        $('#resultList').bootstrapTable({
            url: '',		 //请求后台的URL（*）
            method: 'post',					  //请求方式（*）
            striped: true,					  //是否显示行间隔色
            cache: false,					   //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,				   //是否显示分页（*）
            height: that.tableHeight,
            sidePagination: "server", // 服务端请求
            sortable: false,					 //是否启用排序
            sortOrder: "asc",				   //排序方式
            queryParams: function (params) {
                return that.getQueryParams(params)
            },// 传递参数（*）
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
                field: 'listoreder',
                title: '编号',
                width: 50
            }, {
                field: 'CJSJ',
                title: '汇交区域',
                width: 150
            }, {
                field: 'CZNR',
                title: '汇交时间'
            }, {
                field: 'CZLX',
                title: '汇交批次/总批次',
                width: 200
            }, {
                field: 'local',
                title: '汇交内容',
                width: 150
            }, {
                field: 'CZLX',
                title: '省级质量检查',
                width: 200
            }, {
                field: 'CZLX',
                title: '是否完成入库',
                width: 200
            }, {
                field: 'CZLX',
                title: '是否完成上报',
                width: 200
            }, {
                field: 'CZLX',
                title: '存量数据清单表',
                width: 200
            }]
        });

    }, /**
     *重新刷新bootstarp-table
     */
    reloadTable: function () {
        var that = this;
        var option = $('#resultList').bootstrapTable('getOptions');
        option.queryParams = function (params) {
            return that.getQueryParams(params);
        }
        option.page = 1;
        $('#resultList').bootstrapTable('refresh', option)
    }, /**
     * 获取表格的查询条件
     *
     * @returns {{queryId: string, queryMap: {startDate: *, endDate: *,
	 *          cityCode: string, type: string}}}
     */
    getQueryParams: function (params) {
        var that = this;

        var queryParam = {
            queryId: "SjjhQueryMapper.queryPageSJHJ",
            queryMap: {
                startDate: that.queryParams.startDate,
                endDate: that.queryParams.endDate,
                cityCode: that.queryParams.cityCode,
                queryType: $("input[name='iCheck']:checked").val()
            }
        };
        if (params) {
            queryParam['page.limit'] = params.limit;
            queryParam['page.offset'] = params.offset;
        }
        return queryParam;

    },

}
pageObj.init();