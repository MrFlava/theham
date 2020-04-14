 $(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});
jQuery(document).ready(function ($) {

    $('.navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });
    
});
 $(".nav .nav-link").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});
$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

$(document).ready(function(){
  $('.bxslider').bxSlider({
    pager:false,
    controls:true,
    pagerCustom: '#bx-pager1'
  });
  $('.bxslider2').bxSlider({
   pagerCustom: '#bx-pager'
 });
});
