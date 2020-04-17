 $(window).load(function() {
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

jQuery(document).ready(function() {
  jQuery('.tabs .tab-links a').on('click', function(e)  {
    var currentAttrValue = jQuery(this).attr('href');


        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

        
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
      });
});

jQuery(document).ready(function() {
  jQuery('.s-tabs .s-tab-links li a').on('click', function(e)  {
    var currentAttrValue = jQuery(this).attr('href');

        
        jQuery('.s-tabs ' + currentAttrValue).show().siblings().hide();

      
        jQuery(this).parent('li').addClass('s-active').siblings().removeClass('s-active');

        e.preventDefault();
      });
});

 jQuery(document).ready(function(){  
  jQuery('.skillbar').each(function(){  
    jQuery(this).appear(function() {  
      jQuery(this).find('.skillbar-bar').animate({  
        width:jQuery(this).attr('data-percent')  
      },2000);  
    });  
  });  
});

$(function () {   
  var filterList = {
    init: function () {

      $('#portfoliolist').mixitup({
        targetSelector: '.portfolio',
        filterSelector: '.filter',
        effects: ['scale'],
        easing: 'smooth',
       
          onMixEnd: filterList.hoverEffect()
        });   
    },      
    hoverEffect: function () {
    }
  };

    filterList.init();  
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
