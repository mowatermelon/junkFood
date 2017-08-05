<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <%@ include file="../../../../Common/header/base.jsp"%>
    <style>
        ul{
            list-style-type: none;
        }
        .open{
        	float:left;
            display: inline-block;
            width:16px;
            height:16px;
            background: url("/SJBDC/view/supervise/jg/xn/ywjg/image/expand.png");
        }
        .close{
        	float:left;
            display: inline-block;
            width:16px;
            height:16px;
            background: url("/SJBDC/view/supervise/jg/xn/ywjg/image/collapse.png");
        }
        .tree-ul>li:nth-child(1)>div:first-of-type{

        } 
        .add_ul{
        background: url(/SJBDC/view/supervise/jg/xn/ywjg/image/vline.png) repeat-y;
			background-position:8px 0px;
        
        }
         .title-div{
         list-style-type: none;
			background: url(/SJBDC/view/supervise/jg/xn/ywjg/image/vline.png) repeat-y;
			background-position:8px 0px;
			margin: 0;
			padding: 0;
			padding-left: 7px;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			cursor: default;
         }

		ul.tree-ul li: last{
			background-image: 'url("/SJBDC/view/supervise/jg/xn/ywjg/image/lastnode.png")';
			background-repeat: no-repeat;		
		}
         tree-ul ul{
         	padding-left:40px;
         
         }
        .title-div{
        	width:100%;
        	height:30px;
        	line-height:30px;
			position: relative;        
        }
        .title-div span:first-child{
        	position:absolute;
        	margin-top:7px;
        
        }
        .title-div span:last-child{
        	background:"#000";
        	position:absolute;
        	left:20px;
        	right:0;
        	height:100%;
        }
        .add_ul{
        	width:100%;
        	padding-left:40px;
        }
    </style>

    <script>
        var data_z=[];
        var data_h=[];
        $(function(){
            var data_zd =["441802005007GB00019W00000000","441802005008GB00059W00000000","441802005008GB00063W00000000","441802003011GB00007W00000000","441802005003GB00077W00000000"];
           
            initTree(data_zd);
            index=1;
            $(".open").bind('click',function(e,data){
                var $ul=$(this).parent().next("ul");
                $ (this).toggleClass ("close");
                //在点击宗地前面的+的时候，要获取到当前宗地的不动产单元号
                var zbdcdyh=$(this).next("span").attr("id");
                $ul.slideToggle();
                /*$.ajax({
                    type: "GET",
                    cache: false,
                    url: "http://192.168.33.62:8080/SJBDC/commonController/queryList.do?queryId=JgXnYwjgQueryMapper.queryMapForZdjbxx_z",              //请求地址
                    data: { },
                    dataType: "jsonp",
                    jsonp: "jsoncallback"
                });*/
                CrossdomainGet(zbdcdyh,obj);
            });
            $(".open").bind("click",function(){
                $(this).parent().next("ul").html("");
               // alert($(this).next("span").attr("id"));
                for(var i =0;i<data_z.length;i++){
                    var $li=$('<li><div name="2" class="title-div"><span class="open"></span><span id="'+data_z[i]+'">'+data_z[i]+'（幢）</span></div><ul class="add_ul"></ul></li>');
                    //户的点击事件
                    $li.find(".open").next().bind("click",function(){
                        //点击幢不动产单元号，获取到当前的幢不动产单元号
                        //alert($(this).attr("id"));
                        //alert($li.find("div").attr("name"));
                    });
                    $li.find(".open").bind("click",function(e){
                        //点击+ 得到自然幢不动产单元号
                        var bdcdyh=$(this).next("span").attr("id");
                        //发送ajax请求，
                        //alert("开始请求");
                        $.ajax({
                            url: "/SJBDC/commonController/queryList.do?queryId=JgXnYwjgQueryMapper.queryMapForZdjbxx_h",                            //请求地址
                            type: "POST",                       //请求方式
                            data: 	{ 
                            	queryMap:{
                            		"z_bdcdyh":bdcdyh
                            	}
                            },           //请求参数
                            dataType: "json",
                            success: function (data) {
                            	alert(JSON.stringify(data))
                            	for(var i=0;i<data.length;i++){	
                                    data_h.push(data[i].H_BDCDYH)
                                }
                                return data_h;
                            },
                            fail: function (status) {
                                alert("请求失败");
                            }
                        });

                        $(this).parent().next("ul").html("");
                        for(var i =0;i<data_h.length;i++){
                            var $li=$('<li><div name="3"><span id="'+data_h[i]+'">'+data_h [i]+'（户）</span></div></li>');
                            $($li).bind("click",function(e){
                                //获取点击这个户的不动产单元号，来加载户的基本信息
                                //alert($(this).find("span").attr("id"));
                                //alert($li.find("div").attr("name"));
                            });
                                $(this).parent().next("ul").append(($li));
                            }
                        var $ul=$(this).parent().next("ul");
                        $ (this).toggleClass ("close");
                        $ul.slideToggle();
                        e.preventDefault();
                        });
                    $(this).parent().next("ul").append($li);
                }
            })
        });
    function initTree(data_zd){
        for(var i =0;i<data_zd.length;i++){
            var $li=$('<li><div name="1" class="title-div"><span class="open"></span><span id="'+data_zd[i]+'">'+data_zd[i]+'(宗地)</span></div><ul class="add_ul"></ul></li>');
            $li.find(".open").next().bind("click",function(e){
                //点击宗地不动产单元号，获取到当前的宗地不动产单元号
                //alert($(this).attr("id"));
                //alert($li.find("div").attr("name"));
            })
            $(".tree-ul").append($li);
        }
    }	

    function CrossdomainGet(zbdcdyh) {
        $.ajax({
         url: "/SJBDC/commonController/queryList.do?queryId=JgXnYwjgQueryMapper.queryMapForZdjbxx_z",   //请求地址
         type: "POST",                       //请求方式
         data: 	{ 
         	queryMap:{
         		"zd_bdcdyh":zbdcdyh
         	}
         },           //请求参数
         dataType: "json",
         success: function (data) {
        	 var arry=[];
             for(var i=0;i<data.length;i++){	
                 data_z.push(data[i].Z_BDCDYH)
             }
             return data_z;
         },
         error: function (status) {
         alert("请求失败");
         }
         });
    }

    </script>
</head>
<body>
<ul class=" tree-ul">
</ul>
</body>
</html>