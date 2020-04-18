// ブロックスコープ

// ES5
if (true) {
  var value1 = 'my_value';
}

function myFunc() {
  var value2 = 'your_value';
}

// console.log(value1);
// console.log(value2);  // ReferenceError: value2 is not defined

// ES2015
// let という宣言が追加された。functionの中での宣言と同様の挙動になる。

if(true) {
  let value01 = "test";
}

function myFunc01 () {
  var value02 = "doing test";
}

//console.log(value01);  // ReferenceError: value01 is not defined
console.log(value02);     // ReferenceError: value02 is not defined
