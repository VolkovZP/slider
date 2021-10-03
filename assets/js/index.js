'use strict';


const dataImage = ['https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hotel-promo-banner-advertisement-facebook-adv-design-template-5eda3520ad7ce39ef6555ca504cfad0b_screen.jpg?ts=1610112336',
    'https://image.freepik.com/free-vector/flat-hotel-banner-template-with-photo_23-2148927865.jpg',
    'http://simhost.org/uploads/posts/2017-09/thumbs/1506598857_jvyiswnumei.jpg',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hair-salon-summer-promo-banner-design-template-528ff4abd3f1db406d83eab50d1f7994_screen.jpg?ts=1561539295'];

const slider = new Slider(dataImage);

const [btnPrev, btnNext] = document.querySelectorAll('button');
const img = document.querySelector('.image');
img.src = slider.currentSlide;

function createButtonHandler(action) {
    return () => {
        img.src = slider[action]();
    }
}

btnNext.addEventListener('click', createButtonHandler('next'))
btnPrev.addEventListener('click', createButtonHandler('prev'))



