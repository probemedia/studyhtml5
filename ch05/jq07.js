$(document).ready(function(){//페이지 로드가 완료되면 발생
   $("#result").html("<img src='../images/c01_s.png' border='0'/>");
   
   $(window).resize(function(){//웹 브라우저의 창크기가 변경하면 발생
	   $("#result").html("<img src='../images/c02_s.png' border='0'/>");
   });
});
