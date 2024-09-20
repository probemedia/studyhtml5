$(document).ready(function(){//html페이지가 모두 로딩되면 자동실행
	drawShape();
});
  
function drawShape(){
	//canvas엘리먼트 객체를 얻어내서 cvs객체변수에 저장
	var cvs = $("#canvas1")[0];
	//cvs객체의 getContext("2d")메소드를 사용해서 2D컨텍스트를 얻어냄
	var ctx = cvs.getContext("2d");
	  
	//이미지 객체를 생성하고 이미지를 그린다.
	var image = new Image(); //Image객체 생성
	   image.src="../images/cover_s.png"; //이미지 파일 지정
	   image.onload = function(){//이미지가 로딩되면 자동실행
	   ctx.drawImage(image,0,0);//캔버스의 (0,0)좌표에 이미지를 그린다.
	} 
}