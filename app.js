const scoreSelect = document.querySelector('#scoreSelect');
const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const p1mBtn = document.querySelector('#p1mBtn');
const p2mBtn = document.querySelector('#p2mBtn');
const rBtn = document.querySelector('#rBtn');
const player2Score = document.querySelector('#player2Score');
const player1Score = document.querySelector('#player1Score');
const section = document.querySelector('section')
const winP = document.querySelector('p#winP')

let p1BgNum = 0
let p2BgNum = 0

p1Btn.addEventListener('click', (e) => {
    const maxScore = scoreSelect.value;
    if (p1BgNum < maxScore - 1) {
        p1BgNum += 1;
        player1Score.innerText = p1BgNum;
        p1mBtn.disabled = false;
    } else if (p1BgNum == maxScore - 1) {
        p1BgNum += 1;
        player1Score.innerText = p1BgNum;
        player1Score.classList.add('win');
        player2Score.classList.add('lose');
        winP.classList.add('winPR');
        winP.innerText = 'player 1 is winning';
        p1Btn.disabled = true;
        p1mBtn.disabled = true;
        p2Btn.disabled = true;
        p2mBtn.disabled = true;
    }
})

p1mBtn.addEventListener('click', (e) => {
    if (p1BgNum > 1) {
        p1BgNum -= 1;
        player1Score.innerText = p1BgNum;
        p1Btn.disabled = false;
    }
    else if (p1BgNum == 1) {
        p1BgNum -= 1;
        player1Score.innerText = p1BgNum;
        p1mBtn.disabled = true;
    }
})

p2Btn.addEventListener('click', (e) => {
    const maxScore = scoreSelect.value;
    if (p2BgNum < maxScore - 1) {
        p2BgNum += 1;
        player2Score.innerText = p2BgNum;
        p2mBtn.disabled = false;
    } else if (p2BgNum == maxScore - 1) {
        p2BgNum += 1;
        player2Score.innerText = p2BgNum;
        player2Score.classList.add('win');
        player1Score.classList.add('lose');
        winP.classList.add('winPG');
        winP.innerText = 'player 2 is winning';
        p1Btn.disabled = true;
        p1mBtn.disabled = true;
        p2Btn.disabled = true;
        p2mBtn.disabled = true;
    }
})

p2mBtn.addEventListener('click', (e) => {
    if (p2BgNum > 1) {
        p2BgNum -= 1;
        player2Score.innerText = p2BgNum;
        p2Btn.disabled = false;
    }
    else if (p2BgNum == 1) {
        p2BgNum -= 1;
        player2Score.innerText = p2BgNum;
        p2mBtn.disabled = true;
    }
})

rBtn.addEventListener('click', (e) => {
    p1BgNum = 0;
    player1Score.innerText = p1BgNum;
    p2BgNum = 0;
    player2Score.innerText = p2BgNum;
    // scoreSelect.value = "";
    p1Btn.disabled = false;
    p1mBtn.disabled = false;
    p2Btn.disabled = false;
    p2mBtn.disabled = false;
    player1Score.classList.remove('win');
    player1Score.classList.remove('lose');
    player2Score.classList.remove('win');
    player2Score.classList.remove('lose');
    winP.classList.remove('winPR');
    winP.classList.remove('winPG')
    winP.innerText = '';
})

