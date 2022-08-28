// objek
const calculator = {
  // properti
  displayNumber: "0",
  operator: null,
  firstNumber: null,
  isWaitForSecondNumber: false,
};
// fungsi
function updateDisplay() {
  document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
}

function inputDigit(digit) {
  if (calculator.displayNumber === "0") {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}

// variable
const buttons = document.querySelectorAll(".button");

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    // mendapatkan objek elemen yang dilkik
    const target = event.target;

    inputDigit(target.innerText);
    updateDisplay();
  });
}
