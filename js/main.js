function equals() {
  var equation = document.getElementById("equation");
  equation.value = eval(equation.value);

  // console.log(equation.value.split(""));
}

function number(digit) {
  console.log(digit);

  var equation = document.getElementById("equation");

  equation.value = equation.value + digit;
}

function plus() {
  console.log("plus");

  var equation = document.getElementById("equation");

  equation.value = equation.value + "+";
}