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

$('.overlay').click(function(){
    $(this).siblings().fadeOut();
    $(this).fadeOut();
});

$('.close-btn').click(function(){
    $(this).parent().fadeOut();
    $('.overlay').fadeOut();
});

$('.rating > * a').click(function(){
    $(this).parent().addClass('choise');
    $('.rating > * a').not(this).parent().removeClass('choise');
});

$('.like a').click(function(){
    openLikePopup ();
    openOverlay ();
});

$('.article-slider').slick({
    dots: true
});

$('.subscribe-email .close-btn').click(function(){
    $.cookie('modal', 'open', { expires: 7, path: '/' });
});
    
if ( $.cookie('modal') != 'open' ) {
    setTimeout (function() {
        $('.subscribe-email').fadeIn();
        $('.subscribe-email').css('display', 'flex');
    }, 0);
} 

function openOverlay () {
    $('.overlay').fadeIn();
}

function openLikePopup () {
    $('.like-popup').fadeIn();
}

function openDislkePopup () {
    $('.dislike-popup').fadeIn();
}