function average() {
  var n1 = parseFloat(document.getElementById("avg1").value);
  var n2 = parseFloat(document.getElementById("avg2").value);
  var n3 = parseFloat(document.getElementById("avg3").value);
  var result = (n1 + n2 + n3) / 3;
  document.getElementById("avgResult").value = result;
}

function averageDOM() {
  var n1 = parseFloat(document.getElementById("dom1").value);
  var n2 = parseFloat(document.getElementById("dom2").value);
  var n3 = parseFloat(document.getElementById("dom3").value);
  var result = (n1 + n2 + n3) / 3;
  document.getElementById("domResult").value = result;
}

function sumNatural() {
  var n = parseInt(document.getElementById("sumN").value);
  var result = (n * (n + 1)) / 2;
  document.getElementById("sumResult").value = result;
}

function averageNatural() {
  var n = parseInt(document.getElementById("avgN").value);
  var result = (n + 1) / 2;
  document.getElementById("avgNResult").value = result;
}

function profitPercentage() {
  var cp = parseFloat(document.getElementById("cp").value);
  var sp = parseFloat(document.getElementById("sp").value);
  var profit = sp - cp;
  var result = (profit / cp) * 100;
  document.getElementById("profitResult").value = result + "%";
}

function simpleInterest() {
  var p = parseFloat(document.getElementById("principal").value);
  var r = parseFloat(document.getElementById("rate").value);
  var t = parseFloat(document.getElementById("time").value);
  var result = (p * r * t) / 100;
  document.getElementById("siResult").value = result;
}

function missingAngle() {
  var angle1 = parseFloat(document.getElementById("angle1").value);
  var angle2 = parseFloat(document.getElementById("angle2").value);
  var result = 180 - angle1 - angle2;
  document.getElementById("angleResult").value = result + "°";
}

function lastDigit() {
  var num = parseInt(document.getElementById("lastNum").value);
  var result = num % 10;
  document.getElementById("lastResult").value = result;
}

function removeLastDigit() {
  var num = parseInt(document.getElementById("removeNum").value);
  var result = Math.floor(num / 10);
  document.getElementById("removeResult").value = result;
}

function firstDigit3() {
  var num = parseInt(document.getElementById("threeDigit").value);
  var result = Math.floor(num / 100);
  document.getElementById("threeResult").value = result;
}

function firstDigit5() {
  var num = parseInt(document.getElementById("fiveDigit").value);
  var result = Math.floor(num / 10000);
  document.getElementById("fiveResult").value = result;
}

function celsiusToFahrenheit() {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var result = (celsius * 9) / 5 + 32;
  document.getElementById("celsiusResult").value = result + " °F";
}

function fahrenheitToCelsius() {
  var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  var result = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("fahrenheitResult").value = result + " °C";
}

function grossSalary() {
  var basic = parseFloat(document.getElementById("basic").value);
  var hra = parseFloat(document.getElementById("hra").value);
  var da = parseFloat(document.getElementById("da").value);
  var result = basic + hra + da;
  document.getElementById("salaryResult").value = result;
}

function swapWithThird() {
  var a = parseInt(document.getElementById("swap1").value);
  var b = parseInt(document.getElementById("swap2").value);
  var temp = a;
  a = b;
  b = temp;
  document.getElementById("swapThirdResult").value ="Num1 = " + a + " , Num2 = " + b;
}

function swapWithoutThird() {
  var a = parseInt(document.getElementById("swapNo1").value);
  var b = parseInt(document.getElementById("swapNo2").value);
  a = a + b;
  b = a - b;
  a = a - b;
  document.getElementById("swapNoResult").value = "Num1 = " + a + " , Num2 = " + b;
}
