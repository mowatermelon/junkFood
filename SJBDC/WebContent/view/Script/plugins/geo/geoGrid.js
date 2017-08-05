/*
*  功能:   Grid插件
*  参数:   
*  返回值：无
*  作者：caijian
*  日期：2015.06.04
*  版本：1.0
*/
(function ($) {
    //查询SQL
    var SQL = "";
    //参数
    var OPTIONS = {};
    //GridManager
    var GRIDMANAGER = {};

    //加载插件
    $.fn.GeoGrid = function (options) {
        return $.ligerui.run.call(this, "ligerGeoGrid", arguments);
    };

    //添加默认参数
    $.ligerDefaults.GeoGrid = {
        id: "geoGrid" + escape(Math.random()),
        gridXML: null,
        backgroundcolor: "#FFF",
        //添加行按钮ID(用于绑定添加事件)
        addRowId: "btnAdd_" + escape(Math.random()),
        //删除行按钮ID(用于绑定添加事件)
        delRowId: "btnDel_" + escape(Math.random()),
        //保存行按钮ID(用于绑定添加事件)
        saveRowId: "btnSave_" + escape(Math.random()),
        //导入按钮ID(用于绑定添加事件)
        importId: "btnImport_" + escape(Math.random()),
        //查询条件
        queryCondition: {},

        ligerGridOption: {
            width: "auto",
            height: "auto",
            usePager: true,
            pageSizeOptions: [20, 50, 100, 200],
            enabledSort: false,
            rownumbers: true,
            pageSize: 20,
            rowHeight: 28,
            headerRowHeight: 28,
            enabledEdit: true,
            checkbox: false,
            onDblClickRow: null,
            onSelectRow: null
        }
    };

    $.fn.ligerGetGeoGridManager = function () {
        return $.ligerui.run.call(this, "ligerGetGeoGridManager", arguments);
    };

    $.ligerMethos.GeoGrid = {};

    $.ligerui.controls.GeoGrid = function (element, options) {
        $.ligerui.controls.GeoGrid.base.constructor.call(this, element, options);
    };

    $.ligerui.controls.GeoGrid.ligerExtend($.ligerui.core.UIComponent, {
        __getType: function () {
            return 'GeoGrid';
        },
        __idPrev: function () {
            return 'GeoGrid';
        },
        _extendMethods: function () {
            return $.ligerMethos.GeoGrid;
        },
        _render: function () {
            var othis = this
            //保存当前的对象
            var _self = $(this);
            //合并参数
            var opts = othis.options;
            OPTIONS = opts;

            if (opts.backgroundcolor.indexOf("#") == 0) {
                opts.backgroundcolor = opts.backgroundcolor.substr(1, opts.backgroundcolor.length);
            }

            var arrHtml = [];
            //1.ajax获取数据源（）
            //获取Grid节点
            var $Grid = $(opts.gridXML);;
            //获取sql节点
            var $sql = $Grid.find("sql");
            //SQL语句
            var sSql = $sql.text();
            SQL = $sql.text();
            //表名
            var sTableName = $sql.attr("tablename");
            //主键
            var sKeyvalue = $sql.attr("keyvalue");

            //XML配置字段的所有类型
            var aType = [];
            //存储Grid列名和数据库的对应关系
            var objFieldMap = {};

            //2.获取columns节点
            var $columns = $Grid.find("column");
            //循环$column构建Grid表头
            var aColumn = [];
            var oType = {};
            $columns.each(function (index, obj) {
                aColumn[index] = othis.GetColumnParam(this, oType, objFieldMap);
            });

            //将类型对象保存到类型数组中
            aType[0] = oType;
            //添加列头配置
            opts.ligerGridOption.columns = aColumn;
            //添加取数URL地址
            opts.ligerGridOption.url = opts.ligerGridOption.url + "?action=" + escape("GETDATA") + "&ran=" + escape(Math.random());
            //添加数据过滤参数
            opts.ligerGridOption.parms = { "sql": sSql, "queryCondition": opts.queryCondition };

            //直接将ligerGrid所需参数收集完之后，丢给ligerGrid自己去解析，避免在此插件中处理
            GRIDMANAGER = gridManager = $("#" + opts.id).ligerGrid(opts.ligerGridOption);

            //绑定添加行事件
            $("#" + opts.addRowId).unbind('click').bind("click", function () {
                othis.addNewRow();
            });

            //绑定删除行事件
            $("#" + opts.delRowId).unbind('click').bind("click", function () {
                othis.deleteRow();
            });

            //绑定导入事件
            $("#" + opts.importId).unbind('click').bind("click", function () {
                var url = "ImportGeoGridExcel.aspx";
                var data = opts.gridXML;
                var name = "导入Excel";
                othis.openImportWindow(url, data, name, othis);
            });

            //绑定保存事件
            $("#" + opts.saveRowId).unbind('click').click(function () {
                //结束编辑才能获取修改的值
                gridManager.endEdit();

                if (sTableName == "" || sTableName == undefined || sKeyvalue == "" || sKeyvalue == undefined) {
                    alert("保存失败，请联系管理员检查配置！");
                } else {
                    //将数据保存到此表中
                    var sSaveTableName = sTableName;
                    //数据表对应的主键名称
                    var sSaveKeyvalue = sKeyvalue;
                    //获取新增数据
                    var aAddData = [];
                    //获取删除数据
                    var aDelData = [];
                    //获取修改数据
                    var aUpdateData = [];

                    //.getAdded()返回数组对象，为空时返回[]
                    aAddData = gridManager.getAdded();
                    othis.ConvertField(objFieldMap, aAddData);
                    //.getDeleted()返回数组对象，为空时返回undefined
                    aDelData = gridManager.getDeleted();
                    othis.ConvertField(objFieldMap, aDelData);
                    //.getUpdated()返回数组对象，为空时返回[]
                    aUpdateData = gridManager.getUpdated();
                    othis.ConvertField(objFieldMap, aUpdateData);

                    //如果当前未修改过任何内容，则提示并跳过保存
                    if (aAddData.length == 0 && aDelData == undefined && aUpdateData.length == 0) {
                        return;
                    }

                    //ajax保存数据
                    if (othis.saveData(aAddData, aDelData, aUpdateData, sSaveTableName, sSaveKeyvalue, aType)) {
                        alert("保存成功！");
                        othis.doQuery(OPTIONS.queryCondition);
                        return;
                    } else {
                        alert("保存失败，请重试！");
                        othis.doQuery(OPTIONS.queryCondition);
                        return;
                    }
                }
            });
        },
        //获取xml配置中的参数，构造Grid的参数
        GetColumnParam: function (objElement, oType, objFieldMap) {
            var $this = $(objElement);
            var oColumn = {};
            //<!--fieldName:表字段名-->
            oColumn.fieldName = $this.attr("fieldName");
            //<!--name:数据源列名-->
            oColumn.name = $this.attr("name");
            //<!--title:展示时的列标题-->
            oColumn.title = $this.attr("title");
            //<!--type:text select time-->
            oColumn.type = $this.attr("type");

            //创建类型对象
            if (oColumn.fieldName) {
                oType[oColumn.fieldName] = oColumn.type;
            }

            //Grid列名和数据库的对应关系
            if (oColumn.name) {
                objFieldMap[oColumn.name] = oColumn.fieldName;
            }

            //<!--isedit:true/false-->
            if ($this.attr("isedit") != "" && $this.attr("isedit") != undefined) {
                oColumn.isedit = $this.attr("isedit");
            } else {
                oColumn.isedit = "0";
            }
            //<!--sql:数据源(PS:主要是用于type=select and isedit=true的时候)-->
            oColumn.sql = $this.attr("sql");
            //<!--width:列宽-->
            if ($this.attr("width") != "" && $this.attr("width") != undefined) {
                oColumn.width = $this.attr("width");
            } else {
                oColumn.width = 120;
            }
            //<!--align:数据位置-->
            oColumn.align = $this.attr("align");
            //<!--option:select类型控件手动配置选项-->
            oColumn.options = [];
            //select一般有value和text，此处为text展示值，默认和value一致
            oColumn.textField = oColumn.id;

            oColumn.options = $this.children("option");
            oColumn.textField = $this.attr("textField");
            oColumn.textName = $this.attr("textName");
            oColumn.onclick = $this.attr("onclick");

            if ($this.attr("render") != undefined && $this.attr("render") != "") {
                oColumn.render = $this.attr("render");
            } else {
                oColumn.render = "";
            }

            oColumn.url = $this.attr("url");
            oColumn.target = $this.attr("target");

            var oColumnHead = this.GetColumnHead(oColumn);
            var childColumn = $this.children("column");
            //if (childColumn.length > 0) {
            //    oColumnHead.columns = [];
            //    for (var i = 0; i < childColumn.length; i++) {
            //        oChildColumnHead = this.GetColumnParam(childColumn[i], oType, objFieldMap);
            //        oColumnHead.columns[i] = oChildColumnHead;
            //    }
            //}
            return oColumnHead;
        },
        //转换保存数据的键值转换成对应的表字段名称
        ConvertField: function (objFieldMap, objData) {
            if (objFieldMap && objData && objData.length > 0) {
                var tempName = "";
                for (var i = 0; i < objData.length; i++) {
                    for (var name in objData[i]) {
                        tempName = objFieldMap[name];
                        if (tempName && tempName != name) {
                            objData[i][tempName] = objData[i][name];
                            delete objData[i][name];
                        }
                    }
                }
            }
        },
        //打开导入窗口
        openImportWindow: function (url, data, name, othis) {
            var iWidth = 550                         //弹出窗口的宽度;
            var iHeight = 100;                        //弹出窗口的高度;
            var iTop = ($(document).height() - 30 - iHeight) / 2;       //获得窗口的垂直位置;
            var iLeft = ($(document).width() + 20 - iWidth) / 2;           //获得窗口的水平位置;

            $.ligerDialog.open({
                height: 200,
                width: 550,
                title: name,
                data: {
                    GridXML: data, GeoGrid: othis
                },
                url: url
            });

        },

        /*
       *  功能:   获取列配置
       *  参数:   parmItemName:菜单节点名称
       *  返回值：无
       */
        GetColumnHead: function (oColumn) {
            var oGridColumn = {};
            if (oColumn.title) {
                oGridColumn.display = oColumn.title;
            }
            if (oColumn.name) {
                oGridColumn.name = oColumn.name;
            }
            if (oColumn.align) {
                oGridColumn.align = oColumn.align;
            }
            if (oColumn.width) {
                oGridColumn.width = oColumn.width;
            }
            switch (oColumn.type) {
                case "text":
                    if (oColumn.render != undefined && oColumn.render != "") {
                        oGridColumn.render = function (rowdata, rowid) {
                            var sShow = "";
                            //反射
                            //eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
                            //并且上面参数与下面的参数命名一直的话，可以传递！

                            sShow = eval(oColumn.render);
                            return sShow;
                        }
                    }

                    //判断当前列是否可编辑
                    if (oColumn.isedit == "1") {
                        oGridColumn.editor = { type: 'text' };
                    } else {
                        oGridColumn.editor = "";
                    }
                    break;
                case "time":
                    oGridColumn.type = "date";

                    if (oColumn.render != undefined && oColumn.render != "") {
                        oGridColumn.render = function (rowdata, rowid) {
                            var sShow = "";
                            //反射
                            //eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
                            //并且上面参数与下面的参数命名一直的话，可以传递！

                            sShow = eval(oColumn.render);
                            return sShow;
                        }
                    }

                    //判断当前列是否可编辑
                    if (oColumn.isedit == "1") {
                        oGridColumn.editor = { type: 'date' };
                    } else {
                        oGridColumn.editor = "";
                    }
                    break;
                case "float":
                    oGridColumn.type = "float";

                    if (oColumn.render != undefined && oColumn.render != "") {
                        oGridColumn.render = function (rowdata, rowid) {
                            var sShow = "";
                            //反射
                            //eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
                            //并且上面参数与下面的参数命名一直的话，可以传递！

                            sShow = eval(oColumn.render);
                            return sShow;
                        }
                    }
                    //判断当前列是否可编辑
                    if (oColumn.isedit == "1") {
                        oGridColumn.editor = { type: 'float' };
                    } else {
                        oGridColumn.editor = "";
                    }
                    break;
                case "money":
                    oGridColumn.type = "float";

                    if (oColumn.render != undefined && oColumn.render != "") {
                        oGridColumn.render = function (rowdata, rowid) {
                            var sShow = "";
                            //反射
                            //eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
                            //并且上面参数与下面的参数命名一直的话，可以传递！

                            sShow = eval(oColumn.render);
                            return sShow;
                        }
                    }
                    //判断当前列是否可编辑
                    if (oColumn.isedit == "1") {
                        oGridColumn.editor = { type: 'float' };
                    } else {
                        oGridColumn.editor = "";
                    }
                    break;
                case "int":
                    oGridColumn.type = "int";

                    if (oColumn.render != undefined && oColumn.render != "") {
                        oGridColumn.render = function (rowdata, rowid) {
                            var sShow = "";
                            //反射
                            //eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
                            //并且上面参数与下面的参数命名一直的话，可以传递！

                            sShow = eval(oColumn.render);
                            return sShow;
                        }
                    }

                    //判断当前列是否可编辑
                    if (oColumn.isedit == "1") {
                        oGridColumn.editor = { type: 'int' };
                    } else {
                        oGridColumn.editor = "";
                    }
                    break;
                case "select":
                    var aDepartmentList = [];
                    //select控件存在2种选项加载方式
                    //1.SQL
                    //2.手动配置option
                    if (oColumn.sql != undefined && oColumn.sql != "") {
                        //通过ajax获取选项数据
                        sUrl = URL + "?action=" + escape("GETSELECTDATA") + "&ran=" + escape(Math.random());

                        $.ajax({
                            url: sUrl,
                            data: { "sql": oColumn.sql },
                            type: "post",
                            async: false,
                            success: function (oRes) {
                                aDepartmentList = $.parseJSON(oRes);
                            },
                            error: function (oRes) {
                                //data = oRes;
                            }
                        });
                    } else {
                        if (oColumn.options != undefined && oColumn.options != "") {
                            oColumn.options.each(function (index, obj) {
                                var $this = $(this);
                                var sValue = $this.attr("value");
                                var sText = $this.text();
                                aDepartmentList[index] = {
                                    VALUE: sValue,
                                    TEXT: sText
                                };
                            });
                        }
                    }

                    //判断当前列是否可编辑
                    if (oColumn.isedit == "1") {
                        oGridColumn.editor = {
                            type: 'select',
                            data: aDepartmentList,
                            valueColumnName: 'VALUE',
                            displayColumnName: 'TEXT',
                        };
                        //当select列可编辑时，做一下渲染，保证下拉选择展示的正确性
                        //不做一下渲染会导致选择后展示的是VALUE的值，而不是TEXT的值
                        oGridColumn.render = function (item) {
                            for (var i = 0; i < aDepartmentList.length; i++) {
                                if (aDepartmentList[i]['VALUE'] == item[oColumn.name]) {
                                    return aDepartmentList[i]['TEXT'];
                                }
                            }
                            return item[oColumn.textField];
                        }
                    } else {
                        oGridColumn.editor = "";
                        //当非编辑时，可以自定义渲染
                        if (oColumn.render != undefined && oColumn.render != "") {
                            oGridColumn.render = function (rowdata, rowid) {
                                var sShow = "";
                                //反射
                                //eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
                                //并且上面参数与下面的参数命名一直的话，可以传递！
                                sShow = eval(oColumn.render);
                                return sShow;
                            }
                        }
                    }
                    break;
                default:
                    if (oColumn.render != undefined && oColumn.render != "") {
                        oGridColumn.render = function (rowdata, rowid) {
                            var sShow = "";
                            //反射
                            //eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
                            //并且上面参数与下面的参数命名一直的话，可以传递！

                            sShow = eval(oColumn.render);
                            return sShow;
                        }
                    }

                    break;
            }
            return oGridColumn;
        },
        deleteRow: function () {
            gridManager.deleteSelectedRow();
        },
        deleteRowById: function (rowid) {
            gridManager.deleteRow(rowid)
        },

        addNewRow: function () {
            gridManager.addEditRow();
        },
        saveData: function (aAddData, aDelData, aUpdateData, sSaveTableName, sSaveKeyvalue, aType) {
            var sUrl = URL + "?action=" + escape("SAVEGRIDDATA") + "&ran=" + escape(Math.random());

            var bResult = false;

            $.ajax({
                url: sUrl,
                dataType: "text",
                data: {
                    "ADD": liger.toJSON(aAddData),//此处只能使用ligerUI的toJSON方法，因为jQuery的toJSON方法无法获取ligerGrid的date类型数据
                    "DELETE": liger.toJSON(aDelData),
                    "UPDATE": liger.toJSON(aUpdateData),
                    "TABLENAME": sSaveTableName,
                    "KEYVALUE": sSaveKeyvalue,
                    "TYPE": $.toJSON(aType)
                },
                type: "post",
                async: false,
                success: function (oRes) {
                    if (oRes == "sucess") {
                        bResult = true;
                    } else {
                        bResult = false;
                    }
                },
                error: function (oRes) {
                    bResult = false;
                }
            });
            return bResult;
        },
        //关闭导入窗口
        closeDialog: function () {
            $.ligerDialog.close();
            $(".l-dialog,.l-window-mask").css("display", "none"); //只隐藏遮罩层
        },
        //刷新页面
        doQuery: function (queryCondition) {
            gridManager.setOptions({
                newPage: 1,   
            	parms: { "sql": SQL, "queryCondition": JSON.stringify(queryCondition) }
            });
            
            gridManager.reload();
        },

        //将格林威治时间格式转换为yyyy-MM-dd
        Todate: function (num) {
            //Fri Oct 31 18:00:00 UTC+0800 2008  
            num = num + "";
            var date = "";
            var month = new Array();
            month["Jan"] = 1; month["Feb"] = 2; month["Mar"] = 3; month["Apr"] = 4; month["May"] = 5; month["Jun"] = 6;
            month["Jul"] = 7; month["Aug"] = 8; month["Sep"] = 9; month["Oct"] = 10; month["Nov"] = 11; month["Dec"] = 12;
            var week = new Array();
            week["Mon"] = "一"; week["Tue"] = "二"; week["Wed"] = "三"; week["Thu"] = "四"; week["Fri"] = "五"; week["Sat"] = "六"; week["Sun"] = "日";
            str = num.split(" ");
            //不同浏览器的格林威治时间格式不一样
            if (window.DOMParser) {
                date = str[3] + "-";
                date = date + month[str[1]] + "-" + str[2] + " " + str[4];
            } else {
                date = str[5] + "-";
                date = date + month[str[1]] + "-" + str[2] + " " + str[3];
            }
            return date;
        },
        getSelectRowData: function () {
        	var oData = gridManager.getSelected();
        	return oData;
        },
        getSelectRowsData:function(){
            var aData = gridManager.getSelecteds();
            return aData;
        },
        getGridManager: function () {
        	return gridManager;
        }
    });

})(jQuery);