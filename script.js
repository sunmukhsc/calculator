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

let num1;
let operator;
let num2;
