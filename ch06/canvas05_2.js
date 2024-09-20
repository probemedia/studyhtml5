var ctx; //캔버스 객체 저장 변수
var image; //이미지 객체 저장 변수
var dx = 0.75; //가로로 이동할 너비
var imgW,  imgH;//이미지의 가로너비, 세로높이
var x = 0, y = 0; //이미지의 시작점. x값은 계산에의해 결정, y값은 고정
var clearX, clearY;//캔버스 가로너비, 세로높이 클리어
var canvasX = 300;//캔버스 가로너비
var canvasY = 100;//캔버스 세로높이
var speed = 50; //0.05초마다 애니메이션 실행

$(document).ready(function(){//html페이지가 모두 로딩되면 자동실행
	drawAnimation();
});
  
//이미지를 로딩하고 애니메이션 작업을 하는 함수 호출
function drawAnimation(){
    //canvas엘리먼트 객체를 얻어내서 cvs객체변수에 저장
	var cvs = $("#canvas1")[0];
	//cvs객체의 getContext("2d")메소드를 사용해서 2D컨텍스트를 얻어냄
	ctx = cvs.getContext("2d");
	 
	//이미지 객체를 생성하고 이미지 지정
	image = new Image(); //Image객체 생성
	image.src="https://probemedia.github.io/studyhtml5/images/b3.png"; //이미지 파일 지정
	
	image.onload = function(){//이미지가 로딩되면 자동실행
	  imgW = image.width; //이미지의 가로너비
	  imgH = image.height; //이미지의 세로높이
	  if (imgW > canvasX) {//이미지의 가로너비가 캔버스너비보다 크면
		  x = canvasX - imgW; //이미지의 x표시위치가 음수 : 이미지가 중간부터 잘려나옴
		  clearX = imgW; //캔버스 클리어 가로너비에 이미지의 너비사용 
	  }else//이미지의너비가 캔버스너비보다 작거나 같으면
		  clearX = canvasX; //캔버스 클리어 가로너비에 이미지의 캔버스너비사용
	  
	  if (imgH > canvasY) //이미지의 세로높이가 캔버스높이보다 크면
		  clearY = imgH; //캔버스 클리어 세로높이에 이미지높이 사용 
	  else //이미지의 세로높이가 캔버스높이보다 작거나 같으면
		  clearY = canvasY;//캔버스 클리어 세로높이에 캔버스높이 사용
	
	  //주어진 speed(0.05초)시간마다 draw함수 호출
	  //speed숫자가 클수록 이미지 롤링(리프레시)속도 느려짐
	  return setInterval(draw, speed);
	} 
}

//캔버스에 이미지 롤링하는 애니메이션 함수
function draw(){
	ctx.clearRect(0,0,clearX,clearY);//캔버스 클리어
    if (imgW <= canvasX) {//이미지의 가로너비가 캔버스너비보다 작거나 같으면
      //이미지의 시작점 재설정
      if (x > canvasX) //이미지 시작점이 캔버스너비보다 크면 
  	    x = 0; //시작점 x를 0으로 재설정
      //추가이미지 그림
      if (x > (canvasX-imgW))//이미지 시작점이 (캔버스너비-이미지너비)보다 크면  
  	    ctx.drawImage(img,x-canvasX+1,y,imgW,imgH);//지정위치에 이미지 그림
    }else {//이미지의 가로너비가 캔버스너비보다 크면
      //이미지의 시작점 재설정
      if (x > canvasX) //이미지 시작점이 캔버스너비보다 크면
  	    x = canvasX-imgW; //시작점 x를 (캔버스너비-이미지너비)값으로 재설정
      //추가이미지 그림
      if (x > (canvasX-imgW)) //이미지 시작점이 (캔버스너비-이미지너비)보다 크면   
  	    ctx.drawImage(image,x-imgW+1,y,imgW,imgH); //지정위치에 이미지 그림
    }
    ctx.drawImage(image,x,y,imgW,imgH); //지정위치에 이미지 그림
  
    x += dx; //이미지 시작점 dx크기만큼 이동
}