// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting(){
    var hi = "Ahoy there!";
    return hi;
}
console.log(greeting())

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name){
    var hiSpecific = `Ahoy, ${name}!`;
    return hiSpecific;
}
console.log(customGreeting(`Jennifer Aniston`));
console.log(customGreeting(`Chad`));


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(firstName, middleName, lastName){
    var positiveWords = `Keep up the good work, ${firstName} ${middleName} ${lastName}!`;
    return positiveWords;
}
console.log(greetPerson("Adam", "Cooper", "Bedient"));
console.log(greetPerson("Jennifer", "Love", "Hewitt"));

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num){
    var squaredNum = num * num;
    return `The square of your numnber is ${squaredNum}.`;
}
console.log(square(3));
console.log(square(-5));

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(numInStock, item){
    if (numInStock > 3){
        var stocked = `${item} is stocked`;
        return stocked;
    } else if (numInStock >= 1){
        var low = `${item} - running LOW`;
        return low;
    } else {
        var out = `${item} - OUT of stock!`
        return out;
    }
}

console.log(checkStock(4, "Coffee"));
// => "Coffee is stocked"

console.log(checkStock(3, "Tortillas"));
// => "Tortillas - running LOW"

console.log(checkStock(0, "Cheese"));
// => "Cheese - OUT of stock!"

console.log(checkStock(1, "Salsa"));
// => "Salsa - running LOW"