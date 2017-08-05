/*
*  功能：查询功能配置面板
*  作者：liubing
*  日期：2015.12.4
*  版本：1.0
*/
(function ($) {
    $.fn.ligerGeoPanelQueryList = function (options) {
        return $.ligerui.run.call(this, "ligerGeoPanelQueryList", arguments);
    };

    $.fn.ligerGetGeoPanelQueryListManager = function () {
        return $.ligerui.run.call(this, "ligerGetGeoPanelQueryListManager", arguments);
    };

    $.ligerDefaults.GeoPanelQueryList = {
        url: "Dictionary.ashx",
        checkBox: false,
        configInfo: '<QueryList></QueryList>'
    };

    $.ligerMethos.GeoPanelQueryList = {};

    $.ligerui.controls.GeoPanelQueryList = function (element, options) {
        //this.$element = $(element);
        var opts = $.extend({}, $.fn.ligerGeoPanelQueryList.defaults, options);
        $.ligerui.controls.GeoPanelQueryList.base.constructor.call(this, element, opts);
    };

    $.ligerui.controls.GeoPanelQueryList.ligerExtend($.ligerui.core.UIComponent, {

        __getType: function () {
            return 'GeoPanelQueryList';
        },

        __idPrev: function () {
            return 'GeoPanelQueryList';
        },

        _extendMethods: function () {
            return $.ligerMethos.GeoPanelQueryList;
        },
        _render: function () {
            var othis = this;
            var $this = $(this.element);
            var opts = this.options;

            $this.html("");
            $(".g-formbox").html("")

            var $configInfo = $(opts.configInfo);

            var arrHtml = [];

            arrHtml.push("<div class='g-formbox'></div>");

            $this.html(arrHtml.join(""));
          
            if ($configInfo.find("Query").length == 0) {

                return;
            }

            $configInfo.find("Query").each(function (i, query) {
                $query = $(this);

                var $queryHtml= $("<div class='g-txtbox'/>")
                    .attr("fieldName", $query.attr("fieldName"))
                    .attr("operator", $query.attr("operator" || "equals"))
                    .attr("type", $query.attr("type" || "text"));

                $queryHtml.append("<label>" + $query.attr("name") + "</label>");

                switch ($query.attr("type")) {
                    //复选框
                    case "select":
                        var $select = $("<select/>").attr("id", $query.attr("id"));

                        $queryHtml.append($select);

                        if ($query.find("options").length > 0) {
                            $query.find("options").each(function (oindex, option) {
                                $(option).attr("value");
                                $select.append('<option value="' + $(option).attr("value") + '">' + $(option).text() + '</option>');
                            });
                        }
                       
                        if ($query.attr("dicName")) {
                                othis._bindSelectData($select.attr("id"), $query.attr("dicName"), $query.attr("pid"));
                        }

                        if ($query.attr("refId")) {
                            var sRefId = $(this).attr("refId");
                            var sDicName = $(this).attr("dicName");
                            var sValue = $(this).val();

                            $select.bind("change", function () {
                                othis._bindSelectData(sRefId, sDicName,  $(this).val());
                            });
                        }
                        break;
                        //日期，区域
                    case "dateZone":
                        $queryHtml.attr("id", $query.attr("id"));
                        var $oDateMin = $("<input type='text'/>")
                            .attr("id", $query.attr("id") + "_min");
                        var $oDateMax = $("<input type='text'/>")
                            .attr("id", $query.attr("id") + "_max");
                        $oDateMin.addClass("Wdate").click(function () {
                            WdatePicker({
                                readOnly: true,
                                maxDate: "#F{$dp.$D('" + $oDateMax.attr("id") + "')}"
                            });
                        });
                        $oDateMax.addClass("Wdate").click(function () {
                            WdatePicker({
                                readOnly: true,
                                minDate: "#F{$dp.$D('" + $oDateMin.attr("id") + "')}"
                            });
                        });
                        $queryHtml.append($oDateMin);
                        $queryHtml.append("&nbsp;至&nbsp;");
                        $queryHtml.append($oDateMax);
                        break;
                        //文字
                    default:
                        var $text = $("<input type='text'/>")
                            .attr("id", $query.attr("id"));
                        $queryHtml.append($text);
                        break;
                }

                $(".g-formbox").append($queryHtml);
            });

            var $btns = $('<div class="g-txtbox" style="float:right;display:none;"></div>');

            if (typeof opts.buttons != "undefined" && opts.buttons.length>0)
            {
                for (var i = 0; i < opts.buttons.length; i++)
                {
                    var $btnItem = $('<button class="row1_btn" type="button">' + opts.buttons[i].name + '</button>');
                    $btnItem.bind("click", opts.buttons[i].onclick);
                    $btns.append($btnItem);
                }

                $btns.width(opts.buttons.length * 75);
                $btns.css("display","block");
            }


            $(".g-formbox").append($btns);

            if (!opts.checkBox) {
                this.hideCheckBox();
            }

            //绑定复选框的单击事件
            $(".containerset legend>[type='checkbox']").bind('click', function () {
                //设置是否隐藏 
                var checked = this.checked;
                //$(".g-formbox").css("display", ((checked) ? "block" : "none"));
                $(".containerset > div").css("display", ((checked) ? "block" : "none"));
                if (checked) {
                    if ($(".containerset").hasClass("xstatus")) {
                        $(".containerset").removeClass("xstatus")
                    }
                    $(".containerset").addClass("xoriginstatus");
                }
                else {
                    if ($(".containerset").hasClass("xoriginstatus")) {
                        $(".containerset").removeClass("xoriginstatus")
                    }
                    $(".containerset").addClass("xstatus");
                }
            });
        },
        /*
        *  功能:   下拉框联动加载数据
        *  参数:	item	当前对象
                    id		联动影响兑现id
                    dicName	字典数据名
        *  返回值: 无
        *  作者:   zhangyunjun
        *  日期:   2015.11.20
        *  版本:   1.0
        */
        _bindSelectData: function (id, dicName, pid, type) {
            var arr = [];
            if (type == "ALL") {
                arr.push("<option value=''>所有</option>");
            }

            if (jsonParm[dicName]) {

            } else {
                jsonParm[dicName] = this._getDicData(dicName);
            }

            if (jsonParm[dicName]) {
                $.each(jsonParm[dicName], function (index, obj) {
                    if (typeof (pid) == undefined) {
                        arr.push("<option value='" + obj.ID + "'>" + obj.NAME + "</option>");
                    } else if (pid == obj.PID) {
                        arr.push("<option value='" + obj.ID + "'>" + obj.NAME + "</option>");
                    }
                });
            }
            $("#" + id).html(arr.join("")).change();

        },

        /*
        *  功能:	获取字典数据
        *  参数:	dicName	字典数据名
        *  返回值:	arr[json]
        *  作者:	zhangyunjun
        *  日期:	2015.11.20
        *  版本:	1.0
        */
        _getDicData: function (dicName) {
            var oThis = this;

            if (jsonParm[dicName]) {
                return jsonParm[dicName];
            } else {
                $.ajax({
                    url: oThis.options.url + "?T=" + Math.random(),
                    type: "GET",
                    data: { "action": "getdic", "dicname": dicName },
                    async: false,
                    success: function (response) {
                        if (response) {
                            return jsonParm[dicName] = JSON.parse(response);
                        }
                    }
                });
            }

            return jsonParm[dicName];
        },
        //获取查询条件
        getQueryCondition: function () {
            var aQuery = [];

            $(window.document).find("div[fieldName]").each(function (i, item) {
                var $item = $(item);

                var query = {
                    "QueryName": $item.attr("fieldName"),
                    "QueryOperator": ($item.attr("operator") || "equals"),
                    "QueryType": ($item.attr("type") || "")
                };

                switch ($item.attr("type")) {
                    case "select":
                        query.QueryValue = $item.find("select").val();
                        break;
                    case "dateZone":
                        var minVal = $('#' + $item.attr("id") + '_min').val();
                        var maxVal = $('#' + $item.attr("id") + '_max').val();

                        if (minVal != "") {
                            query.QueryMinValue = minVal;
                        }

                        if (maxVal != "") {
                            query.QueryMaxValue = maxVal;
                        }

                        break;
                    default:
                        query.QueryValue = $item.find("input[type='text']").val();
                        break;
                }
                if (query.QueryValue || query.QueryMinValue || query.QueryMaxValue) {
                    aQuery.push(query);
                }
            });

            return { "QueryFieldList": aQuery };
        },
        hideCheckBox: function () {
            $(".containerset legend").hide();
            $(".containerset > div").css("display", "block");
            if ($(".containerset").hasClass("xstatus")) {
                $(".containerset").removeClass("xstatus")
            }
            $(".containerset").addClass("xoriginstatus");
        }
    });
})(jQuery);