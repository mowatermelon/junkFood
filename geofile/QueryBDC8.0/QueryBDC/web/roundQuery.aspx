<%@ Page Language="C#" AutoEventWireup="true" CodeFile="roundQuery.aspx.cs" Inherits="_Round" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <link href="../Styles/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
    <script src="../Scripts/require.js" type="text/javascript"></script>
    <script src="../Scripts/jquery-1.9.0.min.js" type="text/javascript"></script>
    <script type="text/javascript">

        var myChart;
        var eCharts;
        var option;
        var indexdata = {category:['首次登记', '转移登记', '变更登记', '注销登记', '更正登记', '异议登记', '预告登记', '查封登记', '其它登记'],num:[]};
        $.ajax({
            type: "post",
            url: 'roundQuery.aspx?Action=GetData',
            async: false,
            dataType: "json",
            success: function (result) {
                if (result) {
                    for(var i=0;i<result.length;i++)
                        {
                        console.log(result);
                        var res = [];
                        var len = 0;
                        for(var n=0,size=indexdata.category.length;n<size;n++) {
                            indexdata.num[i]=result[i];
                            console.log(indexdata.category[i]+indexdata.num[i]);
                        }
                        } 
                }
            },
            error: function (errorMsg) {
                alert(errorMsg);
            }
        });

        $(function () {
            load();

            $("#CZ").on('click', function () {
                $("#sDJDL").val("");
                $.ligerDialog.alert('重新查询成功', '查询', 'success');
            });

        });

        function load(){
            require.config({
                //baseUrl: "../Scripts/",
                paths: {
                    //"jquery":"../Scripts/jquery-1.9.0.min",
                    "echarts": "../Scripts/echarts",
                    "base": "../Styles/js/core/base",
                    "ligerGrid": "../Styles/js/plugins/ligerGrid",
                    "ligerDialog": "../Styles/js/plugins/ligerDialog"
                }
            });

            require(
            [
                'echarts',
                'base',
                'ligerGrid',
                'ligerDialog'
            //'echarts/chart/line'
            ], DrawEChart //异步加载的回调函数绘制图表  
            );
        }
        function DrawEChart(ec) {
            eCharts = ec;
            myChart = eCharts.init(document.getElementById("echart"), 'Puerto Rico');
            myChart.showLoading({
                text: "图表数据正在努力加载...",
                effect: 'whirling'
            });

            option = {
                title: {
                    text: '首次业务登记查询',
                    subtext: '中天吉奥武汉分公司',
                    sublink: "http://www.ztgeo.com.cn/",
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)",
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    orient: 'vertical',
                    data:indexdata.category,
                    left:'left',
                    //data: ['首次登记', '转移登记', '变更登记', '注销登记', '更正登记', '异议登记', '预告登记', '查封登记', '其它登记']
                },
                //首次登记、转移登记、变更登记、注销登记、更正登记、异议登记、预告登记、查封登记、其它登记
                toolbox: {
		            show : false,
		            feature : {
		                mark : true,
		                dataView : {readOnly: false},
		                restore : true,
		                saveAsImage : true
		            	}
        			},
        		calculable : true,
                series: [
                        {
                            name: '登记种类',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                             data: (function(){
                                var res = [];
                                var len = 0;
                                for(var i=0,size=indexdata.category.length;i<size;i++) {
                                res.push({
	                                name: indexdata.category[i],
	                                value: indexdata.num[i]
                                	});
                                }
                                return res;
                                })(),
                           
                            itemStyle: {
                                normal: {
                                   label:{ 
                                       show: true, 
                                       formatter: '{b} : {c} ({d}%)' 
                                        }, 
                                   labelLine :{show:true},
                                    color: function (params) {
                                        var list = ["#1ABC9C", "#2ECC71", "#3498DB", "#34495E", "#E67E22", "#95A5A6", "#F1C40F", "#2980B9", "#16A005"];
                                        return list[params.dataIndex];
                                    }
                                },
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                        ]
            };

            myChart.setOption(option); //先把可选项注入myChart中  
            myChart.hideLoading();
            //getChartData(); //aja后台交互   */

            }
        


    </script>
    
    
</head>
<body  style="padding:4px" runat="server" > 
<div  runat="server" > 
<form  runat="server" > 

   <div runat="server">  
    <ul runat="server" class="l-panel-search-right">       
        <li class="l-panel-search-item-right"  runat="server" >
            <!--<input type="button" class="l-button-right" id="CX" value="查询"/>-->
            <asp:Button  class="l-button-right" ID="CZ" runat="server" Text="重新查询"/>
        </li>
    </ul>             
</div>
</form>
</div>

   <div class="l-clear"></div>

    <div id="echart" style="width:1500px;height:700px"></div>  
</body>
</html>


