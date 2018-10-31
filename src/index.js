const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOporand: false,
  operator: null
};
function updateDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;
}

updateDisplay();
