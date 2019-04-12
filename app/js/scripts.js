$('.hamburger-btn').click(function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle(100);
})