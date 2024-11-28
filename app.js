let currentValue = '';
let operator = '';
let previousValue = '';

function appendValue(value) {
  currentValue += value;
  updateDisplay();
}

function operate(op) {
  if (currentValue === '') return;
  if (operator) calculate(); 
  previousValue = currentValue;
  currentValue = '';
  operator = op;
  updateDisplay();
}

function calculate() {
  if (!operator || currentValue === '' || previousValue === '') return;
  const num1 = parseFloat(previousValue);
  const num2 = parseFloat(currentValue);
  let result = 0;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Error';
      break;
  }

  currentValue = result.toString();
  operator = '';
  previousValue = '';
  updateDisplay();
}

function clearDisplay() {
  currentValue = '';
  operator = '';
  previousValue = '';
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = currentValue || previousValue || '0';
}
