document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const burger = document.getElementById('burger');
const navlist = document.getElementById('navlist');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navlist.classList.toggle('vclass');
});

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('slide-up');
    } else {
        // Scrolling up
        navbar.classList.remove('slide-up');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});