// const obj ={
//     name :'Anchal',
//     age : 21,
//     show(){
//        console.log(this.name); // this refers to the object itself
//     },
// }
// const obj1 ={
//     name :'Anchal',
//     age : 21,
//     show(){
//        console.log(this.name); // this refers to the object itself
//     },
// }
// const obj2 ={
//     name :'Anchal',
//     age : 21,
//     show(){
//        console.log(this.name); // this refers to the object itself
//     },
// }

// optimized code = `// 1. is function invoked with new keyword


// function createStu(name,age){
//     obj = {}
//     obj.name = name;
//     obj.age = age;
//     obj.checkage =  function (){    
//     if(obj.age > 18){
//         console.log('Adult');
//     }
// }
//     return obj;
// }

// const obj3 = new createStu('Anchal',21);
// const obj1 = new createStu('Anchal',21);    
// const obj2 = new createStu('Anchal',21);
// obj1.checkage(); // Adult


// what if i want to check age every time a new obj created new function will be created and instead of creating new function we can use prototype to create a single function and use it for all the objects created from the constructor function.


function createStu(name,age){
    obj = {}
    obj.name = name;
    obj.age = age;
    return obj;
}

const studenttast {
    checkage : function (){    
        if(this.age > 18){
            console.log('Adult');
        }
    }
}