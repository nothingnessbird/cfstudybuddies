'use strict';

function scoreMaker () {
  user = new Buddy(user[0], user[1], user[2]);
  for (var i = 0; i < buddyArray.length; i++) {
    if (user.birdOwl === buddyArray[i].birdOwl) {
      buddyArray[i].tally++;
    }
    if (user.personality = buddyArray[i].personality) {
      buddyArray[i].tally++;
    }
    if (user.noise === 'quiet') {
      if (buddyArray[i].noise === 'quiet') {
        buddyArray[i].tally += 2;
      }
    }
    if (user.noise === 'music'){
      if (buddyArray[i].noise === 'music') {
        buddyArray[i].tally += 2;
      }
      else if (buddyArray[i].noise === 'quiet'){
        buddyArray[i].tally ++;
      }
    }
    if (user.noise === 'talk'){
      if (buddyArray[i].noise === 'talk'){
        buddyArray[i].tally += 2;
      }
      else if (buddyArray[i].noise === 'music'){
        buddyArray[i].tally ++;
      }
    }
    if (user.noise === 'busy'){
      if (buddyArray[i].noise === 'busy'){
        buddyArray[i].tally += 2;
      }
      else if (buddyArray[i].noise === 'talk' || buddyArray[i].noise === 'music') {
        buddyArray[i].tally ++;
      }
    }
  };
};
scoreMaker();
