// 1. Function Defination
    //A function is a reusable block of code designed to perform a specific task. You define it once and can call (execute) it as many times as needed.

// 🔹 2. Function Declaration vs Function Expression
// Difference: Function declarations are hoisted (they can be called before they are defined), whereas function expressions are not hoisted.

    // ✅ Function Declaration
function greet() {
    console.log("Hello!");
}
greet(); // Output: Hello!

    // ✅ Function Expression
const greet = function() {
    console.log("Hello!");
};
greet();

// 🔹 3. Parameters and Arguments
    // - Parameters are the variables listed in the function definition.

    // - Arguments are the actual values passed to the function.

function add(a, b) { // a and b are parameters
    return a + b;
}
console.log(add(5, 3)); // 5 and 3 are arguments => Output: 8

// 🔹 4. Return Statement
    // The return statement ends function execution and specifies the value to be returned.

function multiply(x, y) {
    return x * y;
}
let result = multiply(4, 5); // result = 20

// 🔹 5. Arrow Functions (ES6+)
    // Arrow functions provide a shorter syntax.
    // If the function body has only one expression, braces {} and return can be omitted.
    // Arrow functions do not bind their own this.

// Traditional
function square(x) {
    return x * x;
}

// Arrow function
const square = (x) => x * x;
console.log(square(6)); // Output: 36

// 🔹 6. Anonymous Functions
    // A function without a name, often used in expressions or callbacks.
setTimeout(function() {
    console.log("Executed after 2 seconds");
}, 2000);

// 🔹 7. Callback Functions
    // Functions passed as arguments to other functions.

function greet(name, callback) {
    console.log("Hi " + name);
    callback();
}

function callMe() {
    console.log("I am a callback function");
}

greet("Anchal", callMe);
// Output: Hi Anchal
// I am a callback function

// 🔹 8. Functions as First-Class Citizens
    // Functions can be assigned to variables, passed as arguments, or returned from other functions.function treated like any other data type.
function greet() {
    return function() {
        console.log("Hi from returned function!");
    };
}

let fn = greet();
fn(); // Output: Hi from returned function!
// 🔹 9. IIFE (Immediately Invoked Function Expression)
    // A function that runs as soon as it is defined.
    // Useful for creating a private scope.
(function() {
    console.log("IIFE executed immediately!");
}
)(); // Output: IIFE executed immediately!  

// 🔹 10. Rest Parameters and Default Parameters
    // Rest Parameters:
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
    // Default Parameters:
function sayHi(name = "Guest") {
    console.log("Hi " + name);
}
sayHi(); // Output: Hi Guest

// 🔹 11. Recursive Functions
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// 🔹 12. Named vs Anonymous Functions
    // Named functions have a name and can be called recursively.
    // Anonymous functions are often used as callbacks or in functional programming.
// Named
function sayHello() {}

// Anonymous
const sayHi = function() {};
