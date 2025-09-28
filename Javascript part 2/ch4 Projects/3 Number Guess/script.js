let count = 10;
const guessRemaining = document.querySelector('#guess-remaining');
guessRemaining.innerText = count;

const resultBox = document.querySelector('.result-box');
const button = document.querySelector('button');

let finished = document.createElement('h2');
finished.className = 'finish-count';
finished.setAttribute('style', 'color: crimson');
finished.innerText = `All Chances are over`

let input = document.querySelector('input');

let win = `<h2 style="color: green">🎉 Correct Guess</h2>`;
let los = `<h2 style="color: red">💢 Wrong Guess</h2>`;


button.addEventListener('click', () => {
    if (input.value === '' || input.value <= 0 || input.value > 10 || isNaN(input.value)) {
        resultBox.innerHTML = ` `;
        resultBox.innerHTML = `<h2 style="color: orange">Enter a valid number</h2>`
        input.value = '';
        return;
    } else {
        resultBox.innerHTML = ` `;
        generateNumber(input.value)
        count--;
        if (count <= 0) {
            setTimeout(() => {
                resultBox.appendChild(finished)
            }, 1300);
            button.setAttribute('disabled', 'true');
            button.innerText = 'disabled';
        }
        guessRemaining.innerText = count + 1 - 1;
    }
})

const numberContainer = document.querySelector('.number-container');
function generateNumber(guess) {
    numberContainer.innerHTML = ``;
    let num = Math.floor(Math.random() * 10 + 1);

    let genNumber = document.createElement('h4');
    genNumber.innerText = `Generated number: ${num}`

    let userGuess = document.createElement('h4');
    userGuess.innerText = `Your Guessed number : ${guess}`

    resultBox.innerHTML = ``;
    resultBox.innerHTML = (num===Number(guess)) ? win : los;
    // input.value = '';

    numberContainer.appendChild(genNumber);
    numberContainer.appendChild(userGuess);
}

