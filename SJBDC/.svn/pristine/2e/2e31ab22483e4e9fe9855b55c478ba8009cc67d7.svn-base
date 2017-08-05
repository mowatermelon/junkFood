<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<div class="sideMenu">
    <h3>云资源管理</h3>
    <ul>
        <li><a href="platform-admin/resource/resourceManage-computer.jsp">计算资源</a></li>
        <li><a href="platform-admin/resource/resourceManage-store.jsp">存储资源</a></li>
        <li><a href="platform-admin/resource/resourceManage-web.jsp">Web服务与中间件</a></li>
        <li><a href="platform-admin/resource/resourceManage-gis.jsp">GIS云服务</a></li>
        <li><a href="platform-admin/resource/resourceManage-sytstemSet.jsp">系统资源存量</a></li>
    </ul>
</div>
<div class="sideMenu">
    <h3>订单处理</h3>
    <ul>
        <li><a href="platform-admin/order/order-queue.jsp">订单处理队列</a></li>
        <li><a href="platform-admin/order/order-giveup.jsp">废弃订单</a></li>
    </ul>
</div>
<div class="sideMenu">
    <h3>用户管理</h3>
    <ul>
          <li><a href="view/usersys/platform-admin/user/user/resourceList.jsp">用户资源总览</a></li>
        <!-- <li><a href="user-userList.jsp">用户列表</a></li>
        <li><a href="user-organizationList.jsp">机构列表</a></li> -->
        <li><a href="<%=basePath %>user/user_list.action">用户列表</a></li>
        <li><a href="<%=basePath %>user/org_list.action">机构列表</a></li>
        <li><a href="<%=basePath %>user/role_list.action">角色管理</a></li>
        <li><a href="<%=basePath %>user/perm_list.action">权限管理</a></li>
       <%--  <li><a href="<%=basePath %>user/menu_list.action">菜单管理</a></li> --%>
    </ul>
</div>
<div class="sideMenu">
    <h3>数据源管理</h3>
    <ul>
       <li><a href="platform-admin/dataSource/dataSource-myConnector.jsp">我的数据库连接</a></li>
        <li><a href="platform-admin/dataSource/dataSource-allConnector.jsp">全部数据库连接</a></li>
    </ul>
</div>
<div class="sideMenu">
    <h3>监控管理</h3>
    <ul>
        <li><a href="#">我的监控</a></li>
    </ul>
</div>
