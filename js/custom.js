$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        autoplay: true,
      items: 3,
      margin: 10,
      loop: true,
      nav: true,
      responsive:{
        0:{
            items:2,
  
        },
        600:{
            items:3,

        },
        1000:{
            items:1,
                 },
                 1200:{
                    items:4,
                         }
    }
    });
  });
  