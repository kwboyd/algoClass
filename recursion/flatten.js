/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

// first attempt

function flatten(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i]);
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// solution

function flatten(arr) {
  var result = [];
  arr.forEach(function(element) {
    if (!Array.isArray(element)) {
      result.push(element);
    } else {
      result = result.concat(flatten(element));
    }
  });
  return result;
}

// es6 attempt

function flatten(arr) {
  let result = [];
  arr.forEach((el) => {
    if (!Array.isArray(el)) {
      result.push(el);
    } else {
      result = [...result, ...flatten(el)]; // yes, this is fine
    }
  });
  return result;
}

var flatten = function(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i]);
    } else {
      result = [...result, ...flatten(arr[i])];
    }
  }
  return result;
}