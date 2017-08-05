/*********************************************
*  作者：郭磊
*  日期：2015.01.23
*  版本：1.0
**********************************************/
(function () {
    //方法继承
    Function.prototype.GeoExtend = function (parent, overrides) {
        if (typeof parent != 'function') return this;
        //保存对父类的引用
        this.base = parent.prototype;
        this.base.constructor = parent;
        //继承
        var f = function () { };
        f.prototype = parent.prototype;
        this.prototype = new f();
        this.prototype.constructor = this;
        //附加属性方法
        if (overrides) $.extend(this.prototype, overrides);
    };

    var ArrFunc = ["AdjustPage", "BindEvent", "QueryBox", "Init", "PageRender", "InitGrid", "InitMap"];
    //页面基类
    window.GeoBasePage = function () { };
    //页面自适应
    GeoBasePage.prototype.AdjustPage = null;
    //事件绑定
    GeoBasePage.prototype.BindEvent = null;
    //查询条件
    GeoBasePage.prototype.QueryBox = null;
    //页面初始化
    GeoBasePage.prototype.Init = null;
    //页面展示
    GeoBasePage.prototype.PageRender = null;
    //初始化表格数据
    GeoBasePage.prototype.InitGrid = null;
    //初始化图形数据
    GeoBasePage.prototype.InitMap = null;
    //判断当前的类是否实现基类的方法
    GeoBasePage.prototype.GeoBasePageOverride = function () {
        var result = true;
        var funcList = {};
        for (var prop in this) {
            if ((this[prop] == null || this[prop] == undefined) && !this.hasOwnProperty(prop)) {
                result = false;
            }
            else {
                if (typeof this[prop] === "function" && prop !== "GeoBasePageOverride") {
                    funcList[prop] = this[prop];
                }
            }
        }
        if (result == false) {
            alert("子类未实现基类的所有方法，请确认！");
        }
        else {
            for(var i = 0; i < ArrFunc.length; i++)
            {
                funcList[ArrFunc[i]]();
            }
        }
    }
})();