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
	console.count('����ǵ�һ��time');
    if (canvas == null){
		console.error("YOU ARE SO BAD BUG!");		
		return false;

		}else{
			console.info("YOU ARE SO GOOD GIRL!");
			var context = canvas.getContext("2d");
			
			//ʵ�������ڲ���ʩfillStyle�µ�Ĭ��fillStyle=black
			
			console.group("����ǵ�һ������");
			console.time("����ǵ�һ��time");
			console.trace();
			console.info("�����Ĭ��״̬�µĻ��ľ���");
			context.fillRect(0, 0, 100, 100);
			
			 /*ʵ�������ڲ���ʩstrokeStyle�µ�Ĭ��strokeStyle=black
			 ���ƾ���  context.fillRect(x,y,width,height)  strokeRect(x,y,width,height)*/
			 console.timeEnd("����ǵ�һ��time");
			 console.groupEnd();
			 
			console.group("����ǵڶ�������");
			console.time("����ǵڶ���time");			
			console.trace();
			console.info("�����Ĭ��״̬�µľ������");			 
			context.strokeRect(120, 0, 100, 100);
			console.timeEnd("����ǵڶ���time");		
			console.groupEnd();
			
			console.group("����ǵ���������");
			console.time("����ǵ�����time");			
			console.trace();
			console.info("���������ɫ����µľ������");				
			context.strokeStyle="rgba(111,222,225,0.5)";
			
			context.strokeRect(240,0,100,100);
			console.timeEnd("����ǵ�����time");			
			console.groupEnd();
			
			console.group("����ǵ��ĸ�����");
			console.time("����ǵ��ĸ�time");			
			console.trace();
			console.info("��������ͼ��ľ��λ���");			
			context.clearRect(25, 25, 300, 50);/*����������� context.clearRect(x,y,width,height)*/
			console.timeEnd("����ǵ��ĸ�time");			
			console.groupEnd();
			
			console.group("����ǵ��������");
			console.time("����ǵ����time");			
			console.trace();
			console.info("�����Բ�εĻ���");
			/* Բ��context.arc(x, y, radius, starAngle,endAngle, anticlockwise)*/
			console.time();
			context.beginPath();
			context.arc(100, 200, 50,  Math.PI*0.5,Math.PI * 2,true);
             //���ر�·��·����һֱ������ȥ����ȻҲ������������ص��������벻����Ч��
             context.closePath();
			 console.timeEnd();
             context.fillStyle = 'rgba(0,222,0,0.8)';
            context.fill();	
		    console.timeEnd("����ǵ����time");			
			console.groupEnd();	
			
			console.group("����ǵ���������");
			console.time("����ǵ�����time");			
			console.trace();
			context.beginPath();
		
/*			console.info("����ǳ�����������");	
			context.strokeStyle="rgba(255,0,0,1)";		
			context.moveTo(150,150);// �����߶� context.moveTo(x,y)  context.lineTo(x,y)
			context.lineTo(200,200);
			context.lineTo(250,200);
			context.lineTo(200,250);*/
			
            context.strokeStyle = "rgb(250,0,0)";
             context.fillStyle = "rgb(250,111,0)"
             context.lineTo(100, 100);
             //֮���lineTo�����ϴ�lineTo�Ľڵ�Ϊ��ʼ
            context.lineTo(200, 200);
             context.lineTo(200, 100);
             context.moveTo(200, 50);
             context.lineTo(100,50);			
			context.stroke();
			context.fill();

			console.timeEnd("����ǵ�����time");
			 context.closePath();			
			console.groupEnd();								
			}
        

	}

function draw21(id) {
             var canvas = document.getElementById(id)
             if (canvas == null)
                 return false;
             var context = canvas.getContext("2d");
             //ʵ�������ڲ���ʩfillStyle�µ�Ĭ��fillStyle=black
             context.fillRect(0, 0, 100, 100);
             //ʵ�������ڲ���ʩstrokeStyle�µ�Ĭ��strokeStyle=black
             context.strokeRect(120, 0, 100, 100);
 
             //���ô�ɫ
             context.fillStyle = "red";
             context.strokeStyle = "blue";
             context.fillRect(0, 120, 100, 100);
             context.strokeRect(120, 120, 100, 100);
 
             //����͸����ʵ��֤��͸����ֵ>0,<1ֵԽ�ͣ�Խ͸����ֵ>=1ʱΪ��ɫ��ֵ<=0ʱΪ��ȫ͸��
             context.fillStyle = "rgba(255,0,0,0.2)";
             context.strokeStyle = "rgba(255,0,0,0.2)";
            context.fillRect(240,0 , 100, 100);
             context.strokeRect(240, 120, 100, 100);
			 

         }
		 
function demo() {
	console.time("�����Ϊ�����������׼��");
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
	console.timeEnd("�����Ϊ�����������׼��");
	}
	
	function prodemo(){
		console.count('����prodemo�Ĵ���');
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
			 ���Ʊ��������ߣ����ð���bezier�� context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y) 
���ƶ����������� context.quadraticCurveTo(qcpx,qcpy,qx,qy)

    cp1x:��һ�����Ƶ�x���� cp1y:��һ�����Ƶ�y���� cp2x:�ڶ������Ƶ�x���� cp2y:�ڶ������Ƶ�y����
    x:�յ�x����   y:�յ�y����

    qcpx:�����������߿��Ƶ�x����  qcpy:�����������߿��Ƶ�y���� qx:�������������յ�x����   qy:�������������յ�y����*/
	
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
 
        var x = 100;//���ο�ʼ����
        var y = 100;//���ν�������
        var mx = 0;//0��1��
        var my = 0; //0��1��
        var ml = 1;//ÿ���ƶ�����
        var w = 20;//���ο��
        var h = 20;//���θ߶�
        var cw = 400;//canvas���
        var ch = 300; //canvas�߶�
 
 
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