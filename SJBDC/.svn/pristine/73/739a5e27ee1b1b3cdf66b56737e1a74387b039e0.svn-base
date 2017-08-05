/*********************************************
*  作者：朱静静
*  日期：2013.3.4
*  版本：1.0
*  依赖项：jQuery库
**********************************************/

//饼状图颜色
var PIECOLOR = ["#FF8155", "#FF9524", "#FFD324", "#AED233", "#53CE02", "#129B00", "#56E477", "#10AE7C", "#39BBF1", "#038DC6", "#0570D3", "#0A58A0", "#4872EA", "#484FEA", "#0008A6", "#875CEA", "#5423C3", "#D932FD", "#8704A3", "#AD1292", "#FF15D6"];

/*
*  功能:   字符串转json对象
*  参数:   json格式的字符串
*  返回值: json对象
*  作者:   朱静静
*  日期:   2013.3.4
*  版本:   1.0
*/
function strToJsonObject(strJson) {
    if (strJson == null || strJson == undefined || strJson == "") {
        return {};
    }
    return eval('(' + strJson + ')');
};

/*
*  功能:   通过ajax向服务端发送请求
*  输入：strFilePath：要请求的页面地址
*  输入：strType：请求业务类型
*  输入：strOnlyFlag：传入的唯一标识
*  输入：strSend：向服务器发送的数据
*  输出：服务器响应的内容
*  返回值: json对象
*  作者:   朱静静
*  日期:   2013.3.4
*  版本:   1.0
*/
function requestRemoteFile(strFilePath, strType, strOnlyFlag, strSend) {
    if (strFilePath == "" || strFilePath == null) {
        alert("通过通道向服务器请求的页面地址为空");
        return;
    }

    strType = strType == null ? "" : strType;
    strOnlyFlag = strOnlyFlag == null ? "" : strOnlyFlag;

    var strUrl = strFilePath;
    strUrl += strUrl.indexOf("?") == -1 ? "?" : "&";
    strUrl += "Type=" + strType;
    strUrl += "&OnlyFlag=" + strOnlyFlag;
    strUrl += "&T=" + Math.random();

    return request(strUrl, strSend);
};

/*
*  功能: 通过ajax向服务端发送请求底层实现
*  输入：strUrl：要请求的页面地址
*  输入：strSend：向服务器发送的数据
*  输出：服务器响应的内容
*  返回值: 服务器响应的内容
*  作者:   朱静静
*  日期:   2013.3.4
*  版本:   1.0
*/
function request(strUrl, strSend) {

    var xmlHttpRequest = ajaxXmlHttpRequest();
    var strRtn = null;
    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4) {
            strRtn = xmlHttpRequest.responseText;
        }
    }

    //实现同步操作
    if (strSend == null || strSend == undefined || strSend == "") {
        xmlHttpRequest.open("GET", strUrl, false);
        xmlHttpRequest.send();
    }
    else {
        xmlHttpRequest.open("POST", strUrl, false);
        xmlHttpRequest.send(strSend);
    }

    return strRtn;
};

/*
*  功能: 跨浏览器获取XmlHttpRequest对象
*  输入：
*  输出：XmlHttpRequest对象
*  作者:   朱静静
*  日期:   2013.3.4
*  版本:   1.0
*/
function ajaxXmlHttpRequest() {
    var xmlHttp;
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {

            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                alert("您的浏览器不支持AJAX！");
                return false;
            }
        }
    }
    return xmlHttp;
};

/*
*  功能:   返回
*  参数:   strUrl：后台处理程序url，
*  参数:   strAction：后台动作标识，
*  参数:   strParm：发往服务器的参数
*  返回值：excel文件
*  作者：朱静静
*  日期：2013.12.19
*  版本：1.0
*/
function excelOut(strUrl, strAction, strParm) {
    var url = strUrl;

    if (url.indexOf("?") < 0) {
        url += "?rand=" + Math.random();
    }
    url += "&action=" + escape(strAction);
    url += "&parm=" + escape(strParm);
    url += "&rand=" + Math.random();
    $(window.document.body).append($('<iframe id="ifmHidden" style=" display:none;"></iframe>'));
    $("#ifmHidden").attr("src", url);
}

/*
*  功能:   获取字符串的字节数码
*  参数:   str 待求长度的字符串
*  返回值：字符串的字节数
*  作者：朱静静
*  日期：2014-01-10
*  版本：1.0
*/
function getBytesCount(str) {
    if (str == null || str == undefined || str == "") {
        return 0;
    }

    str = str + "";

    if (str == null) {
        return 0;
    }
    else {
        return (str.length + str.replace(/[\u0000-\u00ff]/g, "").length);
    }
}

/*
*  功能:   判断字符串是否为Html标签
*  参数:   str 待判断字符串
*  返回值：true or false
*  作者：朱静静
*  日期：2014-01-20
*  版本：1.0
*/
function IsHtmlTag(str) {
    var bRtn = false;

    if (typeof (str) == "undefined") {
        return false;
    }
    if (str == null || str == undefined || str == "") {
        return false;
    }

    str = str + "";

    if (str.indexOf("<") >= 0 && str.indexOf("/>") > 0) {
        bRtn = true;
    }
    if (str.indexOf("<") >= 0 && str.indexOf("</") > 0 && str.indexOf(">") > 0) {
        bRtn = true;
    }

    return bRtn;
}

/*
*  功能:   字符串截取函数（按字节进行截取）
*  参数:   str 待截取字符串
*          intStart 开始位置
*          intLength 截取长度（字节长度）
*  返回值：true or false
*  作者：朱静静
*  日期：2014-01-20
*  版本：1.0
*/
function subStrByBytes(str, intStart, intLength) {
    var strRtn = "";

    if (typeof (str) == "undefined") {
        return "";
    }
    if (str == null || str == undefined || str == "") {
        return "";
    }

    str = str + "";

    if (intStart == null || intStart == undefined || intStart == "" || intStart < 0) {
        intStart = 0;
    }
    if (intLength == null || intLength == undefined || intLength == "" || intLength < 0) {
        intLength = str.length;
    }

    var intLastPos = intStart;
    var intSumBytes = 0;
    for (var i = 0; i < str.length; i++) {
        intSumBytes += getBytesCount(str.charAt(i));
        intLastPos++;
        if (intSumBytes >= intLength) {
            break;
        }
    }

    return str.substring(intStart, intLastPos);
}

/*
*  功能:   json对象序列化
*  参数:   str 待截取字符串
*  返回值：字符串
*  作者：朱静静
*  日期：2014-01-26
*  版本：1.0
*/
function objToString(obj) {
    switch (typeof (obj)) {
        case 'object':
            var ret = [];
            if (obj instanceof Array) {
                for (var i = 0, len = obj.length; i < len; i++) {
                    ret.push(objToString(obj[i]));
                }
                return '[' + ret.join(',') + ']';
            }
            else if (obj instanceof RegExp) {
                return obj.toString();
            }
            else {
                for (var a in obj) {
                    ret.push(a + ':' + objToString(obj[a]));
                }
                return '{' + ret.join(',') + '}';
            }
        case 'function':
            return 'function() {}';
        case 'number':
            return obj.toString();
        case 'string':
            return "\"" + obj.replace(/(\\|\")/g, "\\$1").replace(/\n|\r|\t/g, function (a) { return ("\n" == a) ? "\\n" : ("\r" == a) ? "\\r" : ("\t" == a) ? "\\t" : ""; }) + "\"";
        case 'boolean':
            return obj.toString();
        default:
            return obj.toString();
    }
} 