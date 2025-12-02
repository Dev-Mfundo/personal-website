document.addEventListener('DOMContentLoaded', ()=>{
    const skillCategories = document.querySelectorAll('.skill-category')       
    const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)'
            }, index * 100)
        }
    })
}, { threshold: 0.1 })
            
skillCategories.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
    })
})

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
