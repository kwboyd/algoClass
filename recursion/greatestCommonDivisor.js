/*
Write a function that takes two numbers and returns the greatest common divisor.
*/

// first attempt

//euclid
// the gcd of two nums does not change if you change the bigger num to its difference with smaller number. keep doing this til the numbers are equal

function gcd(num1, num2) {
  var min = Math.min(num1, num2);
  var max = Math.max(num1, num2);
  if (max % min === 0) return min;
  else return gcd(min, max % min);
}

//dijkstra

function gcd(num1, num2) {
  if (num1 === num2) return num1;
  else if (num1 > num2) return gcd(num1-num2, num2);
  else return gcd(num1, num2-num1);
}