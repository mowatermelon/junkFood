
(function () {
    var GeoCloud = window.GeoCloud = function () {
        return new GeoCloud.fn.init();
    },

        _Geo = window.Geo,

        //应用路径
        appPath = "/geocloud-portal/";

    GeoCloud.fn = GeoCloud.prototype = {

        /**
         * 初始化
         */
        init: function () {
            return this;
        },

        /**
         * 版本号
         */
        version: "1.0"

    };

    GeoCloud.fn.init.prototype = GeoCloud.fn;

    GeoCloud.extend = GeoCloud.fn.extend = function () {
        // copy reference to target object
        var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options, name, src, copy;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            // skip the boolean and the target
            i = 2;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !GeoCloud.isFunction(target)) {
            target = {};
        }

        // extend GeoCloud itself if only one argument is passed
        if (length === i) {
            target = this;
            --i;
        }

        for (; i < length; i++) {
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {
                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    }

                    // Recurse if we're merging object values
                    if (deep && copy && typeof copy == "object" && !copy.nodeType)
                        target[name] = GeoCloud.extend(deep,
                            // Never move original objects, clone them
                            src || (copy.length != null ? [] : {})
                        , copy);

                        // Don't bring in undefined values
                    else if (copy !== undefined)
                        target[name] = copy;
                }
            }
        }

        // Return the modified object
        return target;
    };


    /**
     * 扩展方法
     */
    GeoCloud.extend({

        /**
         * 获取应用路径
         */
        getAppPath: function (url) {
            return appPath + url;
        },

        /**
         * 判断某个元素是否在数组中
         * @return 若在返回下标，否则返回-1 
         */
        inArray: function (elem, array) {
            for (var i = 0, length = array.length; i < length; i++)
                // Use === because on IE, window == document
                if (array[i] === elem)
                    return i;

            return -1;
        },

        /**
         * 从指定数组中去除指定值
         * @return 新的数组 
         */
        removeValFromArr: function (val, arr) {
            var len = arr.length;
            for (var i = 0; i < len; i++) {
                if (arr[i] == val) {
                    arr.splice(i, 1);
                }
            }
            return arr;
        },

        /**
         * 获取URL问号后面的值
         * @return 返回指定key的value
         */
        getParam: function (param) {
            var local = document.location.search.substring(1);
            var splits = local.split("&");
            for (var i = 0; i < splits.length; i++) {
                var sp = splits[i];
                if (sp.indexOf(param + "=") == 0) {
                    var val = sp.substring(param.length + 1);
                    return decodeURIComponent(val);
                }
            }
        },

        /**
         * 判断对象是否为空
         * return true:为空 false:不为空 
         */
        isEmptyObjec: function (obj) {
            if (!obj) {
                return true;
            }

            for (var o in obj) {
                return false;
            }

            return true;
        },

        isFunction: function (obj) {
            return toString.call(obj) === "[object Function]";
        },

        isArray: function (obj) {
            return toString.call(obj) === "[object Array]";
        },

        /**
         * 截取字符串指定长度，超过指定长度则"..."显示
         * @param str-原字符串
         * @param len要截取的字符个数
         * 
         * @return string 截取后的字符串
         */
        strCut: function (str, len) {
            var s = str || "";
            var l = s.length;
            return l > parseInt(len) ? s.substr(0, len) + "..." : s;
        },

        

        logout: function () {
        	window.location=Geo.getAppPath("user/logout.do?t=" + Date.parse(new Date));
        	//window.location=Geo.getAppPath("j_spring_security_logout");
        	
        },

        /**
         * 平台登录统一入口
         * @param cbUrl 登录后跳转地址，为空时代表回到登录之前的页面 
         */
        ssoLogin: function (cbUrl) {
            var callbackUrl = "";
            if (cbUrl) {
                callbackUrl = encodeURIComponent(cbUrl);
            } else {
                callbackUrl = encodeURIComponent(window.location);
            }
            window.location = Geo.getAppPath("login.html?t=" + Date.parse(new Date) + "&callbackUrl=" + callbackUrl);
        }


    });

    // Expose GeoCloud to the global object
    window.GeoCloud = window.Geo = GeoCloud;

})();

