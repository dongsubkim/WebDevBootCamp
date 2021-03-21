const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const reset = document.querySelector('#reset');
const scoreInput = document.querySelector('select');
let scoreLimit = 0;
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');

scoreInput.addEventListener('input', function () {
    scoreLimit = scoreInput.value;
})


button1.addEventListener('click', function () {
    score1.innerText = parseInt(score1.innerText) + 1;
    if (score1.innerText === scoreLimit) {
        score1.style.color = 'green';
        score2.style.color = 'red';
    }
})

button2.addEventListener('click', function () {
    score2.innerText = parseInt(score2.innerText) + 1;
    if (score2.innerText === scoreLimit) {
        score2.style.color = 'green';
        score1.style.color = 'red';
    }
})
``
reset.addEventListener('click', function () {
    score1.innerText = '0';
    score2.innerText = '0';
    score1.style.color = 'black';
    score2.style.color = 'black';
})