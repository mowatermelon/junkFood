var PAGESIZE = 8; //默认每页显示的工作交流条数

$(function () {
    init();
});

function init() {
    var KeyWords=getUrlParm("keyWords"),
        issueId=getUrlParm("issueId");   	
    showSearchGzjlResult(KeyWords);                       
    bindComEvent();
}

function bindComEvent() {
    $(document).on('click', "#gzjlSearchBtn", function () {
        var keyWorlds = $("#gzjlSearchContent").val();
        showSearchGzjlResult(keyWorlds);
    });
    $(document).on('click', ".g_ask_des", function () {
    	var url= $(this).attr("url"); 	
    	$(this).css('color','#7f7f7f');
    	$(this).parents('li').addClass('g_gzjl_caw_ask0');
    	window.open(url);	
    });
}

//显示查询工作交流信息
function showSearchGzjlResult(keyWorlds) {
    $("#curLocation").html("搜索结果");
    $("#gzjlSearchContent").val("");
    $("#g_gzjl_pagination").empty().append('');
    var height0=$(".bordercontent").height();
    height0-=42;
    height0=parseInt(height0/28)+1;
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
    var url="/SJBDC/commonController/queryList.do?queryId=ProtalQueryMapper.queryIndexMsg&queryMap[bt]="; 
    url+=keyWorlds;
    url+='&queryMap[rownum]=';
    url+=height0;
    $.ajax({url:url,
    	type:"post",
    	dataType:"json",   	
    	success:function(res){  	
    		disposeGzjlData(res);      
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
    var url="/SJBDC/commonController/queryList.do?queryId=ProtalQueryMapper.queryReply&queryMap[pid]=";
    var issueId=issueId;
    url+=issueId;
    $.ajax({url:url,
    	type:"get",   	
    	dataType:"json",
    	success:function(res){
    		disposeGzjlData(res)
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
    var url="/SJBDC/commonController/queryList.do?queryId=ProtalQueryMapper.queryIndexMsg";   
    $.ajax({url:url,
    	type:"get",
    	dataType:"json",
    	data:{   		  
    	},
    	success:function(res){   	 		    		
           // disposeGzjlData(res.rows);
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
        gzjlDetailsHtml += '    <span class="g_ask_des" id="curIssue" issueId='+data[0].YWBSID+'>' + data[0].WCONTENT + '</span>';
        gzjlDetailsHtml += '    <div style="float:right;">';
        gzjlDetailsHtml += '        <span class="g_question_num"></span>';
        gzjlDetailsHtml += '        <div class="g_reply_btn">';
        gzjlDetailsHtml += '            <div></div>';
        gzjlDetailsHtml += '            <span>回复</span>';
        gzjlDetailsHtml += '        </div>';
        gzjlDetailsHtml += '    </div>';
        gzjlDetailsHtml += '</div>';       
        var str='';
        for (var i = 0; i < data.length; i++) {
        	//alert(JSON.stringify(data));
            var replyContent = data[i].CONTENT == null||data[i].CONTENT=='' ? "暂无回复" : data[i].CONTENT;
            str+='<div class="g_gzjl_caw_reply">';
            str += '       <div>';
            str += '            <div class="a_icon icon_wh16 g_fl">A</div>';
            str += '       </div>';
                str += '      <p style="padding-left: 0px;">' + replyContent + '</p>';
                str += '       </div>';
                //str += '    <div class="g_gzjl_caw_time">';
                //str += '        <span>时间：' + data[i].reply.CreateTime + '</span>';
                //str += '    </div>';
            
        }
        gzjlDetailsHtml += str;
        
        
                               
    
    $("#gzjlContent").empty().append(gzjlDetailsHtml);
}

function disposeGzjlData(data) {
    var gzjlHtml1 = '';
    for (var i = 0; i < data.length; i++) {
       var title0 = data[i].BT == null ? "暂无标题" : subStr(data[i].BT,78);
       var time0=data[i].LRSJ==null? "暂无时间" : data[i].LRSJ.substring(0, 10);
        var str = '<div class="g_gzjl_caw" style="padding-right: 15%;padding-left: 15%;line-height: 28px;">';
            str += '   <div class="g_gzjl_caw_ask"  style="margin-left: 0;" >';
            gzjlHtml1+=str;
            var str1='',str2='',str3='',str4='';
            if(data[i].LX=='1'){
            	str1 += '        <li style="padding: 6px 0;border-bottom: 1px dashed #ececec;"><a class="g_ask_des" style="list-style-type: disc;font-size:14px;margin-left: 0;width:75%;text-decoration: none" url="detial/detialtzgg.html?issueId='+data[i].ID+'&lx=1">【通知公告】' + title0 + '</a>';  
                //str1 += '              <a class="deleteone" issueId="'+data[i].ID+'" style="font-size:12px;color: #6199dd;border-radius: 3px;float: right;cursor: pointer;"><img src="../Images/gzjl/sc.png"><span style="padding-top:2px">&nbsp;删除<span></a>';
                str1 += '              <span style="font-size:12px;color: #888888;float: right;">时间：'+time0+'</span>';
                str1 += '        </li>';            
            }
            else if(data[i].LX=='2'){
            	str2 += '        <li style="padding: 6px 0;border-bottom: 1px dashed #ececec;"><a class="g_ask_des"style="list-style-type: disc;font-size:14px;margin-left: 0;width:75%;text-decoration: none"  url="detial/detialtzgg.html?issueId='+data[i].ID+'&lx=2" >【工作简报】' + title0 + '</a>';            
                str2 += '              <span style="font-size:12px;color: #888888;float: right;">时间：'+time0+'</span>';
                str2 += '        </li>';
            }
            else if(data[i].LX=='3'){
            	str3 += '        <li style="padding: 6px 0;border-bottom: 1px dashed #ececec;"><a class="g_ask_des" style="list-style-type: disc;font-size:14px;margin-left: 0;width:75%;text-decoration: none"  url="detial/detialtzgg.html?issueId='+data[i].ID+'&lx=3" >【法律法规】' + title0 + '</a>';            
                str3 += '              <span style="font-size:12px;color: #888888;float: right;">时间：'+time0+'</span>';
                str3 += '        </li>';
            }
            else if(data[i].LX=='4'){
            	str4 += '        <li style="padding: 6px 0;border-bottom: 1px dashed #ececec;"><a class="g_ask_des" style="list-style-type: disc;font-size:14px;margin-left: 0;width:75%;text-decoration: none"  url="gzjl.jsp?issueId='+data[i].ID+'">【工作交流】' + title0 + '</a>';            
                str4 += '              <span style="font-size:12px;color: #888888;float: right;">时间：'+time0+'</span>';
                str4 += '        </li>';                
            }            
        gzjlHtml1 += str1;   
        gzjlHtml1 += str2;
        gzjlHtml1 += str3;
        str4 += '    </div>';
        str4 += '</div>';
        gzjlHtml1 += str4;
    }
    $("#gzjlContent").empty().append(gzjlHtml1);    
}
function changealldata(data){
	var data1=[],data2=[],data3=[],data4=[];
	for(var i=0;i<data.length;i++)
		{
			if(data[i].LX==1)
				{
					data1.push(data[i])
				}
		}
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
function getUrlParm(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = decodeURI(window.location.search).substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}