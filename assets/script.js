const arrowLeftElement = document.querySelector('.arrow_left');
const arrowRightElement = document.querySelector('.arrow_right');
const bannerImageElement = document.querySelector('.banner-img');
const bannerParagraphElement = document.querySelector('#banner p');

// Test pour les dots

const dotElements = document.getElementsByClassName('dot');  // liste de boutons
const dotSelected = document.querySelector('.dot_selected') // inutile ? 


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
  document.getElementById('dot'+[index]).classList.remove('dot_selected');
  if (index >= slides.length-1) {
    index = 0
  } else {
    index++
  }
  console.log(index);
  bannerImageElement.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerParagraphElement.innerHTML = slides[index].tagLine;
  document.getElementById('dot'+[index]).classList.add('dot_selected');
});

arrowLeftElement.addEventListener('click', () => {
  document.getElementById('dot'+[index]).classList.remove('dot_selected');
  if (index <= 0) {
    index = slides.length-1
  } else {
    index--
  }
  console.log(index);
  bannerImageElement.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerParagraphElement.innerHTML = slides[index].tagLine;
  document.getElementById('dot'+[index]).classList.add('dot_selected');
});

const dotPressed = e => {
  document.getElementById('dot'+[index]).classList.remove('dot_selected');
  index = e.target.id.substring(3);  // substring ==> index = 'dot'+ [index], - trois lettres du string, soit le "dot", donc = chiffre
  console.log(index);
  console.log(e.target.id);  // Get ID of Clicked Element
  bannerImageElement.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerParagraphElement.innerHTML = slides[index].tagLine;
  document.getElementById('dot'+[index]).classList.add('dot_selected');
}

for (let dotElement of dotElements) {
  dotElement.addEventListener("click", dotPressed); // Rend les boutons clickables, après avoir créé la fonction e
}