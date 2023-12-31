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
    if (b === 0) {
        clearAll();
        return 'Not Possible!'
    }
    return a / b;
}

function operate(operand1, operator, operand2) {
    if (operator === '+') {
        return add(operand1, operand2);
    } else if (operator === '-') {
        return subtract(operand1, operand2);
    } else if (operator === '*') {
        return multiply(operand1, operand2);
    } else if (operator === '/') {
        return divide(operand1, operand2);
    } else {
        return 'ERROR';
    }
}

function updateDisplay(num) {
    let displayNum;
    if (isNewNum){
        displayNum = num;
        display.textContent = displayNum;
        showNum(displayNum);
    } else {
        display.innerHTML += num;
        displayNum = Number(display.textContent);
    }

    if (counter % 2 === 0) {
        num1 = displayNum;
    } else {
        num2 = displayNum;
    }
    isNewNum = false;
}

function setOperator(symbol) {
    counter++;
    if (counter !== 1) {
        result = operate(num1, operator, num2);
        num1 = result;
        showNum(result);
        counter = 1;
    }
    operator = symbol;
    isNewNum = true;
}

function clearAll() {
    display.textContent = 0;
    counter = 0;
    num1 = num2 = operator = result = undefined;
    isNewNum = true;
}

function showNum(num) {
    let roundedNum = Math.round(
        (num + Number.EPSILON) * (10**10)) / (10**10);
    display.textContent = roundedNum;
}

let num1;
let operator;
let num2;
let result;
let counter = 0;
let isNewNum = true;

const display = document.querySelector(".display");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");
const division = document.querySelector("#divide");
const times = document.querySelector("#times");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const clear = document.querySelector("#clear");

zero.addEventListener('click', () => updateDisplay(0));
one.addEventListener('click', () => updateDisplay(1));
two.addEventListener('click', () => updateDisplay(2));
three.addEventListener('click', () => updateDisplay(3));
four.addEventListener('click', () => updateDisplay(4));
five.addEventListener('click', () => updateDisplay(5));
six.addEventListener('click', () => updateDisplay(6));
seven.addEventListener('click', () => updateDisplay(7));
eight.addEventListener('click', () => updateDisplay(8));
nine.addEventListener('click', () => updateDisplay(9));

plus.addEventListener('click', () => setOperator('+'));
minus.addEventListener('click', () => setOperator('-'));
times.addEventListener('click', () => setOperator('*'));
division.addEventListener('click', () => setOperator('/'));

equals.addEventListener('click', () => {
    if (num1 && num2 && operator){
        result = operate(num1, operator, num2);
        showNum(result);
        counter = 0;
        isNewNum = true;
    }
    
});

clear.addEventListener('click', () => {
    clearAll();
});