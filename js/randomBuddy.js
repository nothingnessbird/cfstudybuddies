'use strict';

var randomIndex = 0;

var randButton = document.getElementById('randBuddy');
var buddySpot = document.getElementById('randSpot');
randButton.addEventListener('click', randomBuddy);

function randomBuddy (event) {
  var maxIndex = buddyArray.length;
  randomIndex = Math.floor((Math.random() * maxIndex));
  buddySpot.innerText = '';
  var randFig = document.createElement('figure');
  var randPort = document.createElement('img');
  randPort.src = buddyArray[randomIndex].portrait;
  randFig.appendChild (randPort);
  buddySpot.appendChild(randFig);
  var randCaption = document.createElement('figcaption');
  randCaption.innerHTML = buddyArray[randomIndex].name;
  randFig.appendChild(randCaption);
};
