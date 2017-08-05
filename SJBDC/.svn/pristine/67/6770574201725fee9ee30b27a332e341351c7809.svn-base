var Util = function() {

	return {
		getDatabaseType : function(iType) {
			switch (iType) {
			case 1:
				return "MySQL";
			case 2:
				return "ORACLE";
			case 3:
				return "达梦";
			case 21:
				return "MongoDB";

			}
		},
		getDataTypeName : function(type) {
			switch (type) {
			case 101:
				return "物理表";
			case 102:
				return "视图";
			case 201:
				return "矢量瓦片";
			case 202:
				return "影像瓦片";
			case 203:
				return "地形瓦片";
			case 204:
				return "模型瓦片";
			case 205:
				return "兴趣点瓦片";
			case 206:
				return "矢量";
			case 207:
				return "矢量点";
			case 208:
				return "矢量线";
			case 209:
				return "矢量面";
			case 210:
				return "矢量标注";
			case 211:
				return "栅格";
			case 212:
				return "影像栅格";
			case 213:
				return "地形栅格";
			case 214:
				return "模型";
			case 215:
				return "网络";
			case 216:
				return "导航数据";
			case 217:
				return "公交网络";
			case 218:
				return "多时相矢量瓦片";
			case 219:
				return "多时相影像瓦片";
			case 220:
				return "地势图瓦片";
			case 221:
				return "普通数据";
			case 222:
				return "地统计数据";
			case 223:
				return "多时相三维地形瓦片";
			case 224:
				return "多时相三维模型瓦片";
			case 225:
				return "多时相地势瓦片";
			case 226:
				return "地名地址数据";
			case 227:
				return "三维地名瓦片";
			case 228:
				return "普通数据";
			case 229:
				return "路径数据";
			case 230:
				return "KPI接入数据";
			case 231:
				return "KPI数据";
			case 232:
				return "三维管线数据";
			case 301:
				return "KPI";
			case 401:
				return "多维数据集";
			case 501:
				return "文件";
			case 601:
				return "其他";
			default:
				return "未知";
			}
		},
		getResIcoUrl:function(sType,rType){
			//sType 数据库类型，rType 资源类型
			var rTypeTemp=100;
			if(rType>100 && rType <200) rTypeTemp=100;
			else if(rType>200 && rType<300) rTypeTemp=200;
			else if(rType>300 && rType<400) rTypeTemp=300;
			else if(rType>400 && rType<500) rTypeTemp=400;
			else if(rType>500 && rType<600) rTypeTemp=500;
			else if(rType>600 && rType<700) rTypeTemp=600;
			
			//多维数据集
			if(rTypeTemp==400) 
				return "view/dwms/theme/default/img/ico/cube.jpg";
			//其他类型
			else if(rTypeTemp==600) 
				return "view/dwms/theme/default/img/ico/web.jpg";
			else 
				return "view/dwms/theme/default/img/ico/"+rTypeTemp+"_"+sType+".jpg";
		},
		getResNameByGeneralType:function(nType){
	    	switch(nType.toString()){
  		    		case "100":
  		    			return "数据表";
  		    		case "200":
  		    			return "GeoGlobe数据";
  		    		case "300":
  		    			return "KPI";
  		    		case "400":
  		    			return "多维数据集";
  		    		case "500":
  		    			return "文件";
  		    		case "600":
  		    			return "其他";
  		    }
		},
		getGeneralTypeByResName:function(name){
	    	switch(name){
  		    		case "数据表":
  		    			return "100";
  		    		case "GeoGlobe数据":
  		    			return "200";
  		    		case "KPI":
  		    			return "300";
  		    		case "多维数据集":
  		    			return "400";
  		    		case "文件":
  		    			return "500";
  		    		case "其他":
  		    			return "600";
  		    }
		},		
		//获取url中的参数
        getUrlParam:function(key,url) {
            var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = decodeURI(url).substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        },
        //确认弹窗
        confirm:function(title,content,okCallBack,cancelCallBack){
        	var dialog= $("#confirmModal");
			if(dialog==null || dialog.length==0)
				return;
			if(title!=null)
				$("h4[name='title']",dialog).text(title);
			$("div[name='content']",dialog).text(content);
			if(okCallBack!=null){
				var btnOK=$(".btn-primary",dialog);
				btnOK.off();
				btnOK.click(function(){
					okCallBack();
					dialog.modal('hide');
				})
			}
			if(cancelCallBack!=null){
				var btnCancel=$(".btn-default",dialog);
				btnCancel.off();
				btnCancel.click(function(){
					cancelCallBack();
				})
			}
			dialog.modal('toggle');	
        },
		//消息提示 type:success,info,error
		message:function(msg,type){
			Messenger.options = {
    			extraClasses: 'messenger-fixed messenger-on-top messenger-on-right',
    			theme: 'block'
			};
			Messenger().post({
				hideAfter: 5,
				message: msg,
				type: type,
				showCloseButton: true
			});
		},
		//根据目录的筛选条件，还原成key/value的键值对
		getTagKeyValues:function(tagFilter){
			//获取标签值键对
			var keyValues=[];
			var nameValues=tagFilter.match(/\(TagName(=|<>)\'[a-zA-Z0-9_\u4e00-\u9fa5]+\'( AND TagValue(=|<>)\'[a-zA-Z0-9_\-\u4e00-\u9fa5]+\')?\)/g);
			$(nameValues).each(function(i,item){
				var tag={tValue:"",tOper:"",vValue:"",vOper:""};
				var temp=item.match(/\(TagName(=|<>)\'([a-zA-Z0-9_\u4e00-\u9fa5]+)\'( AND TagValue(=|<>)\'([a-zA-Z0-9_\-\u4e00-\u9fa5]+)\')?\)/);
				if(temp.length>=3){
					tag.tValue=temp[2];
					tag.tOper=temp[1];
					if(temp.length==6){
						tag.vValue=temp[5];
						tag.vOper=temp[4];
					}
				}
				keyValues.push(tag);
			})
			return keyValues;
		}
		
		
	}
	
}()