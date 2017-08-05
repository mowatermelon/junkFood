/**
 * Created by caolei on 2016/7/15.
 */
var geoStarUtil = window._util = {
    /**
     * 解析链接地址中的参数信息，封装成obj对象返回，
     *
     * @returns {*}
     */
    parseUrl: function (url) {
        url = url || location.href;
        if (url.indexOf("?") != -1) {
            var arr = url.split("?")[1].split("&");
            var array = {};
            for (var i = 0; i < arr.length; i++) {
                array[arr[i].split("=")[0]] = arr[i].split("=")[1];
            }
            return array;
        } else {
            return null;
        }
    },

    /**
     * 计算两个日期相关天数
     *
     * @param sDate1
     * @param sDate2
     * @returns {Number|*}
     * @constructor
     */
    DateDiff: function (sDate1, sDate2) { // sDate1和sDate2是2006-12-18格式

        var iDays = parseInt(Math.abs(this.getDate(sDate1).getTime()
                - this.getDate(sDate2).getTime())
            / 1000 / 60 / 60 / 24) // 把相差的毫秒数转换为天数
        return iDays
    },
    /**
     * 判断目标值是否为空，p是目标值，默认不判断为0的情况，如果b为ture的话，判断p如果是0，则也看成是空值
     *
     * @param p
     * @param b
     * @returns {boolean}
     */
    isEmty: function (p, b) {

        var flag = false;
        if (!p || p == 'undefined' || p == 'null') {
            flag = true;
        }
        if (!b && p == 0) {
            flag = false;
        }
        return flag;
    },
    /**
     * 解析ehart格式 data一般为bootstarp-table获取的表格数据
     */
    parseChartData: function (data) {
        var returnObj = {};
        if (data && data.length) {
            createOption(data[0]);// 获取数据的列头
            for (var i = 0; i < data.length; i++) {
                var dataObj = data[i];
                for (var k in returnObj) {
                    returnObj[k].push(dataObj[k] || 0);
                }
            }
        }
        /**
         * 根据列头生成数组
         *
         * @param dataObj
         */
        function createOption(dataObj) {
            for (var k in dataObj) {
                returnObj[k] = [];
            }
        }

        return returnObj;
    },
    /**
     * 截取字符串长度
     */
    colvalue: function (cv, count) {
        if (cv.length > count) {
            var pattern = RegExp("(<IMG\\s*[\\S]*\\s*/\\s*>)([\\S]*)");
            if (pattern.exec(cv)) {
                var str1 = RegExp.$1;
                var str2 = RegExp.$2;
                return str1 + str2.substring(0, count) + "...";
            } else {
                return cv.substring(0, count) + "...";
            }
        } else {
            return cv;
        }
    },
    /**
     * 转换成日期格式
     *
     * @param st
     * @returns {Date}
     */
    getDate: function (st) {
        var a = st.split(" ");
        var b = a[0].split("-");
        var date;
        if (a.length > 1) {
            var c = a[1].split(":");
            date = new Date(b[0], b[1] - 1, b[2], c[0], c[1], c[2]);
        } else {
            date = new Date(b[0], b[1] - 1, b[2]);
        }
        return date;

    },
    /**
     * 使用ajax加载数据
     *
     * @param url
     * @param data
     * @param c
     */
    ajaxData: function (url, data, c, async) {
        $.ajax({
            url: url,
            data: data,
            type: type || "post",
            async: async == false ? false : true,
            dataType: "json",
            success: function (r) {
                c && c(r);
            }
        })
    },
    /**
     * 查询dps服务数据
     */
    loadDPS: function (data, c) {
        this
            .ajaxData(
            'http://192.168.1.248:9010/DPS/dps?SERVICE=DataPivotService&VERSION=1.0.0&REQUEST=Query',
            data, c, 'get');
    },
    /**
     *
     * @param queryObj
     *            查询参数对象 参数为：queryID 对应queryids.json中的key page:查询第几页，
     *            rows:一页多少条数据
     *
     * @param c
     */
    loadGridData: function (queryObj, c) {
        var resultObj = {
            total: '',
            rows: []
        }
        if (!queryObj.queryId) {
            alert("参数不全，查询id为空");
        }
        var data = {
            datasetId: queryIds[queryObj.queryId],
            ROWFILTER: queryObj['ROWFILTER']
        }
        data.COLFILTER = 'count(*) as total';
        this.loadDPS(data, function (str) {
            var features = str.features;
            var attributes = features[0].attributes;
            resultObj.total = attributes.TOTAL;
            delete data.COLFILTER;
        })
        if (queryObj.page && queryObj.rows) {
            data.MAXCOUNT = queryObj.rows;
            data.STARTPOSITION = (--queryObj.page) * queryObj.rows
        }
        this.loadDPS(data, function (str) {
            var features = str.features;
            if (features && features.length) {
                for (var i = 0; i < features.length; i++) {
                    resultObj.rows.push(features[i].attributes);
                }

            }
        })

        c && c(resultObj);
    }

}