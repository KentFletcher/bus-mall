'use strict';

var allImages = [];
// var numberOfRounds = 5;//to be st to 25 after testing!!
// var itemsByName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum'];//add rest after testing!!
// var votes = [];//place to store votes when product clicked on

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
// new ProductImage('chair', 'img/chair.jpg');
// new ProductImage('cthulhu', 'img/cthulhu.jpg');
// new ProductImage('dog-duck', 'img/dog-duck.jpg');
// new ProductImage('dragon', 'img/dragon.jpg');
// new ProductImage('pen', 'img/pen.jpg');
// new ProductImage('pet-sweep', 'img/pet-sweep.jpg');
// new ProductImage('scissors', 'img/scissors.jpg');
// new ProductImage('shark', 'img/shark.jpg');
// new ProductImage('sweep', 'img/sweep.png');
// new ProductImage('tauntaun', 'img/tauntaun.jpg');
// new ProductImage('unicorn', 'img/unicorn.jpg');
// new ProductImage('usb', 'img/usb.gif');
// new ProductImage('water-can', 'img/water-can.jpg');
// new ProductImage('wine-glass', 'img/wine-glass.jpg');


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
//   console.log(image1.src);
//   console.log(image2.src);
//   console.log(image3.src);

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

function clickHandler(event) {
  console.log(event.target.name);

  for (var i = 0; i < allImages.length; i++) {
    if (allImages[i].name === event.target.name) {
      allImages[i].numClicked++;
    }
  }
}

image1.addEventListener('click', clickHandler);
image2.addEventListener('click', clickHandler);
image3.addEventListener('click', clickHandler);

//function to change the picture when it is clicked on
// function switchPicture() {

// }






//function to render list of clicked to the page

// function renderList() {
//   var listEl = document.getElementById('list');

//   for(var i = 0; 1 < allImages.length; i++) {
//     var clicked = document.createElement('li');
//     var render = (allImages[i].name + ' was chosen ' + allImages[i].numClicked + ' times and was show ' + allImages[i].timesRendered.value + ' times.');
//     listEl.textContent = render;
//   }
//   listEl.appendChild(clicked);
// }
// renderList();
