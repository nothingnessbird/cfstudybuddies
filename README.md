#CFStudy
CFStudy matches you with a set of study partners so that you can make your study experience in 201 at Code Fellows better and more productive. The application is simple in its architecture: a landing page with a random study buddy generator, a form page with questions for the user to answer, and a results page that displays the study buddy match results.  

#authors
Ariel, Kinley, Marco, and Tiger.

#builtWith
JavaScript, CSS, HTML, Google Fonts (https://fonts.google.com/).

#whatTheFunctionsDo
Below please find descriptions of all the functions in the CFStudy files.

In the randomBuddy.js file, you will fine the following function.
1. randomBuddy: when the user clicks a button, the event triggers the creation of a figure tag filled with a portrait of a hardcoded buddy and text to describe the buddy.

In the createBuddies.js file, you will find the following functions.
1. Buddy: the constructor function holds the properties, which are based on the answers hardcoded to a stock of buddies, ultimately to find a match for the user.
2. buddyMaker: produces the buddy objects, so as to push those objects, with their properties, in an array called buddyArray.

In the form.js file, you will find the following functions:
1. formHarvester: when the user submits the form, the event triggers the function to push into the so-called userArray.
2. sendToLocal: sends the userArray, see formHarvester, to local storage. The function is nested within the formHarvester function since every time formHarvester fires the key value pairs need to be sent to local storage.

In the results.js file, you will find the following functions:
1. getFromLocal: pulls from local storage the user data that was sent on the form page, see sendToLocal on form.js README description.
2. scoreMaker: see separate sheet called score.js, though called on the results.js sheet.
3. matchAnalyzer: uses the variable sortArray, which is set to be the equivalent of buddyArray, to assure that the tally values returned are in descending rather than ascending order, i.e bigger numbers at the top, lower numbers at the bottom.
4. topMatchMaker: recognizes whether the topMatches include the name property 'Asha' or 'Java' so as to assure that the top matches returned yield at least three actual study buddies in addition to an animal if chosen.
5. percentCalc: calculates the percentage of the user's tally, i.e. the user's raw score as compared to the maximum value possible. In other words, a perfect match is one hundred percent.
6. resultsRender: renders the user name as well as the percentage match upon the results page by dynamically placing html elements to be filled with an existing, i.e. hardcoded, buddy's image from the array topMatches, which holds the three to possibly five top matches.

In the score.js file, you will find the following function:
1. scoreMaker: through a series of nested conditionals, the function weighs the user's questions, placed into an object called userBuddy, against the existing, hardcoded buddies, stored in buddyArray.

#shoutOuts
We would like thank our 201d25 group for answering our google survey and being incredibly supportive. Thanks also to our TAs: Brandon, Brian, Brianna, Jim, and Liz. And our instructor Nick. Kevin helped with the vector drawings. Thanks! And Kimmer found a really obnoxious error, thanks dude.
