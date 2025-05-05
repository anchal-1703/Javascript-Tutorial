// types of datatype 
// 1. Primitive Data Types
    // 1. Number
    let num = 10; // number
    console.log(num); // 10 
    // 2. String
    let str = "Hello World"; // string
    console.log(str); // Hello World
    // 3. Boolean
    let isTrue = true; // boolean
    console.log(isTrue); // true
    // 4. Undefined
    let und; // undefined
    console.log(und); // undefined
    // 5. Null
    let nul = null; // null
    console.log(nul); // null
    // 6. Symbol
    let sym = Symbol("unique"); // symbol
    console.log(sym); // Symbol(unique)
    // 7. BigInt
    let bigInt = BigInt(123456789012345678901234567890); // bigInt
    console.log(bigInt); // 123456789012345678901234567890n

// 2. Reference Data Types
    // 1. Object
    let obj = { name: "John", age: 30 }; // object
    console.log(obj); // { name: 'John', age: 30 }
    // 2. Array
    let arr = [1, 2, 3, 4, 5]; // array
    console.log(arr); // [ 1, 2, 3, 4, 5 ]
    // 3. Function
    function greet() {
        console.log("Hello!"); // function
    }
    greet(); // Hello!

// conversions of datatypes
    // 1. Number to String
    let numToStr = String(num); // number to string
    console.log(numToStr); // "10"
    // 2. String to Number
    let strToNum = Number(str); // string to number
    console.log(strToNum); // NaN
    // 3. Boolean to String
    let boolToStr = String(isTrue); // boolean to string
    console.log(boolToStr); // "true"
    // 4. String to Boolean
    let strToBool = Boolean(str); // string to boolean
    console.log(strToBool); // true
    // 5. Number to Boolean
    let numToBool = Boolean(num); // number to boolean
    console.log(numToBool); // true
    // 6. Boolean to Number
    let boolToNum = Number(isTrue); // boolean to number
    console.log(boolToNum); // 1
    // 7. Object to String
    let objToStr = String(obj); // object to string
    console.log(objToStr); // "[object Object]"
    // 8. String to Object
    let strToObj = JSON.parse(JSON.stringify(obj)); // string to object
    console.log(strToObj); // { name: 'John', age: 30 }
    // 9. Array to String
    let arrToStr = String(arr); // array to string
    console.log(arrToStr); // "1,2,3,4,5"
    // 10. String to Array
    let strToArr = JSON.parse(JSON.stringify(arr)); // string to array

