'use strict';

var allImages = [];
var clicks = 0;
var numberOfRounds = 25;

function ProductImage(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesRendered = 0;
  this.numClicked = 0;
  allImages.push(this);

}

new ProductImage('bag', 'img/bag.jpg');
new ProductImage('banana', 'img/banana.jpg');
new ProductImage('bathroom', 'img/bathroom.jpg');
new ProductImage('boots', 'img/boots.jpg');
new ProductImage('breakfast', 'img/breakfast.jpg');
new ProductImage('bubblegum', 'img/bubblegum.jpg');
new ProductImage('chair', 'img/chair.jpg');
new ProductImage('cthulhu', 'img/cthulhu.jpg');
new ProductImage('dog-duck', 'img/dog-duck.jpg');
new ProductImage('dragon', 'img/dragon.jpg');
new ProductImage('pen', 'img/pen.jpg');
new ProductImage('pet-sweep', 'img/pet-sweep.jpg');
new ProductImage('scissors', 'img/scissors.jpg');
new ProductImage('shark', 'img/shark.jpg');
new ProductImage('sweep', 'img/sweep.png');
new ProductImage('tauntaun', 'img/tauntaun.jpg');
new ProductImage('unicorn', 'img/unicorn.jpg');
new ProductImage('usb', 'img/usb.gif');
new ProductImage('water-can', 'img/water-can.jpg');
new ProductImage('wine-glass', 'img/wine-glass.jpg');


var image1 = document.getElementById('img1');
var image2 = document.getElementById('img2');
var image3 = document.getElementById('img3');

// Function to cycle through images and randomly choose one to be displayed.
function genRandomImage() {
  var index = Math.floor(Math.random() * allImages.length);
  while (
    allImages[index].name === image1.name ||
    allImages[index].name === image2.name ||
    allImages[index].name === image3.name
  ){
    index = Math.floor(Math.random() * allImages.length);
  }
  return allImages[index];
}

//function to render 3 random images to the page.
function renderProducts() {
  var newImage1 = genRandomImage();
  image1.src = newImage1.imagePath;
  image1.name = newImage1.name;
  newImage1.timesRendered++;

  var newImage2 = genRandomImage();
  image2.src = newImage2.imagePath;
  image2.name = newImage2.name;
  newImage2.timesRendered++;

  var newImage3 = genRandomImage();
  image3.src = newImage3.imagePath;
  image3.name = newImage3.name;
  newImage3.timesRendered++;
}
renderProducts();

//function to render list of clicked to the page
function renderList() {
  var listEl = document.getElementById('list');

  for(var i = 0; i < allImages.length; i++) {
    var clicked = document.createElement('li');
    var renderInfo = ('The ' + allImages[i].name + ' was chosen ' + allImages[i].numClicked + ' times and was shown ' + allImages[i].timesRendered + ' times.');
    clicked.textContent = renderInfo;
    listEl.appendChild(clicked);
  }
}
// renderList();

function clickHandler(event) {
  clicks++;
  //   console.log(event.target.name);
  var listEl = document.getElementById('list');
  listEl.innerHTML = '';
  renderProducts();
  for (var i = 0; i < allImages.length; i++) {
    if (allImages[i].name === event.target.name) {
      allImages[i].numClicked++;
      console.log(clicks);
    }if (clicks > numberOfRounds) {
      event = false;
      alert('Thanks, checkout your favorites!');
      renderList();
      break;
    }
  }
}

image1.addEventListener('click', clickHandler);
image2.addEventListener('click', clickHandler);
image3.addEventListener('click', clickHandler);
