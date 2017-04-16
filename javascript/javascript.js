var divHeight = 0;
$(document).ready(function() {
	divHeight = $(".home").height();
	setHeightToDivs(divHeight);
	$("#home-nav").click(function(){
		$("html, body").animate({ scrollTop: 1},2000);
	});
	$("#education-nav").click(function(){
		$("html, body").animate({ scrollTop: divHeight+10},2000);
	});
	$("#skills-nav").click(function(){
		$("html, body").animate({ scrollTop: (divHeight+10)*2},2000);
	});
	$("#resources-nav").click(function(){
		$("html, body").animate({ scrollTop: (divHeight+10)*3},2000);
	});
});

function setHeightToDivs(height){
	$(".education").height(height);
	$(".skills").height(height);
	$(".resources").height(height);
}



