function calculateResult() {
  let display = document.getElementById("display");
  let expression = display.value;

  // Convert percentages before evaluation
  expression = expression.replace(/(\d+(\.\d+)?)%/g, (match, num) => {
    return parseFloat(num) / 100;
  });

  try {
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}