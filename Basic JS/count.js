// count.js

var counter = function(arr) {
    return 'Length of Array is ' + arr.length + ' .';
};


// console.log(counter(['hello', 'how', 'hey']));

//modules in java is = several separate javaScript files
//if counter() needs to be used in different js file i need to explicitly mention using module.exports

module.exports = counter;
