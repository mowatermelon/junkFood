/**
 * Created by caolei on 2016/4/4.
 * 用来扩展js内置对象的方法，调用方法如Date。format("yyyy-MM-dd");
 */


;
(function () {
    function extend(dest, src) {
        for (var i in src)
            dest[i] = src[i];
    }

    var mathAddM = {
        /**
         * 数值类型加法操作
         * 
         * @returns {number}
         */
        floatAdd: function () {
            var f = 0, m = 0, r = 0;
            for (var i = 0; i < arguments.length; i++) {
                var arg = parseFloat(arguments[i]);
                if (arg.toString().indexOf(".") != -1) {
                    f = Math.max(arguments[i].toString().split(".")[1].length, f);
                }
            }
            m = Math.pow(10, f);
            for (var i = 0; i < arguments.length; i++) {
                var arg = parseFloat(arguments[i]);
                r += arg * m;
            }
            return r / m;
        },
        /**
         * 数值类型减法操作
         * @param arg1
         * @param arg2
         */
        floatSub: function (arg1, arg2) {
            arg2 = parseFloat(arg2);
            return mathAddM.floatAdd(arg1, -arg2);
        },
        /**
         *数值类型物乘法操作,多参数
         */
        floatMul: function () {
            var f = 1, m = 1, r = 1;
            for (var i = 0; i < arguments.length; i++) {
                var arg = parseFloat(arguments[i]);
                if (arg.toString().indexOf(".") != -1) {
                    f = arguments[i].toString().split(".")[1].length;
                    m = Math.pow(10, f) * m;
                }
            }
            for (var i = 0; i < arguments.length; i++) {
                var arg = parseFloat(arguments[i]);
                if (arg.toString().indexOf(".") != -1) {
                    var t = arg.toString().split(".")[1].length;
                    r = r * (arg * Math.pow(10, t));
                } else {
                    r = r * arg;
                }
            }
            return r / m;
        },
        /**
         * 数值类型除法操作
         * @param arg0
         * @param arg1
         */
        floatDiv: function (arg0, arg1) {
            var f = 0;
            for (var i = 0; i < arguments.length; i++) {
                var arg = Number(arguments[i]);
                if (arg.toString().indexOf(".") != -1) {
                    var length = arg.toString().split(".")[1].length;
                    f += length;

                }
            }
            return ((arg0 * Math.pow(10, f)) / (arg1 * Math.pow(10, f)));
        }
    }

    extend(Math.prototype || Math, mathAddM);//Ϊmath ������Ӽӷ���


    var arrayAddM = {
        /**
         * 数组判断是否包含对象，返回位置
         * @param {Object} v
         */
        indexOf: function (v) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] === v)
                    return i;
            }
            return -1;
        },
       /**
        * 数组去重
        */
        union: function () {
            var n = []; //一个新的临时数组
            for (var i = 0; i < this.length; i++) //遍历当前数组
            {
                //如果当前数组的第i已经保存进了临时数组，那么跳过，
                //否则把当前项push到临时数组里面
                if (n.indexOf(this[i]) == -1) {
                    n.push(this[i]);
                }
            }
            return n;
        },
        /**
         *
         * @param v
         * @returns {*}
         */
        get: function (v) {
            return this[this.indexOf(v)]
        },
        /**
         *
         * @param v
         * @param idx
         * @returns {*|Blob|ArrayBuffer|Array.<T>|string}
         */
        put: function (v, idx) {
            return this.slice(idx, 0, v)
        },
        /**
         *
         * @param v
         * @returns {*|Blob|ArrayBuffer|Array.<T>|string}
         */
        remove: function (v) {
            return this.slice(this.indexOf(v), 1)
        },
        /**
         * 判断是否包含，返回ture false
         * @param {Object} v
         */
        contain: function (v) {
            return this.indexOf(v) >= 0
        }
    }

    extend(Array.prototype || Array, arrayAddM);//Ϊ���������ӷ���

    var stringAddM = {
        /**
         * int value
         */
        intVal: function () {
            return parseInt(this);
        },
        /**
         * float value
         */
        floatVal: function () {
            return parseFloat(this);
        },
        /**
         *
         * @returns {boolean}
         */
        isNum: function () {
            return isNaN(this * 1);
        }
    }

    extend(String.prototype, stringAddM);//Ϊstring ������Ӽӷ���


    var dateAddM = {
       /**
        * 日期格式化
        */
        format: function (format) {
            var o = {
                "M+": this.getMonth() + 1, // month
                "d+": this.getDate(), // day
                "H+": this.getHours(), // hour
                "m+": this.getMinutes(), // minute
                "s+": this.getSeconds(), // second
                "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
                "S": this.getMilliseconds()
                // millisecond
            }
            if (/(y+)/.test(format))
                format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(format))
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            return format;
        },
        /**
         * 时间加减操作，
         * @param strInterval
         * @param Number
         * @returns {Date}
         */
        addDate: function (strInterval, Number) {
            var dtTmp = this;
            switch (strInterval) {
                case 's'://秒
                    return new Date(dtTmp.getTime() + (1000 * Number));
                case 'n'://分
                    return new Date(dtTmp.getTime() + (60000 * Number));
                case 'h'://时
                    return new Date(dtTmp.getTime() + (3600000 * Number));
                case 'd'://天
                    return new Date(dtTmp.getTime() + (86400000 * Number));
                case 'w'://周
                    return new Date(dtTmp.getTime() + ((86400000 * 7) * Number));
                case 'q'://季
                    return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
                case 'm'://月
                    return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
                case 'y'://年
                    return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
                default :
                    alert("未知类型");
            }

        }

    }

    extend(Date.prototype, dateAddM);//添加日期处理方法
})();

