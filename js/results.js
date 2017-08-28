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

var infoArray = [['Kinley','owl','intro']];
var buddyArray = [];

for (var i = 0; i < infoArray.length; i++) {
  var buddyName = infoArray[i][0];
  var buddyBirdOwl = infoArray[i][1];
  var buddyPersonality = infoArray[i][2];
  var buddy = new Buddy(buddyName,buddyBirdOwl,buddyPersonality);
}
