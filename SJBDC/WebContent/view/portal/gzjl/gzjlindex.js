var PAGESIZE = 4; //默认每页显示的工作交流条数

$(function () {
	var target= getUrlParm("target");
	if(target=="tzgg"){
		var sUrl = $("#a3").attr("url");
	   	 var name0=$("#a3").attr("name")
	   	 $('.location').html(name0);
	   	 $('.location').attr('href','gzjlindex.jsp?target=tzgg');
        $("#a3").addClass("head_checked").parent().siblings().find("a").removeClass("head_checked");
        $("#ifrmContent").attr("src", sUrl);
	}else if(target=="gzjb"){
		var sUrl = $("#a4").attr("url");
	   	 var name0=$("#a4").attr("name")
	   	 $('.location').html(name0);
	   	 $('.location').attr('href','gzjlindex.jsp?target=gzjb');
       $("#a4").addClass("head_checked").parent().siblings().find("a").removeClass("head_checked");
       $("#ifrmContent").attr("src", sUrl);
	}
	else if(target=="flfg"){
		var sUrl = $("#a5").attr("url");
	   	 var name0=$("#a5").attr("name")
	   	 $('.location').html(name0);
	   	 $('.location').attr('href','gzjlindex.jsp?target=flfg');
       $("#a5").addClass("head_checked").parent().siblings().find("a").removeClass("head_checked");
       $("#ifrmContent").attr("src", sUrl);
	}
	else{
		var sUrl = $("#a2").attr("url");
   	 	var name0=$("#a2").attr("name")
   	 	$('.location').html(name0);
   	 	$('.location').attr('href','gzjlindex.jsp');
        $("#a2").addClass("head_checked").parent().siblings().find("a").removeClass("head_checked");
        $("#ifrmContent").attr("src", sUrl);
	}
    init();
});

function init() {
	//$('#a2').addClass("head_checked").parent().siblings().find("a").removeClass("head_checked");
    //$("#ifrmContent").attr("src", 'gzjl.html');
    $(".g_head li").click(function(){   	
        $(".g_head li").removeClass("head_checked");
        
//      $(this).addClass("mt-focus").css("background-color","#fa9d11");
        //获取url
        if($(this).attr("url")=='portal'){        	
        }
        else{
        	 var sUrl = $(this).attr("url");
        	 var name0=$(this).attr("name");
        	 var ahref=$(this).attr("ahref");
        	 $('.location').html(name0);
        	 $('.location').attr('href',ahref);
             $(this).addClass("head_checked").parent().siblings().find("a").removeClass("head_checked");
             $("#ifrmContent").attr("src", sUrl);
        }
       
        //replaceUrl(window.location.href,"target",target);
    });
   
}

/*function location() {
    $(document).on('click', "#gzjlSearchBtn", function () {
        var keyWorlds = $("#gzjlSearchContent").val();
        showSearchGzjlResult(keyWorlds);
    });
}*/

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

function detailsBindEvent() {
    $(document).on('click', '#replyIssiueSub', function () {
        var issueId = $("#curIssue").attr("issueId");
        if ($('#replyContent').val() != "") {
            /*var url = "../Handler/IssueHandler.ashx?action=providesolution",
            data = {
                issueId: issueId,
                content: $('#replyContent').val()
            };
            getGzjlAjaxFn(url, data).done(function () {
                alert("回复问题成功！！！");
                $('#replyContent').val("");
                showGzjlDetails(issueId);
            });*/
            
            var url = "/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.GzjlMapper.insertGzjlprovidesolution&queryMap[questionid]=";
            var str2="&queryMap[reply]=";
            var  content = $('#replyContent').val();         
            var  issueId=issueId;
            url+=issueId;
            url+=str2;
            url+=content;
            
            $.ajax({url:url,
    	    	type:"get",
    	    	dataType:"json",
    	    	success:function(data2){
    	    		alert("回复问题成功！！！");
                    $('#replyContent').val("");
                    showGzjlDetails(data2);
    	    	}
            });
            
        } else {
            alert("请输入回复的内容！！！");
        }
    });
}

//显示查询工作交流信息
function showSearchGzjlResult(keyWorlds) {
    $("#curLocation").html("搜索结果");
    $("#gzjlSearchContent").val("");
    $("#g_gzjl_pagination").empty().append('');
    /*var url = "../Handler/IssueHandler.ashx?action=search",
        data = {
            pageSize: PAGESIZE,
            pageIndex: 1,
            keyWords: keyWorlds
        };
    getGzjlAjaxFn(url, data).done(function (res) {
        var totalPages = res.totalPageCount;
        showPagination(totalPages,url);
        disposeGzjlData(res.issues);
    });*/
    var url="/SJBDC/commonController/queryPage.do?queryId=com.geostar.gtgh.portal.core.dao.GzjlMapper.queryPageGzjlsearch&queryMap[description]="; 
    url+=keyWorlds;
    $.ajax({url:url,
    	type:"get",
    	dataType:"json",
    	data:{   	
	    "page.limit": PAGESIZE, //页面大小
	    "page.offset": 0,
    	},
    	success:function(res){
    		var totalPages = Math.ceil(res.total/PAGESIZE);
    		disposeGzjlData(res);
            showPagination(totalPages,url);
            
    	}
    });
}

//显示工作交流详细信息
function showGzjlDetails(issueId) {
    $("#curLocation").html("交流详情");
    $("#gzjlAsk").hide();
    $("#gzjlReply").show();
    $("#gzjlPagination").empty().append('');
    /*var url = "../Handler/IssueHandler.ashx?action=showdetails";
        data = {
            issueId: issueId
        };
    getGzjlAjaxFn(url, data).done(function (res) {
        disposeGzjlDetails(res);
    });*/
    var url="/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.GzjlMapper.Gzjlshowdetails&queryMap[id]=";
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
    $(".totoPages").empty().hide();
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
    var url="/SJBDC/commonController/queryPage.do?queryId=com.geostar.gtgh.portal.core.dao.GzjlMapper.queryPageGzjlshow";   
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
    var solutions = data;
    $(".totoPages").empty().hide();   
    var gzjlDetailsHtml = '<div class="g_gzjl_caw_ask">';
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
            
        }
        gzjlDetailsHtml += str;
        
        
                               
    
    $("#gzjlContent").empty().append(gzjlDetailsHtml);
}

function disposeGzjlData(data) {
    var gzjlHtml = '';
    //alert(JSON.stringify(data));
    for (var i = 0; i < data.length; i++) {
        var replyContent = data[i].reply == null ? "暂无回复" : data[i].REPLY;
        var str = '<div class="g_gzjl_caw">';
            str += '   <div class="g_gzjl_caw_ask">';
            str += '        <div class="q_icon icon_wh16 g_fl">Q</div>';
            str += '        <span class="g_ask_des" issueId=' + data[i].ID + '>' + data[i].DESCRIPTION + '</span>';
            str += '        <div style="float:right;">';
            str += '           <span class="g_question_num">' + data[i].SUM + '</span>';
            str += '            <div class="g_reply_btn">';
            str += '               <div></div>';
            str += '               <span>回复</span>';
            str += '            </div>';
            str += '       </div>';
            str += '    </div>';
            str += '    <div class="g_gzjl_caw_reply">';
            str += '       <div>';
            str += '            <div class="a_icon icon_wh16 g_fl">A</div>';
            str += '       </div>';
            str += '        <p>' + replyContent + '</p>';
            str += '   </div>';
            //str += '    <div class="g_gzjl_caw_time">';
            //str += '        <span>时间：' + data[i].reply.CreateTime + '</span>';
            //str += '    </div>';
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