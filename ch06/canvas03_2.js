$(document).ready(function(){//html페이지가 모두 로딩되면 자동실행
	drawShape();
});
  
function drawShape(){
	//canvas엘리먼트 객체를 얻어내서 cvs객체변수에 저장
	var cvs = $("#canvas1")[0];
	//cvs객체의 getContext("2d")메소드를 사용해서 2D컨텍스트를 얻어냄
	var ctx = cvs.getContext("2d");
	  
	//패턴을 생성하고 적용
	var image = new Image(); //Image객체 생성
	image.src="https://probemedia.github.io/studyhtml5/images/b2s.png"; //이미지 파일 지정
	image.onload = function(){//이미지가 로딩되면 자동실행
	   var ptn = ctx.createPattern(image,'repeat'); //패턴생성
	   ctx.rect(0,0,200,100); //사각형생성
	   ctx.fillStyle = ptn; // 채우기스타일로 패턴을 지정
	   ctx.fill(); //패턴으로 사각형 채우기
	} 
 }