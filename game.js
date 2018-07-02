


//gameVariables
var userChoice;
var Score;
//1 = win, 2 = loose, 3 = tie
var winLooseTie;

//AIVariables
var aiChoice;

//namedFunctions
//Math.floor rounds number
//Math.random() returns a random number between 0 and 1 (including 0, excluding 1).
//Multiply this number by the highest desired number (eg 10)
//Round this number
//this works because you can get a higher or lower number depending on what value you get between 1 and 0
// this then is rounded to get a actual integer
function randomNumber(){
var num = Math.floor(Math.random()*(4-1)+1);
return num;


}




userChoice = prompt("what would you like to choose ? \n(r) = rock\n (p) = paper \n (s) = scissors")

//put ai Choice into a variable to then translate it to rock paper scissors
//1 = rock, 2 = paper, 3 = scissors
aiChoice = randomNumber();



//switch statement to get user input
switch(userChoice)
{
case "r":
alert("you picked rock");

break;

case "p":
alert("you picked paper");
break;

case "s":
alert("you picked scissors");
break;


}






//random number generator, number is a value for the AIs Choice
