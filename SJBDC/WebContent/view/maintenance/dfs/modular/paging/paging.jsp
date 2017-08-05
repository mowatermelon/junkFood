<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  	<script type="text/javascript">
  		//自定义div显示分页页码
		function paginationByDivId(current,count,divId){
			var preLeaveArray = [1,2,3,4,5];//前半部留下大小
			var nextLeaveArray = [4,3,2,1,0];//后半部留下大小
			var middleArray = [] ;//中间需要保留
			if(current >=4 && current <= (count.length-3)){
				//中间需要留下的内容
				middleArray = [current-2,current-1,current,current+1,current+2];
			}
			var data = {
				currentPage : current,//当前页
				countArray: count,//总页数大小的空数组，例如：array = new Array(5);
				preArray : preLeaveArray,//前半部
				nextArray : nextLeaveArray,//后半部
				middle : middleArray//中间
			};
			var pagehtml = template("paging", data);
			document.getElementById(divId).innerHTML = pagehtml;
		}
		
		//分页页码显示
		function pagination(current,count){
			var preLeaveArray = [1,2,3,4,5];//前半部留下大小
			var nextLeaveArray = [4,3,2,1,0];//后半部留下大小
			var middleArray = [] ;//中间需要保留
			if(current >=4 && current <= (count.length-3)){
				//中间需要留下的内容
				middleArray = [current-2,current-1,current,current+1,current+2];
			}
			var data = {
				currentPage : current,//当前页
				countArray: count,//总页数大小的空数组，例如：array = new Array(5);
				preArray : preLeaveArray,//前半部
				nextArray : nextLeaveArray,//后半部
				middle : middleArray//中间
			};
			var pagehtml = template("paging", data);
			document.getElementById("pagination").innerHTML = pagehtml;
		}
	</script>
	
  	<script id="paging2" type="text/html">
		{{if countArray.length <= 10}}
			{{each countArray}}
				{{if currentPage==($index+1)}}
						<a href="javascript:gotoPage({{$index+1}})" class="page-a-cur">{{$index+1}}</a>
					{{else}}
						<a href="javascript:gotoPage({{$index+1}})" class="page-a">{{$index+1}}</a>
				{{/if}}
    		{{/each}}
		 {{else}}
			{{if currentPage<preArray.length}}
				{{each preArray}}
					{{if currentPage==preArray[$index]}}
						<a href="javascript:gotoPage({{preArray[$index]}})" class="page-a-cur">{{preArray[$index]}}</a>
					{{else}}
						<a href="javascript:gotoPage({{preArray[$index]}})" class="page-a">{{preArray[$index]}}</a>
					{{/if}}
				{{/each}}
				<b>....</b>
				<a href="javascript:gotoPage({{countArray.length}})" class="page-a">{{countArray.length}}</a>
			{{else if currentPage>=(countArray.length-3)}}
				<a href="javascript:gotoPage(1)" class="page-a">1</a>
				<b>....</b>
				{{each nextArray as num index_num}}
					{{if currentPage==(countArray.length-num)}}
						<a href="javascript:gotoPage({{countArray.length-num}})" class="page-a-cur">{{countArray.length-num}}</a>
					{{else}}
						<a href="javascript:gotoPage({{countArray.length-num}})" class="page-a">{{countArray.length-num}}</a>
					{{/if}}
				{{/each}}
			{{else}}
				<a href="javascript:gotoPage(1)" class="page-a">1</a>
				<b>....</b>
				{{if middle.length>0}}
					{{each middle as middleNum m_index}}
						{{if currentPage==middleNum}}
							<a href="javascript:gotoPage({{middleNum}})" class="page-a-cur">{{middleNum}}</a>
					{{else}}
							<a href="javascript:gotoPage({{middleNum}})" class="page-a">{{middleNum}}</a>
						{{/if}}
					{{/each}}
				{{/if}}
				<b>....</b>
				<a href="javascript:gotoPage({{countArray.length}})" class="page-a">{{countArray.length}}</a>
			{{/if}}
		{{/if}}
	</script>
	
	<script id="paging" type="text/html">
		<span id="prePage">
			{{if currentPage<=1}}
				<b>上一页</b> 
			{{else}}
				<a href="javascript:gotoPage({{currentPage - 1}})" class="page-a">上一页</a> 
			{{/if}}
		</span>
		<span>{{include 'paging2'}}</span>
		<span id="nextPage">
			{{if currentPage >= countArray.length}}
				<b>下一页</b> 
			{{else}}
				<a href="javascript:gotoPage({{currentPage + 1}})" class="page-a">下一页</a> 
			{{/if}}
		</span>
		<span>总页数：{{countArray.length}}</span>
	</script>

  </head>
  
  <body>
  </body>
</html>
