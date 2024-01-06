document.addEventListener('DOMContentLoaded', function () {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelectorAll('.nav a');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');

        navbar.forEach(link => {
            link.classList.toggle('active');
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
    
            let targetId = this.getAttribute('href').substring(1);
            let targetSection = document.getElementById(targetId);
    
            if (targetSection) {
                smoothScrollTo(targetSection);
            }
        });
    });
    

    function smoothScrollTo(element) {
        const offset = 50;
        const elementPosition = element.offsetTop;

        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', function () {
        let scrollY = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (scrollY >= offset && scrollY < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                document.querySelectorAll('header nav a[href*="' + id + '"]').forEach(link => {
                    link.classList.add('active');
                });
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', scrollY > 100);

        menuIcon.classList.remove('bx-x');
        navbar.forEach(link => {
            link.classList.remove('remove');
        });
    });

    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { original: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .cert-box, .contact form', { original: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { original: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { original: 'left' });

    const typed = new Typed('.multiple-text', {
        strings: ['Information Technology', 'Computer Technician', 'Full-Stack Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
