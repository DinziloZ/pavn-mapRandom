var imageArray = [
  'img/map1.webp',
  'img/map2.webp',
  'img/map3.webp',
  'img/map4.webp',
  'img/map5.webp',
  'img/map6.jpg',
  'img/map7.webp',
  'img/map8.webp',
  'img/map9.webp',
  'img/map10.webp',
];

var textArray = [
  'Ichiban',
  'Train Station',
  'Beast Football',
  'Trebuchet',
  'Buzz Ball',
  'Blackhole Lab',
  'Beast Hockey',
  'Safely Afloat',
];

let random_check = false;
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  console.log(array);
}

function randomImg() {
  shuffleArray(imageArray);
  shuffleArray(imageArray);
  for (let i = 1; i <= 10; i++) {
    // var audio = document.getElementById('myAudio');
    // audio.play();
    var img_export = 'item' + i.toString();
    var imageElement = document.getElementById(img_export);
    imageElement.src = imageArray[i - 1];
  }
}

function spinImage() {
  if (!random_check) {
    randomImg();
    random_check = true;
  }
  var container = document.querySelector('.container');
  var slide = document.querySelector('.slide-track');
  slide.classList.add('slide-animation');

  setTimeout(function () {
    slide.classList.remove('slide-animation');
  }, 3000);

  random_check = false;
}
