function calc() {
  var val1 = document.getElementById('num1').value;
  var val2 = document.getElementById('num2').value;
  add_num = (val1 * val2) / 100;
  final = parseFloat(val2) + parseFloat(add_num);
  document.getElementById('answer').innerHTML = "The final amount with this tip is: " + final;
}

function reset() {
  document.getElementById('num1').value = null;
  document.getElementById('num2').value = null;
  document.getElementById('answer').innerHTML = ""
}

