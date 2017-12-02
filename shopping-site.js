$(document).ready(function(){
  $(".hamburger_menu").click(function(){
    $(".hamburger_menu_toggle").slideToggle();
  });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});


$(window).load(function(){
  $(".list_picture img").click(function(){
    var img_src = $(this).attr("src");
    $(".display_picture img").attr("src", img_src);
  });
});
