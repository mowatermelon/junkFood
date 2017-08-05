var PAGESIZE = 4; //默认每页显示的工作交流条数

$(function () {
    init();
});

function init() {
	var PAGESIZE=$('body').height()-171;
	PAGESIZE=parseInt(PAGESIZE/92);
    $("#gzjlNav").addClass("head_checked");
    var KeyWords=getUrlParm("keyWords"),
        issueId=getUrlParm("issueId"); 
    if (KeyWords) {
        showSearchGzjlResult(KeyWords,PAGESIZE);
        bindEvent();      
    } else if (issueId) {
        showGzjlDetails('',issueId);
        detailsBindEvent();
    } else {
        showAllGzjl(PAGESIZE);
        bindEvent();
    }
    bindComEvent(PAGESIZE);
   // bindDelete(PAGESIZE);
}
function bindDelete(PAGESIZE){
	 $(document).on('click', ".deleteone", function () {
	        var keyWorlds = $(this).attr("issueId");
	        if(window.confirm("确实要删除吗？")){
	        	Deleteone(keyWorlds,PAGESIZE);
	        }
	        else {
	        	alert("取消删除");
	        }	        
	    });	 
}
function Deleteone(keyid,PAGESIZE){
	var url='/SJBDC/protalController/';
	url+=keyid;
	url+='/deleteAnswer.do';
	$.ajax({url:url,
    	type:"post",
    	dataType:"json",
    	success:function(data2){
        alert("删除成功！！！");
        showSearchGzjlResult('',PAGESIZE);
    	}
    });
}
function bindComEvent(PAGESIZE) {
    $(document).on('click', "#gzjlSearchBtn", function () {
        var keyWorlds = $("#gzjlSearchContent").val();
        showSearchGzjlResult(keyWorlds,PAGESIZE);
    });
    //提问
    $(document).on('click', '#askIssiueSub', function () {
        if ($('#questionContent').val() != "") {          
            var  content = $('#questionContent').val();         
            var  userName="admin";
           
        	$.ajax({url:url,
            	type:"post",
            	dataType:"json",
            	data:{          	            			
                	'content':content	         		         		
            	},
            	success:function(data2){           		
                alert("提问成功！！！");
                showSearchGzjlResult('',PAGESIZE);
            	}
            });
        } else {
            alert("请输入要发布的问题！！！");
        }
    });    
}

function bindEvent() {
    $(document).on('click', ".g_ask_des", function () {
        var curIssueId = $(this).attr("issueId");
        var values=$(this).html();
        showGzjlDetails(values,curIssueId);
        detailsBindEvent(curIssueId);
    }).on('click', '.deleteone', function () {
    	 bindDelete(PAGESIZE);
    });
}

function detailsBindEvent(curIssueId) {
	$(document).on('click', "#replyIssiueSub", function () {
		var  content = $('#questionContent').val(); 
		if ($('#replyContent').val() != "") {                              
            var  content = $('#replyContent').val(); 
            var url='/SJBDC/protalController/addAnswer.do';
            $.ajax({url:url,
            	type:"post",
            	dataType:"json",
            	data:{          	
            			'pid':curIssueId,
                		'content':content	         		         		
            	},
            	success:function(data2){
                alert("回复成功！！！");
                showSearchGzjlResult('',PAGESIZE);
            	}
            });
            
        } else {
            alert("请输入回复的内容！！！");
        }    	
	})
}

//显示查询工作交流信息
function showSearchGzjlResult(keyWorlds,PAGESIZE) {
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
    var url="/SJBDC/commonController/queryPage.do?queryId=ProtalQueryMapper.queryPageAnswer&queryMap[content]="; 
    url+=keyWorlds;
    $.ajax({url:url,
    	type:"post",
    	dataType:"json",
    	data:{   	
	    "page.limit": PAGESIZE, //页面大小
	    "page.offset": 0,
    	},
    	success:function(res){
    		var totalPages = Math.ceil(res.total/PAGESIZE);
            showPagination2(keyWorlds,totalPages,url,PAGESIZE);
    	}
    });
}

//显示工作交流详细信息
function showGzjlDetails(values,issueId) {
    $("#curLocation").html("交流详情");
    $("#gzjlAsk").hide();
    $("#gzjlReply").show();
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
    		 disposeGzjlDetails(issueId,values,res);
    	}
    });
}
//显示id的内容
function showGzjlidConttent(issueId) {
    
    var url="/SJBDC/commonController/queryList.do?queryId=com.geostar.gtgh.portal.core.dao.WorkAnswerMapper.selectByPrimaryKey&queryMap[ywbsid]=";   
    url+=issueId;
   
    $.ajax({url:url,
    	type:"get",   	
    	dataType:"json",
    	success:function(res){
    		//alert(JSON.stringify(res));
    		 var contents=res.length?res[0].content:'暂无相关问题';
    		$('.g_ask_des2').html(contents);
    	}
    });   
}

//显示所有工作交流信息
function showAllGzjl(PAGESIZE) {
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
    var url="/SJBDC/commonController/queryPage.do?queryId=ProtalQueryMapper.queryPageAnswer";   
    $.ajax({url:url,
    	type:"get",
    	dataType:"json",
    	data:{   	
	    "page.limit": PAGESIZE, //页面大小
	    "page.offset": 0,
    	},
    	success:function(res){   	 		
    		var totalPages =Math.ceil(res.total/PAGESIZE);
            showPagination(totalPages,url,PAGESIZE);
           // disposeGzjlData(res.rows);
    	}
    });
}

//显示分页
function showPagination(totalPages,url,PAGESIZE) {
   /* var str='<div class="pagination totoPages" id="totalpages" style="float: left;">';
        str+='总页数:'+totalPages;
        str+='</div>';*/
        $("#totalpages").remove();
    $("#gzjlPagination").jqPaginator({
        totalPages: totalPages,
        visiblePages: 6,
        currentPage: 1,
        prev: '<li class="prev"><a style="line-height: 28px; height: 30px;padding: 0 6px; font-size: 14px;width: 70px; margin-right: 10px;" href="javascript:void(0);"><i class="arrow arrow2"><\/i><上一页<\/a><\/li>',
        next: '<li class="next"><a style="line-height: 28px; height: 30px;padding: 0 6px; font-size: 14px;width: 70px; margin-right: 10px;" href="javascript:void(0);">下一页><i class="arrow arrow3"><\/i><\/a><\/li>',
        page: '<li class="page"><a style="line-height: 28px; height: 30px;padding: 0 9px; font-size: 14px;width: 30px; margin-right: 10px;" href="javascript:void(0);">{{page}}<\/a><\/li>',
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
    })//.parent().append(str);
}

function showPagination2(keyWorlds,totalPages,url,PAGESIZE) {
	   /* var str='<div class="pagination totoPages" id="totalpages" style="float: left;">';
	        str+='总页数:'+totalPages;
	        str+='</div>';*/
	        $("#totalpages").remove();
	    $("#gzjlPagination").jqPaginator({
	        totalPages: totalPages,
	        visiblePages: 6,
	        currentPage: 1,
	        prev: '<li class="prev"><a style="line-height: 28px; height: 30px;padding: 0 6px; font-size: 14px;width: 64px; margin-right: 10px;" href="javascript:void(0);"><i class="arrow arrow2"><\/i><上一页<\/a><\/li>',
	        next: '<li class="next"><a style="line-height: 28px; height: 30px;padding: 0 6px; font-size: 14px;width: 64px; margin-right: 10px;" href="javascript:void(0);">下一页><i class="arrow arrow3"><\/i><\/a><\/li>',
	        page: '<li class="page"><a style="line-height: 28px; height: 30px;padding: 0 9px; font-size: 14px;width: 30px; margin-right: 10px;" href="javascript:void(0);">{{page}}<\/a><\/li>',
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
	                    disposeGzjlData2(keyWorlds,res.rows);
	            	}
	            });
	        }
	  })//.parent().append(str);
}

function disposeGzjlDetails(id,values,data) {
	 var values0=data.length?data[0].WCONTENT:values;
	    $("#gzjlPagination").empty().append('');
		var solutions = data;		
	    $(".totoPages").empty().hide();  
	    var gzjlDetailsHtml = '<div class="g_gzjl_caw_ask" style="margin-bottom: 46px;">';
	        gzjlDetailsHtml += '    <div class="q_icon icon_wh16 g_fl">Q</div>';
	        gzjlDetailsHtml += '    <span class="g_ask_des2" id="curIssue" issueId='+id+'>' + values0 + '</span>';
	        gzjlDetailsHtml += '    <div style="float:right;">';
	        gzjlDetailsHtml += '        <span class="g_question_num"></span>';
	        gzjlDetailsHtml += '        <div class="g_reply_btn" >';
	        gzjlDetailsHtml += '            <div></div>';
	        gzjlDetailsHtml += '            <span class="addanswer" issueId="'+id+'">回复</span>';
	        gzjlDetailsHtml += '        </div>';
	        gzjlDetailsHtml += '    </div>';
	        gzjlDetailsHtml += '</div>';       
	        var str='';
	    if(!data.length){
	        alert("暂无回复");	        
	        if(values0==null||values0=='')
	        	{	        	
	        		showGzjlidConttent(id)
	        	}
	        }
	   else{
	        for (var i = 0; i < data.length; i++) {
	        	//alert(JSON.stringify(data));
	            var replyContent = data[i].CONTENT == null||data[i].CONTENT=='' ? "暂无回复" : data[i].CONTENT;
	            	str+='<div class="g_gzjl_caw_reply" style="margin-bottom: 46px;">';

	            	str += '            <div class="a_icon icon_wh16 g_fl">A</div>';
	            
	                str += '      <div style="padding-left: 10px;width:100%"><span style="padding-left: 20px;width:80%;float: left;font-size:14px;color:#666666">' + replyContent + '</span>';
	                //str += '              <span class="deleteone" issueId="'+data[i].YWBSID+'" style="color: #2A82F0;border-radius: 3px;float: right;cursor: pointer;font-size: 0.8rem">&nbsp删除</span></div>';
	                //str += '              <a class="deleteone" issueId="'+data[i].YWBSID+'" style="color: #6199dd;border-radius: 3px;float: right;cursor: pointer;font-size: 12px;"><img src="../Images/gzjl/sc.png">&nbsp;删除</a>';	                
	                str += '       </div>';
	                //str += '    <div class="g_gzjl_caw_time">';
	                //str += '        <span>时间：' + data[i].reply.CreateTime + '</span>';
	                str += '    </div>';
	            
	        }
	        gzjlDetailsHtml += str;
	        
	   } 
	                               
	    
	    $("#gzjlContent").empty().append(gzjlDetailsHtml);
	
}

function disposeGzjlData(data) {
    var gzjlHtml = '';
    for (var i = 0; i < data.length; i++) {
        var replyContent = data[i].ACONTENT == null||data[i].ACONTENT == '' ? "暂无回复" : subStr(data[i].ACONTENT,110);
        var content= data[i].CONTENT == null||data[i].CONTENT == '' ? "暂无回复" : subStr(data[i].CONTENT,70);
        var str = '<div class="g_gzjl_caw">';
            str += '   <div class="g_gzjl_caw_ask">';
            str += '        <div class="q_icon icon_wh16 g_fl">Q</div>';
            str += '        <span class="g_ask_des" issueId=' + data[i].YWBSID + '>' + content + '</span>';
            str += '        <div >';        
            str += '            <div class="g_reply_btn">';
            str += '              <a style="color: #2a86f0;border-radius: 3px;float: right;cursor: pointer;font-size: 12px;">回复</a>';
            str += '               <div class="AnswerOne" issueId="'+data[i].YWBSID+'" ></div>';
            str += '           <span class="g_question_num" style="cursor: auto;color:#888888;padding-top: 1px;">' + data[i].TOTAL + '个回答</span>';
            str += '            </div>';
            str += '       </div>';
            str += '    </div>';
            str += '    <div class="g_gzjl_caw_reply">';
            str += '       <div>';
            str += '            <div class="a_icon icon_wh16 g_fl">A</div>';
            str += '       </div>';
            str += '        <span class="g_answer_des">' + replyContent + '</span>';
            if(data[i].ATIME){
            	 str += '        <a style="float:left; color:#008000;font-size: 12px;padding-top:10px;padding-left:26px" href="/SJBDC/view/portal/gzjl/gzjl.jsp?issueId='+data[i].YWBSID+'"target="_blank">http://SJBDC/view/portal/gzjl/gzjl.jsp?issueId='+data[i].YWBSID+'&nbsp;</a><span style="float:left; color:#008000;font-size: 12px;padding-top:10px;padding-left:26px">时间：' + data[i].ATIME + '<span>';
            }         
            str += '   </div>';
            /*str += '    <div class="g_gzjl_caw_time">';*/
            
            /*str += '    </div>';*/
            str += '</div>';
        gzjlHtml += str;
    }
    $("#gzjlContent").empty().append(gzjlHtml);
}

//关键字体变颜色
function disposeGzjlData2(key,data) {
    var gzjlHtml = '';
    for (var i = 0; i < data.length; i++) {
        var replyContent = data[i].ACONTENT == null||data[i].ACONTENT == '' ? "暂无回复" : subStr(data[i].ACONTENT,110);
        var content= data[i].CONTENT == null||data[i].CONTENT == '' ? "暂无回复" :  addcolor(subStr(data[i].CONTENT,70),key);
        var str = '<div class="g_gzjl_caw">';
            str += '   <div class="g_gzjl_caw_ask">';
            str += '        <div class="q_icon icon_wh16 g_fl">Q</div>';
            str += '        <span class="g_ask_des" issueId=' + data[i].YWBSID + '>' + content + '</span>';
            str += '        <div >';        
            str += '            <div class="g_reply_btn">';
            str += '              <a style="color: #2a86f0;border-radius: 3px;float: right;cursor: pointer;font-size: 12px;">回复</a>';
            str += '               <div class="AnswerOne" issueId="'+data[i].YWBSID+'" ></div>';
            str += '           <span class="g_question_num" style="cursor: auto;color:#888888;padding-top: 1px;">' + data[i].TOTAL + '个回答</span>';
            str += '            </div>';
            str += '       </div>';
            str += '    </div>';
            str += '    <div class="g_gzjl_caw_reply">';
            str += '       <div>';
            str += '            <div class="a_icon icon_wh16 g_fl">A</div>';
            str += '       </div>';
            str += '        <span class="g_answer_des">' + replyContent + '</span>';
            if(data[i].ATIME){
            	 str += '        <a style="float:left; color:#008000;font-size: 12px;padding-top:10px;padding-left:26px" href="/SJBDC/view/portal/gzjl/gzjl.jsp?issueId='+data[i].YWBSID+'"target="_blank">http://SJBDC/view/portal/gzjl/gzjl.jsp?issueId='+data[i].YWBSID+'&nbsp;</a><span style="float:left; color:#008000;font-size: 12px;padding-top:10px;padding-left:26px">时间：' + data[i].ATIME + '<span>';
            }         
            str += '   </div>';
            /*str += '    <div class="g_gzjl_caw_time">';*/
            
            /*str += '    </div>';*/
            str += '</div>';
        gzjlHtml += str;
    }
    $("#gzjlContent").empty().append(gzjlHtml);
}

function addcolor(str,key){
	var nt = '<span style="color:red">'+key+'</span>';
    var reg = RegExp(key,"g");
    return  str.replace(reg,nt);
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