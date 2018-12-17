// app.js

//if counter of diff module needs to be  use we will use require keyword
//we don't need to require('require') bcos it is available on the global scope

// var cls = require('./count');
//here cls is the reference to the function counter present in code.js

var stuff = require('./stuff');

// console.log(cls(['hello', 'how', 'hey']));

console.log(stuff.counter(['hello', 'how', 'hey']));
console.log(stuff.adder(3, 4));
console.log(stuff.pi);