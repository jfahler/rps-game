let playerBoard = document.querySelector(".player-board");
let computerBoard = document.querySelector(".computer-board");
let gameResult = document.querySelector(".column");

let playerScore = 0; 
let computerScore = 0; 

playerBoard.textContent = 'Player: ' + playerScore; 
computerBoard.textContent = 'Computer: ' + computerScore;



const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', (e) => {

    function game() {
        let computerSelection = computerPlay();

        let playerSelection = button.id; 
        console.log(playerSelection); 

        
        
    
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
        
        function jsUcfirst(string) 
            {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

         

        console.log(computerSelection); 

            function playRound() {
                

        
                prelimResult = 0; 
                
                if(playerSelection.toString() === "paper" && computerSelection === "rock" || 
                playerSelection.toString() === "rock" && computerSelection === "scissors" ||
                playerSelection.toString() === "scissors" && computerSelection === "paper"){
                    prelimResult = prelimResult + 1; 
                    gameResult.textContent = "You won this round! " + jsUcfirst(playerSelection) + " beats " + computerSelection + "."
                    playerBoard.textContent = 'Player: ' + (playerScore = playerScore + 1); 
                    computerBoard.textContent = 'Computer: ' + (computerScore = computerScore - 1); 
                }
                else if(playerSelection.toString() === "paper" && computerSelection === "paper" || 
                playerSelection.toString() === "rock" && computerSelection === "rock" ||
                playerSelection.toString() === "scissors" && computerSelection === "scissors"){
                    prelimResult = prelimResult + 0; 
                    gameResult.textContent = "You tied this round! " + jsUcfirst(playerSelection) + " is the same as " + computerSelection + "."
                    playerBoard.textContent = 'Player: ' + (playerScore = playerScore + 0); 
                    computerBoard.textContent = 'Computer: ' + (computerScore = computerScore + 0); 
                }
                else if (playerSelection.toString() === "paper" && computerSelection === "scissors" || 
                playerSelection.toString() === "rock" && computerSelection === "paper" ||
                playerSelection.toString() === "scissors" && computerSelection === "rock"){
                    prelimResult = prelimResult - 1; 
                    gameResult.textContent = "You lost this round! " + jsUcfirst(computerSelection) + " beats " + playerSelection + "."
                    playerBoard.textContent = 'Player: ' + (playerScore = playerScore - 1); 
                    computerBoard.textContent = 'Computer: ' + (computerScore = computerScore + 1); 
                }
                

            };

                
            
            playRound(playerSelection,computerSelection); 
            
            function reset() {
                playerScore = 0; 
                computerScore = 0; 

                playerBoard.textContent = 'Player: ' + playerScore; 
                computerBoard.textContent = 'Computer: ' + computerScore;
                gameResult.textContent = ""; 

            }

            if (playerScore == 5) {
                alert("Game over! You won!"); 
                reset(); 
            }
            
            else if (computerScore ==5) {
                alert("Game over! You lost. :("); 
                reset(); 
            }

    

                            
            };
    
        
game(); 


  });
});

