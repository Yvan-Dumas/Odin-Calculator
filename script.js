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
function displayDigits(number){
    currentDisplay += number;
    display.textContent = currentDisplay;
}

function displayClear() {
    display.textContent = "0";
    currentDisplay = "";
    firstNumber = 0;
    operator = '';
}

function setOperator(op) {
    operator = op;
    firstNumber = parseInt(currentDisplay);
    displayClear();
}


let currentDisplay = "";
let firstNumber = 0;
let operator = '';

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

buttonClear.addEventListener("click", () => displayClear());
buttonEqual.addEventListener("click", () => display.textContent = operate(operator, firstNumber, parseInt(currentDisplay)));
buttonAddition.addEventListener("click", () => setOperator('+'));
buttonSubtraction.addEventListener("click", () => setOperator('-'));
buttonMultiplication.addEventListener("click", () => setOperator('*'));
buttonDivision.addEventListener("click", () => setOperator('/'));