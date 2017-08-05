(function () {
    //对javascript原生对象的扩展
    var __undefined = function () {
        //函数反柯理化
        Function.prototype._uncurrying = function () {
            var _this = this;
            return function () {
                return Function.prototype.call.apply(_this, arguments);
            };
        };

        //执行指定次数的 fun 动作
        Number.prototype._times = function (fun) {
            var n = parseInt(this), L = isNaN(n) ? 0 : n;
            for (var i = 0; i < L; i++) {
                Function.prototype.call.apply(fun, [null, i]);
            }
        };

        //去掉字符串左边的空白字符
        String.prototype._ltrim = function () {
            return String.prototype.replace.call(this, /^\s+/g, '');
        };

        //去掉字符串右边的空白字符
        String.prototype._rtrim = function () {
            return String.prototype.replace.call(this, /\s+$/g, '');
        };

        //去掉字符串左右两边的空白字符
        String.prototype._trim = function () {
            return String.prototype.replace.call(this, /^\s+|\s+$/g, '');
        };

        //将字符串重复 num 次返回新的字符串
        String.prototype._repeat = function (num) {
            num = isNaN(parseInt(num)) ? 1 : parseInt(num);
            var str = this, arr = [];
            Number.prototype._times.call(num, function (i) {
                arr.push(str);
            });
            return arr.join('');
        };

        /*
        *以只读的方式遍历一个数组
        *
        *fun：对数组每个元素做处理的方法,接收两个参数：i（该元素在数组中的索引），it（该元素）
        *funr：返回一个包含三个数字数组,接收两个参数：i（该元素在数组中的索引），it（该元素）
        */
        Array.prototype._eachRead = function (fun, funr) {
            return __common.arrayEachRead(this, fun, funr);
        };

        /*
        *以写的方式遍历一个数组
        *
        *fun：返回一个值用于替换该元素的原值,接收两个参数：i（该元素在数组中的索引），it（该元素）
        *funr：返回一个包含三个数字数组,接收两个参数：i（该元素在数组中的索引），it（该元素）
        */
        Array.prototype._eachWrite = function (fun, funr) {
            return __common.arrayEachWrite(this, fun, funr);
        };


        /*
        *查找某元素在数组中第一次出现的位置
        *
        *item：要查找的元素或元素的某个属性值
        *fun：返回元素或元素的属性值用于跟item比较，接收两个参数：i（该元素在数组中的索引），it（该元素）
        */
        Array.prototype._indexOf = function (item, fun) {
            var ind = -1, val = null,
                isf = __common.isFunction(fun);
            Array.prototype._eachRead.call(this, function (i, it) {
                val = isf ? fun(i, it) : it;
                ind = i;
            }, function (i, it) {
                return item == val ? [0, 1] : null;
            });
            return ind;
        };


        /*
        *查找某元素在数组中最后一次出现的位置
        *
        *item：要查找的元素或元素的某个属性值
        *fun：返回元素或元素的属性值用于跟item比较，接收两个参数：i（该元素在数组中的索引），it（该元素）
        */
        Array.prototype._lastIndexOf = function (item, fun) {
            var ind = -1, val = null,
                isf = __common.isFunction(fun);
            Array.prototype._eachRead.call(this, function (i, it) {
                val = isf ? fun(i, it) : it;
                ind = val == item ? i : ind;
            });
            return ind;
        };


        /*
        *根据原数组创建一个新的数组
        *
        *fun：返回一个值作为新数组的对应索引位置的值,接收两个参数：i（该元素在数组中的索引），it（该元素）
        *fune：返回一个bool值确定是否要将将对应的索引的新元素添加到新数组中去
        */
        Array.prototype._new = function (fun, fune) {
            var arr = [];
            Array.prototype._eachRead.call(this, function (i, it) {
                if (!__common.isFunction(fune) || Function.prototype.call.apply(fune, [null, i, it])) {
                    arr.push(Function.prototype.call.apply(fun, [null, i, it]));
                }
            });
            return arr;
        };

        /*
        *对Array.join方法的扩展，用于内部元素比较复杂的数组
        *
        *tag：join时的间隔字符串
        *fun：返回对数组的每个元素组处理后的结果，接收两个参数：i（该元素在数组中的索引），it（该元素）
        */
        Array.prototype._join = function (tag, fun) {
            if (typeof fun == 'function') {
                var arr = [];
                Array.prototype._eachRead.call(this, function (i, it) {
                    arr.push(fun(i, it) || '');
                });
                return arr.join(tag || ',');
            }
            return Array.prototype.join.call(this, tag || ',');
        };

        /*
        *去掉数组中重复的项
        *
        *fun：返回该元素或对元素做处理后的结果（根据该结果去掉重复的），接收两个参数：i（该元素在数组中的索引），it（该元素）
        */
        Array.prototype._uniq = function (fun) {
            if (typeof fun == 'function') {
                var obj = {}, arr = [];
                Array.prototype._eachRead.call(this, function (i, it) {
                    var nit = fun(i, it);
                    if (typeof obj[nit] == 'undefined') {
                        obj[nit] = it;
                    }
                });
                __common.objectEachRead(obj, function (it, val) {
                    arr.push(val);
                });
                return arr;
            }
            return this;
        };

        /*
        *对Array.join方法的扩展，用于内部元素比较复杂的数组
        *
        *fun：返回一个bool值用于确定是否要选中该元素，接收两个参数：i（该元素在数组中的索引），it（该元素）
        *count：要选中元素的数量，如果该参数不是数字则选中所有符合条件的元素
        */
        Array.prototype._select = function (fun, count) {
            if (typeof fun == 'function') {
                var arr = [], coun = parseInt(count);
                Array.prototype._eachRead.call(this, function (i, it) {
                    if (fun(i, it)) {
                        arr.push(it);
                    }
                }, function (i, it) {
                    return !isNaN(coun) && arr.length == coun ? [0, 1] : null;
                });
                return arr;
            }
            return this;
        };
    } (),
    //一些常用的功能
    __common = {
        //判断一个变量是否是Array
        isArray: function (obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        },
        //测试对象是否是纯粹的对象（通过 "{}" 或者 "new Object" 创建的）
        isPlainObject: function (obj) {
            return Object.prototype.toString.call(obj) === '[object Object]';
        },
        //判断一个变量是否是Number
        isNumber: function (obj) {
            return Object.prototype.toString.call(obj) === '[object Number]';
        },
        //判断一个变量是否能被转换成Number
        canParseNumber: function (obj) {
            return !isNaN(Number(obj));
        },
        //判断一个变量是否是Function
        isFunction: function (obj) {
            return Object.prototype.toString.call(obj) === '[object Function]';
        },
        //判断字符串是否是一个邮件地址
        isEmail: function (str) {
            return /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/.test(str)
                || /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(str);
        },
        //判断字符串是不是全都是有中文字符组成
        isChineseStr: function (str) {
            return /^[\u2E80-\u9FFF]+$/.test(str);
        },
        //返回min 到 max（包括 min、max）之间步长为 setp 的数组
        range: function (min, max, step) {
            var arr = [];
            min = __common.canParseNumber(min) ? parseInt(min) : 0;
            max = __common.canParseNumber(max) ? parseInt(max) : -1;
            step = __common.canParseNumber(step) ? parseInt(step) : 1;
            for (var i = min; i <= max; i += step) {
                arr.push(i);
            }
            return arr;
        },
        /*
        *遍历一个Array或类似于数组的对象
        *
        *opts：形似
        *   {
        *       //要遍历的Array或类似于数组的对象
        *       target: { a: '', b: 1 },
        *
        *       //对Object或Array的每个元素做处理的方法,接收两个参数：i（该元素在数组中的索引），it（该元素）
        *       funEach: function(it, val){ },
        *
        *       //获取
        *       lenAttr: 'length',
        *
        *       //
        *       emuFunName: null,
        *       
        *       //返回一个包含三个数字数组,接收两个参数：i（该元素在数组中的索引），it（该元素），
        *           形似：
        *               [
        *                   -1, //若大于0：在funEach之前执行continue，若等于0：不执行continue，若大于0：在funEach之后执行continue
        *                   0,  //若大于0：在funEach之前执行break，若等于0：不执行break，若大于0：在funEach之后执行break
        *                   1,  //若大于0：在funEach之前执行return，若等于0：不执行return，若大于0：在funEach之后执行return
        *               ]
        *       funResult: function(it, val){ },
        *
        *       //确定是以只读的方式还是写的方式遍历，默认是false
        *       write: false,
        *   }
        */
        arrayEach: function (opts) {
            var opts = opts || {};
            if (opts.target && typeof opts.funEach == 'function') {
                var L = opts.target[opts.lenAttr || 'length'];
                for (var i = 0; i < L; i++) {
                    var valEach,
                        val = typeof opts.emuFunName == 'function' ? opts.emuFunName(i) : opts.target[i],
                        result = typeof opts.funResult == 'function' ?
                            opts.funResult(i, val) || {} : {},
                        isC = __common.canParseNumber(result[0]) ? Number(result[0]) : 0,
                        isB = __common.canParseNumber(result[1]) ? Number(result[1]) : 0,
                        isR = __common.canParseNumber(result[2]) ? Number(result[2]) : 0;

                    if (isC > 0) { continue; }
                    if (isB > 0) { break; }
                    if (isR > 0) { return opts.target; }

                    valEach = opts.funEach(i, val);
                    if (opts.write) {
                        opts.target[i] = valEach;
                    }

                    if (isC < 0) { continue; }
                    if (isB < 0) { break; }
                    if (isR < 0) { return opts.target; }
                }
            }
            return opts.target;
        },
        arrayEachRead: function (obj, fun, funr, lenAttr, emuFunName) {
            return __common.arrayEach({
                target: obj, funEach: fun, funResult: funr,
                lenAttr: lenAttr, emuFunName: emuFunName, write: false
            });
        },
        arrayEachWrite: function (obj, fun, funr, lenAttr, emuFunName) {
            return __common.arrayEach({
                target: obj, funEach: fun, funResult: funr,
                lenAttr: lenAttr, emuFunName: emuFunName, write: true
            });
        },
        /*
        *遍历一个Object、json对象，查找出其中的所有的属性
        *
        *opts：形似
        *   {
        *       //要遍历的Object、json对象
        *       target: { a: '', b: 1 },
        *
        *       //对Object或Array的每个元素做处理的方法,接收两个参数：i（该元素在数组中的索引），it（该元素）
        *       funEach: function(it, val){ },
        *
        *       //返回一个包含三个数字数组,接收两个参数：i（该元素在数组中的索引），it（该元素），
        *           形似：
        *               [
        *                   -1, //若大于0：在funEach之前执行continue，若等于0：不执行continue，若大于0：在funEach之后执行continue
        *                   0,  //若大于0：在funEach之前执行break，若等于0：不执行break，若大于0：在funEach之后执行break
        *                   1,  //若大于0：在funEach之前执行return，若等于0：不执行return，若大于0：在funEach之后执行return
        *               ]
        *       funResult: function(it, val){ },
        *
        *       //确定是以只读的方式还是写的方式遍历，默认是false
        *       write: false,
        *   }
        */
        objectEach: function (opts) {
            var opts = opts || {};
            if (opts.target && typeof opts.funEach == 'function') {
                for (var it in opts.target) {
                    var valEach,
                        result = typeof opts.funResult == 'function' ?
                            opts.funResult(it, opts.target[it]) || {} : {},
                        isC = __common.canParseNumber(result[0]) ? Number(result[0]) : 0,
                        isB = __common.canParseNumber(result[1]) ? Number(result[1]) : 0,
                        isR = __common.canParseNumber(result[2]) ? Number(result[2]) : 0;

                    if (isC > 0) { continue; }
                    if (isB > 0) { break; }
                    if (isR > 0) { return opts.target; }

                    valEach = opts.funEach(it, opts.target[it]);
                    if (opts.write) {
                        opts.target[it] = valEach;
                    }

                    if (isC < 0) { continue; }
                    if (isB < 0) { break; }
                    if (isR < 0) { return opts.target; }
                }
            }
            return opts.target;
        },
        //以只读的方式遍历一个Object、json、Array对象
        objectEachRead: function (obj, fun, funr) {
            return __common.objectEach({
                target: obj, funEach: fun, funResult: funr, write: false
            });
        },
        //以写的方式遍历一个Object、json、Array对象
        objectEachWrite: function (obj, fun, funr) {
            return __common.objectEach({
                target: obj, funEach: fun, funResult: funr, write: false
            });
        },
        /*
        *从页面的url中的查询字符串中查找对应的值
        *
        *key：要查找的字段的名称
        *win：要查找的url所在的window对象，默认为当前页面的window对象
        */
        queryURLString: function (key, win) {
            var k = '', v = '';
            if (key) {
                var str = win && win.location ? win.location.search : window.location.search;
                if (str && typeof str == 'string') {
                    var arr = str.substring(1).split('&');
                    arr._eachRead(function (i, it) {
                        var kv = it.split('=');
                        k = window.decodeURIComponent(kv[0]);
                        v = window.decodeURIComponent(kv[1]);
                    }, function (i, it) {
                        return k == key ? [0, 1] : null;
                    });
                }
            }
            return v;
        },
        /*
        *弹出对话框窗口的方法
        *
        *opts：一个json对象，
        *   形似：
        *   {
        *       url: '',            //要打开的页面的url
        *       isModal: true,      //是弹出模式窗口还是非模式窗口
        *       help: false,        //弹出窗口标题栏是否显示帮助按钮
        *       status: true,       //弹出窗口是否显示状态栏
        *       center: true,       //弹出窗口是否居中
        *       scroll: false,      //弹出窗口是否显示滚动条
        *       maximize: true,     //弹出窗口最大化按钮是否可用
        *       minimize: true,     //弹出窗口最小化按钮是否可用
        *       resizable: true,    //弹出窗口是否可以改变大小
        *       dialogWidth: 200,   //弹出窗口宽度
        *       dialogHeight: 200,  //弹出窗口高度
        *       dialogLeft: 0,      //弹出窗口左边的位置
        *       dialogTop: 0        //弹出窗口上边的位置
        *   }
        */
        showDialogMain: function (opts) {
            var arr = [],
            opts = function (o) {
                o = o || {};
                o.url = o.url || '';
                o.isModal = typeof o.isModal == 'boolean' ? o.isModal : true;
                o.help = typeof o.help == 'boolean' ? o.help : false;
                o.status = typeof o.status == 'boolean' ? o.status : true;
                o.center = typeof o.center == 'boolean' ? o.center : true;
                o.scroll = typeof o.scroll == 'boolean' ? o.scroll : false;
                o.maximize = typeof o.maximize == 'boolean' ? o.maximize : true;
                o.minimize = typeof o.minimize == 'boolean' ? o.minimize : true;
                o.resizable = typeof o.resizable == 'boolean' ? o.resizable : true;
                o.dialogWidth = (o.dialogWidth || 200) + 'px';
                o.dialogHeight = (o.dialogHeight || 200) + 'px';
                if (!o.center) {
                    o.dialogLeft = (o.dialogLeft || 0) + 'px';
                    o.dialogTop = (o.dialogTop || 0) + 'px';
                }
                return o;
            } (opts);
            __common.objectEachRead(opts, function (it, val) {
                arr.push(function () {
                    if (it != 'url' && it != 'isModal') {
                        if (typeof val == 'boolean') {
                            return it + ':' + (val ? 'yes' : 'no');
                        } else if (typeof val == 'string') {
                            return it + ':' + val;
                        }
                    }
                    return '';
                } ());
            });
            if (opts.isModal) {
                return window.showModalDialog(opts.url, opts.args, arr.join(';'));
            } else {
                return window.showModelessDialog(opts.url, opts.args, arr.join(';'));
            }
        },
        //弹出模式窗口
        showMDDialog: function (url, args, width, height, status, resizable) {
            return __common.showDialogMain({
                url: url, args: args, dialogWidth: width, dialogHeight: height,
                status: status, resizable: resizable, center: true, isModal: true
            });
        },
        //弹出非模式窗口
        showMDLDialog: function (url, args, width, height, status, resizable) {
            return __common.showDialogMain({
                url: url, args: args, dialogWidth: width, dialogHeight: height,
                status: status, resizable: resizable, center: true, isModal: false
            });
        },
        /*
        *打开一个新的页面窗口
        *
        *opts：一个json对象，
        *   形似：
        *   {
        *       url: '',            //要打开的页面的url
        *       target: '_blank',   //窗口的名称，用于确定新的页面在那个窗口中打开，默认在新窗口中打开
        *       help: false,        //新窗口标题栏是否显示帮助按钮
        *       status: true,       //新窗口是否显示状态栏
        *       menu: false,        //新窗口是否显示菜单栏
        *       scrollbars: false,  //新窗口是否显示滚动条
        *       resizable: true,    //新窗口是否可以改变大小
        *       width: 200,         //新窗口宽度
        *       height: 200,        //新窗口高度
        *       left: 0,            //新窗口左边的位置
        *       top: 0              //新窗口上边的位置
        *   }
        */
        openWindowMain: function (opts) {
            var arr = [],
            opts = function (o) {
                o = o || {};
                o.url = o.url || '';
                o.target = o.target || '_blank';
                o.center = typeof o.center == 'boolean' ? o.center : true;
                o.help = typeof o.help == 'boolean' ? o.help : false;
                o.status = typeof o.status == 'boolean' ? o.status : true;
                o.menu = typeof o.menu == 'boolean' ? o.menu : false;
                o.scrollbars = typeof o.scrollbars == 'boolean' ? o.scrollbars : false;
                o.resizable = typeof o.resizable == 'boolean' ? o.resizable : true;
                o.width = (o.width || 200) + 'px';
                o.height = (o.height || 200) + 'px';
                o.left = (o.center ? (screen.width - parseInt(o.width)) / 2 : (o.left || 0)) + 'px';
                o.top = (o.center ? (screen.height - parseInt(o.height) - 50) / 2 : (o.top || 0)) + 'px';
                return o;
            } (opts);
            __common.objectEachRead(opts, function (it, val) {
                arr.push(function () {
                    if (it != 'url' && it != 'center') {
                        if (typeof val == 'boolean') {
                            return it + '=' + (val ? 'yes' : 'no');
                        } else if (typeof val == 'string') {
                            return it + '=' + val;
                        }
                    }
                    return '';
                } ());
            });
            return window.open(opts.url, opts.target, arr.join(','));
        },
        //打开一个新的页面窗口
        openWindow: function (url, width, height, left, top, target, status, resizable, menu, center) {
            return __common.openWindowMain({
                url: url, width: width, height: height, menu: menu, target: target,
                left: left, top: top, status: status, resizable: resizable, center: center
            });
        }
    },
    //关于事件处理的一些方法
    __event = {
        //给ele元素绑定eType事件函数fun
        bind: function (ele, eType, fun) {
            try {
                if (ele.addEventListener) {
                    ele.addEventListener(eType, fun, false);
                } else if (ele.attachEvent) {
                    ele.attachEvent('on' + eType, fun);
                } else {
                    ele['on' + eType] = fun;
                }
            } catch (e) { }
        },
        //移除给ele元素绑定的eType事件函数fun
        unbind: function (ele, eType, fun) {
            try {
                if (ele.removeEventListener) {
                    ele.removeEventListener(eType, fun, false);
                } else if (ele.detachEvent) {
                    ele.detachEvent('on' + eType, fun);
                } else {
                    ele['on' + eType] = null;
                }
            } catch (e) { }
        }
    },
    //关于ajax的请求的方法
    __ajax = {
        //获取一个XMLHttpRequest对象
        createXmlhttp: (function () {
            var xmlhttp = null;
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            }
            else if (window.ActiveXObject) {
                var ieArr = ['Msxml2.XMLHTTP.9.0', 'Msxml2.XMLHTTP.8.0', 'Msxml2.XMLHTTP.7.0',
                    'Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP', 'Microsoft.XMLHTTP'];
                ieArr._eachRead(function (i, it) {
                    try {
                        xmlhttp = new window.ActiveXObject(it);
                    }
                    catch (e) { }
                },
                function (i, it) {
                    return xmlhttp ? [0, 1] : null;
                });
            }
            return xmlhttp;
        }),
        /*
        *该方法用于ajax请求，用法类似与jQuery中的$.ajax()
        *
        *opts：一个json对象，
        *   形似：
        *   {
        *       url: '',                    //请求的url
        *       async: ture,                //是否为异步请求，默认为异步
        *       type: 'get',                //请求的类型，是 get 或者是 post，默认为 get
        *       dataType: 'text',           //需要返回的数据的类型，可以是 text，xml，json，默认为 text
        *       data: [object] [string],    //需要发送的数据查询字符串或者键值对的json对象
        *       success: function(val){},   //请求成功的回调函数
        *       error: function(xmlhttp){}  //请求失败的回调函数
        *   }
        */
        request: function (opts) {
            try {
                var xmlhttp = __ajax.xmlhttp || __ajax.createXmlhttp();
                __ajax.xmlhttp = xmlhttp;
                if (xmlhttp && opts) {
                    var jsons = function (obj) {
                        var arr = [];
                        __common.objectEachRead(obj, function (it, val) {
                            if (it && val) {
                                arr.push(window.encodeURIComponent(it) + '=' + window.encodeURIComponent(val));
                            }
                        });
                        return arr.join('&');
                    },
                    opts = function (o) {
                        o = o || {};
                        o.data = typeof o.data == 'string' ? o.data : jsons(o.data);
                        o.dataType = typeof o.dataType == 'string' ? o.dataType : 'text';
                        o.type = typeof o.type == 'string' ? o.type : 'get';
                        o.async = typeof o.async == 'boolean' ? o.async : false;
                        o.url = typeof o.url == 'string' ?
                            o.type.toLowerCase() == 'get' ?
                                o.url.indexOf('?') == -1 ?
                                    o.url + (o.data ? '?' + o.data : '') : o.url + (o.data ? '&' + o.data : '')
                                        : o.url
                                    : o.url;
                        o.data = o.type.toLowerCase() == 'get' ? null : o.data;
                        return o;
                    } (opts);

                    if (opts.url) {
                        xmlhttp.onreadystatechange = function () {
                            if (xmlhttp.readyState == 4) {
                                if (xmlhttp.status == 200) {
                                    if (typeof opts.success == 'function') {
                                        switch (opts.dataType.toLowerCase()) {
                                            case 'text':
                                                opts.success(xmlhttp.responseText);
                                                break;
                                            case 'xml':
                                                opts.success(xmlhttp.responseXML);
                                                break;
                                            case 'json':
                                                opts.success(__json.parse(xmlhttp.responseText));
                                                break;
                                            default:
                                                break;
                                        }
                                    }
                                }
                                else {
                                    if (typeof opts.error == 'function') {
                                        opts.error(xmlhttp);
                                    }
                                }
                            }
                        }

                        xmlhttp.open(opts.type, opts.url, opts.async);
                        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                        xmlhttp.send(opts.data);
                    }
                }
            }
            catch (e) { }
        },
        //用于post请求
        post: function (url, data, fun, dataType, async) {
            __ajax.request({
                url: url, data: data, dataType: dataType, type: 'post', success: fun, async: async
            });
        },
        //用于get请求
        get: function (url, data, fun, dataType, async) {
            __ajax.request({
                url: url, data: data, dataType: dataType, type: 'get', success: fun, async: async
            });
        }
    },
    /*
    *关于表单提交的方法，一般用于文件下载或文件上传，当下载某文件若需要根据很多参数查询时，
    *参数的总长度可能超过url传参数的最大长度，此时就不能直接用window.open()来下载了，
    *可以用该模块中的dataSubmit方法通过 post 方式提交来完成下载
    */
    __form = {
        /*
        *用于提交表单的方法
        *
        *opts：一个json对象，
        *   形似：
        *   {
        *       url: '',                                        //要提交表单到的url
        *       form: window.document.forms[0],                 //要提交的表单对象，默认为当前页面的
        *       type: 'get',                                    //请求的类型，是 get 或者是 post，默认为 get
        *       target: '_self',                                //窗口的名称，用于确定表单通过那个窗口提交
        *       encType: 'application/x-www-form-urlencoded',   //当上传文件时，该值为：multipart/form-data
        *       onSubmit: function(){}                          //表单提交之前执行
        *   }
        */
        formSubmit: function (opts) {
            var opts = (function (o) {
                o = o || {};
                o.form = o.form ? o.form : window.document.forms[0];
                o.url = typeof o.url == 'string' ? o.url : '';
                o.type = typeof o.type == 'string' ? o.type : 'get';
                o.target = typeof o.target == 'string' ? o.target : '_self';
                o.encType = typeof o.encType == 'string' ? o.encType : 'application/x-www-form-urlencoded';
                return o;
            })(opts);

            try {
                if (typeof opts.onSubmit == 'function') {
                    if (!opts.onSubmit()) {
                        return;
                    }
                }
                opts.form.method = opts.type;
                opts.form.action = opts.url;
                opts.form.target = opts.target;
                opts.form.enctype = opts.encType;
                opts.form.submit();
            }
            catch (e) { }
        },
        /*
        *用于提交数据的方法
        *
        *opts：一个json对象，
        *   形似：
        *   {
        *       url: '',                                        //要提交表单到的url
        *       data: [object],                                 //要提交的数据，键值对的json对象
        *       type: 'get',                                    //请求的类型，是 get 或者是 post，默认为 get
        *       target: '_self',                                //窗口的名称，用于确定表单通过那个窗口提交
        *       onSubmit: function(){}                          //表单提交之前执行
        *   }
        */
        dataSubmit: function (opts) {
            var opts = (function (o) {
                o = o || {};
                o.url = typeof o.url == 'string' ? o.url : '';
                o.type = typeof o.type == 'string' ? o.type : 'get';
                o.target = typeof o.target == 'string' ? o.target : '_self';
                o.data = o.data || {};
                return o;
            })(opts);

            try {
                var f = document.createElement('form');
                __common.objectEachRead(opts.data, function (it, val) {
                    var i = document.createElement('input');
                    i.setAttribute('type', 'hidden');
                    i.setAttribute('name', it);
                    i.setAttribute('value', val);
                    f.appendChild(i);
                });
                document.body.appendChild(f);

                __form__.formSubmit({
                    form: f,
                    url: opts.url,
                    type: opts.type,
                    target: opts.target,
                    onSubmit: opts.onSubmit
                });

                document.body.removeChild(f);
                delete f;
            }
            catch (e) { }
        }
    },
    //关于cookie操作的方法
    __cookie = {
        /*
        *对cookie的读写操作的方法
        *
        *key：要读或写的ecookie的名称
        *val：要写的ecookie的值
        *opts：一个json对象，
        *   形似：
        *   {
        *       expires: undefined,     //cookie的过期时间
        *       path: '',               //cookie存储路径
        *       domain: ''              //cookie的域
        *       secure: ''              //
        *   }
        */
        cookie: function (key, val, opts) {
            if (typeof val != 'undefined') {
                opts = opts || {};
                if (val === null) {
                    val = '';
                    opts.expires = -1;
                }
                var expires = '';
                if (opts.expires && (typeof opts.expires == 'number' || opts.expires.toUTCString)) {
                    var date;
                    if (typeof opts.expires == 'number') {
                        date = new Date();
                        date.setTime(date.getTime() + (opts.expires * 24 * 60 * 60 * 1000));
                    } else {
                        date = opts.expires;
                    }
                    expires = '; expires=' + date.toUTCString();
                }
                var path = opts.path ? '; path=' + opts.path : '',
                    domain = opts.domain ? '; domain=' + opts.domain : '',
                    secure = opts.secure ? '; secure' : '';
                document.cookie = [key, '=', window.encodeURIComponent(val), expires, path, domain, secure].join('');
            } else {
                var cookieValue = null;
                if (document.cookie && document.cookie != '') {
                    var cookies = document.cookie.split(';');
                    cookies._eachRead(function (i, cookie) {
                        cookieValue = window.decodeURIComponent(cookie._trim().split('=')[1]);
                    }, function (i, cookie) {
                        return cookie._trim().split('=')[0] == key ? [0, -1] : null;
                    });
                }
                return cookieValue;
            }
        },
        //读取cookie
        get: function (key) {
            return __cookie.cookie(key);
        },
        //写入cookie
        set: function (key, val, opts) {
            __cookie.cookie(key, val, opts);
        }
    },
    __json = {
        parse: function (str) {
            try {
                return window.JSON.parse(str);
            }
            catch (e) {
                try {
                    return window.eval('(' + str + ')')
                }
                catch (e) { }
            }
            return null;
        },
        stringify: function (obj) {
            try {
                return window.JSON.stringify(obj);
            }
            catch (e) {
                return (function (o) {
                    var arr = [],
                        me = arguments.callee;
                    if (__common.isArray(o)) {
                        var arr_ = [];
                        o._eachRead(function (i, it) {
                            var str = me(it);
                            if (typeof str != 'undefined') { arr_.push(str); }
                        });
                        return '[' + arr_.join() + ']';
                    }
                    else if (__common.isPlainObject(o)) {
                        var arr_ = [];
                        __common.objectEachRead(o, function (it, val) {
                            var str = me(val);
                            if (typeof str != 'undefined') { arr_.push('"' + it + '":' + me(val)); }
                        });
                        return '{' + arr_.join() + '}';
                    }
                    else if (__common.isNumber(o)) {
                        return o;
                    }
                    else if (__common.isFunction(o)) {
                        return;
                    }
                    else {
                        return '"' + o + '"';
                    }
                })(obj);
            }
        }
    },
    __dom = {
        byId: function (id) {
            return document.getElementById(id);
        },
        byName: function (name) {
            return document.getElementsByName(name);
        },
        byTagName: function (tagName) {
            return document.getElementsByTagName(tagName);
        }
    },
    __xml = {
        createXML: function () {
            if (document.implementation && document.implementation.createDocument) {
                return document.implementation.createDocument('', '', null);
            } else if (typeof window.ActiveXObject != 'undefined') {
                var doc = null,
                        ieArr = ['MSXML2.DOMDocument.6.0', 'MSXML2.DOMDocument.3.0', 'MSXML2.DOMDocument'];
                ieArr._eachRead(function (i, it) {
                    try {
                        doc = new window.ActiveXObject(it);
                    } catch (e) { }
                }, function (i, it) {
                    return doc ? [0, 1] : null;
                });
                return doc;
            }
        },
        load: function (url) {
            var doc = '';
            __ajax.request({
                url: url, async: false, dataType: 'xml',
                success: function (xml) { doc = xml; }
            });
            return doc;
        },
        loadXML: function (str) {
            if (typeof window.DOMParser != 'undefined') {
                return (new DOMParser()).parseFromString(str || '', 'application/xml');
            }
            else if (typeof window.ActiveXObject != 'undefined') {
                var doc = __xml.createXML();
                doc.loadXML(str || '');
                return doc;
            }
        },
        selectNodes: function (context, xpath, nss) {
            var nodes = [],
                doc = context.nodeType != 9 ? context.ownerDocument : context;
            if (typeof doc.evaluate != 'undefined') {
                var result = doc.evaluate(xpath, context, function (p) {
                    return nss[p];
                }, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                for (var i = 0; i < result.snapshotLength; i++) {
                    nodes.push(result.snapshotItem(i));
                }
            } else
                if (typeof context.selectNodes != 'undefined') {
                    var arrNs = [], result;
                    __common.objectEachRead(nss, function (it, val) {
                        arrNs.push('xmlns:' + it + '="' + val + '"');
                    });
                    doc.setProperty("SelectionLanguage", "XPath");
                    doc.setProperty('SelectionNamespaces', arrNs.join(' '));
                    result = context.selectNodes(xpath);
                    for (var i = 0; i < result.length; i++) {
                        nodes.push(result[i]);
                    }
                }
            return nodes;
        },
        selectSingleNode: function (context, xpath, nss) {
            var node = null,
                doc = context.nodeType != 9 ? context.ownerDocument : context;
            if (doc.evaluate) {
                var result = doc.evaluate(xpath, context, function (p) {
                    return nss[p];
                }, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                node = result ? result.singleNodeValue : null;
            } else if (typeof context.selectSingleNode != 'undefined') {
                var arrNs = [];
                __common.objectEachRead(nss, function (it, val) {
                    arrNs.push('xmlns:' + it + '="' + val + '"');
                });
                doc.setProperty("SelectionLanguage", "XPath");
                doc.setProperty('SelectionNamespaces', arrNs.join(' '));
                node = context.selectSingleNode(xpath);
            }
            return node;
        }
    };

    window.GeoJS = {
        common: __common,
        event: __event,
        ajax: __ajax,
        form: __form,
        cookie: __cookie,
        json: __json,
        dom: __dom,
        xml: __xml
    }
})();