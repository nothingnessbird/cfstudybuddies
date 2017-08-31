'use strict';

function Buddy (name,portrait,birdOwl,personality,noise,catDog,hogwarts,travel,snacks,drinks,loc,vehicle,lang,math) {
  this.name = name;
  this.portrait = portrait;
  this.birdOwl = birdOwl;
  this.personality = personality;
  this.noise = noise;
  this.catDog = catDog;
  this.hogwarts = hogwarts;
  this.travel = travel;
  this.snacks = snacks;
  this.drinks = drinks;
  this.loc = loc;
  this.vehicle = vehicle;
  this.lang = lang;
  this.math = math;
  this.tally = 0;
  this.percentMatch = 0;
};

var buddyArray = [];

var user = [];

var kinley = ['Kinley','img/kinley.jpg','owl','intro','talk','both','r','cloak','dragon','beer', 'couch','bus','js','al'];

var asha = ['Asha','img/asha.png','bird','extro','talk','both','h','backpack','dragon','water','couch','bus','js','al'];

var ariel = ['Ariel','img/ariel.jpg','owl','intro','music','cat','r','cloak','chips','tea','cafe','bus','js','al'];

var java = ['Java','img/java.jpg','owl','intro','quiet','cat','s','sonic','chips','water','couch','bat','js','gh'];

var tiger = ['Tiger','img/tiger.png','bird','extro','quiet','dog', 'h','belt','nosnacks','tears','desk','bus','html','gh'];

var marco = ['Marco','img/marco.png','bird','extro','talk','both','g','backpack','healthy','coffee','desk','tie','html','mlb'];

var chelsea = ['Chelsea','img/chelsea.png','owl','extro','talk','dog','g','sonic','pizza','coffee','cafe','bat','js','gh'];

var maxW = ['Max','owl','img/maxW.png','intro','music','both','r','belt','pizza','soft','desk','bat','js','al'];

var nathan = ['Nathan','img/nathan.png','bird','extro','talk','dog','r','belt','chips','energy','school','tie','js','gb'];

var davidL = ['David L','img/davidL.png','bird','intro','music','dog','idk','belt','chips','tea','desk','tie','css','al'];

var cody = ['Cody','img/cody.png','owl','intro','music','cat','s','sonic','chips','water','couch','bat','js','al'];

var mark = ['Mark','img/mark.png','bird','extro','busy','dog','idk','belt','healthy','beer','cafe','bus','js','ad'];

var matt = ['Matt','img/matt.png','owl','intro','music','dog','idk','belt','pizza','beer','desk','bat','js','al'];

var davidJ = ['David J','img/davidJ.png','owl','intro','quiet','dog','g','backpack','pizza','juice','school','bus','css','mlb'];

var gabriel = ['Gabriel','img/gabriel.png','bird','intro','quiet','cat','g','cloak','pizza','coffe','school','tie','js','gh'];

var shannon = ['Shannon','img/shannon.png','bird','intro','talk','dog','idk','cloak','healthy','water','school','bat','html','al'];

var mikey = ['Mikey','img/mikey.png','bird','intro','music','dog','idk','cloak','dragon','tea','couch','tie','html','al'];

var nameArray = [kinley, asha, ariel, java, tiger, marco, chelsea, maxW, nathan, davidL, cody, mark, matt, davidJ, gabriel, shannon, mikey];

function buddyMaker () {
  for (var i = 0; i < nameArray.length; i++) {
    var buddyName = nameArray[i][0];
    var buddyPortrait = nameArray[i][1];
    var buddyBirdOwl = nameArray[i][2];
    var buddyPersonality = nameArray[i][3];
    var buddyNoise = nameArray[i][4];
    var buddyCatDog = nameArray[i][5];
    var buddyHogwarts = nameArray[i][6];
    var buddyTravel = nameArray[i][7];
    var buddySnacks = nameArray[i][8];
    var buddyBeverage = nameArray[i][9];
    var buddyLoc = nameArray[i][10];
    var buddyVehicle = nameArray[i][11];
    var buddyLanguage = nameArray[i][12];
    var buddyMathematician = nameArray[i][13];
    var buddy = new Buddy(buddyName,buddyPortrait,buddyBirdOwl,buddyPersonality,buddyNoise,buddyCatDog,buddyHogwarts,buddyTravel,buddySnacks,buddyBeverage,buddyLoc,buddyVehicle,buddyLanguage,buddyMathematician);
    buddyArray.push(buddy);
  };
};

buddyMaker();

function getFromLocal () {
  user = JSON.parse(localStorage.userData);
};

getFromLocal();

scoreMaker();

var sortArray = buddyArray;

function matchAnalyzer () {
  sortArray.sort(function(a, b) {
    return parseInt(b.tally) - parseInt(a.tally);
  });
};

matchAnalyzer();

var topMatches = [];

function topMatchMaker () {
  for (var i = 0; i < 3; i++) {
    if (sortArray[i].name === 'Asha' || sortArray[i].name === 'Java') {
      topMatches.push(sortArray[i]);
      sortArray.splice(i,1);
      i--;
    } else {
      topMatches.push(sortArray[i]);
    };
  };
};

topMatchMaker();

var resultsRender = function(){
  for (var i = 0; i < topMatches.length; i++) {
    var matchDiv = document.getElementById('match');
    var matchFig = document.createElement('figure');
    var matchPort = document.createElement('img');
    matchPort.src = topMatches[i].portrait;
    matchFig.appendChild (matchPort);
    matchDiv.appendChild(matchFig);
    var figCaption = document.createElement('figcaption');
    figCaption.innerHTML = topMatches[i].name + ' ' + topMatches[i].tally;
    matchFig.appendChild(figCaption);
  }
};

resultsRender();
