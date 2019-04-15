$('.hamburger-btn').click(function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle(100);
})

$(document).scroll(function(){
    var posScroll = $(window).scrollTop();
    var heightPanel = $('header').innerHeight();

    if (posScroll >= heightPanel) {
        $('.fixed').addClass('scroll');
    } else {
        $('.fixed').removeClass('scroll');
    }
});
