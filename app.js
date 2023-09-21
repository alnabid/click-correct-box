const boxes = document.querySelectorAll('.box')

boxes.forEach(n => {
    n.textContent = ''
})

const boxesList = document.querySelector('#boxes')
const body = document.querySelector('body')

const winText = "YOU WIN!!!!!!!!"
const loseText = "loser lol"

const result = document.createElement('p')

const resultBox = document.getElementById('resultBox')
resultBox.style.display = 'none'

let count = 0;
const counter = document.querySelector('.counter')
counter.textContent = count;

let tryCount = 0;
const tryCounter = document.querySelector('.try');
tryCounter.textContent = tryCount

const continueText = document.createElement('div')

boxesList.addEventListener('click', e => {
    if (e.target.classList == 'box') {
        if (e.target === boxes[Math.floor(Math.random() * 6)]) {
            result.textContent = winText;
            result.className = 'winText'
            counter.textContent++;
            tryCounter.textContent++
            resultBox.style.backgroundColor = 'rgba(41, 255, 148, 0.808)'
        } else {
            result.textContent = loseText;
            result.className = 'loseText';
            tryCounter.textContent++
            resultBox.style.backgroundColor = 'rgba(255, 41, 41, 0.808)'
        }
        resultBox.appendChild(result)
        
        continueText.textContent = 'click anywhere to continue'
        continueText.className = 'continue'
        resultBox.appendChild(continueText)
        resultBox.style.zIndex = '2';
        resultBox.style.display = 'block'
    }
})

resultBox.addEventListener('click', e => {
    resultBox.style.display = 'none'
})
