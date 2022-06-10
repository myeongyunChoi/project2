

$(function () {
    //상단 메뉴바 내려오는 효과
    $(".left_menu > li").hover(function () {
        $(this).children().slideDown();
    }, function () {
        $(this).children().slideUp();
    });

    //메뉴 슬라이드
    $(".menu").click(function () {
        $(".left_menu").slideToggle(700);
    });

    $(".nav1").click(function () {
        $(".nav_1").slideToggle(700);
    });

    $(".nav2").click(function () {
        $(".nav_2").slideToggle(700);
    });

    $(".nav3").click(function () {
        $(".nav_3").slideToggle(700);
    });

    $(".nav4").click(function () {
        $(".nav_4").slideToggle(700);
    });

    $(".nav5").click(function () {
        $(".nav_5").slideToggle(700);
    });


    $(window).resize(function () {
        if (window.innerWidth >= 600) {
            $('.left_menu').css("display", "flex")
        }
    });

    $(window).resize(function () {
        if (window.innerWidth <= 599) {
            $('.left_menu').css("display", "none")
        }
    });

    //right_txt 화살표
    $(".arrow").hover(function () {
        $(this).children().animate({
            width: 'show'
        });
    }, function () {
        $(this).children().animate({
            width: 'hide'
        });
    }
    );
});

let currentScrollTop = 0;

// 스크롤 할 때마다 실행되는 함수
$(window).scroll(function () {
    scrollController();
});


// right_art 내리면 보여지는

if (window.matchMedia("(min-width: 600px)").matches) { 
    function scrollController() {
        currentScrollTop = $(window).scrollTop();
        if (currentScrollTop > 900) {
            $("#right_art").fadeIn(800);
            $(".right_txt").slideDown(1800);
            $("header .container ,.fix_wrap").fadeOut();
        } else {
            $("#right_art").fadeOut(800);
            $(".right_txt").slideUp(1800);
            $("header .container ,.fix_wrap").fadeIn()
        }
    }
} else { 
    function scrollController() {
        currentScrollTop = $(window).scrollTop();
        if (currentScrollTop > 439) {
            $("#right_art").fadeIn(800);
            $(".right_txt").slideDown(1800);
            $("header .container ,.fix_wrap").fadeOut();
        } else {
            $("#right_art").fadeOut(800);
            $(".right_txt").slideUp(1800);
            $("header .container ,.fix_wrap").fadeIn()
        }
    }
}



//fix_txt,fadeOut
if (window.matchMedia("(min-width: 600px)").matches) { 
    $(window).on('load scroll', function () {
        sct = $(window).scrollTop();
        if (sct <= 600) {
            $('.fix_txt').css({
                'transform': 'translateY(-' + 0.5 * sct + 'px)',
                'opacity': 1 - sct / 600
            });
        }
    });
} else { 
    $(window).on('load scroll', function () {
        sct = $(window).scrollTop();
        if (sct <= 439) {
            $('.fix_txt').css({
                'transform': 'translateY(-' + 0.5 * sct + 'px)',
                'opacity': 1 - sct / 300
            });
        }
    });
}





