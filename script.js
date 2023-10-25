let roundCounter = 1;
let playerScore = 0;
let computerScore = 0;

function computerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    let computerChoice;
    switch(randomNum){
        case 0: document.getElementById("computer-sign").innerHTML = "✊";
            computerChoice = "rock";
        break;
        case 1: document.getElementById("computer-sign").innerHTML = "✋";
            computerChoice = "paper";
        break;
        case 2: document.getElementById("computer-sign").innerHTML = "✌";
            computerChoice = "scissors";
        break;
    }
    return computerChoice;
}

function playerChoice(choice){
    let compChoice = computerChoice();
    let res;

        switch(choice.id){
            case "btn-rock": document.getElementById("player-sign").innerHTML = "✊";
                res = result("rock",compChoice,roundCounter);
                if(res == "player")
                    playerScore++;
                if(res == "computer")
                    computerScore++;
                roundCounter++; 
                break;
            case "btn-paper": document.getElementById("player-sign").innerHTML = "✋";
                res = result("paper",compChoice,roundCounter);
                if(res == "player")
                    playerScore++;
                if(res == "computer")
                    computerScore++;
                roundCounter++; 
                break;
            case "btn-scissors": document.getElementById("player-sign").innerHTML = "✌";
                res = result("scissors",compChoice,roundCounter);
                if(res == "player")
                    playerScore++;
                if(res == "computer")
                    computerScore++;
                roundCounter++; 
                break;
        }

        document.getElementById("player-score").innerHTML = "Score : "+playerScore;
        document.getElementById("computer-score").innerHTML = "Score : "+computerScore;

        if(playerScore >= 5){
            roundCounter = 1;
            playerScore = 0;
            computerScore = 0;
            alert("You win!");
        }
        
        if(computerScore >= 5){
            roundCounter = 1;
            playerScore = 0;
            computerScore = 0;
            alert("You lost!");
        }


}

 

function result(playerChoice,computerChoice,round){

    let result;

    if(playerChoice == "rock" && computerChoice == "rock"){
        document.getElementById("gametext-header").innerHTML = "Round "+round + ": Draw!";
        result = "draw";
    }
    else if(playerChoice == "rock" && computerChoice == "paper"){
        document.getElementById("gametext-header").innerHTML = "Round "+round + ": You lose!";
        result = "computer";
    }
    else if(playerChoice == "rock" && computerChoice == "scissors"){
        document.getElementById("gametext-header").innerHTML = "Round "+round + ": You win!";
        result = "player";
    }
    ///////////////////////
    else if(playerChoice == "paper" && computerChoice == "rock"){
        document.getElementById("gametext-header").innerHTML = "Round "+round + ": You win!";
        result = "player";
    }
    else if(playerChoice == "paper" && computerChoice == "paper"){
        document.getElementById("gametext-header").innerHTML = "Round "+round + ": Draw!";
        result = "draw";
    }
    else if(playerChoice == "paper" && computerChoice == "scissors"){
        document.getElementById("gametext-header").innerHTML = "Round "+round + ": You lose!";
        result = "computer";
    }
    //////////////////////
    else if(playerChoice == "scissors" && computerChoice == "rock"){
        document.getElementById("gametext-header").innerHTML = "Round "+round + ": You lose!";
        result = "computer";
    }
    else if(playerChoice == "scissors" && computerChoice == "paper"){
        document.getElementById("gametext-header").innerHTML = "Round "+round + ": You win!";
        result = "player";
    }
    else if(playerChoice == "scissors" && computerChoice == "scissors"){
        document.getElementById("gametext-header").innerHTML = "Round "+round + ": Draw!";
        result = "draw";
    }

    return result;
        
    
}