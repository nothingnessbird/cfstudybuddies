'use strict';

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
  percentCalc();
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

function percentCalc () {
  for (var i = 0; i < buddyArray.length; i++) {
    var percent = Math.floor(parseInt(buddyArray[i].tally) / 17 * 100) + '%';
    buddyArray[i].percentMatch = percent;
  }
};

var resultsRender = function(){
  for (var i = 0; i < topMatches.length; i++) {
    var matchDiv = document.getElementById('match');
    var matchFig = document.createElement('figure');
    var matchPort = document.createElement('img');
    matchPort.src = topMatches[i].portrait;
    matchFig.appendChild (matchPort);
    matchDiv.appendChild(matchFig);
    var figCaption = document.createElement('figcaption');
    figCaption.innerHTML = topMatches[i].name + ' ' + topMatches[i].percentMatch;
    matchFig.appendChild(figCaption);
  }
};

resultsRender();
