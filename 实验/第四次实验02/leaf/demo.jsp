<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="java.util.Date,java.text.*" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@page import="java.sql.*" %>
<%@page import="java.sql.ResultSet" %>
<%@page import="java.sql.SQLException" %>



<!DOCTYPE html>
<html lang="zh-cmn-Hans">
	<head>
		<meta charset="utf-8" />
		<meta name="Keywords" content="classmate"/>
		<meta name="Description" content=""/>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<meta name="author" content="MO"/>
		<meta charset="utf-8"/>
		<meta name="X-US-Compative" content="IE=edge,chorme=1" />
		<meta name="robots" content="index,follow"/>
		<meta name="render" content="webkit"/>
		<meta http-equiv="Cache-Control" content="no-siteapp"/>
		<link rel="shortcut icon" href="img/ico.ico)"/>
		<link rel="stylesheet" type="text/css" href="css/leaf.css"/>
		<script src="js/leaf.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="js/jquery-1.8.3.min.js" ></script>
		<script type="text/javascript" src="js/jquery.tabslet.min.js" ></script>
		<script src="js/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" src="js/jquery.poptrox.js" ></script>
		<title>CLOVER HOUSE</title>
		
		<script>
			$(function() {				
				$('#bd1').poptrox({
					usePopupCaption: true
				});
			
			});
			
			
			$(function() {				
				$('#bd2').poptrox({
					usePopupCaption: true
				});
			
			});
			
			
			$(function() {				
				$('#bd3').poptrox({
					usePopupCaption: true
				});
			
			});
		</script>
		
	</head>
	<body>
		<!----------------------------HEADER  START----------------------------------------------------------->
		<div class="" id="header">
						
				<div class="" id="lo_head">
				</div>
				
				<div class="" id="li_head">
					<ul>
						<li ><a class="top_li_a" href="#">故事 story</a></li>
						<li ><a class="top_li_a" href="#ph_main">图像 photo</a></li>
						<li ><a class="top_li_a" href="#ta_main">说说 talk</a></li>
						<li ><a class="top_li_a" href="#fo_bottom">联系 link</a></li>
					</ul>
				</div>

				<div class="" id="ph_head">
					<p class="top_p ">happiness, waiting for love to appear, on behalf of love, hope, confidence and happiness.<br/></p>
					<input type="text" name="keyword01" value="look up in there" class="top_put top_lookup">
					<img class="top_lookup top_look"></img>
				</div>
				
		</div>

		<!----------------------------HEADER END----------------------------------------------------------->
		
		
		<!----------------------------MAIN START----------------------------------------------------------->
		<div class="" id="main">
			<!------------------------ST_MAIN START------------------>
				<div class="" id="st_main">
					
					<div id="wo_st">
					<marquee id="st" scrollamount="5" direction="up" scrolldelay="0" behavior="scroll" draggable="true" onmouseover="this.stop()" onmousemove="this.start()">
						<div class="" id="st_01">
							<p class="st_han">“幸运草”四叶草传说中幸运草的四片叶子所代表的意思，有以下两种讲法：</p>
							<p class="st_eng">"The four leaf clover clover" Legend of clover means there are two:</p>
							<p class="st_han">1.第一片叶子代表希望(hope)、第二片叶子代表信心(faith)、第三片叶子代表爱情(love)、而多出来的第四片叶子则代表幸运(luck)的象征。这种说法与基督教的望德、信德和爱德思想相配。</p>
							<p class="st_eng">the first leaf represents hope、and second leaf on behalf of confidence、and third leaf on behalf of love, fourth leaves and out of the lucky symbol. This statement and the Christian hope, faith and love match thoughts.</p>
							<p class="st_han">2.第一片叶子代表真爱(love)、第二片叶子代表健康(health)、第三片叶子代表名誉(glory)、第四片叶子代表财富(riches)。</p>
							<p class="st_eng">the first leaf on behalf of love, representative of the second leaf health, honorary representative of the third leaf, the fourth leaves represent wealth.</p>
						</div>				

						<div class="" id="st_02">
							<p class="st_han">在台湾， “四叶草”普遍所指的是四叶的酢浆草。</p>
							<p class="st_eng">In Taiwan, "clover" generally refers to the four leaf sorrel.</p>
							<p class="st_han">在爱尔兰民间，人们认为四叶的车轴草能带来好运，是爱尔兰最知名的国家象征，畜牧业在该国国民经济中具有举足轻重的地位，其优良牧草白车轴草一枝独秀。因此白车轴草被视为爱尔兰的国花，是用来献给爱尔兰守护圣人－－圣帕特里克的花朵，爱尔兰为了争取独立曾经和英国长期浴血抗战。因此，它的花语是－－爱国。</p>
							<p class="st_eng">In Irish folk, people thought the four leaf clover can bring good luck, is the national symbol of Ireland's most famous, the livestock industry in the national economy has a pivotal position, its excellent pasture of white clover, a branch of thriving. Therefore the white clover is regarded as the national symbol of Ireland, is dedicated to the Irish patron saint - Saint Patrick's Day flowers, Ireland to independence once and British protracted war of resistance against Japan. Therefore, it is the flower - patriotic.</p>
							<p class="st_han">在德国，幸运草被认为是自由，统一，团结，和平的象征。</p>
							<p class="st_eng">In Germany, the lucky grass is considered as a symbol of freedom, unity, unity and peace.</p>
							<p class="st_han">在欧洲，寻找四叶草还是小孩们热门的游戏，他们认为找到四叶车轴草就能得到幸福。</p>
							<p class="st_eng">In Europe, looking for the kids or clover popular game, they found a four leaf clover can get happiness.</p>
						</div>	
					</marquee>	
					</div>
					
					<div class="" id="ph_st">						
						<div class="ph_0" id="ph_01">
						</div>				

						<div class="ph_0" id="ph_02">
					
						</div>	
				
						<div class="ph_0" id="ph_03">
					
						</div>	
					</div>				
					
				</div>
				
				<!------------------------ST_MAIN END------------------>
				
				<!------------------------PH_MAIN START------------------>
				<div class="" id="ph_main">
					<div id="">
						
            			<div class="hd">
		 					<span id="span_comic" class="s" onmouseover="showcomic() ">好动漫 COMIC</span>
		 					<span id="span_scene" class="s" onmouseover="showscene() ">好风景 SCENE</span>
		 					<span id="span_movie" class="s" onmouseover="showmovie() ">好视频 MOVIE</span>
		 				</div>
		 				
		 				<div class="bd">
		 					<div id="comic">
								<div class="l_ph">
									<p>
											某年夏天，6岁小女孩竹川萤来到爷爷家度假，她闯进了传说住满妖怪的山神森林。正当她因为迷路而焦急万分的时候，一个戴着狐狸面具的大男孩出现在她面前，并引领着萤找到回家的路。<br/>&nbsp;&nbsp;&nbsp;&nbsp;原来这名叫阿银的男孩并非人类,他一旦被人类碰触就会烟消云散。随着年龄的增长，萤和阿银对彼此的情感都悄悄发生了变化，他们共同期待相聚的日子，共同期待拥抱对方……
									</p>
								</div>

								<div class="r_ph"  id="bd1">
									<ul class="">	
		 								<li><a id="ma" href="img/comic/2_1.jpg"><img class="mo01 m1"  title="妖精的尾巴" ></img></a></li>
		 								<li><a id="ma" href="img/comic/1_1.jpg">	<img class="mo02 m2"  title="未闻花名" ></p></a></li>
		 								<li><a id="ma" href="img/comic/1_2.jpg">	<img class="mo03 m3"  title="未闻花名" ></img></a></li>
		 								<li><a id="ma" href="img/comic/3_1.jpg"><img class="mo04 m4"  title="萤火之森" ></p></img></li>
									</ul>
								</div>		 						

		 					</div>
		 				
		 					<div id="scene">
								<div class="l_ph">
									<p>
											神奈川县是日本的一级行政区之一，位于东京西南部50公里处广大地区，面向太平洋。该县受太平洋暖流的影响，气候温暖、几乎不下霜；<br/>&nbsp;&nbsp;&nbsp;&nbsp;拥有日本最大的贸易港，丰富的旅游资源、优良的工业环境、众多的人口，给农业、渔业和第三产业的发展创造了良好的条件。神奈川县的人口数仅次于东京和大阪、平均人口密度超过3000人/平方公里。
									</p>
								</div>
					
								<div class="r_ph"  id="bd2">
									<ul class="">	
		 								<li><a id="ma" href="img/scene/1-1.jpg"><img class="mo01 m5" title="神户川" ></img></a></li>
		 								<li><a id="ma" href="img/scene/1-2.jpg">	<img class="mo02 m6" title="神户川" ></img></a></li>
		 								<li><a id="ma" href="img/scene/1-3.jpg">	<img class="mo03 m7" title="神户川" ></img></a></li>
		 								<li><a id="ma" href="img/scene/1-4.jpg">	<img class="mo04 m8" title="神户川" ></img></a></li>
									</ul>
								</div>
		 						
		 					</div>
		 				
		 					<div id="movie">
								<div class="l_ph">
									<p>
											小水是一位初中一年级最最平凡小女孩，她的功课一般，体育也一般，更要命的是她的长相平凡得让人过目就忘。但这位平凡的女孩偏偏爱上了学校中最优秀的万人迷男生阿亮。<br/>&nbsp;&nbsp;&nbsp;&nbsp;为了让暗恋的人能看自己人一眼，小水做了很多傻傻的小事，比如在晚会中扮丑只为听到阿亮的笑声；申请加入舞蹈社却在筛选时被学长羞辱；练习吹奏管乐只为能靠阿亮再近一点。
									</p>
								</div>
					
								<div class="r_ph"  id="bd3">
									<ul class="">	
		 								<li><a id="ma" href="img/movie/1-1.jpg">	<img class="mo01 m9" title="初恋那件小事" ></img></a></li>
		 								<li><a id="ma" href="img/movie/1-3.jpg">	<img class="mo02 m10" title="被嫌弃的松子一生" ></img></a></li>
		 								<li><a id="ma" href="img/movie/2-1.jpg">	<img class="mo03 m11" title="太阳照常升起" ></img></a></li>
		 								<li><a id="ma" href="img/movie/3-6.jpg">	<img class="mo04 m12" title="初恋那件小事" ></img></a></li>
									</ul>
								</div>
		 						
		 					</div>
		 					
		 				</div>	
		 				
					</div>
					
				</div>

				<!------------------------PH_MAIN END------------------>


				<!------------------------TA_MAIN START------------------>
				
				<div class="" id="ta_main">

							<%

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
																						
			   								
	           								String sql1="select top 1 * from article  order by img asc";
	           								
	           								String sql2="select top 1 * from article where img not in(select top 2 img from article)  order by img asc";
	           								
	           								String sql3="select top 1 * from article where img not in(select top 3 img from article)  order by img desc";


	            							ResultSet rs1=stmt.executeQuery(sql1); 	            					

							%> 	



					<div id="ta_01">
							
							<%
								if(rs1.next()){																														            					
							%>
						<div class="ph_talk p1" style="background-image: url(img/comic/<%=rs1.getString("img")%>.jpg)">
								
						</div>

						<div class="ti_talk">

							<%=rs1.getString("content")%>

						</div>
									         
						

					</div>
					
 						
					
					<div id="ta_02">
						
							<%
								}
								ResultSet rs2=stmt.executeQuery(sql2); 

								if(rs2.next()){																														            					
							%>
						
						<div class="ph_talk">
							<%=rs2.getString("content")%>
						</div>
					
						<div class="ti_talk p2" style="background-image: url(img/comic/<%=rs2.getString("img")%>.jpg)">
						
						</div>
					</div>
					
					
					
					
					<div id="ta_03">
						
							<%
								}
													          							
	            				ResultSet rs3=stmt.executeQuery(sql3); 
	            				
								if(rs3.next()){																														            					
							%>
						
						<div class="ph_talk p3" style="background-image: url(img/comic/<%=rs3.getString("img")%>.jpg)">
					
						</div>
					
						<div class="ti_talk">
							<%=rs3.getString("content")%>
						</div>
					</div>
				
							<%				}
										}
									catch(Exception ex){ 
     									ex.printStackTrace(); 
   										} 
							%> 
					
					
					
					
				</div>




				<!------------------------TA_MAIN END------------------>
		</div>
		<!----------------------------MAIN  END------------------------------------------------------------>
		
		
		<!----------------------------BOTTOM START----------------------------------------------------------->
		<div class="" id="bottom">
			<!--<a href="#st_main">mm</a>-->
			<div class="" id="m_bottom">
				AUTHOR：LEAF<BR/>
				ADDRESS：HUBEI,WUHAN,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HUAXIA<BR/>
				LOVE:READING,SPORTS,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MOIVE<BR/>
				TEL:156 XXXX XXXX<BR/>
				QQ:5345XXXXX<BR/>
			</div>	
			
			<div class="" id="fo_bottom">
				<form action="#">
					<p class="p_w" >name:<br/><input class="f_w" type="text" id="p_w01"/></p>
					<p class="p_w" >content:<br/><input class="f_w" type="text" id="p_w02"/></p>
					<button class="f_b">SUBMIT </button>
				</form>	
			</div>	
			
			<div class="" id="bo_bottom">
				Copyright By 小莫小陌 www.xmxm.net All rightReserved<br/>鄂ICP证090201号,鄂公网安备11010502023478 
			</div>				
		</div>
		<!----------------------------BOTTOM  END------------------------------------------------------------>
	</body>
</html>
