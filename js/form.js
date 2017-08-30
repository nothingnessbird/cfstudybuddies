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
  var hogwarts = this.elements.hogwarts.value;
  var travel = this.elements.travel.value;
  var snacks = this.elements.snacks.value;
  var drinks = this.elements.drinks.value;
  var studyPlace = this.elements.studyPlace.value;
  var vehicle = this.elements.vehicle.value;
  var lang = this.elements.lang.value;
  var math = this.elements.math.value;

  userArray.push(name, owlBird, personality, noise, catDog,hogwarts,travel,snacks,drinks,studyPlace,vehicle,lang,math);
  sendToLocal();
};

function sendToLocal () {
  localStorage.userData = JSON.stringify(userArray);
};
