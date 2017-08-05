(function ($) {
    $.fn.ligerGeoTopMenu = function (options) {
        return $.ligerui.run.call(this, "ligerGeoTopMenu", arguments);
    };

    $.fn.ligerGetGeoTopMenuManager = function () {
        return $.ligerui.run.call(this, "ligerGetGeoTopMenuManager", arguments);
    };

    $.ligerDefaults.GeoTopMenu = {
        onClick: function (e) {

        }

    };

    $.ligerMethos.GeoTopMenu = {};

    $.ligerui.controls.GeoTopMenu = function (element, options) {
        $.ligerui.controls.GeoTopMenu.base.constructor.call(this, element, options);
    };

    $.ligerui.controls.GeoTopMenu.ligerExtend($.ligerui.core.UIComponent, {
        __getType: function () {
            return 'TopMenu';
        },

        __idPrev: function () {
            return 'TopMenu';
        },

        _extendMethods: function () {
            return $.ligerMethos.GeoTopMenu;
        },
        _render: function () {
            var p = this.options;
            var $this = $(this);
            var sMenuXML = p.menuXML;
            var OnItemClick = p.OnClick;
            var xmlDoc;
            if (window.DOMParser) {
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(sMenuXML, "text/xml");
            } else {
                // Internet Explorer
                xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = "false";
                xmlDoc.loadXML(sMenuXML);
            }
            //判断是否已经存在默认选中的项，如果存在多个有ischecked=true的项，则以第一个为主
            var bIshaveChecked = false;
            //临时接收XML字符串
            var sParamXML = "";
            sParamXML += "<ul class='g-mt'></ul>";
            $(xmlDoc).find("menu").each(function (i) {
                //获取当前menu节点对象
                var $oMenuXML = $(this);
                //获取menu对象id属性值
                var sMenuId = $oMenuXML.attr("id");
                //获取menu对象的文本
                var sMenuName = $oMenuXML.attr("name");
                //菜单对应的打开方式，1代表用iframe框架打开，0代表打开新的页面
                var sType = $oMenuXML.attr("opentype");
                //item节点的链接的默认url地址，配置在menu的属性中
                var sDefaultUrl = $oMenuXML.attr("defaulurl");
                //item节点默认的class，配置在menu的属性中
                var sClass = $oMenuXML.attr("class");
                //item节点的链接的默认展示的地址，配置在menu的属性中
                var sIsselected = $oMenuXML.attr("isselected");

                var sSelectedClass = "";
                //根据信息拼接HTML
                if (sIsselected && sIsselected == "true" && bIshaveChecked == false) {
                    sSelectedClass = 'isselected="true"';
                    bIshaveChecked = true;
                }
                //拼接所有menu节点
                sParamXML = $(sParamXML).append('<li > ' +
                                                    '<a id="' + sMenuId + '" text="' + sMenuName + '" type="' + sType + '"  class="' + sClass + '" Url="' + sDefaultUrl + '" ' + sSelectedClass + ' href="#">' +
                                                        sMenuName +
                                                    '</a>' +
                                                '</li>');
            });
            //将所有menu点拼接到指定的div

            var strParamXML = '<a href="#" class="g-logo-top"></a><ul class="g-mt">' + sParamXML[0].innerHTML + '</ul>';
            $(".g-head").html(strParamXML);

            //给菜单绑定点击事件
            $(".g-mt li a").bind("click", function () {
                $(".g-mt li a").removeClass("mt-focus");
                $(this).addClass("mt-focus");
                var sUrl = $(this).attr("Url");
                var sId = $(this).attr("id");
                var type = $(this).attr("type");
                OnItemClick(sId, sUrl, type);

            });
            //设置默认选中
            $('.g-head ul li a[isselected="true"]').click();
        },
        SelectMenuItem: function (menuName) {//todo liubing 2015.12.31增加菜单选中方法
            var $menu = null;
            var sUrl = "";
            var sId ="";
            var nType = "";
            var p = this.options;
            var OnItemClick = p.OnClick;

            $menu = $(this.element).find("ul.g-mt li a[text='" + menuName + "']");
            $menu.parent().siblings().find("a").removeClass("mt-focus");
            $menu.addClass("mt-focus");

            sUrl = $menu.attr("Url");
            sId = $menu.attr("id");
            nType = $menu.attr("type");

            OnItemClick(sId, sUrl, nType);
        },
        reload: function () {
            var g = this, p = this.options;
            g._render();
        }
    });
})(jQuery);