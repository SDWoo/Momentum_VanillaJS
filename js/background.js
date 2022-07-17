const images = ['0.jpeg', '1.jpeg', '2.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

const bgImageSrc = `./img/${chosenImage}`;

const body = document.querySelector('body');

body.style.backgroundImage = `url(${bgImageSrc})`;
