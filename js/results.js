'use strict';
//create a object constructor creating the buddies//

function Buddy (name,birdOwl,personality) {
  this.name = name;
  this.birdOwl = birdOwl;
  this.personality = personality;
  this.tally = 0;

  function addBuddy(){
    buddyArray.push(this);
  }
  addBuddy();
};

var buddyArray = [];
var user = [];
var kinley = ['Kinley','owl','intro'];
var asha = ['Asha','bird','extro'];
var ariel = ['Ariel','owl','intro'];
var java = ['Java','owl','intro'];
var tiger = ['Tiger','bird','extro'];
var marco = ['Marco','bird','extro'];
var nameArray = [kinley, asha, ariel, java, tiger, marco];

function buddyMaker () {
  for (var i = 0; i < nameArray.length; i++) {
    var buddyName = nameArray[i][0];
    var buddyBirdOwl = nameArray[i][1];
    var buddyPersonality = nameArray[i][2];
    var buddy = new Buddy(buddyName,buddyBirdOwl,buddyPersonality);
  };
};

buddyMaker();

function getFromLocal () {
  user = JSON.parse(localStorage.userData);
};

getFromLocal();
