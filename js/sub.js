let currentScrollTop = 0;

// 스크롤 할 때마다 실행되는 함수
$(window).scroll(function () {
    scrollController();
});

// 스크롤의 지점에 따라 사라지고 생겨나는
function scrollController() {
    currentScrollTop = $(window).scrollTop();
    if (currentScrollTop > 800) {
        $("#right_art").fadeIn();
        $("header .container ,.fix_wrap").fadeOut();
    } else {
        $("#right_art").fadeOut();
        $("header .container ,.fix_wrap").fadeIn()
    }
}

$(function () {
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

    $(".left_menu").children().hover(function () {
        $(this).children().slideToggle();
    });

});

$(window).on('load scroll',function(){
    sct = $(window).scrollTop();
    if (sct <= 600) {
        $('.fix_txt').css({
            'transform': 'translateY(-' + 0.25 * sct + 'px)',
            'opacity': 1 - sct / 600
        });
    }
}); 


// //메뉴 슬라이드
// $(".menu").click(function () {
//     $(".left_menu").slideToggle(700);
// });

// $(".nav1").click(function () {
//     $(".nav_1").slideToggle(700);
// });

// $(".nav2").click(function () {
//     $(".nav_2").slideToggle(700);
// });

// $(".nav3").click(function () {
//     $(".nav_3").slideToggle(700);
// });

// $(".nav4").click(function () {
//     $(".nav_4").slideToggle(700);
// });

// $(".nav5").click(function () {
//     $(".nav_5").slideToggle(700);
// });


// $(window).resize(function(){
//     if(window.innerWidth>=1340){
//         $('.left_menu').css("display","flex")
//     }
// });

// $(window).resize(function(){
//     if(window.innerWidth<=1340){
//         $('.left_menu').css("display","none")
//     }
// });

