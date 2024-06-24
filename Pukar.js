// JavaScript for smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// JavaScript for burger menu functionality
const burger = document.getElementById('burger');
const navlist = document.getElementById('navlist');
const sideNav = document.getElementById('sideNav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    sideNav.classList.toggle('open');
});

// JavaScript for navbar hide/show on scroll
const navbar = document.querySelector('.navbar');
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
