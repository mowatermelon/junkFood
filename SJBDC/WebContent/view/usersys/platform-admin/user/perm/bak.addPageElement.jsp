<%@ page contentType="text/html;charset=UTF-8" language="java"  import = "java.util.*"%>

<!-- 添加页面元素权限窗口 -->
<div class="modal fade" id="addPageElementWindow" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                <h4 class="modal-title">添加页面元素权限</h4>
            </div>
            <div class="modal-body">

				<s:form name="pagePermAddForm" class="form-horizontal" action="user/perm_savePagePerm.action" method="post">
                    <div class="form-group">
                        <label for="elementName" class="col-sm-3 control-label">页面元素名称</label>
                        <div class="col-sm-4">
                        	<s:textfield name="pageElement.elementName" class="form-control" id="elementName" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="elementCode" class="col-sm-3 control-label">元素编码</label>
                        <div class="col-sm-4">
                        <s:textfield name="pageElement.elementCode" class="form-control" id="elementCode" />
                        </div>
                    </div>

                    <div class="form-group">
							<label for="operationSort" class="col-sm-3 control-label">权限名称</label>
							<div class="col-sm-8">
								<s:textfield name="permissions.permName" class="form-control"
									id="operationSort" />
							</div>
						</div>

						<div class="form-group">
							<label for="systemType" class="col-sm-3 control-label">所属系统</label>
							<%--  <div class="col-sm-8">
                            <s:textfield name="permissions.systemType" class="form-control" id="systemType" />
                        </div> --%>
							<div class="col-sm-5">
								<select class="form-control" id="systemType"
									name="permissions.systemType">
									<option value="GeoCloud门户">GeoCloud门户</option>
									<option value="GeoCloud运维">GeoCloud运维</option>
									<option value="GeoCloud基础资源">GeoCloud基础资源</option>
								</select>

							</div>
						</div>

						<div class="modal-footer">
							<button id="btnSavePageElementPower" type="button"
								class="btn btn-primary" data-dismiss="modal">保存</button>
							<button type="button" class="btn btn-default"
								data-dismiss="modal">放弃</button>
						</div>

					</s:form>
            </div>
            
        </div>
    </div>
</div>