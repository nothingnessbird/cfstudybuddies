'use strict';

var userBuddy = [];

function scoreMaker () {
  userBuddy = new Buddy(user[0], '', user[1], user[2], user[3], user[4], user[5], user[6], user[7], user[8], user[9], user[10], user[11], user[12]);
  for (var i = 0; i < buddyArray.length; i++) {
    if (userBuddy.birdOwl === buddyArray[i].birdOwl) {
      buddyArray[i].tally++;
    }
    if (userBuddy.personality === buddyArray[i].personality) {
      buddyArray[i].tally++;
    }
    if (userBuddy.noise === 'quiet') {
      if (buddyArray[i].noise === 'quiet') {
        buddyArray[i].tally += 2;
      }
    }
    if (userBuddy.noise === 'music'){
      if (buddyArray[i].noise === 'music') {
        buddyArray[i].tally += 2;
      }
      else if (buddyArray[i].noise === 'quiet'){
        buddyArray[i].tally ++;
      }
    }
    if (userBuddy.noise === 'talk') {
      if (buddyArray[i].noise === 'talk'){
        buddyArray[i].tally += 2;
      }
      else if (buddyArray[i].noise === 'music'){
        buddyArray[i].tally++;
      }
    }
    if (userBuddy.noise === 'busy') {
      if (buddyArray[i].noise === 'busy'){
        buddyArray[i].tally += 2;
      }
      else if (buddyArray[i].noise === 'talk' || buddyArray[i].noise === 'music') {
        buddyArray[i].tally++;
      }
    }
    if (userBuddy.catDog === 'cat') {
      if (buddyArray[i].name === 'Java') {
        buddyArray[i].tally += 5;
      }
      else if (buddyArray[i].catDog === 'cat' || buddyArray[i].catDog === 'both') {
        buddyArray[i].tally++;
      }
    }
    if (userBuddy.catDog === 'dog') {
      if (buddyArray[i].name === 'Asha') {
        buddyArray[i].tally += 5;
      }
      else if (buddyArray[i].catDog === 'dog' || buddyArray[i].catDog === 'both') {
        buddyArray[i].tally++;
      }
    }
    if (userBuddy.catDog === 'both') {
      if (buddyArray[i].name === 'Java' || buddyArray[i].name === 'Asha') {
        buddyArray[i].tally += 5;
      }
      else if (!buddyArray[i].catDog === 'neither') {
        buddyArray[i].tally++;
      }
    }
    if (userBuddy.catDog === 'neither') {
      if (buddyArray[i].name === 'Java' || buddyArray[i].name === 'Asha') {
        buddyArray.tally -= 5;
      }
    }
    if (userBuddy.hogwarts === 'h') {
      if (buddyArray[i].hogwarts === 'h') {
        buddyArray[i].tally += 2;
      }
      else {
        buddyArray[i].tally++;
      }
    }
    if (userBuddy.hogwarts === 'g') {
      if (buddyArray[i].hogwarts === 'g') {
        buddyArray[i].tally += 2;
      }
      else if (buddyArray[i].hogwarts !== 's') {
        buddyArray[i].tally++;
      }
    }
    if (userBuddy.hogwarts === 's') {
      if (buddyArray[i].hogwarts === 's') {
        buddyArray[i].tally += 2;
      }
      else if (buddyArray[i].hogwarts === 'r') {
        buddyArray[i].tally++;
      }
    }
    if (userBuddy.hogwarts === 'r') {
      if (buddyArray[i].hogwarts === 'r'){
        buddyArray[i].tally += 2;
      }
      else {
        buddyArray[i].tally++;
      }
    }
    if (userBuddy.travel === buddyArray[i].travel) {
      buddyArray[i].tally++;
    }
    if (userBuddy.snacks === buddyArray[i].snacks) {
      buddyArray[i].tally++;
    }
    if (userBuddy.drinks === buddyArray[i].drinks) {
      buddyArray[i].tally++;
    }
    if (userBuddy.loc === buddyArray[i].loc) {
      buddyArray[i].tally++;
    }
    if (userBuddy.vehicle === buddyArray[i].vehicle) {
      buddyArray[i].tally++;
    }
    if (userBuddy.lang !== buddyArray[i].lang) {
      buddyArray[i].tally += 4;
    }
    if (userBuddy.math === buddyArray[i].math) {
      buddyArray[i].tally++;
    }
  };
};
