let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            document.querySelectorAll('header nav a[href*="' + id + '"]').forEach(link => {
                link.classList.add('active');
            });
        }
    });
    let header = document.querySelectorAll('header');
header.classList.toggle('sticky', window.scrollY >100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('remove');

};

ScrollReveal({ 
    // reset: true, 
    distance:'80px', duration:2000, delay:200 });

ScrollReveal().reveal('.home-content, .heading', { original: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .cert-box, .contact form', { original: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { original: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { original: 'left' });

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Video Editor', 'Consultant'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
