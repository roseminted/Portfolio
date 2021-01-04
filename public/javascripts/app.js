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

// MODAL
const modal = document.getElementById('myModal');

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

const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}


// LOADER
$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});