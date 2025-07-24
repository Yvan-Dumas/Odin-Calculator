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
        return "Error";
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
    currentDisplay += number;
    display.textContent = currentDisplay;
}

function displayClear() {
    currentDisplay = "";
    firstNumber = null;
    operator = null;
    updateDisplay("0");
}

function updateDisplay(content) {
    display.textContent = content;
}

function setOperator(op) {
    // multiple operations
    if (operator != null && firstNumber != null) {
        firstNumber = operate(operator, firstNumber, parseFloat(currentDisplay));
        updateDisplay(firstNumber)
    } else {
        firstNumber = parseFloat(currentDisplay);
    }
    operator = op;
    currentDisplay="";
}

function calculateResult() {
    if (operator && currentDisplay != "") {
        const secondNumber = parseFloat(currentDisplay);
        const result = operate(operator, firstNumber, secondNumber);
        updateDisplay(result);
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
const buttonEqual = document.querySelector("#equal");
const display = document.querySelector("#display");
const buttonAddition = document.querySelector("#addition");
const buttonSubtraction = document.querySelector("#subtraction");
const buttonMultiplication = document.querySelector("#multiplication");
const buttonDivision = document.querySelector("#division");
const buttonDot = document.querySelector("#dot");

buttonClear.addEventListener("click", () => displayClear());
buttonEqual.addEventListener("click", () => calculateResult());
buttonAddition.addEventListener("click", () => setOperator('+'));
buttonSubtraction.addEventListener("click", () => setOperator('-'));
buttonMultiplication.addEventListener("click", () => setOperator('*'));
buttonDivision.addEventListener("click", () => setOperator('/'));
buttonDot.addEventListener("click", () => displayDigits("."))