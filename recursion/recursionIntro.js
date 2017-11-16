//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

function loopDown(n) {
  while (n <= 0) {
    console.log(n--);
  }
}

//2. Next, try looping just like above except using recursion

function loopDownRecursion(n) {
  if (n === 0) {
    console.log(0);
    return;
  } else {
    return loopDownRecursion(n-1);
  }
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

function exponent(base, expo) {
  var total = base;
  while (expo > 1) {
    total *= base;
    expo--;
  }
  return total;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

function RecursiveExponent(base, expo) {
  var total = base;
  total *= base;
  if (expo > 1) {
    return total;
  } else {
    return RecursiveExponent(base, expo);
  }
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

function recursiveMultiplier(arr, num) {
  var totalArr = [];
  function multiply(index) {
    if (index === arr.length - 1) {
      totalArr.push(arr[arr.length - 1] * num);
    } else {
      totalArr.push(arr[index]);
      return multiply(index + 1);
    }
  }
  multiply(0);
  return totalArr;
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

function recursiveReverse(arr) {
  var reversedArr = [];
  function reverse(index) {
    if (index === 0) {
      reversedArr.push(arr[0]);
    } else {
      reversedArr.push(arr[index]);
      return reverse(index - 1);
    }
  }
  reverse(arr.length - 1);
}