/// <reference path="../../../jquery-1.7.2.js" />
/**
* jQuery geowebTabPanel 1.0.0
* 
* 
*  
* Author chengderen 2014  
* 
*/
(function ($) {

    $.fn.geowebtabpanel = function (option) {
        var option = $.extend({}, $.tabpanelConfig, option);
        option._self = this;
        option.containerId = $(this).attr("id");
        try {
            var tabpanel = new TabPanel(option);
            tabpanel.init();
        } catch (e) {
            // alert(e);
        }
    }

    //构建选项卡对象
    function TabPanel(option) {
        this.option = option;
        this.init = function () {
            var _self = this;
            _self.render();
            _self.registerTabClick();
            _self.setDefaultTab();
            _self.setCss();
        },
        /*设置样式*/
        this.setCss = function () {
            if (this.option.hasOwnProperty("width")) {
                $("#" + this.option.containerId + " .tabContainer").width(this.option.width);
            } else {
                $("#" + this.option.containerId + " .tabContainer").width("99.7%");
            }
            if (this.option.hasOwnProperty("height")) {
                $("#" + this.option.containerId + " .tabContainer").height(this.option.height);
            } else {
                $("#" + this.option.containerId + " .tabContainer").height("100%");
            }

          //  $("#" + this.option.containerId + " .mainContainer .tabContainer").width($("#" + this.option.containerId + " .mainContainer").width());
          //  var calcHeight = $("#" + this.option.containerId + " .mainContainer").height() - $("#" + this.option.containerId + " .mainContainer .tabMenu").height();
           // $("#" + this.option.containerId + " .mainContainer .tabContainer").height(calcHeight);
        },
        /*渲染元素*/
        this.render = function () {
            //顶层容器
            /*var container = $("<div></div>");
            container.addClass("mainContainer");
            */


            //选项卡容器
            var tabContainer = $("<div></div>");
            tabContainer.addClass("tabContainer");

            //列表
            var olist = $("<ul></ul>");
            olist.addClass("tabMenu");
            var ahtml = [];

            //添加选项卡
            $.each(this.option.items, function (key, oItem) {
                var oli = $("<li></li>");
                oli.attr("title", oItem.name);
                oli.attr("cleanEle", oItem.cleanEle);
                oli.attr("targetDivId", oItem.targetDivId);
                oli.text(oItem.title);
                ahtml.push(oli[0].outerHTML);
            });

            //选项卡的内容块
            var contentBlock = $("<div></div>");
            contentBlock.addClass("tabContainer-content");

            //追加元素
            olist.append(ahtml.join(" "));
            tabContainer.append(olist[0].outerHTML);
            tabContainer.append(contentBlock[0].outerHTML);
           // container.append(tabContainer[0].outerHTML);
            this.option._self.append(tabContainer[0].outerHTML);

        },
        /*注册点击选项卡事件*/
        this.registerTabClick = function () {
            var _self = this;
            $("#" + _self.option.containerId + " .tabMenu li").bind('click', function () {

                _self.setTab(_self.option.containerId, $(this).attr("title"));
                if (typeof _self.option.itemClick == 'function') {
                    _self.option.itemClick(this);
                }
            });
        },
        /*设置选项卡*/
        this.setTab = function (containerId, itemName) {
            var _self = this;
            $("#" + containerId + " .tabMenu li").each(function (i, oli) {
                if (itemName == $(oli).attr("title")) {
                    $(oli).addClass("status");
                    var targetDivId = $(oli).attr("targetDivId");
                    if (targetDivId != "") {
                        if (typeof _self.option.beforeItemClick == 'function') {
                            _self.option.beforeItemClick(this);
                        }

                        var contentHtml = $("#" + targetDivId)[0].outerHTML;
                        // alert(targetDivId+"#");


                        $("#" + targetDivId).remove();
                        $("#" + containerId + " .tabContainer-content").html(contentHtml);
                    }
                }
                else {
                    $(oli).removeClass("status");
                }
            });
        },
        /*设置默认的选项卡*/
        this.setDefaultTab = function () {
            if (this.option.defaultItemName != "") {
                this.setTab(this.option.containerId, this.option.defaultItemName);

                $("#" + _self.option.containerId + " .tabMenu li").each(function (index, oValue) {
                     //alert($(this).attr("title"));
                    if (_self.option.defaultItemName == $(this).attr("title")) {
                        _self.option.itemClick(this);
                    }
                });
            }
        }
    }

    //默认值
    $.tabpanelConfig = {
        items: [],
        defaultItemName: "",
        containerId: "",
        itemClick: null,
        addTab: null

    };

    //闭包结束
})(jQuery);
