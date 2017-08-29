'use strict';

var userArray = [];
var form = document.getElementById('form');
form.addEventListener('submit',formHarvester);

function formHarvester(event) {
  userArray = [];
  var name = this.elements.name.value;
  var owlBird = this.elements.owlBird.value;
  var personality = this.elements.personality.value;
  var noise = this.elements.noise.value;
  var catDog = this.elements.catDog.value;
  userArray.push(name, owlBird, personality, noise, catDog);
  sendToLocal();
};

function sendToLocal () {
  localStorage.userData = JSON.stringify(userArray);
};
