$(document).ready(function(){
    $("#a1").click(function(){
	  $("#content").load("https://raw.githubusercontent.com/probemedia/web/master/res/intro_01.txt");
    });
    $("#a2").click(function(){
	  $("#content").load("https://raw.githubusercontent.com/probemedia/web/master/res/intro_02.txt");
    });
});