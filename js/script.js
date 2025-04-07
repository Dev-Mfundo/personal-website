const year = new Date().getFullYear()
const fyear = document.getElementById('time')
fyear.textContent = `© ${year} Aaron Jiane`

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
