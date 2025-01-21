document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextButtons = document.querySelectorAll('.next');
    const prevButtons = document.querySelectorAll('.prev');

    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    nextButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                showSlide(currentSlide);
            }
        });
    });

    prevButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
            }
        });
    });

    const startButton = document.querySelector('#slide1 .next');
    if (startButton) {
        startButton.addEventListener('click', () => {
            currentSlide = 1;
            showSlide(currentSlide);
        });
    }

    showSlide(currentSlide);
});