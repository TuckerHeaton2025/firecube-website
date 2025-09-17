let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let image_slider = document.querySelector('.image-slider');

next.addEventListener('click', function () {
    let image_slides = document.querySelectorAll('.image-slides');
    image_slider.appendChild(image_slides[0]);
})
prev.addEventListener('click', function () {
    let image_slides = document.querySelectorAll('.image-slides');
    image_slider.prepend(image_slides[image_slides.length - 1]);
})