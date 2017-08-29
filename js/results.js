'use strict';

function Buddy (name,portrait,birdOwl,personality) {
  this.name = name;
  this.portrait = portrait;
  this.birdOwl = birdOwl;
  this.personality = personality;
  this.tally = 0;
};

var buddyArray = [];
var user = [];
var kinley = ['Kinley','../img/kinley.jpg','owl','intro'];
var asha = ['Asha','../img/asha.png','bird','extro'];
var ariel = ['Ariel','../img/ariel.jpg','owl','intro'];
var java = ['Java','../img/java.jpg','owl','intro'];
var tiger = ['Tiger','../img/tiger.png','bird','extro'];
var marco = ['Marco','../img/marco.png','bird','extro'];
var chelsea = ['Chelsea','../img/chelsea.png','owl','extro'];
var maxW = ['Max','owl','../img/maxW.png','intro'];
var nathan = ['Nathan','../img/nathan.png','bird','extro'];
var davidL = ['David L','../img/davidL.png','bird','intro'];
var cody = ['Cody','../img/cody.png','owl','intro'];
var mark = ['Mark','../img/mark.png','bird','extro'];
var matt = ['Matt','../img/matt.png','owl','intro'];
var davidJ = ['David J','../img/davidJ.png','owl','intro'];
var gabriel = ['Gabriel','../img/gabriel.png','bird','intro'];
var shannon = ['Shannon','../img/shannon.png','bird','intro'];
var mikey = ['Mikey','../img/mikey.png','bird','intro'];

var nameArray = [kinley, asha, ariel, java, tiger, marco, chelsea, maxW, nathan, davidL, cody, mark, matt, davidJ, gabriel, shannon, mikey];

function buddyMaker () {
  for (var i = 0; i < nameArray.length; i++) {
    var buddyName = nameArray[i][0];
    var buddyPortrait = nameArray[i][1];
    var buddyBirdOwl = nameArray[i][2];
    var buddyPersonality = nameArray[i][3];
    var buddy = new Buddy(buddyName,buddyPortrait,buddyBirdOwl,buddyPersonality);
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

var topMatches = [];
var sortArray = buddyArray;

function matchAnalyzer () {
  sortArray.sort(function(a, b) {
    return parseInt(b.tally) - parseInt(a.tally);
  });
};

matchAnalyzer();

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
  // topMatches[i].name.
    var matchDiv = document.getElementById('match');
    var matchFig = document.createElement('figure');
    var matchPort = document.createElement('img');
    matchPort.src = topMatches[i].portrait;
    matchFig.appendChild (matchPort);
    matchDiv.appendChild(matchFig);
    var figCaption = document.createElement('figcaption');
    figCaption.innerHTML = topMatches[i].name;
    matchFig.appendChild(figCaption);
  }
};

resultsRender();
// /////Set a caption using the name property index for each match.
