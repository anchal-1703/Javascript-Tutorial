// var filename= "app.js" // global variable
// console.log("explicit.js" , filename);
// filename= "app2.js" // overwrite global variable even if another file

//there are 3 ways to define variables in javascript
// 1. var - function scope (old way)
    // it will store the variable in the global scope i.e window object(browser environment) if it is not inside a function for example
var name = "Anchal";
console.log(window.name); // Anchal
// 2. let - block scope (new way)
    // it will store the variable in the block scope i.e inside the function or inside the block of code i.e locally for example
let name2 = "Anchal2";
console.log(window.name2); // undefined because it is not in the global scope
// 3. const - block scope (new way) - cannot be reassigned
const name3 = "Anchal3";
console.log(window.name3); // undefined

var arj = "hsan";
function show(){
    if(true){
        const constantn = "Anchal3"; // block scope
        var name = "Anchal4"; // function scope
        let abns = "Anchal5"; // block scope
    }
    
    console.log(name); // Anchal4
    console.log(abns); // ReferenceError: abns is not defined
}
show();


