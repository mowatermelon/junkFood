(function () {
    var params = {

        myChart: null//指针echart区域
    };
    var Index = {
        init: function () {
            params.myChart = echarts.init(document.getElementById('main1'));
            this.setPieView();//设置头部数据
            //this.getNodeRroup(false);//加载echart表格事件
            this.initSystemInfo();//初始化系统信息
            this.initScanNodeView();//设置echart仪表盘数据
            this.bindEvent();//绑定点击事件
        },
        initSystemInfo: function () {
            _util.ajaxData("/GDDataCenter/DWPT_loadMapData", {}, function (str) {
            	if(sessionStorage){
            		sessionStorage.setItem('systemInfo', JSON.stringify(str));
            	}
                var groups = [], paramData = [];
                for (var i = 0; i < str.length; i++) {
                    groups.push(str[i].groupName);
                }
                groups = groups.union();
                for (var i = 0; i < groups.length; i++) {
                    paramData.push(parseGroupData(groups[i]));
                }
            	var value = template($('#system-template').html(), {// 设置分组
					data : paramData,
				});
				$('.system-box').html(value);
				$('.box-inner').click(function(){
					var groupName = $(this).attr("data-name");
                    location.href="system.jsp?groupName="+groupName;
				})

                function parseGroupData(groupName) {
                    var returnObj = {
                        groupName: groupName,
                        breakNet: 0,
                        highCpu: 0,
                        highMem: 0,
                        highIo: 0
                    };
                    for (var i = 0; i < str.length; i++) {
                        if (str[i].groupName == groupName) {
                            str[i].netStatus == 1 ? returnObj.breakNet++ : returnObj.breakNet;
                            str[i].cpu > 0.6 ? returnObj.highCpu++ : returnObj.highCpu;
                            str[i].io > 0.6 ? returnObj.highIo++ : returnObj.highIo;
                            (str[i].memused / str[i].memtotal) > 0.6 ? returnObj.highMem++ : returnObj.highMem;
                        }
                    }

                    return returnObj;
                }
            })


        },
        setPieView: function () {
            _util.ajaxData("/DataCenter/index_loadSummary2", {}, function (data) {
                var circles = JSON.parse(data.resTypePie), resTotal = data.resTotal,resCapacity=data.resCapacity;
                $('#ResTotal').text(resTotal||0);
                $('#ResCapacity').text(resCapacity||0);       
                if (circles && circles.length) {
                    var total = Number(resTotal);
                    for (var i = 0; i < circles.length; i++) {
                        var color = $('#' + circles[i].NAME).attr("data-color");
                        drawCircle({
                            id: circles[i].NAME,
                            color: color,
                            angle: circles[i].VALUE / total,
                            lineWidth: 7
                        });
                    }
                }

            })
        },
        bindEvent: function () {
            $('.box-title .glyphicon-refresh').click(function () {

            })
        },
        
        //用来解析echart表格数据
        parseEchart: function (data) {
            var returnObj = {
                lenged: [],
                data: []
            };
            returnObj.lenged = data.groupName;
            if (returnObj.lenged && returnObj.lenged.length) {
                for (var i = 0; i < returnObj.lenged.length; i++) {
                    var node = data.nodelist[i] || [];

                    if (node && node.length) {
                        returnObj.data.push(node[0].y || 0);
                    } else {
                        returnObj.data.push(0);
                    }
                }

                return returnObj;
            }
        },
        initScanNodeView: function () {
            $.ajax({
                url: '/DFManager/dfs',
                data: {
                    request: "indexExamination",
                    service: "DataFusionService",
                    version: "1.0.0",
                    format: "json",
                    type: "PhysicalExamination"
                },
                error: function () {// 请求失败处理函数
                    var d = dialog({
                        title: '提示',
                        content: '体检出错',
                        okValue: '确定'
                    });
                    d.width(320).show();
                },
                success: function (data) {
                    var error_node = data.ErrorNode.length;
                    var error_task = data.ErrorExecuteTask;
                    var all_task = data.AllExecuteTask;
                    var cdate = data.CDate;// 记录体检实时的时间
                    var url = "<%=basePath %>/redirect_dfsManage?callBack=" + "<%=path %>/modular/log/taskExecuteLog.jsp?state=Error&cdate=" + cdate;
                    $("#errorTaskLog").attr("href", "javascript:;");
                    $("#errorTaskLog").attr("onclick", "top.location.href='" + url + "'");

                    var percent = 100;
                    var n = 100;
                    var err = parseInt(error_task);
                    var total = parseInt(all_task);
                    if (all_task > 0) {
                        percent = Math.ceil((1 - err / total) * 100);
                    }
                    var main1option = {
                        tooltip: {
                            formatter: "{a} <br/>{b} : {c}%"
                        },

                        series: [{
                            name: '业务指标',
                            type: 'gauge',
                            splitNumber: 10, // 分割段数，默认为5
                            axisLine: { // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: [[0.2, '#ff4500'], [0.8, '#48b'],
                                        [1, '#228b22']],
                                    width: 8
                                }
                            },
                            axisTick: { // 坐标轴小标记
                                splitNumber: 10, // 每份split细分多少段
                                length: 12, // 属性length控制线长
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: 'auto'
                                }
                            },
                            axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
                                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    color: 'auto'
                                }
                            },
                            splitLine: { // 分隔线
                                show: true, // 默认显示，属性show控制显示与否
                                length: 30, // 属性length控制线长
                                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                                    color: 'auto'
                                }
                            },
                            pointer: {
                                width: 5
                            },
                            title: {
                                show: true,
                                offsetCenter: [0, '-40%'], // x, y，单位px
                                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder'
                                }
                            },
                            detail: {
                                formatter: '{value}%',
                                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    color: 'auto',
                                    fontWeight: 'bolder'
                                }
                            },
                            data: [{
                                value: percent,
                                name: '健康率'
                            }]
                        }]
                    };

                    params.myChart.setOption(main1option);

                },
                dataType: "json"
            });
        }
    }


    Index.init();
})()
