/**************** 전역설정 *****************/



/**************** 사용자 지정 *****************/



/**************** 이벤트 콜백 *****************/
function onResize() {
	var wid = $(this).innerWidth();
	if(wid > 991) {

	}
	else if(wid > 767) {

	}
	else if(wid > 576) {

	}
	else {
		
	}
}

function onScroll() {

}

function onBarsClick() {
	$(".mo-wrap").stop().slideToggle(300);
}


/**************** 이벤트 등록 *****************/
$(window).resize(onResize).trigger("resize");
$(window).scroll(onScroll).trigger("scroll");

$(".mo-bars").click(onBarsClick);
