const p1 = {
    score: 0,
    btn: document.querySelector('#p1Btn'),
    mBtn: document.querySelector('#p1mBtn'),
    display: document.querySelector('#player1Score'),
    name: "player 1",
    winDeclare: 'winPR'
}

const p2 = {
    score: 0,
    btn: document.querySelector('#p2Btn'),
    mBtn: document.querySelector('#p2mBtn'),
    display: document.querySelector('#player2Score'),
    name: "player 2",
    winDeclare: 'winPG'
}

const scoreSelect = document.querySelector('#scoreSelect');
const rBtn = document.querySelector('#rBtn');
const section = document.querySelector('section')
const winP = document.querySelector('p#winP')



function addScore(player, opponent) {
    const maxScore = scoreSelect.value;
    if (player.score < maxScore - 1) {
        player.score += 1;
        player.display.innerText = player.score;
        player.mBtn.disabled = false;
    } else if (player.score == maxScore - 1) {
        player.score += 1;
        player.display.innerText = player.score;
        player.display.classList.add('win');
        opponent.display.classList.add('lose');
        winP.classList.add(player.winDeclare);
        winP.innerText = `${player.name} is winning`;
        for (let p of [player, opponent]) {
            p.btn.disabled = true;
            p.mBtn.disabled = true;
        }
    }
}

function removeScore(player) {
    if (player.score > 1) {
        player.score -= 1;
        player.display.innerText = player.score;
        player.btn.disabled = false;
    }
    else if (player.score == 1) {
        player.score -= 1;
        player.display.innerText = player.score;
        player.mBtn.disabled = true;
    }
}



p1.btn.addEventListener('click', () => {
    addScore(p1, p2);
})

p1.mBtn.addEventListener('click', () => {
    removeScore(p1);
})

p2.btn.addEventListener('click', () => {
    addScore(p2, p1);
})

p2.mBtn.addEventListener('click', () => {
    removeScore(p2);
})

rBtn.addEventListener('click', () => {
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = p.score;
        p.btn.disabled = false;
        p.mBtn.disabled = false;
        p.display.classList.remove('win', 'lose');
        winP.classList.remove(p.winDeclare);
        winP.innerText = "";
    }
})
