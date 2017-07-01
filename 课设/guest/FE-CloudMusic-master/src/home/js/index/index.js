/*
*
*/
define( function( require, exports, module ) {

	function Index() {
		this.btnDwn = '.btns .btn-down';		//宣传栏左侧的下载按钮
		this.btnSm = '.btns .sm';				//宣传栏左侧的其他按钮
		this.slides = '.slides';				//滚动框
		this.sliUL = '.slides ul.points';		//滚动框 图片
		this.sliTips = '.slides ul.sub-tips li';//滚动图小按钮

		this.SIZE;							//滚动图片宽度
		this.LENGTH;						//滚动图片数量
		this._timer;						//滚动定时器

		this.btnNews = '.aside ul.aside-tab li';	//宣传栏右侧的导航

		this.rank = '.rank dl';

		this.rankALLPlay = '.rank dl dt .dt-txt a.icon-play';	//飙升榜
		this.rankALLStore = '.rank dl dt .dt-txt a.icon-store';	//飙升榜

		this.rankLI = '.rank dl dd';							//排行榜li
		this.rankLIPlay = '.rank dl dd .dd-oper a.icon-play';	//排行榜li的播放按钮
		this.rankLIAdd = '.rank dl dd .dd-oper a.icon-add';		//排行榜li的添加按钮
		this.rankLIStore = '.rank dl dd .dd-oper a.icon-store';	//排行榜li的收藏按钮

		this.mlist = '.play-form .form-tab ul.mtab';			//播放列表ul
		this.Mnumber = '.play-ctrl a.icon-list';				//播放列表数目
	}

	module.exports = Index;

	Index.prototype.render = function() {
		this._init();
		this._load();
		this._bind();
	}

	Index.prototype._init = function() {

		var self = this;
		this.SIZE = $(this.sliUL).find('img').width();
		this.LENGTH = $(this.sliUL).find('img').length;

		$(this.sliUL).css('width', this.SIZE*this.LENGTH + 'px');

		this._fnTimer(0);
	}

	Index.prototype._fnTimer = function(i) {

		var index = i || 0;
		var self = this;	
		var SIZE = this.SIZE;
		var LENGTH = this.LENGTH;
		
		this._timer && clearInterval(this._timer);

		ahead();
		
		this._timer = setInterval(ahead, 8000);

		function ahead() {

			$ (self.sliUL ).animate({
				left: -index * SIZE+ 'px',
			}, 500);

			$( self.sliTips ).removeClass('active').eq( index ).addClass('active');

			index = (++index >= LENGTH ? 0 : index);

		}
	}
	
	Index.prototype._load = function() {
		var self = this,
			html = '',
			json = require('../justSomeData/dataGetNews');

		$.each(json, function (index, value) {
			html += '<li>' +
                        '<a href="javascript:;">'+value.title+'</a>' +
                        '<span>'+value.pubDate.substring(5,10)+'</span>' +
                '</li>';
		});	
		$('ul.aside-list').append(html).find('a').first().attr('class', 'active');		

		rank(0);
		rank(1);
		rank(2);

		function rank(i) {

			// $.post('../controller/getRank.php', {data: i}, function(result) {
				// var json = $.parseJSON(result);
				var json = require('../justSomeData/dataList');
				var html = '';
				$.each(json, function (index, value) {
					html += '<dd data-id="' + value.id + '">' +
                                '<span>' + (index+1) + '</span>' +
                                '<a href="javascript:;">'+value.name+'</a>' +
                                '<div class="dd-oper">' +
                                    '<a href="javascript:;" class="icon-play"></a>' +
                                    '<a href="javascript:;" class="icon-add"></a>' +
                                    '<a href="javascript:;" class="icon-store"></a>' +
                                '</div>' +
                        '</dd>';
				});	

				html += '<div class="dd"><a href="javascript:;" class="dd-more">查看更多&gt;</a></div>';

				$(self.rank).eq(i).append(html);		
				$(self.rank).eq(i).children('dd:even').css('background','#e8e8e8');		
			// });
		}
		
		
	}	

	Index.prototype._bind = function() {

		var self = this,
			timer;

		$('.wrap .main-top').on('mouseover mouseout', this.btnDwn, function( event ) {
			if (event.type == 'mouseover') {
				$(this).animate({fontSize: "19px"});

			} else if (event.type == 'mouseout') {
				$(this).animate({fontSize: "20px"});

			}
		}).on('mouseover mouseout', this.btnSm, function( event ) {
			if (event.type == 'mouseover') {
				$(this).animate({textIndent: "0"}, 400);

			} else if (event.type == 'mouseout') {
				$(this).animate({textIndent: "10px"}, 300);

			}
		}).on({

			mouseover: function() {
				$(self.sliTips).parent('ul').attr('class', 'sub-tips sub-bg');	//加背景
			},
			mouseout: function() {
				$(self.sliTips).parent('ul').attr('class', 'sub-tips');		//移除背景
			}

		}, this.slides).on('click', this.sliTips, function() {

			self._fnTimer($(this).index());

		}).on('click', this.btnNews, function() {

			$(self.btnNews).children('a').attr('class', '');
			$(self.btnNews).eq($(this).index()).children('a').addClass('active');
		});

		$('.wrap .main-rank').on('click', this.rankALLPlay, function () {

			var addID = 0,
				list = $(this).parents('dl').children('dd');

			for (var i = 0, length = $(list).length; i < length; i++) {
				addID = $(list).eq(i).attr('data-id');
				self._appendEle(addID);
				if (i == 0) {
					var info = getMInfo(addID);
					$('audio')[0].src = info.src;
					$('audio')[0].play();
					$('.fix-bottom').trigger("mouseover");
				}
			}

		}).on({

			mouseover : function() {
				$(this).children('a').first().attr('class', 'title');
				$(this).children('div.dd-oper').show();
			},
			mouseleave : function() {
				$(this).children('a').first().removeClass('title');
				$(this).children('div.dd-oper').hide();
			}

		}, this.rankLI ).on('click', this.rankLIPlay, function() {

			var addID = $(this).parents('dd').attr('data-id'),
				info = getMInfo(addID);
			// self._appendEle(addID);
			$('audio')[0].src = info.src;
			$('audio')[0].play();
			$('.fix-bottom').trigger("mouseover");

		}).on('click', this.rankLIAdd, function() {

			var addID = $(this).parents('dd').attr('data-id');
			self._appendEle( addID );	
			
		});
	}

	Index.prototype._appendEle = function ( addID ) {
		var self = this,	
			existID = 0,
			html = '',
			info = null,
			i = $( self.mlist ).children('li').length;

		for (  ; i >= 0; i--) {
			existID = $( self.mlist ).children('li').eq(i).attr('data-id');
			if ( addID == existID ) {
				break;

			} else if ( i == 0) {
				info = getMInfo(addID);
				html = '<li data-id="' + info.id + '">' +
							'<div class="abs-stus"><span class="icn-stus"></span></div>' +
		                    '<div class="col col-1">' + info.name + '</div>' +
		                    '<div class="col col-2">' +
		                        '<a href="javascript:;" class="icn-col" title="收藏"></a>' +
		                        '<a href="javascript:;" class="icn-dwn" title="下载"></a>' +
		                        '<a href="javascript:;" class="icn-del" title="删除"></a>' +
		                    '</div>' +
		                    '<div class="col col-3">' + info.master + '</div>' +
		                    '<div class="col col-4">03:23</div>' +
		            '</li>';
				$(self.mlist).append(html);
				var num = $(self.Mnumber).text();
				$(self.Mnumber).text(++num);
				$(self.mlist).siblings('.empty').hide();
			}
		}
		
	}




	// helpers 假的接口
	function getMInfo (data_id) {
		var json = require('../justSomeData/dataList');
		for (key in json) {
			if (json[key].id == data_id) {
				return json[key];
			}
		}
		// console.log(json);
	}

});