const winningScoreSelect = document.querySelector('#playTo')
const resetBtn = document.querySelector('#reset')
const nextRound = document.querySelector('#nextRound')
const roundToSelect = document.querySelector('#roundTo')

const p1 = {
    score: 0,
    overallScore: 0,
    button:document.querySelector('#p1Add'),
    display:document.querySelector('#p1Display'),
    overall:document.querySelector('#p1Overall')
}

const p2 = {
    score: 0,
    overallScore: 0,
    button: document.querySelector('#p2Add'),
    display: document.querySelector('#p2Display'),
    overall: document.querySelector('#p2Overall')
}
let roundScore = 3;
let winningScore = 3;
let isGameOver = false;
let isRoundOver = false;
let winner = null

winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    if(isGameOver) 
        resetGame(); 
    else reset();
})

function updateScore(player, opponent){
    if(!isRoundOver){
        player.score += 1;
        player.display.textContent = player.score;
        if(player.score === winningScore){
            isRoundOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
            winner = player;
            nextRound.classList.remove('is-hidden');
        }
    }
}

p1.button.addEventListener('click', function() {
    updateScore(p1, p2);
})

p2.button.addEventListener('click', function() {
    updateScore(p2,p1);
})

function reset(){
    isRoundOver = false;
    nextRound.classList.add('is-hidden')
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = p.score;
        p.button.disabled = false;
        p.display.classList.remove('has-text-success', 'has-text-danger');
    }
}

resetBtn.addEventListener('click', function() {
    if (isGameOver) {
        resetGame();
    }else{
        reset();
    }
    
})
///////////////////////////////////////////////////////////////////////////////////
function updateOverallScore(winner, loser){
    nextRound.classList.add('is-hidden');
    if(!isGameOver && winner)
    {
        winner.overallScore += 1;
        winner.overall.textContent = winner.overallScore;
        reset();
        if(winner.overallScore === roundScore){
            isGameOver = true;
            winner.overall.classList.add('has-text-success')
            loser.overall.classList.add('has-text-danger')
            winner.button.disabled = true;
            loser.button.disabled = true;
        }
    }
    winner = null;
}

nextRound.addEventListener('click', function() {
    let loser = (winner === p1)? p2:p1;
    updateOverallScore(winner, loser);
})

function resetGame(){
    isGameOver = false;
    isRoundOver = false;
    nextRound.classList.add('is-hidden')
    for(let p of [p1,p2]){
        p.score = 0;
        p.overallScore = 0;
        p.overall.textContent = p.overallScore;
        p.display.textContent = p.score;
        p.button.disabled = false;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.overall.classList.remove('has-text-success', 'has-text-danger');
    }
}

roundToSelect.addEventListener('change', function(){
    roundScore = parseInt(this.value);
    resetGame();
})


