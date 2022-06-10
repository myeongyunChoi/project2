$(function () {

    // 스크롤에 따른 박스 효과
    AOS.init({ duration: 1000 });

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

    //윈도우 사이즈에 따른 상단 메뉴바 변화
    $(window).resize(function(){
        if(window.innerWidth>=1340){
            $('.left_menu').css("display","flex")
        }
    });

    $(window).resize(function(){
        if(window.innerWidth<=1340){
            $('.left_menu').css("display","none")
        }
    });


    //미술작품 슬라이드
    $('.next').click(function () {
        $('.artwork_slide').stop().animate({ marginLeft: -402 }, 700, function () {
            $('.art_slide_box:first').appendTo('.artwork_slide');
            $('.artwork_slide').css({ marginLeft: 0 });
        });
    });

    $('.prev').click(function () {
        $('.artwork_slide .art_slide_box:last').prependTo('.artwork_slide');
        $('.artwork_slide').css('margin-left', -402);
        $('.artwork_slide').stop().animate({ marginLeft: 0 }, 700)

    });


    // 보도자료&공지사항 변경
    notice_head.onclick=function fade_in(){
        notice.style.display="block";
        press.style.display="none";
        press_head.style.color="#777"
        notice_head.style.color="white"
    }

    press_head.onclick=function fade_out(){
        notice.style.display="none";
        press.style.display="block";
        notice_head.style.color="#777"
        press_head.style.color="white"
    }


    // 보도자료 좌측 이미지 시간마다 변경
    const img_array=["img/main/news_main.jpg","img/main/news_slide.jpg","img/main/news_slide_two.jpg"];
    let index=0;
    function change(){
        more_img.src=img_array[index];
        index++;
        if(index>=img_array.length){
            index=0;
        }
    }
    setInterval(change,1500);
});
