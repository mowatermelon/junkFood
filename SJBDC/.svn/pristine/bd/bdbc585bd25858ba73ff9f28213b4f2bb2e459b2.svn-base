var initTableQuery = window.InitTable = {
    setting: {},
    bindObj: {
        cityChoose: []
    },
    /**
     * 初始化查询条件
     * @param queryBox
     */
    initQueryBox: function
        (queryBox) {
        var that = this;
        if (queryBox && queryBox.length) {
            var queryHtml = "";
            for (var i = 0; i < queryBox.length; i++) {
                /**
                 * 地区选择控件
                 */
                if (queryBox[i].boxClass == "city-choose") {
                    that.bindObj.cityChoose.push(queryBox[i]);
                    queryHtml += ' <div class="col-xs-4 box-area ' + queryBox[i].boxClass + '">' +
                        '<label for="' + queryBox[i].name + '">' + queryBox[i].lable + '：</label>' +
                        '<input class="text-input" readonly placeholder="' + queryBox[i].placeholder + '" id="' + queryBox[i].name + '" name="' + queryBox[i].name + '"/>' +
                        '</div>'
                } else {
                    queryHtml += ' <div class="col-xs-4 box-area ' + queryBox[i].boxClass + '">' +
                        '<label for="' + queryBox[i].name + '">' + queryBox[i].lable + '：</label>' +
                        '<input class="text-input" placeholder="' + queryBox[i].placeholder + '" id="' + queryBox[i].name + '" name="' + queryBox[i].name + '"/>' +
                        '</div>'
                }

            }
            /**
             * 最后添加查询按扭
             * @type {string}
             */
            queryHtml += '  <div class="col-xs-4 box-area btn-area"><div class="row "><div class="col-xs-5" id="queryBtn"><a>查询</a></div><div class="col-xs-5"><a id="clearBtn">重置</a></div></div></div>'
            $('.query-box >.row').html(queryHtml);
            that.bindEvent();
        }
    }
    ,
    /**
     * 绑定事件
     */
    bindEvent: function () {
        var that = this;
        for (var i in that.bindObj) {

            if (i == 'cityChoose') {

                for (var j = 0; j < that.bindObj[i].length; j++) {
                    var obj = that.bindObj[i][j];
                    var cityPicker = new IIInsomniaCityPicker({
                        target: '#' + obj.name,
                        callback: function (city_id) {
                        }
                    });
                    cityPicker.init();
                }
            }
        }
        /**
         *清静信息
         */
        $('#clearBtn').click(function () {
            that.clearCondition();
        })
        /**
         * 开始查询
         */
        $('#queryBtn').click(function () {
            var that = this;
            InitTable.reload();
        })
    },
    clearCondition: function () {
        $('.text-area input').val("");
        InitTable.reload();
    },
    reload: function () {
        var that = this;
        var options = $('#' + that.setting.id).bootstrapTable('getOptions');
        options.queryParams = function (params) {
            return that.getQueryParams(params);
        }
        $('#' + that.setting.id).bootstrapTable('refresh', options)
    },

    getQueryParams: function (p) {
        return {
            "page.limit": p.limit, //页面大小
            "page.offset": p.offset,
            queryMap: _util.getAjaxParams('.query-box')
        }
    },
    initTable: function (obj) {
        var that = this;
        that.setting.id = obj.id;
        $('#' + obj.id).bootstrapTable({
            url: obj.url, // 请求后台的URL（*）
            method: 'post', // 请求方式（*）
            striped: true, // 是否显示行间隔色
            cache: false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true, // 是否显示分页（*）
            height: obj.height || 500,
            sidePagination: "server", // 服务端请求
            sortable: false, // 是否启用排序
            sortOrder: "asc", // 排序方式
            queryParams: function (param) {
                var obj = that.getQueryParams(param);
                return obj;
            },
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
            columns: obj.columns
        });
    },
    init: function (obj) {
        var that = this;
        if (obj.querybox && obj.querybox.length) {
            that.initQueryBox(obj.querybox);
        }
        if (obj.tableParams) {
            that.initTable(obj.tableParams);
        }
    }
}