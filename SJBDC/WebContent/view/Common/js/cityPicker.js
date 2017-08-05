/**
 * @author IIInsomnia
 *
 * var cityPicker = new IIInsomniaCityPicker({
 *      data: cityData,                城市数据
 *      target: '#targetID',           目标元素ID（如：文本框，该值为城市名称）
 *      callback: function(city_id){   回调函数，选择城市后调用，city_id为选择的城市的ID
 *          alert(city_id);
 *      }
 * });
 *
 * cityPicker.init();
 */
;
var IIInsomniaCityPicker = function (options) {
    this.template = $('<div class="IIInsomnia-city-picker" id="IIInsomnia_city_picker"><div class="IIInsomnia-wrap"><p class="province-head" data-id="" data-name="' + citySetting.province + '">' + citySetting.province + '</p><ul class="IIInsomnia-province-wrap" id="IIInsomnia_province_wrap"></ul></div></div>');
    this.hot_city = $('#IIInsomnia_hot_city', this.template);
    this.province_wrap = $('#IIInsomnia_province_wrap', this.template);
    this.settings = {
        data: options.data || citySetting.citys,
        defalutCityCode: options.defalutCityCode || citySetting.defalutSelectCity || "",
        target: $(options.target),
        isDeth: options.isDeth == false ? false : true,//是否点击进入第二层
        opens: options.opens || "left",
        callback: options.callback || '',
    };

};

IIInsomniaCityPicker.prototype = {
    init: function () {
        var that = this;
        $(window).click(function (event) {
            /* Act on the event */
            that.template.remove();
        });
        if (that.settings.target) {
            that.settings.target.attr('readonly', true);
            if (that.settings.defalutCityCode) {
                that.settings.target.val(citySetting.getCity(that.settings.defalutCityCode, 'name'));
            } else {
                that.settings.target.val(citySetting.province);
            }
        }

        that.targetEvent();
    },

    buildCityPicker: function () {
        var that = this;
        that.buildProvinceTpl();
        that.provinceEvent();
        that.cityEvent();
        that.cleanBtnEvent();
    },


    buildProvinceTpl: function () {
        var that = this;
        var citys = that.settings.data;
        var city_html = '';
        for (var i = 0, len = citys.length; i < len; i++) {
            city_html += '<li class="IIInsomnia-province" data-id="' + citys[i]['id'] + '" data-name="' + citys[i]['name'] + '"><ul class="IIInsomnia-city-wrap"></ul><div class="IIInsomnia-province-name">' + _util.colvalue(citys[i]['name'], 3) + '</div></li>';
        }
        that.province_wrap.html(city_html);
    },

    buildCityTpl: function (cur_province) {
        var that = this;
        var pid = cur_province.data('id');
        var poi = cur_province.position();
        var province = that.settings.data;
        var city, provincename = "";
        var city_html = '';
        for (var i = 0, plen = province.length; i < plen; i++) {
            if (province[i]['id'] == parseInt(pid)) {
                city = province[i]['city'];
                provincename = province[i]['name'];
                break;
            }
        }
        city_html += "<li class='IIInsomnia-city-event' data-name=" + provincename + " data-id=" + pid + " style='padding:0px 0px 10px 0px;display: block;border-bottom: 1px solid #ededed !important;'>" + provincename + "</li>"
        for (var j = 0, clen = city.length; j < clen; j++) {
            city_html += '<li class="IIInsomnia-city IIInsomnia-city-event" data-id="' + city[j]['id'] + '" data-name="' + city[j]['name'] + '" title="' + city[j]['name'] + '">' + city[j]['name'] + '</li>';
        }

        if (that.settings.opens == "right") {
            cur_province.find('.IIInsomnia-city-wrap').html(city_html).css('right', '-' + (poi.right + 37) + 'px').show();
        } else {
            cur_province.find('.IIInsomnia-city-wrap').html(city_html).css('left', '-' + (poi.left - 37) + 'px').show();
        }

    },

    provinceEvent: function () {
        var that = this;
        that.province_wrap.on('click', '.IIInsomnia-province', function (event) {
            event.preventDefault();
            event.stopPropagation();
            /* Act on the event */
            var _this = $(this);
            if (that.settings.isDeth) {
                if (!_this.hasClass('active')) {
                    that.province_wrap.find('.IIInsomnia-province').removeClass('active');
                    that.province_wrap.find('.IIInsomnia-province-name').removeClass('active');
                    that.province_wrap.find('.IIInsomnia-city-wrap').hide().children().remove();
                    _this.addClass('active');
                    _this.find('.IIInsomnia-province-name').addClass('active');
                    that.buildCityTpl(_this);
                } else {
                    _this.removeClass('active');
                    _this.find('.IIInsomnia-province-name').removeClass('active');
                    _this.find('.IIInsomnia-city-wrap').hide().children().remove();
                }
            } else {
                var cid = _this.data('id');
                var cname = _this.data('name');
                that.settings.target.val(cname);
                that.template.remove();
                if (that.settings.callback) that.settings.callback(cid, cname);
            }
            return false;
        });
    },

    cityEvent: function () {
        var that = this;
        that.hot_city.on('click', '.IIInsomnia-city-event', function (event) {
            event.preventDefault();
            event.stopPropagation();
            /* Act on the event */
            var _this = $(this);
            var cid = _this.data('id');
            var cname = _this.data('name');
            that.settings.target.val(cname);
            that.template.remove();
            if (that.settings.callback) that.settings.callback(cid, cname);
            return false;
        });

        that.province_wrap.on('click', '.IIInsomnia-city-event', function (event) {
            event.preventDefault();
            event.stopPropagation();
            /* Act on the event */
            var _this = $(this);
            var cid = _this.data('id');
            var cname = _this.data('name');
            that.settings.target.val(cname);
            that.template.remove();
            if (that.settings.callback) that.settings.callback(cid, cname);
            return false;
        });
    },

    cleanBtnEvent: function () {
        var that = this;
        that.province_wrap.on('click', '#IIInsomnia_clean_btn', function (event) {
            event.preventDefault();
            event.stopPropagation();
            /* Act on the event */
            that.settings.target.val('');
            that.template.remove();
            if (that.settings.callback) that.settings.callback(0);
            return false;
        });
    },

    targetEvent: function () {
        var that = this;
        that.settings.target.click(function (event) {
            event.stopPropagation();
            /* Act on the event */
            var _this = $(this);

            that.buildCityPicker();
            $('body').append(that.template);
            var offset = _this.offset();
            var top = offset.top + _this.outerHeight() + 15;
            if (that.settings.opens == "right") {
                that.template.addClass("right-open-city-picker");
                that.template.css({
                    'left': offset.left - that.template.width() + 80,
                    'top': top
                });
            } else {
                that.template.addClass("left-open-city-picker");
                that.template.css({
                    'left': offset.left,
                    'top': top
                });
            }

            if ($('.daterangepicker').length) {
                $('.daterangepicker').hide();
            }
            $('.province-head').click(function () {
                var name = $(this).attr("data-name"), id = $(this).attr("data-id");
                that.template.remove();
                that.settings.target.val(name);
                if (that.settings.callback) that.settings.callback(id, name);
            })
            return false;
        });
    }
};