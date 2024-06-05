// script.js
function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteChar() {
    let display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function appendChar(char) {
    let display = document.getElementById('result');
    display.value += char;
}

function calculate() {
    let display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function toggleMode() {
    const calculator = document.getElementById('calculator');
    calculator.classList.toggle('dark');
    const modeIcon = document.getElementById('mode-icon');
    if (calculator.classList.contains('dark')) {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    } else {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    }
}

// Initialize the mode
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('light'); // Start with light mode
});
