const year = new Date().getFullYear()
const fyear = document.getElementById('time')
fyear.textContent = `© ${year} Aaron Jiane`

const emailAlert = document.getElementById("alert-user")
const formSubmit = document.getElementsByClassName("submit-btn")

Array.from(formSubmit).forEach((button)=>{
    button.addEventListener('click', ()=>{
        emailAlert.textContent = "...Opening your email client to send the message.";
        setTimeout(()=>{
            emailAlert.textContent ="Say something nice.";
        },5000)
    })
})

const scrollUpBtn = document.getElementById('scroll-up-btn');

window.addEventListener('scroll',()=>{
    if (window.scrollY > 300) { 
        scrollUpBtn.style.display = 'block';
    } else {
        scrollUpBtn.style.display = 'none';
    }
});

scrollUpBtn.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    })
})
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollUpBtn.style.display = 'block';
    } else {
        scrollUpBtn.style.display = 'none';
    }
})
