/// <reference path="../../../ligerui.all.js" />
/**
* jQuery geowebLigerLayout 1.0.0
* 
* 
*  
* Author chengderen 2014 
*/

(function ($) {

    //静态实例化，存储到全局变量
    $.geowebLigerLayout = function (option) {

        //实例化对象
        return new geowebLayout(option);
    }

    //布局对象
    function geowebLayout(option) {

        //扩展配置
        this.option = $.extend({}, $.ligerDefaults.geoweblayoutConfig, option);

        try {

            //初始化
            this.init();

        } catch (e) {
            
           //alert(e);
        }
    }

    geowebLayout.prototype = {
        constructor: geowebLayout,

        /*初始化*/
        init: function () {

            var self = this;

            //获取配置项
            var opt = self.option;

            if (opt.autoRender) {

                //自动渲染
                self.renderHtml(opt);

            } else {

                //手动渲染
                self._loadLigerUILayout(opt.layout);

                //移除样式
                //self._removeClass(opt.layout);
            }

            //渲染Css样式
            self.renderCss();
        },

        /*渲染html*/
        renderHtml: function (option) {

            var ahtml = [], alayout = [];

            this._parseConfig(option.layout, ahtml, alayout);

            //将布局好的html的元素添加到需要渲染元素中
            $(option.renderTo).append(ahtml.join(' '));
            //反转
            alayout = alayout.reverse();
            //渲染到布局上
            this._loadLigerUILayout(alayout);
        },

        /*解析布局参数的配置*/
        _parseConfig: function (layout, ahtml, alayout) {

            //最外层容器的标识
            var targetDivId;

            if (layout.containerId == undefined || layout.containerId == "" || layout.containerId == null) {

                //自动生成容器的惟一标识
                targetDivId = "geowebLigeUILayout" + Math.random();

                targetDivId = targetDivId.replace(".", "");

            } else {

                targetDivId = layout.containerId;
            }

            ahtml.push("<div id='" + targetDivId + "'>");

            for (var i = 0; i < layout.items.length; i++) {

                var olayout = layout.items[i];

                if (olayout.hasOwnProperty("position")) {

                    if (!olayout.autoRenderToEle) {
                        //指定层布局的位置
                        ahtml.push("<div position=\"" + olayout.position + "\">");
                    }
                }

                if (olayout.hasOwnProperty("layout")) {

                    //是否存在子布局，如果存在进行递归
                    arguments.callee(olayout.layout, ahtml, alayout);

                    ahtml.push("</div>");
                }
                else {

                    if (olayout.hasOwnProperty("renderId")) {

                        if (olayout.autoRenderToEle) {
                            $("#" + olayout.renderId).attr({ position: olayout.position });
                        }

                        //将元素渲染到布局上
                        var _html = $("#" + olayout.renderId)[0].outerHTML;

                        //移除元素
                        $("#" + olayout.renderId).remove();
                        ahtml.push(_html);

                        if (!olayout.autoRenderToEle) {
                            ahtml.push("</div>");
                        }
                    }
                }
                if (!(olayout.hasOwnProperty("renderId") || olayout.hasOwnProperty("layout"))) {

                    ahtml.push("</div>");
                }
            }

            ahtml.push("</div>");

            alayout.push({
                containerId: targetDivId,
                settings: (layout.settings || {})
            });
        },

        /*加载ligerUILayout的布局*/
        _loadLigerUILayout: function (alayout) {
            //遍历容器数组
            $(alayout).each(function (key, o) {
                //添加布局样式
                $("#" + o.containerId).addClass("geowebLigerLayout");
                try{
                    //渲染ligerUI容器
                    $("#" + o.containerId).ligerLayout(o.settings);
                } catch (e) {
                   // alert(e);
                }
            });
        },

        /*移动样式*/
        _removeClass: function (alayout) {

            //遍历容器数组
            $(alayout).each(function (key, o) {

                //移除样式
                if ($("#" + o.containerId).hasClass("geowebLigerLayout")) {

                    $("#" + o.containerId).removeClass("geowebLigerLayout");
                }
            });
        },

        /*渲染样式*/
        renderCss: function () {

            //渲染样式 
            var arr = [];
            arr.push(".l-layout-left");
            arr.push(".l-layout-top");
            arr.push(".l-layout-right");
            arr.push(".l-layout-bottom");
            arr.push(".l-layout-center");

            //获取样式列表
            var className = arr.join(" ,");

            //设置层置顶
            $(".l-layout-top").css("z-index", "99999");
            $(".l-layout-top").css("overflow", "inherit");

            //初始左边布局滚动条的值
           // $(".l-layout-left").addClass("l-layout-leftext");

            //添加样式
            /*
            if (!$(".l-layout-content").hasClass(".l-layout-contentext")) {
             //   $(".l-layout-content").addClass("l-layout-contentext");
            }*/
        }
    };

    //todo 默认构造函数
    $.ligerDefaults.geoweblayoutConfig = {
        xml: "",
        render: 'form',
        autoRender: true
    };


})(jQuery);



