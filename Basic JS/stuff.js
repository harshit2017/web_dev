// stuff.js

var counter = function(arr) {
    return 'Length of Array is ' + arr.length + ' .';
};

// OR

// module.exports.counter = function(arr) {
//     return 'Length of Array is ' + arr.length + ' .';
// };

var adder = function(a, b) {
    return `The sum of 2 numbers is ${a+b}.`;
    // string is called template strings
    //back ticks allow us to embed variables without concatenation.'$' specifies which varibles to embed. 
};

var pi = 3.142;

// module.exports is an empty object
//we can add properties

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// OR

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};