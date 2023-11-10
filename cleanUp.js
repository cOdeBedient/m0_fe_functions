// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
  // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName(){
  return ("Hello, what is your name?")
}
console.log(askForName())
// I reformatted this, and I used 'return' instead of consol.log
// in the function as this is best practice I believe.

// EX 2:
function addThreeNums(num1, num2, num3) {
var sum = num1 + num2 + num3
return sum;
      }

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));
// I cahnged the parameter names to be more descriptive, and added 'console.log()'
// statements at the end so the sums actually print.



// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();
// I reformatted a little and changed 'func' to 'function'.


//  EX 4:
function average(num1, num2){
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg;
  }

console.log(average(5, 7))
  // I reformatted some and added a console.log statement.