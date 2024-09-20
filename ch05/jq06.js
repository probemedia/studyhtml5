$(document).ready(function(){
	$("input").focus(function(){//<input>엘리먼트가 포커스를 받으면 발생
		$(this).css("background-color","#cccccc");
	})
	$("input").blur(function(){//<input>엘리먼트가 포커스를 잃으면 발생
		$(this).css("background-color","#ffffff");
	})
});