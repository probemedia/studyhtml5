$(document).ready(function(){
	$("#b1").click(function(){//[id="pic1"인 이미지 숨기기]버튼 클릭
		$("#pic1").hide();
	});
	
	$("#b2").click(function(){//[class="c1"인 이미지 숨기기]버튼 클릭
		$(".c1").hide();
	});
	
    $("#b3").click(function(){//[모든 이미지 숨기기]버튼 클릭
    	$("img").hide();
	});
    
    $("#b4").click(function(){//[숨기기 취소]버튼 클릭
    	$("img").show();
	});
});