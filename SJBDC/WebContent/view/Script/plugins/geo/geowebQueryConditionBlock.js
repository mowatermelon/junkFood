/// <reference path="../../../jquery-1.7.2.js" />
/**
* jQuery geoweblistpanel_gt 1.0.0
* 
* 
*  
* Author chengderen 2014
* 
*/
(function ($) {

    //缓存数据的KEY
    var sGeoQueryBlock = "geoQueryBoxBlockId";
    $.fn.geowebQueryConditionBlock = function (options) {
        try {
           
            //构造参数
            var opts = $.extend({}, $.ligerDefaults.queryConditionBlock, options);

            opts._$this = $(this);
            opts._tableHtml = null;

            //将数据缓存起来
            obj = this.data(sGeoQueryBlock);

            //如果不传参数，则直接返回对象
            if (!options) {
                return obj;
            }
            return loadQueryBlock(opts);
        } catch (e) {

        }
    };

    /*加载查询块*/
    function loadQueryBlock(opt) {
        //todo 遍历查询配置中Xml节点
        $(opt.xml).each(function (index, otableHtml) {
            //todo 是否为当前业务标识中配置查询条件
            if ($(otableHtml).attr("id") == opt.tag) {
                //初始容器，获取渲染的html代码
                opt._tableHtml = otableHtml;
                var ahtml=init(opt).join(" ");
                opt._$this.append(ahtml);
            }
        });

        //绑定复选框的单击事件
        $(".containerset legend>[type='checkbox']").bind('click', function () {

            //设置是否隐藏 
            setVisisable(this.checked);

            if (opt.onExpand) {
                opt.onExpand(this.checked);
            }
        })

        //设置是否隐藏 
        setVisisable(opt.isExpand);

        //加载下拉框
        loadComboBox();

        //设置属性
        setProperty(opt);

    }

    /*设置插件的属性*/
    function setProperty(option) {
        if (option.hasOwnProperty("width")) {
            $(".containerset").width(option.width);
        }

        if (option.hasOwnProperty("height")) {
            $(".containerset").height(option.height);
        }

        if (typeof option.onQueryClick == 'function') {
            $(".g-btn-search").click(function () {
                //queryBlock查询条件
                var objQueryBlockField = seachObj(option.tag);
                //回调查询事件
                option.onQueryClick(objQueryBlockField);
            });
        }
    }

    /*查询域自动拼装 for 查询*/
    function seachObj(tblId) {
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

    /*加载下拉框*/
    function loadComboBox() {
        $(".containerset table td input[bmfl]").each(function () {
            var sBmfl = $(this).attr("bmfl");
            var sUrl = $(this).attr("href");
            sUrl += "bmfl=" + escape(sBmfl);
            //todo  去掉自身控件的边框
            $(this).css("border","none");
            //todo 加载下拉框或树形菜单下拉框
            $(this).ligerComboBox({
                split: ",",
                selectBoxWidth: 200,
                selectBoxHeight: 200,
                valueField: 'text',
                treeLeafOnly: false,
                tree: {
                    width: 200, idFieldName: 'id',
                    parentIDFieldName: 'pid',
                    url: sUrl, ajaxType: 'get',
                    onSuccess: function (data) {
                        $(".l-box-select .l-body span").each(function () {
                            $(this).attr("title", $(this).text());
                            if ($(this).text().length > 6) {
                                $(this).text($(this).text().substr(0, 5) + "...");
                            }
                        });
                    }
                }
            });
        });
    }

    /*初始化组件*/
    function init(option) {
        var arr = [];
        arr.push(" <fieldset  class='containerset' >");
        arr.push(" <legend>");
        if (option.isExpand) {
            arr.push("<input type='checkbox' checked='checked' />");
        } else {
            arr.push("<input type='checkbox'/>");
        }
        arr.push("<span><b>查询条件</b></span>");
        arr.push(" </legend>");
        arr.push($(option._tableHtml)[0].outerHTML);
        arr.push(" </fieldset>");
        return arr;
    }

    /*设置是否隐藏*/
    function setVisisable(checked) {
        $(".containerset table").css("display", ((checked) ? "table" : "none"));
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
    }

    //todo 默认构造函数
    $.ligerDefaults.queryConditionBlock = {
        xml: "",
        tag: "",
        isExpand: false, //默认
        onExpand: null,
        onQueryClick: null
    };

})(jQuery);