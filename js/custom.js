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
                items: 1,
            },
            600:{
                items: 2,
            },
            1000:{
                items: 3, // Change this to the desired number of items for the 1000px breakpoint
            },
            1200:{
                items: 4,
            }
        }
    });
});
