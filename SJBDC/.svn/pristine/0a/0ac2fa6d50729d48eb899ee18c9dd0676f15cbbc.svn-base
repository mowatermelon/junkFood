/// <reference path="../../../jquery-1.7.2.js" />
/**
* jQuery geowebmap_gt 1.0.0
* 
* 
*  
* Author liubing 2014 [ liubing@geostar.com.cn ] 
* 
*/
(function ($) {
    $.fn.geowebmap_gt = function (options) {
        var $this = $(this);
        //构造参数
        var opts = $.extend({}, $.ligerDefaults.map, options);

        //构造geowebmap_gt元素
        var maphtmlarr = [];
        maphtmlarr.push("                  <div  class='g-container'>");
        maphtmlarr.push("                        <div class='g-container-head'>");
        maphtmlarr.push("                              <span></span>");
        maphtmlarr.push("                             <h3>"+opts.headTitle+"</h3>");
        maphtmlarr.push("                         </div>");
        maphtmlarr.push("                         <div class='g-container-content'>");
        maphtmlarr.push("                         <iframe id='ifrmMap' name='ifrmMap' frameborder='0' src='"+opts.url+"'></iframe>");
        maphtmlarr.push("                          </div>");
        maphtmlarr.push("                   </div>");
        //设置geowebchart元素到目标容器
        $this.html(maphtmlarr.join(''));
    };

    $.ligerDefaults.map = {
        headTitle: "",
        url: "./flex/publish/index.html?config=appcfg_mini.xml&stattype=GetXZJSYD",
    };
    // 闭包结束
})(jQuery);