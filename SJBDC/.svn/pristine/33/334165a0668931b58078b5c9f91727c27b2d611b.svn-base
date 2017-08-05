var pageObj = {
    flag: 0,
    init: function () {
    	initRightTab("gzjz", 1);
        //this.initTable();
        this.Province();
        var url=(top.location.href)
    	var obj=_util.parseUrl(url);
        if(obj.target=="zhjg"){
        	initRightTab("gzjz",1);
        }else if(obj.target=="xxwh"){
        	initRightTab("gzjz_xxwh",0);
        }
        
    },       
    initTable: function () {
        $('#resultList').bootstrapTable({
            url: '/SJBDC/commonController/queryList.do', // 请求后台的URL（*）
            method: 'get', // 请求方式（*）
            striped: true, // 是否显示行间隔色
            cache: false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: false, // 是否显示分页（*）
            height: pageObj.getHeight(),
            undefinedText: "否",
            //sidePagination : "server", // 服务端请求
            sortable: false, // 是否启用排序
            sortOrder: "asc", // 排序方式
            pageNumber: 1, // 初始化加载第一页，默认第一页
            pageSize: 10, // 每页的记录行数（*）
            pageList: [10, 25, 50, 100], // 可供选择的每页的行数（*）
            search: false, // 是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: false,
            queryParams:function(params) {
            	return {"queryId" : "JgXnGzjzQueryMapper.queryQXGZJZ"}
    		 },
            showColumns: false, // 是否显示所有的列
            showRefresh: false, // 是否显示刷新按钮
            minimumCountColumns: 2, // 最少允许的列数
            clickToSelect: true, // 是否启用点击选中行
            uniqueId: "ID", // 每一行的唯一标识，一般为主键列
            showToggle: false, // 是否显示详细视图和列表视图的切换按钮
            cardView: false, // 是否显示详细视图
            detailView: false, // 是否显示父子表
            onLoadSuccess: function (data) {
                pageObj.mergeCells(data);
            },
            columns: [[{
                title: '市、县',
                rowspan: 1,
                colspan: 2,
                align: 'center',
                valign: 'middle',
            }, {
                title: '工作进展',
                colspan: 9,
                align: 'center'
            }], [{
                title: '市名称',
                field: 'CITY',
                align: 'center',
                valign: 'middle',
            }, {
                title: '县名称',
                field: 'TOWN',
                align: 'center',
                valign: 'middle',
            },{
                field: 'CKSZ',
                title: '窗口设置',
                align: 'center',
                formatter: function (v) {
                    if (v && v == 1) {
                        return "<span class=' 	glyphicon glyphicon-ok' style='color:green'></span>"
                    } else {
                        return "-";
                    }
                }
            }, {
                field: 'BFXZ',
                title: '颁发新证',
                align: 'center', formatter: function (v) {
                    if (v && v == 1) {
                        return "<span class=' 	glyphicon glyphicon-ok'style='color:green'></span>"
                    } else {
                        return "-";
                    }
                }
            }, {
                field: 'RYHZDW',
                title: '划转人员',
                align: 'center',
                formatter: function (v) {
                    if (v && v == 1) {
                        return "<span class=' 	glyphicon glyphicon-ok' style='color:green'></span>"
                    } else {
                        return "-";
                    }
                }
            }, {
                field: 'ZLYJ',
                title: '资料移交',
                align: 'center', formatter: function (v) {
                    if (v && v == 1) {
                        return "<span class=' 	glyphicon glyphicon-ok' style='color:green'></span>"
                    } else {
                        return "-";
                    }
                }
            }, {
                field: 'YWLCZZ',
                title: '流程再造',
                align: 'center', formatter: function (v) {
                    if (v && v == 1) {
                        return "<span class=' 	glyphicon glyphicon-ok' style='color:green'></span>"
                    } else {
                        return "-";
                    }
                }
            }, {
                field: 'SJZH',
                title: '数据整合建库',
                align: 'center', formatter: function (v) {
                    if (v && v == 1) {
                        return "<span class=' 	glyphicon glyphicon-ok' style='color:green'></span>"
                    } else {
                        return "-";
                    }
                }
            }, {
                field: 'JSBWSJ',
                title: '系统接入',
                align: 'center', formatter: function (v) {
                    if (v && v == 1) {
                        return "<span class=' 	glyphicon glyphicon-ok' style='color:green'></span>"
                    } else {
                        return "-";
                    }
                }
            }, {
                field: 'XTSJGZ',
                title: '系统升级',
                align: 'center', formatter: function (v) {
                    if (v && v == 1) {
                        return "<span class=' glyphicon glyphicon-ok' style='color:green'></span>"
                    } else {
                        return "-";
                    }
                }
            }
            ]
            ],           
          /*  onClickRow:function(row, $element){
            	//alert(JSON.stringify(row));
            	$("#myModal").modal('toggle');
            	$("#city").html(row.CITY);
            	$("#town").html(row.TOWN);
            	for(var i in row){
            		if(row[i]==1){
            			$("#"+i+"2").attr("checked","checked"); 
            		}else{
            			$("#"+i+"1").attr("checked","checked"); 
            		}
            		if(i.indexOf("SM")!=-1){
            			$("#"+i).val(row[i]);
            		}
            	}           	
            	$('.btn-primary').click(function(){
            		var tem1,tem2,tem3,tem4,tem5,tem6,tem7,tem8,xzqdm;
                	xzqdm=row.QXDM;
                	tem1=$(CKSZ1).attr("checked")?0:1;
                	tem2=$(BFXZ1).attr("checked")?0:1;  
                	tem3=$(ZLYJ1).attr("checked")?0:1;  
                	tem4=$(YWLCZZ1).attr("checked")?0:1;  
                	tem5=$(JSBWSJ1).attr("checked")?0:1;  
                	tem6=$(RYHZDW1).attr("checked")?0:1;
                	tem7=$(SJZHJK1).attr("checked")?0:1;  
                	tem8=$(XTSJGZ1).attr("checked")?0:1;
                	 var date = new Date();
                	 var data=[{"qxdm":xzqdm,"lxCode":"RYHZDW","flag":tem6,"sm":$('#RYHZDWSM').val()},
                	           {"qxdm":xzqdm,"lxCode":"SJZHJK","flag":tem7,"sm":$('#SJZHSM').val()},
                	           {"qxdm":xzqdm,"lxCode":"XTSJGZ","flag":tem8,"sm":$('#XTSJGZSM').val()},
                	           {"qxdm":xzqdm,"lxCode":"YWLCZZ","flag":tem4,"sm":$('#YWLCZZSM').val()},
                	           {"qxdm":xzqdm,"lxCode":"ZLYJ","flag":tem3,"sm":$('#ZLYJSM').val()},
                	           {"qxdm":xzqdm,"lxCode":"BFXZ","flag":tem2,"sm":$('#BFXZSM').val()},
                	           {"qxdm":xzqdm,"lxCode":"CKSZ","flag":tem1,"sm":$('#CKSZSM').val()},
                	           {"qxdm":xzqdm,"lxCode":"JRGJPT","flag":tem5,"sm":$('#JSBWSJSM').val()}];
                	var url0='http://127.0.0.1:8080/SJBDC/gzjzController/updateGzjz.do?jsonStr=';
                	url0+=JSON.stringify(data);
            		$.ajax({url:url0,
            	    	type:"post",
            	    	dataType:"json",        	    	
            		})
            })
           }  */                  
        });  
        },
        // $('#resultList').bootstrapTable('mergeCells', {index: 0, field: '1', colspan: 0, rowspan: 5});
        //   $('#resultList').bootstrapTable('mergeCells', {index: 5, field: '1', colspan: 0, rowspan: 5});
    	mergeCells: function (data) {
        var resultA = [];
        for (var i = 0; i < data.length; i++) {
            if (resultA.indexOf(data[i].CITY) == -1) {
                resultA.push(data[i].CITY);
            }
        }

        if (resultA && resultA.length) {
            for (var i = 0; i < resultA.length; i++) {
                pageObj.merge(data, resultA[i])
            }
        }

    }, merge: function (data, city) {
        var count = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i].CITY == city) {
                count++;
            }
        }
        $('#resultList').bootstrapTable('mergeCells', {index: pageObj.flag, field: 'CITY', colspan: 0, rowspan: count});
        pageObj.flag += count;
    }, getHeight: function () {
        return $(window).height() - $('.box-title ').outerHeight() - 60;
    },Province:function(){
    	/*var filterPanel = new FilterPanel({
            "title": "信息维护",//过渡面板中的标题名称
            "titleIcon": "glyphicon-stats",//标题图片的icon图标，
            "target": ".filterDiv",//目标，代码生成在哪个块级里面
            "filterObj": "none",//生成哪些过滤，all生成全部，日期及城市，CITY单城市，DATE单日期
            "defalutCityID": obj ? obj.QXDM: "",
            "initSuccess": function () {
                pageObj.initTable();
            },
            callback: function () {
                var options = $('#resultList').bootstrapTable('getOptions');
                options.queryParams ={"queryId" : "JgXnGzjzQueryMapper.queryQXGZJZ"};
                $('#resultList').bootstrapTable('refresh', options)
            }
        });
    	  filterPanel.init();*/
    	
    	pageObj.initTable();
    }
}


//pageObj.initbutton();
pageObj.init();