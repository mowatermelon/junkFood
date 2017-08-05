
//扩展对象
$.geowebDefaults = {};
(function () {

    $.fn.geowebLeftMenu = function (options) {

        //保存当前对象
        var othis = this;
        //事件容器
        this.events = this.events || {};
        //配置参数
        this.options = options || {};

        //设置属性
        // arg 属性名    value 属性值 
        // arg 属性/值   value 是否只设置事件
        this.set = function (arg, value) {
            if (!arg) return;

            if (typeof arg == 'object') {
                var tmp;
                if (this.options != arg) {
                    $.extend(this.options, arg);
                    tmp = arg;
                }
                else {
                    tmp = $.extend({}, arg);
                }
                if (value == undefined || value == true) {
                    for (var p in tmp) {
                        if (p.indexOf('on') == 0)
                            this.set(p, tmp[p]);
                    }
                }
                if (value == undefined || value == false) {
                    for (var p in tmp) {
                        if (p.indexOf('on') != 0)
                            this.set(p, tmp[p]);
                    }
                }
                return;
            }
            var name = arg;

            //事件参数
            if (name.indexOf('on') == 0) {
                if (typeof value == 'function')
                    this.bind(name.substr(2), value);
                return;
            }

            if (!this.options) this.options = {};

            if (this.trigger('propertychange', [arg, value]) == false) return;

            this.options[name] = value;
            var pn = '_set' + name.substr(0, 1).toUpperCase() + name.substr(1);

            if (this[pn]) {
                this[pn].call(this, value);
            }
            this.trigger('propertychanged', [arg, value]);
        };

        var $oSelf = $(this);
        //合并参数
        var opts = $.extend($.geowebDefaults.LeftMenu, options);
        //绑定事件
        othis.set(opts);
        var oChartBlock = $.parseXML(opts.configMenu);
        var $xmlNodes = $(oChartBlock).find("menu");
        var sHtml = '<div class="g-ml">';

        $.each($xmlNodes, function (i) {
            var $oCell = $($xmlNodes[i]);
            var sValue = $oCell.attr("name");
            var sClass = $oCell.attr("class");//菜单样式
            var sLink = $oCell.attr("defaulurl");//跳转链接
            var sID = $oCell.attr("id");

            if (!$xmlNodes[i].hasChildNodes()) {
                sHtml += '<div><span id="' + sID + '"  href="' + sLink + '" class="' + sClass + '">' + sValue + '</span></div>';
            }

            if ($xmlNodes[i].hasChildNodes()) {
                var $oCellChilds = $xmlNodes[i].childNodes;
                sHtml += '<div><span id="' + sID + '" href="' + sLink + '" class="' + sClass + '">' + sValue + '<span class="arrowDown"></span></span></div>';
                sHtml += '<ul class="g-subMenu">';
                $.each($oCellChilds, function (j) {
                    var $oCellChild = $($oCellChilds[j]);
                    var sChildValue = $oCellChild.attr("name");
                    var sChildLink = $oCellChild.attr("defaulurl");
                    var sChildID = $oCellChild.attr("id");
                    sHtml += '<li id="' + sChildID + '"  href="' + sChildLink + '">' + sChildValue + '</li>';
                });
                sHtml += '</ul>';
            }
        });

        //最外层的结束div
        sHtml += "</div>";
        //将拼接后的html添加到页面上
        $oSelf.html(sHtml);
        //初始化的时候让二级菜单隐藏
        $(".g-ml").find("ul").hide();
        $(".g-ml").css("height", $(window).height());
        //菜单点击切换效果
        $(".g-ml div span").bind("click", function () {
            $(".g-ml div span").removeClass("ml-focus");
            $(this).addClass("ml-focus");
            $(".g-ml").find("ul").hide();
            $(".g-ml div span span").removeClass("arrowUp");
            $(".g-ml div span span").addClass("arrowDown");

            if ($(this).find("span").hasClass("arrowUp") || $(this).find("span").hasClass("arrowDown")) {
                if ($(this).parent().next().css("display") == "none") {
                    $(this).parent().next().css("display", "block");
                    $(this).find("span").removeClass("arrowDown");
                    $(this).find("span").addClass("arrowUp");
                }
                if ($(this).parent().next().css("display") == "block") {
                    $("ul li").click(function () {
                        $("ul li").removeClass("subMenu-focus");
                        $(this).addClass("subMenu-focus");
                    });
                }
            }
        });

        //先获取所有的菜单集合
        var $aItems = $oSelf.find(".g-ml").children("div");

        //一级菜单事件绑定
        $aItems.each(function (index, objP) {
            var obj = $(objP)[0].outerHTML;
            var sCellClass = $(obj).find("span").attr("class");
            var sCellValue = $(obj).find("span").text();
            var sCellUrl = $(obj).find("span").attr("href");
            var sCellID = $(obj).find("span").attr("id");
            $(objP).click(function () {
                if (sCellUrl != null && sCellUrl != "" && sCellUrl != undefined && sCellUrl != "undefined") {
                    othis.trigger('CellClick', [sCellClass, sCellUrl, sCellValue, sCellID]);
                    if (opts.isStop) {
                        opts.isStop = false;
                        return;
                    }
                }

            });
        });

        //二级菜单事件绑定
        var $aChildsItems = $oSelf.find(".g-subMenu").find("li");
        $aChildsItems.each(function (childIndex, childObj) {
            var sCellChild = $(childObj)[0].outerHTML;
            var sCellChildId = "li";
            var sCellChildValue = $(sCellChild).html();
            var sCellChildUrl = $(sCellChild).attr("href");
            var sCellChildID = $(sCellChild).attr("id");
            $(childObj).click(function () {
                othis.trigger("CellClick", [sCellChildId, sCellChildUrl, sCellChildValue, sCellChildID]);
                if (opts.isStop) {
                    opts.isStop = false;
                    return;
                }

            });
        });

        return opts;
    }

    $.geowebDefaults.LeftMenu = {
        id: "divLeftMenu",   //大div的id
        configMenu: null,   //xml字符串
        onCellClick: null,  //点击选项触发的事件
        isStop: false       //停止执行菜单切换事件
    };
})(jQuery);
