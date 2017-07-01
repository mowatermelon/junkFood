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
		var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
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

	function chooseNumber(){
		var n = new Array(76);
			if(document.getElementById){

				for(var m=0;m<24;m++){
					var e = Math.floor(Math.random()*24)+1;
					n[m]=e;
					
					if(m==0){
						document.getElementById("td"+n[m]).style.backgroundColor="#ccc";
						}
					else{
						document.getElementById("td"+n[m]).style.backgroundColor="#ccc";
						document.getElementById("td"+n[m-1]).style.backgroundColor="#fff";


						var f1 =Number(document.getElementById("td"+n[m]).innerText);
						var f2 =Number(document.getElementById("td"+n[m-1]).innerText);
						var f3 =f1+f2;

						if(f3<75){
							var pp1=String("The two number is "+f1+" , "+f2+"   , The sum of two number is  "+f3+"  , you are the winner!");
							document.getElementById("talk").innerHTML=pp1;
							}	
					
						else{
							var pp2=String("The two number is "+f1+" , "+f2+"   , The sum of two number is  "+f3+"  , you are the loser");
							document.getElementById("talk").innerHTML=pp2;
							}
						
						}

					}

					
			}
		}


		function refre(){
			window.location = "countnumber01.html";
		}



