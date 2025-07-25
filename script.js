// Operations functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b != 0) {
        return a / b;
    } else {
        return "Error math";
    }
}

function operate(op, a, b) {
    switch (op) {
        case '+': return add(a, b);
            break;
        case '-': return subtract(a, b);
            break;
        case '*': return multiply(a, b);
            break;
        case '/': return divide(a, b);
            break;
    }
}

// Display functions
function displayDigits(number) {
    if (number === "." && currentDisplay.includes(".")) return;
    if (number === "." && currentDisplay === "") {
        currentDisplay = "0.";
    } else {
        currentDisplay += number;
    }
    display.textContent = currentDisplay;
}


function displayClear() {
    currentDisplay = "";
    firstNumber = null;
    operator = null;
    updateDisplay("0");
}

function backspace() {
    currentDisplay = currentDisplay.slice(0, currentDisplay.length-1)
    updateDisplay(currentDisplay);
}

function updateDisplay(content) {
    if (content == "") {
        display.textContent = "0"
    } else {
        display.textContent = content;
    }
}

function setOperator(op) {
    // multiple operations
    if (operator != null && firstNumber != null) {
        firstNumber = operate(operator, firstNumber, parseFloat(currentDisplay));
        updateDisplay(Math.round(firstNumber * 100000) / 100000)
    } else {
        firstNumber = parseFloat(currentDisplay);
    }
    operator = op;
    currentDisplay = "";
}

function calculateResult() {
    if (operator && currentDisplay != "") {
        const secondNumber = parseFloat(currentDisplay);
        const result = operate(operator, firstNumber, secondNumber);
        if (typeof (result) == "string") {
            updateDisplay(result);
        } else {
            updateDisplay(Math.round(result * 100000) / 100000);
        }

    }
    currentDisplay = "";
    operator = null;
}

let currentDisplay = "";
let firstNumber = null;
let operator = null;

for (let i = 0; i <= 9; i++) {
    document.querySelector(`#button${i}`).addEventListener("click", () => displayDigits(i));
}
const buttonClear = document.querySelector("#clear");
const buttonBackspace = document.querySelector("#buttonBackspace");
const buttonEqual = document.querySelector("#equal");
const display = document.querySelector("#display");
const buttonAddition = document.querySelector("#addition");
const buttonSubtraction = document.querySelector("#subtraction");
const buttonMultiplication = document.querySelector("#multiplication");
const buttonDivision = document.querySelector("#division");
const buttonDot = document.querySelector("#dot");

buttonClear.addEventListener("click", () => displayClear());
buttonBackspace.addEventListener("click", () => backspace())
buttonEqual.addEventListener("click", () => calculateResult());
buttonAddition.addEventListener("click", () => setOperator('+'));
buttonSubtraction.addEventListener("click", () => setOperator('-'));
buttonMultiplication.addEventListener("click", () => setOperator('*'));
buttonDivision.addEventListener("click", () => setOperator('/'));
buttonDot.addEventListener("click", () => displayDigits("."));

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key)) {
        // Si c'est un chiffre
        displayDigits(key);
    } else if (key === '.') {
        displayDigits('.');
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        displayClear();
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (['+', '-', '*', '/'].includes(key)) {
        setOperator(key);
    }
});
