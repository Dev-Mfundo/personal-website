$(document).ready(function() {
    $(".toggle").on("click", function() {
        $(".nav").toggle();
    });
    if ($(window).width() <= 600) {
        $(".nav").hide();
    } else {
        $(".nav").show();
    }
    $(".nav a").on("click", function() {
        if ($(window).width() <= 600) {
            $(".nav").hide();
        }
    });
});

const year = new Date().getFullYear()
const fyear = document.getElementById('time')
fyear.textContent = `© ${year} Aaron Jiane`
