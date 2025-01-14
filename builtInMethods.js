// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The includes() method is called on the string "Hello World"
// With the argument "Hello", includes() is determining whether the string "Hello World" includes the string "Hello".
// The return value is true
"Hello World".includes("Hello");

// The endsWith() method is called on the string "Hello World"
// With the argument "Hello", endsWith() is determining whether the string "Hello World" ends with the string "Hello".
// The return value is false
"Hello World".endsWith("Hello");

// The endsWith() method is called on the string "Hello World"
// With the argument "rld", endsWith() is determining whether the string "Hello World" ends with the string "rld".
// The return value is true
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The trim() method is called on the saxPlayer variable, which stores the string object "     Pigeon Man  ". 
// The trim() method removes whitespace before and after the string, and returns a new string without whitespace.
// In this example, the return value is "Pigeon Man".
// The console.log() statement prints the return value of the trim() method to the console.
var saxPlayer = "     Pigeon Man  ";
console.log(saxPlayer.trim());

// (this may have been a mistake!)
// The split() method is called on the weirdWords variable, which stores the string object "1 + 2 + 3 + 4 + 5 + 6 + 7". 
// Given the argument plus, a variable defined as the string " + ", The split(" + ") method searches for the occurrance of
// the argument " + " within weirdWords, returning an array made up of the strings broken up by instances of the argument. 
// In this example, the return value is "["1", "2", "3", "4", "5", "6", "7"]".
// The console.log() statement prints the return value of the trim() method to the console.
var weirdWords = "1 + 2 + 3 + 4 + 5 + 6 + 7";
var plus = weirdWords.split(' + ');
console.log(plus);


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// The fill() method is called on the nums variable, which stores the array [1, 3, 5, 4, 7, 7]. 
// Given the argument '9, 1, 3', fill() replaces the elements in nums from index position 1 to
// index position 3 (not including 3) with 9 and returns the new array.
// In this example, the return value is [1, 9, 9, 4, 7, 7].
// The console.log() statement prints the return value of the fill() method to the console.
var nums = [1, 3, 5, 4, 7, 7];
var full = nums.fill(9, 1, 3);
console.log(full);

// The copyWithin() method is called on the veggies variable,
// which stores the array ["broccoli", "squash", "potatoes", "rutebega"]. 
// Given the argument '3, 0', copyWithin replaces the element at index 3 with the element at index 0,
// and returns our new variable, greenEnd, which is assigned to [ 'broccoli', 'squash', 'potatoes', 'broccoli' ].
// The console.log() statement prints the return value of the copyWithin() method to the console.
var veggies = ["broccoli", "squash", "potatoes", "rutebega"];
var greenEnd = veggies.copyWithin(3, 0);
console.log(greenEnd);
