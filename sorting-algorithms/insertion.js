/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/

var insertionSort = function(array, comparator) {
  comparator = comparator || defaultComparator;

  // start at 1 because sublist of array[0] is already sorted
  for (var i = 1; i < array.length; i++) {
    var value = array[i];
    var compareIndex = i - 1;
    // swap with left element while < value
    while (compareIndex > -1 && comparator(array[compareIndex], value) > 0) {
      // if value is greater than the num before it in array, swap it
      // then 
      array = swap(array, compareIndex, i);
      i = compareIndex;
      compareIndex--;
    }
  }
  return array;
}

function defaultComparator(a, b) {
  if (a < b) return -1; // a comes first
  else if (a > b) return 1; // b comes first
  return 0;
}

function swap (arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}


// okay, here's a simpler version since that isn't clicking for me right now

function insertionSort(array) {
  var length = array.length;
  
  for(var i = 1; i < length; i++) {
    // for length, starting at 0
    var temp = array[i]; // get temp value of array
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
      // going backwards from i
      // if new is greater than temp
      // set next element to current. scootches everything over 1
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  
  return array;
}

// function insertionSort(array) 
  // Loop through array
    //Create temp var for current element
    //Create var and set equal to previous element's index
    //Loop backwards while index >= 0 and current element > temp var
      //Set next element equal to current element
    //Set next element equal to temp 