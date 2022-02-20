let refreshButton = document.querySelector(".refreshMeBtn");

refreshButton.addEventListener("click", function(){
    let rightFlag = document.querySelector(".rightFlag");
    let leftFlag = document.querySelector(".leftFlag");
    let diceOne = document.querySelector(".diceOne");
    let diceTwo = document.querySelector(".diceTwo");
    let title = document.querySelector(".title");

    //Changing the first dice
    let randomNum1 = Math.random() * 6 + 1;
    randomNum1 = Math.floor(randomNum1);
    diceOne.src = "images/dice" + randomNum1 + ".png";

    //Changing the second dice
    let randomNum2 = Math.random() * 6 + 1;
    randomNum2 = Math.floor(randomNum2);
    diceTwo.src = "images/dice" + randomNum2 + ".png";

    //Changing the title to display the winner
    if(randomNum1 > randomNum2){
        title.innerHTML = "Player One Wins";
        leftFlag.style.opacity = "1";
        rightFlag.style.opacity = "0.2";
        
    }else if(randomNum1 < randomNum2){
        title.innerHTML = "Player Two Wins";
        leftFlag.style.opacity = "0.2";
        rightFlag.style.opacity = "1";
        
    }else{
        title.innerHTML = "It's a Tie";
        rightFlag.style.opacity = "0.2";
        leftFlag.style.opacity = "0.2";
    }

});
