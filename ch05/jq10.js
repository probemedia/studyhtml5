$(document).ready(function(){
	$("#pro").click(function(){//[결과]버튼을 클릭하면 자동실행
		//요청페이지에 전송할 데이터
		var query = {name : "kingdora", 
				     stus : "homebody"};
		//process.jsp페이지에 요청데이터를 보낸 후 결과를 반환받음
	    $.ajax({
	    	type: "POST", //전송방식
	    	url: "process.jsp", //요청페이지
	    	data: query, //전송데이터
	    	success: function(data){ //요청페이지를 실행한 결과
	    		$("#result").html(data);
	    	}
	    });
    });
});