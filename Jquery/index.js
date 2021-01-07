$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    animateOut: 'animate__fadeOut',
    animateIn: 'animate__fadeInRight',
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:true
        }
    }
})