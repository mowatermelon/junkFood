<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="java.util.*"%>

<!-- 添加功能权限窗口 -->
<div class="modal fade" id="addFunctionWindow" tabindex="-1"
	role="dialog">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header geo-modal-header">
				<button type="button" class="close" data-dismiss="modal">
					<span>&times;</span>
				</button>
				<h4 id="opertitle" class="modal-title">添加功能权限</h4>
			</div>
			<div class="modal-body">
				<s:form name="operateAddForm" class="form-horizontal"
					action="/user/perm_saveOperatePerm.action" method="post"
					id="operateAddForm">
					<!-- 添加隐藏域 -->
					<s:hidden id="operationID" name="operation.operationID" />
					<div class="form-group">
						<label for="operationName" class="col-sm-3 control-label">功能名称</label>
						<div class="col-sm-6">
							<s:textfield name="operation.operationName"
								class="form-control required" id="operationName" />
						</div>
					</div>

					<div class="form-group">
						<label for="operationCode" class="col-sm-3 control-label">操作对象编码</label>
						<div class="col-sm-6">
							<s:textfield name="operation.operationCode"
								class="form-control required" id="operationCode" />
						</div>
					</div>

					<div class="form-group">
						<label for="operationUrl" class="col-sm-3 control-label">操作对象链接地址</label>
						<div class="col-sm-6">
							<s:textfield name="operation.operationUrl"
								class="form-control required" id="operationUrl" />
						</div>
					</div>

					<%-- <div class="form-group">
                        <label for="operationSort" class="col-sm-3 control-label">操作对象排序</label>
                        <div class="col-sm-8">
                            <s:textfield name="operation.operationSort" class="form-control" id="operationSort" />
                        </div>
                    </div> --%>

					<div class="form-group">
						<label for="operationSort" class="col-sm-3 control-label">权限名称</label>
						<div class="col-sm-6">
							<s:textfield name="permissions.permName"
								class="form-control required" id="operationSort" />
						</div>
					</div>

					<div class="form-group">
						<label for="systemType" class="col-sm-3 control-label">所属系统</label>
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

					<div class="container-fluid catalog-edit-guide-footer">
						<div class="row">
							<div class="col-md-12">
								<div>
									<a class="task-but3" href="javascript:;"
										id="btnSaveFunctionPower" style="margin-left: 190px;"> 保存
									</a>
									<button type="button" class="task-but4" data-dismiss="modal">
										关闭</button>
								</div>
							</div>
						</div>
					</div>

				</s:form>
			</div>

		</div>
	</div>
</div>
