$(document).ready(function(){
	$("#b1").click(function(){//<button id="b1">엘리먼트를 클릭하면 자동실행
	   $("#b2").text($("p").text());//두번째 버튼의 레이블 변경 
	});
	  
	$("#b2").click(function(){//<button id="b2">엘리먼트를 클릭하면 자동실행
       //이미지 표시
	   $("#display").html("<img src='https://probemedia.github.io/studyhtml5/images/p1_s.png' border='0'/>");
	});
});