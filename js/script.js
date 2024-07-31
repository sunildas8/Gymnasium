// --------banner-part--------//

$(".banner-slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
})
  
// -------about-part--------//

$('.venobox').venobox();

// -------class-part--------//

$("#colorful").colorfulTab(); 

// -------testimonial-part--------//
 
$(".details-slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
})

// -------counter-part--------//

$('.counter').counterUp({
    delay: 10,
    time: 1000,
});

// -------market-part--------//

$(".slider").slick({
    arrows: true,
    slidesToShow: 5,
    centerMode: true,
    centerPadding:"0",
    prevArrow:'<i class="fas fa-chevron-left prev"></i>',
    nextArrow:'<i class="fas fa-chevron-right next"></i>',
})

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);