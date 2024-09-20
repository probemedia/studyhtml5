$(document).ready(function(){//html페이지가 모두 로딩되면 자동실행
	drawShape();
});
  
function drawShape(){
	//canvas엘리먼트 객체를 얻어내서 cvs객체변수에 저장
	var cvs = $("#canvas1")[0];
	//cvs객체의 getContext("2d")메소드를 사용해서 2D컨텍스트를 얻어냄
	var ctx = cvs.getContext("2d");
	  
	//사각형 그리기
	ctx.fillStyle = "#00FFFF";//채우기 색 지정
	ctx.fillRect(10,10,80,50);//채워진 사각형
	ctx.strokeStyle = "#0000FF";//선 색 지정
	ctx.strokeRect(100,10,80,50);//속이 빈 사각형
	  
	//글자그리기
	ctx.font = "40px Arial";//글꼴크기와 폰트
	ctx.strokeText("Hello",200,50);//테두리만 있는 글자
	ctx.fillText("테스트",300,50);//색이 채워진 글자
	  
	//채워진 삼각형 그리기
	ctx.fillStyle = "#000000";
	ctx.beginPath();
	ctx.moveTo(75,150);
	ctx.lineTo(100,175);
	ctx.lineTo(100,125);
	ctx.fill();//속 채운다
	  
	//웃는 얼굴 그리기
	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	ctx.arc(175,175,50,0,Math.PI*2,true);//얼굴
    ctx.moveTo(210,175);
	ctx.arc(175,175,35,0,Math.PI,false);//입
	ctx.moveTo(165,165);
	ctx.arc(160,165,5,0,Math.PI*2,true);//왼쪽눈
	ctx.moveTo(195,165);
	ctx.arc(190,165,5,0,Math.PI*2,true);//오른쪽눈
	ctx.stroke();//테두리 그린다
 }