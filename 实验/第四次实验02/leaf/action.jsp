<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="java.util.Date,java.text.*" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@page import="java.sql.*" %>
<%@page import="java.sql.ResultSet" %>
<%@page import="java.sql.SQLException" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title></title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
    
<%
		Date nowday=new Date();
		SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
 		String time=format.format(nowday);

		   String na=request.getParameter("name");
		   String pa=request.getParameter("password");	
	       String driverName = "com.microsoft.sqlserver.jdbc.SQLServerDriver";   //加载JDBC驱动

	       String dbURL = "jdbc:sqlserver://localhost:1433; DatabaseName=leaf";    

	       String userName = "sa";     

	       String userPwd = "mo420520";   

	       Connection dbConn; 

	       try {    

	           Class.forName(driverName);    


	           dbConn = DriverManager.getConnection(dbURL, userName, userPwd);   

	           System.out.println("Connection Successful!");

	           Statement stmt=dbConn.createStatement();

	           String sql="SELECT * FROM mo WHERE name='"+na+"' AND password='"+pa+"'";		   

	            ResultSet rs=stmt.executeQuery(sql); 

					
	            if(rs.next()){
	           	
	           			response.sendRedirect("index.jsp");			
    					}
				
			else
				{response.sendRedirect("500.jsp");}
			}





catch(Exception ex){ 
     ex.printStackTrace(); 
   } 
%>  
  </body>
</html>
