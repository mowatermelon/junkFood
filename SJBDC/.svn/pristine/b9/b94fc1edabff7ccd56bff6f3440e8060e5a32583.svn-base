<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<%@ include file="Common/header/base.jsp"%>
<%@ include file="Common/header/umeditor.jsp"%>
<style type="text/css">
.toptittle{
    width: 1024px;
    height: 47px;
    margin: auto;
    background-color: #2175de;
    margin-bottom: 10px;
}

.g-pmt-2{
	font-size: 16px;
    float: left;
    font-weight: 700;
    display: block;
    width: 100px;
    height: 47px;
    color: rgb(255, 255, 255);
    background-color: #2175de;
    text-decoration: none;
    text-align: center;
    margin-left: 85px;
    line-height: 48px;
}
</style>
</head>
<body>
<!-- <div class='toptittle'>
     <a  class='g-pmt-2' href='/SJBDC/view/portal/gzjl/FINDALL.jsp' >首页</a>
     <a  class='g-pmt-2' href='/SJBDC/view/portal/gzjl/gzjlindex.jsp'>工作交流</a>
     <a  class='g-pmt-2' href='/SJBDC/view/portal/gzjl/gzjlindex.jsp?target=tzgg'>通知公告</a>
     <a  class='g-pmt-2' href='/SJBDC/view/portal/gzjl/gzjlindex.jsp?target=gzjb' >工作简报</a>
     <a  class='g-pmt-2' href='/SJBDC/view/portal/gzjl/gzjlindex.jsp?target=flfg' >法律法规</a>       
</div> -->
<p style='width:1024px;margin:auto;display:table'>
<span style='width:10%;font-size:18px;font-weight:bold;color:#333;line-height: 30px;'>标题：</span>
<input style='width:90%;height:34px;float:right' id="tittle2" class="m_content_search_txt" type="text" placeholder="请输入标题"/>
</p>
<p style='width:1024px;margin:auto;padding-top:25px;padding-bottom: 30px;'>
<span style='width:10%;font-size:16px;font-weight:bold;color:#333'>发布人：</span>
	<input style='width:90%;height:30px;float:right' id="author2" class="m_content_search_txt" type="text" placeholder="请输入作者"/>
</p>
	<script id="editor" type="text/plain" style="width: 1024px; height: 400px;"></script>
	<script>
		//实例化编辑器
		//建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
		var ue = UM.getEditor('editor');
		$(function(){
			 $(document).on('click', ".buttom0", function () {
				 var tittle00=$("#tittle2").val(),
				  	author00=$("#author2").val(),
				   	content=$("#editor").html(),
				 	lx=getUrlParm("lx"),
				  	url='/SJBDC/protalController/addArticle.do';
				  	 if(window.confirm("确实要发布吗？")){
				  		$.ajax({url:url,
			            	type:"post",
			            	dataType:"json",
			            	data:{          	            			
			                	'rr':content,	
			                	'lx':lx,
			                	'lrr':author00,
			                	'bt':tittle00               	
			            	},
			            	success:function(data2){
			                alert("发布成功！！！");
			                showSearchGzjlResult('',lx,PAGESIZE);
			            	}
			            });
				  	 }
			    });
		})
		function getUrlParm(name) {
	    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	    var r = decodeURI(window.location.search).substr(1).match(reg);
	    if (r != null) {
	        return unescape(r[2]);
	    }
	    return null;
	}
	</script>
	<a class='buttom0' style='font-size:18px; line-height:40px;background-color: #20A160;color:#ffffff;cursor:pointer;;position:absolute;border-radius: 5px;bottom:20px;right:130px;padding-left: 20px;padding-right: 20px;'>立即提交</a>
</body>

</html>