// for search bar
$(document).on("click", ".search", function () {
    $(".search-bar").addClass("search-bar-active");
});

$(document).on("click", ".search-cancel", function () {
    $(".search-bar").removeClass("search-bar-active");
});

// login-sign-up-form----------------

$(document).on("click", ".user, .already-account", function () {
    $(".form").addClass("login-active").removeClass("sign-up-active");
    $(".search-bar").removeClass("search-bar-active");
});

//////////////////////
$(document).on("click", ".sign-up-btn", function () {
    $(".form").addClass("sign-up-active").removeClass("login-active");
});

/////////////////////
$(document).on("click", ".form-cancel", function () {
    $(".form").removeClass("login-active");
});

//////////////////////
$(document).on("click", ".form-cancel", function () {
    $(".form").removeClass("login-active").removeClass("sign-up-active");
});

// full-slider-script
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplaySpeed: 1000,
        dots:false,
        nav:false,
        items: 1,
        loop: true,
        smartSpeed:1500,
        autoplayHoverPause : true ,
    });
});



// // for-responsive-menu
$(document).ready(function () {
    $(".toggle").click(function () {
        $(".toggle").toggleClass("times");
        $(".navigation").toggleClass("active");
    });
});

// navBar
window.onscroll = function(){
    if(scrollY >= 100){
        // to add btn scroll up
        $('.btnUp').addClass('show');
        // to add bg for navbar
        $('nav').addClass('activeNav');
    }else{
        // to remove btn scroll up
        $('.btnUp').removeClass('show');
        // to remove bg for navbar
        $('nav').removeClass('activeNav');
    }
}
// return scroll to 0
$('.btnUp').click(function(){
    window.scrollTo({
        top: 0
    })
})
// $('.list').click(function(){
//     $(this).addClass('activeBg');
//     $(this).siblings().removeClass('activeBg');
    
// })