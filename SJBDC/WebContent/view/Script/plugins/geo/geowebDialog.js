(function ($) {
    $.fn.ligerGeoDialog = function (options) {
        return $.ligerui.run.call(this, "ligerGeoDialog", arguments);
    };

    $.fn.ligerGetGeoDialogManager = function () {
        return $.ligerui.run.call(this, "ligerGetGeoDialogManager", arguments);
    };

    $.ligerDefaults.GeoDialog = {
        //标题
        title: "这是一个标题",
        //弹出框里面的按钮及其样式
        buttons:
            [  //默认按钮及其样式：["取消","保存"] 
                //style：按钮样式：btn btn-success：（成功样式green），btn btn-danger：（危险样式red），
                //                          btn btn-primary：（首选项样式blue）"
               //                           btn btn-default：默认,btn btn-link:链接样式
                { name: '确定', style: 'btn btn-primary', datadismiss: 'modal', value: '确定', id: 'Sure' },
                { name: '取消', style: 'btn btn-default', datadismiss: 'modal', value: '取消', id: 'Cancel' },


            ],
        content: 'ligerGeodialog',//内容
        showCloseButton: true,//显示关闭按钮
        modaldialog: '',  //调整模态框大小（modal-sm：小;''：默认;modal-lg:大）
        bootstrapModalOption: {},//默认的bootstrap模态对话框参数
        onLoading: function (e) { },//对话框即将显示事件 通过判断e.clickedBtnName可获取被点击的按钮
        onLoaded: function (e) { },//对话框已经显示事件  通过判断e.clickedBtnName可获取被点击的按钮
        onCloseing: function (e) { },//对话框即将关闭      通过判断e.clickedBtnName可获取被点击的按钮
        onClosed: function (e) { },//对话框已经关闭事件  通过判断e.clickedBtnName可获取被点击的按钮
    };

    $.ligerMethos.GeoDialog = {};

    $.ligerui.controls.GeoDialog = function (element, options) {
        $.ligerui.controls.GeoDialog.base.constructor.call(this, element, options);
    };

    $.ligerui.controls.GeoDialog.ligerExtend($.ligerui.core.UIComponent, {

        __getType: function () {
            return 'GeoPanelNo';
        },

        __idPrev: function () {
            return 'GeoPanelNo';
        },

        _extendMethods: function () {
            return $.ligerMethos.GeoPanelNo;
        },

        _render: function () {
            var g = this, p = this.options;

            var element = [];

            var targetDivId = "geowedialog" + Math.random();

            targetDivId = targetDivId.replace(".", "");

            element.push('<div class="geo-diaLog-boxdialog" id="' + p.targetDivId + '"></div>');

            element.push('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="">');
            element.push('<div class="modal-dialog ' + p.modaldialog + '" role="document">');
            element.push('<div class="modal-content">');
            element.push('<div class="modal-header">');
            element.push(' <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
            element.push('<h4 class="modal-title" id="myModalLabel">' + p.title + '</h4>');
            element.push('</div>');
            element.push('<div class="modal-body">');
            element.push('<ol><li>' + p.content + '</li></ol>');
            element.push('</div>');
            element.push('<div id="btn-button" class="modal-footer">');

            for (var i = 0; i < p.buttons.length; i++) {
                element.push('<button type="button" id="btn' + p.buttons[i].id + '" name="' + p.buttons[i].name + '"  class="' + p.buttons[i].style + '"data-dismiss="' + p.buttons[i].datadismiss + '">' + p.buttons[i].value + '</button>');
            }

            element.push('</div');
            element.push('</div>');
            element.push('</div>');
            element.push('</div>');

            $(g.element).append(element.join(''));

            var sId = $(g.element).attr("id");

            //即将显示
            $("#" + sId).on('show.bs.modal', function (e) {
                p.onLoading(e);
            });

            //显示之后
            $("#" + sId).on('shown.bs.modal', function (e) {
                p.onLoaded(e);
            });

            //即将关闭
            $("#" + sId).on('hide.bs.modal', function (e) {
                e.clickedBtnName = $(g.element).data("clickedBtnName");
                p.onCloseing(e);
            });

            //关闭之后
            $("#" + sId).on('hidden.bs.modal', function (e) {
                e.clickedBtnName = $(g.element).data("clickedBtnName");
                p.onClosed(e);
            });

            //按钮点击事件
            $("button[type='button']").bind("click", function () {
                $(g.element).data("clickedBtnName", $(this).attr("name"));
            });
        }
    });
})(jQuery);