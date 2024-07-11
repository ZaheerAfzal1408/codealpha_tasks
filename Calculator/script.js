let display = document.getElementById("display");

function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function isValidInput(input) {
  return isNumeric(input) || /^[\+\-\*\/\%\.]$/.test(input);
}

function appendDigit(digit) {
  if (typeof digit === "string" && isValidInput(digit)) {
    display.value += digit;
  }
}

function appendSymbol(symbol) {
  if (typeof symbol === "string" && isValidInput(symbol)) {
    display.value += symbol;
  }
}

function appendDecimal() {
  const lastChar = display.value.slice(-1);
  if (
    !display.value.includes(".") &&
    (isNumeric(lastChar) || lastChar === "")
  ) {
    display.value += ".";
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value);
    const isInteger = result % 1 === 0;
    display.value = isInteger ? result : result.toFixed(2);
  } catch (error) {
    display.value = "Error";
  }
}
