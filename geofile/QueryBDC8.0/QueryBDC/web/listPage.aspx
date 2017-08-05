<%@ Page Language="C#" AutoEventWireup="true" CodeFile="listPage.aspx.cs" Inherits="_List" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <link href="../Styles/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
    <script src="../Scripts/jquery-1.9.0.min.js" type="text/javascript"></script>
    <script src="../Styles/js/core/base.js" type="text/javascript"></script>
    <script src="../Styles/js/plugins/ligerGrid.js" type="text/javascript"></script>
    <script src="../Styles/js/plugins/ligerDrag.js" type="text/javascript"></script>
    <script src="../Styles/js/plugins/ligerResizable.js" type="text/javascript"></script>
    <script src="../Styles/js/plugins/ligerDialog.js" type="text/javascript"></script>

    <script type="text/javascript">
        var manager;
        $(function () {

            manager = $("#maingrid").ligerGrid({
                columns: [
	                    { display: '状态', name: 'LIFECYCLE', width: 85, align: 'center' },
	                    { display: '受理编号', name: 'SLBH', width: 140, align: 'center' },
	                    { display: '权利人名称', name: 'QLRMC', width: 130, align: 'center' },
	                    { display: '权利人证件号', name: 'ZJHM', width: 160, align: 'center' },
	                    { display: '坐落', name: 'ZL', width: 200, align: 'center' },
	                    { display: '登记类型', name: 'DJLX', width: 150, align: 'center' },
	                    { display: '不动产证书号', name: 'BDCZH', width: 280, align: 'center' },
	                    { display: '不动产单元号', name: 'BDCDYH', width: 150, align: 'center' },
	                    { display: '登簿日期', name: 'DJRQ', width: 150, align: 'center' },
	                    { display: '归档号', name: 'GDH', width: 150, align: 'center' },
	                    ],
                width: '100%',
                //frozen: false,
                allowHideColumn: false,
                rownumbers: true,
                colDraggable: true,                       //是否允许表头拖拽
                rowDraggable: true,                         //是否允许行拖拽
                pageSize: 20,                           //每页默认的结果数
                alternatingRow: true,           //奇偶行效果
                showTableToggleBtn: true,              //是否显示'显示隐藏Grid'按钮 
                switchPageSizeApplyComboBox: false,     //切换每页记录数是否应用ligerComboBox
                allowAdjustColWidth: true,              //是否允许调整列宽 
                pageSizeOptions: [20, 50, 100],  //可选择设定的每页结果数
                height: '650px',
                rownumbers: true,   //是否显示行序号
                dataAction: 'server',   //服务器排序
                usePager: true,        //本地分页
                //alternatingRow: false,
                where: null,                           //数据过滤查询函数,(参数一 data item，参数二 data item index)
                tree: { columnName: 'name' },
                checkbox: true,                       //是否显示复选框
                align: 'center',
                onBeforeShowData: function () {
                    beforeTime = new Date().getTime();
                },
                onAfterShowdata: function () {
                    var diffValue = new Date().getTime() - beforeTime;
                    diffValue = diffValue / 1000;

                    $("#hiddenP").html("渲染时间:" + diffValue + "秒，");
                },
                onCheckRow: function (checked, data, rowindex, rowobj) {
                    var Arrydata = "";
                    Arrydata += "<br/>状态:" + data.LIFECYCLE + ",<br/>";
                    Arrydata += "受理编号:" + data.SLBH + ",<br/>";
                    Arrydata += "权利人名称:" + data.QLRMC + ",<br/>";
                    Arrydata += "权利人证件号:" + data.ZJHM + ",<br/>";
                    Arrydata += "坐落：" + data.ZL + ",<br/>";
                    Arrydata += "登记类型：" + data.DJLX + ",<br/>";
                    Arrydata += "不动产证书号：<br/>" + data.BDCZH + ",<br/>";
                    Arrydata += "不动产单元号：<br/>" + data.BDCDYH + ",<br/>";
                    Arrydata += "登簿日期：" + data.DJRQ + ",<br/>";
                    Arrydata += "归档号：" + data.GDH + ",<br/>";
                    //LIFECYCLE,SLBH ,QLRMC,ZJHM ,ZL,DJLX, BDCZH, BDCDYH, DJRQ, GDH
                    //状态,受理编号,权利人名称,权利人证件号,坐落,登记类型,不动产证书号,不动产单元号,登簿日期,归档号
                    checked && $.ligerDialog.alert('选择的是' + Arrydata);
               }

            }
	        );

            $("#CX").bind('click', function () {
                //alert(url: 'client.aspx?Action=GetData&DDJDL=' + $("#strDJDL").val() + '&SLBH=' + $("#sSLBH").val() + '&QLRMC=' + $("#sQLRMC").val() + '&GDH=' + $("#sGDH").val() + '&BDCZH=' + $("#sBDCZH").val() + '&ZL=' + $("#sZL").val());
                //DJDL,QLRMC,GDH,BDCZH,ZL,SLBH
                manager = $("#maingrid").ligerGrid({//DJDL,QLRMC,GDH,BDCZH,ZL,SLBH
                    url: 'listPage.aspx?Action=GetData&DDJDL=' + $("#strDJDL").val() + '&SLBH=' + $("#sSLBH").val() + '&QLRMC=' + $("#sQLRMC").val() + '&GDH=' + $("#sGDH").val() + '&BDCZH=' + $("#sBDCZH").val() + '&ZL=' + $("#sZL").val(),
                    onError: function () {              //错误事件
                        $.ligerDialog.alert('查询失败', '失败', 'error');
                    },
                    onSuccess: function () {              //成功获取服务器数据的事件
                        $.ligerDialog.alert('查询成功', '成功', 'success');
                    }
                });
            });

            $("#CZ").on('click', function () {
                $("#sDJDL").val("");
                $("#sQLRMC").val("");
                $("#sGDH").val("");
                $("#sBDCZH").val("");
                $("#sZL").val("");
                $("#sSLBH").val("");
                $.ligerDialog.alert('重置成功', '重置', 'success');
            });

        });


        function getSelected() {
            var row = manager.getSelectedRow();
            if (!row) { alert('请选择行'); return; }
            for (var i = 1; i < manager.length; i++) {
                console.log(JSON.stringify(i));

            }
            alert(JSON.stringify(row));
        } 
        
    </script>
    
    
</head>
<body  style="padding:4px" runat="server" > 
<div  runat="server" > 
<form  runat="server" > 

   <div runat="server">
     <ul class="l-panel-search" runat="server" >
        <li class="l-panel-search-item" runat="server" ><p>登记大类:</p><input type="text" ID="strDJDL" class="text"/></li>
        <li class="l-panel-search-item"  runat="server" ><p>权利人名称:</p><input type="text" ID="sQLRMC"  runat="server"  class="text"/></li>
        <li class="l-panel-search-item"  runat="server" ><p>归&nbsp;档&nbsp;号:</p><input type="text" ID="sGDH"  runat="server"  class="text"/></li>
        <li class="l-panel-search-item"  runat="server" ><p>不动产证号:</p><input type="text" ID="sBDCZH"  runat="server"  class="text"/></li>
        <li class="l-panel-search-item"  runat="server" ><p>坐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;落:</p><input type="text" ID="sZL"  runat="server"  class="text"/></li>
        <li class="l-panel-search-item"  runat="server" ><p>受理编号:</p><input type="text" ID="sSLBH"  runat="server" class="text"/></li>
    </ul>
    
    <ul runat="server" class="l-panel-search-right">       
        <li class="l-panel-search-item-right"  runat="server" >
            <input type="button" class="l-button-right" id="CX" value="查询"/>
            <!--<input type="button" class="l-button-right" id="CZ" value="重置"/>-->
            <asp:Button  class="l-button-right" ID="CZ" runat="server" Text="重置"/>
              <p>渲染结果：<i id="hiddenP" runat="server" ></i></p>
        </li>
    </ul>             
</div>
</form>
</div>

   <div class="l-clear"></div>

    <div id="maingrid" runat="server"  ></div>  
</body>
</html>