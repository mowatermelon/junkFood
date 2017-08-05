(function() {
	
	var CircularProgress = this.CircularProgress = function(options) {
		this.el = document.createElement('canvas');
		this.el.width = 330;
		this.el.height = 300;
	};

	// Update with a new `percent` value and redraw the canvas
	CircularProgress.prototype.update = function(value) {
		this._percent = value;
		this.draw();
		
		if(value<=10){
			this.tempColro = '#eb7739';
		}
		if(value<=20 && value>10){
			this.tempColro = '#f09e48';
		}
		if(value<=30 && value>20){
			this.tempColro = '#dcbc3f';
		}
		if(value<=40 && value >30){
			this.tempColro = '#a9b847';
		}
		if(value<=50 && value >40){
			this.tempColro = '#95bc4f';
		}
		if(value<=60 && value > 50){
			this.tempColro = '#70b744';
		}
		if(value<=70&& value > 60){
			this.tempColro = '#42b87c';
		}
		if(value<=80 && value>70){
			this.tempColro = '#36bbad';
		}
		if(value<=90 && value>80){
			this.tempColro = '#37acce';
		}
		if(value > 90){
			this.tempColro = '#44a9f0';
		}
		
		return this;
	};
	
	function getRgd(percent,ctx){
		var grad  = ctx.createRadialGradient(165,150,10,165,150,223);
		var colorLevel = 0;
		if(percent<=10){
			grad.addColorStop(0.2,'#ff4200');
			grad.addColorStop(1,'#f38347');
		}
		if(percent<=20 && percent>10){
			grad.addColorStop(0.2,'#ff7200');
			grad.addColorStop(1,'#f0a24f');
		}
		if(percent<=30 && percent>20){
			grad.addColorStop(0.2,'#e1af00');
			grad.addColorStop(1,'#e1c247');
		}
		if(percent<=40 && percent >30){
			grad.addColorStop(0.2,'#86a200');
			grad.addColorStop(1,'#b1c04e');
		}
		if(percent<=50 && percent >40){
			grad.addColorStop(0.2,'#77b901');
			grad.addColorStop(1,'#9ac057');
		}
		if(percent<=60 && percent > 50){
			grad.addColorStop(0.2,'#3db900');
			grad.addColorStop(1,'#78c04c');
		}
		if(percent<=70&& percent > 60){
			grad.addColorStop(0.2,'#009d4e');
			grad.addColorStop(1,'#4cc387');
		}
		if(percent<=80 && percent>70){
			grad.addColorStop(0.2,'#01ae9c');
			grad.addColorStop(1,'#40c7b9');
		}
		if(percent<=90 && percent>80){
			grad.addColorStop(0.2,'#019ac6');
			grad.addColorStop(1,'#46b6d6');
		}
		if(percent > 90){
			grad.addColorStop(0.2,'#008aff');
			grad.addColorStop(1,'#51b0f3');
		}
		return grad;
		//设定不同体检值的颜色 
	};
	
	// Draw the canvas
	CircularProgress.prototype.draw = function() {
		var ctx = this.el.getContext('2d');
		var percent = Math.min(this._percent, 100);
		//clear canvas
		ctx.clearRect(0, 0, this.el.width, this.el.height);
		
		ctx.fillStyle = getRgd(percent,ctx);
		//ctx.fillStyle = "#9d70e7";
		ctx.fillRect(0,0,this.el.width, this.el.height);
		
		var text = (percent | 0);
		var tw = ctx.measureText(text).width;
		var fontSize = 40;
		ctx.font = "bold 40px arial";
		ctx.fillStyle = "#fff";
		var xIndex = (this.el.width - tw) / 2 + 1;
		if(percent == 100){
			xIndex = xIndex -25;
		}
		ctx.fillText(text, xIndex, (this.el.height + fontSize )/ 2 + 1);

		//add img
		var img=new Image();
		img.src=dfs+"/images/pic/round-s.png";
		var parentCanvas = this.el;
		img.onload = function(){
			ctx.drawImage(this, 98, 83);
		};
		
		return this;
	};

}).call(this);