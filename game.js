//gameVariables
var userChoice;
var playerScore = 0; //initialized to 0
var aiScore = 0;
var gameLoop = true;
//1 = win, 2 = loose, 3 = tie
var winLooseTie;

//AIVariables
var aiChoice;






while(gameLoop === true)
{
userChoice = prompt(" Player Score = "+playerScore+"              AI Score = "+aiScore+"\n \n"+"what would you like to choose ? \n(r) = rock\n (p) = paper \n (s) = scissors")

//put ai Choice into a variable to then translate it to rock paper scissors
//1 = rock, 2 = paper, 3 = scissors
//Math.floor rounds number
//Math.random() returns a random number between 0 and 1 (including 0, excluding 1).
//Multiply this number by the highest desired number (eg 10)
//Round this number
//this works because you can get a higher or lower number depending on what value you get between 1 and 0
// this then is rounded to get a actual integer
  aiChoice= Math.floor(Math.random() * (4 - 1) + 1);


//switch statement to get user input
switch (userChoice) {
  //case rock
  case "r":
    alert("you picked rock");
    if (aiChoice === 1) {
      winLooseTie = 3;
    } else if (aiChoice === 2) {
      winLooseTie = 2;
    } else {
      winLooseTie =1;
    }
    break;

//case paper
  case "p":
    alert("you picked paper");
    if (aiChoice === 1) {
      winLooseTie = 1;
    } else if (aiChoice === 2) {
      winLooseTie = 3;
    } else if(aiChoice ===3) {
      winLooseTie =2;
    }

    break;

//case scissors
  case "s":
    alert("you picked scissors");
    if (aiChoice === 1) {
      winLooseTie = 2;
    } else if (aiChoice === 2) {
      winLooseTie = 1;
    } else {
      winLooseTie =3;
    }

    break;


}

//AI prompt
if (aiChoice ===1)
{
  alert("AI picks Rock!! UwU");
}
else if (aiChoice ===2)
{
  alert("AI picks Paper!! UwU");

}
else if (aiChoice ===3){
  alert("AI picks Scissors!! UwU");

}



//alert to see if player or robot won and add to Score which will be displayed at begining

if(winLooseTie === 1)
{
  playerScore++;
  alert("you win this round YAYY")
}
else if(winLooseTie === 2)
{
  alert("you loose this round NUUU")
  aiScore++;
}
else if(winLooseTie ===3)
{
  alert("issa tie this round");

}
//if player or computer has won 3 rounds they win the whole game and score is set back to 0
if(playerScore ===3)
{
  alert("PLAYER WINS WHOLE SET UWU");
  playerScore = 0;
  aiScore = 0;

}
if(aiScore ===3)
{
  alert("COMPUTER WINS WHOLE SET UWU");
aiScore = 0;
playerScore = 0;

}

}//end of loop
