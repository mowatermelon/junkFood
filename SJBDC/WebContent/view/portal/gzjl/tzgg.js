 //默认每页显示的工作交流条数

$(function () {
    init();
});

function init() {
	var PAGESIZE=$('body').height()-206;
	PAGESIZE=parseInt(PAGESIZE/41)+1;
    var KeyWords=getUrlParm("lx"),
        issueId=getUrlParm("issueId");
    if (KeyWords==1) {   	
    	showAllGzjl(1,PAGESIZE);
    	$(".toplocation").attr('href','tzgg.jsp?lx=1'); 
    	 $(".toplocation").html("通知公告");
    } else if (KeyWords==2) {
    	showAllGzjl(2,PAGESIZE);
    	$(".toplocation").attr('href','tzgg.jsp?lx=2'); 
    	 $(".toplocation").html("工作简报");
    } else if(KeyWords==3) {
    	showAllGzjl(3,PAGESIZE);
    	 $(".toplocation").html("法律法规");
    	 $(".toplocation").attr('href','tzgg.jsp?lx=3'); 
    }

    bindComEvent(KeyWords,PAGESIZE);
   
    bindDelete(KeyWords,PAGESIZE);
}

function bindComEvent(lx,PAGESIZE) {
    $(document).on('click', "#gzjlSearchBtn", function () {
        var keyWorlds = $("#gzjlSearchContent").val();
        showSearchGzjlResult(keyWorlds,lx,PAGESIZE);
    });
    //发布
    $(document).on('click', "#submit_bottom", function () {
    	var url='/SJBDC/view/umeditor.jsp?lx=';
    	url+=lx;
    	window.open(url);
    });
    $(document).on('click', ".g_ask_des", function () {
    	var url= $(this).attr("url"); 	
    	$(this).css('color','#7f7f7f');
    	$(this).parents('li').addClass('g_gzjl_caw_ask0');
    	window.open(url);	
    });
}
function bindDelete(lx,PAGESIZE){
	 $(document).on('click', ".deleteone", function () {
	        var keyWorlds = $(this).attr("issueId");
	        if(window.confirm("确实要删除吗？")){
	        	Deleteone(keyWorlds,lx,PAGESIZE);
	        }
	        else {
	        	alert("取消删除");
	        }
	    });
}
function Deleteone(keyid,lx){
	var url='/SJBDC/protalController/';
	url+=keyid;
	url+='/deleteArticle.do';
	$.ajax({url:url,
    	type:"post",
    	dataType:"json",
    	success:function(data2){
        alert("删除成功！！！");
        showSearchGzjlResult('',lx,PAGESIZE);
    	}
    });
}

function bindEvent() {
    $(document).on('click', '#askIssiueSub', function () {
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
function Deleteone(keyid,lx,PAGESIZE){
	var url='/SJBDC/protalController/';
	url+=keyid;
	url+='/deleteArticle.do';
	$.ajax({url:url,
    	type:"post",
    	dataType:"json",
    	success:function(data2){
        alert("删除成功！！！");
        showSearchGzjlResult('',lx,PAGESIZE);
    	}
    });
}
/*function detailsBindEvent() {
    $(document).on('click', '#replyIssiueSub', function () {
        var issueId = $("#curIssue").attr("issueId");
        if ($('#replyContent').val() != "") {
            var url = "../Handler/IssueHandler.ashx?action=providesolution",
            data = {
                issueId: issueId,
                content: $('#replyContent').val()
            };
            getGzjlAjaxFn(url, data).done(function () {
                alert("回复问题成功！！！");
                $('#replyContent').val("");
                showGzjlDetails(issueId);
            });
            
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
}*/

//显示查询工作交流信息
function showSearchGzjlResult(BT,lx,PAGESIZE) {
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
    var url="/SJBDC/commonController/queryPage.do?queryId=ProtalQueryMapper.queryPageArticleList&queryMap[bt]="; 
    url+=BT;
    url+='&queryMap[lx]=';
    url+=lx;
    $.ajax({url:url,
    	type:"post",
    	dataType:"json",
    	data:{   	
	    "page.limit": PAGESIZE, //页面大小
	    "page.offset": 0,
    	},
    	success:function(res){
    		var totalPages = Math.ceil(res.total/PAGESIZE);   	    		
            showPagination2(totalPages,url,lx,PAGESIZE,BT);          
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
    
    //addcolor(str,key)  
}

//显示所有工作交流信息
function showAllGzjl(key,PAGESIZE) {
    $("#curLocation").html("更多信息");
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
    var url="/SJBDC/commonController/queryPage.do?queryId=ProtalQueryMapper.queryPageArticleList&queryMap[lx]=";   
    url+=key;
    var tem=key;
    $.ajax({url:url,
    	type:"get",
    	dataType:"json",
    	data:{   	
	    "page.limit": PAGESIZE, //页面大小
	    "page.offset": 0,
    	},
    	success:function(res){   		   		
    		var totalPages =Math.ceil(res.total/PAGESIZE);
            showPagination(totalPages,url,tem,PAGESIZE);
            disposeGzjlData(res.rows,tem);
    	}
    });
}

//显示分页
function showPagination(totalPages,url,temp1,PAGESIZE) {
    /*var str='<div class="pagination totoPages"style="float: left;line-height: 28px; height: 30px;padding: 0 4px; font-size: 14px;width: 74px; margin-right: 10px;" id="totalpages" style="float: left;">';
        str+='总页数:'+totalPages;
        str+='</div>';*/
        $("#totalpages").remove();
    $("#gzjlPagination").jqPaginator({
        totalPages: totalPages,
        visiblePages: 6,
        currentPage: 1,
        prev: '<li class="prev"><a style="line-height: 28px; height: 30px;padding: 0 6px; font-size: 14px;width: 74px; margin-right: 10px;" href="javascript:void(0);"><i class="arrow arrow2"><\/i><上一页<\/a><\/li>',
        next: '<li class="next"><a style="line-height: 28px; height: 30px;padding: 0 6px; font-size: 14px;width: 74px; margin-right: 10px;" href="javascript:void(0);">下一页><i class="arrow arrow3"><\/i><\/a><\/li>',
        page: '<li class="page"><a style="line-height: 28px; height: 30px;padding: 0 9px;; font-size: 14px;width: 30px; margin-right: 10px;" href="javascript:void(0);">{{page}}<\/a><\/li>',
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
                    disposeGzjlData(res.rows,temp1);
            	}
            });
        }
    })//.parent().append(str);
}

//显示分页
function showPagination2(totalPages,url,temp1,PAGESIZE,BT) {
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
                    disposeGzjlData2(res.rows,temp1,BT);
            	}
            });
        }
    })//.parent().append(str);
}


function disposeGzjlDetails(data) {
    var solutions = data;
    //$("#gzjlPagination").empty().append('');   
    var gzjlDetailsHtml = '<div class="g_gzjl_caw_ask">';
        gzjlDetailsHtml += '    <div class="q_icon icon_wh16 g_fl">Q</div>';
        gzjlDetailsHtml += '    <span class="g_ask_des" href="detial/detialtzgg.html?issueId='+data[0].Id+'">' + data[0].DESCRIPTION + '</span>';
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

function disposeGzjlData(data,key) {
	var tem0=key;
    var gzjlHtml = '';
    for (var i = 0; i < data.length; i++) {
       var title0 = data[i].BT == null ? "暂无标题" : subStr(data[i].BT,75);
       var time0=data[i].LRSJ==null? "暂无时间" : data[i].LRSJ.substring(0, 10);
        var str = '<div class="g_gzjl_caw">';
            str += '   <div class="g_gzjl_caw_ask">';
            str += '        <li style="padding: 6px 0;border-bottom: 1px dashed #ececec;"><a class="g_ask_des" style="list-style-type: disc;font-size:14px;margin-left: 0;width:75%;text-decoration: none" url="detial/detialtzgg.html?issueId='+data[i].ID+'&lx='+key+'" target="_blank">' + title0 + '</a>';  
            str += '              <a class="deleteone" issueId="'+data[i].ID+'" style="font-size:12px;color: #6199dd;border-radius: 3px;float: right;cursor: pointer;"><img src="../Images/gzjl/sc.png" style="margin-bottom: 2px;" ><span style="padding-top:2px">&nbsp;删除<span></a>';
            str += '              <span style="font-size:12px;color: #888888;float: right;padding-right:20px">时间：'+time0+'&nbsp</span>';
            str += '        </li>';
            str += '    </div>';
            str += '</div>';
        gzjlHtml += str;
    }
    $("#gzjlContent").empty().append(gzjlHtml);
}

function disposeGzjlData2(data,key,bt) {
	var tem0=key;
    var gzjlHtml = '';
    for (var i = 0; i < data.length; i++) {
       var title0 = data[i].BT == null ? "暂无标题" : addcolor(subStr(data[i].BT,75),bt);
       var time0=data[i].LRSJ==null? "暂无时间" : data[i].LRSJ.substring(0, 10);
        var str = '<div class="g_gzjl_caw">';
            str += '   <div class="g_gzjl_caw_ask">';
            str += '        <li style="padding: 6px 0;border-bottom: 1px dashed #ececec;"><a class="g_ask_des" style="list-style-type: disc;font-size:14px;margin-left: 0;width:75%;text-decoration: none" url="detial/detialtzgg.html?issueId='+data[i].ID+'&lx='+key+'" target="_blank">' + title0 + '</a>';  
            str += '              <a class="deleteone" issueId="'+data[i].ID+'" style="font-size:12px;color: #6199dd;border-radius: 3px;float: right;cursor: pointer;"><img src="../Images/gzjl/sc.png" style="margin-bottom: 2px;" ><span style="padding-top:2px">&nbsp;删除<span></a>';
            str += '              <span style="font-size:12px;color: #888888;float: right;padding-right:20px">时间：'+time0+'&nbsp</span>';
            str += '        </li>';
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
function addcolor(str,key){
	var nt = '<span style="color:red">'+key+'</span>';
    var reg = RegExp(key,"g");
    return  str.replace(reg,nt);
}