// Closures in JavaScript are a fundamental concept where an inner function has access to variables defined in its outer (enclosing) function even after the outer function has finished executing.
// A closure is created when a function is defined inside another function, and the inner function remembers the variables from its outer local scope. e.g



let x = 10; // global variable
function outerFunction() {
    let y = 20; // outer variable

    function innerFunction() {
        console.log(x + y); // Accessing global and outer variable
    }

    console.dir(innerFunction); // Returning inner function

}
outerFunction(); // [Function: innerFunction]


// closure are often used to create private variables and functions, as well as to maintain state in asynchronous programming. i.e. Closures allow data privacy and encapsulation.

// eg in this function user can see the private variable but cannot modify it directly during function call.
function show(){
let name = "John Doe"; // private variable
 return{
    show: function(){
        console.log(name); // Accessing private variable
    },
    setName: function(newName){
        name = newName; // Modifying private variable
    }
 }
}
let user = show(); // Creating closure
user.show(); // John Doe
user.setName("Jane anchal"); // Modifying private variable
user.show(); // Jane anchal

// A function that "remembers" variables from its outer scope.
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1
counter(); // 2



