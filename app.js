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
let roundScore = 3
let winningScore = 3;
let isGameOver = false;
let isRoundOver = false;
let winner = null
function updateScore(player, opponent){
    if(!isRoundOver){
        player.score += 1
        player.display.textContent = player.score
        if(player.score === winningScore){
            isRoundOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
            winner = player
        }
    }
}
nextRound.addEventListener('click', function(){
    if(!isRoundOver){
        if(winner){
        winner.overallScore += 1
        winner.overall.textContent = winner.overallScore
        winner = null
        reset()
        if
        }
    }else{
        alert('congrates on thw winner')
    }
    
})

p1.button.addEventListener('click', function() {
    updateScore(p1, p2)
})

p2.button.addEventListener('click', function() {
    updateScore(p2,p1)
})

winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset()
})
roundToSelect.addEventListener('change', function(){
    roundScore = parseInt(this.value);
    reset()
})

resetBtn.addEventListener('click', reset)


function reset(){
    isGameOver = false;
    isRoundOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.overall = 0;
        p.display.textContent = p.score;
        p.button.disabled = false;
        p.display.classList.remove('has-text-success', 'has-text-danger');
    }
}