// sidebar
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        // hide sidebar
        $('#sidebar').removeClass('active');
        // hide overlay
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        // open sidebar
        $('#sidebar').addClass('active');
        // fade in the overlay
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

//Scroll to top when arrow up clicked BEGIN
$(window).scroll(function () {
    const height = $(window).scrollTop();
    if (height > 100) {
        $('#backToTop').fadeIn();
    } else {
        $('#backToTop').fadeOut();
    }
});
$(document).ready(function () {
    $("#backToTop").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

// Get the modal
const modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementsByClassName('gifs');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

const showModal = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}