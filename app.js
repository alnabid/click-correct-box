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

const inputSubmit = document.querySelector('#input-submit')
let tryLimit;

const afterContent = document.querySelector('.afterContent')




boxesList.addEventListener('click', e => {
    if (e.target.classList == 'box') {
        if (e.target === boxes[Math.floor(Math.random() * 6)]) {
            result.textContent = winText;
            result.className = 'winText'
            counter.textContent++;
            tryCounter.textContent++
            resultBox.style.backgroundColor = 'rgba(41, 255, 000, 0.208)'
        } else {
            result.textContent = loseText;
            result.className = 'loseText';
            tryCounter.textContent++
            resultBox.style.backgroundColor = 'rgba(255, 41, 41, 0.308)'
        }
        resultBox.appendChild(result)
        
        continueText.textContent = 'click anywhere to continue'
        continueText.className = 'continue'
        resultBox.appendChild(continueText)
        resultBox.style.zIndex = '2';
        resultBox.style.display = 'block'
    }

    if (tryLimit !== undefined && tryLimit !== '') {
        if ( eval(tryLimit) <= tryCounter.textContent) {
            result.textContent = `You won ${counter.textContent} times out of ${tryLimit}!`
            resultBox.style.background = 'rgba(27, 161, 1, 0.300)'
            resultBox.appendChild(result)
        
            continueText.textContent = `Limit will be turned of immediately. click anywhere to continue`
            continueText.className = 'continue'
            resultBox.appendChild(continueText)
            resultBox.style.zIndex = '2';
            resultBox.style.display = 'block'
    
            tryCounter.textContent = 0;
            counter.textContent = 0;
            tryLimit = undefined;
            afterContent.style.display = 'none'
        }
    } else {
        afterContent.textContent = 'Please input valid numbers for limit'
    }
    
    
})

resultBox.addEventListener('click', e => {
    resultBox.style.display = 'none'
})


inputSubmit.addEventListener('click', (e) => {
    const input = document.querySelector('.try-input')
    tryLimit = input.value
    afterContent.style.display = 'inline-block';
    afterContent.innerHTML = `<b>Limit:</b> ${tryLimit}`

    input.value = undefined;
    tryCounter.textContent = 0;
})

    




