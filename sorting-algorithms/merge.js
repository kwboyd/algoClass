/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/

// recursive

function mergeSortRecursive (array) {
  // base case
  if (array.length <= 1) return array;

  // divide and conquer
  var leftHalf = array.slice(0, array.length/2);
  var rightHalf = array.slice(array.length/2);
  var leftSorted = mergeSortRecursive(leftHalf);
  var rightSorted = mergeSortRecursive(rightHalf);

  // merge subarrays
  return merge(leftSorted, rightSorted);
}

// iterative

function mergeSortIterative (array) {
  // create array of subarrays with each element
  var splitArr = array.map(function(element) { return [element]; });

  // while there is more than one subarray
  while (splitArr.length > 1) {
    var result = [];
    // merge adjacent
    for (var i = 0; i < splitArr.length; i+=2) {
      // for pairs merge
      if (splitArr[i+1]) result.push(merge(splitArr[i], splitArr[i+1]));
      // for last odd element, add to results
      else result.push(splitArr[i]);
    }
    // overwrite old splitArr
    splitArr = result;
  }
}

function merge(left, right) {
  var result = [], leftIndex = 0, rightIndex = 0;

  // while result not fully populated
  while (result.length < (left.length + right.length)) {
    // if all elements in left added, just add remaining right elements
    if (leftIndex === left.length) result = result.concat(right.slice(rightIndex));
    // if all elements in right have been added, add remaining left
    else if (rightIndex === right.length) result = result.concat(left.slice(leftIndex));
    // compare elements in subarrays and add lower of the two to result
    else if (left[leftIndex] <= right[rightIndex]) result.push(left[leftIndex++]);
    else result.push(right[rightIndex++]);
  }

  return result;
}