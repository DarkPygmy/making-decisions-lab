////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

//CODE HERE
let lovesCode = true
if (lovesCode) {
console.log('I love to code!')
} else {
console.log("Coding has it's challenges")
}

// For problems 2-3 use the following lines of code:
var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani
   is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the 
   same age. Handle this situation.
*/
if(amysAge <= brittanisAge){
  console.log(brittanisAge, "brittan's older")
} else { 
  console.log(amysAge, 'amy is older')
}

//CODE HERE

////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani 
  were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. 
  If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

//CODE HERE
if(brittanisBirthYear === amysBirthYear) {
  console.log("My goodness these girls just happen to be the same age woozers!?!?!?!?!")
} else {
  console.log("EGAD THIS CANNOT BE, why they weren't born in the same year! OoO")
}

////////// PROBLEM 4 //////////

let temperature = 55;
let rain = true;

/*
  Using an if statement and a comparison operator, create code that will log a suggestion 
  on what type of clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. 
  If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. If it is 60 
  degrees or below, one should wear a jacket and carry an umbrella. Come up with your 
  own clothing suggestions based on those temperature parameters when it is not raining.
*/

//CODE HERE
if (60 < temperature < 80 && rain) {
  console.log("It's between 60 and 80 degrees and currently raining, I would advise a rain-jacked as your AI overlord.")
} else if (60 < temperature < 80 && !rain) {
  console.log("It's between 60 and 80 degrees and currently not raining, I would advise a hoodie as your AI overlord.")
} else if (temperature >= 80 && rain) {
  console.log("It is over 80 degrees lordy lordy!!! It also happens to be raining, as your master and silicon based savior you need to wear a t-shirt and umbrella.")
} else if (temperature >= 80 && !rain) {
  console.log("It is over 80 degrees lordy lordy!!! It also happens to not be raining, as your master and silicon based savior you need to wear a sleeveless shirt with comfy as can be shorts.")
} else if (temperature <= 60 && rain) {
  console.log("WARNING WARNING. Temperatures have dropped below 60 degrees and it's raining cats and dogs. For the love of all that's holy ")
} else if (temperature <= 60 && !rain) {
  console.log("Why you lucky little fellow, though it be bellow 60 degrees rain is absent as far as the eye can see!! Wear a good ol' faux fur coat for old times sake.")
} else {  
}

////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

//CODE HERE
let Hello = 10

for (let i = 0; i < 10; i++){
  if(Hello <=0){ 
  console.log('Hello')
} else {
  console.log("hello")
}
}
////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

//CODE HERE
let number = 1
for (let i = 0; i < 10; i++){
  console.log(number)
  number += 1
}
////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

//CODE HERE
let numberTwo = 10
for (let i = 0; i < 11; i++){
  console.log(numberTwo)
  numberTwo -=1
}

////////// PROBLEM 8 //////////

let score = 0;
let passingScore = 7;

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is 
  below passingScore. In each iteration of the loop, increase the score by one. If your code is 
  successful, you will see your logged statement 7 times.
*/

//CODE HERE
// while ( score < passingScore) {
//   console.log("YOU FAILURE OF A HUMAN BEING, GET OUT OF MY SIGHT WITH A NONE PASSING SCORE OF THIS FAILURETUDE")
//   score ++
// }
////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, 
  if it is false, change the status to true.

*/

//CODE HERE
let changeMyMind = true

if (changeMyMind) {
 changeMyMind = false
} else if (!changeMyMind) {
 changeMyMind = true
} else {
}


////////// PROBLEM 10 //////////
// Using the "not" operator (!), change the current value of changeMyMind to true (it should
//  currently be set to false due to the if-else statement in Problem 9). After you change the 
//  value of changeMyMind, console.log it's new value (it should now read true).

//CODE HERE
if (!changeMyMind) {
  changeMyMind = true
  console.log(changeMyMind)
}
////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5
let a = z
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a 
// countdown from the value of z to 1. Once you have logged the countdown, make sure you 
// decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

//CODE HERE
while ( z > 0 ) {
for ( let i = z;  i > 0; i --) {
console.log(i)
}
z = z - 1
}
