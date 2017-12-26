/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/


var bubbleSort = function(array) {
  var wall = array.length; // first sorted element
  while (wall >= 0) {
    // if next value is less than current, swap
    // can do this as two loops
    for (var i = 0; i < wall; i++) {
      if (array[i] > array[i+1]) {
        array = swap(array, i, i+1);
      }
    }
    wall--;
  }
  return array;
}

var swap = function(array, i1, i2) {
  // this is a bitwise swap
  // works with integer elements only
  // xor of two nums returns a number which has all bits as 1 where bits of the numbers differ
  // x = 10 is 1010, y = 5 is 0101, xor is 1111
  // y = x ^ y (x becomes 15 (1111))
  // x = x ^ y (y becomes 10 (1010))
  // x = x ^ y (x becomes 5 (0101))
  arr[i1] = arr[i1]^arr[i2];
  arr[i2] = arr[i1]^arr[i2];
  arr[i1] = arr[i1]^arr[i2];
  return arr;
}


// bubble swap again

var bubbleSort = function(arr) {
  let wall = arr.length;
  while (wall >= 0) {
    for (let i = 0; i < wall; i++) {
      if (arr[i] > arr[i+1]) {
        arr = swap(arr, i, i + 1);
      }
    }
    wall--;
  }
}

var swap = function(arr, i1, i2) {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}