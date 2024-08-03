const display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function appendCharacter(character) {
    if (display.innerText === '0') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        appendCharacter(key);
    } else if (key === '+') {
        appendCharacter('+');
    } else if (key === '-') {
        appendCharacter('-');
    } else if (key === '') {
        appendCharacter('');
    } else if (key === '/') {
        appendCharacter('/');
    } else if (key === '.') {
        appendCharacter('.');
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key.toLowerCase() === 'Delete') {
        clearDisplay();
    }
});
