$(document).ready(function(){
    //[결과]버튼을 클릭하면 jq09.txt가 <div id="result">엘리먼트에 로드
   $("#pro").click(function(){
	  $("#result").load("https://probemedia.github.io/studyhtml5/ch05/jq09.txt", function(response,stu,xhr){
	     if(stu=="success")//서버요청이 성공시
	    	alert("로드 성공!"); //메시지상자 표시
	     if(stu=="error")//서버요청 실패시
	    	alert("에러: "+xhr.status+": "+xhr.stu);
	  });
   });
});