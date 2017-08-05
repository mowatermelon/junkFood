/// <reference path="../../../ligerui.all.js" />
/**
* jQuery geowebDataNavigation 1.0.0
* 
* 
*  
* Author chengderen 2014 
*/
(function ($) {

    //数据导航插件
    $.fn.geowebDataNavigation = function (option) {
        //扩展参数
        var opt = $.extend({}, $.ligerDefaults.geowebDataNavigationConfig, option);
        opt._self = this;
        try {

            //数据导航实例
            var dataNav = new dataNavigation(opt);

            //初始化插件
            dataNav.init();

            return dataNav;
        } catch (e) {
        }
    }

    //数据导航对象
    function dataNavigation(option) {
        this.option = option;

        /*初始化*/
        this.init = function () {

            var _self = this;

            //渲染元素
            _self.render();

            //绑定A标签字体缩放事件
            //_self.bindZoom();
            
            //注册点击事件
            _self.registerItemClick();

            //调试
            _self.debug();
        },

        /*渲染元素*/
        this.render = function () {
            var bg = this.option.background;
            var aDiv = [];

            //创建背景层对象
            var oDiv = $("<div></div>");
            
            //添加背景图片
            oDiv.css("background", "url(" + bg.url + ") no-repeat 0 0");
            oDiv.css("position", "relative");
            oDiv.addClass("dataNavigation-bg");

            //设置宽度和高度
            oDiv.width(bg.width);
            oDiv.height(bg.height);

            //遍历数据项
            for (var index in this.option.items) {
                var item = this.option.items[index];

                //创建层对象
                var oDivSub = $("<div></div>");

                //给创建层添加样式类
                oDivSub.addClass("dataNavigation-content");

                //对层进行精确定位
                oDivSub.css("left", item.x + "px");
                oDivSub.css("top", item.y + "px");

                //设置项高度
                if (this.option.hasOwnProperty("itemHeight")) {
                    oDivSub.height(this.option.itemHeight);
                }

                //设置项宽度
                if (this.option.hasOwnProperty("itemWidth")) {
                    oDivSub.width(this.option.itemWidth);
                }

                //创建A标签对象
                var aAnchor = $("<a>" + item.value + "</a>");
                aAnchor.addClass('dataNavigation-a');
                aAnchor.attr("href", item.url);
                aAnchor.attr("title", (($(item.value).text() == "") ? item.value : $(item.value).text()));

                //追加链接标签
                oDivSub.append(aAnchor[0].outerHTML);

                //将元素加入临时存储的数组里
                aDiv.push(oDivSub[0].outerHTML);
            }

            oDiv.append(aDiv.join(" "));
            this.option._self.html(oDiv[0].outerHTML);
        },

        /*注册项的点击事件*/
        this.registerItemClick = function () {
            var _self = this;

            //绑定点击链接的事件
            $(".dataNavigation-a").bind('click', function () {
                
                //是否为传递的函数事件
                if (typeof _self.option.onItemClick == 'function') {

                    //回调事件函数
                    _self.option.onItemClick(this);
                }
            });
        },

        /*绑定A标签字体缩放事件*/
        this.bindZoom= function () {
            var _self = this;
            $(".dataNavigation-a").bind('mouseout', function () {
                $(this).css("font-size", "12px");
            });

            $(".dataNavigation-a").bind('mouseover', function () {
                $(this).css("font-size", "25px");
            });
        },

        /*调试*/
        this.debug = function () {

            //是否打开调试模式
            if (this.option.debug) {

                //创建调试模式下的层
                var oDebugDiv = $("<div></div>");
                oDebugDiv.addClass("dataNavigation-debug");
                oDebugDiv.attr("contentEditable", "true");

                //追加元素
                $(".dataNavigation-bg").append(oDebugDiv[0].outerHTML);

                //创建列表元素
                var list = $("<ul></ul>");
                list.addClass("dataNavigation-debug-list");

                //绑定双击事件
                $(".dataNavigation-bg").bind("dblclick", function (e) {

                    //获取坐标，并添加到列表中
                    $(".dataNavigation-debug-list").append("<li>x:" + e.offsetX + ",  y:" + e.offsetY + "</li>");
                });

                //将列表元素渲染到调试布部中
                $(".dataNavigation-debug").append(list[0].outerHTML);
            }
        }
    }

    //todo 默认构造函数
    $.ligerDefaults.geowebDataNavigationConfig = {
        debug:false,
        xml: ""
    };

})(jQuery);