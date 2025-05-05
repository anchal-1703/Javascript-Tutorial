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
    //  symbol is a unique and immutable primitive value
    //  that can be used as the key of an object property
    let sym = Symbol("unique"); // symbol
    console.log(sym); // Symbol(unique)
    
    // 1. Symbol is not a string
    console.log(typeof sym); // symbol
    // 2. Symbol is not a number    
    console.log(typeof sym === "number"); // false
    //  Two SYmbols with the same description are not equal
    let sym2 = Symbol("unique"); // symbol  
    console.log(sym === sym2); // false
    

    // 7. BigInt
    let bigInt = BigInt(123456789012345678901234567890); // bigInt
    console.log(bigInt); // 123456789012345678901234567890n

// 2. Reference Data Types
    // 1. Object
    let obj = { name: "John", age: 30 }; // object
    console.log(obj); // { name: 'John', age: 30 }
    let obj2 = new Object(); // object
    obj2.name = "John"; // object   
    obj2.age = 30; // object
    console.log(obj2); // { name: 'John', age: 30 }
    //  literal object
    let obj3 ={};
    obj3.name = "John"; // object
    obj3.age = 30; // object
    console.log(obj3); // { name: 'John', age: 30 }
    // keyName is a string and value is a number
    let keyName = "age"; // string
    let value = 30; // number
    let obj5 = {}; // object
    obj5[keyName] = value; // object
    console.log(obj5); // { age: 30 }
    // 1.1 Object with constructor
    let obj4 = new Object(); // object
    obj4.name = "John"; // object
    obj4.age = 30; // object
    console.log(obj4); // { name: 'John', age: 30 }

    

    // 2. Array
    let arr = [1, 2, 3, 4, 5]; // array
    console.log(arr); // [ 1, 2, 3, 4, 5 ]
    // 3. Function
    function greet() {
        console.log("Hello!"); // function
    }
    greet(); // Hello!

// conversions of datatypes
// For Numbers
    // 1. floar to int
    let num1 = 10.5; // float 
    let num2 = Math.floor(num1); // int
    console.log(num2); // 10
    // or
    num2 = parseInt(num1); // int
    console.log(num2); // 10
    //  or
    num2 = Math.ceil(num1); // int
    console.log(num2); // 11
    //  or
    num2 = Math.round(num1); // int
    console.log(num2); // 11
    // or

    // 2. int to float
    let num3 = 10; // int
    let num4 = parseFloat(num3); // float   

    // 3. Number to String
    let numToStr = String(num); // number to string
    console.log(numToStr); // "10"

    // 4. Number to Boolean
    let numToBool = Boolean(num); // number to boolean
    console.log(numToBool); // true

// For Strings
    // 5. String to Number
    let strToNum = Number(str); // string to number
    console.log(strToNum); // NaN

    // 6. String to Boolean
    let strToBool = Boolean(str); // string to boolean
    console.log(strToBool); // true

// For Booleans
    // 7. Boolean to String
    let boolToStr = String(isTrue); // boolean to string
    console.log(boolToStr); // "true"
    
    // 8. Boolean to Number
    let boolToNum = Number(isTrue); // boolean to number
    console.log(boolToNum); // 1

// For BigInt
//  we can not perform any operation on BigInt and Number together
//  because it will throw an error

    // 9. BigInt to Number
    let bigIntToNum = Number(bigInt); // bigInt to number
    console.log(bigIntToNum); // 123456789012345678901234567890n

//  we can perform operation on BigInt and String together
//  but it will convert the BigInt to String and perform the operation
//  and return the result as String

    // 10. BigInt to String
    let bigIntToStr = String(bigInt); // bigInt to string
    console.log(bigIntToStr); // "123456789012345678901234567890n"

//  we can perform operation on BigInt and Boolean together
//  but it will convert the BigInt to Number and perform the operation
//  and return the result as Number 

    // 11. BigInt to Boolean
    let bigIntToBool = Boolean(bigInt); // bigInt to boolean
    console.log(bigIntToBool); // true
   