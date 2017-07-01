$(function () {
    console.log("welcome");
/*                         page01                                                  */
    $("#flex_list li:nth-child(1)").hover(
    function () {
        console.log("$flex_list:gt(1)hover");
        $(this).css("background-color", "#0366fb")
               .css("background-image", "url(img/icon/01h.png)");
        		$("#flex_list li:nth-child(1) a").css("color", "#fff");  
    }, function () {
        console.log("$flex_list:nth-child(1)leave");
        $(this).css("background-color", "transparent")
               .css("background-image", "url(img/icon/01.png)");
               $("#flex_list li:nth-child(1) a").css("color", "#000");  
    });



    $("#flex_list li:nth-child(2)").hover(
    function () {
        console.log("$flex_list:nth-child(2)hover");
        $(this).css("background-color", "#0366fb")
               .css("background-image", "url(img/icon/02h.png)");
               $("#flex_list li:nth-child(2) a").css("color", "#fff");  
    }, function () {
        console.log("$flex_list:nth-child(2)leave");
        $(this).css("background-color", "transparent")
               .css("background-image", "url(img/icon/02.png)");
               $("#flex_list li:nth-child(2) a").css("color", "#000");  
    });


    $("#flex_list li:nth-child(3)").hover(
    function () {
        console.log("$flex_list:gt(3)hover");
        $(this).css("background-image", "url(img/icon/03h.png)");
        $("#flex_list li:nth-child(3) a").css("color", "#0366fb");               
    }, function () {
        console.log("$flex_list:nth-child(3)leave");
        $(this).css("background-image", "url(img/icon/03.png)");
        $("#flex_list li:nth-child(3) a").css("color", "#000");  
    });
   
    
    /*                         page03                                                  */


    var $playScrollTop = $(".play").scrollTop();
    	console.log("$playScrollTop");


    $(".part0202 li button").css("width","100px").css("margin","300px 0 0 10px");
    $(".part0202").css("margin-left","20%");
    $(".part0202 .show").hover(function () {
        $(this).css("background-color", "transparent")
        .css("color", "#0366fb");
    },function(){
        $(this).css("background-color", "#0366fb")
        .css("color", "#fff");    	
    });

    $("#banner li:not(:first-child)").hide();
    
    $(".part0202 #showB").click(function () {
    	var bannerL=$("#banner>li");
        	for(var i=1;i<bannerL.length+1;i++){
                	bannerL.animate({opacity:"0.5",width:"80%",height:"300px"},1000)
		                   .animate({marginLeft:"-300px"},100)
		         		   .fadeOut(500)
		         		   .animate({opacity:"1",width:"0%",height:"0px"},1000)
		         		   .eq(i)
		         		   .fadeIn(1000)
		         		   .animate({marginLeft:"50px"},100);	        		   
        	}
      	


    }); 
    
    $(".part0202 #closeB").click(function (){
    	$("#banner li:not(:last-child)").show();
    	var bannerL=$("#banner>li");
        	for(var i=1;i<bannerL.length;i++){
                	bannerL.animate({opacity:"1",width:"0%",height:"0px"},1000)
		                   .animate({marginLeft:"800px"},100)
		         		   .fadeOut(500)
		         		   .animate({opacity:"0.5",width:"80%",height:"300px"},1000)
		         		   .eq(i)
		         		   .fadeIn(1000)
		         		   .animate({marginLeft:"50px"},100);	        		   
        	}    	
    	
    });       
    
    $("#chooseNumber").click(function(){
    	chooseNumber();
    });

    $("#refre").click(function(){
    	refre();
    });    
    
    $(".loginList li").click(function () {
        $(this).css("border-bottom", "5px solid #0366fb")
               .css("color", "#0366fb");
        console.log("xianshi yi ");
        $("#loginContent01").show();
        $("#loginContent02").hide();
    })
    $(".loginList li").dblclick(function () {
        $(this).css("border-bottom", "0px solid #0366fb")
               .css("color", "#000");
        console.log("xianshi er ");
        $("#loginContent02").show();
        $("#loginContent01").hide();
    })


});

/*                         page02                                                  */
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
		showB();
	}
	/*                         page02 01                   */
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
			window.location = "demo.html";
		}
		
/*                         page02 02                   */
		function showB(){
			var bannerL = document.getElementById("banner").getElementsByTagName("li");
			/*for(var i=0;i<bannerL.length;i++){
				bannerL[i].timer = null;
				obj.timer = setInterval(function(){
					startMove(bannerL[i],'margin-left',50);
					console.log("happy01");							
					},30);
			
				}
			
			bannerL[i].onmouseout = function(){
					
					startMove(this,'margin-left',-300);
					console.log("happy02");
				};*/							
		}
		
		function startMove(obj,attr,lastVal){
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
					clearInterval(obj.timer) ;
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
		



