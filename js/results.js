'use strict';

function Buddy (name,birdOwl,personality) {
  this.name = name;
  this.birdOwl = birdOwl;
  this.personality = personality;
  this.tally = 0;
};

var buddyArray = [];
var user = [];
var kinley = ['Kinley','owl','intro'];
var asha = ['Asha','bird','extro'];
var ariel = ['Ariel','owl','intro'];
var java = ['Java','owl','intro'];
var tiger = ['Tiger','bird','extro'];
var marco = ['Marco','bird','extro'];
var chelsea = ['Chelsea','owl','extro'];
var maxW = ['Max','owl','intro'];
var nathan = ['Nathan','bird','extro'];
var davidL = ['David L','bird','intro'];
var cody = ['Cody','owl','intro'];
var mark = ['Mark',' ','extro'];
var matt = ['Matt','owl','intro'];
var davidJ = ['David J','owl','intro'];
var gabriel = ['Gabriel','bird','intro'];
var shannon = ['Shannon','bird','intro'];
var mikey = ['Mikey','bird','intro'];
var nameArray = [kinley, asha, ariel, java, tiger, marco];

function buddyMaker () {
  for (var i = 0; i < nameArray.length; i++) {
    var buddyName = nameArray[i][0];
    var buddyBirdOwl = nameArray[i][1];
    var buddyPersonality = nameArray[i][2];
    var buddy = new Buddy(buddyName,buddyBirdOwl,buddyPersonality);
    buddyArray.push(buddy);
  };
};

buddyMaker();

function getFromLocal () {
  user = JSON.parse(localStorage.userData);
};

getFromLocal();

function scoreMaker () {
  user = new Buddy(user[0], user[1], user[2]);
  for (var i = 0; i < buddyArray.length; i++) {
    if (user.birdOwl === buddyArray[i].birdOwl)
      buddyArray[i].tally++;
    if (user.personality = buddyArray[i].personality)
      buddyArray[i].tally++;
  };
};
scoreMaker();
