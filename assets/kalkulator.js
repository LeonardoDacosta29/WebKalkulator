const calculator = {
  displayNumber: "0",
  operartor: null,
  firstNumber: null,
  isWaitForSecondNumber: false,
};

function updateDisplay() {
  document.querySelector("#displaynumber").innertext = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operartor = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
}
