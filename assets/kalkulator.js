// objek
const calculator = {
  displayNumber: "0",
  operartor: null,
  firstNumber: null,
  isWaitForSecondNumber: false,
};
// fungsi
function updateDisplay() {
  document.querySelector("#displaynumber").innertext = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operartor = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
}

function inputDigit(digit) {
  calculator.displayNumber += digit;
}

// variable
const buttons = document.querySelectorAll(".button");

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    // mendapatkan objek elemen yang dilkik
    const target = event.target;

    inputDigit(target.innertext);
    updateDisplay();
  });
}
