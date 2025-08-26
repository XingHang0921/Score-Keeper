const winningScoreSelect = document.querySelector('#playTo')
const resetBtn = document.querySelector('#reset')

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

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent){
    if(!isGameOver){
        player.score += 1
        player.display.textContent = player.score
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

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

resetBtn.addEventListener('click', reset)


function reset(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = p.score;
        p.button.disabled = false;
        p.display.classList.remove('has-text-success', 'has-text-danger')

    }
}