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
    // new Buddy(buddyName,buddyBirdOwl,buddyPersonality);
    new Buddy (nameArray[i][0], nameArray[i][1], nameArray[i][2]);
    // var buddyName = nameArray[i][0];
    // var buddyBirdOwl = nameArray[i][1];
    // var buddyPersonality = nameArray[i][2];
  }
};

buddyMaker();

function getFromLocal () {
  user = JSON.parse(localStorage.userData);
};

getFromLocal();

function scoreMaker () {
  user = new Buddy(user[0], user[1], user[2]);
  for (var i = 0; i < buddyArray.length[i]; i++) {
    if (user.birdOwl === buddyArray[i].birdOwl)
      buddyArray[i].tally++;
    if (user.personality = buddyArray[i].personality)
      buddyArray[i].tally++;
  };
};
scoreMaker();
