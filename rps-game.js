let prelimResult; 

function game() {
    let i; 
    let finalResult = 0; 
    for (i=0; i<5; i++){
        let playerSelection = prompt ("Rock, paper, or scissors? Choose wisely"); 
        let computerSelection = computerPlay(); 
        alert(playRound(playerSelection, computerSelection)); 
        finalResult = finalResult + prelimResult; 
        }
        if(finalResult>=1){
            alert("You win the game. Wowzers.");
        }
        else if(finalResult == 0){
            alert("It's a draw."); 
        }
        else {
            alert("Oof. You lost."); 
        }
                
    function computerPlay(){
        randomNumber(1,3); 
        function randomNumber(min, max) {
            R0 = Math.floor(Math.random() * (max - min + 1) + min); 
            }
            if (R0 == 1){
                return "rock"; 
            }
            else if (R0 == 2){
                return "paper"; 
            }
            else {
                return "scissors"; 
            }   
    };

    function playRound(playerSelection,computerSelection) {
        prelimResult = 0; 
        
        if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" || 
        playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" ||
        playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
            prelimResult = 1; 
            return "You won this rond! " + playerSelection.toLowerCase() + " beats " + computerSelection.toLowerCase() + " ."
        }
        else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper" || 
        playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock" ||
        playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors"){
            prelimResult = 0; 
            return "You tied this round! " + playerSelection.toLowerCase() + " is the same as " + computerSelection.toLowerCase() + " ."
        }
        else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors" || 
        playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper" ||
        playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
            prelimResult = -1; 
            return "You lost this round! " + playerSelection.toLowerCase() + " beats " + computerSelection.toLowerCase() + " ."
        }
    };

                
};

game()

console.log(finalResult)