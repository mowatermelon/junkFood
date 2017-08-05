<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="java.util.*"%>
<!-- 添加菜单权限窗口 -->
<div class="modal fade" id="addMenuWindow" tabindex="-1" role="dialog">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header geo-modal-header">
				<button type="button" class="close" data-dismiss="modal">
					<span>&times;</span>
				</button>
				<h4 class="modal-title">添加菜单权限</h4>
			</div>
			<div class="modal-body">
				<s:form name="addMenuPermForm" class="form-horizontal"
					action="/user/perm_saveMenuPerm.action" method="post"
					id="addMenuPermForm">

					<div class="form-group">
						<label for="menuName" class="col-sm-3 control-label"> 菜单名称
						</label>
						<div class="col-sm-6">
							<s:textfield name="menu.menuName" class="form-control required"
								id="menuName" />
						</div>
					</div>

					<div class="form-group">
						<label for="menuUrl" class="col-sm-3 control-label">
							菜单链接地址 </label>
						<div class="col-sm-6">
							<s:textfield name="menu.menuUrl" class="form-control"
								id="menuUrl" />
						</div>
					</div>

					<div class="form-group">
						<label for="menuRemark" class="col-sm-3 control-label">
							菜单标记 </label>
						<div class="col-sm-6">
							<s:textfield name="menu.menuRemark" class="form-control"
								id="menuRemark" />
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
								id="menuCode" />
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
							<s:textfield name="permissions.permName"
								class="form-control required" id="operationSort" />
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


					<div class="container-fluid catalog-edit-guide-footer">
						<div class="row">
							<div class="col-md-12">
								<div>
									<a class="task-but3" href="javascript:;" id="btnSaveMenuPower"
										style="margin-left: 190px;"> 保存 </a>
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

	<!-- 机构下拉菜单内容 -->
	<div id="menuContent" class="menuContent"
		style="display: none; position: absolute;">
		<ul id="treeDemo" class="ztree"
			style="margin-top: 0; width: 180px; height: 200px; background: white; overflow-y: auto;"></ul>
	</div>

</div>

