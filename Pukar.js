document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const burger = document.getElementById('burger');
const sideNav = document.getElementById('sideNav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    if (sideNav.style.width === '250px') {
        sideNav.style.width = '0';
    } else {
        sideNav.style.width = '250px';
    }
});

function toggleNav() {
    if (sideNav.style.width === '250px') {
        sideNav.style.width = '0';
    } else {
        sideNav.style.width = '250px';
    }
}
