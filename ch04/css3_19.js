$(document).ready(function(){//웹 페이지가 로드되면 수행
	$("#img1").click(function(){//이미지를 클릭하면 자동실행
		$("#dialog").css("display", "block");//대화상자가 화면에 표시됨
		$("#modalimg").attr("src", $("#img1").attr("src"));//html태그에 속성추가
		$("#modalimg").attr("alt", $("#img1").attr("alt"));
		$("#imgcaption").text($("#img1").attr("alt"));//html태그의 내용지정
	});
	
	$("#closebtn").click(function(){ //대화상자의 닫기버튼을 클릭하면 자동실행
		$("#dialog").css("display", "none");//대화상자가 화면에 표시 안됨
	});

});