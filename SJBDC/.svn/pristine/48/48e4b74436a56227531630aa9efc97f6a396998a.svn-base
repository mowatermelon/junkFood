<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="java.util.*"%>
<!-- chenzhi 2015.8.12 begin -->
<script type="text/javascript">
	$(function() {
		$('#updateMenuPermFormID').validate({
			errorElement : 'span',
			errorClass : 'help-block',
			focusInvalid : true,
			rules : {

				'menu.menuName' : {
					required : true,
				},
				'menu.menuUrl' : {
					required : true,
				},

				'menu.menuRemark' : {
					required : true,
					onlyLetterNumber : true
				},

				'menu.menuCode' : {
					required : true,
					onlyLetterNumber : true
				},

				'permissions.permName' : {
					required : true,
				},
			},
			highlight : function(element) {
				$(element).closest('.form-group').addClass('has-error');
			},
			success : function(label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},
			errorPlacement : function(error, element) {
				element.parent('div').append(error);
			},
			submitHandler : function(form) {
				$("#addFunctionWindow").modal('hide');
				form.submit();
			}
		});

	});
</script>

<!-- chenzhi 2015.8.12 end  -->
<!-- 添加菜单权限窗口 -->
<div class="modal fade" id="updateMenuWindow" tabindex="-1"
	role="dialog">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header geo-modal-header">
				<button type="button" class="close" data-dismiss="modal">
					<span>&times;</span>
				</button>
				<h4 class="modal-title">修改菜单权限</h4>
			</div>
			<div class="modal-body">
				<s:form name="updateMenuPermForm" id="updateMenuPermFormID"
					class="form-horizontal" action="user/menu_update.action"
					method="post">

					<!-- 添加隐藏域 -->
					<s:hidden id="update_menuID" name="menu.menuID" />
					<div class="form-group">
						<label for="menuName" class="col-sm-3 control-label"> 菜单名称
						</label>
						<div class="col-sm-6">
							<s:textfield name="menu.menuName" class="form-control"
								id="update_menuName" />
						</div>
					</div>

					<div class="form-group">
						<label for="menuUrl" class="col-sm-3 control-label">
							菜单链接地址 </label>
						<div class="col-sm-6">
							<s:textfield name="menu.menuUrl" class="form-control"
								id="update_menuUrl" />
						</div>
					</div>

					<div class="form-group">
						<label for="menuRemark" class="col-sm-3 control-label">
							菜单标记 </label>
						<div class="col-sm-6">
							<s:textfield name="menu.menuRemark" class="form-control"
								id="update_menuRemark" />
						</div>
					</div>

					<%-- <div class="form-group">
							<label for="menuDisplay" class="col-sm-3 control-label">菜单显示</label>
							<div class="col-sm-4">
								<s:textfield name="menu.menuDisplay" class="form-control" id="menuDisplay" />
							</div>
						</div> --%>

					<div class="form-group">
						<label for="menuCode" class="col-sm-3 control-label"> 菜单编码
						</label>
						<div class="col-sm-6">
							<s:textfield name="menu.menuCode" class="form-control"
								id="update_menuCode" />
						</div>
					</div>

					<%-- <div class="form-group">
							<label for="menuSort" class="col-sm-3 control-label">菜单排序</label>
							<div class="col-sm-4">
								<s:textfield name="menu.menuSort" class="form-control" id="menuSort" />
							</div>
						</div> --%>

					<%-- <div class="form-group">
							<label for="menuUsesMark" class="col-sm-3 control-label">菜单启用备注</label>
							<div class="col-sm-4">
								<s:textfield name="menu.menuUsesMark" class="form-control" id="menuUsesMark" />
							</div>
						</div> --%>

					<%-- <div class="form-group">
							<label for="menuSystemType" class="col-sm-3 control-label">菜单系统类型</label>
							<div class="col-sm-4">
								<s:textfield name="menu.menuSystemType" class="form-control" id="menuSystemType" />
							</div>
						</div> --%>


					<div class="form-group">
						<label for="operationSort" class="col-sm-3 control-label">
							权限名称 </label>
						<div class="col-sm-6">
							<s:textfield name="permissions.permName" class="form-control"
								id="update_menuPermName" />
						</div>
					</div>

					<div class="form-group">
						<label for="systemType" class="col-sm-3 control-label">
							所属系统 </label>
						<div class="col-sm-6">
							<select class="form-control" id="menuSystemType"
								name="permissions.systemType">
								<option value="DFSCenter">数据融合平台</option>
								<option value="DataServiceCenter">数据服务中心</option>
								<option value="DataCenterPortal">数据中心门户</option>
							</select>

						</div>
					</div>

					<div class="form-group"></div>
					<div class="form-group"></div>

					<%-- <div class="form-group">
								<label for="iptOrganization" class="col-sm-3 control-label">上级菜单ID</label>

								<div class="col-sm-4">
									<input id="citySel" type="text" readonly value=""
										style="width: 120px;" onclick="showMenu();" /> &nbsp;<a
										id="menuBtn" href="#" onclick="showMenu(); return false;">请指定上级菜单ID</a>

									<select class="form-control" id="iptOrganization">
                                    <option>请指定机构</option>
                                    <option>某市某局</option>
                                	</select>	
								</div>
							</div> --%>

					<div class="modal-footer" style="background-color: #FFFFFF">
						<button type="button" class="btn btn-default" data-dismiss="modal">
							取消</button>
						<button id="btnUpdateMenuPower" type="button"
							class="btn btn-primary">保存</button>
					</div>


				</s:form>
			</div>

		</div>
	</div>

	<!-- 机构下拉菜单内容 -->
	<div id="menuContent" class="menuContent"
		style="display: none; position: absolute;">
		<ul id="treeDemo" class="ztree"
			style="margin-top: 0; width: 180px; height: 200px; background: white; overflow-y: auto;"></ul>
	</div>

</div>

