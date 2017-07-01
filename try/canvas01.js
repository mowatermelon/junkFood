window.onload = function(){	
	var canvs = "canvas";

	canv(canvs);

	demo();
		console.profile();	
	/*prodemo();
	drawFlower(canvs);
	drawradom(canvs);
	drawRandomF(canvs);*/
	bump(canvs);
	console.profileEnd();	
	}
	
function canv(id){
    var canvas = document.getElementById(id);
	console.count('这个是第一个time');
    if (canvas == null){
		console.error("YOU ARE SO BAD BUG!");		
		return false;

		}else{
			console.info("YOU ARE SO GOOD GIRL!");
			var context = canvas.getContext("2d");
			
			//实践表明在不设施fillStyle下的默认fillStyle=black
			
			console.group("这个是第一个动画");
			console.time("这个是第一个time");
			console.trace();
			console.info("这个是默认状态下的画的矩形");
			context.fillRect(0, 0, 100, 100);
			
			 /*实践表明在不设施strokeStyle下的默认strokeStyle=black
			 绘制矩形  context.fillRect(x,y,width,height)  strokeRect(x,y,width,height)*/
			 console.timeEnd("这个是第一个time");
			 console.groupEnd();
			 
			console.group("这个是第二个动画");
			console.time("这个是第二个time");			
			console.trace();
			console.info("这个是默认状态下的矩形描边");			 
			context.strokeRect(120, 0, 100, 100);
			console.timeEnd("这个是第二个time");		
			console.groupEnd();
			
			console.group("这个是第三个动画");
			console.time("这个是第三个time");			
			console.trace();
			console.info("这个是设颜色情况下的矩形描边");				
			context.strokeStyle="rgba(111,222,225,0.5)";
			
			context.strokeRect(240,0,100,100);
			console.timeEnd("这个是第三个time");			
			console.groupEnd();
			
			console.group("这个是第四个动画");
			console.time("这个是第四个time");			
			console.trace();
			console.info("这个是清除图像的矩形绘制");			
			context.clearRect(25, 25, 300, 50);/*清除矩形区域 context.clearRect(x,y,width,height)*/
			console.timeEnd("这个是第四个time");			
			console.groupEnd();
			
			console.group("这个是第五个动画");
			console.time("这个是第五个time");			
			console.trace();
			console.info("这个是圆形的绘制");
			/* 圆弧context.arc(x, y, radius, starAngle,endAngle, anticlockwise)*/
			console.time();
			context.beginPath();
			context.arc(100, 200, 50,  Math.PI*0.5,Math.PI * 2,true);
             //不关闭路径路径会一直保留下去，当然也可以利用这个特点做出意想不到的效果
             context.closePath();
			 console.timeEnd();
             context.fillStyle = 'rgba(0,222,0,0.8)';
            context.fill();	
		    console.timeEnd("这个是第五个time");			
			console.groupEnd();	
			
			console.group("这个是第六个动画");
			console.time("这个是第六个time");			
			console.trace();
			context.beginPath();
		
/*			console.info("这个是尝试线条绘制");	
			context.strokeStyle="rgba(255,0,0,1)";		
			context.moveTo(150,150);// 绘制线段 context.moveTo(x,y)  context.lineTo(x,y)
			context.lineTo(200,200);
			context.lineTo(250,200);
			context.lineTo(200,250);*/
			
            context.strokeStyle = "rgb(250,0,0)";
             context.fillStyle = "rgb(250,111,0)"
             context.lineTo(100, 100);
             //之后的lineTo会以上次lineTo的节点为开始
            context.lineTo(200, 200);
             context.lineTo(200, 100);
             context.moveTo(200, 50);
             context.lineTo(100,50);			
			context.stroke();
			context.fill();

			console.timeEnd("这个是第六个time");
			 context.closePath();			
			console.groupEnd();								
			}
        

	}

function draw21(id) {
             var canvas = document.getElementById(id)
             if (canvas == null)
                 return false;
             var context = canvas.getContext("2d");
             //实践表明在不设施fillStyle下的默认fillStyle=black
             context.fillRect(0, 0, 100, 100);
             //实践表明在不设施strokeStyle下的默认strokeStyle=black
             context.strokeRect(120, 0, 100, 100);
 
             //设置纯色
             context.fillStyle = "red";
             context.strokeStyle = "blue";
             context.fillRect(0, 120, 100, 100);
             context.strokeRect(120, 120, 100, 100);
 
             //设置透明度实践证明透明度值>0,<1值越低，越透明，值>=1时为纯色，值<=0时为完全透明
             context.fillStyle = "rgba(255,0,0,0.2)";
             context.strokeStyle = "rgba(255,0,0,0.2)";
            context.fillRect(240,0 , 100, 100);
             context.strokeRect(240, 120, 100, 100);
			 

         }
		 
function demo() {
	console.time("这个是为了输出数组做准备");
	var a ={
		mo01:"happy01",
		mo02:"happy02",
		mo03:"happy03",
		mo04:"happy04",
		mo05:"happy05",
		mo06:"happy06",
		myfunction:function(){
			console.error("not happy");
			}
		};
		
	console.dir(a);
	//console.keys(a);
	
	var b =[{
		name:"happy01",
		age:20,
		sex:"male",
		"attribute":{
			"a":"1111",
			"b":"2222",
			"c":"3333"
			}
		},{
		name:"happy02",
		age:21,
		sex:"male",
		"attribute":{
			"a":"11",
			"b":"22",
			"c":"33"
			}
		}];	
	
	
	
	console.table(b);
	console.timeEnd("这个是为了输出数组做准备");
	}
	
	function prodemo(){
		console.count('调用prodemo的次数');
		pro01();
		pro02();
		pro03();
		pro04();
		}
		
	function pro01(){
		console.log("pro01();");
		}	
	function pro02(){
		console.log("pro02();");
		}	
	function pro03(){
		console.log("pro03();");
		}	
	function pro04(){
		console.log("pro04();");
		}	
		
	function drawFlower(id){
             var canvas = document.getElementById(id);
             if (canvas == null)
                 return false;
             var context = canvas.getContext("2d");
             context.fillStyle = "#EEEEFF";
             context.fillRect(200, 200, 400, 300);
             var n = 0;
             var dx = 350;
             var dy = 350;
            var s = 100;
             context.beginPath();
             context.fillStyle = 'rgb(100,255,100)';
             context.strokeStyle = 'rgb(0,0,100)';
             var x = Math.sin(0);
             var y = Math.cos(0);
             var dig = Math.PI / 15 * 11;
             for (var i = 0; i < 30; i++) {
                 var x = Math.sin(i * dig);
                 var y = Math.cos(i * dig);
                 context.lineTo(dx + x * s, dy + y * s);
             }
             context.closePath();
             context.fill();
            context.stroke();
 

		}
		
		
		function drawradom(id){
			/*
			 绘制贝塞尔曲线（贝济埃、bezier） context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y) 
绘制二次样条曲线 context.quadraticCurveTo(qcpx,qcpy,qx,qy)

    cp1x:第一个控制点x坐标 cp1y:第一个控制点y坐标 cp2x:第二个控制点x坐标 cp2y:第二个控制点y坐标
    x:终点x坐标   y:终点y坐标

    qcpx:二次样条曲线控制点x坐标  qcpy:二次样条曲线控制点y坐标 qx:二次样条曲线终点x坐标   qy:二次样条曲线终点y坐标*/
	
             var canvas = document.getElementById(id);
              if (canvas == null) {
                  return false;
             }
              var context = canvas.getContext("2d");
  
              context.moveTo(50, 50);
              context.bezierCurveTo(50, 50,150, 50, 150, 150);
             context.stroke();
             context.quadraticCurveTo(150, 250, 250, 250);
             context.stroke();
			}	
			
			
	function drawRandomF(id){
              var canvas = document.getElementById(id);
              if (canvas == null) {
                  return false;
              }
              var context = canvas.getContext("2d");
              //context.fillStyle = "#EEEFF";
              //context.fillRect(400, 400, 400, 300);
              var n = 0;
             var dx = 550;
             var dy = 550;
             var s = 100;
             context.beginPath();
             context.globalCompositeOperation = 'and';
             context.fillStyle = 'rgb(100,255,100)';
             var x = Math.sin(0);
             var y = Math.cos(0);
             var dig = Math.PI / 15 * 11;
             context.moveTo(dx, dy);
             for (var i = 0; i < 30; i++) {
                var x = Math.sin(i * dig);
                 var y = Math.cos(i * dig);
                 context.bezierCurveTo(dx + x * s, dy + y * s - 100, dx + x * s + 100, dy + y * s, dx + x * s, dy + y * s);
             }
             context.closePath();
            context.fill();
             context.stroke();		
		
		
		}
		
		
		function bump(id){
			draw20(id);
        function draw20(id) {
            var canvas = document.getElementById(id);
            if (canvas == null)
                return false;
            var context = canvas.getContext("2d");
      
            var interal = setInterval(function () {
                move(context);
            }, 1);
        }
 
        var x = 100;//矩形开始坐标
        var y = 100;//矩形结束坐标
        var mx = 0;//0右1左
        var my = 0; //0下1上
        var ml = 1;//每次移动长度
        var w = 20;//矩形宽度
        var h = 20;//矩形高度
        var cw = 400;//canvas宽度
        var ch = 300; //canvas高度
 
 
        function move(context) {
            context.clearRect(0, 0, 400, 300);
            context.fillStyle = "#EEEEFF";
            context.fillRect(0, 0, 400, 300);
            context.fillStyle = "red";
            context.fillRect(x, y, w, h);       
            if (mx == 0) {
                x = x + ml;
                if (x >= cw-w) {
                    mx = 1;
                }
            }
            else {
               x = x - ml;
                if (x <= 0) {
                    mx = 0;
                }
           }
            if (my == 0) {
                y = y + ml;
                if (y >= ch-h) {
                    my = 1;
                }
            }
            else {
                y = y - ml;
                if (y <= 0) {
                   my = 0;
                }
           }
          
        }			
			
			}