(function () {
    var Index = {
        target: "",
        init: function () {

            this.createHtml();
            _util.ajaxData('/DataCenter/catalog_initCatalog');
        },


        createHtml: function () {
            var obj = _util.parseUrl();
            Index.target = obj.target;
            $.getJSON(base + 'view/Common/json/menu.json', function (data) {
                var src = data[Index.target].titleSrc;
                $('#title-img').attr("src", src);// 设置系统标题
                var value = template($('#menu-template').html(), {// 设置分组
                    data: data[Index.target].menu,
                });
                $('.base-slider').html(value);
                Index.bindEvent();
                if (obj.selectBar) {
                    var selectP = $(".sidebar-nav").get(obj.selectBar);
                    $('.sidebar-title', $(selectP)).click();
                    if (obj.selectNav) {
                        var selectN = $('.nav-item', $(selectP)).get(
                            obj.selectNav);
                        if (selectN) {
                            $(selectN).click();
                        }
                    }
                } else {
                    var selectP = $(".sidebar-nav").get(0);
                    $('.sidebar-title', $(selectP)).click();
                }

            })
        },
        bindEvent: function () {
            /**
             * 绑定子菜单鼠标移动上面事件
             */
            $(".nav-item").hover(function () {
                $(this).addClass("hover-item");
            }, function () {
                $(this).removeClass("hover-item");
            });
            /**
             * 绑定父菜单点击事件，控制页面跳转或者展开子菜单
             */
            $('.sidebar-title').off("click").on("click", function () {

                dealChildPanel($(".select-title"));
                $(".select-title").removeClass("select-title");

                var src = $(this).attr("data-url");
                $(this).addClass("select-title");
                if (!src) {
                    dealChildPanel($(this));
                } else {

                    Index.updateIfrmeSrc(src);
                }
            });
            /**
             * 绑定子菜单点击事件，控制页面跳转
             */
            $(".nav-item").off("click").on("click", function () {
                $('.selected-item').removeClass("selected-item");
                $(this).addClass("selected-item");
                var src = $(this).attr("data-url");
                if (src) {
                    Index.updateIfrmeSrc(src);
                }
            });

            $('.base-tabs-btn').off("click").on("click", function () {
                $(".ab-tabs-panel").slideToggle('fast');
            });
            function dealChildPanel(obj) {
                if (!obj) {
                    return;
                }
                var parent = obj.parent();
                $('.sidebar-trans', parent).slideToggle("fast");
            }
        },
        updateIfrmeSrc: function (src) {
            $('#mainFrame').attr("src", src);
        }
    }
    Index.init();

})()
/**
 * 对外提供接口
 * @param src
 */
function goUrl(index, obj) {
    var selectP = $(".sidebar-nav").get(index);
    var url = $('a', $(selectP)).attr("data-url");
    $(".select-title").removeClass("select-title");
    $('a', $(selectP)).addClass("select-title");
    if (obj) {
        $('#mainFrame').attr("src", url + "?" + $.param(obj));
    } else {
        $('#mainFrame').attr("src", url);
    }

}

// 元信息编辑弹窗
function showMetadataEdit(url) {
    $('#metadataEditModal iframe').attr("src", url);
    $("#metadataEditModal").modal('toggle');
}
