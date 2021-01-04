// LOADER
$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});

// SIDEBAR
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        // hide sidebar
        $('#sidebar').removeClass('active');
        // hide overlay
        $('.overlay').removeClass('active');
        $('.navbar').show();
    });

    $('#sidebarCollapse').on('click', function () {
        // open sidebar
        $('#sidebar').addClass('active');
        // fade in the overlay
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        $('.navbar').hide();
    });
});


// LETTER ANIMATIONS
const textWrapper = document.querySelector('.banner-text .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.banner-text .letter ',
        scale: [0, 1],
        duration: 3000,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 1)
    }).add({
        targets: '.banner-text',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 2000
    });


// CHECK IF NAVBAR SCROLLED
function checkScroll() {
    const startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}

// CHANGE ACTIVE CLASS
$('#sidebar li').click(function () {
    $('li').removeClass('active');
    $(this).addClass('active');
})


