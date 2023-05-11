const arrowLeftElement = document.querySelector('.arrow_left');
const arrowRightElement = document.querySelector('.arrow_right');
const bannerImageElement = document.querySelector('.banner-img');
const bannerParagraphElement = document.querySelector('#banner p');

let index = 0;

const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];

arrowRightElement.addEventListener('click', () => {
  index++;
  bannerImageElement.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerParagraphElement.innerHTML = slides[index].tagLine;
});
