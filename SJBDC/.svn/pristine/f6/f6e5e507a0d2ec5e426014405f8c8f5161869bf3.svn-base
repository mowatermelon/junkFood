var falg = false, isDeth = false;
(function () {
    var _MapDeal = {
        cityCode: "",
        cityData: [],
        scatter: [],
        init: function () {
            //加载一些地图数据
            _util.ajaxData("/SJBDC/sjjhController/parseData.do", {}, function (data) {
                _MapDeal.cityData = data;
                _util.ajaxData("/SJBDC/commonController/queryList.do", {//加载接入情况
                    queryId: "SjjhQueryMapper.queryJRSJ"
                }, function (d) {
                    _MapDeal.scatter = d;
                    _MapDeal.loadEchart();
                })
            })
            _MapDeal.initPanel();// 初始化左上角数据面板的数据
            _MapDeal.initTables();// 初始化表格
            _MapDeal.initJrqk();//初始化接入情况数据

        },
        initJrqk: function () {
            _util.ajaxData("/SJBDC/commonController/queryList.do", {//加载接入情况
                queryId: "SjjhQueryMapper.queryPercenForSJJH",
                queryMap: {
                    cityCode: _MapDeal.cityCode
                }
            }, function (d) {
                var percent = (d[0].VALUE * 100 / d[1].VALUE).toFixed(2);
                $('.msg-box').html(' <a><span>接入率：<b>' + percent + '%</b></span><span>已接入：<b>' + d[0].VALUE + "/" + d[1].VALUE + '</b></span></a>')

            })
        },
        /**
         * 初始化一些
         */
        initPanel: function () {
            var that = this;
            var dateStr = new Date().format("yyyy-MM-dd");
            _util.ajaxData('/SJBDC/commonController/queryList.do', {
                queryId: "SjjhQueryMapper.queryPanel",
                queryMap: {
                    cityCode: _MapDeal.cityCode,
                    startDate: dateStr,
                    endDate: dateStr
                }
            }, function (data) {
                if (data && data.length) {
                    that.createPanel(data);
                }
            })
        },
        /***
         *

         *初始化内容面板
         */
        createPanel: function (data) {
            var that = this;
            $(".panel-box").html("");
            for (var i = 0; i < data.length; i++) {
                var html = "";
                html += '<div class="data-box" data-type="' + i + '"> <div class="box-title">' + (i == 0 ? "今日汇交" : "今日上报") + '</div> <div class="data-inner-box"> <div class="cell-block"> <b>' + (data[i].ZS || 0) + '</b> <span> ' + (i == 0 ? "汇交" : "上报") + '总数：</span> </div> <div class="cell-block"> <b>' + (data[i].TOTAL || 0) + '</b> <span>接入单位</span> </div> <div class="cell-block"> <b>' + (data[i].CGSL || 0 ) + '</b> <span>正确总数</span> </div> <div class="cell-block"> <b>' + (data[i].YCSL || 0) + '</b> <span>异常总数</span> </div> </div> </div>'
                $(".panel-box").append(html);
            }
            var obj = {
                startDate: new Date().format("yyyy-MM-dd"),
                endDate: new Date().format("yyyy-MM-dd"),
                cityCode: that.cityCode
            }
            $(".data-box").click(function () {
                var type = $(this).attr("data-type");
                if (type == 0) {//点击汇交模块
                    top.goUrl(2, obj);
                } else {//点击上报模块
                    top.goUrl(4, obj);
                }
            })
        },

        /**
         * 初始化地图echart
         */
        loadEchart: function () {
            $('#main').height(_MapDeal.getHeight('map'));
            var myChart = echarts.init(document.getElementById('main'));
            var mapOption = {
                legend: {
                    show: false,
                },
                geo: {
                    map: 'gd',

                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: "#fff"
                            }
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#337AB7',
                            borderColor: 'white',
                            borderWidth: 1,
                            shadowColor: "#aaa",
                            shadowBlur: 50,
                            shadowOffsetX: 20,
                            shadowOffsetY: 20
                        },
                        emphasis: {
                            areaColor: 'white',

                        }
                    }
                },
                series: []
            };

            myChart.setOption(mapOption);


            function mapArea(type) {
                var resultA = [], resultData = _MapDeal.cityData;
                if (type) {
                    resultData = getData(type);
                }
                for (var i = 0; i < resultData.length; i++) {
                    resultA.push({
                        name: resultData[i].QXMC,
                        cityCode: resultData[i].QXDM,
                        itemStyle: {
                            normal: {
                                areaColor: 'rgba(88,167,206,1)',
                                borderColor: '#fff',
                                borderWidth: 1,

                            },
                            emphasis: {
                                areaColor: '#94afc6',
                            }
                        }
                    })
                }

                return resultA;
            }

            function getData(type) {
                var data = _MapDeal.cityData;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].QXMC == type) {
                        return data[i].child;
                    }
                }
                return [];
            }


            function getSetter(type) {

                var resultA = [];
                var scatter = _MapDeal.scatter;
                for (var i = 0; i < scatter.length; i++) {

                    if (type && scatter[i].PQXMC != type) {
                        continue;
                    }
                    var localA = [];
                    localA.push(scatter[i].X);
                    localA.push(scatter[i].Y);
                    resultA.push({
                        name: scatter[i].QXMC,
                        value: localA
                    });

                }
                return resultA;


            }

            function labelData(type) {
                var resultA = [], resultData = _MapDeal.cityData;
                if (type) {
                    resultData = getData(type);
                }
                for (var i = 0; i < resultData.length; i++) {
                    var localA = [];
                    localA.push(resultData[i].X);
                    localA.push(resultData[i].Y);
                    resultA.push({
                        "name": resultData[i].QXMC,
                        "value": localA

                    })
                }

                return resultA;
            }

            var mapOption1 = {

                tooltip: {
                    trigger: 'item',
                    formatter: function (p) {
                        if (!falg)
                            return _MapDeal.parseTooltip(p.data.name);
                    }
                },
                geo: {
                    map: '广东',
                    roam: false,
                    layoutCenter: "left",
                    itemStyle: {
                        normal: {
                            shadowColor: "#ccc",
                            shadowBlur: 5,
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        },

                    }
                },

                series: [
                    {
                        type: 'map',
                        mapType: '广东',
                        data: mapArea(),
                        itemStyle: {
                            normal: {label: {show: false}},
                            emphasis: {label: {show: false}}
                        },
                    },
                    {
                        "name": "广东",
                        "type": "effectScatter",
                        "coordinateSystem": "geo",
                        "zlevel": 99,
                        "label": {
                            "normal": {
                                "show": true,
                                "position": "top",
                                "formatter": "{b}",
                                textStyle: {
                                    color: '#fff',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: 12,
                                },
                            }
                        },
                        "symbolSize": .1,
                        "data": labelData()
                    },
                    {
                        "name": "清远市",
                        "type": "scatter",
                        "coordinateSystem": "geo",
                        "zlevel": 2,
                        "symbol": 'path://M186.005609 1022.449928 343.41656 1000.132612 282.334101 576.66415C312.281611 543.199859 368.654012 491.649604 433.860398 489.159135 568.341054 484.019404 698.747988 492.675915 823.25509 391.663053 839.119132 375.803682 855.687231 355.326492 873.173056 329.404832 903.260679 284.847271 941.313595 214.294491 974.791894 106.224717 894.328615 129.718959 830.283981 144.268294 783.310677 152.031599 755.693675 156.607383 732.21111 160.780349 711.080071 162.609962 603.588253 171.933167 582.860032 138.749097 509.038001 78.620559 478.312876 53.5851 439.109882 37.035682 393.921822 23.418083 316.362337 0.034762 201.276515-13.584005 42.702646 21.061886L186.005609 1022.449928 186.005609 1022.449928Z',
                        "symbolSize": 20,
                        itemStyle: {
                            normal: {
                                color: "red",
                            }
                        },
                        "data": getSetter(),
                    }]
            };
            $('#main1').height($('#main').height());
            var myChart1 = echarts.init(document.getElementById('main1'));
            myChart1.setOption(mapOption1);

            myChart1.on('click', function (param) {
                if (isDeth) {
                    return;
                }

                var cityCode = param.data.cityCode;
                var mapType = param.name;
                $('.goBack_btn').show();
                isDeth = true;
                $.get('/SJBDC/view/Script/plugins/echarts/' + cityCode + '.json', function (map) {
                    echarts.registerMap(mapType, map);
                    $.get('/SJBDC/view/Script/plugins/echarts/' + cityCode + '_single.json', function (map) {
                        echarts.registerMap(mapType + "_single", map);
                        mapOption.geo.map = mapType + "_single";
                        myChart.setOption(mapOption);

                        mapOption1.tooltip = {
                            trigger: 'item',
                        };
                        mapOption1.series[0].mapType = mapType;
                        mapOption1.series[1].name = mapType;
                        mapOption1.series[0].data = mapArea(mapType);
                        mapOption1.series[1].data = labelData(mapType);
                        mapOption1.series[2].data = getSetter(mapType);
                        mapOption1.geo.map = mapType;
                        myChart1.setOption(mapOption1, true);

                        _MapDeal.cityCode = cityCode;
                        _MapDeal.initPanel();
                        _MapDeal.initJrqk();
                        _MapDeal.refreshTable();
                    });
                });


            });


        },
        refreshTable: function () {
            var options = $('#resultList').bootstrapTable('getOptions');
            options.queryParams = function () {
                return _MapDeal.getQueryParams();
            }
            $('#resultList').bootstrapTable('refresh', options)
        },
        getQueryParams: function () {

            return {
                "queryId": "SjjhQueryMapper.queryIndexTable",
                queryMap: {
                    "cityCode": _MapDeal.cityCode
                }
            }// 传递参数（*）
        },
        /**
         * 初始化表格数据
         */
        initTables: function () {
            var that = this;
            $('#resultList').bootstrapTable({
                url: '/SJBDC/commonController/queryList.do',		 //请求后台的URL（*）
                method: 'post',					  //请求方式（*）
                striped: true,					  //是否显示行间隔色
                cache: false,					   //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
                pagination: false,				   //是否显示分页（*）
                height: that.getHeight('table'),
                sortable: false,					 //是否启用排序
                sortOrder: "asc",				   //排序方式
                undefinedText: "",
                queryParams: that.getQueryParams,
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
                onLoadSuccess: function (data) {
                    var cityObj = {
                        QXMC: citySetting.getCity(that.cityCode, 'name') || citySetting.province,
                        HJZS: 0,
                        HJYCSL: 0,
                        SBZS: 0,
                        SBYCSL: 0,
                        SBWFKZS: 0

                    }
                    if (data && data.length) {
                        for (var i = 0; i < data.length; i++) {
                            cityObj.HJZS += data[i].HJZS;
                            cityObj.HJYCSL += data[i].HJYCSL;
                            cityObj.SBZS += data[i].SBZS;
                            cityObj.SBYCSL += data[i].SBYCSL;
                            cityObj.SBWFKZS += data[i].SBWFKZS;
                        }
                        $('#resultList').bootstrapTable('insertRow', {
                            index: 0,
                            row: cityObj
                        });
                    }
                },
                columns: [{
                    field: 'QXMC',
                    title: '区域',
                    align: 'center',

                }, {
                    field: 'HJZS',
                    title: '汇交总数',
                    align: 'center',

                }, {
                    field: 'HJYCSL',
                    title: '汇交异常数',
                    align: 'center',

                }, {
                    title: '上报总数',
                    align: 'center',
                    field: 'SBZS',
                }, {
                    title: '上报异常数',
                    align: 'center',
                    field: 'SBYCSL',

                }, {
                    title: '上报未反馈',
                    align: 'center',
                    field: 'SBWFKZS'
                }
                ]
            });
        },
        parseTooltip: function (p) {

        },
        getHeight: function (type) {
            var totalHeight = $(window).height();
            if (type == 'map') {
                return totalHeight;
            } else if (type == "table") {
                return totalHeight * 0.3;

            }
        }
    };
    _MapDeal.init();

})();
