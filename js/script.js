jQuery(document).ready(function() {
    //burger menu (resolution<=768px) 
    $('.mobile-menu').click(function(){
        $('.navigation ul').toggleClass('active');
    });
    //scroll on link in nav-menu
    $('.navigation a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
});
