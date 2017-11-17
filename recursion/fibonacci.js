/*

Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.

Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...

What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

// attempt

var fib = function(n) {
  if (n <= 1) return n;
  return fib(n) + fib(n-1); // nope, n-1 and n-2
}

// solution

function fibonnaci (n) {
  if (n === 0 || n === 1) return n;
  return fibonnaci(n-1) + fibonnaci(n-2);
}