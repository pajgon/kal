const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOporand: false,
  secondOperand: null,
  operator: null
};
function updateDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;
}

updateDisplay();

function inputDigit(digit) {
  if (calculator.displayValue == "0") calculator.displayValue = digit;
  else calculator.displayValue = calculator.displayValue + digit;
}

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", event => {
  const { target } = event;
  if (target.matches("button")) {
    return value;
  }
  if (!target.classList.contains("button")) {
    return;
  }
  if (target.classList.contains("operator")) {
    return;
  }
  if (target.classList.contains("all-clear")) {
    return;
  }
  if (target.classList.contains("decimal")) {
    return;
  }

  inputDigit(target.value);
  updateDisplay();

  function handleOperator(nextOperator) {
    if (calculator.firstOperand == null) {
      calculator.firstOperand = parseFloat(calculator.displayValue);
      calculator.displayValue == "0";
      updateDisplay();
    } else if (calculator.operator) {
      const result = performCalculation[calculator.operator](
        calculator.firstOperand,
        parseFloat(calculator.displayValue)
      );

      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
    calculator.waitingForSecondOporand = true;
    calculator.firstOperand = nextOperator;
  }

  const performCalculation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
    "=": (firstOperand, secondOperand) => secondOperand
  };
  updateDisplay();
  function resetCalculator() {}
});
