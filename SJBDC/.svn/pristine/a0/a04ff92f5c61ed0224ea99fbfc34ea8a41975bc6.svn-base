<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="java.util.*"%>
<!-- chenzhi 2015.8.12 begin -->
<script type="text/javascript">
	$(function() {
		$('#pagePermAddFormID').validate({
			errorElement : 'span',
			errorClass : 'help-block',
			focusInvalid : true,
			rules : {

				'pageElement.elementName' : {
					required : true,
				},

				'pageElement.elementCode' : {
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
<!-- 添加页面元素权限窗口 -->
<div class="modal fade" id="addPageElementWindow" tabindex="-1"
	role="dialog">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header geo-modal-header">
				<button type="button" class="close" data-dismiss="modal">
					<span>&times;</span>
				</button>
				<h4 class="modal-title">添加页面元素权限</h4>
			</div>
			<div class="modal-body">

				<s:form name="pagePermAddForm" id="pagePermAddFormID"
					class="form-horizontal" action="user/perm_savePagePerm.action"
					method="post">
					<div class="form-group">
						<label for="elementName" class="col-sm-3 control-label">
							页面元素名称 </label>
						<div class="col-sm-6">
							<s:textfield name="pageElement.elementName" class="form-control"
								id="elementName" />
						</div>
					</div>

					<div class="form-group">
						<label for="elementCode" class="col-sm-3 control-label">
							元素编码 </label>
						<div class="col-sm-6">
							<s:textfield name="pageElement.elementCode" class="form-control"
								id="elementCode" />
						</div>
					</div>

					<div class="form-group">
						<label for="operationSort" class="col-sm-3 control-label">
							权限名称 </label>
						<div class="col-sm-6">
							<s:textfield name="permissions.permName" class="form-control"
								id="operationSort" />
						</div>
					</div>

					<div class="form-group">
						<label for="systemType" class="col-sm-3 control-label">
							所属系统 </label>
						<%--  <div class="col-sm-8">
                            <s:textfield name="permissions.systemType" class="form-control" id="systemType" />
                        </div> --%>
						<div class="col-sm-6">
							<select class="form-control" id="systemType"
								name="permissions.systemType">
								<option value="DFSCenter">数据融合平台</option>
								<option value="DataServiceCenter">数据服务中心</option>
								<option value="DataCenterPortal">数据中心门户</option>
							</select>

						</div>
					</div>

					<div class="form-group"></div>
					<div class="form-group"></div>

					<div class="modal-footer" style="background-color: #FFFFFF">
						<button type="button" class="btn btn-default" data-dismiss="modal">
							取消</button>
						<button id="btnSavePageElementPower" type="button"
							class="btn btn-primary">保存</button>
					</div>

				</s:form>
			</div>

		</div>
	</div>
</div>