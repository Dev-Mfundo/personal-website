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

const emailAlert = document.getElementById("alert-user")
const formSubmit = document.getElementsByClassName("submit-btn")

Array.from(formSubmit).forEach((button) => {
    button.addEventListener('click', () => {
        emailAlert.textContent = "...Opening your email client to send the message.";
        setTimeout(()=>{
            emailAlert.textContent ="Say something nice.";
        },5000)
    })
})