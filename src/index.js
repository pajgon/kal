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

function inputDigit(digit) {
  if (calculator.displayValue == "0") calculator.displayValue = digit;
  else calculator.displayValue = calculator.displayValue + digit;
}

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", event => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }
  if (target.classList.contains("operator")) {
    return;
  }
  if (target.classList.contains("all-clear")) {
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});
