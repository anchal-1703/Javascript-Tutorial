// currying is used to transform a function that takes multiple arguments into a sequence of functions that each take a single argument

// currying uses closures to remember the arguments passed to it 



// Why use currying instead of normal functions?
    

// -Partial application: 

// Normal function
function greet(name, greeting) {
    return `${greeting}, ${name}!`;
}

// Using currying
const greet = (name) => (greeting) => `${greeting}, ${name}!`;

const sayhello = greet("hello")
sayhello("anchal") // Output: hello, anchal!
sayhello("john") // Output: hello, john!

// -Function composition:
const multiply = a => b => a * b;
const double = multiply(2);
console.log(double(10)); // 20

// ✅ 4. Improved Readability and Intent
sendEmail("admin", "Hello", "Please approve request");

const sendToAdmin = sendEmail("admin");
const sendApprovalEmail = sendToAdmin("Please approve request");


// When not to use currying?


// - When the function takes a large number of arguments
const add = (a, b, c, d, e) => a + b + c + d + e; // not suitable for currying

// Better to use a normal function in this case
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

// 🚫 1. Performance-Critical Code
// Avoid This
const add2 = a => b => a + b;

for (let i = 0; i < 1_000_000; i++) {
  add(2)(i); // creating 1 million inner functions
}

// Better
function add(a, b) {
  return a + b;
}

for (let i = 0; i < 1_000_000; i++) {
  add(2, i); // no extra closures created
}

// 🚫 2. When Arguments Are Dynamic or Unknown
// Avoid This
const log = level => message => console.log(`[${level}] ${message}`);

const inputs = ["info", "App started", "error", "Crash detected"];
// Not easy to loop through and apply curried function

// Better
function log(level, message) {
  console.log(`[${level}] ${message}`);
}
inputs.forEach((input, index) => {
  if (index % 2 === 0) {
    log(input, inputs[index + 1]);
  }
}
)
// 🚫 3. Reduced Readability in Team Projects
// Avoid This
const apiRequest = method => endpoint => data => fetch(endpoint, { method, body: JSON.stringify(data) });

// Straightforward
function apiRequest(method, endpoint, data) {
  return fetch(endpoint, { method, body: JSON.stringify(data) });
}



