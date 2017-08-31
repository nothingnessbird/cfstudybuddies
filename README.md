# cfStudy
Study Buddy Finder for Code Fellows 201


#whatTheFunctionsDo
Below please find descriptions of all the functions in the CFStudy files.

In the landing.js file, there are no functions at this time.

In the form.js file, you will find the following functions:
1. formHarvester: when the user submits the form, the event triggers the function to push into an array, the so-called userArray, key value pairs, the form question and the user answer.
2. sendToLocal: sends the userArray, see formHarvester, to local storage. The function is nested within the formHarvester function since every time formHarvester fires the key value pairs need to be sent to local storage.

In the results.js file, you will find the following functions:
1. Buddy: the constructor function holds the property values, which are based on the questions asked on the form, that the user sends.
2. buddyMaker: produces the existing buddies and the new user, the objects, so as to push the key value pairs, into an array called buddyArray.
3. getFromLocal: pulls from local storage the user data that was sent on the form page, see sendToLocal on form.js README description.
4. scoreMaker: see separate sheet called score.js, though called on the results.js sheet.
5. matchAnalyzer: uses the variable sortArray, which is set to be the equivalent of buddyArray, to assure that the tally values returned are in descending rather than ascending order, i.e bigger numbers at the top, lower numbers at the bottom.
6. topMatchMaker: recognizes whether there is a match between the user and name values 'Asha' and 'Java' so as to add them to the topMatches array so that the dog and cat, 'Asha' and 'Java', show on the results page.
7. percentCalc: calculates the percentage of the user's tally, i.e. the user's raw score as compared to the maximum value possible. In other words, a perfect match is one hundred percent.
8. resultsRender: renders the user name as well as the percentage match upon the results page by dynamically placing html elements to be filled with an existing, i.e. hardcoded, buddy's image from the variable topMatches, which holds the three to possibly five top matches.

In the score.js file, you will find the following function:
1. scoreMaker: through a series of nested if statements weighs the user's questions, placed into an array called userBuddy, against the existing, hardcoded buddies, stored in buddyArray.

# Shout Outs
Kimmer found a really obnoxious error, thanks dude.

(WorkFlow)
*naming your branches that you work on*
[letter of your name] -------[file name]-------[what feature you are working on]


Each person works on a different files. (HTML, CSS, javascript ).
however, If two people work on the same file then they pair program together.

Check the problem domain then, pseudo code. Explain with the group and let everyone
weigh in so that everyone understands what is being coded and anyone can pickup where
you left off.

what/ This is the problem domain
how/ this is pseudo code
why/ These are user stories
where/
when /
