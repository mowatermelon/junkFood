/*! circular-progress - v0.2.1 - https://github.com/neoziro/circular-progress */

(function() {
	
	// Main CircularProgress object exposes on global context
	var CircularProgress = this.CircularProgress = function(options) {
		var ctx, i, property;
		options = options || {};
		this.el = document.createElement('canvas');
		this.options = options;

		ctx = this.el.getContext('2d');
		
	};

	// Update with a new `percent` value and redraw the canvas
	CircularProgress.prototype.update = function(value) {
		this._percent = value;
		this.draw();
		return this;
	};
	
	CircularProgress.prototype.drawBgColor = function(percent) {
		var ctx = this.el.getContext('2d');
		ctx.fillStyle="red";
		ctx.fillRect(0,0,330,300);
		return ctx;
	};

	// Draw the canvas
	CircularProgress.prototype.draw = function() {
		var tw, text, fontSize;
		var options = this.options;
		var ctx = this.el.getContext('2d'), 
		percent = Math.min(this._percent, 100);
		
		var width = this.el.style.width;
		var height = this.el.style.height;

		ctx.clearRect(0, 0, width, height);
		
		this.drawBgColor(percent);//绘制背景色
		
		text = options.text.value === null ? (percent | 0) + '%' : options.text.value;
		tw = ctx.measureText(text).width;
		fontSize = ctx.font.match(/(\d+)px/);
		fontSize = fontSize ? fontSize[1] : 0;
		ctx.fillText(text, width - tw / 2 + 1, height + fontSize / 2 - 1);

		return this;
	};

}).call(this);