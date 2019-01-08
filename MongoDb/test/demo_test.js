//const mocha = require('mocha');we dont require mocha for using mocha
const assert = require('assert');

//describe our test in callback function we create our test
describe('some demo test', function () {
    //Create tests

    it('add two numbers together', function () {
        assert(2 + 3 == 5);// we expect some output
    });
})