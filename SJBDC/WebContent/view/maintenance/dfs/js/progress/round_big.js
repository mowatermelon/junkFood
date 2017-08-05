function RoundBig(value){
	this.percent = value;
	this.canvas = document.createElement("canvas");
	var temp = this.canvas;
	this.img = new Image();
	this.img.src = dfs+"/images/pic/round-big.png";
	this.img.onload = function() {
		var context = temp.getContext('2d');
		var length = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));//计算画布大小，取图形的对角线，否则旋转时可能隐藏掉部分内容
		temp.width = length;
		temp.height = length;
		context.translate(temp.width / 2, temp.height / 2);//平移坐标原点到画布中心
		context.drawImage(this, (-this.width / 2), (-this.height / 2));
	};
}

RoundBig.prototype.update = function(number){
	this.percent = number;
	this.draw();
	return this;
};

RoundBig.prototype.draw = function(){
	var context = this.canvas.getContext('2d');
	var r = this.percent;
	
	var i = 30;//设置选中速度
	
	r *= i;
	context.save();//保存坐标抽状态
	context.clearRect(-this.canvas.width / 2, -this.canvas.height / 2, this.canvas.width,
			this.canvas.height);
	context.rotate(r * Math.PI / 180);
	console.info(context);
	context.drawImage(this.img, (-this.img.width / 2), (-this.img.height / 2)); //把图片填充到画布中心
	context.restore(); //还原坐标抽状态
	return this;
};
