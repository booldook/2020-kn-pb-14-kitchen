/**************** 전역설정 *****************/



/**************** 사용자 지정 *****************/



/**************** 이벤트 콜백 *****************/
function onResize() {
	var wid = $(this).innerWidth();
	$(".mo-wrap").hide();
}

function onScroll() {
	var scTop = $(this).scrollTop();
	if(scTop > $(this).innerHeight()) $(".bt-up").css({"opacity": 1, "visibility": "visible"});
	else $(".bt-up").css({"opacity": 0, "visibility": "hidden"});
}

function onBarsClick() {
	$(".mo-wrap").stop().slideToggle(300);
}

function onUpClick() {
	$("html, body").stop().animate({"scrollTop": 0}, 500);
}


/**************** 이벤트 등록 *****************/
$(window).resize(onResize).trigger("resize");
$(window).scroll(onScroll).trigger("scroll");

$(".mo-bars").click(onBarsClick);
$(".bt-up").click(onUpClick);
