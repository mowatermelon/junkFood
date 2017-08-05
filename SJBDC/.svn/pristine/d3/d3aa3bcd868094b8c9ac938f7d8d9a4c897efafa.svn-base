/**
 *
 * @type {{queryParams: {startDate: string, endDate: string, cityCode: string},
 *       init: Function}}
 */
var pageObj = {
    colors: ["#3eeae7", "#f0d342", "#8fdb1a", "#74caf4", "#4ae8a9", "#d1aafa"],
    queryParams: {
        "startDate": new Date().addDate('d', -7).format("yyyy-MM-dd"),
        "endDate": new Date().format("yyyy-MM-dd"),
        cityCode: "",// 选中的市县id
        type: "day"// 时间粒度
    },
    boxHeight: {
        tableHeight: 0,
        echartHeight: 0
    },
    falg: false,// 判断第二个table是否初始化
    tableId: "resultList1",//l
    /**
     * 表格列
     */
    cloumns: [{
        field: 'TJSJ',
        title: '汇交时间',
        align: 'center'
    }, {
        field: 'BWHQ',
        title: '报文获取',
        align: 'center'
    }, {
        field: 'HJYCSL',
        title: '异常总数',
        align: 'center'
    }, {
        field: 'SJRK',
        title: '数据入库',
        align: 'center'
    }, {
        field: 'SJJYCW',
        title: '数据校验错误',
        align: 'center'
    }, {
        field: 'CFSB',
        title: '重复上报',
        align: 'center'
    }, {
        field: 'TXWFGM',
        title: '图形无法构面',
        align: 'center'
    }, {
        field: 'JSQMCW',
        title: '接受签名错误',
        align: 'center'
    }, {
        field: 'TSXX',
        title: '提示信息',
        align: 'center'
    }, {
        field: 'QTYC',
        title: '其它异常',
        align: 'center'
    }],
    /**
     * 初始化入口
     */
    init: function () {
        $('#timeRange').val(
            new Date(this.queryParams.startDate).format('yyyy-MM-dd') + '~' + new Date(this.queryParams.endDate).format('yyyy-MM-dd'));
        this.initHeight();//初始化算一下组件高度
        this.initTable();
        this.initPlugin();
        this.bindEvent();
    },
    /***************************************************************************
     * 删除表格数据
     */
    reloadTable: function () {
        var that = this, id = that.tableId;
        var options = $('#' + id).bootstrapTable('getOptions');
        options.queryParams = that.getQueryParams(id);
        $('#' + id).bootstrapTable('refresh', options)
    },
    /**
     * 绑定事件
     */
    bindEvent: function () {
        var that = this;
        $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
            $(e.target).addClass('selected');
            var target = $(e.target).attr("data-table");
            that.tableId = target;
            if (target) {
                if (that.falg) {
                    that.reloadTable();
                } else {
                    that.initTable();
                    that.falg = true;
                }
            }
        })
        /**
         * 绑定面板切换事件
         */
        $(".btn-area a").off('click').on("click", function () {
            $('.btn-area .selected').removeClass("selected");
            $(this).addClass("selected");
            var id = $(this).attr("href");
            if (id) {
                $("#city-area-box .active").removeClass("active").removeClass("in");
                $(id).addClass("active").addClass("in");
                var data = $("#resultList2").bootstrapTable("getData");
                if (id.indexOf("line") != -1) {
                    that.initEchartLine("resultList2-bar-echart1", data, 1, 4, 'bar');
                } else {
                    that.initEchartLine("resultList2-bar-echart2", data, 4, 10, 'bar');
                }

            }
        })
    },

    /**
     * 初始化插件一些信息，时间选择器，地市选择器
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
            opens: "right",
            callback: function (city_id) {
                that.queryParams.cityCode = city_id;
                that.reloadTable();
            }
        });
        cityPicker.init();

        /**
         * 初始化时间选择器
         */
        $('#timeRange').daterangepicker({
            language: 'zh-CN',
            opens: "left",
            startDate: that.queryParams.startDate,
            endDate: that.queryParams.endDate
        }, function (start, end) {
            that.queryParams.startDate = start.format('YYYY-MM-DD');
            that.queryParams.endDate = end.format('YYYY-MM-DD')
            var days = _util.DateDiff(that.queryParams.startDate, that.queryParams.endDate);
            that.queryParams.type = days < 10 ? "day" : (days < 60) ? "week" : (days < 300) ? "month" : (days < 1000) ? "quarter" : "year";
            $('#timeRange').val(start.format('YYYY-MM-DD') + '~' + end.format('YYYY-MM-DD'));
            that.reloadTable();
        })
    },
    /**
     * 初始化表格
     */
    initTable: function () {
        var that = this, cloumns = that.cloumns, target = that.tableId;
        if (that.tableId == "resultList2") {
            cloumns = that.cloumns.slice(0);
            cloumns[0].field = "QXMC";
            cloumns[0].title = "区域";
        }
        $('#' + target).bootstrapTable({
            url: '/SJBDC/commonController/queryList.do', // 请求后台的URL（*）
            method: 'post', // 请求方式（*）
            striped: true, // 是否显示行间隔色
            cache: false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: false, // 是否显示分页（*）
            height: this.boxHeight.tableHeight,
            sortable: false, // 是否启用排序
            sortOrder: "asc", // 排序方式
            queryParams: function () {
                return that.getQueryParams()
            },// 传递参数（*）
            pageNumber: 1, // 初始化加载第一页，默认第一页
            pageSize: 10, // 每页的记录行数（*）
            pageList: [10, 25, 50, 100], // 可供选择的每页的行数（*）
            search: false, // 是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: false,
            showColumns: false, // 是否显示所有的列
            showRefresh: false, // 是否显示刷新按钮
            minimumCountColumns: 2, // 最少允许的列数
            clickToSelect: true, // 是否启用点击选中行
            uniqueId: "ID", // 每一行的唯一标识，一般为主键列
            showToggle: false, // 是否显示详细视图和列表视图的切换按钮
            cardView: false, // 是否显示详细视图
            detailView: false, // 是否显示父子表
            onLoadSuccess: function (data) {
                if (target == 'resultList1') {
                    that.initEchartLine("resultList1-line-echart", data, 1, 4, 'line');
                    that.initEchartLine("resultList1-bar-echart", data, 4, 10, 'bar');
                } else {
                    that.initEchartLine("resultList2-bar-echart1", data, 1, 4, 'bar');
                }

            },
            columns: cloumns

        });
    },

    /**
     * 初始化线图
     *
     * @param target
     * @param data
     */
    initEchartLine: function (echartId, data, startIndex, endIndex, type) {

        var that = this, target = that.tableId;//获取当前的bootstarp-table主体id
        var obj = _util.parseChartData(data);
        var options = $('#' + target).bootstrapTable("getOptions");
        var legendA = [], columns = options.columns[0];
        for (var i = startIndex; i < endIndex; i++) {
            legendA.push({
                key: columns[i].field,
                value: columns[i].title
            })
        }
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: 40,
                right: 10,
                top: 30,
                bottom: 30,
            },
            legend: {
                itemWidth: 20,
                itemHeight: 10,
                data: []
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                data: target == "resultList1" ? obj.TJSJ : obj.QXMC,
                /*interval:5*/
            }],
            yAxis: [{
                type: 'value'
            }],
            series: []
        };
        var seriesArray = [], legendArray = [];
        for (var i = 0; i < legendA.length; i++) {
            legendArray.push(legendA[i].value);
            seriesArray.push({
                name: legendA[i].value,
                type: type,
                data: obj[legendA[i].key],
                itemStyle: {
                    normal: {
                        color: that.colors[i]
                    }
                },
            })
        }
        option.legend.data = legendArray;
        option.series = seriesArray;
        $("#" + echartId).height(this.boxHeight.echartHeight);
        var chart = echarts.init(document.getElementById(echartId));
        chart.setOption(option);
    },
    /**
     * 获取表格的查询条件
     *
     * @returns {{queryId: string, queryMap: {startDate: *, endDate: *,
	 *          cityCode: string, type: string}}}
     */
    getQueryParams: function () {
        var that = this, target = that.tableId;
        return {
            queryId: target == 'resultList1' ? "SjjhQueryMapper.querySJHJ" : "JgXnSjjhQueryMapper.querySJHJ",
            queryMap: {
                startDate: that.queryParams.startDate,
                endDate: that.queryParams.endDate,
                cityCode: that.queryParams.cityCode,
                type: that.queryParams.type
            }
        }// 传递参数（*）
    },
    /**
     * 高度计算，适应屏幕高度
     *
     * @param type
     * @returns {number}
     */
    initHeight: function (type) {
        var that = this;
        var totalHeight = $(window).height() - $('#myTab').outerHeight();
        that.boxHeight.tableHeight = totalHeight * .5;
        that.boxHeight.echartHeight = totalHeight * .5 - 112;

    }
}

/**
 * 初始化入口
 */
pageObj.init();