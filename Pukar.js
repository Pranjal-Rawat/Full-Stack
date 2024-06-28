// Smooth scrolling for anchor links
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
const closeBtn = document.getElementById('closeBtn');
const sideNavLinks = document.querySelectorAll('.sideNavLink');
const donateBtn = document.getElementById('donateBtn');

burger.addEventListener('click', () => {
    sideNav.classList.toggle('open');
    burger.classList.toggle('active');
    if (sideNav.classList.contains('open')) {
        donateBtn.style.display = 'none';
    } else {
        donateBtn.style.display = 'block';
    }
});

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        sideNav.classList.remove('open');
        burger.classList.remove('active');
        donateBtn.style.display = 'block';
    });
}

sideNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideNav.classList.remove('open');
        burger.classList.remove('active');
        donateBtn.style.display = 'block';
    });
});

// JavaScript for navbar and donate button hide/show on scroll
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        navbar.classList.add('slide-up');
        donateBtn.classList.add('hide');
    } else {
        navbar.classList.remove('slide-up');
        donateBtn.classList.remove('hide');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
