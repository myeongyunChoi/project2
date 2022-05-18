$(function(){

    $('.prev').click(function(){
        $('.artwork_slide .art_slide_box:last').prependTO('.artwork_slide');
        $('.artwork_slide').css('margin-left', -396.06);
        $('.artwork_slide').stop().animate({ marginLeft: 0 }, 300)
    });

    $('.next').click(function () {
        $('.artwork_slide').stop().animate({ marginLeft: -396 }, 300, function () {
            $('.artwork_slide  .art_slide_box:last').appendTo('.artwork_slide');
            $('.artwork_slide').css({ marginLeft: 0 });
        });
    });

});