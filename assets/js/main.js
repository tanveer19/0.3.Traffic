(function($) {
    "use strict";

    jQuery(document).ready(function($) {

       

        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        });

        $(".logo-carousel").owlCarousel({
            margin: 30,
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 2,
                },
                768: {
                    items: 4,
                },
                992: {
                    items: 3
                }
            }
        });

        $(".case-studies-carousel").owlCarousel({
            margin: 30,
            dots: true,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3
                }
            }
        });

        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
        });

        $(".testimonial-carousel-home-2").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
        });

        $(".boxed-layout").on('click', function() {
            $("body").addClass("boxed-layout").removeClass("wide-layout");
            $(".layout-changer span").removeClass("active");
            $(this).addClass("active");
        });
        
        $(".wide-layout").on('click', function() {
            $("body").addClass("wide-layout").removeClass("boxed-layout");
            $(".layout-changer span").removeClass("active");
            $(this).addClass("active");
        });

        $(".search-trigger").on('click', function() {
            $(".search-bar-wrap").addClass("active");
        });

        $(".search-close").on('click', function() {
            $(".search-bar-wrap").removeClass("active");
        });

        $(".menu-trigger").on('click', function() {
            $(".off-canvas-menu").addClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").addClass("active");
        });

        $(".menu-close, .off-canvas-menu-shade").on('click', function() {
            $(".off-canvas-menu").removeClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").removeClass("active");
        });

        $(".single-testimonial-box").hover(function() {
            $(".single-testimonial-box").removeClass('active');
            $(this).addClass('active');
        });

        $(".video-play-btn").magnificPopup({
            type: 'video'
        });

        $("#traffic-menu").slicknav({
            prependTo:'#mobile-menu-wrap',
            allowParentLinks:true
        });

    });


    jQuery(window).load(function() {


    });


}(jQuery));
   // var uluru = {lat: -25.363, lng: 131.044};
   //  $('.map')
   //    .gmap3({
   //      zoom: 4,
   //      center: uluru
   //    })
   //    .marker({
   //      position: uluru
   //    })
   //    .infowindow({
   //      content: "Hello from Uluru"
   //    })
   //    .then(function (infowindow) {
   //      var map = this.get(0);
   //      var marker = this.get(1);
   //      marker.addListener('click', function() {
   //        infowindow.open(map, marker);
   //      });
   //    });