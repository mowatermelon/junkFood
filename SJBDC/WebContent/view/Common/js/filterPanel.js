var FilterPanel = function(options) {
	this.settings = {
		"title" : options.title || "",// 过渡面板中的标题名称
		"titleIcon" : options.titleIcon || "",// 标题图片的icon图标，
		"target" : $(options.target),// 目标，代码生成在哪个块级里面
		"filterObj" : options.filterObj || "ALL",// 生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期
		"defalutCityID" : options.defalutCityID || "",
		"dateFormat" : options.dateFormat || "",// 只选择年份数据
		"initSuccess" : options.initSuccess,
		"startDate" : options.startDate || "",
		"endDate" : options.endDate || "",
		"isDeth" : options.isDeth || false,
		callback : options.callback || true
	};
};
FilterPanel.prototype = {
	init : function() {
		var that = this;
		that.settings.template = [];// 设置一个空白的模板
		if (that.settings.filterObj == "ALL" || that.settings.title) {// 判断是否需要生成标题区域
			that.initTitle();
		}
		that.initPlugins();
		that.settings.initSuccess && that.settings.initSuccess();

	},

	/**
	 * 初始化title区域
	 */
	initTitle : function() {
		var that = this;
		that.settings.template
				.push('<div class="title-area"> <span class="glyphicon '
						+ that.settings.titleIcon + ' box-title">&nbsp;'
						+ that.settings.title
						+ '</span></div><div class="filter-plugin-area"></div>');
		that.settings.target.html(that.settings.template.join(""));
	},
	initPlugins : function() {
		var that = this;
		var pluginObj = $('.filter-plugin-area');

		if (pluginObj.length == 0) {// 如果没有生成时间，城市区域
			that.settings.target.html('<div class="filter-plugin-area"></div>');
			pluginObj = $('.filter-plugin-area');
		}

		/**
		 * 判断是否需要生成城市选择区域
		 */
		if (that.settings.filterObj == "ALL"
				|| that.settings.filterObj == "CITY") {
			pluginObj
					.append('<div class="province-area"><input id="cityCodeValue" value="'
							+ that.settings.defalutCityID
							+ '" type="hidden"> <a id="cityChoice" class="plugin-box" readonly="readonly"> <span id="cityName">'
							+ that.parseCityName()
							+ '</span> <span class="arrow-down"></span> </a> </div>');
		}
		/**
		 * 判断是否需要生成日期选择区域
		 */
		if (that.settings.filterObj == "ALL"
				|| that.settings.filterObj == "DATE") {
			if (that.settings.dateFormat == "YYYY") {// 只显示年份
				var year = new Date().getFullYear();
				pluginObj
						.append(' &nbsp;&nbsp;&nbsp;&nbsp; <div class="date-picker-area"> <input id="selectYear" value="'
								+ year
								+ '" type="hidden"><div class="controls"> <a class="plugin-box date-box" style="width:100px !important;" id="timeRange" class=""> <span id="dateStr">'
								+ year
								+ '</span><span class="arrow-down"></span></a> </div> </div>');

			} else {
				if (!that.settings.startDate || !that.settings.endDate) {
					var date = new Date();
					that.settings.startDate = date.addDate("m", -2).format(
							"yyyy-MM-dd"), that.settings.endDate = date
							.format("yyyy-MM-dd");
				}

				pluginObj.append(' &nbsp;&nbsp;&nbsp;&nbsp; <div class="date-picker-area"> <input class="plugin-box date-box timeRange form-control" id="startDate" value="'+ that.settings.startDate+ '"/> &nbsp;至&nbsp;<input class="plugin-box date-box timeRange form-control" id="endDate" value="'+ that.settings.endDate+ '"/><div class="controls"></div> </div>');

			}
		}
		that.bindEvent();
	},
	parseCityName : function() {
		var that = this;
		if (!that.settings.defalutCityID || that.settings.defalutCityID == 44) {
			return citySetting.province;
		}
		return citySetting.getCity(that.settings.defalutCityID, "name")
	},
	/**
	 * 绑定事件
	 */
	bindEvent : function() {
		var that = this;
		if (that.settings.dateFormat == "YYYY") {
			$("#timeRange").datetimepicker({
				language : 'zh-CN',
				weekStart : 1,
				todayBtn : 1,
				autoclose : 1,
				todayHighlight : 1,
				startView : 4,
				minView : 4,
				forceParse : 0,
				viewSelect : 'decade',
				format : 'yyyy',
			}).on('changeDate', function(v) {

				var year = v.date.getFullYear();
				$('#dateStr').text(year);
				$("#selectYear").val(year)
				that.settings.callback && that.settings.callback();
			});
		} else {
			$(".timeRange").datetimepicker({
				language : 'zh-CN',
				weekStart : 1,
				todayBtn : false,
				autoclose : 'true',
				todayHighlight : false,
				startView : 2,
				minView : 2,
				forceParse : 'false',
				viewSelect : 'decade',
				format : 'yyyy-mm-dd',
			}).on('changeDate', function(v) {
				var year = v.date.getFullYear();
				$('#dateStr').text(year);
				$("#selectYear").val(year)
				that.settings.callback && that.settings.callback();
			});
			/*$('#timeRange').daterangepicker(
					{
						language : 'zh-CN',
						opens : "left",
						startDate : that.settings.startDate,
						endDate : that.settings.endDate
					},
					function(start, end) {
						$("#startDate").val(start.format('YYYY-MM-DD'))
						$("#endDate").val(end.format('YYYY-MM-DD'))
						$('#dateStr').text(
								start.format('YYYY-MM-DD') + '~'
										+ end.format('YYYY-MM-DD'));
						that.settings.callback && that.settings.callback();
					})*/
		}

		var cityPicker = new IIInsomniaCityPicker({

			target : '#cityChoice',
			valType : 'k-v',
			opens : "right",
			isDeth : that.settings.isDeth,
			callback : function(city_id, city_name) {
				$('#cityName').text(city_name);
				$("#cityCodeValue").val(city_id.toString());
				that.settings.callback && that.settings.callback();
			}
		});
		cityPicker.init();

	}
}
