window.onload=init;
var usedNums = new Array(76);

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
		var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
		var colBasis = colPlace[thisNumber]*15;

		
		do{
			var newNum= colBasis+getNewNum()+1;

		}
		while(usedNums[newNum]);

		usedNums[newNum]=true;	
		document.getElementById(TD).innerHTML=newNum;

		
	}

	function getNewNum(){
		return Math.floor(Math.random()*15);
	}
	
	var Selected = [];
	var count = 0;
	function chooseNumber(){
		for(var i=0 ;i<Selected.length; i++){
			if(document.getElementById("td"+Selected[i]) != null){
				if(document.getElementById("td"+Selected[i]).style.backgroundColor == "red"){
					document.getElementById("td"+Selected[i]).style.backgroundColor = "#fff";
					Selected[i] = -1;
					count--;
				}else{
					document.getElementById("td"+Selected[i]).innerText	= "√";
					document.getElementById("td"+Selected[i]).style.backgroundColor="#eee";
				}
			}
			
		}
		var NUM1 = generate();
		var NUM2 = generate();
		document.getElementById("td"+NUM1).style.backgroundColor="#ccc";
		document.getElementById("td"+NUM2).style.backgroundColor="#ccc";
		var f1 =Number(document.getElementById("td"+NUM1).innerText);
		var f2 =Number(document.getElementById("td"+NUM2).innerText);
		var f3 =f1+f2;
		if(f3<75){
			var pp1=String("The two number is "+f1+" , "+f2+"   , The sum of two number is  "+f3+"  , you are the winner!");
			document.getElementById("talk").innerHTML=pp1;
		}else{
			document.getElementById("td"+Selected[count-1]).style.backgroundColor= "red";
			document.getElementById("td"+Selected[count-2]).style.backgroundColor= "red";
			var pp2=String("The two number is "+f1+" , "+f2+"   , The sum of two number is  "+f3+"  , you are the loser");
			document.getElementById("talk").innerHTML=pp2;
		}
		
		}
		
			
		function Verification( randomN){
			var Result = true;
			for(var i=0 ;i<Selected.length; i++){
				if(randomN == Selected[i]){
					Result =  false;
					return Result;	
				}	
			}
			return Result;
		}
		
		function generate(){
			var e = Math.floor(Math.random()*24);
			for(var i=1; i>0; i++){
				var e = Math.floor(Math.random()*24);
				if(Verification(e)){
					Selected[count] = e;
					count++;
					break;
				}
			}
			return e;
		}

		function refre(){
			window.location = "countnumber.html";
		}