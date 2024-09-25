let currentInput = '';
let previousInput = '';
let operation = undefined;

function appendNumber(number) {
  if (number === '.' && currentInput.includes('.')) return;
  currentInput = currentInput.toString() + number.toString();
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = currentInput || '0';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = undefined;
  updateDisplay();
}

function chooseOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  
  currentInput = result;
  operation = undefined;
  previousInput = '';
  updateDisplay();
}
