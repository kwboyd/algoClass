/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

// attempt

var factorial = function(n) {
  if (n === 1) return 1;
  return n *= factorial(n-1);
}

// solution

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n-1);
}

// close!

var factorial = function(n) {
  if (n === 1) return 1;
  return n *= factorial(n-1);
}