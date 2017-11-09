/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?



 */

 // from the slides exercise

var SlideStack = function() {
  this.storage = "";
  this.size = 0;
}

SlideStack.prototype.push = function(val) {
  this.storage = this.storage.concat("***", val);
  this.size++;
}

SlideStack.prototype.pop = function() {
  // slice off characters up until ***
  var lastDelim = this.storage.lastIndexOf('***');
  var str = this.storage.slice(lastDelim + 3);
  // update new stack without the last item
  this.storage = this.storage.substring(0, lastDelim);
  // return last item
  return str;
}

SlideStack.prototype.size = function() {
  console.log(this.size);
}

var myWeeklyMenu = new SlideStack();

myWeeklyMenu.push("RedBeans");


// the main exercise

function Stack(capacity) {
  // implement me...
  this.capacity = capacity;
  this.storage = {};
  this.size = 0;
}

Stack.prototype.push = function(value) {
  // implement me...
  if (this.size < capacity) {
    this.storage[this.size] = value;
    this.size++;
  }
};
// Time complexity:

Stack.prototype.pop = function() {
  // implement me...
  this.storage[this.size] = null;
  this.size--;
};
// Time complexity:

Stack.prototype.peek = function() {
  // implement me...
  console.log(this.storage[this.size]);
};
// Time complexity:

Stack.prototype.count = function() {
  // implement me...
  console.log(this.size);
};
// Time complexity:


/*
*** Exercises:

1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

2. Sort a stack so that its elements are in ascending order.

3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */
