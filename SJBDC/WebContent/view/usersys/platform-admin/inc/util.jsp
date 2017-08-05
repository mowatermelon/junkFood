<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!-- confirm模态窗口 -->
<div aria-hidden="true" id="confirmModel" role="dialog" tabindex="-1" class="modal fade" style="display: none;">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button aria-label="Close" data-dismiss="modal" class="close" type="button"><span aria-hidden="true">×</span></button>
          <h4 class="modal-title">提示</h4>
        </div>
        <div class="modal-body">
         	 <p id="confrimMessage">是否确定？</p>
        </div>
        <div class="modal-footer">
        <button id="btnOk" type="button" class="btn btn-primary">确定</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
      </div>
      </div>
    </div>
</div>
