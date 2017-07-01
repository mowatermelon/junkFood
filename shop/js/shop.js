window.onload = function(){
	var oLi = document.getElementsByTagName("li");
	for(var i=0;i<oLi.length;i++){
		oLi[i].timer = null;		
			startMove(oLi[i],'paddingLeft',40);
			startMove(oLi[i],'opacity',30);
			
		oLi[i].onmouseout = function(){
			startMove(this,'paddingLeft',0);
			startMove(this,'opacity',100);

		}					
	}
	var oP = document.getElementsByTagName("p");
	for(var i=0;i<oP.length;i++){
		oP[i].timer = null;
		oP[i].onmouseover = function(){
			startMove(this,'margin-top',0);
			//startMove(this,'opacity',100);
		}
		oP[i].onmouseout = function(){
			startMove(this,'margin-top',-100);
			//startMove(this,'opacity',30);

		}					
	}
	
}

function startMove(obj,attr,lastVal,fn){
	clearInterval(obj.timer) ;
	obj.timer = setInterval(function(){
		var iru = 0;
		if(attr == 'opacity'){
			iru = parseFloat(getStyle(obj,attr))*100;
		}
		else{
			iru = parseInt(getStyle(obj,attr));
		}
		var speed = (lastVal-iru)/2;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);		
		if(iru == lastVal){	
			clearInterval(timer) ;
		}
		else {
			if(attr == 'opacity'){
				obj.style.opacity = (iru+speed)/100 ;
				obj.style.filter = 'alpha(opacity:'+(iru+speed)+')';
				}
			else{
				if(attr == 'color'){
					obj.style[attr] = '#17D'+(iru+speed);						
					}
				else{
					obj.style[attr] = iru+speed+'px' ;						
				}
				}
			}
	},30)
		
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle;
	}
	else {
		return getComputedStyle(obj,false)[attr];
		}
}
