const arrowLeftElement = document.querySelector('.arrow_left');
const arrowRightElement = document.querySelector('.arrow_right');
const bannerImageElement = document.querySelector('.banner-img');
const bannerParagraphElement = document.querySelector('#banner p');
const dotContainerElement = document.querySelector('.dots');

// Test pour les dots

// const dotElements = document.getElementsByClassName('dot');  // liste de boutons
// const dotSelected = document.querySelector('.dot_selected') // inutile ?

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

slides.forEach((item, i) => {
  const dotElement = document.createElement('span');
  dotElement.classList.add('dot');
  if (i === index) {
    dotElement.classList.add('dot_selected');
  }

  dotElement.addEventListener('click', () => {
    index = i;
    changeImgAndParagraphElements();
    changeDotSelectedCss();
  });
  dotContainerElement.appendChild(dotElement);
});

const changeImgAndParagraphElements = () => {
  bannerImageElement.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerParagraphElement.innerHTML = slides[index].tagLine;
};

const changeDotSelectedCss = () => {
  const dotsElements = document.querySelectorAll('.dot');
  dotsElements.forEach((dotElement, i) => {
    dotElement.classList.remove('dot_selected');
    if (i === index) {
      dotElement.classList.add('dot_selected');
    }
  });
};

arrowRightElement.addEventListener('click', () => {
  index++;
  // document.getElementById('dot' + [index]).classList.remove('dot_selected');
  if (index > slides.length - 1) {
    index = 0;
  }
  changeImgAndParagraphElements();
  changeDotSelectedCss();
  // document.getElementById('dot' + [index]).classList.add('dot_selected');
});

arrowLeftElement.addEventListener('click', () => {
  index--;
  // document.getElementById('dot' + [index]).classList.remove('dot_selected');
  if (index < 0) {
    index = slides.length - 1;
  }
  changeImgAndParagraphElements();
  changeDotSelectedCss();
  // document.getElementById('dot' + [index]).classList.add('dot_selected');
});

// const dotPressed = e => {
//   document.getElementById('dot'+[index]).classList.remove('dot_selected');
//   index = e.target.id.substring(3);  // substring ==> index = 'dot'+ [index], - trois lettres du string, soit le "dot", donc = chiffre
//   console.log(index);
//   console.log(e.target.id);  // Get ID of Clicked Element
//   bannerImageElement.src = `./assets/images/slideshow/${slides[index].image}`;
//   bannerParagraphElement.innerHTML = slides[index].tagLine;
//   document.getElementById('dot'+[index]).classList.add('dot_selected');
// }

// for (let dotElement of dotElements) {
//   dotElement.addEventListener("click", dotPressed); // Rend les boutons clickables, après avoir créé la fonction e
// }
