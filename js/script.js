const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', function(){
    startGame(this.id);
})

paper.addEventListener('click', function(){    
    startGame(this.id);
})    

scissors.addEventListener('click', function(){
    startGame(this.id);
})



function startGame(playersMove) {
    const randomMove = createRandomMove();

    displayMoves(playersMove, randomMove);
    displayResult(playersMove, randomMove);


}
