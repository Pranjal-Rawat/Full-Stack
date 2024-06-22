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

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navlist.classList.toggle('vclass');
});
