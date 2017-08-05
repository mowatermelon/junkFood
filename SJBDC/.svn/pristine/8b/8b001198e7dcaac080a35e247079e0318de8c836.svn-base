<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<html>
<head>
    <title></title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <link href="../Plugins/bootstrap/bootstrap.min.css" type="text/css" rel="stylesheet"/>
    <link href="tzgg.css" type="text/css" rel="stylesheet"/>
    <script type="text/javascript" src="../../Common/js/jquery-1.9.1.min.js"></script>
    <%@ include file="../../Common/header/base.jsp"%>
    <%@ include file="../../Common/header/umeditor.jsp"%>
    <script type="text/javascript" src="../../Script/plugins/bootstrap/js/bootstrap.js"></script>    
    <script type="text/javascript" src="tzgg.js"></script>
    <title>通知公告</title>
</head>
<body> 
	<div class="g_mark">
        <div>
            <img src="../Images/gzjl/gd_path.png" style="margin:0px 0px 4px 0px;"/>
            <span style="color:#ACACAC">当前位置：</span>
            <a class='toplocation'  href='' style="color:#333333;"></a>
            <span style="color:#ACACAC"> > </span>
            <span id="curLocation" style="color:#1F77DB"></span>
        </div>
    </div>  
    <div class="g_gzjl_body">
        <!--s 搜索 -->
        <div class="g_gzjl_content_search">
            <div>
                <div class="g_gzjl_content_search_icon"></div>
                <input id="gzjlSearchContent" class="g_gzjl_content_search_txt" type="text" placeholder="请输入关键字"/>
                <div id="gzjlSearchBtn" class="g_gzjl_content_search_btn">搜 索</div>
                <a id='submit_bottom' style='width:132px;height:40px;text-decoration: none;text-align: center;line-height: 38px;float:right;border: 1px solid #ffcda5;cursor: pointer;background-color:#fff5f5'>
                <img src="../Images/gzjl/fbxx.png">
                <span style='color:#ff7200;font-size:16px'>发布信息</span></a>
            </div>
        </div>
        <!--e 搜索 -->
        
        <!--s 交流内容 -->
        <div id="gzjlContent" class="g_gzjl_content"></div>
        <!--e 交流内容-->

       <!--s 分页 -->
        <div class="g_gzjl_pagination">
            <div>
                <ul id="gzjlPagination" class="pagination"></ul>
            </div>
        </div>
        <!--e 分页 -->  
         <!-- 模态框（Modal2） -->  
            <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">  
                <div class="modal-dialog">  
                    <div class="modal-content">  
                        <div class="modal-header">  
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>  
                            <p class="modal-title" id="myModalLabel2" style="height:30px;font-size:16px;">  
                		<span style="font-size:14px;color:#fff">发布信息</span></p>  
                        </div>  
                        <div class="modal-body">
                        <div class="inner-box">
							<span class="data-box-title" style="float:left">发布标题：</span> 
							<div style="float:left;display:inline-block;width:85%">													
							<textarea calss="form-control" id="content1" style="width:95%;height:30px;resize: none;background:#feffea;margin-top:4px;" placeholder="tittle："></textarea>
							</div>
						</div>                       
						<div class="inner-box">
							<span class="data-box-title" style="float:left">发布内容：</span> 
							<div style="float:left;display:inline-block;width:85%">													
							<textarea calss="form-control" id="content2" style="width:95%;height:120px;resize: none;background:#feffea;margin-top:4px;" placeholder="message："></textarea>
							</div>
						</div>
                        </div>  
                        <div class="modal-footer">  
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭  </button>  
                            <button type="button" class="btn btn-primary2" data-dismiss="modal" >提交</button>  
                        </div>  
                    </div>
               </div>
         </div>  
                    <!-- /.modal-content -->    
    </div>
		
    <script src="../Plugins/jqPaginator.js" type="text/javascript"></script>
</body>
</html>
