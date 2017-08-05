$(function(){
    var data=[{name:'北京邮票',value:34},{name:'广东乐佳',value:58},{name:'北京印刷',value:43}];
    var data2=[{name:'证书',data1:80,data2:60,data3:75},{name:'证明',data1:45,data2:32,data3:40}];
    var data3=[
        {name:'广州',data1:50,data2:30},
        {name:'深圳',data1:45,data2:60},
        {name:'珠海',data1:81,data2:42},
        {name:'汕头',data1:50,data2:30},
        {name:'佛山',data1:45,data2:60},
        {name:'韶关',data1:81,data2:42},
        {name:'河源',data1:50,data2:30},
        {name:'梅州',data1:45,data2:60},
        {name:'惠州',data1:81,data2:42},
        {name:'汕尾',data1:50,data2:30},
        {name:'江门',data1:45,data2:60},
        {name:'阳江',data1:81,data2:42},
        {name:'湛江',data1:50,data2:30},
        {name:'茂名',data1:45,data2:60},
        {name:'肇庆',data1:81,data2:42},
        {name:'清远',data1:50,data2:30},
        {name:'东莞',data1:45,data2:60},
        {name:'中山',data1:81,data2:42},
        {name:'揭阳',data1:50,data2:30},
        {name:'云浮',data1:45,data2:60},
   
    ];
    var data4=[
        {name:'1月份',data1:50,data2:30},
        {name:'2月份',data1:81,data2:42},
        {name:'3月份',data1:50,data2:30},
        {name:'4月份',data1:45,data2:60},
        {name:'5月份',data1:81,data2:42},
        {name:'6月份',data1:50,data2:30},
        {name:'7月份',data1:45,data2:60},
        {name:'8月份',data1:81,data2:42},
        {name:'9月份',data1:50,data2:30},
        {name:'10月份',data1:45,data2:60},
        {name:'11月份',data1:81,data2:42},
        {name:'12月份',data1:50,data2:30}

    ];
    loadQyxy('qyxy',data);;
    loadRadar('radar');
    loadQnjh('qnjh',data2);
    loadQsqk('qsqk',data3);

    $(".type span").bind("click",function(){
        $(this).addClass("type-cur");
        $(this).siblings().removeClass("type-cur");
        if($(this).attr("id")=='inArea'){
            loadQsqk('qsqk',data3);

        };
        if($(this).attr("id")=='inTime'){
            loadQsqk('qsqk',data4);
        }
    });
});

//柱状图
function loadQyxy(id,data){
    var xAxis=[];
    for(var i in data){
        xAxis.push(data[i].name);
    }
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:'{b}</br>{c}'
        },
        grid: {
            x:20,
            y:30,
            x2:20,
            y2:30,
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                position:'bottom',
                axisTick:{
                    show:true
                },
                axisLine: {
                    lineStyle: {
                        color: '#a7a7a7'

                    }
                },
                axisLabel:{
                    textStyle:{
                        color:"#c9c9c9"
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'#bfbfbf',
                        type:'solid',
                        opacity:0.2
                    }
                },
                data:xAxis
            }
        ],
        yAxis : [
            {
                type: 'value',
                inverse:false,
                axisLine: {
                    lineStyle: {
                        color: '#a7a7a7'
                    }
                },
                axisTick:{
                    show:true
                },
                axisLabel:{
                    textStyle:{
                        color:"#c9c9c9"
                    }
                },
                splitLine:{
                lineStyle:{
                    color:'#bfbfbf',
                    type:'solid',
                    opacity:0.4
                }
            },
                max:100,
                min:0,
                interval:25
            }
        ],
        series : [
            {
                name:'企业信息',
                type:'bar',
                barWidth: '30%',
                label:{
                  normal:{
                      show:true,
                      position:'top'
                  }
                },
                itemStyle : {
                    normal : {
                        color:'#3aa7f5',
                        //    new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        //    offset: 0, color:'#fdc70a'  // 0% 处的颜色
                        //}, {
                        //    offset: 1, color:'#f5655f' // 100% 处的颜色
                        //}], false),
                        barBorderRadius:[5,5,0,0]
                    }
                },

                data:data
            }
        ]
    };

    var myChart = echarts.init(document.getElementById(id));
    myChart.setOption(option);
}

//雷达图
function loadRadar(id,data){

    var color=["#24a7fd","#f17f6d","#e9f31c"],
    option = {
            tooltip: {
            trigger: 'item',
            backgroundColor : 'rgba(0,0,250,0.2)'
        },
        color:color,
        legend: {
            right:20,
            bottom:50,
            orient:'vartical',
            data:['北京邮票','广东乐佳','北京印刷'],
            textStyle:{
                color:'#999'
            }
        },
        radar: [
            {
                indicator: [
                    {text: '基本信息', max: 100},
                    {text: '服务态度', max: 100},
                    {text: '劣证量', max: 100},
                    {text: '延期率', max: 100},
                    {text: '退换货速度', max: 100}
                ],
                radius: 120,
                center: ['45%','55%'],
                splitArea:{
                    show:false
                },
                splitLine:{
                    lineStyle:{
                        color:'#e1e1e1'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#e1e1e1'
                    }
                },
                name:{
                    textStyle:{
                        color:'#606060'
                    }
                }
            }
          ],
        series: [
            {
                type: 'radar',
                radarIndex: 0,
                symbol:'emptyCircle',
                symbolSize:6,
                data: [
                    {
                        value: [85, 90, 90, 95, 95],
                        name: '北京邮票',
                        areaStyle: {
                            normal: {
                                opacity: 0.3,
                                color:color[0]
                            },
                            emphasis:{
                                opacity: 0.8
                            }
                           },
                        lineStyle:{
                            normal:{
                                color:color[0]
                            }

                        }
                    },
                    {
                        value: [95, 80, 95, 90, 93],
                        name: '广东乐佳',
                        areaStyle: {
                            normal: {
                                opacity: 0.3,
                                color:color[1]
                            },
                            emphasis:{
                                opacity: 0.8
                            }
                        },
                        lineStyle:{
                            normal:{
                                color:color[1]
                            }
                        }
                    },
                    {
                        value: [45, 35, 45, 60, 75],
                        name: '北京印刷',
                        areaStyle: {
                            normal: {
                                opacity: 0.3,
                                color:color[2]
                            },
                            emphasis:{
                                opacity: 0.8
                            }
                        },
                        lineStyle:{
                            normal:{
                                color:color[2]
                            }
                        }
                    }
                ]
            }

        ]
    };

    var myChart = echarts.init(document.getElementById(id));
    myChart.setOption(option);
}

function loadQnjh(id,data){
    var xAix=[];
    var data1=[];//计划印刷量
    var data2=[];
    var data3=[];
    for(var i in data){
        xAix.push(data[i].name);
        data1.push(data[i].data1);
        data2.push(data[i].data2);
        data3.push(data[i].data3);
    }
    option = {
        grid: {
            x:20,
            y:50,
            x2:140,
            y2:30,
            containLabel: true
        },
        legend: {
            right:20,
            bottom:40,
            orient:'vartical',
            data:['计划印刷量','已预订数量','已领取数量'],
            textStyle:{
                color:'#999999'
            },
            show:false,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:['#3aa7f5','#f67550','#69cb25'],
        xAxis : [
            {
                type : 'category',
                position:'bottom',
                axisTick:{
                    show:false
                },
                axisLine: {
                    lineStyle: {
                        color: '#a7a7a7'
                    }
                },
                axisLabel:{
                    textStyle:{
                        color:"#676767"
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:['#bfbfbf'],
                        type:'dotted'
                    }
                },
                data:xAix
            }
        ],
        yAxis : [
            {
                type: 'value',
                inverse:false,
                nameTextStyle:{
                    color:'#c9c9c9'
                },
                axisLine: {
                    lineStyle: {
                        color: '#a7a7a7'
                    }
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    textStyle:{
                        color:"#676767"
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'#bfbfbf',
                        type:'solid',
                        opacity:0.4
                    }
                },
                max:100,
                min:0,
                interval:25
            },
            {
                type: 'value',
                inverse:false,
                position:'right',
                name:'(个)',
                nameLocation:'end',
                nameTextStyle:{
                    color:'#c9c9c9'
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#a7a7a7'
                    }
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    show:false,
                    textStyle:{
                        color:"#c9c9c9"
                    }
                },
                splitLine:{
                    show:false
                },
                max:100,
                min:0,
                interval:25
            }
        ],
        series : [
            {
            name:'计划印刷量',
            type:'bar',
            barWidth: '20',
            barGap:0,
            data:data1
        },
            {
                name:'已预订数量',
                type:'bar',
                barWidth: '20',
                barGap:0,
                data:data2
            },
            {
                name:'已领取数量',
                type:'line',
                data:data2,
                symbol:'emptyCircle'
            }
        ]
    };
    var myChart = echarts.init(document.getElementById(id));
    myChart.setOption(option);
}

function loadQsqk(id,data){
    var xAix=[];//X轴
    var data1=[];//废证
    var data2=[];//劣证
    var color=['#78cd3f','#3ea8ef'];
    for (var i in data){
        xAix.push(data[i].name);
        data1.push(data[i].data1);
        data2.push(data[i].data2);
    }
    option = {
        tooltip: {
            trigger: 'axis'
        },
        color:color,
        legend: {
            data:[{name:'废证',icon:'rect'},{name:'劣证',icon:'rect'}],
            textStyle:{
                color:'#000'
            },
            left:50,
            top:10
        },
        grid: {
            left: 20,
            right: 50,
            bottom: 30,
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                position:'bottom',
                boundaryGap:false,
                axisTick:{
                    show:false
                },
                axisLine: {
                    lineStyle: {
                        color: '#676767'
                    }
                },
                axisLabel:{
                    textStyle:{
                        color:"#676767"
                    }
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#bfbfbf',
                        type:'solid'

                    }
                },
                data:xAix
            }
        ],
        yAxis : [
            {
                type: 'value',
                inverse:false,
                nameTextStyle:{
                    color:'#5cb2f8'
                },
                axisLine: {
                    show:true
                },
                splitLine:{
                    lineStyle:{
                        type:'solid',

                    }
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    textStyle:{
                        color:"#676767"
                    }
                },
                max:100,
                min:0,
                interval:25
            }
        ],
        series: [
            {
                name:'废证',
                type:'line',
                data:data1,
                areaStyle:{
                    normal:{
                        color:color[0],
                        opacity:0.5
                    }
                }


            },
            {
                name:'劣证',
                type:'line',
                data:data2,
                areaStyle:{
                    normal:{
                        color:color[1],
                        opacity:0.5
                    }
                }
            }

        ]
    };
    var myChart = echarts.init(document.getElementById(id));
    myChart.setOption(option);
}