function setCookie(name,value,expires,path,domain,secure){
	var cookieText =encodeURIComponent(name)+'='+encodeURIComponent(value);
	if(expires instanceof Date){
		var cookieText += ";expires"+expire;
	}
	
	if(path){
		var cookieText += ";path"+path;
	}
	
	if(domain){
		var cookieText += ";domain"+domain;
	}
	
	if(secure){
		var cookieText += ";secure";
	}
	document.cookie = cookieText;
}


function getCookie(name){
	var cookieName = encodeURIComponent(name)+ '=';
	var cookieStart = document.cookie.indexOf(cookieName);
	var cookValue = null;
	if(cookieStart > -1){
		var cookieEnd = document.cookie.indexOf(';',cookieStart);
		if(cookieEnd ==-1){
			cookieEnd = document.cookie.length;
		}
		cookieValue = decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
	}
	return cookieValue;
}

function upsetCookie(name){
	document.cookie = name +"= ; expires" + new Date(0);
}