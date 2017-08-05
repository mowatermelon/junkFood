
<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<html>
<head>
<title>省级不动产项目</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<%@ include file="header/base.jsp"%>
<%@ include file="header/bootstarp.jsp"%>
<%@ include file="header/template.jsp"%>
<%@ include file="header/common.jsp"%>
<script src="${base }view/Common/js/DUtil.js?v=${v }"
	type="text/javascript"></script>
<script src="${base }view/Common/js/messenger.min.js?v=${v }"
	type="text/javascript"></script>
<link type="text/css" rel="stylesheet"
	href="${base }view/Common/css/messenger.css?v=${v }" />
<link type="text/css" rel="stylesheet"
	href="${base }view/Common/css/messenger-theme-block.css?v=${v }" />

</head>
<body>

	<div class="base-header">
		<div class="base-title">
			<img src="" id="title-img" />
		</div>


		<div class="base-btns">
			<a class="glyphicon glyphicon-user"><span class="login-user">${user.username },欢迎您的登录</span></a>
			<a href="/SJBDC/j_spring_security_logout"
				class="glyphicon glyphicon-off"></a>
		</div>
	</div>

	<div class="main">
		<div class="base-left-nav">
			<div class="base-nav-inner">
				<div class="base-slider"></div>
			</div>
		</div>
		<div class="right-data-panel">
			<iframe id="mainFrame" frameborder="0" src=""
				style="width: 100%; height: 100%"></iframe>
		</div>
	</div>

	<!--确认框-->
	<div class="modal fade" id="confirmModal" tabindex="-1" role="dialog"
		data-backdrop="static" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header geo-modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title" name="title">确认操作</h4>
				</div>
				<div class="modal-body">
					<div class="row" style="height: 80px; padding-top: 20px;">
						<div name="content" class="col-md-10 col-md-offset-1"></div>
					</div>
				</div>
				<div class="modal-footer" style="background-color: #FFFFFF">
					<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
					<button type="button" class="btn btn-primary">确定</button>
				</div>
			</div>
		</div>
	</div>

	<!--元数据编辑弹框-->
	<div class="modal fade" id="metadataEditModal" tabindex="-1"
		role="dialog" data-backdrop="static" aria-hidden="true">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header geo-modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title" id="exampleModalLabel">元信息编辑</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12 geo-modal-metadata"
							style="overflow: hidden;">
							<iframe id="metadataEdit" name="metadataEdit" src=""
								frameborder="0" style="width: 100%; min-height: 300px"></iframe>
						</div>
					</div>
				</div>
				<div class="modal-footer" style="background-color: #FFFFFF">
					<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
					<button type="button" class="btn btn-primary">确定</button>
				</div>
			</div>
		</div>
	</div>
	<script id="menu-template" type="text/html">
    <$if(data&&data.length){
    for(var i=0;i<data.length ;i++){
       if(data[i].child&&data[i].child.length){ $>
        <div class="sidebar-nav">
            <a class="sidebar-title sidebar-title-down">
                <span class="<$=data[i].icon$>"></span>
                <span><$=data[i].name$></span>
            </a>
            <ul class="sidebar-trans">
                <$if(data[i].child&&data[i].child.length){
                var child = data[i].child;
                for(var j=0;j<child.length ;j++){ $>
					
						<li class="nav-item" data-url="<$=child[j].src$>">
                        	<$=child[j].name$>
                   	    </li>
                    
                    <$}$>
                    <$}$>
            </ul>
        </div>
        <$}else{$>
        <div class="sidebar-nav">
            <a class="sidebar-title" data-url="<$=data[i].src$>">
                <span class="<$=data[i].icon$>"></span>
                <span><$=data[i].name$></span>
            </a>
        </div>
        <$}$>
        <$}$>
        <$}$>
</script>
	<script src="${base}view/Common/js/base.js" type="text/javascript"></script>
</body>
</html>
