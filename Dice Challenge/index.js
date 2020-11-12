 //Math.floor --> MAKES THE NUM INTEGER (var variable = Math.floor(Math.ramdom() *(max - min)) + min)
 var randomNumber1 = Math.floor(Math.random() * (6 - 1)) + 1
 var randomNumber2 = Math.floor(Math.random() * (6 - 1)) + 1
 var num1 = Number(randomNumber1.value)
 var num2 = Number(randomNumber2.value)
function refresh1(){
  switch(randomNumber1){
    case 1:
      document.querySelector(".dice1").src='images/dice1.png';
      break;
    case 2:
      document.querySelector(".dice1").src='images/dice2.png';
      break;
    case 3:
      document.querySelector(".dice1").src='images/dice3.png';
      break;
    case 4:
      document.querySelector(".dice1").src='images/dice4.png';
      break;
    case 5:
      document.querySelector(".dice1").src='images/dice5.png';
      break;
    case 6:
      document.querySelector(".dice1").src='images/dice6.png';
      break;
  }
}

function refresh2(){
  switch(randomNumber2){
    case 1:
      document.querySelector(".dice2").src='images/dice1.png';
      break;
    case 2:
      document.querySelector(".dice2").src='images/dice2.png';
      break;
    case 3:
      document.querySelector(".dice2").src='images/dice3.png';
      break;
    case 4:
      document.querySelector(".dice2").src='images/dice4.png';
      break;
    case 5:
      document.querySelector(".dice2").src='images/dice5.png';
      break;
    case 6:
      document.querySelector(".dice2").src='images/dice6.png';
      break;
  }
}

function theWinnerIs(){
  if(randomNumber1 === randomNumber2){
    document.querySelector(".heading").innerHTML = `<img class="flag-img" src="images/flag.png" alt="flag"> IT'S A TIE <img class="flag-img" src="images/flag.png" alt="flag">`
  }else if(randomNumber1 > randomNumber2){
    document.querySelector(".heading").innerHTML = `<img class="flag-img" src="images/flag.png" alt="flag"> PLAYER 1 WON`
  }else{
    document.querySelector(".heading").innerHTML = `PLAYER 2 WON <img class="flag-img" src="images/flag.png" alt="flag">`
  }
}

window.onload = refresh1()
window.onload = refresh2()
window.onload = theWinnerIs()
