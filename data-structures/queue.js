/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */

 // my initial attempt

function FirstQueue(capacity) {
  // implement me...
  this.capacity = capacity;
  this.size = 0;
  this.storage = {};
}

FirstQueue.prototype.enqueue = function(value) {
  // implement me...
  if (this.size < this.capacity) {
    this.storage[this.size] = value;
    this.size++;
  }
};
// Time complexity:

FirstQueue.prototype.dequeue = function() {
  // implement me...
  for (let i = 0; i < this.size - 1; i++) {
    this.storage[this.size] = this.storage[this.size + 1]
  }
  this.storage[this.size] = null;
  this.size--;  
};
// Time complexity:

FirstQueue.prototype.peek = function() {
  // implement me...
  console.log(this.storage[this.size]);
};

FirstQueue.prototype.count = function() {
  // implement me...
  console.log(this.size);
};
// Time complexity:


// with the solution

function Queue(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._head = 0;
  this._tail = 0;
}

Queue.prototype.enqueue = function(value) {
  if (this.count() < this._capacity) {
    this._storage[this._tail++] = value;
    return this.count();
  }
  return 'Whoops max reached.'
}

Queue.prototype.dequeue = function() {
  var element = this._storage[this._head];
  delete this._storage[this._head];
  if (this._head < this._tail) this._head++;
  return element;
}

Queue.prototype.peek = function() {
  return this._storage[this._head];
}

Queue.prototype.count = function() {
  return this._tail - this._head;
}


/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */

 // exercise 1 attempt: queue with two stacks

 function Stack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

Stack.prototype.push = function(value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Whoops capacity already reached.'
}

Stack.prototype.pop = function() {
  var value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
}

Stack.prototype.peek = function() {
  return this._storage[this._count-1];
}

// thinking through this
// stack is LIFO
// queue is FIFO
// stack for in and stack for out

// push 1 onto out stack
// in: 
// out: 1

// to push 2:
// transfer 1 from out to in
// in: 1
// in 2 onto out
// out: 2
// transfer 1 from in to out
// in: 
// out: 2, 1

// to push 3:
// transfer 1 from out to in
// transfer 2 from out to in
// push 3 onto out
// transfer 2 from in to out
// transfer 1 from in to out
// in: 
// out: 3, 2, 1

// to pop:
// pop 1 from out stack

function StackQueue(capacity) {
  this.capacity = capacity || Infinity;
  this._inStack = new Stack();
  this._outStack = new Stack();
}

StackQueue.prototype.push = function (value) {
  if (this._outStack.count() === 0) {
    this._outStack.push(value);
  } else {
    while (this._outStack.count() > 0) {
      this.transferToIn();
    }
    this._outStack.push(value);
    while(this._inStack.count() > 0) {
      this.transferToOut();
    }
  }
}

StackQueue.prototype.transferToIn = function() {
  let transfer = this._outStack.peek();
  this._inStack.push(transfer);
  this._outStack.pop();
}

StackQueue.prototype.transferToOut = function() {
  let transfer = this._inStack.peek();
  this._outStack.push(transfer);
  this._inStack.pop();
}

StackQueue.prototype.pop = function() {
  this._outStack.pop();
}

StackQueue.prototype.count = function() {
  return this._outStack.count();
}

StackQueue.prototype.peek = function() {
  return this._outStack.peek();
}

// exercise 1 solution
function Queue_TwoStacks() {
  this._stackIn = new Stack();
  this._stackOut = new Stack();
}

Queue_TwoStacks.prototype.enqueue = function(val) {
  this._stackIn.push(val);
};

Queue_TwoStacks.prototype._transferStacks = function() {
  while (this._stackIn.count() > 0) {
    this._stackOut.push(this._stackIn.pop());
  }
};

Queue_TwoStacks.prototype.dequeue = function() {
  if (this._stackOut.count() === 0) this._transferStacks();
  return this._stackOut.pop();
};

Queue_TwoStacks.prototype.count = function() {
  return this._stackIn.count() + this._stackOut.count();
};

Queue_TwoStacks.prototype.peek = function() {
  if (this._stackOut.count() === 0) this._transferStacks();
  return this._stackOut.peek();
};


// end exercise 1

// exercise 2 attempt: Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

// thinking through
// can use a loop to scoot every value over when enqueueLeft but the time complexity is bad
// can the head be a negative number? why not?

function DoubleQueue(capacity) {
  this._capacity = capacity || Infinity;
  this._head = 0;
  this._tail = 0;
  this._storage = {};
}

DoubleQueue.prototype.enqueueLeft = function(value) {
  if (this.count() >= this._capacity) {
    return 'Capacity reached';
  } else {
    this._storage[--this._head] = value;
  }
}

DoubleQueue.prototype.dequeueLeft = function() {
  delete this._storage[this._head];
  if (this._head < this._tail) this._head++;
}

DoubleQueue.prototype.enqueueRight = function(value) {
  if (this.count() >= this._capacity) {
    return 'Capacity reached';
  } else {
    this._storage[++this._tail] = value;
  }
}

DoubleQueue.prototype.dequeueRight = function() {
  delete this._storage[this._tail];
  if (this._head < this._tail) this._tail--;
}

DoubleQueue.prototype.count = function() {
  return this._head - this._tail;
}