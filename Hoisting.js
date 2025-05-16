// show()
var show = 90;
show = function show() {}
console.log(show); // undefine

function counter() {
  var count = 0;
  return function (){count++;
    console.log(count);
  }
}
var c = counter();
c()
console.log(counter()); // 0
