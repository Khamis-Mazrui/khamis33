var buttons = document.querySelectorAll('button');
var display = document.getElementById('display');
var operator = '';
var inputValue = '';
var waitingForOperand = false;

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        var buttonValue = e.target.innerText;
        if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
            operator = buttonValue;
            inputValue += buttonValue;
            waitingForOperand = true;
        } else if (buttonValue === 'C') {
            inputValue = '';
            display.value = inputValue;
            operator = '';
            waitingForOperand = false;
        } else if (buttonValue === '=') {
            if (operator === '+') {
                inputValue = parseFloat(inputValue) + parseFloat(operator);
            } else if (operator === '-') {
                inputValue = parseFloat(inputValue) -