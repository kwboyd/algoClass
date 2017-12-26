/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/

// attempt

var reverse = function(str) {
  var newString = '';
  var reverseStr = function(str) {
    if (str.length > 0) {
      newString += str.splice(-1); // KATE STOP TRYING TO SPLICE STRINGS
      reverseStr(str);      
    }
  }
  reverseStr(str);
  return newString;
}

// solution

function reverse(str) {
  if (str.length === 0) return '';
  return str[str.length-1] + reverse(str.substr(0,str.length-1));
  // if str length is 0, return empty string
  // otherwise, return last letter in string + run reverse with full string minus one
}

function reverse(str) {
  if (str.length === 0) return '';
  return str[str.length - 1] + reverse(str.substr(0, str.length - 1));
}