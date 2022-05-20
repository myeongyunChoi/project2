$(function(){

    AOS.init({duration: 1200});


    $('.next').click(function () {
        $('.artwork_slide').stop().animate({ marginLeft: -396 }, 300, function () {
            $('.artwork_slide  .art_slide_box:last').appendTo('.artwork_slide');
            $('.artwork_slide').css({ marginLeft: 0 });
        });
    });

});
