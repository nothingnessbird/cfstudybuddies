'use strict';

var userArray = [];
var form = document.getElementById('form');
form.addEventListener('submit',formHarvester);

function formHarvester(event) {
  // event.preventDefault();
  var name = this.elements.name.value;
  var owlBird = this.elements.owlBird.value;
  var personality = this.elements.personality.value;
  userArray.push(name,owlBird,personality);
  sendToLocal();
};

function sendToLocal () {
  localStorage.userData = JSON.stringify(userArray);
};
