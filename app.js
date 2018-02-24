/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// var current_player1=0;
// var current_player2=0;
// var scorePlayer1=0;
// var scorePlayer2=0;
// rolldice=()=>{

//     var x= Math.floor((Math.random()*6)+1);
//     if(document.getElementById("player-1-panel").classList.contains("active")){
//         if(x==1){
//             document.getElementById("image").src="dice-1.png";
//             current_player1=0;
//             document.getElementById("player-1-panel").classList.remove("active");
//             document.getElementById("player-2-panel").classList.add("active");
            
//         }
//         else if(x==2){
//             document.getElementById("image").src="dice-2.png";
//             current_player1+=2;
//             scorePlayer1+=2;

//         }
//         else if(x==3){
//             document.getElementById("image").src="dice-3.png";
//             current_player1+=3;
//             scorePlayer1+=3;
//         }
//         else if(x==4){
//             document.getElementById("image").src="dice-4.png";
//             current_player1+=4;
//             scorePlayer1+=4;
//         }
//         else if(x==5){
//             document.getElementById("image").src="dice-5.png";
//             current_player1+=5;
//             scorePlayer1+=5;
//         }
//         else if(x==6){
//             document.getElementById("image").src="dice-6.png";
//             current_player1+=6;
//             scorePlayer1+=6;
//         }
//         document.getElementById("current-0").innerHTML=current_player1;
       
//     }
//     else if(document.getElementById("player-2-panel").classList.contains("active")){
//         if(x==1){
//             document.getElementById("image").src="dice-1.png";
//             current_player2=0;
//             document.getElementById("player-2-panel").classList.remove("active");
//             document.getElementById("player-1-panel").classList.add("active");
//         }
//         else if(x==2){
//             document.getElementById("image").src="dice-2.png";
//             current_player2+=2;
//             scorePlayer2+=2;
//         }
//         else if(x==3){
//             document.getElementById("image").src="dice-3.png";
//             current_player2+=3;
//             scorePlayer2+=3;
//         }
//         else if(x==4){
//             document.getElementById("image").src="dice-4.png";
//             current_player2+=4;
//             scorePlayer2+=4;
//         }
//         else if(x==5){
//             document.getElementById("image").src="dice-5.png";
//             current_player2+=5;
//             scorePlayer2+=5;
//         }
//         else if(x==6){
//             document.getElementById("image").src="dice-6.png";
//             current_player2+=6;
//             scorePlayer2+=6;
//         }
//         document.getElementById("current-1").innerHTML=current_player2;
//     }
//     if(scorePlayer1==100){
//         document.getElementById("name-0").innerHTML="WINNER!";
//     }
//     else if(scorePlayer2==100){
//         document.getElementById("name-2").innerHTML="WINNER!";
//     }
// }
// hold=()=>{
//    if(document.getElementById("player-1-panel").classList.contains("active")){
//     document.getElementById("score-0").innerHTML=scorePlayer1;
//     current_player1=0;
//     document.getElementById("current-0").innerHTML=current_player1;
//     document.getElementById("player-1-panel").classList.remove("active");
//     document.getElementById("player-2-panel").classList.add("active");
//    }
//    else if(document.getElementById("player-2-panel").classList.contains("active")){
//     document.getElementById("player-2-panel").classList.remove("active");
//     current_player2=0;
//     document.getElementById("current-1").innerHTML=current_player2;
//     document.getElementById("score-1").innerHTML=scorePlayer2;
//     document.getElementById("player-1-panel").classList.add("active");
// }
// }
// newgame=()=>{
// current_player1=0;
// current_player2=0;
// scorePlayer1=0;
// scorePlayer2=0;
// document.getElementById("score-0").innerHTML=scorePlayer1;
// document.getElementById("score-1").innerHTML=scorePlayer2;
// document.getElementById("current-0").innerHTML=current_player1;
// document.getElementById("current-1").innerHTML=current_player2;
// }

var score,roundScore,activePlayer,dice;
score=[0,0];
roundScore=0;
activePlayer=0;
var gamePlaying=true;
document.querySelector(".dice").style.display="none";
// dice=Math.floor(Math.random()*6+1);
document.querySelector('#current-'+activePlayer).textContent=dice;

//document.querySelector('#current-'+activePlayer).innerHTML=<em>dice</em>;
// btn=()=>{
// console.log("haha");
// }
document.getElementById("score-0").textContent='0';
document.getElementById("score-1").textContent='0';
document.getElementById("current-0").textContent='0';
document.getElementById("current-1").textContent='0';
document.querySelector(".btn-roll").addEventListener('click',()=>{
    if(gamePlaying){
        var dice =Math.floor(Math.random()*6)+1;
        //display result
        // document.querySelector(".dice").style.display="block";
        var diceDOM=document.querySelector(".dice");
        diceDOM.style.display="block";
        diceDOM.src="dice-"+dice+".png";
        //update when roller is not =1
        if(dice!=1){
            //add score
            roundScore+=dice;
            document.querySelector("#current-"+activePlayer).textContent=roundScore;
        }
        else{
            //next player
            nextPlayer();
            // document.querySelector("#player-1-panel").classList.remove('active');
            // document.querySelector("#player-2-panel").classList.add('active');
        }
    }
  
});

document.querySelector(".btn-hold").addEventListener('click',()=>{
    if(gamePlaying){
         //add current score to global score
    score[activePlayer]+=roundScore;
    //update the UI
    document.querySelector("#score-"+activePlayer).textContent=score[activePlayer];
    //checj if player won
    if(score[activePlayer]>=10){
        document.querySelector("#name-"+activePlayer).textContent="WINNER!";
        document.querySelector(".dice").style.display="none";
        document.querySelector(".player-"+activePlayer+'-panel').classList.add("winner");
        document.querySelector(".player-"+activePlayer+'-panel').classList.remove("active");
        gamePlaying=false;
    }
    else{
          //next player
        nextPlayer();
    }
    }
   })

nextPlayer=()=>{
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScore=0;
    document.querySelector("#current-0").textContent='0';
    document.querySelector("#current-1").textContent='0';
    document.querySelector("#player-1-panel").classList.toggle("active");
    document.querySelector("#player-2-panel").classList.toggle("active");
    document.querySelector(".dice").style.display="none";
}
//before
init=()=>{
score=[0,0];
roundScore=0;
activePlayer=0;
gamePlaying=true;
document.querySelector(".dice").style.display="none";
document.getElementById("score-0").textContent='0';
document.getElementById("score-1").textContent='0';
document.getElementById("current-0").textContent='0';
document.getElementById("current-1").textContent='0';
document.querySelector("#name-0").textContent="Player 1";
document.querySelector("#name-1").textContent="Player 2";
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");
}

//new game
document.querySelector(".btn-new").addEventListener('click',init);

