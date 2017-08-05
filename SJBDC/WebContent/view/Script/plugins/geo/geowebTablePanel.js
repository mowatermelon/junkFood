/// <reference path="../../../jquery-1.7.2.js" />
/**
* jQuery geowebTablePanel 1.0.0
* 
* 
*  
* Author liubing 2014 [ liubing@geostar.com.cn ] 
* 修改人 sunxueting 2015-09-25 
*/
(function ($) {
    $.fn.geowebtablepanel_gt = function (options) {
        var $this = $(this);
        //构造参数
        var opts = $.extend({}, $.ligerDefaults.map, options);

        //构造geowebtablepanel_gt元素
        var htmlarr = [];
        htmlarr.push("<div id='divProj' class='uiBox project'>");
        if (opts.showtitle != undefined && opts.showtitle) {
            htmlarr.push("    <div id='divProjHead' class='head'>");
            htmlarr.push("        <h3>" + opts.headTitle + "</h3>");
            htmlarr.push("        <span></span>");
            htmlarr.push("   </div>");
        }
        htmlarr.push("  <div class='body'  isMove='true' GroupNum ='2'>");
        htmlarr.push("   <table class='projData' cellspacing='0' cellpadding='0'>");
        htmlarr.push("    <thead>");
        htmlarr.push("        <tr>");
        htmlarr.push("            <td class='backColor'>项目名称</td>");
        htmlarr.push("            <td class='backColor'>是否报批</td>");
        htmlarr.push("            <td class='backColor'>是否征地</td>");
        htmlarr.push("            <td class='backColor'>是否供地</td>");
        htmlarr.push("            <td class='backColor'>是否开工</td>");
        htmlarr.push("        </tr>");
        htmlarr.push("    </thead>");
        htmlarr.push("    <tbody id='tBodyZdxm'>");
        htmlarr.push("     </tbody>");
        htmlarr.push("    </table>");
        htmlarr.push("  </div>");
        htmlarr.push("</div>");
        //设置geowebtablepanel_gt元素到目标容器
        $this.html(htmlarr.join(''));

        if (opts.url) {
            $.get(opts.url, { queryCondition: opts.queryCondition }, function (data) {
                LoadData(data);
                opts.onload($.toJSON(data.dataBody));
            }, "json");
        }
    };
    //alert(123);
    $.ligerDefaults.tablepanel = {
        headTitle: "",
        url: null,
    };
    // 闭包结束

    /*
*  功能:   加载重点项目列表
*  参数:   无
*  返回值：无
*  作者：newpin
*  日期：2013.11.04
*  版本：1.0
*/
    function LoadData(data) {
        //重点项目超期
        $("#zdxmcq").html(data.dataTitle[0].ZDXMCQ);
        //重点项目个数
        $("#zdxmzs").html(data.dataTitle[0].ZDXMGS);
        //重点项目列表行索引
        var index = 1;

        //拼接重点项目table
        for (var p in data.dataBody) {
            //项目名称全名
            var title;
            title = data.dataBody[p].KEYNAME;

            if (data.dataBody[p].KEYNAME.length > 6) {
                data.dataBody[p].KEYNAME = data.dataBody[p].KEYNAME.substr(0, 6) + "...";
            }

            var strTmp = '<tr code="' + index + '" ><td title="[title]">KEYNAME</td> <td>' +
                         '<img src="../../Images/ISBP.png" alt="图片说明" /></td>' +
                         '<td><img src="../../Images/ISZD.png" alt="图片说明" /></td>' +
                         '<td><img src="../../Images/ISGD.png" alt="图片说明" /></td>' +
                         '<td><img src="../../Images/ISKG.png" alt="图片说明" /></td></tr>';

            var $tr = $(strTmp)
            ;
            $tr.html($tr.html().replace("KEYNAME", data.dataBody[p].KEYNAME));
            $tr.html($tr.html().replace("ISBP", data.dataBody[p].ISBP));
            $tr.html($tr.html().replace("ISZD", data.dataBody[p].ISZD));
            $tr.html($tr.html().replace("ISGD", data.dataBody[p].ISGD));
            $tr.html($tr.html().replace("ISKG", data.dataBody[p].ISKG));
            $tr.html($tr.html().replace("[title]", title));

            //设置行索引
            $tr.data("rowid", index);
            //添加行到表格
            $tr.appendTo("#tBodyZdxm");
            //行索引自增
            index += 1;

        }

        //让表格间隔出现灰白底色
       // $("#tBodyZdxm tr:odd").css("background-color", "#fafafa");

    };

})(jQuery);