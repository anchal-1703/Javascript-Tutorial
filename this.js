// 1. is function invoked with new keyword

// 2. function use with call bind apply

// 3.obj.show

// 4. window

function x(){
    console.log(this); // window object in non-strict mode, undefined in strict mode
}
new x(); // this refers to the new object created by the constructor function

const obj ={name :'Anchal'};
const obj2 ={name :'Anchal2'};
const obj3 ={name :'Anchal3'};

function shownsme(obj){
    
    console.log('inside show',obj.name); 
}
    // traditional function call
shownsme(obj); // inside show Anchal

// using this

function show(x,y){
    
    console.log('inside show',this.name,x,y); 
}
show.call(obj,21,4) //call method - call the function with a specific value of this
show.apply(obj3,[1,2,3,4]) //apply method - call the function with a specific value of this and pass arguments as an array
const Fn = show.bind(obj2) //bind method - bind the function with a specific value of this and return a new function
Fn(23,5) // inside show Anchal2

// 3. obj.show

const obj4 ={name:1,greet(){
    console.log(this.name); // this refers to the object itself
}};
obj4.greet(); // 1

// 4. window

'use strict';
const obj5 = {fname:2,
sat(){
    console.log(this.fname); // this refers to the window object
}}

const a= obj5.sat();
// a.apply(obj.name); // undefined in non-strict mode, ReferenceError in strict mode

// 5. arrow function
const obj6 = {
    name: 'Anchal',
    show: () => {
        console.log(this.name); // this refers to the window object in arrow function
    }
};