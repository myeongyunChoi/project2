$(function () {

    // 스크롤에 따른 박스 효과
    AOS.init({ duration: 1000 });

    // 슬라이드
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
