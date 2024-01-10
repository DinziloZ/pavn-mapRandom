var imageArray = [
  ['img/map1.webp', 'Ichiban'],
  ['img/map2.webp', 'Final Destination'],
  ['img/map3.webp', 'Beast Football'],
  ['img/map4.webp', 'Trebuchet'],
  ['img/map5.webp', 'Buzz Ball'],
  ['img/map6.jpg', 'Typhoon'],
  ['img/map7.webp', 'Beast Hockey'],
  ['img/map8.webp', 'Blackhole Lab'],
  ['img/map9.webp', 'Into the Game'],
  ['img/map10.webp', 'Safely Afloat'],
];

let random_check = false;
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i][0], array[j][0]] = [array[j][0], array[i][0]];
    [array[i][1], array[j][1]] = [array[j][1], array[i][1]];
  }
  console.log(array);
}

function randomImg() {
  shuffleArray(imageArray);
  shuffleArray(imageArray);
  shuffleArray(imageArray);
  shuffleArray(imageArray);
  shuffleArray(imageArray);
  for (let i = 1; i <= 10; i++) {
    var audio = document.getElementById('myAudio');
    audio.play();
    var img_export = 'item' + i.toString();
    var imageElement = document.getElementById(img_export);
    imageElement.src = imageArray[i - 1][0];
  }
}

function spinImage() {
  if (!random_check) {
    randomImg();
    random_check = true;
    var container = document.querySelector('.container');
    var result = document.getElementById('result');
    var slide = document.querySelector('.slide-track');
    var clickedButton = document.querySelector('.clicked-button');
    clickedButton.classList.add('hidden');
    slide.classList.add('slide-animation');
    result.innerHTML = 'Spinning';
  }
  setTimeout(function () {
    result.innerHTML = 'Result will be displayed in 3';
  }, 3000);

  setTimeout(function () {
    slide.classList.remove('slide-animation');
    slide.classList.add('slide-animation2');
    result.innerHTML = 'Result will be displayed in 2';
  }, 4000);

  setTimeout(function () {
    slide.classList.remove('slide-animation2');
    slide.classList.add('slide-animation3');
    result.innerHTML = 'Result will be displayed in 1';
  }, 5000);

  setTimeout(function () {
    slide.classList.remove('slide-animation3');
    result.innerHTML = imageArray[1][1];
  }, 6000);

  setTimeout(function () {
    clickedButton.classList.remove('hidden');
    random_check = false;
  }, 7000);
}
