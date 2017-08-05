  var zTreeObj;//全局树对象
  var YWBSID;//全局业务标示ID
  var zNodes;//节点对象
    var setting = {
                data: {
                    simpleData: {
                     enable: true
                             }
                },
                async: {
                            enable: false,
                            url:getAsyncUrl,
                            autoParam:["id=queryMap[id]"],
                     dataFilter: filter//返回值过滤
               },
            callback:{
                onClick: zTreeOnClick
            }

           };
     
     //页面加载js
    $(document).ready(function(){
    	infoListClick();//档案信息点击事件
    	//获取url传值
    	var url=location.href;
    	var obj=_util.parseUrl(decodeURI(url));
    	if(obj.indexData){
    		$(".close").hide();
    		$(".modal-title").text("");
    	var data=$.parseJSON(obj.indexData);
    	initTree(data);}
    	if(obj.ywjgData){
    	var data=$.parseJSON(obj.ywjgData);
    	initTree(data);}
    	$("#djxxTitle").bind("click",function(){
			 AjaxForData('/SJBDC/commonController/queryList.do', "JgXnYwjgQueryMapper.queryMapForZd_djxx", YWBSID,"tab1")
		})
		$("#qlxxTitle").bind("click",function(){
			var node = zTreeObj.getSelectedNodes()[0];
			if(node.lx=='h'){
				$(this).find("a").attr("href","#tab2");
				AjaxForData('/SJBDC/commonController/queryList.do', "JgXnYwjgQueryMapper.queryMapForFw_qlxx", YWBSID,"tab2")
			}else if(node.lx=="zd"){
				$(this).find("a").attr("href","#tab6");
				AjaxForData('/SJBDC/commonController/queryList.do', "JgXnYwjgQueryMapper.queryMapForZd_qlxx1", YWBSID,"tab2")
				//查询变化情况
				$.ajax({
	    	         url: '/SJBDC/commonController/queryList.do',                            //请求地址
	    	         type: "POST",                       //请求方式
	    	         data: 	{
	    	         	queryId:"JgXnYwjgQueryMapper.queryMapForZd_qlxx2",
	    	             queryMap:{
	    	                 "ywbsid":'E7CCC8F181EB48449284A850A84E4A82'
	    	             }
	    	         },           //请求参数
	    	         dataType: "json",
	    	         success: function (data) {
	    	        	 $("#tableZdqlxx tbody").html("");
	    	        	 for(var i = 0;i<data.length;i++){
	    	        		 $tr=$('<tr><td>'+data[i].BHYY+'</td><td>'+data[i].BHNR+'</td><td>'+data[i].DJSJ+'</td><td>'+data[i].DBR+'</td></tr>')
	    	        		 $("#tableZdqlxx").append($tr);
	    	        	 }
	    	         },
	    	         fail: function (status) {
	    	             alert("请求失败");
	    	         }
	    	     });
	    	} 
			
			$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	    		$("#myTabContent table:hidden tbody td:odd").html("")
	    		})
	    	
		})
    });
    
    //点击事件6
    function zTreeOnClick(event, treeId, treeNode) {
    	//初始化历史上下关系
    		$("#myTabContent table:hidden tbody td:odd").html("")
			$("#myTabContent table:visible tbody td:odd").html("")
    		InitHistory(treeNode.id,"",treeNode.lx)
    		$("#tableZrzJbxx tr td:odd").html("");
    		if(treeNode.lx=='zd'){
        		$("#info-other").show();
        		$("#middleHistory").show();
            	$("#topHistory").show();
            	$("#bottomHistory").show();
        		$(".modal-title").text('宗地代码:'+treeNode.id)
        	}else if(treeNode.lx=='z'){
        		$("#info-other").hide();
        		$("#info-zhuang").show();
        		$("#middleHistory").hide();
            	$("#topHistory").hide();
            	$("#bottomHistory").hide();
            	//清空可见table数据
        		$(".modal-title").text('幢号:'+treeNode.id)
        		return
        	} else if(treeNode.lx=='h'){
        		$("#middleHistory").show();
            	$("#topHistory").show();
            	$("#bottomHistory").show();
        		$("#info-other").show();
        		$(".modal-title").text('户号:'+treeNode.id)
        	}
    	if(treeNode.lx=='z'){
    		//给自然幢信息表注入数据
    		 $.ajax({
    	         url: '/SJBDC/commonController/queryList.do',                            //请求地址
    	         type: "POST",                       //请求方式
    	         data: 	{
    	         	queryId:"JgXnYwjgQueryMapper.queryMapForZrz_jbxx",
    	             queryMap:{
    	                 "id":treeNode.id
    	             }
    	         },           //请求参数
    	         dataType: "json",
    	         success: function (data) {
    	        	 data=handleData(data);
    	        	 for(var i in data[0]){
    	        		 $("#"+i).html(data[0][i])
    	        	 }
    	         },
    	         fail: function (status) {
    	             alert("请求失败");
    	         }
    	     });
    		 $.ajax({
    	         url: '/SJBDC/commonController/queryList.do',                            //请求地址
    	         type: "POST",                       //请求方式
    	         data: 	{
    	         	queryId:"JgXnYwjgQueryMapper.queryMapForLjz_jbxx",
    	             queryMap:{
    	                 "id":treeNode.id
    	             }
    	         },           //请求参数
    	         dataType: "json",
    	         success: function (data) {
    	        	 $("#tableLjzJbxx tbody").html("");
    	        	 $("#info-other").hide();
    	     		 $("#info-zhuang").show();
    	        	 for(var i = 0;i<data.length;i++){
    	        		 var MPH=data[i].MPH//门牌号
    	        		 var YCJZMJ=data[i].YCJZMJ//预测建筑面积
    	        		 var SCJZMJ=data[i].SCJZMJ//实测建筑面积
    	        		 $tr=$('<tr><td>'+MPH+'</td><td>'+YCJZMJ+'</td><td>'+SCJZMJ+'</td></tr>')
    	        		 $("#tableLjzJbxx").append($tr);
    	        	 }
    	         },
    	         fail: function (status) {
    	             alert("请求失败");
    	         }
    	     });
    		
    	}else{
    		$("#info-zhuang").hide();
    	};
    }
    function initTree(data){
    	if(data.lx=='zd'){
    		var nodeData=data.data
    		$.ajax({
   	         url: '/SJBDC/commonController/queryList.do',                            //请求地址
   	         type: "POST",                       //请求方式
   	         data: 	{
   	         	queryId:'JgXnYwjgQueryMapper.queryMapForNew_tree1',
   	             queryMap:{
   	                 "item":data.data.toString()
   	             }
   	         },           //请求参数
   	         dataType: "json",
   	         success: function (data) {
   	        	for (var i = 0;i<data.length;i++) {
   	        	    var o = data[i];
   	        	    for (var key in o) {
   	        	        if (key=='ID') { //大写转换
   	        	            o['id'] = o[key];
   	        	            delete(o[key]);
   	        	        }else if (key=='PID') { //大写转换
   	        	            o['pId'] = o[key];
   	        	            delete(o[key]);
   	        	        }else if (key=='NAME') { //大写转换
   	        	            o['name'] = o[key];
   	        	            delete(o[key]);
   	        	        }else if (key=='LX') { //大写转换
   	        	            o['lx'] = o[key];
   	        	            delete(o[key]);
   	        	        }
   	        	    }
   	        	}
   	        	zNodes=format(data);
   	        	setting.async.enable=false;
   	        	zTreeObj=$.fn.zTree.init($("#treeDemo"), setting, zNodes);
   	        	curMenu = zTreeObj.getNodes()[0];
   	        	var node=zTreeObj.selectNode(curMenu);
   	        	zTreeOnClick(null, zTreeObj.setting.treeId,curMenu);
   	         },
   	         fail: function (status) {
   	             alert("查询失败");
   	         }
   	     });
    	};
    	
    	if(data.lx=='z'){
    		var nodeData=data.data;
    		var zNodes=[];
    		for(var i = 0;i<nodeData.length;i++){
    			var node_z={'id':nodeData[i],'pId':nodeData[i].substring(0,19),'name':nodeData[i].substring(19,24)+"0000(幢)",lx:'z',isParent:true}//幢节点
    			var node_zd={'id':nodeData[i].substring(0,19),'pId':0,'name':nodeData[i].substring(0,19)+"(宗)",lx:'zd',open:true}//宗节点
    			zNodes.push(node_z);
    			zNodes.push(node_zd);
    		}
    		setting.async.enable=true;
	        zTreeObj=$.fn.zTree.init($("#treeDemo"), setting, zNodes);
	        curMenu = zTreeObj.getNodes()[0].children[0];
	        var node=zTreeObj.selectNode(curMenu);
	        zTreeOnClick(null, zTreeObj.setting.treeId,curMenu);
    	};
    	if(data.lx=='h'){
    		var nodeData=data.data;
    		var zNodes=[];
    		for(var i = 0;i<nodeData.length;i++){
    			var node={'id':nodeData[i],'pId':nodeData[i].substring(0,24),'name':nodeData[i].substring(19)+"(户)",lx:'h',}//户节点
    			var node_z={'id':nodeData[i].substring(0,24),'pId':nodeData[i].substring(0,19),'name':nodeData[i].substring(19,24)+"0000(幢)",lx:'z',open:true}//幢节点
    			var node_zd={'id':nodeData[i].substring(0,19),'pId':0,'name':nodeData[i].substring(0,19)+"(宗)",lx:'zd',open:true}//宗地节点
    			zNodes.push(node);
    			zNodes.push(node_z);
    			zNodes.push(node_zd);
    		}
    		setting.async.enable=false;
	        zTreeObj=$.fn.zTree.init($("#treeDemo"), setting, zNodes);
	        curMenu = zTreeObj.getNodes()[0].children[0].children[0];
	        var node=zTreeObj.selectNode(curMenu);
	        zTreeOnClick(null, zTreeObj.setting.treeId,curMenu);
    	}
        
    }

    
    
    //过滤树异步加载返回的数据
    function filter(treeId, parentNode, responseData) {
    	var zNodes=[];
    	var data=responseData;
		for(var i = 0;i<data.length;i++){
			var node={'id':data[i].BDCDYH,'pId':parentNode.id,'name':data[i].BDCDYH,lx:'h'}//户节点
			zNodes.push(node);

		}
		return format(zNodes);
            }
    
    //异步加载筛选
    function getAsyncUrl(treeId, treeNode) {
    	if(treeNode.lx=='zd'){//宗
            return ""
        }else if(treeNode.lx=='z'){//幢
        	return "/SJBDC/commonController/queryList.do?queryId=JgXnYwjgQueryMapper.queryMapForZdjbxx_h"
        }else if(treeNode.lx=='h'){//户
            return  ""
        }
    };
    
    //展现宗地和户表格的具体数据
    /*
     * @data YWBSID
     * @type data类型 h 户 zd 宗地
     * */
    function showData(data,type){
    	$("#info-other").show();
    	$("#info-zhuang").hide();
    	AjaxForData('/SJBDC/commonController/queryList.do', "JgXnYwjgQueryMapper.queryMapForZd_djxx", data,"tab1")
		
    }
    
    function AjaxForData(url,queryId,ywbsid,tab){
    	$.ajax({
	         url: url,                            //请求地址
	         type: "POST",                       //请求方式
	         data: 	{
	         	queryId:queryId,
	             queryMap:{
	                 "YWBSID":ywbsid
	             }
	         },           //请求参数
	         dataType: "json",
	         success: function (data) {
	        		data=handleData(data);
//	        	 $("#myTabContent table:visible tbody td:odd").html("")//清空可见table数据
	        	for(var i in data[0]){
	        		var index="#"+tab+" td[name='"+i+"']";
	        		$(index).html(data[0][i]);
	        	}
	         },
	         fail: function (status) {
	             alert("请求失败");
	         }
	     });
    }
    
    //历史关系上下级点击变化事件


    //初始化历史上下级关系
    function InitHistory(id,ywbsid,lx){
    	//初始化样式	
    	$(".slideDIV content").html("")
    	$(".slideDIV").hide();
    	$(".line-child-box").removeClass("cur");
    	$("#middleHistory").css("background","#9a9595");
    	$("#topHistory").css("background","#9a9595");
    	$("#bottomHistory").css("background","#9a9595");
    	$("#myTabContent table:hidden tbody td:odd").html("")
    	$("#myTabContent table:visible tbody td:odd").html("")//清空可见table数据
    	$('#myTab a[href="#tab1"]').tab('show');
    	 var url="/SJBDC/commonController/queryList.do";
         $.ajax({
             url: url,                            //请求地址
             type: "POST",                       //请求方式
             data: 	{
             	queryId:"JgXnYwjgQueryMapper.queryMapForZdjbxx_sxjgx",
                 queryMap:{
                     "id":id?id:"",
                     "ywbsid":ywbsid?ywbsid:""
                 }
             },           //请求参数
             dataType: "json",
             success: function (data) {
            	 $("#middleHistory").find(".content").html("");;
            	 $("#topHistory").find(".content").html("");
            	 $("#bottomHistory").find(".content").html("");		
             	for(var i=0;i<data.length;i++){
             		switch (parseInt(data[i].DJLX)) {
    				case 100: data[i].DJLX="首次登记";
    				    break;
    				case 200: data[i].DJLX="转移登记";
    				    break;
    				case 300: data[i].DJLX="变更登记";
    				    break;
    				case 400: data[i].DJLX="注销登记";
    					break;
    				 case 500: data[i].DJLX="更正登记";
    					break;
    				 case 600: data[i].DJLX="异议登记";
    					break;
    				 case 700: data[i].DJLX="预告登记";
    				 	break;
    				 case 800: data[i].DJLX="查封登记";
    				 	break;
    				 case 900: data[i].DJLX="其他登记";
    				 	break;
             		  default: data[i].DJLX="";
             		}
    				var $div=$('<div class="content-div" name='+data[i].YWBSID+'><div class="order">1</div><div class="text-content"><div >不动产单元号:<span name="bdcdyh">'+data[i].BDCDYH+'</span></div><div >业务号:<span name="ywh">'+data[i].YWH+'</span></div><div >业务类型:<span>'+data[i].DJLX+'</span></div></div></div>');
    				
    				//不动产单元号查询具体详细信息
    				$div.bind('click',function(e){
    					e.stopPropagation();
    					YWBSID=$(this).attr("name");
    					InitHistory("",YWBSID,lx);
    					
    				});
    				if(data[i].FLAG==""){
    					YWBSID="";
    				}
    				if(data[i].FLAG==0&&data[i].FLAG!==""){
    					$div.addClass("chosed");
    					$("#middleHistory").addClass("cur");
    					$("#middleHistory").find(".content").append($div);
    					YWBSID=data[i].YWBSID;//业务标示ID赋值给全局变量
    					showData(data[i].YWBSID,lx);//默认显示
    				}else if(data[i].FLAG==1){
    					$("#topHistory").find(".content").append($div);
    				}else if(data[i].FLAG==2){
    					$("#bottomHistory").find(".content").append($div);
    				}
             	}
             	$(".slideDIV .content").each(function(){
             		$(this).parent().parent().unbind("click");
             		if($(this).children().length>0){	
             			$(this).parent().parent().bind("click",function(){
             		    		$(this).addClass("cur");
             		    		$(this).siblings().removeClass("cur");
             		    		$(this).find(".slideDIV").slideToggle();
             		    		$(this).siblings().find(".slideDIV").slideUp();
             			})
             		}
             	})
             },
             fail: function (status) {
                 alert("请求失败");
             }
         });
    }
    
//关闭modal的方法
function closeModal(){
	parent.modalClose()
}

function handleData(data){
	if(data[0].DJLX){
		data[0].DJLX=dicHindle.getName(data[0].DJLX, 'djlx');
		};
	if(data[0].GHYT){
		data[0].GHYT=dicHindle.getName(data[0].GHYT, 'fwyt');
		};
	if(data[0].FWXZ){
		data[0].FWXZ=dicHindle.getName(data[0].FWXZ, 'fwxz');
		};
	if(data[0].QLRLX){
		data[0].QLRLX=dicHindle.getName(data[0].QLRLX, 'qlrlx');
		};
	if(data[0].ZJZL){
		data[0].ZJZL=dicHindle.getName(data[0].ZJZL, 'zjzl');
		};
	if(data[0].QLSDFS){
		data[0].QLSDFS=dicHindle.getName(data[0].QLSDFS, 'qlsd');
		};
	if(data[0].DJDL){
		data[0].DJDL=dicHindle.getName(data[0].DJDL, 'djlx');
		};
	if(data[0].MJDW){
		data[0].MJDW=dicHindle.getName(data[0].MJDW, 'mjdw');
		};
	if(data[0].QLLX){
		data[0].QLLX=dicHindle.getName(data[0].QLLX, 'qllx');
		}
	if(data[0].QLXZ){
		data[0].QLXZ=dicHindle.getName(data[0].QLXZ, 'qlxz');
		}
	if(data[0].FWJG){
		data[0].FWJG=dicHindle.getName(data[0].FWJG, 'fwjg');
		}
	if(data[0].SQFBCZ==0||data[0].SQFBCZ){
		data[0].SQFBCZ=dicHindle.getName(data[0].SQFBCZ, 'judge');
		}
	if(data[0].SQZSBS==0||data[0].SQZSBS){
		data[0].SQZSBS=dicHindle.getName(data[0].SQZSBS, 'zsbs');
		}
	if(data[0].QXDM){
		data[0].QXDM=citySetting.getCity(data[0].QXDM).name;
	}
	return data;
}

function infoListClick(){
	$(".infoList li").on("click",function(){
		window.open("http://localhost:8080/SJBDC/view/documentFile/zsjgPDF/example.pdf")
	})
}

//树节点名称格式化
function format(data){
	for(var i=0;i<data.length;i++){
		if(data[i].lx=='h'){
			data[i].name=data[i].name.substring().substring(19)+"(户)";
		}
		if(data[i].lx=='z'){
			data[i].name=data[i].name.substring().substring(19,24)+"0000(幢)";
		}
		if(data[i].lx=='zd'){
			data[i].name=data[i].name.substring().substring(0,19)+"(宗)";
		}
	}
	return data;
}

