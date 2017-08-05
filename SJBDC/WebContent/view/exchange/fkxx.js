var pageObj = {
    queryParams: {
        "startDate": new Date().addDate('d', -7).format("yyyy-MM-dd"),
        "endDate": new Date().format("yyyy-MM-dd"),
        cityCode: "",// 选中的市县id
    },
    /**
     * 初始化方法
     */
    init: function () {
        var that = this;
        $('#timeRange').val(new Date(this.queryParams.startDate).format('yyyy-MM-dd') + '~' + new Date(this.queryParams.endDate).format('yyyy-MM-dd'));
        that.getHeight();
        that.initPlugin();//初始化插件
        that.initTable();//初始化表格控件
        that.bindEvent();//绑定事件
    },
    /**
     * 绑定点击事件
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
     * 初始化插件
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
    },
    /**
     * 计算表格高度
     */
    getHeight: function () {
        this.tableHeight = $(window).height() - $('.query-box').outerHeight() - 30;
    },
    /**
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
    },
    /**
     * 初始化表格控件
     */
    initTable: function () {
        var that = this;
        $('#resultList').bootstrapTable({
            url: '/SJBDC/commonController/queryPage.do', // 请求后台的URL（*）
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
            columns: [
                {
                    field: 'R',
                    title: '序号',
                    width: 50,
                    align: 'center'
                },
                {
                    field: 'QXDM',
                    title: '行政区划',
                    align: 'center',
                    width: 150
                },
                {
                    field: 'BIZMSGID',
                    title: '报文ID',
                    align: 'center',
                    width: 100
                },
                {
                    field: 'YWH',
                    title: '业务号',
                    align: 'center',
                    width: 100
                },
                {
                    field: 'FKSJ',
                    title: '汇交时间',
                    align: 'center',
                    width: 200,
                    formatter: function (value) {
                        return _util.getDate(value).format(
                            "yyyy/MM/dd HH:mm");
                    }
                },
                {
                    field: 'FKSJ',
                    title: '反馈时间',
                    align: 'center',
                    width: 200,
                    formatter: function (value) {
                        return _util.getDate(value).format(
                            "yyyy/MM/dd HH:mm");
                    }
                },
                {
                    field: 'FKLX',
                    title: '反馈说明',
                    align: 'center',
                    width: 200,
                    formatter: function (value) {
                        if (value != undefined && value == '正确') {
                            return '汇交成功';
                        }
                        return value;
                    }
                },
                {
                    field: 'ZT',
                    title: '状态',
                    align: 'center',
                    width: 150,
                    formatter: function actionFormatter(value) {

                        if (value && value == 1) {
                            return '<span style="color: green" class="glyphicon glyphicon-ok"></span>'
                        } else {
                            return '<span style="color:red" class="glyphicon glyphicon-remove"></span>'
                        }

                    }
                },
                {
                    field: 'BIZ',
                    title: '标准报文',
                    align: 'center',
                    width: 150,
                    formatter: function actionFormatter(value, row) {
                        if (value && value == 1) {
                            return "<span style='color:green;cursor: pointer;' onclick=\"pageObj.openWin('" + row.BIZMSGID + "',0)\" class='glyphicon glyphicon-tasks'></span>"
                        } else {
                            return '<span style="color:#ededed" class="glyphicon glyphicon-tasks"></span>'
                        }

                    }
                },
                {
                    field: 'EXT',
                    title: '扩展报文',
                    align: 'center',
                    width: 150,
                    formatter: function actionFormatter(value, row) {
                        if (value && value == 1) {
                            return "<span style='color:green;cursor: pointer;' onclick=\"pageObj.openWin('" + row.BIZMSGID + "',1)\" class='glyphicon glyphicon-tasks'></span>"
                        } else {
                            return '<span style="color:#ededed" class="glyphicon glyphicon-tasks"></span>'
                        }
                    }
                },
                {
                    field: 'SREP',
                    title: '反馈信息',
                    align: 'center',
                    width: 150,
                    formatter: function actionFormatter(value, row) {
                        if (value && value == 1) {
                            return "<span style='color:green;cursor: pointer;' onclick=\"pageObj.viewResInfo('" + row.BIZMSGID + "')\" class='glyphicon glyphicon-tasks'></span>"
                        } else {
                            return '<span style="color:#ededed" class="glyphicon glyphicon-tasks"></span>'
                        }
                    }
                }]
        });
    },
    /**
     * 打开弹出框架
     * @param bizmsgId
     */
    viewResInfo: function (bizmsgId) {
        _util.ajaxData('/SJBDC/sjjhController/queryRepInfoById.do', {
            queryId: "SjjhQueryMapper.queryRepInfo",
            queryMap: {
                bizmsgid: bizmsgId
            }
        }, function (json) {
            if (json) {
                $('#BizMsgID').text(json.BizMsgID);
                $('#SuccessFlag').text(
                    json.SuccessFlag == '1' ? '成功' : '失败');
                $('#ResponseCode').text(json.ResponseCode);
                $('#ResponseInfo').text(json.ResponseInfo);
                $('#QRCode').text(json.QRCode);
            }
            $('#viewModal').modal('show');
        })
    },
    openWin: function (val, falg) {
        window.open("/SJBDC/sjjhController/queryXMLData.do?queryMap[bizmsgId]=" + val + "&queryId=SjjhQueryMapper.queryXMLDATA&queryMap[flag]=" + falg);
    },
    /**
     * 获取表格的查询条件
     *
     * @returns {{queryId: string, queryMap: {startDate: *, endDate: *,
	 *          cityCode: string, type: string}}}
     */
    getQueryParams: function (params) {
        var that = this;
        var queryParam = {
            queryId: "JgXnSjjhQueryMapper.queryPageFKXX",
            queryMap: {
                startDate: that.queryParams.startDate,
                endDate: that.queryParams.endDate,
                cityCode: that.queryParams.cityCode,
                status: $('#status').val(),
                ywh: $("#ywh").val()

            }
        };
        if (params) {
            queryParam['page.limit'] = params.limit;
            queryParam['page.offset'] = params.offset;
        }
        return queryParam;

    }
    ,
}
/**
 * 初始化入口
 */
pageObj.init();