(function ($) {
    /*
    *  功能:   加载左侧菜单栏
    *  参数:   options
            options.menuXML左侧menu信息json对象
            (支持扩展)
    *  返回值：无
    *  作者：蔡健
    *  日期：2014.4.8
    *  版本：1.0
    */
    $.fn.ligerGeoMenuLeft = function (options) {
        ////构造参数
        //var opts = $.extend({}, $.ligerDefaults.menuParam, options);
        //获取当前操作对象
        var $this = $(this);
        var sMenuXML = options.menuXML;
        //从业务指标/审批监管页面跳转过来
        var sDefaultItemName = options.DefaultItemName;
        var fnOnItemClick = options.OnItemClick;
        //为了在IE7\IE8中使用find()，需要将XML字符串转化为xmlDoc对象
        var xmlDoc;
        try {
            if (window.DOMParser) {
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(sMenuXML, "text/xml");
            } else {
                // Internet Explorer
                xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = "false";
                xmlDoc.loadXML(sMenuXML);
            }

            var sLeftMenuML = "<div class='leftMenu'></div>";
            $(xmlDoc).find("menu").each(function () {
                //临时接收XML字符串
                var sParamXML = "";
                //获取当前menu节点对象
                var oMenuXML$ = $(this);
                //获取menu对象id属性值
                var sMenuId = oMenuXML$.attr("id");
                //获取menu对象class(样式)属性值
                var sMenuClass = oMenuXML$.attr("class");
                //获取menu对象的文本
                var sMenuName = oMenuXML$.attr("name");
                //获取Item对象的文本
                var sMenuDisplay = oMenuXML$.attr("display");
                if (!sMenuDisplay) {
                    sMenuDisplay = sMenuName;
                }
                //item节点的外层的层的id，此节点用于控制item节点的显示和隐藏
                var sDivId = oMenuXML$.attr("itemdiv");
                //item节点的链接的默认url地址，配置在menu的属性中
                var sDefaultUrl = oMenuXML$.attr("defaulUrl");
                //接收对应的menu信息
                var oMenuInfo$;

                //根据信息拼接HTML
                //1.拼接父级按钮(暂时是：用地报批 土地供应)
                sParamXML += "<div></div>";
                oMenuInfo$ = $(sParamXML).append('<span id="' + sMenuId + '" class="' + sMenuClass + '"><span class="point">+</span><label style="margin-left:12px;line-height:55px;">' + sMenuDisplay + '</label></span>');

                //一下是处理item节点的相关信息
                var oItemXml$;
                var sItemId = "";
                var sItemClass = "";
                var sItemName = "";
                var sItemDisplay = "";
                var oItemInfo$;
                var sItemCurUrl = "";
                var sIsselected = "";

                var sItemParamXML = '<div id="' + sDivId + '"></div>';

                var oMenuItem$ = $(oMenuXML$).find("item");
                var nlen = oMenuItem$.length;

                //判断是否已经存在默认选中的项，如果存在多个有ischecked=true的项，则以第一个为主
                var bIshaveChecked = false;

                if (oMenuItem$.length == 0) {
                    //当前CSS类
                    var sClassName = " class='span_other'";
                    var sSpanParam = "";
                    var sNoBottomBorder = "";
                    //存在传过来的默认值，则不读取配置
                    if (sDefaultItemName) {
                        if (sDefaultItemName == sMenuName) {
                            //判断是否有默认值
                            bIshaveChecked = true;
                            sNoBottomBorder += " isselected ='true'";
                            sClassName = " class='span_other status'";
                        }
                    } else if (sIsselected && sIsselected == "true" && bIshaveChecked == false) {
                        //再读取配置文件中的配置
                        bIshaveChecked = true;
                        sNoBottomBorder += " isselected ='true'";
                        sClassName = " class='span_other status'";
                    }
                    sSpanParam = '<span id="' + sMenuId + '"  url="' + sDefaultUrl + '" ' + sNoBottomBorder + ' dname="' + sMenuName + '" title = "' + sMenuDisplay + '" "' + sClassName + '"><span class="point">.</span><label style="margin-left:12px;line-height:55px;">' + sMenuDisplay + '</label></span>';

                    //拼接所有item节点信息
                    if (oItemInfo$) {
                        oItemInfo$ = $(oItemInfo$).append(sSpanParam);
                    } else {
                        oItemInfo$ = $(sParamXML).append(sSpanParam);
                    }

                    //将所有menu点拼接到指定的div中
                    sLeftMenuML = $(sLeftMenuML).append(oItemInfo$);
                    return true;
                }

                oMenuItem$.each(function (i) {
                    //获取当前Item节点对象
                    oItemXml$ = $(this);
                    //获取Item对象id属性值
                    sItemId = oItemXml$.attr("id");
                    //获取Item对象class(样式)属性值
                    sItemClass = oItemXml$.attr("class");
                    //获取Item对象的名称
                    sItemName = oItemXml$.attr("name");
                    //获取Item对象的文本
                    sItemDisplay = oItemXml$.attr("display");
                    //item业务参数链接的页面地址，初始化赋默认值
                    sItemCurUrl = sDefaultUrl;
                    //item节点的默认选中，配置在menu的属性中
                    sIsselected = oItemXml$.attr("isselected");
                    //获取Item对象的curUrl(右边链接页面地址)
                    if (oItemXml$.attr("curUrl")) {
                        sItemCurUrl = oItemXml$.attr("curUrl");
                    }
                    //最后一个则不需要下边框
                    var sNoBottomBorder = "";
                    if (i == (nlen - 1)) {
                        sNoBottomBorder = " style='border-bottom:0px;'";
                    }
                    //当前CSS类
                    var sClassName = " class='span_other'";
                    var sSpanParam = "";
                    //存在传过来的默认值，则不读取配置
                    if (sDefaultItemName) {
                        if (sDefaultItemName == sItemName) {
                            //判断是否有默认值
                            bIshaveChecked = true;
                            sNoBottomBorder += " isselected ='true'";
                            sClassName = " class='span_other status'";
                        }
                    } else if (sIsselected && sIsselected == "true" && bIshaveChecked == false) {
                        //再读取配置文件中的配置
                        bIshaveChecked = true;
                        sNoBottomBorder += " isselected ='true'";
                        sClassName = " class='span_other status'";
                    }
                    sSpanParam = '<span id="' + sItemId + '"  url="' + sItemCurUrl + '" ' + sNoBottomBorder + ' dname="' + sItemName + '" title = "' + sItemDisplay + '" "' + sClassName + '"><label style="margin-left:45px">' + sItemDisplay + '</label></span>';

                    //拼接所有item节点信息
                    if (oItemInfo$) {
                        oItemInfo$ = $(oItemInfo$).append(sSpanParam);
                    } else {
                        oItemInfo$ = $(sItemParamXML).append(sSpanParam);
                    }
                });
                //将子节点拼接到对应menu下
                oMenuInfo$ = oMenuInfo$.append(oItemInfo$);


                //将所有menu点拼接到指定的div中
                sLeftMenuML = $(sLeftMenuML).append(oMenuInfo$);

            });
            //将所有menu点拼接到指定的div中
            $this = $this.append(sLeftMenuML);

            var $curSelMenu = $("div.leftMenu span.status");
            if ($curSelMenu.length > 0) {
                var $curMenuDiv = $curSelMenu.parent();
                var $leftMenu = $("div.leftMenu");
                var curIndex = $leftMenu.find("div").index($curMenuDiv);
                $curSelMenu.click();
                $curMenuDiv.prev().click();

                var offsetHeight = (curIndex + 1) * $curMenuDiv.height() - $leftMenu.height();
                if (offsetHeight > 0) {
                    $leftMenu[0].scrollTop = offsetHeight;
                }
            }

        } catch (e) {

        };


        //注册事件
        $("div.leftMenu span.span_other").bind("click", function () {
            //控制样式 
            $("div.leftMenu span.span_other").each(function (i, value) {
                $(this).removeClass("status");
            });
            $(this).addClass("status");
            $(this).attr("isselected", "true");
            fnOnItemClick(this, sMenuXML);
        });
        /*
        *  功能:   绑定左侧菜单栏的点击事件（1.用地报批2.土地供应）
        *  参数:   无
        *  返回值：无
        *  作者：蔡健
        *  日期：2014.4.8
        *  版本：1.0
        */
        $("span.span_main").bind("click", function () {
            var sId = $(this).attr("id");
            setShowLefMenu(sId);
        });

        $("div.leftMenu span.status").click();
        $("div.leftMenu span.status").parent().prev().click();
    };


    $.fn.geowebMainMenu_gt = function (options) {
        ////构造参数
        //var opts = $.extend({}, $.ligerDefaults.menuParam, options);
        //获取当前操作对象
        var $this = $(this);
        var sMenuXML = options.menuXML;
        var fnOnItemClick = options.OnItemClick;
        //为了在IE7\IE8中使用find()，需要将XML字符串转化为xmlDoc对象
        var xmlDoc;
        try {
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
            sParamXML += "<ul class='shortcut-buttons-set'></ul>";
            $(xmlDoc).find("menu").each(function (i) {
                //获取当前menu节点对象
                var oMenuXML$ = $(this);
                //获取menu对象id属性值
                var sMenuId = oMenuXML$.attr("id");
                //获取menu对象的文本
                var sMenuName = oMenuXML$.attr("name");
                //item节点的链接的对应展示的iframe容器id，配置在menu的属性中
                var sIframeId = oMenuXML$.attr("iframeId");
                //item节点的链接的默认url地址，配置在menu的属性中
                var sDefaultUrl = oMenuXML$.attr("defaulUrl");
                //item节点的链接的默认展示图片的地址，配置在menu的属性中
                var sImageSrc = oMenuXML$.attr("imageSrc");
                //item节点的链接的默认展示图片的地址，配置在menu的属性中
                var sIsselected = oMenuXML$.attr("isselected");
                //接收对应的menu信息
                var oMenuInfo$;

                //变量，用于存放选中的背景图片样式
                var sCheckBgColor = "";
                //根据信息拼接HTML
                if (sIsselected && sIsselected == "true" && bIshaveChecked == false) {
                    sCheckBgColor = 'isselected="true" style="background: url(images/qjqk/1_05.png)"';
                    bIshaveChecked = true;
                }
                //获取所有menu节点
                sParamXML = $(sParamXML).append('<li> ' +
                                                    '<a id="' + sMenuId + '" iframeId="' + sIframeId + '" iframeUrl="' + sDefaultUrl + '"  class="shortcut-button" ' + sCheckBgColor + ' href="#"><span>' +
                                                        '<img src="' + sImageSrc + '" alt="icon" /><br />' +
                                                        sMenuName +
                                                    '</span></a>' +
                                                '</li>');
            });
            //将所有menu点拼接到指定的div中
            $this = $this.append(sParamXML);

        } catch (e) {

        };
        //注册点击事件
        //主界面上 功能切换
        $(".shortcut-button").click(function () {
            $(".shortcut-button").each(function (e) { $(this).css("background", ""); }, null);
            $(this).css("background", "url(./images/qjqk/1_05.png)");
            var str = $(this).attr("iframeUrl");
            //判断配置的URL最后是否是问号“？”
            //是 则需要进行特殊添加参数的操作
            //否 则直接加载配置页面
            if (str.substr(str.length - 1, 1) == "?") {
                fnOnItemClick(this, str);
            } else {
                $("#" + $(this).attr("iframeId")).attr("src", str);
                fnOnItemClick(this, "");
            }

        });
        //设置默认选中
        $(".shortcut-button[isselected='true']").click();
    };


    //$.fn.geowebTopMenu_gt = function (options) {
    //    ////构造参数
    //    //var opts = $.extend({}, $.ligerDefaults.menuParam, options);
    //    //获取当前操作对象
    //    var $this = $(this);
    //    var sMenuXML = options.menuXML;
    //    var fnOnItemClick = options.OnItemClick;
    //    //为了在IE7\IE8中使用find()，需要将XML字符串转化为xmlDoc对象
    //    try {
    //        var xmlDoc;
    //        if (window.DOMParser) {
    //            parser = new DOMParser();
    //            xmlDoc = parser.parseFromString(sMenuXML, "text/xml");
    //        } else {
    //            // Internet Explorer
    //            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    //            xmlDoc.async = "false";
    //            xmlDoc.loadXML(sMenuXML);
    //        }
    //        //判断是否已经存在默认选中的项，如果存在多个有ischecked=true的项，则以第一个为主
    //        var bIshaveChecked = false;
    //        //临时接收XML字符串
    //        var sParamXML = "";
    //        sParamXML += "<ul class='nav'></ul>";
    //        $(xmlDoc).find("menu").each(function (i) {
    //            //获取当前menu节点对象
    //            var oMenuXML$ = $(this);
    //            //获取menu对象id属性值
    //            var sMenuId = oMenuXML$.attr("id");
    //            //获取menu对象的文本
    //            var sMenuName = oMenuXML$.attr("name");
    //            //item节点的链接的对应展示的iframe容器id，配置在menu的属性中
    //            var sIframeId = oMenuXML$.attr("iframeId");
    //            //item节点的链接的默认url地址，配置在menu的属性中
    //            var sDefaultUrl = oMenuXML$.attr("defaulUrl");
    //            //item节点的链接的默认展示图片的地址，配置在menu的属性中
    //            var sImageSrc = oMenuXML$.attr("imageSrc");
    //            //item节点的链接的默认展示图片的地址，配置在menu的属性中
    //            var sIsselected = oMenuXML$.attr("isselected");
    //            //item节点的顺序，配置在menu的属性中
    //            var sTag = oMenuXML$.attr("tag");
    //            //item节点的顺序，配置在menu的属性中
    //            //_blank	在新窗口中打开被链接文档。
    //            //_self	默认。在相同的框架中打开被链接文档。
    //            //_parent	在父框架集中打开被链接文档。
    //            //_top	在整个窗口中打开被链接文档。
    //            //framename	在指定的框架中打开被链接文档。
    //            var sOpenType = oMenuXML$.attr("openType");
    //            if (!sOpenType) {
    //                sOpenType = "";
    //            }
    //            //接收对应的menu信息
    //            var oMenuInfo$;

    //            //变量，用于存放选中的背景图片样式
    //            var sSelectedClass = "";
    //            //根据信息拼接HTML
    //            if (sIsselected && sIsselected == "true" && bIshaveChecked == false) {
    //                sSelectedClass = 'isselected="true" class="status"';
    //                bIshaveChecked = true;
    //            }
    //            //获取所有menu节点
    //            sParamXML = $(sParamXML).append('<li > ' +
    //                                                '<a id="' + sMenuId + '" target="' + sOpenType + '"  iframeId="' + sIframeId + '" iframeUrl="' + sDefaultUrl + '"  ' + sSelectedClass + ' href="#">' +
    //                                                    sMenuName +
    //                                                '</a>' +
    //                                            '</li>');
    //        });
    //        //将所有menu点拼接到指定的div中
    //        $this = $this.append(sParamXML);

    //    } catch (e) {

    //    };
    //    //注册点击事件
    //    //主界面上 功能切换
    //    //注册事件--菜单点击事件
    //    $("ul.nav>li").bind("click", function () {
    //        $("ul.nav>li").removeClass("status");
    //        $(this).addClass("status");
    //        //$("#" + $($(this).find("a")).attr("iframeId")).attr("src", $($(this).find("a")).attr("iframeUrl"));
    //        var a$ = $(this).find("a");


    //        var str = $(a$).attr("iframeUrl");

    //        if (str.substr(str.length - 1, 1) == "?") {
    //            fnOnItemClick($(a$), str);
    //        } else {
    //            $("#" + $(a$).attr("iframeId")).attr("src", str);
    //            fnOnItemClick($(a$), "");
    //        }
    //    });
    //    //设置默认选中
    //    $(".nav>li>a[isselected='true']").click();
    //};

    /*
*  功能:   加载左侧菜单栏
*  参数:   options
        options.menuXML左侧menu信息json对象
        (支持扩展)
*  返回值：无
*  作者：蔡健
*  日期：2014.4.8
*  版本：1.0
*/
    $.fn.geowebmenu2_gt = function (options) {
        ////构造参数
        //var opts = $.extend({}, $.ligerDefaults.menuParam, options);
        //获取当前操作对象
        var $this = $(this);
        //从业务指标/审批监管页面跳转过来
        var sDefaultItemName = options.DefaultItemName;
        var sMenuXML = options.menuXML;
        var fnOnItemClick = options.OnItemClick;

        try {

            var xmlDoc = $.parseXML(sMenuXML);
            //判断是否已经存在默认选中的项，如果存在多个有ischecked=true的项，则以第一个为主
            var bIshaveChecked = false;
            //临时接收XML字符串
            var sParamXML = "";
            sParamXML += "<div class='vgroup' id='statSubMenuDiv'>" +
                         "    <div style='width:183px'>" +
                         "       <center><div id='imgBtnUp' /></center>" +
                         "    </div> ";
            var oMenus = $(xmlDoc).find("menus");

            //默认展示4个按钮
            var nDefaultShowBtn = 4;
            if ($(oMenus).attr("shownum") && $(oMenus).attr("shownum") != "") {
                nDefaultShowBtn = $(oMenus).attr("shownum");
            }

            //开始收集所有按钮
            var nDefault = nDefaultShowBtn * 110 - nDefaultShowBtn;
            var sMenuBtnXML = "<div id='divScrollBar' style='height: " + nDefault + "px;overflow:hidden;'></div>";
            $(xmlDoc).find("menu").each(function (i) {
                //获取当前menu节点对象
                var oMenuXML$ = $(this);
                //获取menu对象id属性值
                var sMenuId = oMenuXML$.attr("id");
                //获取menu对象的文本
                var sMenuName = oMenuXML$.attr("name");
                //item节点的链接的默认url地址，配置在menu的属性中
                var sDefaultUrl = oMenuXML$.attr("defaulUrl");
                //item节点的链接的默认展示图片的地址，配置在menu的属性中
                var sImageSrc = oMenuXML$.attr("imageSrc");
                //item节点的链接的默认展示图片的地址，配置在menu的属性中
                var sIsselected = oMenuXML$.attr("isselected");


                //接收对应的menu信息
                var oMenuInfo$;

                //变量，用于存放选中的背景图片样式
                var sSelectedClass = "class='menu2_subaero'";
                //根据信息拼接HTML
                var sSpanParam = "";
                //存在传过来的默认值，则不读取配置
                if (sDefaultItemName) {
                    if (sDefaultItemName == sMenuName) {
                        //判断是否有默认值
                        sSelectedClass = 'isselected="true" class="menu2_subaero menu2_selected"';
                        bIshaveChecked = true;
                    }
                } else if (sIsselected && sIsselected == "true" && bIshaveChecked == false) {
                    sSelectedClass = 'isselected="true" class="menu2_subaero menu2_selected"';
                    bIshaveChecked = true;
                }
                //获取所有menu节点
                sMenuBtnXML = $(sMenuBtnXML).append('<a id="' + sMenuId + '" title="' + sMenuName + '" url="' + sDefaultUrl + '" class="sub_meun" href="#"> ' +
                                                    '<div id="' + (i + 1) + '" style="margin: 2px 3px 2px 3px; width: 177px; height: 105px; float: left; display: block;" ' + sSelectedClass + '>' +
                                                        '<div style="margin:5px; width:167px;height:78px;background-image:url(' + sImageSrc + ');background-repeat:no-repeat;z-index:999;">' +
                                                        '</div>' +
                                                        '<center>' + sMenuName + '</center>' +
                                                    '</div>' +
                                                '</a>');
            });
            //将所有menu点拼接到指定的div中
            sParamXML += sMenuBtnXML[0].outerHTML;
            sParamXML += "    <div style='width:183px'>" +
                         "       <center><div id='imgBtnDown' /></center>" +
                         "    </div> " +
                         " </div> ";
            $this = $this.append(sParamXML);

        } catch (e) {

        };


        //上拉
        $("div.menu2_subaero").click(function () {
            $("#statSubMenuDiv a div").removeClass("menu2_selected");
            $(this).addClass("menu2_selected");
            fnOnItemClick($(this).parent());
        });

        //上拉
        $("#imgBtnUp").click(ScrollBarUp);
        //下拉
        $("#imgBtnDown").click(ScrollBarDown);

        var diffNo = 0;
        function ScrollBarUp() {

            if (diffNo >= 1) {
                diffNo -= 1;
            }

            $(".sub_meun>div").each(function (idx, btn) {
                var showid = $(this).attr("id") - diffNo;
                if (showid >= 1 && showid <= nDefaultShowBtn) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            });

        };

        function ScrollBarDown() {

            if (($(".sub_meun>div").size() - diffNo) <= nDefaultShowBtn) {
                return;
            }
            diffNo += 1;
            $(".sub_meun>div").each(function (idx, btn) {
                var showid = $(this).attr("id") - diffNo;
                if (showid >= 1 && showid <= nDefaultShowBtn) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            });
        };

        //默认选中按钮
        $("div.menu2_subaero[isselected='true']").click();
    };


    /*
*  功能:   加载左侧菜单栏
*  参数:   options
        options.menuXML左侧menu信息json对象
        (支持扩展)
*  返回值：无
*  作者：蔡健
*  日期：2014.4.8
*  版本：1.0
*/
    $.fn.geowebmenu2_top_gt = function (options) {
        ////构造参数
        //var opts = $.extend({}, $.ligerDefaults.menuParam, options);
        //获取当前操作对象
        var $this = $(this);
        //从业务指标/审批监管页面跳转过来
        var sDefaultItemName = options.DefaultItemName;
        var sMenuXML = options.menuXML;
        var fnOnItemClick = options.OnItemClick;

        try {

            var xmlDoc = $.parseXML(sMenuXML);
            //判断是否已经存在默认选中的项，如果存在多个有ischecked=true的项，则以第一个为主
            var bIshaveChecked = false;
            //临时接收XML字符串
            var sParamXML = "";
            sParamXML += "<div  id='statSubMenuDiv_top'>" +
                         "    <div style='display:inline;float:left;padding:0;'>" +
                         "       <center><div id='imgBtnUp_top' /></center>" +
                         "    </div> ";
            var oMenus = $(xmlDoc).find("menus");

            //默认展示4个按钮
            var nDefaultShowBtn = 4;
            if ($(oMenus).attr("shownum") && $(oMenus).attr("shownum") != "") {
                nDefaultShowBtn = $(oMenus).attr("shownum");
            }

            //开始收集所有按钮
            var nDefault = nDefaultShowBtn * 184 - nDefaultShowBtn;
            var sMenuBtnXML = "<div id='divScrollBar_top' style='width: " + nDefault + "px;float:left; display:inline;overflow:hidden'></div>";
            $(xmlDoc).find("menu").each(function (i) {
                //获取当前menu节点对象
                var oMenuXML$ = $(this);
                //获取menu对象id属性值
                var sMenuId = oMenuXML$.attr("id");
                //获取menu对象的文本
                var sMenuName = oMenuXML$.attr("name");
                //item节点的链接的默认url地址，配置在menu的属性中
                var sDefaultUrl = oMenuXML$.attr("defaulUrl");
                //item节点的链接的默认展示图片的地址，配置在menu的属性中
                var sImageSrc = oMenuXML$.attr("imageSrc");
                //item节点的链接的默认展示图片的地址，配置在menu的属性中
                var sIsselected = oMenuXML$.attr("isselected");


                //接收对应的menu信息
                var oMenuInfo$;

                //变量，用于存放选中的背景图片样式
                var sSelectedClass = "class='menu2_subaero_top'";
                //根据信息拼接HTML
                var sSpanParam = "";
                //存在传过来的默认值，则不读取配置
                if (sDefaultItemName) {
                    if (sDefaultItemName == sMenuName) {
                        //判断是否有默认值
                        sSelectedClass = 'isselected="true" class="menu2_subaero_top menu2_selected_top"';
                        bIshaveChecked = true;
                    }
                } else if (sIsselected && sIsselected == "true" && bIshaveChecked == false) {
                    sSelectedClass = 'isselected="true" class="menu2_subaero_top menu2_selected_top"';
                    bIshaveChecked = true;
                }
                var sIsDefaultDisplay = "none";
                //判断哪些需要显示，哪些隐藏并用按钮控制显示
                if (i + 1 <= nDefaultShowBtn) {
                    sIsDefaultDisplay = "block";
                }

                //获取所有menu节点
                sMenuBtnXML = $(sMenuBtnXML).append('<a id="' + sMenuId + '" title="' + sMenuName + '" url="' + sDefaultUrl + '" class="sub_meun" href="#"> ' +
                                                    '<div id="' + (i + 1) + '" style="margin: 2px 3px 2px 3px; width: 177px; height: 105px; float: left; display:' + sIsDefaultDisplay + ';" ' + sSelectedClass + '>' +
                                                        '<div style="margin:5px; width:167px;height:78px;background-image:url(' + sImageSrc + ');background-repeat:no-repeat;z-index:999;">' +
                                                        '</div>' +
                                                        '<center>' + sMenuName + '</center>' +
                                                    '</div>' +
                                                '</a>');
            });
            //将所有menu点拼接到指定的div中
            sParamXML += sMenuBtnXML[0].outerHTML;
            sParamXML += "    <div style='display:inline;float:left;'>" +
                         "       <center><div id='imgBtnDown_top' /></center>" +
                         "    </div> " +
                         " </div> ";
            $this = $this.append(sParamXML);

        } catch (e) {

        };


        //上拉
        $("div.menu2_subaero_top").click(function () {
            $("#statSubMenuDiv_top a div").removeClass("menu2_selected_top");
            $(this).addClass("menu2_selected_top");
            fnOnItemClick($(this).parent());
        });

        //默认选中按钮
        $("div.menu2_subaero_top[isselected='true']").click();
        //上拉
        $("#imgBtnUp_top").click(ScrollBarUp);
        //下拉
        $("#imgBtnDown_top").click(ScrollBarDown);

        var diffNo = 0;
        function ScrollBarUp() {

            if (diffNo >= 1) {
                diffNo -= 1;
            }

            $(".sub_meun>div").each(function (idx, btn) {
                var showid = $(this).attr("id") - diffNo;
                if (showid >= 1 && showid <= nDefaultShowBtn) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            });

        }

        function ScrollBarDown() {

            if (($(".sub_meun>div").size() - diffNo) <= nDefaultShowBtn) {
                return;
            }
            diffNo += 1;
            $(".sub_meun>div").each(function (idx, btn) {
                var showid = $(this).attr("id") - diffNo;
                if (showid >= 1 && showid <= nDefaultShowBtn) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            });
        }
    };

    //加载页面的时候，需要默认选中按钮
    $.fn.geowebDefaultSelMenu_gt = function (options) {
        //构造参数
        //var opts = $.extend({}, $.ligerDefaults.menuParam, options);
        var sDefaultItemName = "";
        if (options) {
            sDefaultItemName = options.DefaultItemName;
            //默认选中大类，并展开其二级菜单
            showOrHiddenLeftMenu(sDefaultItemName);
            options.OnItemClick();
            //默认点击二级菜单
            //onAnchorClick(sDefaultItemName);
        }
    };


    /*
    *  功能:   设置影藏显示左侧菜单栏 
    *  参数:   sId    当前点击按钮的ID
    *  返回值：无
    *  作者：蔡健             -------------需封装
    *  日期：2014.4.29
    *  版本：1.0
    */
    function setShowLefMenu(sId) {

        //注意：一下步骤1、2的顺序不能修改
        //1.先改变自己点层的显示和隐藏
        //判断点击的对象是否与之前选中对象相同
        if ($("span.span_main_chg").attr("id") == sId) {
            //相同，则判断当前选中对象对应的子节点层是否影藏
            if ($("span.span_main_chg").next("div").css("display") == "none") {
                //是(隐藏)，
                $("span.span_main_chg").next("div").css("display", "");
                controlExpandOrShrink($("span.span_main_chg"), "-");
            } else {
                //否(显示)，则将层设置为隐藏
                $("span.span_main_chg").next("div").css("display", "none");
                controlExpandOrShrink($("span.span_main_chg"), "+");
            }
        } else {
            //不相同，则影藏前一对象对应的子节点层
            $("span.span_main_chg").next("div").css("display", "none");
            //展示当前选中的层
            $("#" + sId).next("div").css("display", "");
            //设置展开和收缩的符号 +/-
            controlExpandOrShrink($("#" + sId), "-");
            controlExpandOrShrink($("span.span_main_chg"), "+");
        }
        //2.再改变
        //将之前选中的对象的样式初始化
        $("span.span_main_chg").attr("class", "span_main");
        $("span.fh_sel").attr("class", "fh_unsel");
        //根据点击对象的ID，改变点击对象的样式
        $("#" + sId).attr("class", "span_main_chg");
        $($("#" + sId).children("span")).attr("class", "fh_sel");
        $(".span_main").nextAll().css("display", "none");
        $(".span_main_chg").css("margin-left", "5%");
    };


    /*
    *  功能:   判断当前跳转后需要默认打开的业务指标项属于哪一大类(两大类：1.用地报批2.土地供应 )
    *  参数:   隐藏域中的值（业务指标名称）
    *  返回值：无
    *  作者：蔡健
    *  日期：2014.4.8
    *  版本：1.0
    */
    function showOrHiddenLeftMenu(sYwzbName) {
        //初始化变量，用于保存大类ID
        var sId = "";
        var oParam$ = "";
        if (sYwzbName == undefined || sYwzbName == "") {
            //初始化时，默认给多一个大类
            oParam$ = $($($($(".leftMenu span")[0]).parent()).parent()).find("span.span_main");
        } else {
            //获取大类对象
            oParam$ = $($($(".leftMenu span[title='" + sYwzbName + "']").parent()).parent()).find("span.span_main");
        }
        //获取大类对象的ID
        sId = oParam$.attr("id");
        setShowLefMenu(sId);
    };


    /*
    *  功能:   加载左侧菜单栏中加减号控制(+ -),控制展开收缩符号
    *  参数:   obj$ --当前点击的左侧菜单按钮
                sFh --+ -号
    *  返回值：无
    *  作者：蔡健
    *  日期：2014.4.8
    *  版本：1.0
    */
    function controlExpandOrShrink(obj$, sFh) {
        //获取当前展开/收缩符号（+/-）Span对象
        var oSpan = obj$.children("span");
        //设置当前值
        obj$.children("span").text(sFh);
    };

})(jQuery);