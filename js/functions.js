function createRandomMove(){
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if(randomNumber === 1) return 'rock';
    else if(randomNumber === 2) return 'paper';    
    else if (randomNumber === 3) return 'scissors';
    
}

function displayMoves(playersMove, computersMove) {
    const playersMoveDiv = document.querySelector('#players-move');
    const computersMoveDiv = document.querySelector('#computers-move');
    playersMoveDiv.innerHTML = playersMove;
    computersMoveDiv.innerHTML = computersMove;
}

function displayResult(playersMove, computersMove) {
    const resultDiv = document.querySelector('#result');

    if(playersMove === computersMove) {
        resultDiv.innerHTML = 'REMIS';
    }    

    else if( 
        (playersMove === 'paper' && computersMove === 'scissors') ||       
        ( playersMove === 'rock' && computersMove === 'paper') ||
        ( playersMove === 'scissors' && computersMove === 'rock') 
    ){
        
        resultDiv.innerHTML = 'PRZEGRAŁEŚ';
    }
        
     else {
        resultDiv.innerHTML = 'WYGRAŁEŚ';   
     }
    
    
    }
