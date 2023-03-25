
    var imageSlider = document.querySelector(".image-slider"),
        sliderWrapper = document.querySelector(".slider-wrapper"),
        prevBtn = document.querySelector(".prev"),
        nextBtn = document.querySelector(".next"),
        currentSlide = 0;

    nextBtn.addEventListener("click", function() {
        currentSlide++;
        if (currentSlide > 5) {
            currentSlide = 0;
        }
        sliderWrapper.style.transform = "translateX(-" + currentSlide*100 + "%)";
    });

    prevBtn.addEventListener("click", function() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = 5;
        }
        sliderWrapper.style.transform = "translateX(-" + currentSlide*100 + "%)";
    });

    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('active');
    };

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('active');
    };

    const sr = ScrollReveal({
        distance: '25px',
        duration: 2500,
        reset: true
    })
    sr.reveal('.home-img', { delay: 190, origin: 'top' })
    sr.reveal('.home-text', { delay: 250, origin: 'bottom' })

    sr.reveal('.about-img,.services,.portfolio,.contact', { delay: 200, origin: 'bottom' })

