window.onload=init;
var usedNums = new Array(24);

	function init(){
		if(document.getElementById){
			for(var i=0;i<24;i++){
				setSquare(i);
				}
			}
		else{
			alert(" SORRY,YOUR BROWER DOESN'T SUPPORT THIS SCRIPT");
		}
	}


	function setSquare(thisNumber){
		var TD="td"+thisNumber;
		var newNum= getNewNum()+1;
		usedNums[newNum]=true;	
		document.getElementById(TD).style.background = "url(images/"+newNum+".jpg)";
		document.getElementById(TD).style.backgroundSize = "100% 100%";
		document.getElementById(TD).onclick = toggleColor;
		
	}

	function getNewNum(){
		return Math.floor(Math.random()*8);
	}

	function toggleColor(evt){
		if(evt){
			var thisNumber = evt.target;
		}
		else{
			var thisNumber = window.event.srcElement;
		}

		if(thisNumber.style.backgroundImage!=""){
			thisNumber.style.backgroundColor="#000";
		}
		else{
			thisNumber.style.backgroundImage = "none";
		}

	}

		function refre(){
			window.location = "Happyandhappy.html";
		}