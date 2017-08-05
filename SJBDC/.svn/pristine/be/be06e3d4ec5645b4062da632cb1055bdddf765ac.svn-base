var PAGESIZE = 8; //默认每页显示的工作交流条数

$(function () {
    init();
});

function init() {
    var lx=getUrlParm("lx"),
        issueId=getUrlParm("issueId");
    if(lx==1)
    	{
    	$('.location').html('通知公告');
    	 $("#tzggNav").addClass("head_checked");
    	}
    else if(lx==2)
    	{
    	$('.location').html('工作简报');
    	$("#gzjbNav").addClass("head_checked");
    	}
    else{
    	$('.location').html('法律法规');
    	$("#flfgNav").addClass("head_checked");
    }
    showGzjlDetails(issueId);
}

function bindEvent() {
    $(document).on('click', ".g_ask_des", function () {
        var curIssueId = $(this).attr("issueId");
        showGzjlDetails(curIssueId);
        detailsBindEvent();
    }).on('click', '#askIssiueSub', function () {
        if ($('#questionContent').val() != "") {
            var url = "/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.GzjlMapper.insertGzjlrelease&queryMap[description]=";
            var str1="&queryMap[createuser]=";
            var  description = $('#questionContent').val();
            url+=description;
            url+=str1;    
            var  userName="admin";
            url+=userName;
            $.ajax({url:url,
    	    	type:"get",
    	    	dataType:"json",
    	    	success:function(data2){
    	    		//alert(1);
                alert("发布问题成功！！！");
                showAllGzjl();
    	    	}
            });
        } else {
            alert("请输入要发布的问题！！！");
        }
    });
}
//显示工作交流详细信息
function showGzjlDetails(issueId) {
    $("#curLocation").html("详情信息");
    $("#gzjlPagination").empty().append('');
    /*var url = "../Handler/IssueHandler.ashx?action=showdetails";
        data = {
            issueId: issueId
        };
    getGzjlAjaxFn(url, data).done(function (res) {
        disposeGzjlDetails(res);
    });*/
    var url="/SJBDC/commonController/queryList.do?queryId=ProtalQueryMapper.queryArticleClob&queryMap[id]=";
    var issueId=issueId;
    url+=issueId;
    $.ajax({url:url,
    	type:"get",   	
    	dataType:"json",
    	success:function(res){    		
    		 disposeGzjlDetails(res);
    	}
    });
}

//显示所有工作交流信息
function showAllGzjl() {
    $("#curLocation").html("更多交流");
    $("#gzjlPagination").empty().append('');
    /*var url = "../Handler/IssueHandler.ashx?action=show",
        data = {
            pageSize: PAGESIZE,
            pageIndex: 1
        };
    getGzjlAjaxFn(url, data).done(function (res) {
        var totalPages = res.totalPageCount;
        showPagination(totalPages,url);
        disposeGzjlData(res.issues);
    });*/
    var url="/SJBDC/commonController/queryPage.do?queryId=ProtalQueryMapper.queryPageArticleList";   
    $.ajax({url:url,
    	type:"get",
    	dataType:"json",
    	data:{   	
	    "page.limit": PAGESIZE, //页面大小
	    "page.offset": 0,
    	},
    	success:function(res){   		   		
    		var totalPages =Math.ceil(res.total/PAGESIZE);
            showPagination(totalPages,url);
            disposeGzjlData(res.rows);
    	}
    });
}

//显示分页
function showPagination(totalPages,url) {
    var str='<div class="pagination totoPages" id="totalpages" style="float: left;">';
        str+='总页数:'+totalPages;
        str+='</div>';
        $("#totalpages").remove();
    $("#gzjlPagination").jqPaginator({
        totalPages: totalPages,
        visiblePages: 6,
        currentPage: 1,
        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i><上一页<\/a><\/li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页><i class="arrow arrow3"><\/i><\/a><\/li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
        onPageChange: function (n) {
            /*var data = {
                pageSize: PAGESIZE,
                pageIndex: n
            }
            getGzjlAjaxFn(url, data).done(function (res) {
                var totalPages = res.totalPageCount;
                disposeGzjlData(res.issues);
            });*/
        	$.ajax({url:url,
            	type:"get",
            	dataType:"json",
            	data:{   	
        	    "page.limit": PAGESIZE, //页面大小
        	    "page.offset": (n-1)*PAGESIZE,
            	},
            	success:function(res){
            		var totalPages = Math.ceil(res.total/PAGESIZE)-1;
                    disposeGzjlData(res.rows);
            	}
            });
        }
    }).parent().append(str);
}

function disposeGzjlDetails(data) {
    var solutions = data[0].RR;
    var user0=data[0].LRR?data[0].LRR:'暂无发布人';
    //alert(JSON.stringify(data));
    var gzjlDetailsHtml='<div class="content" ><h3 style="text-align:center;font-size: 18px;color: #333;font-weight: bold;text-align: center;margin-top: 15px;">'+ data[0].BT+'</h3>';
    gzjlDetailsHtml+='<p style="text-align:center;font-size: 12px;color: #ccc;">发布时间：'+ data[0].LRSJ+'</p>';
    gzjlDetailsHtml+='<p style="text-align:right;font-size: 12px;color: #333;font-weight:bold">发布人：'+ user0 +'</p>';
    gzjlDetailsHtml += '<div class="g_gzjl_caw_ask"><p>'+solutions+'</p></div>';
    //$("#gzjlPagination").empty().append('');   
    /*var gzjlDetailsHtml = '<div class="g_gzjl_caw_ask">';
        gzjlDetailsHtml += '    <div class="q_icon icon_wh16 g_fl">Q</div>';
        gzjlDetailsHtml += '    <span class="g_ask_des" id="curIssue" issueId='+data[0].Id+'>' + data[0].DESCRIPTION + '</span>';
        gzjlDetailsHtml += '    <div style="float:right;">';
        gzjlDetailsHtml += '        <span class="g_question_num">' + solutions[0].SUM + '</span>';
        gzjlDetailsHtml += '        <div class="g_reply_btn">';
        gzjlDetailsHtml += '            <div></div>';
        gzjlDetailsHtml += '            <span>回复</span>';
        gzjlDetailsHtml += '        </div>';
        gzjlDetailsHtml += '    </div>';
        gzjlDetailsHtml += '</div>';       
        var str='';
        for (var i = 0; i < data.length; i++) {
        	//alert(JSON.stringify(data));
            var replyContent = data[i].reply == null ? "暂无回复" : data[i].REPLY;
            str+='<div class="g_gzjl_caw_reply">';
            str += '       <div>';
            str += '            <div class="a_icon icon_wh16 g_fl">A</div>';
            str += '       </div>';
                str += '      <p>' + replyContent + '</p>';
                str += '       </div>';
                //str += '    <div class="g_gzjl_caw_time">';
                //str += '        <span>时间：' + data[i].reply.CreateTime + '</span>';
                //str += '    </div>';
            
        }*/
        //gzjlDetailsHtml += str;
        
        
                               
    
    $("#gzjlContent").empty().append(gzjlDetailsHtml);
}

function disposeGzjlData(data) {
    var gzjlHtml = '';
    //alert(JSON.stringify(data));
    for (var i = 0; i < data.length; i++) {
       var title0 = data[i].BT == null ? "暂无标题" : subStr(data[i].BT,50);
        var str = '<div class="g_gzjl_caw">';
            str += '   <div class="g_gzjl_caw_ask">';
            str += '        <li class="g_ask_des" issueId=' + data[i].ID + '>' + title0 + '</li>';  
            str += '        <div class="g_gzjl_caw_time">';
            str += '              <span>时间：'+data[i].LRSJ+'</span>';
            str += '        </div>';
            str += '    </div>';
            str += '</div>';
        gzjlHtml += str;
    }
    $("#gzjlContent").empty().append(gzjlHtml);
}
function getUrlParm(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = decodeURI(window.location.search).substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
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