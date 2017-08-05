/// <reference path="../../../jquery-1.7.2.js" />
/**
* jQuery geoweblistpanel_gt 1.0.0
* 
* 
*  
* Author liubing 2014 [ liubing@geostar.com.cn ] 
* 
*/
(function ($) {
    $.fn.geoweblistpanel_gt = function (options) {
        var $this = $(this);
        //构造参数
        var opts = $.extend({}, $.ligerDefaults.listpanel, options);
        //构造geowebchart元素
        var htmlarr = [];

        htmlarr.push("<div id='divShenpi' class='uiBox shenpi'>");
        htmlarr.push("     <div id='divShenpiHead' class='head'>");
        htmlarr.push("       <span></span>");
        htmlarr.push("       <h3>"+opts.headTitle+"</h3>");
       
        htmlarr.push("     </div>");
        htmlarr.push("     <ul class='body'  isMove='true' GroupNum ='2'>");

        $(opts.listItem).each(function () {
            var $this = $(this);
            htmlarr.push("<li>");
            if ($this.attr("titleClass")) {
                htmlarr.push("   <div class='" + $this.attr("bClass") + "'></div><h4 class='" + $this.attr("titleClass") + "'>" + $this.attr("title") + "</h4>");
            }
            else {
                htmlarr.push("   <div class='" + $this.attr("bClass") + "'></div><h4>" + $this.attr("title") + "</h4>");
            }
            htmlarr.push("   <table cellspacing='0' cellpadding='0'>");
            htmlarr.push("       <tr>");
            htmlarr.push("          <td  id='" + $this.attr("id") + "'>" + $this.attr("text") + "</td>");
            htmlarr.push("      </tr>");
            htmlarr.push("  </table>");
            htmlarr.push("</li>");
        });

        htmlarr.push("      </ul>");
        htmlarr.push("</div>");

        //设置geoweblistpanel_gt元素到目标容器
        $this.html(htmlarr.join(''));

        if (opts.url) {
            $.get(opts.url, { queryCondition: opts.queryCondition }, function (data) {
                //设置text标签值
                $this.find(".body li td").each(function () {
                    var $td = $(this);
                    //循环对象属性，根据属性关键字设置数据
                    for (var field in data.dataTitle[0]) {
                        //判断是否为属性   
                        if (typeof (data.dataTitle[0][field]) == "function") {
                            data.dataTitle[0][field]();
                        }
                        else {
                            $td.html($td.html().replace(field, data.dataTitle[0][field]));
                        }
                    }
                });

                opts.onload(data);
            }, "json");
        }

    };

    $.ligerDefaults.listpanel = {
        headTitle: "",
        listItem:null,
        url: null,
    };
    // 闭包结束

})(jQuery);