var ctx;
var radius;

$(document).ready(function(){//html페이지가 모두 로딩되면 자동실행
	drawAnimation();
});
  
//중심점을 이동하고 애니메이션 작업을 하는 함수 호출
function drawAnimation(){
	//canvas엘리먼트 객체를 얻어내서 cvs객체변수에 저장
	var cvs = $("#canvas1")[0];
	//cvs객체의 getContext("2d")메소드를 사용해서 2D컨텍스트를 얻어냄
	ctx = cvs.getContext("2d");
	
	radius = cvs.height / 2; //정중앙 위치계산
	ctx.translate(radius, radius); //중심점을 정중앙으로 옮김
	radius = radius * 0.90 //캔버스에 그려지는 시계를 캔버스크기의 90%크기로 설정 
	setInterval(drawClock, 1000); //1초마다 drawClock()함수 호출
}
  
//애니메이션 작업 함수
function drawClock() {
    drawShape(); //시계모양 그리는 함수
    drawNumbers(); //시간을 그리는 함수
    drawTime(); //시침, 분침, 초침을 그리는 함수
}
  
//시계모양 그리는 함수 - 시계배경과 테두리를 그림
function drawShape() {
	//시계의 배경이 되는 흰색 원을 그림
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    
    //시계테두리를 금속의 느낌을 갖도록 그라디언트를 지정하고 적용
    var grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, "#333333");
    grad.addColorStop(0.5, "#FFFFFF");
    grad.addColorStop(1, "#333333");
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = "#333333";
    ctx.fill();
}
  
//시계에 1~12까지의 시간을 그리는 함수
function drawNumbers() {
	//시간의 글꼴과 글자의 맞춤을 지정
    ctx.font = radius*0.15 + "px 고딕";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    
    //1시~12시까지 시간을 계산한 위치에 그림
    for(var num = 1; num <= 12; num++){
      var ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius*0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius*0.85);
      ctx.rotate(-ang);
    }
}
  
//시침, 분침, 초침의 값을 설정하는 함수
function drawTime(){
	//현재의 시간을 얻어내서 hour, minute, second변수에 저장
    var now = new Date();//현재시간을 얻어냄
    var hour = now.getHours();//시간
    var minute = now.getMinutes();//분
    var second = now.getSeconds();//초
    
    //시침, 분침, 초침의 위치 값을 계산
    ctx.strokeStyle = "#000000"; //시침,분침의 색은 검정 
    //시침 계산
    hour = hour % 12;
    hour = (hour * Math.PI/6) + (minute * Math.PI/(6*60))
           + (second * Math.PI/(360*60));
    drawStroke(hour, radius*0.5, radius*0.07);//시/분/초침을 그리는함수 호출
    //분침 계산
    minute = (minute * Math.PI/30) + (second * Math.PI/(30*60));
    drawStroke(minute, radius*0.8, radius*0.07);
    //초침 계산
    ctx.strokeStyle = "#FF0000"; //초침의 색을 빨강
    second = (second * Math.PI/30);
    drawStroke(second, radius*0.9, radius*0.02);
}
  
//시침, 분침, 초침의 값을 그리는 함수
function drawStroke(pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}