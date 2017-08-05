// JavaScript Document  列表引用
//$(document).ready(function () {
//    $(".searchArea:first").ChangeCheckbox({ Range: ".searchArea:first" }); //加载插件
//    $("#btnSearch").click(function () {
//        if (typeof (_GridWhere) != "undefined") {
//            _GridWhere();
//        }
//    })
//    //查询条件展开缩起
//    $(".HTGroupBoxImg").click(function () {
//        var sImgbtnPath = $(this).attr("src");
//        if (sImgbtnPath.indexOf("sh.png") > -1) {
//            $(this).parents("tbody").find(".divCondition").hide();
//            $(this).parents("table").height(1);
//            sImgbtnPath = sImgbtnPath.replace("sh.png", "zk.png");
//            $(this).attr("src", sImgbtnPath);
//        }
//        else {
//            $(this).parents("tbody").find(".divCondition").show();
//            $(this).parents("table").height($(this).parents("table").height());
//            sImgbtnPath = sImgbtnPath.replace("zk.png", "sh.png");
//            $(this).attr("src", sImgbtnPath);
//        }
//        //显示隐藏后执行 ShowHideAfter方法 
//        if (typeof ShowHideAfter != 'undefined'
//			&& ShowHideAfter instanceof Function) {
//            ShowHideAfter();
//        }
//    });
//});

/**
* 编辑操作
* fun 闭包方法体
* GridName 表格ID
* KeyName 主键
*/
function OperEdit(fun, GridName, KeyName) {
    var manager = $("#" + GridName).ligerGetGridManager();
    var row = manager.getSelectedRows();
    if (row.length == 0) { alert('请选择一行！'); return; }
    else if (row.length > 1) { alert('仅能选择一行做修改！'); return; }
    else {
        if (row[0].hasOwnProperty(KeyName))
            fun(row[0][KeyName]);
        else { alert("主键不存在，请输入正确主键！"); return; }
    }
}

/**
* 删除操作
* GridName 表格名称
* Url 删除处理地址
* KeyName 主键
*/
function OperDel(GridName, Url, KeyName) {
    var manager = $("#" + GridName).ligerGetGridManager();
    var row = manager.getSelectedRows();
    if (row.length == 0) { alert('请选择一行！'); return; }
    else {
        var arr = new Array();
        for (var myrow in row) {
            if (row[myrow].hasOwnProperty(KeyName))
                arr.push(row[myrow][KeyName]);
            else { alert("主键不存在，请输入正确主键！"); return; }
        }
        if (confirm("确定要删除选中信息吗？")) {
            $.post(Url, { Keys: arr.join(',') }, function (data) {

            })
        }
    }
}

/**
* 获取选中集合
* GridName 表格名称
* KeyName 表格主键名称
*/
function GetCheckArry(GridName, KeyName) {
    var manager = $("#" + GridName).ligerGetGridManager();
    var row = manager.getSelectedRows();
    var list = "";
    if (row.length == 0) { alert('请选择一行！'); return list; }
    else {
        var arr = new Array();
        for (var myrow in row) {
            if (row[myrow].hasOwnProperty(KeyName)) {
                arr.push(row[myrow][KeyName]);
            }
            else { alert("主键不存在，请输入正确主键！"); return list; }
        }
        list = arr.join(',');
    }
    return list;
}

//页面更新
function GridRefreshAll() {
    $("div[DivType]").each(function () {
        var manager = $(this).ligerGetGridManager();
        manager.loadData();
    })
    $("div[divtype]").each(function () {
        var manager = $(this).ligerGetGridManager();
        manager.loadData();
    })
}

/**
* 指定Grid更新
* GridName 表格名称
*/
function GridRefresh(GridName) {
    var manager = $("#" + GridName).ligerGetGridManager();
    manager.loadData();
}

/**
* 导出操作：Url 导出处理地址
*/
function ExportExcel(Url) {
    var obj = SeachObjExcel();
    window.open(Url + "&" + obj);
}

/**
* 写入表格条件至服务器
* GridName 表格名称
* tblId 包含查询条件的table id
*/
function GridWhere(GridName, tblId) {
    var manager = $("#" + GridName).ligerGetGridManager();
    manager.setOptions({
        parms: { "queryCondition": $.toJSON(SeachObj(tblId)) }
    });
    manager.loadData();
}

/**
* 写入表格条件至服务器
* GridName 表格名称
*/
function GridWhere_(GridName, ParmObj) {
    var manager = $("#" + GridName).ligerGetGridManager();
    manager.setOptions({
        parms: { "queryCondition": $.toJSON(ParmObj) }
    });
    manager.loadData();
}


/**
* 获取当前表格的pageSize
* GridName 表格名称
* ParmObj 自定义参数格式[{ name: this.id, value: this.value}]
*/
function getPageSize(GridName) {
    var manager = $("#" + GridName).ligerGetGridManager();
    return manager.options.pageSize;
}

/**
* 获取当前表格的总条totalSize
* GridName 表格名称
* ParmObj 自定义参数格式[{ name: this.id, value: this.value}]
*/
function getTotalSize(GridName) {
    var manager = $("#" + GridName).ligerGetGridManager();
    return manager.options.total;
}


/**
* 获取当前表格的page
* GridName 表格名称
*/
function getCurrentPage(GridName) {
   var manager = $("#" + GridName).ligerGetGridManager();
   return manager.options.page;
  

}

//查询域自动拼装 for 查询
function SeachObj(tblId) {
    var fieldValueObj = {};
    var SeachWhere = new Object();
    var fieldName = "";

    //构建查询字段的对象
    $(".searchArea #" + tblId + " input[type='text']").each(function () {
        if (this.value != "") {
            fieldName = $(this).attr("fildName");
            //设置查询字段和值
            $(fieldValueObj).attr(fieldName, this.value);
        }
    });

    $(" .searchArea #" + tblId + " input[type='hidden']").each(function () {
        if (this.value != "") {
            fieldName = $(this).attr("fildName");
            //设置查询字段和值
            $(fieldValueObj).attr(fieldName, this.value);
        }
    });

    $(".searchArea #" + tblId + " select").each(function () {
        fieldName = $(this).attr("fildName");
        //设置查询字段和值
        $(fieldValueObj).attr(fieldName, this.value);
    });

    return fieldValueObj;
}

//查询域自动拼装 for 导出Excel
function SeachObjExcel() {
    var arr = [];
    var obj = SeachObj();
    for (var i in obj) {
        arr.push(obj[i].name + "=" + obj[i].value);
    }
    return arr.join('&');
}

//显示Grid表格title信息
function ShowTitle() {
    $(".l-grid-row").each(function () {
        $(this).find("td").each(function () {
            $(this).attr("title", $(this).find("div").html());
        })
    });
}

/**
* 获取浏览器url参数
* paras 参数名称
*/
function request(paras) {
    var url = location.href;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {}
    for (i = 0; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if (typeof (returnValue) == "undefined") {
        return "";
    } else {
        return returnValue;
    }
}




