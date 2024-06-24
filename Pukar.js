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
    sideNav.style.width = sideNav.style.width === '250px' ? '0' : '250px';
});

function toggleNav() {
    sideNav.style.width = sideNav.style.width === '250px' ? '0' : '250px';
}
