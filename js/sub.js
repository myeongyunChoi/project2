let currentScrollTop = 0;

// 스크롤 할 때마다 실행되는 함수
$(window).scroll(function () {
    scrollController();
});

// 스크롤의 지점에 따라 사라지고 생겨나는
function scrollController() {
    currentScrollTop = $(window).scrollTop();
    if (currentScrollTop > 700) {
        $("#right_art").fadeIn();
        $("header .container").fadeOut();
    } else {
        $("#right_art").fadeOut();
        $("header .container").fadeIn()
    }
}

