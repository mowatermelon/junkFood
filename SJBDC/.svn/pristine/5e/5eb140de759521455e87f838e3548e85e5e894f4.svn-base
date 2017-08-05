var CURPAGE = 1,
    MAXPAGES = Math.ceil(sysEnterConfig.length / 5);
$(function () {
    init();
});

function init() {
    showSysEnter();
    showGzjlContent();
    bindEvent();
   /* if($(".m_top_txt").html()==' ，欢迎登陆!'){
    	location.reload(false);
    }*/
}

function bindEvent() {
    $(document).on('click', '#searchGzjl', function () {
        var keyWords = $("#gzjlSearchContent").val(),
            url = "/SJBDC/view/portal/gzjl/ALLMessage.jsp?keyWords=" + keyWords;
        	window.open(encodeURI(timestamp(url)));
    }).on('click', '#gzjlMore', function () {
        var url = "/SJBDC/view/portal/gzjl/gzjlindex.jsp";
        window.open(encodeURI(timestamp(url)));
    }).on('click', '.caw_ask_content', function () {
        var issueId = $(this).parent().attr("id"),
            url = "/SJBDC/view/portal/gzjl/gzjl.jsp?issueId=" + issueId;            	
        	window.open(encodeURI(timestamp(url)));              
    });
}

function showSysPreAndNext() {
    $("#preSys").show();
    $("#nextSys").show();
    if (CURPAGE == 1 || MAXPAGES == 1) {
        $("#preSys").hide();
    } else if (CURPAGE == MAXPAGES) {
        $("#nextSys").hide();
    };
    $(document).on('click', '#nextSys', function () {
        CURPAGE += 1;
        showSysEnter();
    }).on('click', '#preSys', function () {
        CURPAGE -= 1;
        showSysEnter();
    });

}

function showGzjlContent() {
    $.ajax({
        url: "/SJBDC/commonController/queryPage.do?queryId=ProtalQueryMapper.queryPageAnswer",
        type: "post",
        dataType: "json",
        data: { 
        	"page.limit": 3, //显示三条信息
    	    "page.offset": 0,//第一页
        },
        success: function (res) {         
            disposeData(res.rows);
        }, error: function () {
        }
    })
}

function disposeData(res) {
    var gzjlHtml = '';
    var curInfo0 = res[0];   
    //alert(JSON.stringify(curInfo));
    var    replyContent1 = (curInfo0.ACONTENT == ''|| curInfo0.ACONTENT == null)? "暂无回复" : subStr(curInfo0.ACONTENT,50);
    var  replyTime1 = curInfo0.ATIME == null ? "" : curInfo0.ATIME.substring(0, 10);
    var signs=(curInfo0.ACONTENT == ''|| curInfo0.ACONTENT == null)?0:1;
    var str1  = '<div class="caw">';
        str1 += '  <div class="caw_ask" id="' + curInfo0.YWBSID + '">';
        str1 += '      <div class="q_icon icon_wh20">Q</div>';
        str1 += '      <span class="caw_ask_content" signs="'+signs+'">' + subStr(curInfo0.CONTENT, 56) + '</span>';
        str1 += '  </div>';
        str1 += '  <div class="caw_reply">';
        str1 += '      <div class="a_icon icon_wh20">A</div>';
        str1 += '      <p style="color:#be801a">' + replyContent1 + '</p>';
        if(replyTime1)
        {
        	str1 += '      <div class="caw_time">';
            str1 += '          <div class="caw_time_icon"></div>';
            str1 += '          <p class="caw_time_content">' + replyTime1 + '</p>';
            str1 += '      </div>';
        }
        str1 += '   </div>';
        str1 += '</div>';
    gzjlHtml += str1;
    for (var i = 1; i < res.length; i++) {
        var curInfo = res[i];   
        //alert(JSON.stringify(curInfo));
        var    replyContent = (curInfo.ACONTENT == ''|| curInfo.ACONTENT == null)? "暂无回复" : subStr(curInfo.ACONTENT,50);
        var sign0=(curInfo.ACONTENT == ''|| curInfo.ACONTENT == null)?0:1;
        var  replyTime = curInfo.ATIME == null ? "" : curInfo.ATIME.substring(0, 10);
        var str  = '<div class="caw">';
            str += '  <div class="caw_ask" id="' + curInfo.YWBSID + '">';
            str += '      <div class="q_icon icon_wh20">Q</div>';
            str += '      <span class="caw_ask_content" signs='+sign0+'>' + subStr(curInfo.CONTENT, 56) + '</span>';
            str += '  </div>';
            str += '  <div class="caw_reply">';
            str += '      <div class="a_icon icon_wh20">A</div>';
            str += '      <p>' + replyContent + '</p>';
            if(replyTime)
            {
            	str += '      <div class="caw_time">';
	            str += '          <div class="caw_time_icon"></div>';
	            str += '          <p class="caw_time_content">' + replyTime + '</p>';
	            str += '      </div>';
            }
            str += '   </div>';
            str += '</div>';
        gzjlHtml += str;
    }
    $(".caw_content").append(gzjlHtml);
}

function openSys(url) {
	if(url!='')
    window.open(url);
}

function showSysEnter() {
    var sysEnterStr = '',
        maxPages = Math.ceil(sysEnterConfig.length / 5),
        restSys = sysEnterConfig.length % 5;
    for (var i = 0; i < 5; i++) {
        var str = '';
        if (maxPages == CURPAGE && restSys != 0) {
            if (i < restSys) {
                str += getSysBoxHtml(i);
            } else {
                str += '<div></div>';
            }
        } else {
            str += getSysBoxHtml(i);
        }
        sysEnterStr += str;
    }
    $(".m_content_sys_body").empty().append(sysEnterStr);
    showSysPreAndNext();
}

function getSysBoxHtml(i) {
    var curSys = sysEnterConfig[i + 5 * (CURPAGE - 1)],
        str = '',
        className = i%6 == 1 ? "sys_db_box" : "sys_box",
        url = curSys.sysUrl;
    str += '<div class="' + className + ' sys_' + curSys.sysMark + '" onclick="openSys(\'' + url + '\')">';
    str += '    <div class="sys_box_img"></div>';
    str += '    <div class="sys_box_txt ">' + curSys.sysName + '</div>';
    str += '</div>';
    return str;
}

function subStr(str, len) {
    var strlen = 0;
    var s = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 128) {
            strlen += 2;
        } else {
            strlen++;
        }
        s += str.charAt(i);
        if (strlen >= len) {
            return s + "...";
        }
    }
    return s;
}

function timestamp(url){  
    //  var getTimestamp=Math.random();  
    var getTimestamp=new Date().getTime();  
    if(url.indexOf("?")>-1){  
        url=url+"&tamp="+getTimestamp  
    }else{  
        url=url+"?timestamp="+getTimestamp  
    }  
    return url;  
}  