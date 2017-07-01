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
		document.getElementById(TD).style.background = "url(images/"+newNum+".jpg)";
		document.getElementById(TD).style.backgroundSize = "100% 100%";
		
	}

	function getNewNum(){
		return Math.floor(Math.random()*8);
	}



	function chooseNumber(){
		var n1 = new Array(2);
		var n2 = new Array(24);
			if(document.getElementById){

				for(var m=0;m<4;m++){
				
					do{
						var e1 = Math.floor(Math.random()*10)+1;
						var e2 = Math.floor(Math.random()*2)+1;
						}
					while(usedNums[m]);

					usedNums[m]=true;	


						for(var n=0;n<24;n++){
							n1[m]=e1;
							n2[n]=e2;

						if(n==0){
							document.getElementById("td"+n2[n]).style.borderRadius="100%";	
							}
						else{
							document.getElementById("td"+n2[n]).style.borderRadius="100%";
							document.getElementById("td"+n2[n-1]).style.borderRadius="100%";	
				
							if(n1[m]==n1[m-1]){
								document.getElementById("td"+n2[n]).style.background = "none";
								document.getElementById("td"+n2[n]).style.backgroundSize = "100% 100%";
								document.getElementById("td"+n1[n-1]).style.background = "none";
								document.getElementById("td"+n1[n-1]).style.backgroundSize = "100% 100%";
								var pp1=String("The two number is "+n1[m]+" , "+n1[m-1]+" ,Picture choose right, eliminate success!");
								document.getElementById("talk").innerHTML=pp1;
								}


							else{
								document.getElementById("td"+n1[m]).innerHTML= "success";
								document.getElementById("td"+n1[m]).style.backgroundSize = "100% 100%";
								document.getElementById("td"+n1[m-1]).innerHTML = "error";
								document.getElementById("td"+n1[m-1]).style.backgroundSize = "100% 100%";
								var pp2=String("The two number is "+n2[n]+" , "+n2[n-1]+" ,Image selection error, eliminate failure");
								document.getElementById("talk").innerHTML=pp2;							

								}
							}									
		


						}


					
				}
					
			}
		}


		function refre(){
			window.location = "Happyandhappy.html";
		}



